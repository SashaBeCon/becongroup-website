import Link from "next/link";

interface LogoProps {
  /** "group" = BeCon Group (dark-surface logo); "rx" = BeCon Rx (light-surface logo). */
  brand?: "group" | "rx";
  /** Href to wrap with; pass null to render unlinked. */
  href?: string | null;
  className?: string;
}

/**
 * Wordmark logo — the updated BeCon graphic + qualifier. The dark-surface
 * mark (white "Be") is used on BeConGroup's dark nav; the light-surface mark
 * (navy "Be") on BeConRx's light nav.
 */
export function Logo({ brand = "group", href = "/", className }: LogoProps) {
  const src =
    brand === "rx" ? "/becon-logo-light-surface.png" : "/becon-logo-dark-surface.png";
  const qualifier = brand === "rx" ? "Rx" : "Group";
  const label = brand === "rx" ? "BeCon Rx" : "BeCon Group";

  const inner = (
    <span className={`brand ${className ?? ""}`} aria-label={label}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="BeCon" width={71} height={26} />
      <span className="q">{qualifier}</span>
    </span>
  );

  if (href === null) return inner;
  return (
    <Link href={href} className="inline-flex">
      {inner}
    </Link>
  );
}
