import {
  AppShell,
  Burger,
  Group,
  ScrollArea,
  rem as _,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconGauge, IconSettings } from "@tabler/icons-react";

import { LinksGroup } from "../../utils/LinkGroup";
import "./_dashboardLayout.css";

console.log(_);

const navLinks = [
  { label: "Dashboard", icon: IconGauge, linked: "/dashboard" },

  {
    label: "Pre-Setup",
    icon: IconSettings,
    linked: "/presetup",
  },
];

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [opened, { toggle }] = useDisclosure();

  const links = navLinks.map((item) => (
    <>
      <LinksGroup
        {...item}
        linked={item.linked}
        icon={item.icon}
        label={item.label}
      />
    </>
  ));
  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Image
              src="https://i.ibb.co/ZgNdCXJ/logo.png"
              width={45}
              height={40}
            />
          </Group>
        </AppShell.Header>

        <AppShell.Navbar p="md">
          <nav className="navbar">
            <div className="header">
              <Group justify="space-between"></Group>
            </div>

            <ScrollArea className="links">
              <div className="linksInner">{links}</div>
            </ScrollArea>

            <div className="footer">{/* ??   <UserButton /> */}</div>
          </nav>
        </AppShell.Navbar>
        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </>
  );
};

export default DashboardLayout;
