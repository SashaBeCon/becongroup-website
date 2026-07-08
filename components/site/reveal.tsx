"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Layout class(es) for the wrapper (e.g. "stack", "disciplines", "build"). */
  className?: string;
  children: React.ReactNode;
}

/**
 * Progressive-reveal wrapper. On mount it adds `reveal` (which the CSS uses to
 * hide the children), then `in` once the element scrolls into view so children
 * can stagger in. The stagger itself lives in globals.css, scoped per section.
 *
 * With JavaScript disabled or when the user prefers reduced motion, neither
 * class is added, so the children render in their normal, fully-visible state.
 */
export function Reveal({ className, children, ...props }: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [armed, setArmed] = React.useState(false);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion and no-IO environments: leave content visible.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    setArmed(true); // hide children until they scroll into view

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn(className, armed && "reveal", shown && "in")} {...props}>
      {children}
    </div>
  );
}
