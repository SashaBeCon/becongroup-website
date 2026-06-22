import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Surface tone of the card. */
  tone?: "white" | "blue-soft" | "ink" | "navy" | "paper";
  /** Whether to apply hover-lift effect. */
  interactive?: boolean;
  /** Padding scale. */
  padding?: "sm" | "md" | "lg";
}

const TONE_CLASS: Record<NonNullable<CardProps["tone"]>, string> = {
  white: "bg-white text-ink border-ink/5",
  paper: "bg-paper text-ink border-ink/5",
  "blue-soft": "bg-blue-100 text-ink border-blue-200/60",
  ink: "bg-ink text-white border-white/5",
  navy: "bg-navy text-white border-white/5",
};

const PAD_CLASS: Record<NonNullable<CardProps["padding"]>, string> = {
  sm: "p-5",
  md: "p-7",
  lg: "p-8",
};

/**
 * Surface card with rounded corners + subtle layered shadow.
 * Hover-lifts when `interactive` is set.
 */
export function Card({
  tone = "white",
  interactive = false,
  padding = "md",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border shadow-md",
        TONE_CLASS[tone],
        PAD_CLASS[padding],
        interactive &&
          "transition-[transform,box-shadow] duration-200 ease-smooth hover:-translate-y-0.5 hover:shadow-lg",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
