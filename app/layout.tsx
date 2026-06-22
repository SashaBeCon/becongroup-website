import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://becongroup.io"),
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
  },
  twitter: {
    card: "summary_large_image",
    title: "BeConGroup — Signal to outcomes performance",
    description:
      "Biopharma commercial consultancy. We connect commercial strategy, experience design, and governed AI into one system.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={interTight.variable}>
      <body className="bg-paper text-ink text-body font-sans antialiased">
        <Nav variant="overlay" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
