import { HomeHero } from "@/components/home/home-hero";
import { FeaturedPosts } from "@/components/home/featured-posts";
import { getSortedPostsData } from "@/lib/posts";

export default function HomePage() {
  const posts = getSortedPostsData();

  return (
    <>
      <HomeHero
        name="Taka"
        title="Software Developer & Writer"
        bio="Welcome to my blog! I share thoughts on web development, technology, and life experiences. Thanks for stopping by!"
        socialLinks={{
          github: "https://github.com",
          twitter: "https://twitter.com",
          linkedin: "https://linkedin.com",
        }}
      />
      <FeaturedPosts posts={posts} limit={3} />
    </>
  );
}
