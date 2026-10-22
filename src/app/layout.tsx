import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/seo/json-ld";
import { site, verifiedSources } from "@/content/site";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  // Variable font with optical sizing: large headings get the higher-contrast
  // display cut seen in the reference design.
  axes: ["opsz"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.surgeon.name} | Consultant Colorectal Surgeon | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_GB",
  },
  robots: site.indexable ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

/* Structured data limited to verified facts (see src/content/research.ts). */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohammad Eddama",
  honorificPrefix: "Mr",
  jobTitle: site.surgeon.title,
  affiliation: [
    { "@type": "CollegeOrUniversity", name: "University College London" },
    { "@type": "Hospital", name: "Oxford University Hospitals NHS Trust" },
  ],
  sameAs: [verifiedSources.uclProfile, verifiedSources.orcid],
  url: site.url,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${sourceSerif.variable} ${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-navy-900 focus:px-4 focus:py-3 focus:text-sm focus:text-white"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <JsonLd data={personJsonLd} />
      </body>
    </html>
  );
}
