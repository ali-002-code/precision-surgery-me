import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CalendarDays, Info, Mail, MapPin, Phone } from "lucide-react";
import { PageIntro } from "@/components/sections/page-intro";
import { buttonClasses } from "@/components/ui/button-link";
import { EnquiryForm } from "@/components/contact/enquiry-form";
import { contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact & Consultation Enquiries",
  description:
    "Get in touch to arrange a private consultation with Mr Mohammad Eddama, Consultant Colorectal Surgeon.",
  alternates: { canonical: "/contact" },
};

const linkClasses =
  "font-medium text-navy-900 underline-offset-4 hover:underline break-all";

const details: { icon: typeof Phone; title: string; body: ReactNode }[] = [
  {
    icon: Phone,
    title: "Phone",
    body: (
      <a href={contact.phone.href} className={linkClasses}>
        {contact.phone.display}
      </a>
    ),
  },
  {
    icon: Mail,
    title: "Email",
    body: (
      <a href={contact.email.href} className={linkClasses}>
        {contact.email.display}
      </a>
    ),
  },
  {
    icon: CalendarDays,
    title: "Book a Consultation",
    body: "To book a consultation, please call or email using the details above.",
  },
  {
    icon: MapPin,
    title: "Consultation Locations",
    body: contact.locations,
  },
];

/** Shown in place of the web form until a secure enquiry backend is configured. */
function EmailEnquiry() {
  const mailto = `${contact.email.href}?subject=${encodeURIComponent("Consultation enquiry")}`;
  return (
    <div>
      <h2 className="font-serif text-[1.75rem] text-navy-900">Make an enquiry</h2>
      <p className="mt-4 max-w-xl leading-relaxed">
        The quickest way to arrange a consultation is to email or call. Please include your
        name, a contact number and your availability, and we will get back to you.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a href={mailto} className={buttonClasses("primary")}>
          <Mail aria-hidden className="size-4" strokeWidth={1.75} />
          Email an enquiry
        </a>
        <a href={contact.phone.href} className={buttonClasses("secondary")}>
          <Phone aria-hidden className="size-4" strokeWidth={1.75} />
          Call {contact.phone.display}
        </a>
      </div>
      <div className="mt-8 flex gap-3 rounded-md border border-line bg-surface-soft p-4 text-sm leading-relaxed">
        <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-navy-800" strokeWidth={1.75} />
        <p>
          Please do not include confidential medical details in your first email. Share only what
          is needed for us to contact you; clinical information can be discussed securely at your
          consultation.
        </p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <section className="bg-surface-soft pb-20 pt-14 sm:pt-20 lg:pb-28 lg:pt-24">
      <div className="container-site">
        <PageIntro eyebrow="Contact" title="Get in Touch">
          <p>
            To make an appointment or for general enquiries, please call or email using the
            details below.
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
            {contact.enquiryFormEnabled ? <EnquiryForm /> : <EmailEnquiry />}
          </div>
        </div>
      </div>
    </section>
  );
}
