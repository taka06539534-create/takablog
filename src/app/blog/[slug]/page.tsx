import { notFound } from "next/navigation";
import { BlogPost } from "@/components/blog/blog-post";
import { getPostBySlug, getSortedPostsData } from "@/lib/posts";
import { getPostSlugs } from "@/lib/posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: post.title,
      description: post.description,
    };
  } catch {
    return {
      title: "Post Not Found",
    };
  }
}

function extractTableOfContents(content: string) {
  const headings = content.match(/^##+\s+.+$/gm) || [];
  return headings.map((heading) => {
    const level = heading.match(/^#+/)?.[0]?.length || 2;
    const text = heading.replace(/^#+\s+/, "");
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    return { id, text, level };
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const allPosts = getSortedPostsData();
  const currentIndex = allPosts.findIndex((post) => post.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const post = getPostBySlug(slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : undefined;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : undefined;

  const tableOfContents = extractTableOfContents(post.content);

  // Wrap post data in proper format for BlogPost component
  const wrappedPrevPost = prevPost ? { ...prevPost, content: "" } : undefined;
  const wrappedNextPost = nextPost ? { ...nextPost, content: "" } : undefined;

  return (
    <BlogPost
      post={post}
      prevPost={wrappedPrevPost}
      nextPost={wrappedNextPost}
      tableOfContents={tableOfContents}
    />
  );
}
