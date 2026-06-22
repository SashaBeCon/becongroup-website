import { cn } from "@/lib/utils";

interface PartnerCardProps {
  /** Two-letter monogram, e.g. "ES". */
  initials: string;
  name: string;
  role: string;
  bio: string;
  tags: string[];
  className?: string;
}

/**
 * Senior-practitioner card. Initials monogram on the left, body on the right.
 * Used on the BeConRx page for the three-partner section; reusable for any
 * future team grid on BeConGroup.
 */
export function PartnerCard({
  initials,
  name,
  role,
  bio,
  tags,
  className,
}: PartnerCardProps) {
  return (
    <article
      className={cn(
        "grid grid-cols-[56px_1fr] gap-5 rounded-lg border border-ink/5 bg-white p-7 shadow-md transition-[transform,box-shadow,border-color] duration-200 ease-smooth hover:-translate-y-0.5 hover:border-blue-300/40 hover:shadow-lg",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="flex h-14 w-14 items-center justify-center rounded-md bg-ink text-base font-bold text-orange-400"
      >
        {initials}
      </div>
      <div>
        <h3 className="text-h3 text-ink leading-tight">{name}</h3>
        <p className="text-eyebrow uppercase text-blue-500 mt-1">{role}</p>
        <p className="mt-3 text-small font-normal leading-relaxed text-gray-700">{bio}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <li
              key={t}
              className="rounded-pill border border-ink/10 bg-paper px-2.5 py-1 text-eyebrow uppercase text-gray-700"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
