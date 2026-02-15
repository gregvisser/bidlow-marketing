import Link from "next/link";

import { navItems, siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const calendlyIsExternal = siteConfig.calendlyUrl.startsWith("http");

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/55 backdrop-blur-xl">
      <div className="container">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <Link
              href={siteConfig.links.home}
              aria-label="Bidlow home"
              className="group inline-flex items-center rounded-md px-1 py-1"
            >
              <span className="text-base font-semibold tracking-tight text-gradient">
                {siteConfig.name.toUpperCase()}
              </span>
            </Link>
            <nav className="hidden items-center gap-5 md:flex" aria-label="Primary">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <details className="relative md:hidden">
              <summary className="cursor-pointer select-none rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                Menu
              </summary>
              <div className="absolute right-0 mt-2 w-56 rounded-lg border bg-background p-2 shadow-md">
                <nav className="grid gap-1" aria-label="Mobile">
                  <Link
                    href={siteConfig.links.home}
                    className="rounded-md px-3 py-2 text-sm hover:bg-accent"
                  >
                    Home
                  </Link>
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-md px-3 py-2 text-sm hover:bg-accent"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </details>
            <Link
              href={siteConfig.calendlyUrl}
              target={calendlyIsExternal ? "_blank" : undefined}
              rel={calendlyIsExternal ? "noreferrer" : undefined}
            >
              <Button className="whitespace-nowrap">Book a Diagnostic Call</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

