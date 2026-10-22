import { ButtonLink } from "@/components/ui/button-link";

export function ConsultationCta({
  title = "Arrange a consultation",
  description = "To make an appointment or ask a general question, please get in touch. Booking arrangements are being finalised and will be confirmed here.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section aria-labelledby="cta-heading" className="section-y">
      <div className="container-site">
        <div className="flex flex-col items-start justify-between gap-8 rounded-lg bg-navy-900 px-8 py-12 text-white sm:px-12 md:flex-row md:items-center lg:px-16 lg:py-14">
          <div className="max-w-xl">
            <h2 id="cta-heading" className="font-serif text-3xl leading-tight sm:text-[2.25rem]">
              {title}
            </h2>
            <p className="mt-4 leading-relaxed text-white/75">{description}</p>
          </div>
          <ButtonLink
            href="/contact"
            className="!bg-white !text-navy-900 !shadow-none hover:!bg-surface-tint"
          >
            Book a Consultation
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
