import type { Metadata } from "next";

import { CTASection } from "@/components/cta-section";
import { CaseStudyCard, type CaseStudy } from "@/components/case-study-card";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Outcomes",
  description:
    "Outcome patterns from production delivery: cycle-time reduction, fewer handoffs, less manual reporting, faster onboarding."
};

const caseStudies: CaseStudy[] = [
  {
    title: "Manufacturing ops: unified execution + live visibility across shifts",
    label: "Outcome pattern",
    sector: "Manufacturing operations",
    problem:
      "Work orders, quality issues, and maintenance actions were tracked across spreadsheets and ad-hoc messages. Ownership was unclear across shifts, and reporting lagged by days.",
    approach:
      "Mapped shift handoffs and exception paths, defined ownership rules and escalation thresholds, and established a single operational view for production, quality, and maintenance.",
    solution:
      "Installed an execution backbone with role-based queues, deadline logic, escalation rules, and leadership dashboards. Integrated existing data sources and automated daily reporting.",
    outcomes: [
      "Faster issue discovery through live exception visibility",
      "Clear ownership across shifts and handoffs",
      "Less manual reporting and fewer spreadsheet reconciliations"
    ],
    stack: [
      "Microsoft 365 / Google Workspace",
      "Workflow engine",
      "Dashboards",
      "Data pipelines"
    ]
  },
  {
    title: "Professional services: faster delivery via structured work intake + AI-assisted knowledge",
    label: "Outcome pattern",
    sector: "Professional services",
    problem:
      "Client work entered via email and chat with inconsistent triage. Knowledge was scattered across documents, leading to rework and slow onboarding.",
    approach:
      "Mapped work intake and handoffs from sales to delivery, set ownership and escalation rules, and defined a practical knowledge structure for repeatable delivery.",
    solution:
      "Installed a workflow engine for intake/triage, a searchable knowledge base, and AI assistance for retrieval and summarisation. Delivered role-based training and operating runbooks.",
    outcomes: [
      "Faster onboarding with fewer ‘tribal steps’",
      "Reduced rework via standardised playbooks and intake rules",
      "Faster knowledge retrieval with guardrailed AI assistance"
    ],
    stack: [
      "Email + calendar",
      "Knowledge base",
      "AI retrieval (guardrailed)",
      "Automation"
    ]
  },
  {
    title: "Multi-department approvals: enforced SLAs + audit-grade traceability",
    label: "Outcome pattern",
    sector: "Finance / compliance / operations",
    problem:
      "Approvals ran through email threads with unclear ownership, inconsistent SLAs, and weak traceability. Issues were found late, after delays and escalations.",
    approach:
      "Diagnosed decision points and handoffs, defined role-based ownership and SLA rules, and aligned the workflow with audit and access requirements.",
    solution:
      "Installed an approval workflow with enforced deadlines, escalation logic, a complete audit trail, and dashboards showing backlog risk by team and stage.",
    outcomes: [
      "Improved SLA adherence and reduced late-stage escalations",
      "Audit-ready traceability: clear who/when/why for decisions",
      "More predictable approvals through ownership and deadline logic"
    ],
    stack: [
      "SSO / identity",
      "Workflow tool",
      "Audit logging",
      "CRM / ERP"
    ]
  },
  {
    title: "Revenue module: reduced leakage through enforced next-steps and follow-ups",
    label: "Outcome pattern",
    sector: "Sales + delivery handoff",
    problem:
      "Deals stalled after proposals due to unclear next steps, inconsistent follow-up, and weak handoffs into delivery. Forecast accuracy was low and updates were manual.",
    approach:
      "Mapped the pipeline and post-sale handoff, defined ownership and escalation rules for key stages, and agreed a small set of revenue execution KPIs.",
    solution:
      "Installed the Revenue Module (ODCRM framework) inside the Operational OS: enforced next actions, follow-up deadlines, escalation for stalled deals, and leadership dashboards.",
    outcomes: [
      "Fewer stalled deals through enforced next steps and follow-up logic",
      "Improved stage hygiene and more reliable forecasting inputs",
      "Less manual pipeline admin via automation and integrations"
    ],
    stack: [
      "CRM",
      "Email integration",
      "Dashboards",
      "Revenue workflow rules"
    ]
  },
  {
    title: "Service delivery: fewer missed handoffs with queue-based ownership and escalation",
    label: "Outcome pattern",
    sector: "Operations / service delivery",
    problem:
      "Work bounced between teams without clear ownership. Deadlines existed on paper but weren’t enforced, leading to silent delays and reactive firefighting.",
    approach:
      "Mapped key handoffs, defined ownership rules at each stage, and set escalation thresholds based on risk and customer impact.",
    solution:
      "Installed queue-based workflows with deadline logic, escalation rules, and executive visibility into bottlenecks and ageing work. Added staff training and runbooks.",
    outcomes: [
      "Improved customer response consistency via clear ownership"
    ],
    stack: [
      "Ticketing",
      "Workflow engine",
      "Dashboards",
      "PM tool integration"
    ]
  },
  {
    title: "Data + reporting: automated executive visibility with exception-based alerts",
    label: "Outcome pattern",
    sector: "Leadership reporting",
    problem:
      "Leadership visibility relied on late, manual reporting. Metrics were debated rather than acted on, and issues were discovered after the fact.",
    approach:
      "Defined a small set of decision-ready metrics, mapped data sources, and established escalation rules for exceptions and threshold breaches.",
    solution:
      "Implemented automated reporting and dashboards with exception alerts, audit trails, and clear owners for each metric. Trained staff on interpretation and action loops.",
    outcomes: [
      "Less manual reporting via automated data flows and alerts",
      "Faster time-to-awareness for exceptions and risk",
      "More reliable decision cadence based on live metrics"
    ],
    stack: [
      "Data pipelines",
      "Dashboards",
      "Alerting",
      "Governance"
    ]
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="container py-14">
      <div className="mx-auto max-w-3xl space-y-4">
        <p className="text-sm font-medium text-muted-foreground">Case studies</p>
        <h1 className="text-4xl font-semibold tracking-tight">
          Outcome patterns from production delivery
        </h1>
        <p className="text-lg text-muted-foreground">
          These are representative patterns rather than client-by-client claims.
          We can share relevant references privately and match them to your context.
        </p>
      </div>

      <section className="mt-12 space-y-8" aria-label="Case studies">
        <SectionHeading
          title="Examples"
          description="Each example shows the problem, the approach, the solution, and the outcome types we aim for."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} study={study} />
          ))}
        </div>
      </section>

      <CTASection className="mt-12" />
    </div>
  );
}

