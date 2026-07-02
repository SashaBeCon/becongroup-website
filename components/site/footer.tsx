import { Logo } from "./logo";

interface FooterProps {
  brand?: "group" | "rx";
}

/** Site footer — brand logo + copyright + cross-brand link. */
export function Footer({ brand = "group" }: FooterProps) {
  const isRx = brand === "rx";
  return (
    <footer className="footer">
      <Logo brand={brand} />
      <div className="meta">
        <span>© BeCon {isRx ? "Rx · a division of BeCon Group" : "Group"}</span>
        <span className="sep" />
        {isRx ? (
          <a className="ext" href="https://www.becongroup.io" target="_blank" rel="noopener noreferrer">
            Visit BeCon Group ↗
          </a>
        ) : (
          <a className="ext" href="https://www.beconrx.io" target="_blank" rel="noopener noreferrer">
            Visit BeCon Rx ↗
          </a>
        )}
      </div>
    </footer>
  );
}
