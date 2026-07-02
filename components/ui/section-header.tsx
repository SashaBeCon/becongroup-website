import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";

interface SectionHeaderProps {
  eyebrow?: string;
  eyebrowTone?: "orange" | "blue" | "navy" | "white";
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  size?: "md" | "lg";
  className?: string;
}

/** Eyebrow + serif H2 + optional subtitle. */
export function SectionHeader({
  eyebrow,
  eyebrowTone = "orange",
  title,
  subtitle,
  size = "md",
  className,
}: SectionHeaderProps) {
  return (
    <div className={className}>
      {eyebrow ? <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow> : null}
      <h2 className="h2" style={size === "lg" ? { maxWidth: "760px" } : undefined}>
        {title}
      </h2>
      {subtitle ? (
        <p className={cn("body-text")} style={{ marginTop: "16px", maxWidth: "640px" }}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
