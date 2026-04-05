"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface AnimatedHeroProps {
  name?: string;
  title?: string;
  subtitle?: string;
  bio?: string;
  avatar?: string;
  socialLinks?: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

// 粒子背景组件
function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // 初始化粒子
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // 粒子移动
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // 鼠标交互 - 粒子向反方向轻微移动
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const force = (150 - distance) / 150;
          particle.x -= dx * force * 0.02;
          particle.y -= dy * force * 0.02;
        }

        // 边界检测
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // 绘制粒子
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [mousePosition]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-40"
      />
    </div>
  );
}

// 打字机效果组件
function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started || currentIndex >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayText((prev) => prev + text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, 50);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, started]);

  return <span>{displayText}</span>;
}

// 社交图标组件
function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <Button
        variant="outline"
        className="h-11 rounded-full border-black/10 bg-white/72 px-4 text-sm shadow-none transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md"
      >
        <Icon className="mr-2 h-4 w-4" />
        {label}
      </Button>
    </Link>
  );
}

export function AnimatedHero({
  name = "Taka",
  title = "Frontend Developer → AI Engineer",
  subtitle = "前端工程师向 AI 工程师转型中",
  bio = "专注于构建出色的前端体验，正在探索 AI 技术的无限可能。在这里分享技术思考、项目实践和转型路上的心得体会。",
  avatar = "/avatar.png",
  socialLinks = {
    github: "https://github.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
  },
}: AnimatedHeroProps) {
  const socialItems = [
    socialLinks.github
      ? { label: "GitHub", href: socialLinks.github, icon: Github }
      : null,
    socialLinks.twitter
      ? { label: "Twitter", href: socialLinks.twitter, icon: Twitter }
      : null,
    socialLinks.linkedin
      ? { label: "LinkedIn", href: socialLinks.linkedin, icon: Linkedin }
      : null,
    socialLinks.email
      ? { label: "Email", href: socialLinks.email, icon: Mail }
      : null,
  ].filter(Boolean) as {
    label: string;
    href: string;
    icon: React.ElementType;
  }[];

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full px-4 py-8 md:px-6 md:py-14 lg:py-20">
      <div className="container max-w-screen-2xl px-4 md:px-6">
        <div className="hero-shell overflow-hidden rounded-[2rem] border-[5px] border-black bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(245,243,255,0.96))]">
          <div className="grid min-h-[680px] lg:grid-cols-[1.05fr_0.95fr]">
            {/* 左侧内容区 */}
            <div className="relative flex flex-col justify-center px-8 py-14 sm:px-12 lg:px-18 lg:py-20">
              <ParticleBackground />

              <div className="relative max-w-xl space-y-7">
                {/* 标签 */}
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex w-fit rounded-full border border-primary/15 bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary"
                >
                  Personal Blog
                </motion.span>

                {/* 标题区域 */}
                <div className="space-y-4">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg font-medium uppercase tracking-[0.3em] text-muted-foreground"
                  >
                    Hello, I&apos;m
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-5xl font-black tracking-[-0.05em] text-balance text-foreground sm:text-6xl lg:text-7xl"
                  >
                    Hi, I&apos;m{" "}
                    <span className="text-gradient">{name}</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="font-serif text-2xl italic text-primary sm:text-3xl"
                  >
                    <TypewriterText text={title} delay={500} />
                  </motion.p>
                </div>

                {/* Bio */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="max-w-lg text-base leading-8 text-muted-foreground sm:text-lg"
                >
                  {bio}
                </motion.p>

                {/* CTA 按钮 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button
                    onClick={scrollToProjects}
                    className="h-12 rounded-full px-7 text-sm font-semibold uppercase tracking-[0.2em] transition-transform hover:scale-105"
                  >
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Link href="/blog">
                    <Button
                      variant="outline"
                      className="h-12 rounded-full border-black/15 bg-white/70 px-7 text-sm font-semibold uppercase tracking-[0.2em] transition-transform hover:scale-105"
                    >
                      Read Posts
                    </Button>
                  </Link>
                </motion.div>

                {/* 社交链接 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-wrap items-center gap-3 pt-2"
                >
                  {socialItems.map((item) => (
                    <SocialLink
                      key={item.label}
                      href={item.href}
                      icon={item.icon}
                      label={item.label}
                    />
                  ))}
                </motion.div>
              </div>
            </div>

            {/* 右侧头像区 */}
            <div className="relative min-h-[320px] overflow-hidden border-t-[5px] border-black bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.1),transparent_35%),linear-gradient(180deg,rgba(99,102,241,0.12),rgba(168,85,247,0.15))] lg:min-h-full lg:border-t-0 lg:border-l-[5px]">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,16,16,0)_20%,rgba(24,16,16,0.08)_100%)]" />

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute left-6 top-6 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/65 shadow-lg"
              >
                Notes on code, AI & growth
              </motion.div>

              {/* 装饰性光晕 */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-10 bottom-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl"
              />

              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute right-10 top-16 h-48 w-48 rounded-full bg-accent-purple/20 blur-3xl"
              />

              {/* 头像 */}
              <div className="relative flex h-full items-end justify-center px-8 pt-16">
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/12 to-transparent" />
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <Avatar className="h-[430px] w-[320px] rounded-[2rem] border-0 bg-transparent shadow-none sm:h-[520px] sm:w-[380px] lg:h-[640px] lg:w-[460px]">
                    <AvatarImage
                      src={avatar}
                      alt={name}
                      className="object-cover grayscale contrast-125"
                    />
                    <AvatarFallback className="rounded-[2rem] bg-gradient-to-br from-primary to-accent-purple text-8xl font-black text-white">
                      {name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
