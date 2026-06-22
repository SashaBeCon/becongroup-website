import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";

interface SectionHeaderProps {
  eyebrow?: React.ReactNode;
  eyebrowTone?: "orange" | "blue" | "navy" | "white";
  /** Title — pass JSX with <em> for the accent emphasis word. */
  title: React.ReactNode;
  /** Subtitle / lead paragraph below the title. */
  subtitle?: React.ReactNode;
  /** Visual size of the title. `xl` for hero, `lg` for section opener, `md` smaller. */
  size?: "xl" | "lg" | "md";
  className?: string;
  align?: "left" | "center";
}

const TITLE_SIZE: Record<NonNullable<SectionHeaderProps["size"]>, string> = {
  xl: "text-d1",
  lg: "text-d2",
  md: "text-h1",
};

/**
 * Header block used at the top of most sections.
 *
 *   <SectionHeader
 *     eyebrow="The System"
 *     title={<>Three disciplines. <em>One operating system.</em></>}
 *     subtitle="..."
 *   />
 */
export function SectionHeader({
  eyebrow,
  eyebrowTone = "orange",
  title,
  subtitle,
  size = "md",
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow tone={eyebrowTone} className="mb-4">
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        className={cn(
          TITLE_SIZE[size],
          // <em> children are non-italic by default; color comes from section bg rules
          "[&_em]:not-italic",
          "mb-4",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="text-lead max-w-prose opacity-80">{subtitle}</p>
      ) : null}
    </header>
  );
}
