import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroProps {
  eyebrow: string;
  /** Pass JSX with <em> for accent emphasis lines. */
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  /** Image src — defaults to the raindrop photograph in /public. */
  imageSrc?: string;
  imageAlt?: string;
  /**
   * "default" — full-height, lighter scrim, large display type.
   * "compact" — shorter band, much darker faded scrim, smaller type.
   *   Used on secondary pages (e.g., BeCon Rx) so the hero reads as
   *   subordinate to the BeCon Group homepage hero.
   */
  variant?: "default" | "compact";
  className?: string;
}

/**
 * Photographic hero. Image fills the band; a left-side scrim keeps the
 * headline copy on a high-contrast base.
 */
export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  imageSrc = "/hero-rain.jpg",
  imageAlt = "Rain droplets on still water — ripples expanding outward.",
  variant = "default",
  className,
}: HeroProps) {
  const isCompact = variant === "compact";

  // Compact: heavier, near-opaque navy/ink scrim that fades + desaturates the
  // image so the band reads as a darker, secondary header.
  const scrimBg = isCompact
    ? "linear-gradient(90deg, rgba(6,11,58,0.94) 0%, rgba(6,11,58,0.86) 50%, rgba(6,11,58,0.78) 100%)," +
      "linear-gradient(180deg, rgba(10,11,14,0.55) 0%, rgba(10,11,14,0.78) 100%)"
    : "linear-gradient(90deg, rgba(6,11,58,0.82) 0%, rgba(6,11,58,0.45) 50%, rgba(6,11,58,0.08) 100%)," +
      "linear-gradient(180deg, transparent 55%, rgba(6,11,58,0.40) 100%)";

  return (
    <section
      className={cn("relative isolate overflow-hidden bg-ink text-white", className)}
      aria-label="Hero"
    >
      {/* Image layer */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className={cn("object-cover", isCompact && "opacity-50 saturate-50")}
        />
        {/* Tint + readability scrim — uses navy/ink tones to match the new palette */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: scrimBg }}
        />
      </div>

      <div
        className={cn(
          "mx-auto flex max-w-container items-center px-6 md:px-10",
          isCompact
            ? "min-h-[340px] py-14 md:py-16"
            : "min-h-[640px] py-24 md:py-32",
        )}
      >
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-3 text-eyebrow uppercase text-orange-400 before:block before:h-px before:w-8 before:bg-orange-400 before:content-['']">
            {eyebrow}
          </p>
          <h1
            className={cn(
              "[&_em]:not-italic [&_em]:text-orange-400",
              isCompact ? "text-h1 max-md:text-h2" : "text-d1 max-md:text-d2",
            )}
          >
            {title}
          </h1>
          {subtitle ? (
            <p
              className={cn(
                "max-w-prose text-white/72",
                isCompact ? "mt-4 text-body" : "mt-6 text-lead",
              )}
            >
              {subtitle}
            </p>
          ) : null}
          {(primaryCta || secondaryCta) && (
            <div className={cn("flex flex-wrap items-center gap-3", isCompact ? "mt-6" : "mt-9")}>
              {primaryCta ? (
                <Button
                  href={primaryCta.href}
                  variant="accent"
                  size={isCompact ? "default" : "lg"}
                  withArrow
                >
                  {primaryCta.label}
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button
                  href={secondaryCta.href}
                  variant="ghost-light"
                  size={isCompact ? "default" : "lg"}
                  withArrow
                >
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
