"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Book, Code2 } from "lucide-react";

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  type: "work" | "education" | "project";
}

const defaultEvents: TimelineEvent[] = [
  {
    date: "2024.01",
    title: "前端工程师",
    description: "加入科技公司，负责核心产品的前端架构设计和开发，主导多个重要项目的技术选型和实现。",
    type: "work",
  },
  {
    date: "2023.06",
    title: "AI 技术探索",
    description: "开始系统学习 AI/ML 技术，完成多个在线课程，包括吴恩达的 Machine Learning 和 Deep Learning 专项课程。",
    type: "education",
  },
  {
    date: "2023.01",
    title: "个人博客项目",
    description: "启动个人博客项目，分享技术文章和学习笔记，累计发表 50+ 篇技术文章，月访问量破万。",
    type: "project",
  },
  {
    date: "2022.06",
    title: "高级前端开发",
    description: "晋升为高级前端工程师，开始带领小型团队，负责新人指导和技术分享。",
    type: "work",
  },
  {
    date: "2020.03",
    title: "前端开发工程师",
    description: "第一份前端开发工作，从零开始学习 React 和现代前端技术栈，快速成长为团队主力。",
    type: "work",
  },
];

function getIcon(type: TimelineEvent["type"]) {
  switch (type) {
    case "work":
      return Briefcase;
    case "education":
      return Book;
    case "project":
      return Code2;
  }
}

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
  isLast: boolean;
}

function TimelineItem({ event, index, isLast }: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = getIcon(event.type);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative flex items-start gap-6 md:flex-row"
    >
      {/* 时间节点图标 */}
      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[3px] border-black bg-gradient-to-br from-primary to-accent-purple shadow-lg">
        <Icon className="h-5 w-5 text-white" />
      </div>

      {/* 内容卡片 */}
      <div className={`flex-1 ${isEven ? "md:text-right" : ""}`}>
        <div className="inline-block rounded-2xl border-[3px] border-black bg-white/80 p-4 shadow-md">
          {/* 时间标签 */}
          <Badge variant="secondary" className="mb-2 rounded-full bg-gradient-to-r from-primary/10 to-accent-purple/10 font-mono text-xs">
            {event.date}
          </Badge>

          {/* 标题 */}
          <h3 className="mb-2 text-lg font-bold text-foreground">{event.title}</h3>

          {/* 描述 */}
          <p className="text-sm leading-relaxed text-muted-foreground">{event.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

// 简单的 Badge 组件（如果项目中没有单独的导入）
function Badge({ children, variant = "default", className = "" }: { children: React.ReactNode; variant?: string; className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold ${className}`}>
      {children}
    </span>
  );
}

export function TimelineSection({ events = defaultEvents }: { events?: TimelineEvent[] }) {
  return (
    <section className="w-full px-4 py-16 md:px-6 md:py-24">
      <div className="container max-w-screen-2xl px-4 md:px-6">
        {/* 标题区域 */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full border border-primary/15 bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary"
          >
            Journey
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-4xl md:text-5xl"
          >
            成长<span className="text-gradient">历程</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg"
          >
            从前端开发到 AI 探索的转型之路
          </motion.p>
        </div>

        {/* 时间线 */}
        <div className="relative mx-auto max-w-4xl">
          {/* 垂直连接线 */}
          <div className="absolute left-6 top-0 h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-primary via-accent-purple to-transparent opacity-30 md:left-1/2" />

          {/* 时间线事件 */}
          <div className="space-y-8">
            {events.map((event, index) => (
              <TimelineItem
                key={`${event.date}-${event.title}`}
                event={event}
                index={index}
                isLast={index === events.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
