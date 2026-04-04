"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4 md:px-6">
      <div className="container max-w-screen-2xl">
        <div className="rounded-full border border-black/10 bg-white/80 px-5 shadow-[0_12px_30px_rgba(30,16,16,0.08)] backdrop-blur supports-[backdrop-filter]:bg-white/65">
          <nav className="flex h-16 items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
              <span className="font-serif text-2xl italic text-primary">Taka</span>
              <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Blog
              </span>
            </Link>
            <div className="flex items-center gap-5 text-sm font-semibold uppercase tracking-[0.18em]">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative py-2 transition-colors hover:text-foreground/80",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-foreground/55"
                  )}
                >
                  {item.label}
                  {pathname === item.href && (
                    <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-primary" />
                  )}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
      <div className="container max-w-screen-2xl px-0">
        <Separator className="mt-4 opacity-40" />
      </div>
    </header>
  );
}
