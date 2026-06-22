import { cn } from "@/lib/utils";

interface ModelCardProps {
  number: string;
  title: string;
  body: string;
  tone?: "white" | "blue-soft" | "ink" | "paper";
  className?: string;
}

const TONE_CLASS: Record<NonNullable<ModelCardProps["tone"]>, string> = {
  white: "bg-white text-ink",
  paper: "bg-paper text-ink",
  "blue-soft": "bg-blue-100 text-ink",
  ink: "bg-ink text-white",
};

/**
 * Numbered model-step card. Used in "One connected model" — Rx page.
 * Number top-right at low opacity, title, paragraph body.
 */
export function ModelCard({
  number,
  title,
  body,
  tone = "white",
  className,
}: ModelCardProps) {
  const isDark = tone === "ink";
  return (
    <article
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-lg p-7 shadow-md transition-[transform,box-shadow] duration-200 ease-smooth hover:-translate-y-0.5 hover:shadow-lg",
        TONE_CLASS[tone],
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "absolute right-5 top-3 text-[56px] font-bold leading-none tracking-tightest opacity-10",
          isDark ? "text-white" : "text-ink",
        )}
      >
        {number}
      </span>
      <p
        className={cn(
          "text-eyebrow uppercase mb-3",
          isDark ? "text-orange-400" : "text-orange-500",
        )}
      >
        Step {number}
      </p>
      <h3 className="text-h3 mb-3">{title}</h3>
      <p
        className={cn(
          "text-small font-normal leading-relaxed",
          isDark ? "text-white/65" : "text-gray-700",
        )}
      >
        {body}
      </p>
    </article>
  );
}
