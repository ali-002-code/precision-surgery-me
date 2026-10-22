import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { treatments } from "@/content/treatments";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/treatments", "/research", "/contact", "/privacy-policy", "/cookie-policy"];
  return [
    ...pages.map((path) => ({ url: `${site.url}${path}` })),
    ...treatments.map((treatment) => ({ url: `${site.url}/treatments/${treatment.slug}` })),
  ];
}
