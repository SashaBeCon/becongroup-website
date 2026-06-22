import { cn } from "@/lib/utils";

interface BuildColumnProps {
  heading: string;
  items: string[];
  /** Background of the column header bar. */
  headTone?: "ink" | "navy" | "blue-bold";
  className?: string;
}

const HEAD_BG: Record<NonNullable<BuildColumnProps["headTone"]>, string> = {
  ink: "bg-ink",
  navy: "bg-navy",
  "blue-bold": "bg-blue-500",
};

/**
 * "What We Build" column — capability header on top, vertical list of
 * named deliverables underneath. White surface; hover highlights rows.
 */
export function BuildColumn({
  heading,
  items,
  headTone = "ink",
  className,
}: BuildColumnProps) {
  return (
    <div className={cn("flex flex-col overflow-hidden rounded-lg shadow-md", className)}>
      <div className={cn("px-6 py-4", HEAD_BG[headTone])}>
        <h3 className="text-small font-bold uppercase tracking-wider text-white">{heading}</h3>
      </div>
      <ul className="flex-1 divide-y divide-ink/5 border border-t-0 border-ink/5 bg-white">
        {items.map((item) => (
          <li
            key={item}
            className="group flex items-center gap-3 px-6 py-3 text-small font-normal text-gray-700 transition-colors hover:bg-blue-100/60 hover:text-ink"
          >
            <span
              aria-hidden="true"
              className="block h-1 w-1 flex-shrink-0 rounded-full bg-orange-500"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
