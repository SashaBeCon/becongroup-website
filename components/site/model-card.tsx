interface ModelCardProps {
  number: string;
  title: string;
  body: string;
  /** Temperature accent color (blue → warm across the four cards). */
  tc?: string;
}

/** Model card — carries the blue→warm temperature as a top-border accent. */
export function ModelCard({ number, title, body, tc }: ModelCardProps) {
  return (
    <div className="mcard" style={tc ? ({ ["--tc" as string]: tc } as React.CSSProperties) : undefined}>
      <div className="n">{number}</div>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
}
