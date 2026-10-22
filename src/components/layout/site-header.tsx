"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Logo } from "./logo";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu on navigation.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="container-site flex h-[var(--header-height)] items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {navigation.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative py-2 text-[0.875rem] transition-colors after:absolute after:inset-x-0 after:-bottom-[0.6rem] after:h-px after:bg-navy-900 after:transition-opacity ${
                      active
                        ? "font-medium text-navy-900 after:opacity-100"
                        : "text-ink/80 after:opacity-0 hover:text-navy-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ButtonLink href="/contact" size="md">
              Book a Consultation
            </ButtonLink>
          </div>
          <button
            ref={toggleRef}
            type="button"
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-md text-navy-900 hover:bg-surface-tint lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? (
              <X aria-hidden className="size-6" strokeWidth={1.5} />
            ) : (
              <Menu aria-hidden className="size-6" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full h-[calc(100dvh-var(--header-height))] overflow-y-auto border-t border-line bg-white lg:hidden"
      >
        <nav aria-label="Mobile" className="container-site py-6">
          <ul className="divide-y divide-line">
            {navigation.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between py-4 font-serif text-2xl ${
                      active ? "text-navy-900" : "text-ink/80"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                    {active && <span aria-hidden className="size-1.5 rounded-full bg-accent" />}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ButtonLink href="/contact" className="mt-8 w-full">
            Book a Consultation
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
