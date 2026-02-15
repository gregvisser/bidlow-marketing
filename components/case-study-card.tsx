import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export type CaseStudy = {
  title: string;
  label: string;
  sector: string;
  problem: string;
  approach: string;
  solution: string;
  outcomes: string[];
  stack: string[];
};

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-wrap items-baseline justify-between gap-2">
          <span>{study.title}</span>
          <span className="rounded-full border bg-secondary px-2 py-1 text-xs text-muted-foreground">
            {study.label}
          </span>
        </CardTitle>
        <CardDescription>{study.sector}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1">
          <p className="text-sm font-medium">Problem</p>
          <p className="text-sm text-muted-foreground">{study.problem}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium">Approach</p>
          <p className="text-sm text-muted-foreground">{study.approach}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium">Solution</p>
          <p className="text-sm text-muted-foreground">{study.solution}</p>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">Outcome types</p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {study.outcomes.map((o) => (
              <li key={o} className="flex gap-2">
                <span aria-hidden className="mt-1 h-1.5 w-1.5 rounded-full bg-foreground/60" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">Common systems</p>
          <div className="flex flex-wrap gap-2">
            {study.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border bg-background px-2 py-1 text-xs text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

