import { cn } from "@/lib/utils";
import { Container } from "./container";

export type SectionBackground =
  | "paper"
  | "white"
  | "peach"
  | "orange-mid"
  | "orange"
  | "blue"
  | "blue-mid"
  | "blue-bold"
  | "blue-deep"
  | "navy"
  | "ink";

const BG_CLASS: Record<SectionBackground, string> = {
  paper: "bg-section-paper",
  white: "bg-section-white",
  peach: "bg-section-peach",
  "orange-mid": "bg-section-orange-mid",
  orange: "bg-section-orange",
  blue: "bg-section-blue",
  "blue-mid": "bg-section-blue-mid",
  "blue-bold": "bg-section-blue-bold",
  "blue-deep": "bg-section-blue-deep",
  navy: "bg-section-navy",
  ink: "bg-section-ink",
};

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Section background variant. Each pairs background + text-color rules in globals.css. */
  bg?: SectionBackground;
  /** Render with extra top/bottom padding for hero or close sections. */
  size?: "default" | "lg" | "sm";
  /** Skip the auto Container wrapper (when you want a full-bleed inner layout). */
  bare?: boolean;
}

const SIZE_CLASS: Record<NonNullable<SectionProps["size"]>, string> = {
  default: "py-section-y",
  lg: "py-32",
  sm: "py-16",
};

/**
 * Section — the workhorse layout primitive. Sets full-width background +
 * vertical padding, then nests a Container to constrain content width.
 *
 *   <Section bg="orange"><h2>...</h2></Section>
 */
export function Section({
  bg = "paper",
  size = "default",
  bare = false,
  className,
  children,
  ...props
}: SectionProps) {
  const wrapperClasses = cn(
    BG_CLASS[bg],
    SIZE_CLASS[size],
    "px-6 md:px-10",
    className,
  );

  if (bare) {
    return (
      <section className={wrapperClasses} {...props}>
        {children}
      </section>
    );
  }

  return (
    <section className={wrapperClasses} {...props}>
      <Container>{children}</Container>
    </section>
  );
}
