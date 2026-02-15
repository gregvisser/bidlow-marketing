import Link from "next/link";

import { siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <p className="text-sm font-semibold tracking-tight text-gradient">
                {siteConfig.name.toUpperCase()}
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              Trusted operators, not hype.
            </p>
            <p className="text-sm text-muted-foreground">
              {siteConfig.location} ·{" "}
              <a className="underline underline-offset-4" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>

          <nav className="flex items-center gap-4" aria-label="Footer">
            <Link
              href={siteConfig.links.privacy}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href={siteConfig.links.terms}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

