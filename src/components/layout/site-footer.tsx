import Link from "next/link";
import { contactPlaceholders, legalLinks, navigation, site } from "@/content/site";
import { treatments } from "@/content/treatments";
import { CopyrightYear } from "./copyright-year";
import { Logo } from "./logo";


export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface-soft">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-5 font-serif text-xl text-navy-900">{site.surgeon.name}</p>
          <p className="eyebrow mt-2 !text-[0.6875rem]">{site.surgeon.title}</p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
            Private consultations for a range of colorectal conditions. This website provides
            general information and is not a substitute for individual medical advice.
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-2">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-900">
            Explore
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-body hover:text-navy-900">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-900">
            Treatments
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {treatments.map((treatment) => (
              <li key={treatment.slug}>
                <Link
                  href={`/treatments/${treatment.slug}`}
                  className="text-body hover:text-navy-900"
                >
                  {treatment.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-900">
            Contact
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-muted">
            <li>{contactPlaceholders.phone}</li>
            <li>{contactPlaceholders.email}</li>
            <li>
              <Link href="/contact" className="text-body hover:text-navy-900">
                Enquiry form
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-site flex flex-col gap-4 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © <CopyrightYear /> {site.name}. {contactPlaceholders.registration}
          </p>
          <ul className="flex gap-6">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-navy-900">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
