import { Button } from "@/components/ui/button";

interface CloseCtaProps {
  eyebrow: string;
  /** JSX with <span className="orange"> for emphasis. */
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  primaryCta: { href: string; label: string };
}

/** Closing CTA — the lens aperture sits behind, surface-aware scrim over it. */
export function CloseCta({ eyebrow, title, subtitle, primaryCta }: CloseCtaProps) {
  return (
    <section className="section close">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="bg"
        src="/lens-circle.jpg"
        srcSet="/lens-circle-md.jpg 960w, /lens-circle.jpg 1600w"
        sizes="100vw"
        alt=""
        loading="lazy"
      />
      <div className="scrim" />
      <div className="inner">
        <div className="rule" />
        <div className="eyebrow center">
          <b>{eyebrow}</b>
        </div>
        <h2 className="display">{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
        <Button href={primaryCta.href} variant="accent" withArrow>
          {primaryCta.label}
        </Button>
      </div>
    </section>
  );
}
