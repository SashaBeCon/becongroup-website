import { cn } from "@/lib/utils";

export type SectionBackground =
  | "paper"
  | "white"
  | "peach"
  | "orange-mid"
  | "orange"
  | "blue"
  | "blue-mid"
  | "blue-bold"
  | "blue-deep"
  | "navy"
  | "ink"
  | "page"
  | "band"
  | "band2"
  | "floor";

const BG_CLASS: Record<SectionBackground, string> = {
  paper: "sec-page",
  page: "sec-page",
  white: "sec-white",
  peach: "sec-band",
  "orange-mid": "sec-band",
  orange: "sec-band",
  blue: "sec-band",
  "blue-mid": "sec-band",
  "blue-bold": "sec-band",
  "blue-deep": "sec-floor",
  navy: "sec-floor",
  ink: "sec-floor",
  band: "sec-band",
  band2: "sec-band2",
  floor: "sec-floor",
};

const SIZE_PAD: Record<"default" | "lg" | "sm", string | undefined> = {
  default: undefined,
  lg: "116px",
  sm: "56px",
};

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  bg?: SectionBackground;
  size?: "default" | "lg" | "sm";
  /** Skip the inner max-width wrapper. */
  bare?: boolean;
}

export function Section({
  bg = "page",
  size = "default",
  bare = false,
  className,
  style,
  children,
  ...props
}: SectionProps) {
  const wrapperClasses = cn("section", BG_CLASS[bg], className);
  const pad = SIZE_PAD[size];
  const mergedStyle = pad ? { paddingTop: pad, paddingBottom: pad, ...style } : style;
  if (bare) {
    return (
      <section className={wrapperClasses} style={mergedStyle} {...props}>
        {children}
      </section>
    );
  }
  return (
    <section className={wrapperClasses} style={mergedStyle} {...props}>
      <div className="wrap">{children}</div>
    </section>
  );
}
