import { cn } from "@/lib/utils";

interface EntryCardProps {
  number: string;
  title: string;
  /** When this engagement fits — e.g. "When the need is strategy." */
  when: string;
  /** Body text describing what BeCon brings to this stage. */
  brings: string;
  /** Named, owned output deliverable. */
  output: string;
  className?: string;
}

/**
 * "How We Work" / "How Clients Engage" card. Number + title + when label
 * up top, body in the middle, owned-output chip at the bottom.
 */
export function EntryCard({
  number,
  title,
  when,
  brings,
  output,
  className,
}: EntryCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col gap-4 rounded-lg border border-ink/5 bg-white p-7 shadow-md transition-[transform,box-shadow] duration-200 ease-smooth hover:-translate-y-0.5 hover:shadow-lg",
        className,
      )}
    >
      <div>
        <p className="text-eyebrow uppercase text-orange-500">{number}</p>
        <h3 className="text-h3 mt-2 text-ink">{title}</h3>
        <p className="text-eyebrow uppercase text-blue-500 mt-1">{when}</p>
      </div>
      <p className="border-t border-ink/5 pt-4 text-small font-normal leading-relaxed text-gray-700">
        {brings}
      </p>
      <div className="mt-auto rounded-md border border-ink/5 bg-paper px-4 py-3">
        <p className="text-eyebrow uppercase text-gray-500">Owned output</p>
        <p className="text-small font-semibold text-ink">{output}</p>
      </div>
    </article>
  );
}
