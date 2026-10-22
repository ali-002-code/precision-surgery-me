import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`font-serif text-[1.375rem] leading-none tracking-[-0.01em] text-navy-900 sm:text-[1.5rem] ${className}`}
      aria-label="PrecisionSurgeryME — home"
    >
      PrecisionSurgery<span className="text-accent">ME</span>
    </Link>
  );
}
