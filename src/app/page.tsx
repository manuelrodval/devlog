import { getFeaturedPosts } from "@/lib";
import { HomeHeader, FeaturedPosts, Contact } from "./components";
import { AnimateEntrance } from "@/components";

export default function Home() {
  const featuredPosts = getFeaturedPosts(true);

  return (
    <div>
      <AnimateEntrance>
        <HomeHeader />
        <FeaturedPosts posts={featuredPosts} />
        <Contact />
      </AnimateEntrance>
    </div>
  );
}
