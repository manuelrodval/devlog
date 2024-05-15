"use client";

import { Button, Center, Image, Stack, Title } from "@mantine/core";
import Link from "next/link";

export default function NotFound() {
  return (
    <Center mih="100vh">
      <Stack align="center">
      <Title order={2}> 404 - Nothing to see here </Title>
      <Image src="/cheems-notfound.gif" />
      <Button component={Link} href="/" variant="default">
        {" "}
        Go back home{" "}
      </Button>
    </Stack>
    </Center>
  );
}
