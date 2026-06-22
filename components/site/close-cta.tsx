import { Button } from "@/components/ui/button";

interface CloseCtaProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}

/**
 * Dark closing section. Centered headline + dual CTA — used at the bottom
 * of both BeConGroup and BeConRx home pages.
 */
export function CloseCta({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: CloseCtaProps) {
  return (
    <section
      className="relative isolate overflow-hidden bg-ink py-28 text-white"
      aria-labelledby="close-heading"
    >
      {/* Subtle decorative rings, low opacity */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-400/10" />
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-400/8" />
      </div>

      <div className="mx-auto max-w-2xl px-6 text-center md:px-10">
        <p className="mb-5 inline-flex items-center justify-center gap-3 text-eyebrow uppercase text-orange-400 before:block before:h-px before:w-6 before:bg-orange-400 before:content-[''] after:block after:h-px after:w-6 after:bg-orange-400 after:content-['']">
          {eyebrow}
        </p>
        <h2
          id="close-heading"
          className="text-d2 max-md:text-h1 [&_em]:not-italic [&_em]:text-orange-400"
        >
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-5 text-lead text-white/55 leading-relaxed">{subtitle}</p>
        ) : null}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href={primaryCta.href} variant="accent" size="lg" withArrow>
            {primaryCta.label}
          </Button>
          {secondaryCta ? (
            <Button href={secondaryCta.href} variant="ghost-light" size="lg" withArrow>
              {secondaryCta.label}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
