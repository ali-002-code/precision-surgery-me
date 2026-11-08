import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/sections/legal-page";
import { contact, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `How ${site.name} uses cookies and similar technologies.`,
  alternates: { canonical: "/cookie-policy" },
};

/*
 * Accurate for the current site: no cookies, analytics or third-party embeds,
 * and fonts are self-hosted. Update this page (and add a consent banner) before
 * adding analytics or any other non-essential cookies.
 */

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated="October 2026"
      intro={<p>This page explains how {site.name} uses cookies and similar technologies.</p>}
    >
      <h2>Our use of cookies</h2>
      <p>
        This website does not currently set any cookies. We do not use analytics, advertising or
        social media tracking, and our fonts are served from this website rather than from a third
        party.
      </p>
      <p>
        Because we do not use non-essential cookies, we do not show a cookie consent banner. If
        this changes, we will update this page and ask for your consent before setting any
        non-essential cookies.
      </p>

      <h2>Server logs</h2>
      <p>
        Like most websites, our hosting provider may record basic technical information, such as
        your IP address and browser type, to keep the site secure and working. See our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link> for more information.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions, please email{" "}
        <a href={contact.email.href}>{contact.email.display}</a>.
      </p>
    </LegalPage>
  );
}
