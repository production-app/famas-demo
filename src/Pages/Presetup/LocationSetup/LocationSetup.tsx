import {
  Card,
  Space,
  Modal,
  Button,
  TextInput,
  Group,
  ActionIcon,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Table, message } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { IconEdit, IconTrash } from "@tabler/icons-react";

let originData: any;

const LocationSetup = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState("");
  const [modalValue, setModalValue] = useState("");
  const [modalID, setModalID] = useState("");
  const [modalState, setModalState] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  const columns = [
    {
      title: "Label",
      dataIndex: "locationName",
      key: "locationName",
      width: 700,
    },
    {
      title: "Action(s)",
      dataIndex: "uuid",
      key: "uuid",
      render: (items: any, record: any) => {
        console.log(record.uuid);
        return (
          <>
            <Group>
              <ActionIcon
                variant="subtle"
                component="button"
                color="lime"
                onClick={async () => {
                  fetch(
                    `http://localhost:9001/v1/get-single-location/${record.uuid}`
                  )
                    .then((res) => res.json())
                    .then((res: any) => {
                      const { uuid, locationName } = res.data;
                      setModalValue(locationName);
                      setModalID(uuid);
                      setModalState(true);
                    });
                  open();
                }}
              >
                <IconEdit />
              </ActionIcon>
              <ActionIcon
                variant="subtle"
                component="button"
                color="red"
                onClick={async () => {
                  axios
                    .delete(
                      `http://localhost:9001/v1/delete-location/${record.uuid}`
                    )
                    .then(() => {
                      getAllLocation();
                      message.success("Item Deleted !");
                    });
                }}
              >
                <IconTrash />
              </ActionIcon>
            </Group>
          </>
        );
      },
    },
  ];

  const getAllLocation = () => {
    originData = [];

    //setLoading(true);

    fetch(`http://localhost:9001/v1/get-location`)
      .then((res) => res.json())
      .then((res) => {
        //setLoading(true);
        originData = [];
        res.data.forEach((value: any, index: any) => {
          console.log(index);
          originData.push({
            locationName: value.locationName,
            id: value.id,
            uuid: value.uuid,
          });
        });
        setDataSource(originData);
      })
      .finally(() => {
        // setLoading(false);
      });
  };

  useEffect(() => {
    getAllLocation();
  }, []);

  return (
    <>
      <Modal opened={opened} onClose={close}>
        {/* Modal content */}
        <Group style={{ padding: 5 }}>
          {!modalState ? (
            <TextInput
              label="Add Location"
              placeholder="Location"
              radius={5}
              value={value || modalValue}
              onChange={(event) => setValue(event.currentTarget.value)}
            />
          ) : (
            <TextInput
              label="Add Location"
              placeholder="Location"
              radius={5}
              value={modalValue}
              onChange={(event) => setModalValue(event.currentTarget.value)}
            />
          )}
          {!modalState ? (
            <Button
              style={{ marginBottom: -23 }}
              onClick={async () => {
                await axios
                  .post("http://localhost:9001/v1/create-location", {
                    locationName: value,
                  })
                  .then(async () => {
                    close(), getAllLocation();
                    setValue("");
                    ///update-location/
                  });
              }}
            >
              Submit
            </Button>
          ) : (
            <Button
              style={{ marginBottom: -23 }}
              color="lime"
              onClick={async () => {
                await axios
                  .put(`http://localhost:9001/v1/update-location/${modalID}`, {
                    locationName: modalValue,
                  })
                  .then(async () => {
                    close(), getAllLocation(), setModalValue("");
                    ///update-location/
                    setModalState(false);
                  });
              }}
            >
              Update
            </Button>
          )}
        </Group>
      </Modal>

      <Card>
        <div style={{ display: "flex" }}>
          <Space w={800} mt={20} />
          <Button onClick={open}>Add</Button>
        </div>
        <Table
          columns={columns}
          bordered
          style={{ marginTop: 10 }}
          dataSource={dataSource}
        />
      </Card>
    </>
  );
};

export default LocationSetup;
