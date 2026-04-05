import { AnimatedHero } from "@/components/home/animated-hero";
import { SkillShowcase } from "@/components/home/skill-showcase";
import { ProjectHighlight } from "@/components/home/project-highlight";
import { TimelineSection } from "@/components/home/timeline-section";
import { FeaturedPosts } from "@/components/home/featured-posts";
import { getSortedPostsData } from "@/lib/posts";

export default function HomePage() {
  const posts = getSortedPostsData();

  return (
    <>
      <AnimatedHero
        name="Taka"
        title="Frontend Developer → AI Engineer"
        subtitle="前端工程师向 AI 工程师转型中"
        bio="专注于构建出色的前端体验，正在探索 AI 技术的无限可能。在这里分享技术思考、项目实践和转型路上的心得体会。"
        socialLinks={{
          github: "https://github.com/takasmile",
          twitter: "https://twitter.com",
          linkedin: "https://linkedin.com",
        }}
      />
      <SkillShowcase />
      <ProjectHighlight />
      <TimelineSection />
      <FeaturedPosts posts={posts} limit={3} />
    </>
  );
}
