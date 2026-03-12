import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const metadata = {
  title: "About",
  description: "Learn more about me",
};

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "Python", "PostgreSQL"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel"] },
];

const socialLinks = [
  { name: "GitHub", url: "https://github.com" },
  { name: "Twitter", url: "https://twitter.com" },
  { name: "LinkedIn", url: "https://linkedin.com" },
  { name: "Email", url: "mailto:hello@example.com" },
];

export default function AboutPage() {
  return (
    <div className="container max-w-screen-2xl px-4 md:px-6 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-12">
          <Avatar className="h-32 w-32 mb-6">
            <AvatarImage src="/avatar.png" alt="Taka" />
            <AvatarFallback className="text-4xl">T</AvatarFallback>
          </Avatar>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground max-w-[600px]">
            Hi! I&apos;m Taka, a passionate software developer based in Tokyo, Japan.
            I love building web applications and sharing my knowledge with the community.
          </p>
        </div>

        <Separator className="my-12" />

        {/* Bio Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Bio</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              I&apos;ve been working as a software developer for over 5 years, specializing in building
              scalable web applications. My journey started when I built my first website in high school,
              and I&apos;ve been hooked ever since.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              When I&apos;m not coding, you can find me hiking in the mountains, reading tech blogs,
              or experimenting with new recipes in the kitchen. I believe in continuous learning
              and always have a side project going on.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Skills & Technologies</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {skills.map((skill) => (
              <Card key={skill.category}>
                <CardHeader>
                  <CardTitle className="text-lg">{skill.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
          <p className="text-muted-foreground mb-6">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
            part of your visions. Feel free to reach out!
          </p>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
