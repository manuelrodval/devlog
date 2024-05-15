"use client";

import { ActionIcon, Container, Group, Text, Box, rem } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import classes from "./styles/Footer.module.scss";
import Link from "next/link";

export default function Footer() {

  return (
    <Box className={classes.footerWrapper}>
      <Container size="sm" h="100%">
        <Group justify="space-between" align="center" h="100%">
          <Text c="dimmed" fw={500} size="sm">
            manuelrodval {new Date().getFullYear()}
          </Text>
          <Group>
            <ActionIcon
              variant="subtle"
              color="gray"
              size="sm"
              component={Link}
              href="/"
              target="_blank"
            >
              <IconBrandGithub size={rem(1.2)} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              variant="subtle"
              color="gray"
              size="sm"
              component={Link}
              href="/"
              target="_blank"
            >
              <IconBrandLinkedin size={rem(1.2)} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}
