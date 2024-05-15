"use client";

import "katex/dist/katex.min.css";
import "highlight.js/styles/atom-one-dark.css";
import { PostData } from "@/lib";
import { Box, Container, rem } from "@mantine/core";
import { Admonition, YoutubeVideo } from "./";
import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
import remarkDirectiveRehype from "remark-directive-rehype";
import rehypeHighlight from "rehype-highlight";
import { Code, List, Table, Blockquote, Divider, Image } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import { AdmonitionType } from "./Admonition";

export default function MarkdownParser({ post }: { post: PostData }) {
  return (
    <Box pt={rem(120)}>
      <Container size="sm">
        <Image
          src={`/api/images?post=${post.postPath}&img=${post.cover}`}
          radius="md"
        />
        <Markdown
          children={post.content}
          remarkPlugins={[
            remarkGfm,
            remarkMath,
            remarkDirective,
            remarkDirectiveRehype,
          ]}
          rehypePlugins={[rehypeKatex, rehypeHighlight]}
          components={{
            code: ({ className, children }) => {
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <Code block> {children}</Code>
              ) : (
                <Code>{children}</Code>
              );
            },
            img: ({ src, alt }) => {
              return (
                <Image
                  src={`/api/images?post=${post.postPath}&img=${src}`}
                  radius="sm"
                  px="xl"
                  alt={alt}
                />
              );
            },
            // @ts-ignore
            yt: ({ id }: { id: string }) => <YoutubeVideo id={id} />,
            ol: ({ children }) => (
              <List type="ordered" withPadding>
                {children}
              </List>
            ),
            admonition: ({ type, title, children }: AdmonitionType) => (
              <Admonition type={type} title={title} children={children} />
            ),
            ul: ({ children }) => <List withPadding>{children}</List>,
            li: ({ children }) => <List.Item>{children}</List.Item>,
            table: ({ children }) => (
              <Table withColumnBorders withTableBorder highlightOnHover layout='fixed'>
                {children}
              </Table>
            ),
            td: ({ children }) => <Table.Td>{children}</Table.Td>,
            th: ({ children }) => <Table.Th>{children}</Table.Th>,
            tr: ({ children }) => <Table.Tr>{children}</Table.Tr>,
            blockquote: ({ children }) => (
              <Blockquote color="violet" icon={<IconInfoCircle />}>
                {children}
              </Blockquote>
            ),
            hr: () => <Divider />,
          }}
        />
      </Container>
    </Box>
  );
}
