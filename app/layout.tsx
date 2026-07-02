import type { Metadata } from "next";
import { Newsreader, Sora } from "next/font/google";
import { headers } from "next/headers";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { brandFromHost, isRxHost, originFromHost } from "@/lib/brand";
import "./globals.css";

// Sora — the working system voice (UI, labels, eyebrows, body).
const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  weight: ["400", "500", "600", "700", "800"],
});

// Newsreader — editorial display (mastheads, headlines, pull quotes).
const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-newsreader",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

// Host-aware: the same deployment serves becongroup.io and beconrx.io, so
// metadata (title template, canonical origin, OG) is resolved per hostname.
export async function generateMetadata(): Promise<Metadata> {
  const host = (await headers()).get("host");
  const origin = originFromHost(host);

  if (isRxHost(host)) {
    return {
      metadataBase: new URL(origin),
      title: {
        default: "BeConRx — Intelligence-led healthcare communications",
        template: "%s · BeConRx",
      },
      description:
        "A division of BeConGroup. Connecting medical, market, and competitive signals to brand strategy, market activation, and the outcomes that drive business.",
      openGraph: {
        type: "website",
        siteName: "BeConRx",
        title: "BeConRx — Intelligence-led healthcare communications",
        description:
          "Connecting medical, market, and competitive signals to brand strategy, market activation, and the outcomes that drive business.",
        locale: "en_US",
        url: origin,
      },
      twitter: {
        card: "summary_large_image",
        title: "BeConRx — Intelligence-led healthcare communications",
        description:
          "Connecting medical, market, and competitive signals to brand strategy, market activation, and the outcomes that drive business.",
      },
      robots: { index: true, follow: true },
    };
  }

  return {
    metadataBase: new URL(origin),
    title: {
      default: "BeConGroup — Signal to outcomes performance",
      template: "%s · BeConGroup",
    },
    description:
      "Biopharma commercial consultancy. We connect commercial strategy, experience design, and governed AI into one system — so signal converts into measurable outcomes.",
    keywords: [
      "biopharma consulting",
      "pharma commercial strategy",
      "AI in healthcare",
      "HCP engagement",
      "patient pathway",
      "governed AI",
      "life sciences consulting",
    ],
    openGraph: {
      type: "website",
      siteName: "BeConGroup",
      title: "BeConGroup — Signal to outcomes performance",
      description:
        "Biopharma commercial consultancy. We connect commercial strategy, experience design, and governed AI into one system.",
      locale: "en_US",
      url: origin,
    },
    twitter: {
      card: "summary_large_image",
      title: "BeConGroup — Signal to outcomes performance",
      description:
        "Biopharma commercial consultancy. We connect commercial strategy, experience design, and governed AI into one system.",
    },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const hdrs = await headers();
  // Honor the preview-only ?brand override (set as a header by middleware) so
  // the surface theme + nav/footer match the page; otherwise choose by host.
  const override = hdrs.get("x-becon-brand");
  const brand =
    override === "rx" || override === "group" ? override : brandFromHost(hdrs.get("host"));
  return (
    <html
      lang="en"
      data-brand={brand}
      className={`${sora.variable} ${newsreader.variable}`}
    >
      <body className="becon-body antialiased">
        <Nav brand={brand} />
        {children}
        <Footer brand={brand} />
      </body>
    </html>
  );
}
