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
    <section className="w-full px-4 py-16 md:px-6 md:py-24">
      <div className="container max-w-screen-2xl px-4 md:px-6">
        <div className="rounded-[2rem] border border-black/10 bg-white/75 p-8 shadow-[0_24px_50px_rgba(31,16,16,0.08)] backdrop-blur md:p-10">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                Editor&apos;s Picks
              </span>
              <h2 className="text-3xl font-bold tracking-[-0.04em] sm:text-4xl md:text-5xl">
              Featured Posts
              </h2>
              <p className="max-w-[640px] text-base leading-7 text-muted-foreground md:text-lg">
                Recent writing on frontend engineering, product thinking, and the
                small implementation details that make digital work feel polished.
              </p>
            </div>
            {posts.length > limit && (
              <Link href="/blog" className="shrink-0">
                <Button
                  variant="outline"
                  className="h-12 rounded-full border-black/15 bg-white px-6 text-sm font-semibold uppercase tracking-[0.2em]"
                >
                  View All Posts
                </Button>
              </Link>
            )}
          </div>
          <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
