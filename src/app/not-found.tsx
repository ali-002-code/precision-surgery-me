import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <section className="section-y">
      <div className="container-site max-w-2xl text-center">
        <p className="eyebrow">Page not found</p>
        <h1 className="mt-5 font-serif text-[2.5rem] leading-tight text-navy-900 sm:text-[3.25rem]">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-5 text-[1.0625rem] leading-relaxed">
          The page may have moved. Try the treatments overview or return to the homepage.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink href="/">Return home</ButtonLink>
          <ButtonLink href="/treatments" variant="secondary">
            View Treatments
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
