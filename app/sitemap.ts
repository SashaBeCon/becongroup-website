import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { isRxHost } from "@/lib/brand";

// Per-host: beconrx.io and becongroup.io each get their own sitemap from the
// same deployment. becongroup.io intentionally omits /rx (retired).
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const host = (await headers()).get("host");
  const now = new Date();

  if (isRxHost(host)) {
    return [
      { url: "https://www.beconrx.io/", lastModified: now, changeFrequency: "monthly", priority: 1 },
      { url: "https://www.beconrx.io/contact", lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    ];
  }

  return [
    { url: "https://www.becongroup.io/", lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: "https://www.becongroup.io/contact", lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];
}
