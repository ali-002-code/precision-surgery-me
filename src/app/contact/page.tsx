import type { Metadata } from "next";
import { CalendarDays, Mail, MapPin, Phone } from "lucide-react";
import { PageIntro } from "@/components/sections/page-intro";
import { EnquiryForm } from "@/components/contact/enquiry-form";
import { contactPlaceholders } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact & Consultation Enquiries",
  description:
    "Get in touch to arrange a private consultation with Mr Mohammad Eddama, Consultant Colorectal Surgeon.",
  alternates: { canonical: "/contact" },
};

const details = [
  {
    icon: Phone,
    title: "Phone",
    body: contactPlaceholders.phone,
  },
  {
    icon: Mail,
    title: "Email",
    body: contactPlaceholders.email,
  },
  {
    icon: CalendarDays,
    title: "Book a Consultation",
    body: "To book a consultation, please get in touch using the details above or complete the enquiry form.",
  },
  {
    icon: MapPin,
    title: "Consultation Locations",
    body: contactPlaceholders.locations,
  },
];

export default function ContactPage() {
  return (
    <section className="bg-surface-soft pb-20 pt-14 sm:pt-20 lg:pb-28 lg:pt-24">
      <div className="container-site">
        <PageIntro eyebrow="Contact" title="Get in Touch">
          <p>
            To make an appointment or for general enquiries, please use the details below or
            complete the enquiry form.
          </p>
        </PageIntro>

        <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:gap-6">
          <div className="rounded-lg border border-line bg-white p-8 shadow-card sm:p-10 lg:col-span-5">
            <h2 className="sr-only">Contact details</h2>
            <ul className="space-y-8">
              {details.map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex gap-5">
                  <Icon aria-hidden className="mt-0.5 size-6 shrink-0 text-navy-800" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-medium text-ink">{title}</h3>
                    <p className="mt-1 text-[0.9375rem] leading-relaxed text-muted">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-10 border-t border-line pt-6 text-sm leading-relaxed text-muted">
              If you need urgent medical help, please contact NHS 111 or, in an emergency, call
              999. This enquiry service is not monitored for urgent clinical matters.
            </p>
          </div>

          <div className="rounded-lg border border-line bg-white p-8 shadow-card sm:p-10 lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
