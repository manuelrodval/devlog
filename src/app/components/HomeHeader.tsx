"use client";

import { Box, Container, Title, Text, Group, Avatar, rem } from "@mantine/core";

export default function HomeHeader() {
  return (
    <Box pt={rem(120)}>
      <Container size="xs">
        <Group align="center" justify="space-between" h={rem(160)}>
          <Box>
            <Title order={1}>manuelrodval</Title>
            <Text> devlog </Text>
          </Box>
          <Avatar size="xl" radius="xl" src="/avatar.png" />
        </Group>
        <Text mb={rem(32)}>
          Hey there! I&#39;m Manuel and this is my kinda outdated and low
          maintained devlog. I write and post about things that catches my
          attention, personal projects and things that I&#39;m currently
          learning. I&#39;m into software development, data science, product
          design and music.
        </Text>
      </Container>
    </Box>
  );
}
