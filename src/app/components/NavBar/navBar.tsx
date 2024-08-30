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

const user1 = {
  name: "Login",
  email: "",
  image: "",
};
const user2 = {
  name: "Register",
  email: "",
  image: "",
};

const tabs = [];

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
    <div
      className={`classes.header  bg-[url('/job-shop.jpg')] bg-center  bg-[length:1270px_550px]  h-[22rem] w-auto  `}
    >
      <Container className={`classes.mainSection `} size="md">
        <Group justify="space-between ">
          {/* left section */}
          <Image src="/jobshop.png" width={100} height={80} alt="Job shop" />
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
          {/* <Autocomplete
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
          /> */}
          {/* right section */}

          <div>
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
                    {/* <Avatar
                      src={user1.image}
                      alt={user1.name}
                      radius="xl"
                      size={20}
                    /> */}
                    <Text fw={500} size="sm" lh={1} mr={3}>
                      {user1.name}
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

                  <Menu.Dropdown>
                    <Menu.Item>Company</Menu.Item>
                    <Menu.Item>Jobseeker</Menu.Item>
                  </Menu.Dropdown>
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
                    {/* <Avatar
                      src={user2.image}
                      alt={user2.name}
                      radius="xl"
                      size={20}
                    /> */}
                    <Text fw={500} size="sm" lh={1} mr={3}>
                      {user2.name}
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

                  <Menu.Dropdown>
                    <Menu.Item>Company</Menu.Item>
                    <Menu.Item>Jobseeker</Menu.Item>
                  </Menu.Dropdown>
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
          </div>
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
      <div
        className="absolute  lg:absolute md:absolute sm:absolute    w-[90%] lg:w-[60%] md:w-[60%] sm:w-[70%]
        left-0
        right-0
        top-40
      m-auto 
      z-20  justify-center "
      >
        <h1
          className="
            animate-text
            bg-gradient-to-r
            from-teal-500
            via-purple-500
            to-orange-500
            bg-clip-text
            text-transparent
            
            text-2xl
            lg:text-5xl
            md:text-4xl
            sm:text-3xl
            font-black  "
        >
          Transform your future with us!
        </h1>
        <Autocomplete
          aria-label="Search"
          size="lg"
          radius="xl"
          leftSection={icon}
          withScrollArea={true}
          width={700}
          placeholder="Search your job here..."
          data={[
            { group: "Full-Time", items: ["Waiter", "Chef"] },
            { group: "Part-Time", items: ["Kitchen Helper", "Dishwasher"] },
          ]}
          comboboxProps={{
            width: 250,
            position: "top-start",
            transitionProps: { transition: "pop", duration: 200 },
            shadow: "md",
          }}
        />
      </div>
    </div>
  );
};
export default NavBar;
