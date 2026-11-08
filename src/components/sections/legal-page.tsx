import type { ReactNode } from "react";
import { PageIntro } from "./page-intro";

/** Long-form legal page with consistent typography for headings, lists and links. */
export function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="section-y">
      <div className="container-site max-w-3xl">
        <PageIntro eyebrow="Legal" title={title}>
          {intro}
        </PageIntro>
        <p className="mt-4 text-sm text-muted">Last updated: {updated}</p>
        <div className="mt-12 border-t border-line pt-4 text-[1rem] leading-[1.75] [&_a]:font-medium [&_a]:text-navy-900 [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-12 [&_h2]:font-serif [&_h2]:text-[1.625rem] [&_h2]:leading-tight [&_h2]:text-navy-900 [&_h3]:mt-6 [&_h3]:font-medium [&_h3]:text-ink [&_li]:mt-2 [&_p]:mt-4 [&_strong]:font-medium [&_strong]:text-ink [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5">
          {children}
        </div>
      </div>
    </section>
  );
}
