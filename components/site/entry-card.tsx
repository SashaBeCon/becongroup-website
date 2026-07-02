interface EntryCardProps {
  number: string;
  when: string;
  title: string;
  brings: string;
  output: string;
}

/** Numbered process card — engagement entry point with an owned output. */
export function EntryCard({ number, when, title, brings, output }: EntryCardProps) {
  return (
    <div className="proc">
      <div className="num">{number}</div>
      <div className="when">{when}</div>
      <h4>{title}</h4>
      <p>{brings}</p>
      <div className="out">
        Owned output → <b>{output}</b>
      </div>
    </div>
  );
}
