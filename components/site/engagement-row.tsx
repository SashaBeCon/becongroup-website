import * as React from "react";

interface EngagementItem {
  number: string;
  title: string;
  desc?: string;
  /** Optional capability icon (inline SVG). Shown in place of the number. */
  icon?: React.ReactNode;
}

interface EngagementRowProps {
  items: EngagementItem[];
}

/**
 * Engagement tiles — a set of engagements. Deliberately not links (no trailing
 * arrows): "start with one engagement or run the full model." Each tile leads
 * with an icon (falling back to its number if no icon is supplied).
 */
export function EngagementRow({ items }: EngagementRowProps) {
  return (
    <div className="engage">
      {items.map((it) => (
        <div className="etile" key={it.number}>
          {it.icon ? (
            <span className="eicon" aria-hidden="true">
              {it.icon}
            </span>
          ) : (
            <span className="en">{it.number}</span>
          )}
          <div className="etxt">
            <h4 className="et">{it.title}</h4>
            {it.desc ? <p className="ed">{it.desc}</p> : null}
          </div>
        </div>
      ))}
    </div>
  );
}
