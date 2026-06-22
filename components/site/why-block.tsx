import { cn } from "@/lib/utils";

interface Stat {
  value: string;
  label: string;
}

interface Reason {
  title: string;
  body: string;
}

interface WhyBlockProps {
  stats: Stat[];
  reasons: Reason[];
  /** Tone of the surrounding section so we can flip text colors. */
  tone?: "light" | "dark";
  className?: string;
}

/**
 * "Why BeCon Rx" block — stat row on top, vertical list of reasoning
 * points underneath. Single shared component because both halves
 * always travel together.
 */
export function WhyBlock({
  stats,
  reasons,
  tone = "light",
  className,
}: WhyBlockProps) {
  const isDark = tone === "dark";
  const textBody = isDark ? "text-white" : "text-ink";
  const textMuted = isDark ? "text-white/65" : "text-gray-700";
  const eyebrowColor = isDark ? "text-orange-400" : "text-orange-500";
  const divider = isDark ? "border-white/10" : "border-ink/8";

  return (
    <div className={cn("flex flex-col gap-12", className)}>
      <ul className={cn("grid gap-6 border-b pb-12 sm:grid-cols-3", divider)}>
        {stats.map((s) => (
          <li key={s.label} className="flex flex-col gap-2">
            <span className={cn("text-d2 max-md:text-h1 font-semibold", textBody)}>
              {s.value}
            </span>
            <span className={cn("text-eyebrow uppercase", eyebrowColor)}>{s.label}</span>
          </li>
        ))}
      </ul>

      <ul className={cn("grid gap-6 md:grid-cols-2 lg:grid-cols-3", textBody)}>
        {reasons.map((r) => (
          <li key={r.title} className="flex flex-col gap-2">
            <h3 className="text-h3 leading-tight">{r.title}</h3>
            <p className={cn("text-small font-normal leading-relaxed", textMuted)}>{r.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
