import { cn } from "@/lib/utils";

interface Group {
  label: string;
  items: string[];
}

interface FluencyBlockProps {
  groups: Group[];
  className?: string;
}

/**
 * "Therapy & Market Fluency" — two-column tag display. Each column
 * has an eyebrow label and a wrap of pill chips.
 */
export function FluencyBlock({ groups, className }: FluencyBlockProps) {
  return (
    <div className={cn("grid gap-10 md:grid-cols-2", className)}>
      {groups.map((g) => (
        <div key={g.label}>
          <p className="text-eyebrow uppercase text-blue-500 mb-4">{g.label}</p>
          <ul className="flex flex-wrap gap-2">
            {g.items.map((it) => (
              <li
                key={it}
                className="rounded-pill border border-ink/10 bg-white px-3.5 py-1.5 text-small font-normal text-gray-700 shadow-sm"
              >
                {it}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
