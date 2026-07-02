interface GovernanceBarProps {
  label: string;
  /** JSX with <span className="focal"> or <span className="orange"> for emphasis. */
  quote: React.ReactNode;
  body?: React.ReactNode;
}

/** Focal-burst principle inner — sits inside <section className="section principle">. */
export function GovernanceBar({ label, quote, body }: GovernanceBarProps) {
  return (
    <div className="inner">
      <div className="eyebrow center">
        <b>{label}</b>
      </div>
      <div className="quote">{quote}</div>
      {body ? <p className="sub">{body}</p> : null}
    </div>
  );
}
