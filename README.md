# Bidlow Website (v1)

Production-ready marketing site for **Bidlow** (`bidlow.co.uk`).

## Tech

- Next.js (App Router) + TypeScript
- Tailwind CSS
- shadcn-style UI components (local `components/ui/*`)
- No database
- Deployable to Vercel

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Key places to customise

- Company info + links: `lib/constants.ts`
- Home page copy: `app/page.tsx`
- Services: `app/services/page.tsx`
- Contact handling (server action): `app/contact/actions.ts`

## Contact form behaviour

The contact form uses:

- Client-side validation (basic checks)
- Server-side validation (Zod)
- Placeholder “delivery”: logs the enquiry on the **server** console

Replace the placeholder with an email provider (e.g. Postmark, SendGrid, Resend) when ready.

## Deploy to Vercel + connect `bidlow.co.uk` checklist

- Create a new Git repository in this folder and push to GitHub/GitLab/Bitbucket.
- In Vercel: **New Project** → import the repo.
- Framework preset should auto-detect **Next.js**.
- Deploy (no env vars required for this starter).
- In Vercel Project → **Settings → Domains**:
  - Add `bidlow.co.uk`
  - Add `www.bidlow.co.uk` (optional but recommended)
- Update DNS at your domain registrar:
  - Point apex to Vercel (A/ALIAS per Vercel instructions)
  - Point `www` to Vercel (CNAME per Vercel instructions)
- Wait for DNS to propagate and ensure TLS is issued.
- Update `lib/constants.ts`:
  - Replace the placeholder Calendly URL
  - Replace the email if needed

