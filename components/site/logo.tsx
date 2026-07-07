import Link from "next/link";

interface LogoProps {
  /** "group" = BeCon Group (dark-surface logo); "rx" = BeCon Rx (light-surface logo). */
  brand?: "group" | "rx";
  /** Href to wrap with; pass null to render unlinked. */
  href?: string | null;
  className?: string;
}

/**
 * Wordmark logo. BeConGroup uses the white "BeCon" wordmark on its dark nav/
 * footer; BeConRx uses the dark-ink "BeConRx" wordmark on its light surfaces.
 * The wordmarks are self-contained, so no separate text qualifier is rendered.
 */
export function Logo({ brand = "group", href = "/", className }: LogoProps) {
  const isRx = brand === "rx";
  const src = isRx ? "/becon-rx-on-light.svg" : "/becon-on-dark.svg";
  const label = isRx ? "BeCon Rx" : "BeCon Group";
  // Width is sized for a 26px-tall logo; CSS controls the height, this keeps the aspect ratio.
  const width = isRx ? 97 : 89;

  const inner = (
    <span className={`brand ${className ?? ""}`} aria-label={label}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={label} width={width} height={26} />
    </span>
  );

  if (href === null) return inner;
  return (
    <Link href={href} className="inline-flex">
      {inner}
    </Link>
  );
}
