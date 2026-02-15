import type { Metadata } from "next";

import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Website terms for Bidlow."
};

export default function TermsPage() {
  return (
    <div className="container py-14">
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight">Terms of service</h1>
        <p className="text-sm text-muted-foreground">
          These terms apply to your use of this website. They are not legal advice.
          If you purchase services from {siteConfig.name}, separate commercial terms will apply.
        </p>

        <section className="space-y-3" aria-label="About these terms">
          <h2 className="text-2xl font-semibold tracking-tight">About these terms</h2>
          <p className="text-muted-foreground">
            These terms govern your use of the website for {siteConfig.name} (
            “we”, “us”). If you are purchasing services, separate commercial
            terms may apply.
          </p>
        </section>

        <section className="space-y-3" aria-label="Website use">
          <h2 className="text-2xl font-semibold tracking-tight">Website use</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              You agree not to misuse the site, attempt unauthorised access, or
              disrupt its operation.
            </li>
            <li>
              Content is provided for general information only and may change
              without notice.
            </li>
          </ul>
        </section>

        <section className="space-y-3" aria-label="No advice">
          <h2 className="text-2xl font-semibold tracking-tight">No advice</h2>
          <p className="text-muted-foreground">
            Information on this website does not constitute professional advice.
            You should obtain appropriate advice tailored to your situation.
          </p>
        </section>

        <section className="space-y-3" aria-label="Intellectual property">
          <h2 className="text-2xl font-semibold tracking-tight">Intellectual property</h2>
          <p className="text-muted-foreground">
            Unless stated otherwise, we own or license the content on this
            website. You may not reproduce or distribute it without permission,
            except as allowed by law.
          </p>
        </section>

        <section className="space-y-3" aria-label="Liability">
          <h2 className="text-2xl font-semibold tracking-tight">Liability</h2>
          <p className="text-muted-foreground">
            To the maximum extent permitted by law, we are not liable for any
            loss arising from your use of the website. Nothing in these terms
            limits liability for fraud, death, or personal injury caused by
            negligence, or any liability that cannot be excluded under UK law.
          </p>
        </section>

        <section className="space-y-3" aria-label="Third-party links">
          <h2 className="text-2xl font-semibold tracking-tight">Third‑party links</h2>
          <p className="text-muted-foreground">
            This website may include links to third‑party sites for convenience.
            We do not control and are not responsible for those sites or their
            content.
          </p>
        </section>

        <section className="space-y-3" aria-label="Governing law">
          <h2 className="text-2xl font-semibold tracking-tight">Governing law</h2>
          <p className="text-muted-foreground">
            These terms are governed by the laws of England and Wales. Courts in
            England and Wales shall have exclusive jurisdiction.
          </p>
        </section>

        <section className="space-y-3" aria-label="Contact">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="text-muted-foreground">
            For questions about these terms, contact{" "}
            <a className="underline underline-offset-4" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}

