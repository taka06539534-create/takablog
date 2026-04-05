"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
  color?: string;
}

const defaultSkills: SkillCategory[] = [
  {
    name: "前端核心",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML / CSS", level: 95 },
      { name: "JavaScript (ES6+)", level: 90 },
    ],
  },
  {
    name: "AI / ML",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Prompt Engineering", level: 80 },
      { name: "AI Agent 开发", level: 70 },
      { name: "Python", level: 65 },
      { name: "LangChain", level: 60 },
      { name: "RAG 系统", level: 55 },
    ],
  },
  {
    name: "工具/其他",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "CI/CD", level: 65 },
      { name: "Node.js", level: 75 },
      { name: "UI/UX Design", level: 70 },
    ],
  },
];

interface SkillBarProps {
  skill: Skill;
  index: number;
}

function SkillBar({ skill, index }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="relative h-2.5 overflow-hidden rounded-full bg-muted">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${skill.level}%` : 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            delay: index * 0.1,
          }}
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-accent-purple"
        />
      </div>
    </div>
  );
}

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

function SkillCard({ category, index }: SkillCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative overflow-hidden rounded-2xl border-[3px] border-black bg-white/80 p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
    >
      {/* 渐变装饰条 */}
      <div className={`absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r ${category.color}`} />

      {/* 内容 */}
      <div className="relative space-y-5 pt-3">
        <div className="flex items-center gap-3">
          <div className={`h-3 w-3 rounded-full bg-gradient-to-r ${category.color}`} />
          <h3 className="text-xl font-bold text-foreground">{category.name}</h3>
        </div>

        <div className="space-y-4">
          {category.skills.map((skill, idx) => (
            <SkillBar key={skill.name} skill={skill} index={idx} />
          ))}
        </div>
      </div>

      {/* 悬停效果 */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "linear-gradient(180deg, rgba(99,102,241,0.05) 0%, transparent 100%)" }} />
    </motion.div>
  );
}

export function SkillShowcase({ skills = defaultSkills }: { skills?: SkillCategory[] }) {
  return (
    <section className="w-full px-4 py-16 md:px-6 md:py-24">
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
            Skills & Expertise
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-4xl md:text-5xl"
          >
            技术<span className="text-gradient">栈</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg"
          >
            从前端基础到 AI 探索，持续扩展技术边界
          </motion.p>
        </div>

        {/* 技能卡片网格 */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, index) => (
            <SkillCard key={category.name} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
