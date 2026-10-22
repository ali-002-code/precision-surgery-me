import Image from "next/image";
import { UserRound } from "lucide-react";
import { site } from "@/content/site";

type PortraitProps = {
  /** Tailwind classes for the wrapping element (size, radius, etc). */
  className?: string;
  /** Passed to next/image `sizes`. */
  sizes: string;
  /** CSS object-position for cropping the real photograph. */
  position?: string;
  priority?: boolean;
  /** Visual treatment for the placeholder. */
  tone?: "hero" | "card";
};

/**
 * Renders Mr Eddama's professional portrait, or a clearly labelled
 * placeholder until the original photograph is supplied in `site.portrait`.
 */
export function Portrait({
  className = "",
  sizes,
  position = "50% 20%",
  priority = false,
  tone = "card",
}: PortraitProps) {
  const { portrait } = site;

  if (portrait.src) {
    if (tone === "hero") {
      return (
        <div className={`relative overflow-hidden bg-[#f1f6fa] ${className}`}>
          {/* Left edge feathered so the studio backdrop melts into the text panel */}
          <Image
            src={portrait.src}
            alt={portrait.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover lg:[mask-image:linear-gradient(to_right,transparent_0%,black_22%)]"
            style={{ objectPosition: position }}
          />
        </div>
      );
    }

    return (
      <div className={`relative overflow-hidden bg-[#f1f6fa] ${className}`}>
        <Image
          src={portrait.src}
          alt={portrait.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          style={{ objectPosition: position }}
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label="Portrait placeholder: the original photograph of Mr Mohammad Eddama is to be supplied"
      className={`relative flex items-start justify-center overflow-hidden pt-[12%] ${
        tone === "hero"
          ? "bg-[linear-gradient(160deg,#dfe7f1_0%,#cfdbe9_45%,#bfcfe2_100%)]"
          : "bg-[linear-gradient(160deg,#e6ecf4_0%,#d5dfeb_100%)]"
      } ${className}`}
    >
      {/* Soft clinical-light glow, echoing the reference photograph's backdrop */}
      <div
        aria-hidden
        className="absolute -right-16 top-10 size-72 rounded-full bg-white/50 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 flex h-[52%] w-[72%] -translate-x-1/2 flex-col items-center"
      >
        <div className="aspect-square h-[42%] shrink-0 rounded-full bg-navy-900/[0.07]" />
        <div className="-mt-[4%] w-full flex-1 rounded-t-[45%] bg-navy-900/[0.07]" />
      </div>
      <div className="relative z-10 mx-6 flex max-w-xs flex-col items-center rounded-lg border border-white/70 bg-white/75 px-6 py-5 text-center shadow-card backdrop-blur-sm">
        <UserRound aria-hidden className="mb-2 size-6 text-navy-700" strokeWidth={1.5} />
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-navy-900">
          Portrait placeholder
        </p>
        <p className="mt-1.5 text-xs leading-relaxed text-muted">
          Original photograph of Mr Eddama to be supplied
        </p>
      </div>
    </div>
  );
}
