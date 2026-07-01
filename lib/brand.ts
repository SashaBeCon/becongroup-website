/**
 * Host → brand mapping. BeConGroup and BeConRx are served from one Next.js app
 * on Vercel; the hostname decides which brand a request belongs to. Used by
 * middleware.ts, app/layout.tsx, and the host-aware app/page.tsx.
 */
export const RX_HOST = "beconrx.io";
export const GROUP_HOST = "becongroup.io";

export type Brand = "group" | "rx";

/**
 * True for the BeConRx host — beconrx.io, www.beconrx.io, and the local dev
 * alias beconrx.localhost (so you can preview the RX site at
 * http://beconrx.localhost:3000). Port-insensitive.
 */
export function isRxHost(host?: string | null): boolean {
  const h = (host ?? "").toLowerCase().replace(/:\d+$/, "");
  return h === RX_HOST || h === `www.${RX_HOST}` || h === "beconrx.localhost";
}

export function brandFromHost(host?: string | null): Brand {
  return isRxHost(host) ? "rx" : "group";
}

/** Canonical https origin (www is primary on both brands, per Vercel). */
export function originFromHost(host?: string | null): string {
  return isRxHost(host) ? "https://www.beconrx.io" : "https://www.becongroup.io";
}
