import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Treatment } from "@/content/treatments";
import { TreatmentIcon } from "@/components/ui/icons";

export function TreatmentCard({
  treatment,
  headingLevel: Heading = "h2",
}: {
  treatment: Treatment;
  headingLevel?: "h2" | "h3";
}) {
  return (
    <Link
      href={`/treatments/${treatment.slug}`}
      className="group flex h-full flex-col rounded-lg border border-line bg-white p-7 shadow-card transition-[border-color,box-shadow] duration-200 hover:border-line-strong hover:shadow-[0_1px_2px_rgba(11,37,69,0.05),0_16px_32px_-16px_rgba(11,37,69,0.18)] sm:p-9"
    >
      <TreatmentIcon name={treatment.icon} className="size-14 text-navy-800" />
      <div className="mt-7 flex items-start justify-between gap-6">
        <Heading className="font-serif text-[1.5rem] leading-tight text-navy-900 sm:text-[1.625rem]">
          {treatment.title}
        </Heading>
        <ArrowRight
          aria-hidden
          className="mt-2 size-5 shrink-0 text-navy-900 transition-transform duration-200 group-hover:translate-x-1"
          strokeWidth={1.5}
        />
      </div>
      <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-muted">
        {treatment.summary}
      </p>
    </Link>
  );
}
