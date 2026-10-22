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
        <div
          className={`relative overflow-hidden bg-[linear-gradient(160deg,#eef2f7_0%,#dfe7f1_50%,#cfdbe9_100%)] ${className}`}
        >
          {/* Soft studio-light glow behind the head */}
          <div
            aria-hidden
            className="absolute right-[18%] top-[6%] aspect-square w-[60%] rounded-full bg-white/60 blur-3xl"
          />
          {/* Feathered left edge so the backdrop melts into the text panel */}
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 hidden w-40 bg-gradient-to-r from-[#eef2f7] to-transparent lg:block"
          />
          {/* Anchored bottom-right so the shoulders run off the panel's edges */}
          <div className="absolute bottom-0 right-0 aspect-[1152/1000] h-[94%] max-w-full">
            <Image
              src={portrait.heroSrc}
              alt={portrait.alt}
              fill
              sizes={sizes}
              priority={priority}
              className="object-contain object-bottom"
            />
          </div>
        </div>
      );
    }

    return (
      <div
        className={`relative overflow-hidden bg-[linear-gradient(165deg,#f1f4f9_0%,#dfe7f1_55%,#cdd9e8_100%)] ${className}`}
      >
        <div
          aria-hidden
          className="absolute left-1/2 top-[8%] aspect-square w-[75%] -translate-x-1/2 rounded-full bg-white/60 blur-3xl"
        />
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
