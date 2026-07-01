import Link from "next/link";
import { Logo } from "./logo";
import type { Brand } from "@/lib/brand";

const TAGLINE: Record<Brand, string> = {
  group: "Signal to outcomes performance.",
  rx: "Intelligence-led healthcare communications.",
};

/**
 * Site-wide footer. Dark band with logo, tagline, cross-brand + contact links.
 * `brand` is passed by the root layout (derived from hostname).
 */
export function Footer({ brand = "group" }: { brand?: Brand }) {
  const year = new Date().getFullYear();
  const isRx = brand === "rx";
  const siteUrl = isRx ? "https://www.beconrx.io" : "https://www.becongroup.io";
  const siteLabel = isRx ? "beconrx.io" : "becongroup.io";

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-container gap-8 px-6 py-12 md:grid-cols-3 md:px-10 md:py-16">
        <div>
          <Logo brand={brand} tone="light" />
          <p className="mt-3 text-small text-white/55">{TAGLINE[brand]}</p>
        </div>

        <div>
          <p className="text-eyebrow uppercase text-orange-400">Site</p>
          <ul className="mt-3 space-y-2 text-small text-white/70">
            <li>
              <Link href="/" className="hover:text-white">
                {isRx ? "BeCon Rx" : "BeCon Group"}
              </Link>
            </li>
            <li>
              <a
                href={isRx ? "https://www.becongroup.io" : "https://www.beconrx.io"}
                className="hover:text-white"
              >
                {isRx ? "BeCon Group" : "BeCon Rx"}
              </a>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Start a conversation
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-eyebrow uppercase text-orange-400">Contact</p>
          <ul className="mt-3 space-y-2 text-small text-white/70">
            <li>
              <a href="mailto:info@becongroup.io" className="hover:text-white">
                info@becongroup.io
              </a>
            </li>
            <li>
              <a href={siteUrl} className="hover:text-white">
                {siteLabel}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-container flex-col gap-2 px-6 py-6 text-eyebrow uppercase text-white/40 md:flex-row md:items-center md:justify-between md:px-10">
          <span>© {year} BeCon Group</span>
          <span>{isRx ? "A division of BeCon Group" : "Biopharma commercial consultancy"}</span>
        </div>
      </div>
    </footer>
  );
}
