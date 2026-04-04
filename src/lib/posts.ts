import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content/posts");

export interface PostData {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
  coverImage?: string;
  content: string;
  readingTime: number;
}

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
  coverImage?: string;
  readingTime: number;
}

interface PostFrontmatter {
  title?: string;
  date?: string;
  description?: string;
  tags?: string[];
  coverImage?: string;
  content?: string;
}

export function getSortedPostsData(): PostMeta[] {
  const fileNames = getPostSlugs();
  const allPostsData = fileNames.map((slug) => {
    const { data } = getPostData(slug);

    return {
      slug,
      title: data.title || "Untitled",
      date: data.date || new Date().toISOString(),
      description: data.description || "",
      tags: data.tags || [],
      coverImage: data.coverImage,
      readingTime: getReadingTime(data.content || ""),
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx?$/, ""));
}

export function getPostData(slug: string): {
  data: PostFrontmatter;
  content: string;
} {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fullPathMdx = path.join(postsDirectory, `${slug}.mdx`);
  const fullPathToUse = fs.existsSync(fullPath) ? fullPath : fullPathMdx;

  const fileContents = fs.readFileSync(fullPathToUse, "utf8");
  const { data, content } = matter(fileContents);

  return {
    data: data as PostFrontmatter,
    content,
  };
}

export function getPostBySlug(slug: string): PostData {
  const { data, content } = getPostData(slug);

  return {
    slug,
    title: data.title || "Untitled",
    date: data.date || new Date().toISOString(),
    description: data.description || "",
    tags: data.tags || [],
    coverImage: data.coverImage,
    content,
    readingTime: getReadingTime(content),
  };
}

export function getRelatedPosts(currentSlug: string, limit: number = 2): PostMeta[] {
  const allPosts = getSortedPostsData();
  return allPosts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, limit);
}

export function getPostsByTag(tag: string): PostMeta[] {
  const allPosts = getSortedPostsData();
  return allPosts.filter((post) => post.tags?.includes(tag));
}

export function getAllTags(): string[] {
  const allPosts = getSortedPostsData();
  const tags = new Set<string>();
  allPosts.forEach((post) => {
    post.tags?.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

export function searchPosts(query: string): PostMeta[] {
  const allPosts = getSortedPostsData();
  const lowerQuery = query.toLowerCase();

  return allPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.description.toLowerCase().includes(lowerQuery) ||
      post.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}

function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
