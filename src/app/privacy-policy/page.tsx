import type { Metadata } from "next";
import { LegalPlaceholder } from "@/components/sections/legal-placeholder";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for PrecisionSurgeryME.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPlaceholder
      title="Privacy Policy"
      topics={[
        "The data controller and contact details",
        "What personal information is collected and why",
        "The lawful basis for processing, including special category health data",
        "How long information is kept and how it is secured",
        "Your rights under UK GDPR and how to exercise them",
      ]}
    />
  );
}
