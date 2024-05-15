"use client";

import {
  Box,
  Container,
  Pagination,
  SimpleGrid,
  Stack,
  rem,
} from "@mantine/core";
import { useState } from "react";
import { PostCard } from "@/components";
import { PostCardData } from "@/lib";

export default function PostGrid({ posts }: { posts: PostCardData[] }) {
  const [page, setPage] = useState(1);
  const pageSize = 6;

  const chunk = (array: PostCardData[]): PostCardData[][] => {
    if (!array.length) {
      return [];
    }
    const head = array.slice(0, pageSize);
    const tail = array.slice(pageSize);
    return [head, ...chunk(tail)];
  };

  return (
    <Box pt={rem(120)}>
      <Container size="sm">
        <Stack align="center">
          <Pagination
            total={Math.floor(Object.keys(posts).length / pageSize) + 1}
            value={page}
            onChange={setPage}
          />
          <SimpleGrid
            cols={{ base: 1, xs: 2, sm: 3 }}
            spacing={{ base: "sm", md: "md" }}
            verticalSpacing="sm"
          >
            {chunk(posts)[page - 1].map((post, id) => (
              <PostCard {...post} vertical={true} key={id.toString()} />
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
