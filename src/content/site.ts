/**
 * Central site configuration.
 *
 * Anything marked `PLACEHOLDER` must be supplied and verified before launch.
 * Do not replace placeholders with guessed values.
 */

/** Sub-path the site is served from (set for GitHub Pages builds). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const site = {
  name: "PrecisionSurgeryME",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /** Keep false until the site is approved for public launch. */
  indexable: process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true",
  description:
    "Private colorectal surgical practice of Mr Mohammad Eddama, Consultant Colorectal Surgeon. Personalised, evidence-based care for a range of colorectal conditions.",
  surgeon: {
    name: "Mr Mohammad Eddama",
    givenName: "Mohammad",
    familyName: "Eddama",
    title: "Consultant Colorectal Surgeon",
  },
  /**
   * Professional studio portrait (pale blue backdrop that matches the hero).
   * Set `src` to null to show the labelled placeholder.
   */
  portrait: {
    src: `${basePath}/images/mohammad-eddama-studio.webp` as string | null,
    alt: "Mr Mohammad Eddama, Consultant Colorectal Surgeon, smiling, wearing dark surgical scrubs",
  },
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
] as const;

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
] as const;

/** PLACEHOLDER contact details — none of these are real yet. */
export const contactPlaceholders = {
  phone: "[Phone number to be confirmed]",
  email: "[Email address to be confirmed]",
  locations: "[Consultation locations to be confirmed]",
  registration: "[GMC registration details to be confirmed]",
} as const;

/** Sources used for the biographical and research content. */
export const verifiedSources = {
  uclProfile: "https://profiles.ucl.ac.uk/38653-mohammad-eddama",
  orcid: "https://orcid.org/0000-0002-4582-0788",
  ukSkin: "https://ukskin.co.uk/about-us/dr-mohammad-eddama/",
} as const;
