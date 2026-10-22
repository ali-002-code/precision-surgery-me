import { PageIntro } from "./page-intro";

/** Placeholder for legal pages that must be written and approved before launch. */
export function LegalPlaceholder({ title, topics }: { title: string; topics: string[] }) {
  return (
    <section className="section-y">
      <div className="container-site max-w-3xl">
        <PageIntro eyebrow="Legal" title={title}>
          <p>
            This policy has not yet been written. It must be prepared and approved before the
            website is published.
          </p>
        </PageIntro>
        <div className="mt-10 rounded-lg border border-dashed border-line-strong p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Placeholder — to be supplied
          </p>
          <p className="mt-4 text-[0.9375rem]">The final policy is expected to cover:</p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[0.9375rem]">
            {topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
