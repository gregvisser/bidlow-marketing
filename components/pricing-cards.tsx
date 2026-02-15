import Link from "next/link";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";

export type PricingTier = {
  name: string;
  description: string;
  highlights: string[];
  bestFor: string;
  typicalDuration: string;
  cta: { label: string; href: string };
  emphasis?: boolean;
};

export function PricingCards({ tiers }: { tiers: PricingTier[] }) {
  const calendlyIsExternal = siteConfig.calendlyUrl.startsWith("http");

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {tiers.map((tier) => (
        <Card
          key={tier.name}
          className={
            tier.emphasis
              ? "border-primary/40 shadow-md"
              : undefined
          }
        >
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{tier.name}</span>
              {tier.emphasis ? (
                <span className="rounded-full border bg-secondary px-2 py-1 text-xs font-mono text-muted-foreground">
                  Most common
                </span>
              ) : null}
            </CardTitle>
            <CardDescription>{tier.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Best for</p>
              <p className="text-sm text-muted-foreground">{tier.bestFor}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Typical duration</p>
              <p className="text-sm text-muted-foreground">{tier.typicalDuration}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Includes</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {tier.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span aria-hidden className="mt-1 h-1.5 w-1.5 rounded-full bg-foreground/60" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Link href={tier.cta.href} target={tier.cta.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              <Button className="w-full" variant={tier.emphasis ? "default" : "outline"}>
                {tier.cta.label}
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
      <div className="md:col-span-3">
        <p className="text-sm text-muted-foreground">
          Not sure which package fits?{" "}
          <Link
            className="underline underline-offset-4"
            href={siteConfig.calendlyUrl}
            target={calendlyIsExternal ? "_blank" : undefined}
            rel={calendlyIsExternal ? "noreferrer" : undefined}
          >
            Book a call
          </Link>{" "}
          and we’ll recommend the smallest sensible starting point.
        </p>
      </div>
    </div>
  );
}

