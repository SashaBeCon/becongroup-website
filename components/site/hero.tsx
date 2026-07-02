import { Button } from "@/components/ui/button";

interface HeroProps {
  eyebrow: string;
  /** JSX with <span className="orange"> for emphasis. */
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  imageSrc?: string;
  imageSrcMd?: string;
  imageAlt?: string;
  /** Group renders a soft blue glow; Rx omits it. Scrim tone is set per surface in CSS. */
  brand?: "group" | "rx";
}

/**
 * Photographic hero. The wave core image fills the band; a surface-aware scrim
 * (dark for Group, light for Rx — set via [data-brand] in globals.css) keeps
 * the serif headline legible.
 */
export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  imageSrc = "/hero-wave.jpg",
  imageSrcMd = "/hero-wave-md.jpg",
  imageAlt = "",
  brand = "group",
}: HeroProps) {
  return (
    <section className="hero" aria-label="Hero">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="bg"
        src={imageSrc}
        srcSet={`${imageSrcMd} 1100w, ${imageSrc} 2000w`}
        sizes="100vw"
        alt={imageAlt}
        fetchPriority="high"
      />
      <div className="scrim" />
      {brand === "group" ? <div className="glow" /> : null}
      <div className="inner">
        <div className="copy">
          <div className="rule" />
          <div className="eyebrow">
            <i />
            <b>{eyebrow}</b>
          </div>
          <h1 className="display">{title}</h1>
          {subtitle ? <p className="lead">{subtitle}</p> : null}
          {(primaryCta || secondaryCta) && (
            <div className="hero-ctas">
              {primaryCta ? (
                <Button href={primaryCta.href} variant="accent" withArrow>
                  {primaryCta.label}
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button href={secondaryCta.href} variant="ghost" withArrow>
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
