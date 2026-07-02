"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./logo";

interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

const GROUP_LINKS: NavLink[] = [
  { href: "/#system", label: "The System" },
  { href: "/#how", label: "How We Work" },
  { href: "/#build", label: "What We Build" },
  { href: "https://www.beconrx.io", label: "BeCon Rx", external: true },
];

const RX_LINKS: NavLink[] = [
  { href: "/#model", label: "The Model" },
  { href: "/#engage", label: "How Clients Engage" },
  { href: "/#deliver", label: "What We Deliver" },
  { href: "/#why", label: "Why BeCon Rx" },
  { href: "https://www.becongroup.io", label: "BeCon Group", external: true },
];

interface NavProps {
  brand?: "group" | "rx";
}

export function Nav({ brand = "group" }: NavProps) {
  const [open, setOpen] = useState(false);
  const links = brand === "rx" ? RX_LINKS : GROUP_LINKS;
  const ctaLabel = brand === "rx" ? "Start the conversation" : "Start a conversation";

  const renderLink = (l: NavLink, onClick?: () => void) => {
    if (l.external) {
      return (
        <a href={l.href} target="_blank" rel="noopener noreferrer" className="ext" onClick={onClick}>
          {l.label} <span aria-hidden="true">↗</span>
        </a>
      );
    }
    return (
      <Link href={l.href} onClick={onClick}>
        {l.label}
      </Link>
    );
  };

  return (
    <nav className="nav" aria-label="Primary">
      <Logo brand={brand} />

      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.href + l.label}>{renderLink(l)}</li>
        ))}
        <li>
          <Link href="/contact" className="nav-cta">
            {ctaLabel}
          </Link>
        </li>
      </ul>

      <button
        type="button"
        className="nav-burger"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span aria-hidden="true">{open ? "✕" : "☰"}</span>
      </button>

      {open ? (
        <div className="nav-drawer">
          <ul>
            {links.map((l) => (
              <li key={l.href + l.label}>{renderLink(l, () => setOpen(false))}</li>
            ))}
            <li>
              <Link href="/contact" className="nav-cta" onClick={() => setOpen(false)}>
                {ctaLabel}
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
}
