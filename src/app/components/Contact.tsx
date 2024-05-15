"use client";

import { Container, Title, Stack, Button } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandGithubCopilot,
  IconBrandGithubFilled,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export default function Contact() {
  return (
    <Container size="xs">
      <Title order={4} mb="xl">
        Contact
      </Title>
      <Stack my={12}>
        <Button
          leftSection={<IconBrandLinkedin />}
          variant="default"
          fullWidth
          component="a"
          href="https://www.linkedin.com/in/manuelrodval"
          target="_blank"
        >
          linkedin.com/in/manuelrodval
        </Button>
        <Button
          leftSection={<IconBrandGithub />}
          variant="default"
          fullWidth
          component="a"
          href="https://www.github.com/manuelrodval"
          target="_blank"
        >
          github.com/manuelrodval
        </Button>
      </Stack>
    </Container>
  );
}
