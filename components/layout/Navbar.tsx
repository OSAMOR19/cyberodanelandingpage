"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Container } from "@/components/ui/Container";
import { navLinks } from "@/lib/content";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background,box-shadow] duration-300 ${
        scrolled
          ? "border-white/[0.08] bg-navy/90 shadow-glow-sm backdrop-blur-xl"
          : "border-transparent bg-navy/70 backdrop-blur-md"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">
        <Link
          href="#hero"
          className="font-display text-lg font-bold tracking-tight text-mist sm:text-xl"
          onClick={() => setOpen(false)}
        >
          CYBER <span className="text-teal">ODANE</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          <ul className="flex gap-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-mist-muted transition-colors hover:text-mist"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden rounded-sm bg-teal px-4 py-2 text-sm font-medium text-navy transition hover:opacity-90 sm:inline-flex"
          >
            Partner with us
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 text-mist lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-mist transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span className={`block h-0.5 w-5 bg-mist transition ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-0.5 w-5 bg-mist transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        className={`fixed inset-x-0 top-16 bottom-0 z-40 bg-navy/98 backdrop-blur-xl transition lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <Container className="flex flex-col gap-1 py-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-sm px-3 py-3 text-base text-mist-dim hover:bg-white/[0.04] hover:text-mist"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="mt-4 rounded-sm bg-teal px-4 py-3 text-center text-sm font-medium text-navy"
            onClick={() => setOpen(false)}
          >
            Partner with us
          </Link>
        </Container>
      </div>
    </header>
  );
}
