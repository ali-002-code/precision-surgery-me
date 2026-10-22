import type { Metadata } from "next";
import { LegalPlaceholder } from "@/components/sections/legal-placeholder";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy for PrecisionSurgeryME.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <LegalPlaceholder
      title="Cookie Policy"
      topics={[
        "Which cookies and similar technologies are used",
        "Strictly necessary cookies versus optional analytics cookies",
        "How consent is obtained and can be withdrawn",
      ]}
    />
  );
}
