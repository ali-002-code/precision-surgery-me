import type { LucideIcon } from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

/** The restrained four-up icon row used beneath the hero and on About. */
export function FeatureStrip({
  features,
  label,
  framed = false,
}: {
  features: Feature[];
  label: string;
  framed?: boolean;
}) {
  return (
    <section aria-label={label} className="border-b border-line bg-surface-soft">
      <ul
        className={`container-site grid grid-cols-2 gap-x-6 gap-y-10 py-12 md:py-14 lg:grid-cols-4 ${
          framed ? "lg:divide-x lg:divide-line" : ""
        }`}
      >
        {features.map(({ icon: Icon, title, description }) => (
          <li key={title} className="flex flex-col items-center px-2 text-center">
            {framed ? (
              <Icon aria-hidden className="size-8 text-navy-800" strokeWidth={1.4} />
            ) : (
              <span className="flex size-[4.25rem] items-center justify-center rounded-full bg-icon-bg text-navy-800">
                <Icon aria-hidden className="size-7" strokeWidth={1.4} />
              </span>
            )}
            <h3 className="mt-5 text-[0.9375rem] font-medium text-ink">{title}</h3>
            <p className="mt-1.5 max-w-[15rem] text-sm leading-relaxed text-muted">{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
