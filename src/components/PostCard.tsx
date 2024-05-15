"use client";

import Link from "next/link";
import { Card, Image, Group, Text, SimpleGrid } from "@mantine/core";
import { PostCardData } from "@/lib";
import classes from "./styles/PostCard.module.scss";

const fallbackImg =
  "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80";

export default function PostCard({
  postPath,
  postTitle,
  cover,
  excerpt,
  date,
  tag,
  vertical,
}: PostCardData) {
  return (
    <Card
      withBorder
      radius="md"
      p={0}
      className={classes.card}
      my="md"
      component={Link}
      href={`/projects/${postPath}`}
    >
      <Card.Section hiddenFrom={vertical ? "" : "xs"}>
        <Image
          h={160}
          src={
            cover ? `/api/images?post=${postPath}&img=${cover}` : fallbackImg
          }
          fallbackSrc={fallbackImg}
        />
      </Card.Section>
      <SimpleGrid cols={{ base: 1, xs: vertical ? 1 : 2 }} spacing="xs">
        {vertical ? (
          <></>
        ) : (
          <Image
            visibleFrom="xs"
            src={
              cover ? `/api/images?post=${postPath}&img=${cover}` : fallbackImg
            }
            h={160}
            w={240}
            fallbackSrc={fallbackImg}
          />
        )}
        <div className={classes.body}>
          <Text className={classes.title} mt="xs" mb="md">
            {postTitle}
          </Text>
          <Text size="sm" mt="xs" mb="md" c="dimmed" fw={500} lineClamp={2}>
            {excerpt}
          </Text>
          <Group wrap="nowrap" gap="xs">
            <Text size="xs" c="dimmed">
              {tag}
            </Text>
            <Text size="xs" c="dimmed">
              •
            </Text>
            <Text size="xs" c="dimmed">
              {date?.toLocaleDateString()}
            </Text>
          </Group>
        </div>
      </SimpleGrid>
    </Card>
  );
}
