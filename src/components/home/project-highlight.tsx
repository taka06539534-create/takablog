"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

const defaultProjects: Project[] = [
  {
    title: "TakaBlog",
    description: "基于 Next.js 15 和个人博客系统，支持 MDX、代码高亮、目录导航等功能，采用现代化的设计风格和流畅的动画效果。",
    tags: ["Next.js", "React", "Tailwind CSS", "MDX"],
    link: "/",
    github: "https://github.com",
    featured: true,
  },
  {
    title: "AI Assistant UI",
    description: "为 AI 对话应用设计的现代化 UI 组件，支持流式响应、代码高亮、Markdown 渲染等功能。",
    tags: ["React", "TypeScript", "AI", "Vercel AI SDK"],
    github: "https://github.com",
  },
  {
    title: "Design System",
    description: "基于 shadcn/ui 定制的设计系统，包含 30+ 个可复用组件，支持深色模式和完整的无障碍支持。",
    tags: ["React", "Tailwind CSS", "Radix UI", "Accessibility"],
    github: "https://github.com",
  },
  {
    title: "数据可视化 Dashboard",
    description: "企业级数据可视化仪表板，集成了多种图表库和实时数据更新功能。",
    tags: ["React", "D3.js", "TypeScript", "WebSocket"],
  },
  {
    title: "移动端组件库",
    description: "面向移动端的 React Native 组件库，包含 20+ 个常用组件，支持 iOS 和 Android 平台。",
    tags: ["React Native", "TypeScript", "Mobile"],
  },
  {
    title: "自动化工具集",
    description: "提升开发效率的自动化工具集合，包括代码生成、自动化测试、部署脚本等。",
    tags: ["Node.js", "Python", "Automation", "CLI"],
    github: "https://github.com",
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group h-full overflow-hidden rounded-2xl border-[3px] border-black bg-white/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <CardContent className="p-6">
          {/* 标题 */}
          <div className="mb-3 flex items-start justify-between gap-4">
            <h3 className="text-xl font-bold text-foreground group-hover:text-gradient">
              {project.title}
            </h3>
            {project.featured && (
              <Badge className="shrink-0 bg-gradient-to-r from-primary to-accent-purple text-white">
                Featured
              </Badge>
            )}
          </div>

          {/* 描述 */}
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {/* 技术标签 */}
          <div className="mb-5 flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="rounded-full bg-gradient-to-r from-primary/10 to-accent-purple/10 text-xs font-medium text-foreground"
              >
                {tag}
              </Badge>
            ))}
            {project.tags.length > 4 && (
              <Badge variant="secondary" className="rounded-full bg-muted">
                +{project.tags.length - 4}
              </Badge>
            )}
          </div>

          {/* 链接 */}
          <div className="flex items-center gap-3">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                <Github className="h-4 w-4" />
                Code
              </Link>
            )}
            {project.link && (
              <Link
                href={project.link}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                <span>View Project</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ProjectHighlight({ projects = defaultProjects }: { projects?: Project[] }) {
  return (
    <section id="projects" className="w-full px-4 py-16 md:px-6 md:py-24">
      <div className="container max-w-screen-2xl px-4 md:px-6">
        {/* 标题区域 */}
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full border border-primary/15 bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary"
          >
            Portfolio
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-4xl md:text-5xl"
          >
            项目<span className="text-gradient">亮点</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg"
          >
            精选代表作品，展现技术深度与实战经验
          </motion.p>
        </div>

        {/* 项目网格 */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
