import type { Metadata } from "next";
import { BookOpen, ExternalLink, FileText, Landmark } from "lucide-react";
import { PageIntro } from "@/components/sections/page-intro";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import { verifiedSources } from "@/content/site";
import {
  fieldsOfResearch,
  researchThemes,
  selectedPublications,
  uclProfile,
} from "@/content/research";

export const metadata: Metadata = {
  title: "Research & Academic Work",
  description:
    "Mr Mohammad Eddama's research and academic work at University College London, including selected publications listed on his UCL profile.",
  alternates: { canonical: "/research" },
};

function ExternalTextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-900 underline-offset-4 hover:underline"
    >
      {children}
      <ExternalLink aria-hidden className="size-3.5" strokeWidth={1.75} />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

/** Decorative fine-line pattern: a restrained, licence-free stand-in for photography. */
function ResearchPattern() {
  return (
    <svg aria-hidden viewBox="0 0 400 400" className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0v32" fill="none" stroke="white" strokeOpacity="0.06" />
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#grid)" />
      <g fill="none" stroke="white" strokeOpacity="0.28" strokeWidth="1">
        <circle cx="290" cy="150" r="96" />
        <circle cx="290" cy="150" r="60" strokeOpacity="0.18" />
        <circle cx="290" cy="150" r="28" strokeOpacity="0.12" />
        <path d="M60 330c60-40 120-40 170-90s90-60 150-60" strokeOpacity="0.2" />
      </g>
      <g fill="white">
        <circle cx="290" cy="54" r="3" fillOpacity="0.7" />
        <circle cx="206" cy="196" r="2.5" fillOpacity="0.5" />
        <circle cx="350" cy="225" r="2" fillOpacity="0.5" />
        <circle cx="230" cy="240" r="2" fillOpacity="0.4" />
      </g>
    </svg>
  );
}

export default function ResearchPage() {
  return (
    <>
      <section aria-labelledby="research-heading" className="relative border-b border-line">
        <div className="relative min-h-72 overflow-hidden bg-navy-900 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <ResearchPattern />
          <div className="relative flex h-full min-h-72 flex-col justify-end p-8 text-white sm:p-12">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/60">
              {uclProfile.institution}
            </p>
            <p className="mt-3 max-w-sm font-serif text-2xl leading-snug sm:text-[1.75rem]">
              {uclProfile.department}
            </p>
          </div>
        </div>
        <div className="container-site">
          <div className="py-14 sm:py-20 lg:w-1/2 lg:py-28 lg:pr-16">
            <PageIntro
              eyebrow="Research & Academic Work"
              title={<span id="research-heading">Advancing Colorectal Care Through Research</span>}
            >
              <p>
                Alongside his surgical practice, Mr Eddama is a {uclProfile.currentTitle} in the{" "}
                {uclProfile.department} at {uclProfile.institution}. His published work spans
                biomarker research, inflammation and clinical studies in emergency and colorectal
                surgery.
              </p>
            </PageIntro>
          </div>
        </div>
      </section>

      <section aria-label="Academic affiliation" className="section-y">
        <div className="container-site grid gap-5 md:grid-cols-2 lg:gap-6">
          <article className="rounded-lg border border-line bg-white p-8 shadow-card sm:p-10">
            <Landmark aria-hidden className="size-8 text-navy-800" strokeWidth={1.4} />
            <h2 className="mt-6 font-serif text-[1.625rem] text-navy-900">University College London</h2>
            <p className="mt-3 leading-relaxed">
              {uclProfile.currentTitle}, {uclProfile.department}. Mr Eddama has held academic
              appointments at UCL since 2016, including Clinical Lecturer and Senior Clinical
              Research Fellow, and leads the &ldquo;Doctor as Data Scientist&rdquo; module at UCL
              Medical School.
            </p>
            <div className="mt-6">
              <ExternalTextLink href={verifiedSources.uclProfile}>UCL Profiles page</ExternalTextLink>
            </div>
          </article>
          <article className="rounded-lg border border-line bg-white p-8 shadow-card sm:p-10">
            <FileText aria-hidden className="size-8 text-navy-800" strokeWidth={1.4} />
            <h2 className="mt-6 font-serif text-[1.625rem] text-navy-900">Fields of research</h2>
            <p className="mt-3 leading-relaxed">
              Research fields recorded on his UCL profile:
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {fieldsOfResearch.map((field) => (
                <li
                  key={field}
                  className="rounded-full border border-line bg-surface-soft px-3.5 py-1.5 text-sm text-navy-900"
                >
                  {field}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <ExternalTextLink href={verifiedSources.orcid}>ORCID 0000-0002-4582-0788</ExternalTextLink>
            </div>
          </article>
        </div>
      </section>

      <section aria-labelledby="themes-heading" className="section-y bg-surface-soft">
        <div className="container-site">
          <p className="eyebrow">Research interests</p>
          <h2
            id="themes-heading"
            className="mt-5 max-w-2xl font-serif text-[2.25rem] leading-[1.1] tracking-[-0.015em] text-navy-900 sm:text-[2.75rem]"
          >
            Themes across his published work
          </h2>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
            {researchThemes.map((theme, i) => (
              <li key={theme.title} className="bg-white p-8 sm:p-10">
                <span aria-hidden className="font-serif text-lg text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-serif text-[1.375rem] text-navy-900">{theme.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed">{theme.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="publications-heading" className="section-y">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <BookOpen aria-hidden className="size-8 text-navy-800" strokeWidth={1.4} />
            <h2
              id="publications-heading"
              className="mt-6 font-serif text-[2rem] leading-tight tracking-[-0.01em] text-navy-900 sm:text-[2.5rem]"
            >
              Selected publications
            </h2>
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted">
              A selection of the {uclProfile.totalOutputs} research outputs listed on Mr
              Eddama&apos;s UCL profile, on which he is an author or co-author. Information
              retrieved {uclProfile.retrieved}.
            </p>
            <div className="mt-5">
              <ExternalTextLink href={`${verifiedSources.uclProfile}/publications`}>
                Full publication list
              </ExternalTextLink>
            </div>
          </div>
          <ol className="lg:col-span-8">
            {selectedPublications.map((publication) => (
              <li key={publication.doi} className="border-t border-line py-7 last:border-b">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  {publication.type} · {publication.year}
                </p>
                <h3 className="mt-2 font-serif text-[1.25rem] leading-snug text-navy-900">
                  <a
                    href={`https://doi.org/${publication.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent"
                  >
                    {publication.title}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </h3>
                <p className="mt-2 text-sm text-body">
                  <em>{publication.venue}</em>
                  <span className="text-muted"> · DOI {publication.doi}</span>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ConsultationCta />
    </>
  );
}
