import type { NextConfig } from "next";

/**
 * The site is a fully static export (`out/`), deployed to Cloudflare Pages at
 * https://precisionsurgeryme.com. `NEXT_PUBLIC_BASE_PATH` is only set for the
 * GitHub Pages family preview, which is served from a sub-path.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // Static hosting has no image optimiser; portraits are pre-compressed WebP.
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
