import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, ShieldCheck, UserRound, UserRoundCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Portrait } from "@/components/ui/portrait";
import { FeatureStrip, type Feature } from "@/components/sections/feature-strip";
import { TreatmentCard } from "@/components/sections/treatment-card";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import { site } from "@/content/site";
import { treatments } from "@/content/treatments";
import { uclProfile } from "@/content/research";

export const metadata: Metadata = {
  title: { absolute: `Specialist Colorectal Care | ${site.surgeon.name} | ${site.name}` },
  description: site.description,
  alternates: { canonical: "/" },
};

const features: Feature[] = [
  {
    icon: UserRoundCheck,
    title: "Specialist Colorectal Care",
    description: "Focused, personalised treatment",
  },
  {
    icon: ShieldCheck,
    title: "Evidence-Based Approach",
    description: "Care informed by current evidence",
  },
  {
    icon: UserRound,
    title: "Patient-Centred",
    description: "Individualised care plans",
  },
  {
    icon: BarChart3,
    title: "Academic Research",
    description: "Research activity at University College London",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden bg-[linear-gradient(100deg,#f8fafc_0%,#f1f6fa_50%)]"
      >
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-[50%]">
          <Portrait
            tone="hero"
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            position="62% 22%"
            className="aspect-square w-full sm:aspect-[16/10] lg:aspect-auto lg:h-full"
          />
        </div>

        <div className="container-site relative">
          <div className="py-14 sm:py-16 lg:flex lg:min-h-[min(46rem,calc(100svh-var(--header-height)-9rem))] lg:w-[50%] lg:flex-col lg:justify-center lg:py-24 lg:pr-10">
            <p className="eyebrow">Expert Colorectal Care</p>
            <h1
              id="hero-heading"
              className="mt-6 font-serif text-[2.875rem] font-normal leading-[1.04] tracking-[-0.02em] text-navy-900 sm:text-[4rem] xl:text-[4.5rem]"
            >
              Specialist Colorectal&nbsp;Care
            </h1>
            <p className="mt-5 font-serif text-[1.75rem] leading-tight text-navy-900 sm:text-[2.125rem] xl:text-[2.5rem]">
              {site.surgeon.name}
            </p>
            <p className="mt-2 text-[0.8125rem] font-medium uppercase tracking-[0.2em] sm:tracking-[0.28em] text-navy-800 sm:text-[0.875rem]">
              {site.surgeon.title}
            </p>
            <p className="mt-7 max-w-[34rem] text-[1.0625rem] leading-[1.7] text-body sm:text-[1.1875rem]">
              Personalised, evidence-based surgical care for a range of colorectal conditions, with
              a focus on improving comfort, function and quality of life.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-5">
              <ButtonLink href="/contact">Book a Consultation</ButtonLink>
              <ButtonLink href="/treatments" variant="secondary">
                View Treatments
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <FeatureStrip features={features} label="Our approach" />

      {/* Introducing the surgeon */}
      <section aria-labelledby="about-heading" className="section-y">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <Portrait
            sizes="(min-width: 1024px) 40vw, 100vw"
            position="62% 0%"
            className="aspect-[4/5] w-full rounded-lg lg:col-span-5"
          />
          <div className="lg:col-span-7">
            <p className="eyebrow">About</p>
            <h2
              id="about-heading"
              className="mt-5 font-serif text-[2.25rem] leading-[1.1] tracking-[-0.015em] text-navy-900 sm:text-[3rem]"
            >
              Meet {site.surgeon.name}
            </h2>
            <div className="prose-site mt-7 max-w-xl text-[1.0625rem] leading-[1.75]">
              <p>
                {site.surgeon.name} is a Consultant Colorectal Surgeon offering private
                consultations for a range of benign colorectal and anal conditions, including
                haemorrhoids, anal fissures and anal skin tags.
              </p>
              <p>
                Alongside his clinical work, he is a {uclProfile.currentTitle} in the{" "}
                {uclProfile.department} at {uclProfile.institution}, where his research has
                included work on biomarkers, inflammation and surgical decision-making.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              <ButtonLink href="/about">About Mr Eddama</ButtonLink>
              <Link
                href="/research"
                className="group inline-flex h-14 items-center gap-2 text-[0.9375rem] font-medium text-navy-900 underline-offset-4 hover:underline"
              >
                Research &amp; academic work
                <ArrowRight
                  aria-hidden
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  strokeWidth={1.75}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section aria-labelledby="treatments-heading" className="section-y bg-surface-soft">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Treatments</p>
              <h2
                id="treatments-heading"
                className="mt-5 font-serif text-[2.25rem] leading-[1.1] tracking-[-0.015em] text-navy-900 sm:text-[3rem]"
              >
                Conditions &amp; Treatments
              </h2>
              <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed">
                Specialist care for a range of colorectal conditions, tailored to your individual
                needs.
              </p>
            </div>
            <ButtonLink href="/treatments" variant="secondary" className="self-start md:self-auto">
              View all treatments
            </ButtonLink>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:gap-6">
            {treatments.map((treatment) => (
              <li key={treatment.slug}>
                <TreatmentCard treatment={treatment} headingLevel="h3" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ConsultationCta />
    </>
  );
}
