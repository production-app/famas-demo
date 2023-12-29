import { Card, Space, Modal, Button, TextInput, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Table } from "antd";

const LocationSetup = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const columns = [
    {
      title: "Label",
      dataIndex: "name",
      key: "name",
      width: 700,
    },
    {
      title: "Action(s)",
      dataIndex: "age",
      key: "age",
    },
  ];
  return (
    <>
      <Modal opened={opened} onClose={close}>
        {/* Modal content */}
        <Group style={{ padding: 5 }}>
          <TextInput
            label="Add Location"
            placeholder="Location"
            radius={5}
            //value={value}
            //onChange={(event) => setValue(event.currentTarget.value)}
          />

          <Button style={{ marginBottom: -23 }}>Submit</Button>
        </Group>
      </Modal>

      <Card>
        <div style={{ display: "flex" }}>
          <Space w={800} mt={20} />
          <Button onClick={open}>Add</Button>
        </div>
        <Table columns={columns} bordered style={{ marginTop: 10 }} />
      </Card>
    </>
  );
};

export default LocationSetup;
