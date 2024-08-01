import cx from "clsx";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import {
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  Tabs,
  Burger,
  rem,
  useMantineTheme,
  MultiSelect,
  Autocomplete,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconLogout,
  IconHeart,
  IconStar,
  IconMessage,
  IconSettings,
  IconPlayerPause,
  IconTrash,
  IconSwitchHorizontal,
  IconChevronDown,
  IconHelp,
  IconStatusChange,
  IconPassword,
  IconLanguage,
  IconPasswordFingerprint,
  IconPasswordUser,
} from "@tabler/icons-react";

import classes from "./HeaderTabs.module.css";

const user = {
  name: "Bimarsha Basyal",
  email: "vimarsha.buddy@gmail.com",
  image: "",
};

const tabs = [
  "Home",
  "Pricing",
  "CV FORM",
  "Community",
  "Forums",
  "Support",
  "Account",
  "Helpdesk",
];

const NavBar = () => {
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab} key={tab}>
      {tab}
    </Tabs.Tab>
  ));
  const icon = <CiSearch style={{ width: rem(16), height: rem(16) }} />;
  return (
    <div className={`classes.header  `}>
      <Container className={`classes.mainSection `} size="md">
        <Group justify="space-between">
          {/* left section */}
          <Image src="/jobshop.jpg" width={100} height={80} alt="Job shop" />
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
          <Autocomplete
            aria-label="Search"
            size="lg"
            radius="xl"
            leftSection={icon}
            withScrollArea={true}
            width={500}
            placeholder="Search your job here..."
            data={[
              { group: "Full-Time", items: ["Waiter", "Chef"] },
              { group: "Part-Time", items: ["Kitchen Helper", "Dishwasher"] },
            ]}
            comboboxProps={{
              width: 250,
              position: "bottom-start",
              transitionProps: { transition: "pop", duration: 200 },
              shadow: "md",
            }}
          />
          <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: "pop-top-right" }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
          >
            <Menu.Target>
              <UnstyledButton
                className={cx(classes.user, {
                  [classes.userActive]: userMenuOpened,
                })}
              >
                <Group gap={7}>
                  <Avatar
                    src={user.image}
                    alt={user.name}
                    radius="xl"
                    size={20}
                  />
                  <Text fw={500} size="sm" lh={1} mr={3}>
                    {user.name}
                  </Text>
                  <IconChevronDown
                    style={{ width: rem(12), height: rem(12) }}
                    stroke={1.5}
                  />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Link href="/components/SignUp" passHref>
                <Menu.Item
                  component="a"
                  leftSection={
                    <IconHeart
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.red[6]}
                      stroke={1.5}
                    />
                  }
                >
                  Sign Up
                </Menu.Item>
              </Link>
              <Link href="/components/Login" passHref>
                <Menu.Item
                  component="a"
                  leftSection={
                    <IconStar
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.yellow[6]}
                      stroke={1.5}
                    />
                  }
                >
                  Log In
                </Menu.Item>
              </Link>
              <Menu.Item
                leftSection={
                  <IconMessage
                    style={{ width: rem(16), height: rem(16) }}
                    color={theme.colors.blue[6]}
                    stroke={1.5}
                  />
                }
              >
                Notification
              </Menu.Item>

              <Menu.Item
                leftSection={
                  <IconLanguage
                    style={{ width: rem(16), height: rem(16) }}
                    stroke={1.5}
                  />
                }
              >
                Language
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconPasswordUser
                    style={{ width: rem(16), height: rem(16) }}
                    stroke={1.5}
                  />
                }
              >
                Change Password
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconHelp
                    style={{ width: rem(16), height: rem(16) }}
                    stroke={1.5}
                  />
                }
              >
                Help Center
              </Menu.Item>

              <Menu.Divider />

              <Menu.Label>Settings</Menu.Label>
              <Menu.Item
                color="red"
                leftSection={
                  <IconLogout
                    style={{ width: rem(16), height: rem(16) }}
                    stroke={1.5}
                  />
                }
              >
                Log Out
              </Menu.Item>
              <Menu.Item
                color="red"
                leftSection={
                  <IconTrash
                    style={{ width: rem(16), height: rem(16) }}
                    stroke={1.5}
                  />
                }
              >
                Delete Account
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
      <Container size="md">
        <Tabs
          defaultValue="Home"
          variant="outline"
          visibleFrom="sm"
          classNames={{
            root: classes.tabs,
            list: classes.tabsList,
            tab: classes.tab,
          }}
        >
          <Tabs.List>{items}</Tabs.List>
        </Tabs>
      </Container>
    </div>
  );
};
export default NavBar;
