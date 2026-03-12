"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { PostData } from "@/lib/posts";

interface BlogPostProps {
  post: PostData;
  prevPost?: PostData;
  nextPost?: PostData;
  tableOfContents?: { id: string; text: string; level: number }[];
}

export function BlogPost({ post, prevPost, nextPost, tableOfContents = [] }: BlogPostProps) {
  return (
    <div className="container max-w-screen-xl px-4 md:px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-9">
          <article>
            <header className="mb-8">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <time>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span>·</span>
                <span>{post.readingTime} min read</span>
              </div>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </header>

            <Separator className="mb-8" />

            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ className, ...props }) => (
                    <h1 className={cn("mt-8 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)} {...props} />
                  ),
                  h2: ({ className, ...props }) => (
                    <h2 className={cn("mt-8 scroll-m-20 text-3xl font-semibold tracking-tight", className)} {...props} />
                  ),
                  h3: ({ className, ...props }) => (
                    <h3 className={cn("mt-8 scroll-m-20 text-2xl font-semibold tracking-tight", className)} {...props} />
                  ),
                  h4: ({ className, ...props }) => (
                    <h4 className={cn("mt-8 scroll-m-20 text-xl font-semibold tracking-tight", className)} {...props} />
                  ),
                  p: ({ className, ...props }) => (
                    <p className={cn("leading-7 [&:not(:first-child)]:mt-4", className)} {...props} />
                  ),
                  a: ({ className, href, ...props }) => (
                    <a className={cn("font-medium underline underline-offset-4 hover:text-primary", className)} href={href} {...props} />
                  ),
                  ul: ({ className, ...props }) => (
                    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
                  ),
                  ol: ({ className, ...props }) => (
                    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
                  ),
                  li: ({ className, ...props }) => (
                    <li className={cn("mt-2", className)} {...props} />
                  ),
                  blockquote: ({ className, ...props }) => (
                    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)} {...props} />
                  ),
                  img: ({ className, ...props }) => (
                    <img className={cn("rounded-md border", className)} {...props} />
                  ),
                  hr: ({ className, ...props }) => (
                    <hr className={cn("my-4 border-t border-border", className)} {...props} />
                  ),
                  code: ({ className, ...props }) => (
                    <code className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm", className)} {...props} />
                  ),
                  pre: ({ className, ...props }) => (
                    <pre className={cn("mt-6 mb-4 overflow-x-auto rounded-lg border bg-black p-4 text-white", className)} {...props} />
                  ),
                  table: ({ className, ...props }) => (
                    <div className="my-6 w-full overflow-y-auto">
                      <table className={cn("w-full", className)} {...props} />
                    </div>
                  ),
                  tr: ({ className, ...props }) => (
                    <tr className={cn("m-0 border-t p-0 even:bg-muted", className)} {...props} />
                  ),
                  th: ({ className, ...props }) => (
                    <th className={cn("border px-4 py-2 text-left font-bold", className)} {...props} />
                  ),
                  td: ({ className, ...props }) => (
                    <td className={cn("border px-4 py-2 text-left", className)} {...props} />
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </article>

          {/* Navigation */}
          {(prevPost || nextPost) && (
            <nav className="mt-12">
              <Separator className="mb-6" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {prevPost && (
                  <Link
                    href={`/blog/${prevPost.slug}`}
                    className="p-4 border rounded-lg hover:bg-muted transition-colors"
                  >
                    <p className="text-sm text-muted-foreground">Previous</p>
                    <p className="font-medium">{prevPost.title}</p>
                  </Link>
                )}
                {nextPost && (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="p-4 border rounded-lg hover:bg-muted transition-colors md:ml-auto"
                  >
                    <p className="text-sm text-muted-foreground">Next</p>
                    <p className="font-medium">{nextPost.title}</p>
                  </Link>
                )}
              </div>
            </nav>
          )}
        </div>

        {/* Table of Contents */}
        {tableOfContents.length > 0 && (
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-20">
              <ScrollArea className="h-[calc(100vh-8rem)]">
                <nav>
                  <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">
                    On This Page
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {tableOfContents.map((item) => (
                      <li
                        key={item.id}
                        style={{ paddingLeft: `${(item.level - 2) * 12}px` }}
                      >
                        <a
                          href={`#${item.id}`}
                          className="text-muted-foreground hover:text-foreground transition-colors block py-1"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </ScrollArea>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
