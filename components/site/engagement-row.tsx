interface EngagementRowProps {
  items: { number: string; title: string }[];
}

/** Numbered engagement rows — one connected model, five ways in. */
export function EngagementRow({ items }: EngagementRowProps) {
  return (
    <div className="engage">
      {items.map((it) => (
        <div className="erow" key={it.number}>
          <span className="en">{it.number}</span>
          <span className="et">{it.title}</span>
          <span className="arr" aria-hidden="true">→</span>
        </div>
      ))}
    </div>
  );
}
