import type { ReactNode } from "react";

/** Standard page heading block: eyebrow, serif H1 and lead paragraph. */
export function PageIntro({
  eyebrow,
  title,
  children,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-5 font-serif text-[2.5rem] leading-[1.08] tracking-[-0.015em] text-navy-900 sm:text-[3.25rem] lg:text-[3.75rem]">
        {title}
      </h1>
      {children && (
        <div className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-body">{children}</div>
      )}
    </div>
  );
}
