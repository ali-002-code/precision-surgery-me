import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, GraduationCap, HeartPulse, Landmark, UsersRound } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Portrait } from "@/components/ui/portrait";
import { FeatureStrip, type Feature } from "@/components/sections/feature-strip";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import { site, verifiedSources } from "@/content/site";
import { treatments } from "@/content/treatments";
import { appointments, uclProfile } from "@/content/research";

export const metadata: Metadata = {
  title: "About Mr Mohammad Eddama",
  description:
    "About Mr Mohammad Eddama, Consultant Colorectal Surgeon: clinical background, specialist interests and academic work at University College London.",
  alternates: { canonical: "/about" },
};

const features: Feature[] = [
  {
    icon: GraduationCap,
    title: "Consultant Colorectal Surgeon",
    description: "Specialist in colorectal conditions",
  },
  {
    icon: Landmark,
    title: "Academic Research",
    description: "Clinical Principal Research Fellow, UCL",
  },
  {
    icon: UsersRound,
    title: "Patient-Focused Care",
    description: "Individualised treatment plans",
  },
  {
    icon: HeartPulse,
    title: "Evidence-Based Practice",
    description: "Care informed by current evidence",
  },
];

/** Information that has not yet been verified from a public source. */
const toBeConfirmed = [
  "Medical degree and postgraduate qualifications",
  "Royal College fellowship and professional memberships",
  "GMC registration number",
  "Private hospitals and clinics where Mr Eddama consults",
  "Surgical training history",
];

export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-heading" className="border-b border-line">
        <div className="container-site grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
          <div className="lg:col-span-7">
            <p className="eyebrow">About</p>
            <h1
              id="about-heading"
              className="mt-5 font-serif text-[2.75rem] leading-[1.05] tracking-[-0.02em] text-navy-900 sm:text-[4rem]"
            >
              {site.surgeon.name}
            </h1>
            <p className="mt-4 text-[0.8125rem] font-medium uppercase tracking-[0.2em] sm:tracking-[0.28em] text-navy-800 sm:text-sm">
              {site.surgeon.title}
            </p>
            <div className="prose-site mt-8 max-w-[36rem] text-[1.0625rem] leading-[1.75]">
              <p>
                {site.surgeon.name} is a Consultant Colorectal Surgeon who sees patients with a
                range of benign colorectal and anal conditions, including haemorrhoids, anal
                fissures and anal skin tags.
              </p>
              <p>
                He is committed to providing personalised, evidence-based surgical care, taking
                time to understand each patient&apos;s symptoms and priorities and explaining the
                options available so that decisions can be made together.
              </p>
              <p>
                Alongside his clinical practice, Mr Eddama is actively involved in academic work at
                University College London, where he is a {uclProfile.currentTitle} in the{" "}
                {uclProfile.department}.
              </p>
            </div>
            <ButtonLink href="/contact" className="mt-10">
              Book a Consultation
            </ButtonLink>
          </div>
          <Portrait
            priority
            sizes="(min-width: 1024px) 38vw, 100vw"
            position="62% 0%"
            className="aspect-[4/5] w-full rounded-lg shadow-card lg:col-span-5"
          />
        </div>
      </section>

      <FeatureStrip features={features} label="At a glance" framed />

      <section aria-labelledby="background-heading" className="section-y">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <h2
              id="background-heading"
              className="font-serif text-[2rem] leading-tight tracking-[-0.01em] text-navy-900 sm:text-[2.5rem]"
            >
              Clinical &amp; academic background
            </h2>
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted">
              Appointments as listed on Mr Eddama&apos;s public UCL Profiles page.
            </p>
            <a
              href={verifiedSources.uclProfile}
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-navy-900 underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View UCL profile
              <ExternalLink aria-hidden className="size-3.5" strokeWidth={1.75} />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
          <ol className="lg:col-span-8">
            {appointments.map((item) => (
              <li
                key={item.position}
                className="grid gap-1 border-t border-line py-6 last:border-b sm:grid-cols-[1fr_auto] sm:gap-8"
              >
                <div>
                  <h3 className="font-serif text-xl text-navy-900">{item.position}</h3>
                  <p className="mt-1 text-[0.9375rem] text-body">{item.organisation}</p>
                </div>
                <p className="text-sm text-muted sm:pt-1 sm:text-right">{item.period}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="interests-heading" className="section-y bg-surface-soft">
        <div className="container-site grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2
              id="interests-heading"
              className="font-serif text-[2rem] leading-tight tracking-[-0.01em] text-navy-900 sm:text-[2.5rem]"
            >
              Specialist interests
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed">
              Mr Eddama&apos;s private practice includes the assessment and treatment of:
            </p>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {treatments.map((treatment) => (
                <li key={treatment.slug}>
                  <Link
                    href={`/treatments/${treatment.slug}`}
                    className="flex items-center justify-between py-4 font-serif text-lg text-navy-900 hover:text-accent"
                  >
                    {treatment.title}
                    <span aria-hidden>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-[2rem] leading-tight tracking-[-0.01em] text-navy-900 sm:text-[2.5rem]">
              Qualifications &amp; registration
            </h2>
            <div className="mt-6 rounded-lg border border-dashed border-line-strong bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Placeholder — to be supplied and verified
              </p>
              <ul className="mt-5 space-y-3 text-[0.9375rem]">
                {toBeConfirmed.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="mt-2.5 size-1 shrink-0 rounded-full bg-muted" />
                    <span>[{item}]</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ConsultationCta />
    </>
  );
}
