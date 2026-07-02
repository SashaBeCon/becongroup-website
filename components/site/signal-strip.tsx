import * as React from "react";

interface RailNode {
  kicker: string;
  title: string;
  desc?: string;
}

interface SignalStripProps {
  /** Exactly three nodes: Signal → System → Outcomes (blue → blue → orange). */
  items: [RailNode, RailNode, RailNode];
}

/** Pipeline rail — the convergence spine. Three node dots joined by gradient beams. */
export function SignalStrip({ items }: SignalStripProps) {
  const tones = ["a", "b", "c"] as const;
  return (
    <div className="rail-track">
      {items.map((n, i) => (
        <React.Fragment key={n.title}>
          <div className={`node ${tones[i]}`}>
            <div className="dot" />
            <div className="l">{n.kicker}</div>
            <div className="t">{n.title}</div>
            {n.desc ? <p>{n.desc}</p> : null}
          </div>
          {i < items.length - 1 ? <div className={`beam ${i === 0 ? "ab" : "bc"}`} /> : null}
        </React.Fragment>
      ))}
    </div>
  );
}
