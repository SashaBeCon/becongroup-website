interface PillarProps {
  number: string;
  /** Discipline name (serif). */
  title: string;
  /** One-line tagline under the name. */
  tagline: string;
  /** Capability icon (inline SVG). */
  icon?: React.ReactNode;
  items: string[];
  /** Node-bullet color. */
  bullet?: "blue" | "orange";
}

/** Discipline card — capability icon + node-bullet list on the hairline grid. */
export function Pillar({ number, title, tagline, icon, items, bullet = "orange" }: PillarProps) {
  return (
    <div className="disc">
      <div className="disc-head">
        {icon}
        <div className="disc-num">{number}</div>
        <div className="t">{title}</div>
        <div className="k">{tagline}</div>
      </div>
      {items.map((it) => (
        <div className={`node-item ${bullet === "blue" ? "blue" : ""}`} key={it}>
          <span className="b" />
          <span className="txt">{it}</span>
        </div>
      ))}
    </div>
  );
}
