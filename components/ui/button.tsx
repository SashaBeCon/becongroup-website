import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "ghost" | "ghost-light";
type Size = "default" | "sm" | "lg";

const VARIANT_CLASS: Record<Variant, string> = {
  primary:
    "bg-ink text-white hover:bg-gray-900 shadow-sm hover:shadow-md hover:-translate-y-px",
  accent:
    "bg-orange-500 text-white hover:bg-orange-400 shadow-sm hover:shadow-md hover:-translate-y-px",
  ghost:
    "bg-transparent text-ink border border-ink/15 hover:border-ink hover:bg-white",
  "ghost-light":
    "bg-transparent text-white/80 border border-white/20 hover:text-white hover:border-white/60",
};

const SIZE_CLASS: Record<Size, string> = {
  sm: "px-4 py-2 text-small",
  default: "px-6 py-3 text-small",
  lg: "px-8 py-4 text-body font-medium",
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
  /** Trailing arrow → suffix for the label, like "Start a conversation →" */
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type ButtonAsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Pill-shaped button. Polymorphic — renders `<button>` by default, `<Link>`
 * when given an href (internal route) or `<a>` (external URL detected).
 */
export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "default",
    withArrow = false,
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2",
    "rounded-pill font-medium",
    "transition-[transform,box-shadow,background-color,border-color,color] duration-200 ease-smooth",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    VARIANT_CLASS[variant],
    SIZE_CLASS[size],
    className,
  );

  const content = (
    <>
      {children}
      {withArrow ? (
        <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-0.5">
          →
        </span>
      ) : null}
    </>
  );

  if ("href" in rest && rest.href) {
    const href = rest.href;
    const isExternal = /^(https?:)?\/\//.test(href) || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          className={cn(classes, "group")}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        {...(rest as Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">)}
        className={cn(classes, "group")}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      className={cn(classes, "group")}
    >
      {content}
    </button>
  );
}
