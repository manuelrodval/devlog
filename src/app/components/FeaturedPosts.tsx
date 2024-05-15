"use client";

import { Container, Title } from "@mantine/core";
import { PostCardData } from "@/lib";
import { PostCard } from "@/components";

export default function FeaturedPosts({ posts }: { posts: PostCardData[] }) {
  return (
    <Container size="xs" mb="xl">
      <Title order={4} mb="xl">
        Featured Projects
      </Title>
      {posts.map((post, id) => (
        <PostCard {...post} vertical={false} key={id.toString()} />
      ))}
    </Container>
  );
}
