import type { NextConfig } from "next";

/**
 * `npm run build:pages` builds a static export for GitHub Pages, served from
 * a sub-path (e.g. /precision-surgery-me). Regular dev/build are unaffected.
 */
const isPagesExport = process.env.PAGES_EXPORT === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // The Pages export skips the .ts metadata routes (robots, sitemap): crawlers
  // ignore them under a sub-path, and every page already carries noindex.
  // All pages and layouts are .tsx.
  pageExtensions: isPagesExport ? ["tsx"] : ["tsx", "ts"],
  // Static export cannot use Partial Prerendering, which Cache Components implies.
  cacheComponents: !isPagesExport,
  partialPrefetching: !isPagesExport,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  ...(isPagesExport && {
    output: "export",
    basePath,
    trailingSlash: true,
    // GitHub Pages has no image optimiser; portraits are pre-compressed WebP.
    images: { unoptimized: true },
  }),
};

export default nextConfig;
