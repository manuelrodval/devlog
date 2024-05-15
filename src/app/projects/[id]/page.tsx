import { getPostIds, getPost } from "@/lib";
import { MarkdownParser } from "./components";
import { AnimateEntrance } from "@/components";

export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = getPost(id);
  return (
    <AnimateEntrance>
      <MarkdownParser post={post} />
    </AnimateEntrance>
  );
}

export function generateStaticParams() {
  const posts = getPostIds();
  return posts;
}

export function generateMetadata({ params }: { params: string }) {
  const post = getPost(params);
  const postTitle = "postTitle" in post ? post.postTitle : "";
  return {
    title: postTitle,
  };
}
