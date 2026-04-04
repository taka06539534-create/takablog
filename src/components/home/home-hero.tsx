import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

interface HomeHeroProps {
  name?: string;
  title?: string;
  bio?: string;
  avatar?: string;
  socialLinks?: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

export function HomeHero({
  name = "Taka",
  title = "Software Developer & Writer",
  bio = "Welcome to my blog! I share thoughts on web development, technology, and life experiences. Thanks for stopping by!",
  avatar = "/avatar.png",
  socialLinks = {
    github: "https://github.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
  },
}: HomeHeroProps) {
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
    icon: typeof Github;
  }[];

  return (
    <section className="w-full px-4 py-8 md:px-6 md:py-14 lg:py-20">
      <div className="container max-w-screen-2xl px-4 md:px-6">
        <div className="hero-shell overflow-hidden rounded-[2rem] border-[5px] border-black bg-[linear-gradient(125deg,rgba(255,255,255,0.98),rgba(255,245,240,0.96))]">
          <div className="grid min-h-[680px] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative flex flex-col justify-center px-8 py-14 sm:px-12 lg:px-18 lg:py-20">
              <div className="soft-grid absolute inset-0 opacity-25" />
              <div className="relative max-w-xl space-y-7">
                <span className="inline-flex w-fit rounded-full border border-primary/15 bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  Personal Blog
                </span>
                <div className="space-y-4">
                  <p className="text-lg font-medium uppercase tracking-[0.3em] text-muted-foreground">
                    Hello, I&apos;m
                  </p>
                  <h1 className="text-5xl font-black tracking-[-0.05em] text-balance text-foreground sm:text-6xl lg:text-7xl">
                    Hi, I&apos;m {name}
                  </h1>
                  <p className="font-serif text-2xl italic text-primary sm:text-3xl">
                    {title}
                  </p>
                </div>
                <p className="max-w-lg text-base leading-8 text-muted-foreground sm:text-lg">
                  {bio}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/blog">
                    <Button className="h-12 rounded-full px-7 text-sm font-semibold uppercase tracking-[0.2em]">
                      Read Posts
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      variant="outline"
                      className="h-12 rounded-full border-black/15 bg-white/70 px-7 text-sm font-semibold uppercase tracking-[0.2em]"
                    >
                      About Me
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {socialItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <Button
                          variant="outline"
                          className="h-11 rounded-full border-black/10 bg-white/72 px-4 text-sm shadow-none transition-transform duration-200 group-hover:-translate-y-0.5"
                        >
                          <Icon className="mr-2 h-4 w-4" />
                          {item.label}
                        </Button>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="relative min-h-[320px] overflow-hidden border-t-[5px] border-black bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),transparent_35%),linear-gradient(180deg,rgba(236,86,118,0.12),rgba(236,86,118,0.22))] lg:min-h-full lg:border-t-0 lg:border-l-[5px]">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,16,16,0)_20%,rgba(24,16,16,0.08)_100%)]" />
              <div className="absolute left-6 top-6 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/65 shadow-lg">
                Notes on code, design and making things
              </div>
              <div className="absolute -left-10 bottom-10 h-40 w-40 rounded-full bg-white/55 blur-3xl" />
              <div className="absolute right-10 top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative flex h-full items-end justify-center px-8 pt-16">
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/12 to-transparent" />
                <Avatar className="h-[430px] w-[320px] rounded-[2rem] border-0 bg-transparent shadow-none sm:h-[520px] sm:w-[380px] lg:h-[640px] lg:w-[460px]">
                  <AvatarImage
                    src={avatar}
                    alt={name}
                    className="object-cover grayscale contrast-125"
                  />
                  <AvatarFallback className="rounded-[2rem] bg-black text-8xl font-black text-white">
                    {name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
