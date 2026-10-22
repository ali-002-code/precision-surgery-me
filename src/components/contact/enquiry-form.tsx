"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { AlertCircle, ArrowRight, Info } from "lucide-react";

type Field = "name" | "email" | "phone" | "message";
type Errors = Partial<Record<Field, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+()\d\s-]{7,20}$/;
const MESSAGE_MAX = 1000;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const phone = String(data.get("phone") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  if (!name) errors.name = "Please enter your name.";
  if (!email) errors.email = "Please enter your email address.";
  else if (!EMAIL_PATTERN.test(email))
    errors.email = "Please enter a valid email address, for example name@example.com.";
  if (phone && !PHONE_PATTERN.test(phone))
    errors.phone = "Please enter a valid phone number, or leave this field blank.";
  if (!message) errors.message = "Please enter a short message.";
  else if (message.length > MESSAGE_MAX)
    errors.message = `Please keep your message under ${MESSAGE_MAX} characters.`;

  return errors;
}

const inputClasses =
  "mt-2 block w-full rounded-md border bg-white px-4 py-3 text-[0.9375rem] text-ink placeholder:text-muted/70 transition-colors focus:border-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-900/10";

/**
 * Consultation enquiry form.
 *
 * Not connected to a backend: submissions are validated in the browser and
 * then discarded. Nothing is sent, stored or logged. Connect a secure,
 * GDPR-compliant handler before enabling enquiries.
 */
export function EnquiryForm() {
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const fieldId = (field: Field) => `${id}-${field}`;
  const errorId = (field: Field) => `${id}-${field}-error`;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(new FormData(event.currentTarget));
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    // Intentionally not sent anywhere until a secure backend is configured.
    formRef.current?.reset();
    setSubmitted(true);
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  function clearError(field: Field) {
    if (!errors[field]) return;
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  const errorEntries = Object.entries(errors) as [Field, string][];

  const describedBy = (field: Field, hint?: string) =>
    [hint, errors[field] ? errorId(field) : undefined].filter(Boolean).join(" ") || undefined;

  const borderFor = (field: Field) =>
    errors[field] ? "border-danger" : "border-line-strong";

  return (
    <form ref={formRef} noValidate onSubmit={handleSubmit} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="font-serif text-[1.75rem] text-navy-900">
        Consultation enquiry
      </h2>

      <div className="mt-4 flex gap-3 rounded-md border border-line bg-surface-soft p-4 text-sm leading-relaxed">
        <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-navy-800" strokeWidth={1.75} />
        <p>
          Please do not include confidential medical details in this general enquiry form. Share
          only what is needed for us to contact you; clinical information can be discussed
          securely at your consultation.
        </p>
      </div>

      {errorEntries.length > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="mt-6 scroll-mt-32 rounded-md border border-danger/30 bg-danger/[0.04] p-4 text-sm"
        >
          <p className="flex items-center gap-2 font-medium text-danger">
            <AlertCircle aria-hidden className="size-4" strokeWidth={2} />
            Please correct the following:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-danger">
            {errorEntries.map(([field, message]) => (
              <li key={field}>
                <a href={`#${fieldId(field)}`} className="underline underline-offset-2">
                  {message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {submitted && (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="status"
          className="mt-6 scroll-mt-32 rounded-md border border-navy-900/20 bg-surface-tint p-4 text-sm leading-relaxed text-navy-900"
        >
          <p className="font-medium">Thank you — your details passed validation.</p>
          <p className="mt-1">
            This is a development preview and the enquiry form is not yet connected, so{" "}
            <strong>nothing has been sent</strong>. Please use the contact details provided once
            they are available.
          </p>
        </div>
      )}

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor={fieldId("name")} className="text-sm font-medium text-ink">
            Full name <span className="text-muted">(required)</span>
          </label>
          <input
            id={fieldId("name")}
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={describedBy("name")}
            onChange={() => clearError("name")}
            className={`${inputClasses} ${borderFor("name")}`}
          />
          {errors.name && (
            <p id={errorId("name")} className="mt-2 text-sm text-danger">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={fieldId("email")} className="text-sm font-medium text-ink">
            Email <span className="text-muted">(required)</span>
          </label>
          <input
            id={fieldId("email")}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={describedBy("email")}
            onChange={() => clearError("email")}
            className={`${inputClasses} ${borderFor("email")}`}
          />
          {errors.email && (
            <p id={errorId("email")} className="mt-2 text-sm text-danger">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={fieldId("phone")} className="text-sm font-medium text-ink">
            Phone <span className="text-muted">(optional)</span>
          </label>
          <input
            id={fieldId("phone")}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={describedBy("phone")}
            onChange={() => clearError("phone")}
            className={`${inputClasses} ${borderFor("phone")}`}
          />
          {errors.phone && (
            <p id={errorId("phone")} className="mt-2 text-sm text-danger">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={fieldId("message")} className="text-sm font-medium text-ink">
            Your enquiry <span className="text-muted">(required)</span>
          </label>
          <p id={`${id}-message-hint`} className="mt-1 text-sm text-muted">
            For example, the type of appointment you are looking for and when you are available.
          </p>
          <textarea
            id={fieldId("message")}
            name="message"
            rows={6}
            required
            maxLength={MESSAGE_MAX + 200}
            aria-invalid={!!errors.message}
            aria-describedby={describedBy("message", `${id}-message-hint`)}
            onChange={() => clearError("message")}
            className={`${inputClasses} ${borderFor("message")} resize-y`}
          />
          {errors.message && (
            <p id={errorId("message")} className="mt-2 text-sm text-danger">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="group mt-8 inline-flex h-14 items-center justify-center gap-2.5 rounded-md bg-navy-900 px-7 text-[0.9375rem] font-medium text-white shadow-button transition-colors hover:bg-navy-800"
      >
        Send Enquiry
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform group-hover:translate-x-0.5"
          strokeWidth={1.75}
        />
      </button>
      <p className="mt-4 text-xs leading-relaxed text-muted">
        Development preview: this form is not connected and does not send or store any
        information.
      </p>
    </form>
  );
}
