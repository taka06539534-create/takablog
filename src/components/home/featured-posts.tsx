import { BlogCard } from "@/components/blog/blog-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

interface FeaturedPostsProps {
  posts: PostMeta[];
  limit?: number;
}

export function FeaturedPosts({ posts, limit = 3 }: FeaturedPostsProps) {
  const featuredPosts = posts.slice(0, limit);

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container max-w-screen-2xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Posts
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Check out my latest articles
            </p>
          </div>
          <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          {posts.length > limit && (
            <Link href="/blog" className="mt-8">
              <Button variant="outline">View All Posts</Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
