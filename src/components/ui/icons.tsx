import type { SVGProps } from "react";
import { MessagesSquare } from "lucide-react";
import type { TreatmentIcon as TreatmentIconName } from "@/content/treatments";

/*
 * Simple anatomical line icons drawn to match Lucide's stroke style, for
 * subjects Lucide does not cover.
 */

type IconProps = SVGProps<SVGSVGElement>;

function LineIcon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

export function ColonIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M14 36c0 5-6 5-6 0V15c0-5 3-8 8-8h16c5 0 8 3 8 8v19c0 4-3 6-7 6h-3v4" />
      <path d="M14 36V16.5c0-1.7 1-3 2.5-3h15c1.5 0 2.5 1.3 2.5 3V32c0 1.4-1 2-2.5 2H26c-1.4 0-2 1-2 2.5V44" />
      <path d="M8 21h2.5M8 28.5h2.5M21 7v2.5M28 7v2.5M40 21h-2.5M40 28h-2.5" />
    </LineIcon>
  );
}

export function FissureIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M18 5c0 8-4 12-8 18-4 7-3 17 4 19 4 1 8-2 8-8V9" />
      <path d="M30 5c0 8 4 12 8 18 4 7 3 17-4 19-4 1-8-2-8-8V9" />
      <path d="M24 30v5" />
    </LineIcon>
  );
}

export function SkinTagIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M19 5v9c0 6-10 10-10 19 0 6 5 9 10 9 2 0 3.5-1 5-2.5 1.5 1.5 3 2.5 5 2.5 5 0 10-3 10-9 0-9-10-13-10-19V5" />
      <ellipse cx="24" cy="31" rx="2.25" ry="3" />
    </LineIcon>
  );
}

export function TreatmentIcon({ name, ...props }: IconProps & { name: TreatmentIconName }) {
  switch (name) {
    case "colon":
      return <ColonIcon {...props} />;
    case "fissure":
      return <FissureIcon {...props} />;
    case "skinTag":
      return <SkinTagIcon {...props} />;
    case "consultation":
      return <MessagesSquare aria-hidden strokeWidth={0.8} {...props} />;
  }
}
