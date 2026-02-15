import type { Metadata } from "next";
import Link from "next/link";

import { CTASection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior-led consulting with a human touch: accountable delivery, practical training, and systems that keep working."
};

export default function AboutPage() {
  return (
    <div className="container py-14">
      <div className="mx-auto max-w-3xl space-y-4">
        <p className="text-sm font-medium text-muted-foreground">About</p>
        <h1 className="text-4xl font-semibold tracking-tight">
          Modern technology with a human touch.
        </h1>
        <p className="text-lg text-muted-foreground">
          Bidlow is a senior-led consulting team. That means you get direct
          ownership, hands-on delivery, and straight answers. We focus on
          practical improvements: clear process, sensible systems, and real
          adoption — not theatre.
        </p>
      </div>

      <section className="mt-12 space-y-8" aria-label="Senior-led narrative">
        <SectionHeading
          title="Senior-led, accountable delivery"
          description="A small team can move quickly — but only if the work is grounded and owned."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>What we do</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                We help organisations understand why work slows down, what risks
                are hidden in handoffs, and how to fix it without overbuilding.
              </p>
              <p>
                When software is needed, we build and integrate AI-enabled SaaS
                and automation in a way your team can operate confidently —
                supported by training, documentation, and maintenance.
              </p>
              <p>
                You’ll have a named lead consultant and direct access to the
                delivery team throughout the engagement.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>What you get</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                Clear deliverables: audit findings, process maps, ROI
                opportunities, and a roadmap you can share internally.
              </p>
              <p>
                Delivery that sticks: enablement sessions, handover packs, and a
                sensible operating model (in-house or managed).
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-14 space-y-8" aria-label="Why Bidlow">
        <SectionHeading
          title="Why Bidlow"
          description="A few things clients value when the work needs to be credible."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Accountability",
              body: "You work directly with the team responsible for outcomes — not a handoff chain."
            },
            {
              title: "Measured claims",
              body: "We define success in plain terms and report progress against a small set of indicators."
            },
            {
              title: "Adoption-first",
              body: "Training, documentation, and ownership are part of the plan from day one."
            }
          ].map((b) => (
            <Card key={b.title}>
              <CardHeader>
                <CardTitle>{b.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {b.body}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-14 space-y-8" aria-label="Values">
        <SectionHeading
          title="Values"
          description="How we work together matters as much as what we deliver."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Clarity over complexity",
              body: "Simple scope, simple ownership, simple reporting."
            },
            {
              title: "Practical delivery",
              body: "We ship what works in your environment — not what looks good in a slide deck."
            },
            {
              title: "Respect for people",
              body: "Automation should reduce cognitive load, not create a new burden."
            },
            {
              title: "Long-term reliability",
              body: "Maintenance, documentation, and sensible security are part of “done”."
            }
          ].map((v) => (
            <Card key={v.title}>
              <CardHeader>
                <CardTitle>{v.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {v.body}
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          If you’d like to talk through a specific situation,{" "}
          <Link
            className="underline underline-offset-4"
            href={siteConfig.links.contact}
          >
            send a message
          </Link>{" "}
          or{" "}
          <Link
            className="underline underline-offset-4"
            href={siteConfig.calendlyUrl}
            target="_blank"
            rel="noreferrer"
          >
            book a 30‑minute call
          </Link>
          .
        </p>
      </section>

      <CTASection className="mt-10" />
    </div>
  );
}

