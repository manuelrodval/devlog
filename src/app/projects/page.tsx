import { getFeaturedPosts } from "@/lib";
import { PostGrid } from "./components";
import { AnimateEntrance } from "@/components";

export default function Project() {
  const posts = getFeaturedPosts(false);

  return (
    <AnimateEntrance>
      <PostGrid posts={posts} />
    </AnimateEntrance>
  );
}
