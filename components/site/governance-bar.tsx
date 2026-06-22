interface GovernanceBarProps {
  label: string;
  quote: string;
  body: string;
}

/**
 * Dark callout band used to anchor the System section.
 * Label + pull-quote on the left, expanded body copy on the right.
 */
export function GovernanceBar({ label, quote, body }: GovernanceBarProps) {
  return (
    <div className="grid gap-8 rounded-lg bg-ink p-10 shadow-md md:grid-cols-2">
      <div>
        <p className="text-eyebrow uppercase text-orange-400 mb-3">{label}</p>
        <blockquote className="text-h3 font-semibold leading-snug text-white">
          “{quote}”
        </blockquote>
      </div>
      <p className="text-body text-white/55 leading-relaxed">{body}</p>
    </div>
  );
}
