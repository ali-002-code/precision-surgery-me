import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";
import { contact, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How PrecisionSurgeryME and Mr Mohammad Eddama collect, use and protect your personal information.",
  alternates: { canonical: "/privacy-policy" },
};

/*
 * Items in [square brackets] must be confirmed before launch. This notice
 * should be reviewed by Mr Eddama (and ideally a data protection adviser) so
 * that it matches how the practice actually handles information.
 */

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="October 2026"
      intro={
        <p>
          This notice explains how {site.surgeon.name} ({site.name}) collects, uses and protects
          your personal information when you visit this website, contact the practice or attend a
          consultation.
        </p>
      }
    >
      <h2>Who we are</h2>
      <p>
        The data controller for the private practice is {site.surgeon.name}, Consultant Colorectal
        Surgeon, trading as {site.name} [legal entity to be confirmed, e.g. sole trader or limited
        company]. Information Commissioner&apos;s Office (ICO) registration number: [to be
        confirmed].
      </p>
      <p>
        For any question about this notice or your information, contact us by email at{" "}
        <a href={contact.email.href}>{contact.email.display}</a>, by phone on{" "}
        <a href={contact.phone.href}>{contact.phone.display}</a>, or by post at [correspondence
        address to be confirmed].
      </p>

      <h2>Information we collect</h2>
      <h3>When you visit this website</h3>
      <p>
        This website does not use analytics, advertising or tracking cookies. Our hosting provider
        may record standard technical information, such as your IP address and browser type, in
        server logs for security and to keep the site running.
      </p>
      <h3>When you contact us</h3>
      <p>
        If you phone or email us, we collect the details you give us: usually
        your name, email address, phone number and the content of your message.{" "}
        <strong>
          Please do not include detailed medical information in a general enquiry
        </strong>
        ; this can be discussed securely at your consultation.
      </p>
      <h3>When you become a patient</h3>
      <p>
        To provide your care we collect information such as your contact details, date of birth,
        GP details, medical history, symptoms, examination findings, test results, treatment
        records and correspondence, and insurance or payment details where relevant. Information
        about your health is &ldquo;special category&rdquo; data and is given extra protection by
        law.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>To respond to your enquiry and arrange appointments.</li>
        <li>To assess, diagnose and treat you, and to keep accurate medical records.</li>
        <li>
          To communicate with your GP, referring clinician and other professionals involved in your
          care.
        </li>
        <li>To process payment, including with your insurer if you are insured.</li>
        <li>To meet our legal, regulatory and professional obligations.</li>
      </ul>
      <p>
        We do not sell your information, and we do not use it for marketing without your
        separate consent.
      </p>

      <h2>Our lawful basis</h2>
      <p>Under the UK General Data Protection Regulation (UK GDPR) we rely on:</p>
      <ul>
        <li>
          <strong>Contract</strong>: to take steps at your request before an appointment and to
          provide the care you have agreed to (Article 6(1)(b)).
        </li>
        <li>
          <strong>Legal obligation</strong>: for example, keeping records required by law
          (Article 6(1)(c)).
        </li>
        <li>
          <strong>Legitimate interests</strong>: to answer general enquiries and run the practice
          securely and efficiently (Article 6(1)(f)).
        </li>
        <li>
          For health information, <strong>the provision of health care</strong> by or under the
          responsibility of a health professional bound by confidentiality (Article 9(2)(h)).
        </li>
      </ul>

      <h2>Who we share it with</h2>
      <p>We only share information where needed for your care or to run the practice:</p>
      <ul>
        <li>Your GP and other clinicians involved in your care, normally with your agreement.</li>
        <li>
          The private hospital or clinic where you are seen. The hospital is responsible for the
          records it holds and has its own privacy notice.
        </li>
        <li>Your medical insurer, if you are using insurance.</li>
        <li>
          Service providers acting on our behalf, such as email, website hosting and secretarial
          or billing services, under appropriate data protection terms.
        </li>
        <li>Regulators, courts or others where the law requires it.</li>
      </ul>
      <p>
        Some of our service providers may store data outside the UK. Where this happens we make
        sure appropriate safeguards are in place, as required by UK data protection law.
      </p>

      <h2>How long we keep it</h2>
      <ul>
        <li>
          Enquiries that do not lead to an appointment: [period to be confirmed, e.g. up to 12
          months], then deleted.
        </li>
        <li>
          Medical records: in line with the Records Management Code of Practice for Health and
          Social Care, typically at least 8 years after your last treatment for adults, and longer
          for children.
        </li>
        <li>Financial records: as required by tax law, normally 6 years.</li>
      </ul>

      <h2>Keeping your information secure</h2>
      <p>
        We use appropriate technical and organisational measures to protect your information,
        including access controls and secure systems. Email is not completely secure, so please
        think carefully before sending sensitive information by email.
      </p>

      <h2>Your rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>access the personal information we hold about you;</li>
        <li>ask us to correct information that is inaccurate or incomplete;</li>
        <li>ask us to delete information, where we are not required to keep it;</li>
        <li>object to or ask us to restrict certain processing;</li>
        <li>ask for your information to be transferred to another provider, where applicable.</li>
      </ul>
      <p>
        To use any of these rights, contact us using the details above. We will respond within
        one month.
      </p>

      <h2>Complaints</h2>
      <p>
        If you are unhappy with how we have handled your information, please contact us first so
        we can try to put it right. You also have the right to complain to the Information
        Commissioner&apos;s Office at{" "}
        <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">
          ico.org.uk
        </a>{" "}
        or on 0303 123 1113.
      </p>

      <h2>Changes to this notice</h2>
      <p>
        We may update this notice from time to time. The latest version will always be on this
        page.
      </p>
    </LegalPage>
  );
}
