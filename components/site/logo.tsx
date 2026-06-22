import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** Brand: "group" = BeCon Group, "rx" = BeCon Rx. */
  brand?: "group" | "rx";
  /** "light" inverts colors for dark backgrounds. */
  tone?: "dark" | "light";
  /** Href to wrap with; pass null to render unlinked. */
  href?: string | null;
  className?: string;
}

/**
 * Wordmark logo — pure text.
 * "Be" in ink/white, "Con" rendered with the cyan→royal→deep-royal logo
 * gradient, qualifier ("Group" / "Rx") in the same weight and size so the full
 * "BeCon Group" / "BeCon Rx" reads as one baseline-aligned wordmark.
 */
export function Logo({
  brand = "group",
  tone = "dark",
  href = "/",
  className,
}: LogoProps) {
  const label = brand === "rx" ? "BeCon Rx" : "BeCon Group";
  const qualifier = brand === "rx" ? "Rx" : "Group";

  const inner = (
    <span
      className={cn(
        "inline-block whitespace-nowrap font-sans text-xl font-bold tracking-tight leading-none",
        tone === "light" ? "text-white" : "text-ink",
        className,
      )}
      aria-label={label}
    >
      Be<span
        style={{
          backgroundImage:
            "linear-gradient(90deg, #4DBEFA 0%, #2C7FF0 35%, #1F66E8 65%, #1426A8 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent",
        }}
      >Con</span>
      <span> </span>
      <span className={tone === "light" ? "text-white/85" : "text-ink/85"}>{qualifier}</span>
    </span>
  );

  if (href === null) return inner;
  return (
    <Link href={href} className="inline-block">
      {inner}
    </Link>
  );
}
