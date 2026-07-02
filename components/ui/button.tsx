import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "ghost" | "ghost-light";
type Size = "default" | "sm" | "lg";

const VARIANT_CLASS: Record<Variant, string> = {
  primary: "btn-energy",
  accent: "btn-energy",
  ghost: "btn-ghost",
  "ghost-light": "btn-ghost",
};

const SIZE_CLASS: Record<Size, string> = {
  sm: "btn-sm",
  default: "",
  lg: "",
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
  /** Append a trailing arrow to the label. */
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type ButtonAsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { variant = "accent", size = "default", withArrow, className, children, ...rest } =
    props as BaseProps & { href?: string } & Record<string, unknown>;

  const classes = cn("btn", VARIANT_CLASS[variant], SIZE_CLASS[size], className);
  const content = (
    <>
      {children}
      {withArrow ? <span aria-hidden="true">→</span> : null}
    </>
  );

  if (typeof (props as ButtonAsLink).href === "string") {
    const { href, ...anchorRest } = rest as { href: string } & Record<string, unknown>;
    const external = href.startsWith("http") || href.startsWith("mailto:");
    if (external) {
      return (
        <a href={href} className={classes} {...(anchorRest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...(anchorRest as Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
