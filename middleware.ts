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
  const { pathname, searchParams } = req.nextUrl;

  if (pathname === "/rx" || pathname.startsWith("/rx/")) {
    return NextResponse.redirect("https://www.beconrx.io/", 301);
  }

  // Preview-only brand override. A Vercel preview URL is neither production
  // domain, so ?brand=rx / ?brand=group lets you view either site. We pass it
  // to the layout via a request header so the surface theme, nav, footer, and
  // page content all switch together. Real domains never carry ?brand, so this
  // is completely inert in production.
  const brand = searchParams.get("brand");
  if (brand === "rx" || brand === "group") {
    const headers = new Headers(req.headers);
    headers.set("x-becon-brand", brand);
    return NextResponse.next({ request: { headers } });
  }

  return NextResponse.next();
}

export const config = {
  // Run on page routes (incl. /sitemap.xml, /robots.txt); skip Next internals + assets.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
