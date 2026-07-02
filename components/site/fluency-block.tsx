interface FluencyBlockProps {
  groups: { label: string; items: string[] }[];
}

/** Therapy & market fluency — labeled chip clusters. */
export function FluencyBlock({ groups }: FluencyBlockProps) {
  return (
    <div className="fluency">
      {groups.map((g) => (
        <div key={g.label}>
          <div className="flabel">{g.label}</div>
          <div className="chips">
            {g.items.map((it) => (
              <span className="chip" key={it}>
                {it}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
