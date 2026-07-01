import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { headers } from "next/headers";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { brandFromHost, isRxHost, originFromHost } from "@/lib/brand";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
  weight: ["300", "400", "500", "600", "700", "800"],
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
  const brand = brandFromHost((await headers()).get("host"));
  return (
    <html lang="en" className={interTight.variable}>
      <body className="bg-paper text-ink text-body font-sans antialiased">
        <Nav variant="overlay" brand={brand} />
        {children}
        <Footer brand={brand} />
      </body>
    </html>
  );
}
