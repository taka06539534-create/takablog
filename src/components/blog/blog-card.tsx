import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

interface BlogCardProps {
  post: PostMeta;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="group h-full rounded-[1.75rem] border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,244,240,0.92))] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_40px_rgba(34,18,18,0.12)]">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <Badge className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary hover:bg-primary/10">
            Article
          </Badge>
          <CardDescription className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </CardDescription>
        </div>
        <div className="space-y-3">
          <CardTitle className="text-2xl leading-tight tracking-[-0.03em]">
            <Link
              href={`/blog/${post.slug}`}
              className="transition-colors group-hover:text-primary"
            >
              {post.title}
            </Link>
          </CardTitle>
          <CardDescription className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {post.readingTime} min read
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="line-clamp-3 text-[15px] leading-7 text-muted-foreground">
          {post.description}
        </p>
      </CardContent>
      {post.tags && post.tags.length > 0 && (
        <CardFooter className="flex flex-wrap gap-2 border-t border-black/6 pt-5">
          {post.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="rounded-full border border-black/8 bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-foreground/70"
            >
              {tag}
            </Badge>
          ))}
        </CardFooter>
      )}
    </Card>
  );
}
