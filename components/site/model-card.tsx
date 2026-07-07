interface ModelCardProps {
  number: string;
  title: string;
  body: string;
  /** Temperature accent color (blue → warm across the four cards). */
  tc?: string;
  /** Optional emphasis pill, e.g. "The Rx Difference". */
  badge?: string;
}

/** Model card — carries the blue→warm temperature as a top-border accent. */
export function ModelCard({ number, title, body, tc, badge }: ModelCardProps) {
  const style = {
    ...(tc ? { ["--tc" as string]: tc } : {}),
    ...(badge ? { position: "relative" as const } : {}),
  } as React.CSSProperties;

  return (
    <div className="mcard" style={style}>
      {badge ? (
        <span
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            background: "var(--energy)",
            color: "#fff",
            fontFamily: "var(--font-system)",
            fontWeight: 800,
            fontSize: "9.5px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "5px 11px",
            borderRadius: "var(--r-full)",
          }}
        >
          {badge}
        </span>
      ) : null}
      <div className="n">{number}</div>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
}
