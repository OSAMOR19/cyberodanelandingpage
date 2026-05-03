"use client";

import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface-secondary py-16">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 bg-accent/[0.03] blur-[100px] rounded-full" aria-hidden />

      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="#hero" className="inline-block font-display text-2xl font-bold text-ink">
              CYBER <span className="gradient-text">ODANE</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-secondary">{footer.blurb}</p>

            {/* Affiliations */}
            <div className="mt-6 flex flex-wrap gap-2">
              {footer.affiliations.map((a) => (
                <span
                  key={a}
                  className="rounded-lg border border-line bg-surface-card px-3 py-1 text-xs font-medium text-ink-muted transition hover:border-accent/15 hover:text-ink-secondary"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footer.cols.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-accent">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="group inline-flex items-center gap-2 text-sm text-ink-muted transition hover:text-ink"
                    >
                      <span className="h-1 w-1 rounded-full bg-ink-faint transition group-hover:bg-accent" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16">
          <div className="section-divider mb-8" />
          <div className="flex flex-col gap-3 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-xs">{footer.copyright}</p>
            <p className="text-xs opacity-60">{footer.legal}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
