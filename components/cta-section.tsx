import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function CTASection({
  title = "Ready to make your operations simpler and more reliable?",
  description = "Book a 30‑minute discovery call to get clear next steps. Prefer email? Request a quick audit and we’ll reply with a shortlist of opportunities.",
  primaryLabel = "Book a 30‑min discovery call",
  primaryHref = siteConfig.calendlyUrl,
  secondaryLabel = "Request a quick audit",
  secondaryHref = siteConfig.links.contact,
  className
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
}) {
  return (
    <section className={cn("py-12", className)} aria-label="Call to action">
      <div className="container">
        <div className="relative overflow-hidden rounded-xl border bg-secondary/40 p-8">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40 bg-grid"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-radial-fade"
          />
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
              <p className="max-w-2xl text-muted-foreground">{description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Link
                href={primaryHref}
                target={primaryHref.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                <Button size="lg">{primaryLabel}</Button>
              </Link>
              <Link
                href={secondaryHref}
                target={secondaryHref.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                <Button size="lg" variant="outline">
                  {secondaryLabel}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

