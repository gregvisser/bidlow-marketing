import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Bug,
  CalendarCheck,
  CheckCircle2,
  GraduationCap,
  LifeBuoy,
  Lock,
  Radar,
  ShieldCheck,
  Wrench
} from "lucide-react";

import { FAQAccordion } from "@/components/faq-accordion";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialStrip } from "@/components/testimonial-strip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bidlow",
  description:
    "Bidlow diagnoses system flows and bottlenecks, then builds tailored SaaS systems with AI integrations — hardened for production, supported by training, and maintained through ongoing retainers."
};

const faqs = [
  {
    q: "Do you build custom software and AI systems?",
    a: "Yes. We design and implement tailored SaaS systems and AI-assisted automation modules, but we treat production reality as part of the work: integrations, auth/roles, data model, security, deployment, observability, and support."
  },
  {
    q: "How do you avoid ‘demo-ware’ that breaks in production?",
    a: "We ship like an engineering team: explicit scope, integration contracts, role-based access, audit trails, monitoring, and runbooks. AI is added with guardrails and ownership — not as a fragile prompt glued to your operations."
  },
  {
    q: "Can you work with the tools we already use?",
    a: "That’s usually the point. We integrate and harden what you already pay for (e.g. Microsoft 365, Google Workspace, CRMs/ERPs, ticketing, data warehouses) and only introduce new tooling when it reduces complexity."
  },
  {
    q: "What does the diagnostic include?",
    a: "A structured walkthrough of the workflow(s), a bottleneck and risk map, a system/data-flow view, and a delivery plan with clear options. If we can’t justify build work, we’ll say so."
  }
];

