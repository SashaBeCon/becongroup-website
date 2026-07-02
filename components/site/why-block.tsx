interface WhyBlockProps {
  stats: { value: string; label: string; hl?: boolean }[];
  reasons: { title: string; body: string; span2?: boolean }[];
}

/** "Why" content — stat trio + reasons grid. Wrap in a .band-dark section. */
export function WhyBlock({ stats, reasons }: WhyBlockProps) {
  return (
    <>
      <div className="stats">
        {stats.map((s) => (
          <div className={`stat ${s.hl ? "hl" : ""}`} key={s.label}>
            <div className="v">{s.value}</div>
            <div className="k">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="reasons">
        {reasons.map((r) => (
          <div className={`reason ${r.span2 ? "span2" : ""}`} key={r.title}>
            <h4>{r.title}</h4>
            <p>{r.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
