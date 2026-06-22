import { cn } from "@/lib/utils";

interface Engagement {
  number: string;
  title: string;
}

interface EngagementRowProps {
  items: Engagement[];
  className?: string;
}

/**
 * Compact 5-cell engagement strip — used in "How Clients Engage" on Rx.
 * Each cell: small number + capability title. Hover lifts the row.
 */
export function EngagementRow({ items, className }: EngagementRowProps) {
  return (
    <div
      className={cn(
        "grid gap-3 sm:grid-cols-2 md:grid-cols-5",
        className,
      )}
    >
      {items.map((e) => (
        <article
          key={e.number}
          className="group flex h-full flex-col gap-3 rounded-lg border border-ink/5 bg-white p-6 shadow-md transition-[transform,box-shadow,border-color] duration-200 ease-smooth hover:-translate-y-0.5 hover:border-orange-400/30 hover:shadow-lg"
        >
          <p className="text-eyebrow uppercase text-orange-500">{e.number}</p>
          <h3 className="text-h3 text-ink leading-tight">{e.title}</h3>
        </article>
      ))}
    </div>
  );
}
