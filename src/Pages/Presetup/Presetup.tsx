import { Card, Container, Tabs, rem } from "@mantine/core";
import { DashboardLayout } from "../../components";
import { IconMapPin, IconUserCircle, IconReplace } from "@tabler/icons-react";

import "./presetup.css";
import { LocationSetup } from "..";

const Presetup = () => {
  const iconStyle = { width: rem(15), height: rem(15) };
  return (
    <>
      <DashboardLayout>
        <Container>
          <Tabs
            //variant="outline"
            color="lime"
            defaultValue="Profile"
            radius={5}
            style={{ marginTop: 20 }}
          >
            <Card radius={10} style={{ paddingTop: 10 }}>
              <Tabs.List>
                <Tabs.Tab
                  value="Location"
                  leftSection={<IconMapPin style={iconStyle} />}
                >
                  Location Setup
                </Tabs.Tab>
                <Tabs.Tab
                  value="Department(s)"
                  leftSection={<IconReplace style={iconStyle} />}
                >
                  Department(s)
                </Tabs.Tab>
                <Tabs.Tab
                  value="Education"
                  leftSection={<IconUserCircle style={iconStyle} />}
                >
                  Education
                </Tabs.Tab>
                <Tabs.Tab
                  value="Report Chains"
                  leftSection={<IconUserCircle style={iconStyle} />}
                >
                  Report Chains
                </Tabs.Tab>
              </Tabs.List>
            </Card>

            <div style={{ marginTop: 10, padding: 5 }}>
              <Tabs.Panel value="Location" pt="xs">
                <LocationSetup />
              </Tabs.Panel>

              <Tabs.Panel value="Department(s)" pt="xs">
                Settings tab content
              </Tabs.Panel>
            </div>
          </Tabs>
        </Container>
      </DashboardLayout>
    </>
  );
};

export default Presetup;
