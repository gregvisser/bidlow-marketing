export function TestimonialStrip() {
  return (
    <section className="border-y border-border/70 bg-secondary/15" aria-label="Trusted operators row">
      <div className="container py-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <p className="text-sm font-semibold tracking-tight text-gradient">
              BIDLOW
            </p>
            <p className="text-sm font-medium">
              Trusted operators, not hype
            </p>
          </div>
          <div
            className="grid grid-cols-2 gap-3 text-xs text-muted-foreground sm:grid-cols-3 lg:grid-cols-6"
            aria-label="Delivery capabilities"
          >
            {[
              "Integrations",
              "Auth & roles",
              "Security",
              "Observability",
              "Training",
              "Support"
            ].map((label) => (
              <span
                key={label}
                className="rounded-md border border-border/70 bg-background/30 px-3 py-2 text-center font-mono"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

