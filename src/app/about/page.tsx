import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  ExternalLink,
  GraduationCap,
  HeartPulse,
  Landmark,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Portrait } from "@/components/ui/portrait";
import { FeatureStrip, type Feature } from "@/components/sections/feature-strip";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import { site, verifiedSources } from "@/content/site";
import { treatments } from "@/content/treatments";
import {
  academicAppointments,
  awards,
  clinicalAppointments,
  qualifications,
  surgicalInterests,
  type Appointment,
} from "@/content/research";

export const metadata: Metadata = {
  title: "About Mr Mohammad Eddama",
  description:
    "Mr Mohammad Eddama MD PhD MSc FRCS FHEA, Consultant Colorectal and General Surgeon: clinical background, qualifications, specialist interests and academic work at University College London.",
  alternates: { canonical: "/about" },
};

const features: Feature[] = [
  {
    icon: GraduationCap,
    title: "Consultant Colorectal Surgeon",
    description: "FRCS (General Surgery), Royal College of Surgeons of England",
  },
  {
    icon: Landmark,
    title: "Academic Research",
    description: "PhD and Principal Research Fellow, University College London",
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

const sectionHeading =
  "font-serif text-[2rem] leading-tight tracking-[-0.01em] text-navy-900 sm:text-[2.5rem]";

function AppointmentList({ title, items }: { title: string; items: Appointment[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-900">{title}</h3>
      <ol className="mt-4">
        {items.map((item) => (
          <li
            key={item.position}
            className="grid gap-1 border-t border-line py-5 last:border-b sm:grid-cols-[1fr_auto] sm:gap-8"
          >
            <div>
              <p className="font-serif text-xl text-navy-900">{item.position}</p>
              <p className="mt-1 text-[0.9375rem] text-body">{item.organisation}</p>
            </div>
            <p className="text-sm text-muted sm:pt-1 sm:text-right">{item.period}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

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
            <p className="mt-2 text-sm tracking-[0.06em] text-muted">
              {site.surgeon.postNominals}
            </p>
            <div className="prose-site mt-8 max-w-[36rem] text-[1.0625rem] leading-[1.75]">
              <p>
                {site.surgeon.name} is a Consultant Colorectal and General Surgeon at Portsmouth
                University Hospitals NHS Trust and an Honorary Consultant Colorectal Surgeon at
                University College London Hospital. After completing higher surgical training in
                General and Colorectal Surgery, he undertook specialist fellowships in robotic
                pelvic exenteration at The Royal Marsden Hospital and in articulating laparoscopic
                surgery in Germany.
              </p>
              <p>
                In his private practice he sees patients with a range of colorectal and anal
                conditions, including haemorrhoids, anal fissures and anal skin tags. He is
                committed to personalised, evidence-based care, taking time to understand each
                patient&apos;s symptoms and priorities and explaining the options available so
                that decisions can be made together.
              </p>
              <p>
                Alongside his clinical work, Mr Eddama is a Principal Research Fellow at University
                College London, where he completed his PhD. He leads a translational research
                programme, supervises doctoral researchers and directs the &ldquo;Doctor as Data
                Scientist&rdquo; module at UCL Medical School.
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
            <h2 id="background-heading" className={sectionHeading}>
              Clinical &amp; academic background
            </h2>
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted">
              Mr Eddama combines consultant surgical practice in the NHS with an active academic
              career at University College London.
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
          <div className="space-y-12 lg:col-span-8">
            <AppointmentList title="Clinical appointments" items={clinicalAppointments} />
            <AppointmentList title="Academic appointments" items={academicAppointments} />
          </div>
        </div>
      </section>

      <section aria-labelledby="interests-heading" className="section-y bg-surface-soft">
        <div className="container-site grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 id="interests-heading" className={sectionHeading}>
              Specialist interests
            </h2>
            <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-navy-900">
              Surgical practice
            </h3>
            <ul className="mt-4 space-y-3">
              {surgicalInterests.map((interest) => (
                <li key={interest} className="flex gap-3 leading-relaxed">
                  <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                  {interest}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-900 lg:mt-[4.5rem]">
              Private consultations
            </h3>
            <ul className="mt-4 divide-y divide-line border-y border-line">
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
        </div>
      </section>

      <section aria-labelledby="qualifications-heading" className="section-y">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <h2 id="qualifications-heading" className={sectionHeading}>
              Qualifications &amp; registration
            </h2>
            <div className="mt-8 rounded-lg border border-line bg-surface-soft p-6">
              <ShieldCheck aria-hidden className="size-6 text-navy-800" strokeWidth={1.5} />
              <p className="mt-4 font-medium text-ink">General Medical Council</p>
              <p className="mt-1 text-[0.9375rem] leading-relaxed">
                GMC No. {site.registration.gmcNumber}
                <br />
                {site.registration.register}
              </p>
            </div>
          </div>
          <ol className="lg:col-span-8">
            {qualifications.map((item) => (
              <li
                key={item.title}
                className="grid gap-1 border-t border-line py-5 last:border-b sm:grid-cols-[5.5rem_1fr] sm:gap-6"
              >
                <p className="font-serif text-lg text-accent">{item.year}</p>
                <div>
                  <p className="font-serif text-xl text-navy-900">{item.title}</p>
                  <p className="mt-1 text-[0.9375rem] leading-relaxed text-body">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="awards-heading" className="section-y bg-surface-soft">
        <div className="container-site">
          <h2 id="awards-heading" className={sectionHeading}>
            Awards &amp; prizes
          </h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {awards.map((award) => (
              <li
                key={award.title}
                className="rounded-lg border border-line bg-white p-7 shadow-card"
              >
                <Award aria-hidden className="size-6 text-navy-800" strokeWidth={1.5} />
                <p className="mt-4 font-serif text-xl text-navy-900">{award.title}</p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{award.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ConsultationCta />
    </>
  );
}
