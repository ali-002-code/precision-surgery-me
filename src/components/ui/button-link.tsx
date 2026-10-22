import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-md font-medium tracking-[-0.005em] transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary: "bg-navy-900 text-white shadow-button hover:bg-navy-800",
  secondary:
    "border border-line-strong bg-white text-navy-900 hover:border-navy-900/40 hover:bg-surface-soft",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.875rem]",
  lg: "h-14 px-7 text-[0.9375rem]",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "lg") {
  return `${base} ${variants[variant]} ${sizes[size]}`;
}

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
};

export function ButtonLink({
  variant = "primary",
  size = "lg",
  arrow = true,
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={`${buttonClasses(variant, size)} ${className}`} {...props}>
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
          strokeWidth={1.75}
        />
      )}
    </Link>
  );
}
