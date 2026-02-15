export const siteConfig = {
  name: "Bidlow",
  domain: "bidlow.co.uk",
  tagline: "Production systems, installed.",
  description:
    "Bidlow diagnoses system flows and bottlenecks, then builds tailored SaaS systems with AI integrations — hardened for production, supported by training, and maintained through ongoing retainers.",
  location: "United Kingdom",
  email: "hello@bidlow.co.uk",
  calendlyUrl: "https://calendly.com/your-link-here/diagnostic-call",
  links: {
    home: "/",
    services: "/services",
    approach: "/approach",
    caseStudies: "/case-studies",
    about: "/about",
    contact: "/contact",
    privacy: "/privacy",
    terms: "/terms"
  }
} as const;

export const navItems = [
  { href: siteConfig.links.services, label: "Services" },
  { href: siteConfig.links.approach, label: "Approach" },
  { href: siteConfig.links.caseStudies, label: "Outcomes" },
  { href: siteConfig.links.about, label: "About" },
  { href: siteConfig.links.contact, label: "Contact" }
] as const;

