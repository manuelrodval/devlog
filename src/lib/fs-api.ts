import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostCardData {
  id: string;
  postPath: string;
  postTitle?: string;
  tag?: string;
  cover?: string;
  excerpt?: string;
  date?: Date;
  vertical: boolean;
}

const postDirectory = path.join(process.cwd(), "posts/");

export function getFeaturedPosts(onlyFeatured: boolean): PostCardData[] {
  const posts = fs.readdirSync(postDirectory);
  let featuredPosts = posts.map((post, id) => {
    const postPath = path.join(postDirectory, post, "post.md");

    try {
      const postContent = fs.readFileSync(postPath, "utf8");
      const matterContent = matter(postContent, { excerpt: true });
      if (onlyFeatured && matterContent.data.featured === false) return null;
      const matterData = matterContent.data;

      return {
        id: id.toString(),
        postPath: post,
        ...(typeof matterData.title === "string" && {
          postTitle: matterData.title,
        }),
        ...(typeof matterData.tag === "string" && { tag: matterData.tag }),
        ...(typeof matterData.cover === "string" &&
          fs.existsSync(path.join(postDirectory, post, matterData.cover)) && {
            cover: matterData.cover,
          }),
        ...(typeof matterContent.excerpt === "string" && {
          excerpt: matterContent.excerpt,
        }),
        ...(matterData.date instanceof Date && {
          date: matterData.date,
        }),
      };
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === "ENOENT") {
        console.log("File not found");
      } else {
        console.log("Error while reading the file");
      }
      return null;
    }
  });

  const filteredPosts = featuredPosts.filter(
    (post) => post !== null,
  ) as PostCardData[];

  return filteredPosts;
}

export function getPostIds(): { id: string }[] {
  const paths = fs.readdirSync(postDirectory);
  return paths.map((path) => ({ id: path }));
}

export interface PostData {
  postPath?: string;
  postTitle?: string;
  cover?: string;
  date?: Date;
  tag?: string;
  excerpt?: string;
  content?: string;
}

export function getPost(id: string): PostData {
  try {
    const fullPath = path.join(postDirectory, id, "post.md");
    const fileContent = fs.readFileSync(fullPath, "utf8");
    const matterContent = matter(fileContent);
    const matterData = matterContent.data;
    return {
      postPath: id,
      ...(typeof matterData.title === "string" && {
        postTitle: matterData.title,
      }),
      ...(typeof matterData.cover === "string" &&
        fs.existsSync(path.join(postDirectory, id, matterData.cover)) && {
          cover: matterData.cover,
        }),
      ...(matterData.date instanceof Date && {
        date: matterData.date,
      }),
      ...(typeof matterData.tag === "string" && { tag: matterData.tag }),
      ...(typeof matterContent.excerpt === "string" && {
        excerpt: matterContent.excerpt,
      }),
      ...(typeof matterContent.content === "string" && {
        content: matterContent.content,
      }),
    };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      console.log("Cant find post.");
    } else {
      console.log("Error while loading file");
    }
    return {};
  }
}
