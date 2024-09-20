import cx from "clsx";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Container,
  UnstyledButton,
  Group,
  Text,
  Menu,
  Tabs,
  rem,
  useMantineTheme,
} from "@mantine/core";

import {
  IconLogout,
  IconHeart,
  IconStar,
  IconMessage,
  IconTrash,
  IconChevronDown,
  IconHelp,
  IconLanguage,
  IconPasswordUser,
} from "@tabler/icons-react";

import classes from "./HeaderTabs.module.css";
import { setSearchTerm } from "@/app/job/redux/jobReducer";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

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

const NavBar = () => {
  //search logic
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.job.searchTerm);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  //mantine
  const theme = useMantineTheme();
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  return (
    <div
      className={`classes.header  bg-[url('/job-shop.jpg')] bg-center  bg-[length:1270px_550px]  h-[28rem] w-auto  `}
    >
      <Container className={`classes.mainSection `} size="md">
        <Group justify="space-between ">
          {/* left section */}
          <Image src="/jobshop.png" width={100} height={80} alt="Job shop" />

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
              <Menu.Dropdown hiddenFrom="xs">
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

                  <Menu.Dropdown hiddenFrom="xs">
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
          {/* <Tabs.List>{}</Tabs.List> */}
        </Tabs>
      </Container>
      <div
        className="absolute  lg:absolute md:absolute sm:absolute    w-[90%] lg:w-[60%] md:w-[60%] sm:w-[70%]
        left-0
        right-0
         top-52
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
            
            text-xl
            lg:text-5xl
            md:text-4xl
            sm:text-3xl
            font-black
            mb-1  "
        >
          Transform your future with us!
        </h1>
        <div className="">
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm} // Bind search term to input
            onChange={handleSearch} // Handle search input change
            className="pl-5 border rounded-full w-full"
          />
        </div>
      </div>
    </div>
  );
};
export default NavBar;
