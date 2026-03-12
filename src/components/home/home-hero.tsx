import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
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
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container max-w-screen-2xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Avatar className="h-32 w-32 mx-auto">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback className="text-4xl">
                {name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Hi, I&apos;m {name}
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">{title}</p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">{bio}</p>
          </div>
          <div className="flex gap-4">
            {socialLinks.github && (
              <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">GitHub</Button>
              </Link>
            )}
            {socialLinks.twitter && (
              <Link href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">Twitter</Button>
              </Link>
            )}
            {socialLinks.linkedin && (
              <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">LinkedIn</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
