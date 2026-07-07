interface EngagementRowProps {
  items: { number: string; title: string; desc?: string }[];
}

/**
 * Engagement tiles — a numbered set of engagements. Deliberately not links
 * (no trailing arrows): "start with one engagement or run the full model."
 */
export function EngagementRow({ items }: EngagementRowProps) {
  return (
    <div className="engage">
      {items.map((it) => (
        <div className="etile" key={it.number}>
          <span className="en">{it.number}</span>
          <h4 className="et">{it.title}</h4>
          {it.desc ? <p className="ed">{it.desc}</p> : null}
        </div>
      ))}
    </div>
  );
}
