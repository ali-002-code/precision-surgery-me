import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { AlertCircle, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { TreatmentIcon } from "@/components/ui/icons";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/content/site";
import { getTreatment, treatments } from "@/content/treatments";

export function generateStaticParams() {
  return treatments.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/treatments/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) return {};
  return {
    title: treatment.title,
    description: treatment.metaDescription,
    alternates: { canonical: `/treatments/${treatment.slug}` },
  };
}

const sections = [
  { id: "overview", label: "Overview" },
  { id: "symptoms", label: "Reasons for consultation" },
  { id: "options", label: "Assessment & treatment" },
  { id: "what-to-expect", label: "What to expect" },
  { id: "seek-advice", label: "When to seek advice" },
  { id: "book", label: "Book a consultation" },
];

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={`${id}-heading`}
      className="font-serif text-[1.75rem] leading-tight tracking-[-0.01em] text-navy-900 sm:text-[2rem]"
    >
      {children}
    </h2>
  );
}

export default function TreatmentPage({ params }: PageProps<"/treatments/[slug]">) {
  return (
    <Suspense fallback={<div className="min-h-[60vh] bg-surface-soft" aria-busy="true" />}>
      <TreatmentContent params={params} />
    </Suspense>
  );
}

async function TreatmentContent({ params }: Pick<PageProps<"/treatments/[slug]">, "params">) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) notFound();

  const index = treatments.indexOf(treatment);
  const next = treatments[(index + 1) % treatments.length];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Treatments", item: `${site.url}/treatments` },
      {
        "@type": "ListItem",
        position: 3,
        name: treatment.title,
        item: `${site.url}/treatments/${treatment.slug}`,
      },
    ],
  };

  return (
    <>
      <section className="border-b border-line bg-surface-soft">
        <div className="container-site pb-14 pt-10 sm:pb-20 sm:pt-12">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
              <li>
                <Link href="/treatments" className="inline-flex items-center gap-1.5 hover:text-navy-900">
                  <ArrowLeft aria-hidden className="size-3.5" strokeWidth={1.75} />
                  Treatments
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-navy-900">
                {treatment.title}
              </li>
            </ol>
          </nav>
          <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <TreatmentIcon name={treatment.icon} className="size-14 text-navy-800" />
              <h1 className="mt-7 font-serif text-[2.5rem] leading-[1.08] tracking-[-0.015em] text-navy-900 sm:text-[3.5rem]">
                {treatment.title}
              </h1>
              <p className="mt-5 text-[1.125rem] leading-relaxed">{treatment.summary}</p>
            </div>
            <ButtonLink href="/contact" className="self-start md:self-auto">
              Book a Consultation
            </ButtonLink>
          </div>
        </div>
      </section>

      <div className="container-site grid gap-12 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
        <aside className="hidden lg:col-span-3 lg:block">
          <nav aria-label="On this page" className="sticky top-[calc(var(--header-height)+2rem)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-900">
              On this page
            </p>
            <ul className="mt-5 space-y-3 border-l border-line text-sm">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="-ml-px block border-l border-transparent pl-4 text-muted hover:border-navy-900 hover:text-navy-900"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="space-y-16 lg:col-span-8 lg:col-start-5">
          <section id="overview" aria-labelledby="overview-heading">
            <SectionHeading id="overview">Overview</SectionHeading>
            <div className="prose-site mt-5 text-[1.0625rem] leading-[1.75]">
              {treatment.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section id="symptoms" aria-labelledby="symptoms-heading">
            <SectionHeading id="symptoms">Symptoms &amp; reasons for consultation</SectionHeading>
            <p className="mt-5 leading-relaxed">
              People commonly seek advice for one or more of the following:
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {treatment.symptoms.map((symptom) => (
                <li
                  key={symptom}
                  className="flex gap-3 rounded-md border border-line bg-white p-4 text-[0.9375rem] leading-relaxed"
                >
                  <Check aria-hidden className="mt-1 size-4 shrink-0 text-accent" strokeWidth={2} />
                  {symptom}
                </li>
              ))}
            </ul>
          </section>

          <section id="options" aria-labelledby="options-heading">
            <SectionHeading id="options">Assessment &amp; treatment options</SectionHeading>
            <p className="mt-5 leading-relaxed">
              The right approach depends on your symptoms, examination findings and preferences.
              Not every option is suitable for every patient.
            </p>
            <ol className="mt-6 divide-y divide-line border-y border-line">
              {treatment.options.map((option, i) => (
                <li key={option.title} className="grid gap-2 py-6 sm:grid-cols-[3rem_1fr]">
                  <span aria-hidden className="font-serif text-lg text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-navy-900">{option.title}</h3>
                    <p className="mt-2 leading-relaxed">{option.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="what-to-expect" aria-labelledby="what-to-expect-heading">
            <SectionHeading id="what-to-expect">What to expect</SectionHeading>
            <ul className="mt-6 space-y-4">
              {treatment.whatToExpect.map((item) => (
                <li key={item} className="flex gap-4 leading-relaxed">
                  <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-navy-900" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section
            id="seek-advice"
            aria-labelledby="seek-advice-heading"
            className="rounded-lg border border-line bg-surface-soft p-7 sm:p-9"
          >
            <div className="flex items-center gap-3">
              <AlertCircle aria-hidden className="size-6 text-navy-800" strokeWidth={1.5} />
              <SectionHeading id="seek-advice">When to seek medical advice</SectionHeading>
            </div>
            <p className="mt-5 leading-relaxed">
              Please speak to your GP or another healthcare professional if you notice:
            </p>
            <ul className="mt-4 space-y-2.5">
              {treatment.seekAdvice.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed">
                  <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[0.9375rem] font-medium leading-relaxed text-navy-900">
              If you have heavy bleeding, severe pain, or feel very unwell, seek urgent medical
              help by calling NHS 111 or, in an emergency, 999.
            </p>
          </section>

          <section
            id="book"
            aria-labelledby="book-heading"
            className="rounded-lg bg-navy-900 p-8 text-white sm:p-10"
          >
            <h2 id="book-heading" className="font-serif text-[1.75rem] leading-tight sm:text-[2rem]">
              Book a consultation
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-white/75">
              A consultation is the best way to understand your symptoms and the options that may
              be suitable for you.
            </p>
            <ButtonLink
              href="/contact"
              className="mt-8 !bg-white !text-navy-900 !shadow-none hover:!bg-surface-tint"
            >
              Make an enquiry
            </ButtonLink>
          </section>

          <p className="text-sm leading-relaxed text-muted">
            This page provides general information only and does not replace individual medical
            advice.
          </p>

          <Link
            href={`/treatments/${next.slug}`}
            className="group flex items-center justify-between rounded-lg border border-line p-6 hover:border-line-strong"
          >
            <span>
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Next treatment
              </span>
              <span className="mt-1 block font-serif text-xl text-navy-900">{next.title}</span>
            </span>
            <ArrowRight
              aria-hidden
              className="size-5 text-navy-900 transition-transform group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </div>

      <JsonLd data={breadcrumbJsonLd} />
    </>
  );
}
