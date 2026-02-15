import type { Metadata } from "next";
import Link from "next/link";

import { CTASection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/constants";
import { ContactForm } from "@/app/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a diagnostic call or send a message. Senior-led, production-focused delivery."
};

export default function ContactPage() {
  return (
    <div className="container py-14">
      <div className="mx-auto max-w-3xl space-y-4">
        <p className="text-sm font-medium text-muted-foreground">Contact</p>
        <h1 className="text-4xl font-semibold tracking-tight">
          Book a call or request a quick audit
        </h1>
        <p className="text-lg text-muted-foreground">
          If you can describe the workflow and where it slows down, we can
          usually identify a shortlist of opportunities quickly.
        </p>
      </div>

      <section className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <ContactForm />

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Book a 30‑minute discovery call</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                Use the booking link to pick a time. If you prefer email first,
                send a message and we’ll propose options.
              </p>
              <Link
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open booking link
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What happens next</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <ol className="list-decimal space-y-2 pl-5">
                <li>
                  We confirm the bottleneck and what “success” means in plain
                  terms.
                </li>
                <li>
                  You receive a brief plan: quick wins, likely risks, and a
                  realistic next step.
                </li>
                <li>
                  If it makes sense, we start with a fixed-scope audit or a
                  tightly scoped sprint.
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prefer email?</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Email{" "}
              <a className="underline underline-offset-4" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>{" "}
              with a short description of the workflow, the tools involved, and
              the main pain point.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-14 space-y-8" aria-label="Contact principles">
        <SectionHeading
          title="A note on confidentiality"
          description="You don’t need to share sensitive information to start the conversation."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Keep it high level</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              In your first message, share the workflow and symptoms rather than
              customer data, credentials, or internal documents.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Security comes early</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              If we proceed, we’ll agree access, logging, and boundaries before
              any implementation work begins.
            </CardContent>
          </Card>
        </div>
      </section>

      <CTASection className="mt-10" />
    </div>
  );
}

