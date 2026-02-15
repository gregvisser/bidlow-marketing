import type { Metadata } from "next";

import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Bidlow."
};

export default function PrivacyPage() {
  return (
    <div className="container py-14">
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight">Privacy policy</h1>
        <p className="text-sm text-muted-foreground">
          This policy explains what personal data we collect through this website,
          how we use it, and your rights. It is not legal advice.
        </p>

        <section className="space-y-3" aria-label="Overview">
          <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
          <p className="text-muted-foreground">
            Bidlow (“we”, “us”) respects your privacy. This policy explains what
            data we collect, how we use it, and your rights.
          </p>
          <p className="text-muted-foreground">
            If you have questions, contact{" "}
            <a className="underline underline-offset-4" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </p>
        </section>

        <section className="space-y-3" aria-label="Data we collect">
          <h2 className="text-2xl font-semibold tracking-tight">Data we collect</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <strong>Contact details:</strong> name, company, email, phone (if
              provided), and your message when you submit the contact form.
            </li>
            <li>
              <strong>Basic usage data:</strong> server logs may include IP
              address, user agent, and request metadata for security and
              troubleshooting.
            </li>
          </ul>
        </section>

        <section className="space-y-3" aria-label="How we use data">
          <h2 className="text-2xl font-semibold tracking-tight">How we use your data</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>To respond to enquiries and provide requested information.</li>
            <li>To arrange and deliver consulting services.</li>
            <li>To maintain site security and prevent abuse.</li>
          </ul>
        </section>

        <section className="space-y-3" aria-label="Lawful basis">
          <h2 className="text-2xl font-semibold tracking-tight">Lawful basis</h2>
          <p className="text-muted-foreground">
            We process personal data where it is necessary for our legitimate
            interests (responding to enquiries, operating our business), to take
            steps at your request prior to entering a contract, and where
            required to comply with legal obligations.
          </p>
        </section>

        <section className="space-y-3" aria-label="Sharing">
          <h2 className="text-2xl font-semibold tracking-tight">Sharing and processors</h2>
          <p className="text-muted-foreground">
            We may use service providers (for example, website hosting and email
            delivery). We only share data as needed to provide the service, and
            we expect appropriate security measures.
          </p>
        </section>

        <section className="space-y-3" aria-label="Retention">
          <h2 className="text-2xl font-semibold tracking-tight">Retention</h2>
          <p className="text-muted-foreground">
            We keep enquiry data only as long as necessary for the purposes
            above, then delete or anonymise it. If you become a client, some
            records may be retained for contractual and legal reasons.
          </p>
        </section>

        <section className="space-y-3" aria-label="Your rights">
          <h2 className="text-2xl font-semibold tracking-tight">Your rights</h2>
          <p className="text-muted-foreground">
            Depending on your situation, you may have rights to access, correct,
            delete, restrict, or object to processing, and to data portability.
            You also have the right to complain to the UK Information
            Commissioner’s Office (ICO).
          </p>
        </section>

        <section className="space-y-3" aria-label="Cookies">
          <h2 className="text-2xl font-semibold tracking-tight">Cookies</h2>
          <p className="text-muted-foreground">
            This website may use essential cookies required for basic operation.
            If you add analytics or marketing tools later, you should update
            this policy and implement an appropriate consent mechanism.
          </p>
        </section>

        <section className="space-y-3" aria-label="Updates">
          <h2 className="text-2xl font-semibold tracking-tight">Updates</h2>
          <p className="text-muted-foreground">
            We may update this policy from time to time. The latest version will
            be published on this page.
          </p>
        </section>
      </div>
    </div>
  );
}

