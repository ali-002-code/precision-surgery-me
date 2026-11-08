import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { treatments } from "@/content/treatments";

// Generated once at build time for the static export.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/treatments", "/research", "/contact", "/privacy-policy", "/cookie-policy"];
  return [
    ...pages.map((path) => ({ url: `${site.url}${path}` })),
    ...treatments.map((treatment) => ({ url: `${site.url}/treatments/${treatment.slug}` })),
  ];
}
