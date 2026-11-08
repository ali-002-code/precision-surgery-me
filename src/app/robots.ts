import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Generated once at build time for the static export.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Block all crawlers until the site is approved for public launch.
  if (!site.indexable) return { rules: { userAgent: "*", disallow: "/" } };
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${site.url}/sitemap.xml` };
}
