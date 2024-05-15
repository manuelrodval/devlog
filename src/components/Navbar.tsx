"use client";

import {
  ActionIcon,
  Box,
  Burger,
  Container,
  Grid,
  Group,
  rem,
  useMantineColorScheme,
  useComputedColorScheme,
  Text,
  Menu,
} from "@mantine/core";
import { IconSun, IconMoon, IconBrandGithub } from "@tabler/icons-react";
import classes from "./styles/Navbar.module.scss";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";

function ThemeToggleButton() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      variant="subtle"
      aria-label="Toggle color scheme"
      color="gray"
      size="xl"
    >
      <IconSun className={classes.light} stroke={2} />
      <IconMoon className={classes.dark} stroke={2} />
    </ActionIcon>
  );
}

function BurgerMenu() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <Box hiddenFrom="sm">
      <Menu shadow="md" width={rem(200)} opened={opened} onChange={toggle}>
        <Menu.Target>
          <Burger
            opened={opened}
            onClick={toggle}
            aria-label="Toggle Navigation"
          />
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item component={Link} href="/">
            {" "}
            Home{" "}
          </Menu.Item>
          <Menu.Item component={Link} href="/projects">
            {" "}
            Projects{" "}
          </Menu.Item>
          <Menu.Item component={Link} href="/">
            {" "}
            Vault{" "}
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Box>
  );
}

export default function Navbar() {
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        if (window.scrollY > 0) {
          navbarRef.current.classList.add(classes.border);
        } else {
          navbarRef.current.classList.remove(classes.border);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box ref={navbarRef} className={classes.navbarWrapper}>
      <Container className={classes.navbar} size="sm">
        <Group justify="space-between" w="100%" h="100%">
          <Box miw={rem(128)}>
            <Text component={Link} href="/" fw={600}>
              manuelrodval
            </Text>
          </Box>
          <Grid visibleFrom="sm" justify="space-between" align="stretch">
            <Grid.Col span="auto" className={classes.linkContainer}>
              <Text component={Link} href="/" className={classes.link}>
                Inicio
              </Text>
            </Grid.Col>
            <Grid.Col span="auto" className={classes.linkContainer}>
              <Text component={Link} href="/projects" className={classes.link}>
                Projects
              </Text>
            </Grid.Col>
            <Grid.Col span="auto" className={classes.linkContainer}>
              <Text component={Link} href="/" className={classes.link}>
                Vault
              </Text>
            </Grid.Col>
          </Grid>
          <Group miw={rem(128)} justify="flex-end">
            <ActionIcon
              size="xl"
              variant="subtle"
              component={Link}
              href="https://www.github.com/manuelrodval/"
              target="_blank"
              autoContrast
              color="gray"
            >
              <IconBrandGithub stroke={2} />
            </ActionIcon>
            <ThemeToggleButton />
            <BurgerMenu />
          </Group>
        </Group>
      </Container>
    </Box>
  );
}