export default function HomePage() {
  const calendlyIsExternal = siteConfig.calendlyUrl.startsWith("http");

  return (
    <div className="prose-b2b">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-radial-fade" />
        <div className="container">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <Reveal className="space-y-6">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Diagnose → Build → Harden → Train → Support
              </p>
              <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
                Diagnose bottlenecks.
                <span className="text-gradient"> Build SaaS systems with AI</span>.
                Run them in production.
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground">
                Bidlow maps your real workflows and failure points, then builds tailored
                systems and integrations that reduce bottlenecks and automate work — with
                security, ownership, and adoption designed in.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href={siteConfig.calendlyUrl}
                  target={calendlyIsExternal ? "_blank" : undefined}
                  rel={calendlyIsExternal ? "noreferrer" : undefined}
                >
                  <Button size="lg">Book a diagnostic call</Button>
                </Link>
                <Link href="#process">
                  <Button size="lg" variant="outline">
                    See how we work
                  </Button>
                </Link>
              </div>
              <p className="max-w-xl text-sm text-muted-foreground">
                Confident, enterprise-safe delivery. No “instant app” theatre — just
                systems that survive real usage.
              </p>
            </Reveal>

            <Reveal className="space-y-4">
              <Card className="ring-neon">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border bg-secondary/40">
                      <Radar className="h-4 w-4 text-primary" aria-hidden />
                    </span>
                    What gets delivered
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  {[
                    { icon: CalendarCheck, label: "System mapping + bottleneck diagnosis" },
                    { icon: Wrench, label: "Tailored SaaS build + integrations" },
                    { icon: BrainCircuit, label: "Guardrailed AI automation modules" },
                    { icon: ShieldCheck, label: "Production hardening + deep debugging" },
                    { icon: GraduationCap, label: "Training + staff adoption support" }
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-md border bg-secondary/30">
                        <Icon className="h-4 w-4 text-primary" aria-hidden />
                      </span>
                      <span className="pt-1">{label}</span>
                    </div>
                  ))}
                  <div className="rounded-lg border bg-secondary/20 p-4">
                    <p className="text-xs text-muted-foreground">
                      We account for the work that “magic builders” often omit: auth/roles,
                      data model, security, deployment, observability, support, and change
                      management.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <TestimonialStrip />

      {/* The market problem */}
      <section className="py-14" aria-label="The market problem">
        <div className="container space-y-8">
          <Reveal>
            <SectionHeading
              eyebrow="The market problem"
              title="Why “instant AI apps” fail in production"
              description="Demos can look impressive. Production systems need integration, ownership, and safety rails."
            />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Lock,
                title: "Auth, roles, and audit trails",
                body: "Real teams need role-based access, approvals, and traceability — not a shared link and hope."
              },
              {
                icon: BookOpen,
                title: "Data model and ownership",
                body: "If data definitions are unclear, automation multiplies confusion. We make the model explicit and owned."
              },
              {
                icon: ShieldCheck,
                title: "Security and reliability",
                body: "Production means secrets, PII, rate limits, failures, and monitoring. The boring parts are the product."
              }
            ].map((item) => (
              <Reveal key={item.title}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-md border bg-secondary/40">
                        <item.icon className="h-4 w-4 text-primary" aria-hidden />
                      </span>
                      <span>{item.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    {item.body}
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <Card>
              <CardContent className="p-6 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">
                  The difference isn’t “AI” — it’s operational engineering.
                </p>
                <p className="mt-2">
                  Integrations, deployment, observability, support, and staff adoption are
                  what make a system usable six months later. That’s the work we scope and ship.
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* What Bidlow delivers (pipeline) */}
      <section className="py-14" aria-label="What Bidlow delivers">
        <div className="container space-y-8">
          <Reveal>
            <SectionHeading
              eyebrow="What Bidlow delivers"
              title="A 5-step pipeline with production-grade deliverables"
              description="Clear scope, clear outputs, and a plan for adoption."
            />
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-5">
            {[
              {
                step: "1",
                icon: Radar,
                title: "Diagnose",
                bullets: [
                  "Flow map + bottlenecks",
                  "System/data boundaries",
                  "Risks + quick wins"
                ]
              },
              {
                step: "2",
                icon: Wrench,
                title: "Build",
                bullets: [
                  "Tailored SaaS modules",
                  "Integrations and workflows",
                  "Acceptance criteria"
                ]
              },
              {
                step: "3",
                icon: BrainCircuit,
                title: "Automate (AI)",
                bullets: [
                  "Guardrailed AI modules",
                  "Human-in-the-loop where needed",
                  "Logging and evaluation hooks"
                ]
              },
              {
                step: "4",
                icon: Bug,
                title: "Harden",
                bullets: [
                  "Deep debugging",
                  "Security review + audit trails",
                  "Deploy + monitor"
                ]
              },
              {
                step: "5",
                icon: LifeBuoy,
                title: "Adopt + Support",
                bullets: [
                  "Staff training",
                  "Runbooks + ownership model",
                  "Retainer support"
                ]
              }
            ].map((s) => (
              <Reveal key={s.title}>
                <Card className="h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border bg-secondary/30 px-2 py-1 text-xs font-mono text-muted-foreground">
                        Step {s.step}
                      </span>
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border bg-secondary/40">
                        <s.icon className="h-4 w-4 text-primary" aria-hidden />
                      </span>
                    </div>
                    <CardTitle className="mt-3">{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <ul className="space-y-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency table */}
      <section className="py-14" aria-label="Transparency">
        <div className="container space-y-8">
          <Reveal>
            <SectionHeading
              eyebrow="Transparency"
              title="What’s promised vs what actually has to be built"
              description="We keep this explicit so scope is honest and delivery is predictable."
            />
          </Reveal>

          <Reveal>
            <Card>
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      <tr className="border-b border-border/60">
                        <th className="py-3 pr-4">What generic builders promise</th>
                        <th className="py-3 pr-4">What actually has to be built</th>
                        <th className="py-3">How Bidlow handles it</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      {[
                        [
                          "“Users can log in”",
                          "Auth flows, roles/permissions, session handling, access boundaries",
                          "Role-based access design, least-privilege, and documented permissions model"
                        ],
                        [
                          "“It uses your data”",
                          "Data model, ownership, lifecycle rules, validation, migrations",
                          "Explicit schema + contracts; reliable sync and auditability"
                        ],
                        [
                          "“Connects to your tools”",
                          "API integrations, webhooks, rate limits, error handling, retries",
                          "Integration contracts + monitoring; idempotency and failure recovery"
                        ],
                        [
                          "“Secure by default”",
                          "Secrets management, PII handling, logging policy, threat model basics",
                          "Security-first delivery: boundaries, access, and traceability built in"
                        ],
                        [
                          "“Deploy it”",
                          "CI/CD, environments, config, rollbacks, incident response basics",
                          "Production deployment + runbooks; sensible release process"
                        ],
                        [
                          "“It’s reliable”",
                          "Logging, metrics, alerts, dashboards, on-call expectations",
                          "Observability and operational visibility from day one"
                        ],
                        [
                          "“Your team will use it”",
                          "Training, documentation, ownership, change management",
                          "Role-based training + enablement; adoption checks and iteration"
                        ],
                        [
                          "“Done”",
                          "Maintenance, dependency updates, support, incremental improvement",
                          "Retainers for support + maintenance with clear SLAs and backlog hygiene"
                        ]
                      ].map((row) => (
                        <tr key={row[0]} className="border-b border-border/60">
                          <td className="py-4 pr-4 align-top text-foreground">{row[0]}</td>
                          <td className="py-4 pr-4 align-top">{row[1]}</td>
                          <td className="py-4 align-top">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="py-14" id="services" aria-label="Services">
        <div className="container space-y-8">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="Pick the smallest sensible starting point"
              description="Modular delivery. Clear scope. Senior-led implementation."
            />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Diagnostic & System Mapping",
                body: "Map the workflow, systems, and bottlenecks. Produce a decision-ready plan."
              },
              {
                title: "Tailored SaaS Build & Integrations",
                body: "Build the system your process actually needs. Integrate the tools you already use."
              },
              {
                title: "AI Automation Modules (guardrailed)",
                body: "Add AI where it reduces manual work, with logging, evaluation hooks, and human-in-the-loop controls."
              },
              {
                title: "Production Hardening & Debugging",
                body: "Fix the hard problems: auth edge cases, data integrity, performance, reliability, and deploy safety."
              },
              {
                title: "Training & Enablement",
                body: "Role-based training, operating guides, and clear ownership so the system survives staff changes."
              },
              {
                title: "Ongoing Support (retainer)",
                body: "Maintenance, incident response support, and continuous improvement with sensible release cadence."
              }
            ].map((s) => (
              <Reveal key={s.title}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>{s.body}</p>
                    <div className="mt-4">
                      <Link href={siteConfig.links.contact} className="inline-flex items-center gap-2 text-sm text-foreground underline underline-offset-4">
                        Ask about fit <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proof / credibility (Examples anchor preserved) */}
      <section className="py-14" id="examples" aria-label="Outcomes">
        <div className="container space-y-8">
          <Reveal>
            <SectionHeading
              eyebrow="Proof"
              title="Credible outcomes (no theatre)"
              description="We focus on measurable flow improvements and operational reliability — not vanity dashboards."
            />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Cycle-time reduction",
                body: "Shorter approvals, faster onboarding, quicker handoffs — with fewer “where is this?” loops."
              },
              {
                title: "Less manual reporting",
                body: "Fewer spreadsheets and reconciliations; automated updates and exception-based alerts."
              },
              {
                title: "Fewer handoffs and rework",
                body: "Clear ownership and integration contracts reduce bounce, duplication, and late-stage surprises."
              }
            ].map((o) => (
              <Reveal key={o.title}>
                <Card>
                  <CardHeader>
                    <CardTitle>{o.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    {o.body}
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="text-sm text-muted-foreground">
              If you need references, we can share relevant examples privately and match them to your context.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Process (anchors preserved: how-it-works + process) */}
      <section className="py-14" id="process" aria-label="Process">
        <div id="how-it-works" aria-hidden />
        <div className="container space-y-8">
          <Reveal>
            <SectionHeading
              eyebrow="Process"
              title="A clean 5-step timeline with deliverables"
              description="You always know what’s being built, why it matters, and what “done” means."
            />
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-5">
            {[
              {
                title: "1) Diagnostic",
                icon: Radar,
                items: ["Workflow + bottleneck map", "Risk register", "Delivery options + plan"]
              },
              {
                title: "2) Design",
                icon: Lock,
                items: ["Data model + boundaries", "Integration design", "Security + access model"]
              },
              {
                title: "3) Build",
                icon: Wrench,
                items: ["Implementation", "Integrations", "Acceptance tests"]
              },
              {
                title: "4) Harden",
                icon: ShieldCheck,
                items: ["Observability", "Performance + reliability", "Production deploy + runbooks"]
              },
              {
                title: "5) Enable",
                icon: GraduationCap,
                items: ["Training sessions", "Docs + ownership", "Support plan / retainer"]
              }
            ].map((p) => (
              <Reveal key={p.title}>
                <Card className="h-full">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-md border bg-secondary/40">
                        <p.icon className="h-4 w-4 text-primary" aria-hidden />
                      </span>
                      <span>{p.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <ul className="space-y-2">
                      {p.items.map((i) => (
                        <li key={i} className="flex gap-3">
                          <span aria-hidden className="mt-2 h-2 w-2 rounded-full bg-foreground/60" />
                          <span>{i}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="text-sm text-muted-foreground">
              Prefer detail? See{" "}
              <Link className="underline underline-offset-4" href="/approach">
                the approach and deliverables
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Final CTA (Contact anchor preserved) */}
      <section className="py-16" id="contact" aria-label="Contact">
        <div className="container">
          <Reveal>
            <Card className="ring-neon">
              <CardContent className="p-8">
                <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                  <div className="space-y-3">
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      Contact
                    </p>
                    <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                      Book a diagnostic call. Get a clear plan.
                    </h2>
                    <p className="max-w-2xl text-muted-foreground">
                      If you can describe the workflow and where it slows down, we’ll
                      tell you what’s worth fixing, what it will take to ship safely, and
                      the smallest sensible next step.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Or email{" "}
                      <a className="underline underline-offset-4" href={`mailto:${siteConfig.email}`}>
                        {siteConfig.email}
                      </a>
                      .
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-stretch">
                    <Link
                      href={siteConfig.calendlyUrl}
                      target={calendlyIsExternal ? "_blank" : undefined}
                      rel={calendlyIsExternal ? "noreferrer" : undefined}
                    >
                      <Button size="lg" className="w-full">
                        Book a diagnostic call
                      </Button>
                    </Link>
                    <Link href={siteConfig.links.contact}>
                      <Button size="lg" variant="outline" className="w-full">
                        Send a message
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14" aria-label="Frequently asked questions">
        <div className="container space-y-8">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Practical questions, direct answers." />
          </Reveal>
          <Reveal className="mx-auto max-w-3xl">
            <FAQAccordion items={faqs} />
          </Reveal>
        </div>
      </section>
    </div>
  );
}

