import { NextResponse, type NextRequest } from "next/server";

/**
 * Retire the old BeConRx path. On every host, /rx (and /rx/*) now permanently
 * redirects to the BeConRx site at its own domain.
 *
 * apex ↔ www canonicalization is handled by Vercel (www.beconrx.io is the
 * primary domain, matching www.becongroup.io), so middleware must NOT also
 * redirect www → apex — the two directions would form an infinite loop.
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/rx" || pathname.startsWith("/rx/")) {
    return NextResponse.redirect("https://www.beconrx.io/", 301);
  }

  return NextResponse.next();
}

export const config = {
  // Run on page routes (incl. /sitemap.xml, /robots.txt); skip Next internals + assets.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
