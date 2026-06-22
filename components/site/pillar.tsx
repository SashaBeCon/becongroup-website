import { cn } from "@/lib/utils";

interface PillarProps {
  number: string;
  eyebrow: string;
  title: string;
  items: string[];
  /** Color tone of the pillar surface. */
  tone?: "blue-soft" | "ink" | "paper" | "white";
  /** Eyebrow + bullet color tone. */
  accent?: "blue" | "orange";
  className?: string;
}

const TONE_CLASS: Record<NonNullable<PillarProps["tone"]>, string> = {
  "blue-soft": "bg-blue-100 text-ink",
  ink: "bg-ink text-white",
  paper: "bg-paper text-ink",
  white: "bg-white text-ink",
};

const ACCENT_TEXT: Record<NonNullable<PillarProps["accent"]>, string> = {
  blue: "text-blue-500",
  orange: "text-orange-400",
};
const ACCENT_BULLET: Record<NonNullable<PillarProps["accent"]>, string> = {
  blue: "before:bg-blue-500",
  orange: "before:bg-orange-400",
};

/**
 * Tall pillar card. Used in "The System" — one per discipline.
 * Number sits as a large low-opacity background mark; items as bulleted list.
 */
export function Pillar({
  number,
  eyebrow,
  title,
  items,
  tone = "blue-soft",
  accent = "blue",
  className,
}: PillarProps) {
  const isDark = tone === "ink";
  const bodyMuted = isDark ? "text-white/65" : "text-gray-700";

  return (
    <article
      className={cn(
        "relative flex min-h-[300px] flex-col overflow-hidden rounded-lg p-8 shadow-md transition-[transform,box-shadow] duration-200 ease-smooth hover:-translate-y-0.5 hover:shadow-lg",
        TONE_CLASS[tone],
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "absolute right-5 top-4 text-[56px] font-bold leading-none tracking-tightest opacity-10",
          isDark ? "text-white" : "text-ink",
        )}
      >
        {number}
      </span>

      <p className={cn("text-eyebrow uppercase mb-3", ACCENT_TEXT[accent])}>{eyebrow}</p>
      <h3 className="text-h3 mb-5 max-w-[18ch]">{title}</h3>

      <ul className="mt-auto flex flex-col gap-2">
        {items.map((it) => (
          <li
            key={it}
            className={cn(
              "flex items-start gap-2.5 text-small font-normal leading-snug",
              bodyMuted,
              "before:mt-2 before:block before:h-1 before:w-1 before:flex-shrink-0 before:rounded-full before:content-['']",
              ACCENT_BULLET[accent],
            )}
          >
            {it}
          </li>
        ))}
      </ul>
    </article>
  );
}
