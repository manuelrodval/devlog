"use client";
import { Box } from "@mantine/core";

export default function YoutubeVideo({ id }: { id: string }) {
  return (
    <Box style={{ textAlign: "center" }} my="lg">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title="Youtube video player"
        allowFullScreen
        style={{ border: 0 }}
      />
    </Box>
  );
}
