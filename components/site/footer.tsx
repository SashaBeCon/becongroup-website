import Link from "next/link";
import { Logo } from "./logo";

/**
 * Site-wide footer. Dark band with logo, tagline, contact email, copyright.
 */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-container gap-8 px-6 py-12 md:grid-cols-3 md:px-10 md:py-16">
        <div>
          <Logo brand="group" tone="light" />
          <p className="mt-3 text-small text-white/55">Signal to outcomes performance.</p>
        </div>

        <div>
          <p className="text-eyebrow uppercase text-orange-400">Site</p>
          <ul className="mt-3 space-y-2 text-small text-white/70">
            <li>
              <Link href="/" className="hover:text-white">
                BeCon Group
              </Link>
            </li>
            <li>
              <Link href="/rx" className="hover:text-white">
                BeCon Rx
              </Link>
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
              <a href="https://becongroup.io" className="hover:text-white">
                becongroup.io
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-container flex-col gap-2 px-6 py-6 text-eyebrow uppercase text-white/40 md:flex-row md:items-center md:justify-between md:px-10">
          <span>© {year} BeCon Group</span>
          <span>Biopharma commercial consultancy</span>
        </div>
      </div>
    </footer>
  );
}
