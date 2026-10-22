import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/page-intro";
import { TreatmentCard } from "@/components/sections/treatment-card";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import { treatments } from "@/content/treatments";

export const metadata: Metadata = {
  title: "Conditions & Treatments",
  description:
    "Specialist assessment and treatment for colorectal conditions including haemorrhoids, anal fissures and anal skin tags, with Mr Mohammad Eddama.",
  alternates: { canonical: "/treatments" },
};

export default function TreatmentsPage() {
  return (
    <>
      <section className="bg-surface-soft pb-20 pt-14 sm:pt-20 lg:pb-28 lg:pt-24">
        <div className="container-site">
          <PageIntro eyebrow="Treatments" title="Conditions & Treatments">
            <p>
              Specialist care for a range of colorectal conditions, tailored to your individual
              needs. Select a treatment to find out more.
            </p>
          </PageIntro>

          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:gap-6">
            {treatments.map((treatment) => (
              <li key={treatment.slug}>
                <TreatmentCard treatment={treatment} />
              </li>
            ))}
          </ul>

          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
            The conditions listed are not an exhaustive list of the conditions Mr Eddama sees. If
            your concern is not listed, please get in touch. Not every treatment is suitable for
            every patient; options are discussed individually at consultation.
          </p>
        </div>
      </section>

      <ConsultationCta />
    </>
  );
}
