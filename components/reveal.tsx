"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      el.dataset.revealed = "true";
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.revealed = "true";
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-revealed="false"
      className={cn(
        "transition duration-700 ease-out motion-reduce:transition-none",
        "data-[revealed=false]:translate-y-3 data-[revealed=false]:opacity-0",
        "data-[revealed=true]:translate-y-0 data-[revealed=true]:opacity-100",
        className
      )}
    >
      {children}
    </div>
  );
}

