import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category?: string;
  image?: string;
}

export interface Post extends PostMeta {
  content: string;
}

function ensurePostsDir() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

export function getAllPosts(): PostMeta[] {
  ensurePostsDir();
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));

  const posts: PostMeta[] = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: (data.title as string) || slug,
      date: (data.date as string) || "",
      excerpt: (data.excerpt as string) || "",
      category: (data.category as string) || "",
      image: (data.image as string) || "",
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): Post | null {
  ensurePostsDir();
  const filePath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: (data.title as string) || slug,
    date: (data.date as string) || "",
    excerpt: (data.excerpt as string) || "",
    category: (data.category as string) || "",
    image: (data.image as string) || "",
    content,
  };
}
