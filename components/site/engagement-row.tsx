interface EngagementRowProps {
  items: { number: string; title: string }[];
}

/**
 * Engagement tiles — a numbered set of capabilities. Deliberately not links
 * (no trailing arrows): "engage one capability or the full model."
 */
export function EngagementRow({ items }: EngagementRowProps) {
  return (
    <div className="engage">
      {items.map((it) => (
        <div className="etile" key={it.number}>
          <span className="en">{it.number}</span>
          <h4 className="et">{it.title}</h4>
        </div>
      ))}
    </div>
  );
}
