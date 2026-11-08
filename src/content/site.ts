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
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://precisionsurgeryme.com",
  /**
   * Search-engine indexing. Keep false until clinical and legal content is
   * approved; then set NEXT_PUBLIC_ALLOW_INDEXING=true in the Cloudflare build.
   */
  indexable: process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true",
  description:
    "Private colorectal surgical practice of Mr Mohammad Eddama, Consultant Colorectal Surgeon. Personalised, evidence-based care for a range of colorectal conditions.",
  surgeon: {
    name: "Mr Mohammad Eddama",
    givenName: "Mohammad",
    familyName: "Eddama",
    title: "Consultant Colorectal Surgeon",
    postNominals: "MD PhD MSc FRCS FHEA",
  },
  /** General Medical Council registration (from Mr Eddama's CV). */
  registration: {
    gmcNumber: "6099559",
    register: "Specialist Register",
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

/** Practice contact details. `locations` is still a placeholder. */
export const contact = {
  phone: { display: "+44 7956 699867", href: "tel:+447956699867" },
  email: { display: "emineddama@icloud.com", href: "mailto:emineddama@icloud.com" },
  locations: "[Consultation locations to be confirmed]",
  /**
   * The web enquiry form stays hidden until it is connected to a secure,
   * UK GDPR-compliant backend. Until then the contact page offers email and
   * phone buttons instead.
   */
  enquiryFormEnabled: false,
} as const;

/** Sources used for the biographical and research content. */
export const verifiedSources = {
  uclProfile: "https://profiles.ucl.ac.uk/38653-mohammad-eddama",
  orcid: "https://orcid.org/0000-0002-4582-0788",
  ukSkin: "https://ukskin.co.uk/about-us/dr-mohammad-eddama/",
} as const;
