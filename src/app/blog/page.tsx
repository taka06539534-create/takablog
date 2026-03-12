import { BlogList } from "@/components/blog/blog-list";
import { getSortedPostsData, getAllTags } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Browse all blog posts",
};

export default function BlogPage() {
  const posts = getSortedPostsData();
  const allTags = getAllTags();

  return (
    <div className="container max-w-screen-2xl px-4 md:px-6 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Blog
        </h1>
        <p className="max-w-[600px] text-muted-foreground md:text-xl">
          Thoughts, tutorials, and insights on web development and more
        </p>
      </div>
      <BlogList posts={posts} allTags={allTags} />
    </div>
  );
}
