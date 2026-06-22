"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";

interface NavLink {
  href: string;
  label: string;
  /** Open in a new window with rel=noopener noreferrer + external-link icon. */
  external?: boolean;
}

const GROUP_LINKS: NavLink[] = [
  { href: "/#system", label: "The System" },
  { href: "/#how", label: "How We Work" },
  { href: "/#build", label: "What We Build" },
  { href: "/rx", label: "BeCon Rx", external: true },
];

const RX_LINKS: NavLink[] = [
  { href: "/rx#model", label: "The Model" },
  { href: "/rx#engage", label: "How Clients Engage" },
  { href: "/rx#deliver", label: "What We Deliver" },
  { href: "/rx#why", label: "Why BeCon Rx" },
  { href: "/", label: "BeCon Group", external: true },
];

interface NavProps {
  variant?: "solid" | "overlay";
  brand?: "group" | "rx";
}

function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={cn("ml-1 inline-block h-3 w-3", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3h7m0 0v7m0-7L7 9" />
      <path d="M11 9.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h3.5" />
    </svg>
  );
}

/**
 * Sticky top navigation. Auto-switches between BeCon Group and BeCon Rx
 * link sets based on the current pathname. Client component (mobile drawer).
 */
export function Nav({ variant = "overlay", brand }: NavProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const resolvedBrand =
    brand ?? (pathname?.startsWith("/rx") ? "rx" : "group");
  const links = resolvedBrand === "rx" ? RX_LINKS : GROUP_LINKS;

  const isOverlay = variant === "overlay";
  // Darker starting bg (closer to ink) so nav reads as a confident dark band
  // even before scroll.
  const wrapClass = cn(
    "sticky top-0 z-50 w-full",
    isOverlay
      ? "bg-ink/85 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-ink/75"
      : "bg-paper/95 border-b border-ink/8 backdrop-blur supports-[backdrop-filter]:bg-paper/85",
  );
  const linkClass = cn(
    "text-small font-medium transition-colors",
    isOverlay ? "text-white/90 hover:text-white" : "text-ink/85 hover:text-ink",
  );

  const renderLink = (l: NavLink, onClickClose?: () => void) => {
    const content = (
      <>
        {l.label}
        {l.external ? <ExternalIcon /> : null}
      </>
    );
    if (l.external) {
      return (
        <a
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClickClose}
          className={linkClass}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={l.href} onClick={onClickClose} className={linkClass}>
        {content}
      </Link>
    );
  };

  return (
    <nav className={wrapClass} aria-label="Primary">
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-6 md:px-10">
        <Logo brand={resolvedBrand} tone={isOverlay ? "light" : "dark"} />

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href + l.label}>{renderLink(l)}</li>
          ))}
          <li>
            <Button
              href="/contact"
              variant={isOverlay ? "accent" : "primary"}
              size="sm"
            >
              Start a conversation
            </Button>
          </li>
        </ul>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md",
            isOverlay ? "text-white" : "text-ink",
          )}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="relative block h-3 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 block h-0.5 w-full bg-current transition-transform",
                open && "translate-y-1.5 rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 bottom-0 block h-0.5 w-full bg-current transition-transform",
                open && "-translate-y-1.5 -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className={cn(
          "md:hidden border-t",
          isOverlay ? "bg-ink/95 border-white/10 text-white" : "bg-paper border-ink/8",
        )}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {links.map((l) => (
            <li key={l.href + l.label}>
              <div className={cn("block rounded-md px-3 py-3 text-body font-medium", isOverlay ? "text-white/90 hover:bg-white/5" : "text-ink/90 hover:bg-ink/5")}>
                {renderLink(l, () => setOpen(false))}
              </div>
            </li>
          ))}
          <li className="pt-3">
            <Button
              href="/contact"
              variant="accent"
              size="default"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Start a conversation
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
