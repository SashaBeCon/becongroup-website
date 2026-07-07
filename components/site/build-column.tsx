interface BuildColumnProps {
  heading: string;
  items: string[];
  /** Node-bullet color. */
  bullet?: "blue" | "orange";
  /** Orange-tinted header — used on the Rx "Market Activation" column. */
  accent?: boolean;
}

/** Deliverable column — heading + node-bullet list, on the hairline grid. */
export function BuildColumn({ heading, items, bullet = "blue", accent = false }: BuildColumnProps) {
  return (
    <div className={`buildcol${accent ? " accent" : ""}`}>
      <div className="bh">{heading}</div>
      {items.map((it) => (
        <div className={`node-item ${bullet === "blue" ? "blue" : ""}`} key={it}>
          <span className="b" />
          <span className="txt">{it}</span>
        </div>
      ))}
    </div>
  );
}
