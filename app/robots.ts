import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { originFromHost } from "@/lib/brand";

export const dynamic = "force-dynamic";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const origin = originFromHost((await headers()).get("host"));
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${origin}/sitemap.xml`,
  };
}
