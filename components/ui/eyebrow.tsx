import { cn } from "@/lib/utils";

interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Color tone of the eyebrow line + text. Auto-adapted per section bg in globals.css,
   *  but you can override here for one-off cases. */
  tone?: "orange" | "blue" | "navy" | "white";
}

const TONE_CLASS: Record<NonNullable<EyebrowProps["tone"]>, string> = {
  orange: "text-orange-500 before:bg-orange-500",
  blue: "text-blue-500 before:bg-blue-500",
  navy: "text-navy before:bg-navy",
  white: "text-white before:bg-white",
};

/**
 * Section eyebrow — 11px / 500 / uppercase / 0.14em tracking with leading dash.
 *
 *   <Eyebrow tone="orange">The System</Eyebrow>
 */
export function Eyebrow({
  tone = "orange",
  className,
  children,
  ...props
}: EyebrowProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-3 text-eyebrow uppercase",
        "before:block before:h-px before:w-6 before:content-['']",
        TONE_CLASS[tone],
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
