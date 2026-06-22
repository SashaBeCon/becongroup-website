import { cn } from "@/lib/utils";

interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "neutral" | "dark" | "accent" | "blue";
}

const TONE_CLASS: Record<NonNullable<PillProps["tone"]>, string> = {
  neutral: "bg-white border-ink/15 text-gray-700",
  dark: "bg-ink border-ink text-white",
  accent: "bg-orange-100 border-orange-200 text-orange-600",
  blue: "bg-blue-100 border-blue-200 text-blue-700",
};

/**
 * Small label chip — for tag rows, capability badges, status flags.
 */
export function Pill({ tone = "neutral", className, children, ...props }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill border px-3 py-1",
        "text-eyebrow uppercase",
        TONE_CLASS[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
