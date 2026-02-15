import type { Metadata } from "next";
import Link from "next/link";

import { CTASection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "Bidlow’s three-step engagement: Diagnose, Build, Adopt — with clear inputs, outputs, and timelines."
};

function SimpleDiagram() {
  return (
    <div
      className="rounded-xl border bg-secondary/30 p-6"
      role="img"
      aria-label="A three-step diagram: Diagnose leads to Build leads to Adopt."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Diagnose",
            body: "Constraints, data, and priorities"
          },
          {
            title: "Build",
            body: "Systems, integrations, automation"
          },
          {
            title: "Adopt",
            body: "Training, ownership, maintenance"
          }
        ].map((s, idx) => (
          <div key={s.title} className="relative">
            <div className="rounded-lg border bg-background p-4">
              <p className="text-sm font-semibold">{s.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
            </div>
            {idx < 2 ? (
              <div
                aria-hidden
                className="hidden md:block absolute -right-3 top-1/2 h-px w-6 bg-border"
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ApproachPage() {
  const calendlyIsExternal = siteConfig.calendlyUrl.startsWith("http");

  return (
    <div className="container py-14">
      <div className="mx-auto max-w-3xl space-y-4">
        <p className="text-sm font-medium text-muted-foreground">Approach</p>
        <h1 className="text-4xl font-semibold tracking-tight">
          A simple structure that keeps delivery grounded.
        </h1>
        <p className="text-lg text-muted-foreground">
          The goal is not to “do more tech”. The goal is to remove bottlenecks,
          improve reliability, and ensure your team can run the outcome without
          dependency on a single person.
        </p>
      </div>

      <section className="mt-10" aria-label="Diagram">
        <SimpleDiagram />
      </section>

      <section className="mt-14 space-y-8" aria-label="The three steps">
        <SectionHeading
          title="Diagnose → Build → Adopt"
          description="Each step has clear inputs, outputs, and timeboxes."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>1) Diagnose</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div className="space-y-1">
                <p className="font-medium text-foreground">What we do</p>
                <p>
                  Map your current process, identify constraints, review
                  systems/data flow, and agree measurable outcomes.
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-foreground">What you provide</p>
                <p>
                  Access to key stakeholders, existing SOPs (if any), sample
                  artefacts (reports, tickets, forms), and relevant system
                  context.
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-foreground">Outputs</p>
                <ul className="mt-1 space-y-1">
                  {[
                    "Audit report and constraints analysis",
                    "Current + target process map",
                    "ROI opportunities and risks",
                    "Implementation roadmap and proposal"
                  ].map((o) => (
                    <li key={o} className="flex gap-2">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/60" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-foreground">Timeline</p>
                <p>Typically 2–3 weeks.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2) Build</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div className="space-y-1">
                <p className="font-medium text-foreground">What we do</p>
                <p>
                  Deliver the agreed improvements: integrations, automation,
                  lightweight apps, reporting, and operational dashboards.
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-foreground">What you provide</p>
                <p>
                  Access to relevant systems, a named owner for decisions, and
                  availability for short review sessions.
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-foreground">Outputs</p>
                <ul className="mt-1 space-y-1">
                  {[
                    "Working solution with acceptance criteria met",
                    "Documentation (how it works, how to operate it)",
                    "Operational reporting or dashboards",
                    "Risk and incident handling notes"
                  ].map((o) => (
                    <li key={o} className="flex gap-2">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/60" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-foreground">Timeline</p>
                <p>Typically 4–8 weeks depending on scope.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3) Adopt</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div className="space-y-1">
                <p className="font-medium text-foreground">What we do</p>
                <p>
                  Enable your team: training, role-based documentation, and a
                  sensible operating model so improvements stick.
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-foreground">What you provide</p>
                <p>
                  Time for training sessions, a clear owner, and agreement on
                  the maintenance approach (in-house or managed).
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-foreground">Outputs</p>
                <ul className="mt-1 space-y-1">
                  {[
                    "Training sessions and materials",
                    "Handover pack (access, runbooks, support)",
                    "Adoption checks and feedback loop",
                    "Maintenance plan with ownership"
                  ].map((o) => (
                    <li key={o} className="flex gap-2">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/60" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-foreground">Timeline</p>
                <p>Runs alongside delivery and continues after launch.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-14 space-y-8" aria-label="Engagement principles">
        <SectionHeading
          title="Engagement principles"
          description="A few rules that keep work credible and predictable."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Clarity",
              body: "Simple scope, clear ownership, and measurable outcomes."
            },
            {
              title: "Security",
              body: "Least-privilege access, explicit data flows, and documented boundaries."
            },
            {
              title: "Adoption",
              body: "Training and documentation are part of delivery, not an afterthought."
            },
            {
              title: "Measurable outcomes",
              body: "We track a small set of indicators and report progress plainly."
            }
          ].map((p) => (
            <Card key={p.title}>
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {p.body}
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          Ready to discuss a specific bottleneck?{" "}
          <Link
            className="underline underline-offset-4"
            href={siteConfig.calendlyUrl}
            target={calendlyIsExternal ? "_blank" : undefined}
            rel={calendlyIsExternal ? "noreferrer" : undefined}
          >
            Book a 30‑minute call
          </Link>
          .
        </p>
      </section>

      <CTASection className="mt-10" />
    </div>
  );
}

