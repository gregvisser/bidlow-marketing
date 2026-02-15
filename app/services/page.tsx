import type { Metadata } from "next";
import Link from "next/link";

import { CTASection } from "@/components/cta-section";
import { PricingCards, type PricingTier } from "@/components/pricing-cards";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three packages: a diagnostic, an implementation sprint, and ongoing support — designed for production realities."
};

const tiers: PricingTier[] = [
  {
    name: "Process & Systems Audit",
    description: "Fixed scope diagnosis with a decision-ready roadmap.",
    bestFor:
      "When you need clarity on bottlenecks, data flow, and the best next investment.",
    typicalDuration: "2–3 weeks",
    highlights: [
      "Discovery interviews and walk-through",
      "Process analytics (where data exists) and friction mapping",
      "Audit report: constraints, risks, quick wins",
      "ROI opportunities (measured, explainable)",
      "Implementation roadmap and proposal"
    ],
    cta: { label: "Request a quick audit", href: siteConfig.links.contact }
  },
  {
    name: "Implementation Sprint",
    description: "Build and integrate the systems that unblock delivery.",
    bestFor:
      "When you have a target outcome and want hands-on delivery with clear acceptance criteria.",
    typicalDuration: "4–8 weeks",
    highlights: [
      "Solution design + scope control",
      "Automation and integrations",
      "Dashboards and operational reporting",
      "Documentation + training sessions",
      "Handover pack + next-step plan"
    ],
    cta: { label: "Book a call", href: siteConfig.calendlyUrl },
    emphasis: true
  },
  {
    name: "Managed Improvement",
    description: "Ongoing maintenance and incremental upgrades.",
    bestFor:
      "When you want systems to stay healthy and continue improving without building a large internal function.",
    typicalDuration: "Monthly retainer (rolling)",
    highlights: [
      "Monitoring and maintenance",
      "Monthly improvement backlog and releases",
      "Training refreshers and new joiner enablement",
      "Quarterly outcomes review and reporting"
    ],
    cta: { label: "Discuss managed support", href: siteConfig.calendlyUrl }
  }
];

export default function ServicesPage() {
  return (
    <div className="container py-14">
      <div className="mx-auto max-w-3xl space-y-4">
        <p className="text-sm font-medium text-muted-foreground">Services</p>
        <h1 className="text-4xl font-semibold tracking-tight">
          Clear packages, outcome-focused delivery.
        </h1>
        <p className="text-lg text-muted-foreground">
          You don’t need a giant transformation programme. You need a clear view
          of what’s holding things back, a sensible implementation plan, and a
          partner who stays accountable through adoption.
        </p>
      </div>

      <section className="mt-12 space-y-8" aria-label="Service packages">
        <SectionHeading
          title="Packages"
          description="Start small, keep scope tight, and build confidence with measurable outcomes."
        />
        <PricingCards tiers={tiers} />
      </section>

      <section className="mt-14 space-y-8" aria-label="What success looks like">
        <SectionHeading
          title="What success looks like"
          description="Different organisations measure value differently. We set a small number of indicators, then make them move."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Faster flow",
              body: "Cycle time reduction in approvals, onboarding, fulfilment, or reporting."
            },
            {
              title: "Less manual work",
              body: "Reduced time spent copying data, reconciling spreadsheets, and chasing updates."
            },
            {
              title: "More control",
              body: "Clear audit trail, consistent handoffs, and ownership that survives staff changes."
            }
          ].map((i) => (
            <Card key={i.title}>
              <CardHeader>
                <CardTitle>{i.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {i.body}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-14 space-y-8" aria-label="Integrations and tools">
        <SectionHeading
          title="Integrations & tools"
          description="We work with the tools you already pay for, then add only what’s needed."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Microsoft 365",
            "Google Workspace",
            "CRMs",
            "ERPs",
            "Data pipelines",
            "Document stores",
            "Ticketing systems",
            "SSO / identity"
          ].map((tool) => (
            <div
              key={tool}
              className="rounded-lg border border-border/70 bg-background/30 p-4 text-sm text-muted-foreground"
            >
              {tool}
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          The goal isn’t tooling for its own sake — it’s a reliable flow of work
          and information.
        </p>
      </section>

      <section className="mt-14" aria-label="CTA panel">
        <div className="rounded-xl border bg-secondary/40 p-8">
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight">
                Not sure where to start?
              </h2>
              <p className="text-muted-foreground">
                Start with an audit if you want clarity. If you already have a
                specific bottleneck, an implementation sprint may be the fastest
                path to value.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Link
                className="inline-flex items-center justify-center rounded-md border bg-background px-4 py-2 text-sm font-medium hover:bg-accent"
                href={siteConfig.links.contact}
              >
                Request a quick audit
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noreferrer"
              >
                Book a call
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection className="mt-6" />

      <section className="mt-4">
        <p className="text-sm text-muted-foreground">
          Want to understand how we work? See{" "}
          <Link className="underline underline-offset-4" href="/approach">
            the approach and deliverables
          </Link>
          .
        </p>
      </section>
    </div>
  );
}

