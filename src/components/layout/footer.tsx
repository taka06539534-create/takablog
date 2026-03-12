import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <Separator />
      <div className="container flex max-w-screen-2xl flex-col items-center justify-between gap-4 py-8 md:h-16 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-6">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            Built with Next.js, Tailwind CSS, and shadcn/ui
          </p>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          &copy; {currentYear} TakaBlog. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
