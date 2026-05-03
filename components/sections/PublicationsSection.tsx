"use client";

import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconArrowRight } from "@/components/icons/Icons";
import { publications } from "@/lib/content";

function badgeClass(style: "springer" | "ieee" | "neutral") {
  if (style === "springer") return "border-accent/25 bg-accent-muted text-accent";
  if (style === "ieee") return "border-accent/25 bg-accent-muted text-accent";
  return "border-line bg-surface-card text-ink-muted";
}

function yearColor(year: string) {
  if (year === "2025") return "text-accent";
  if (year === "2024") return "text-gold";
  return "text-ink-muted";
}

export function PublicationsSection() {
  return (
    <section id="publications" className="relative scroll-mt-24 py-24 sm:py-32 overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <Container>
        <Reveal>
          <SectionHeader
            label={publications.label}
            title={publications.title}
            description={publications.intro}
          />
        </Reveal>

        <RevealStagger className="mt-12 flex flex-col gap-4">
          {publications.items.map((pub) => (
            <article
              key={pub.title}
              data-reveal-item
              className="card group relative flex flex-col gap-4 overflow-hidden p-5 sm:flex-row sm:items-start sm:gap-6 sm:p-6"
            >
              {/* Year label */}
              <div className="flex shrink-0 flex-col items-center">
                <span className={`font-display text-2xl font-bold ${yearColor(pub.year)}`}>
                  {pub.year}
                </span>
                <span className="mt-1 h-px w-8 bg-gradient-to-r from-transparent via-line to-transparent" />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-sans text-base font-semibold text-ink transition group-hover:text-accent">
                  {pub.title}
                </h3>
                <p className="mt-2 text-sm text-ink-secondary">{pub.meta}</p>
              </div>

              <span
                className={`shrink-0 self-start rounded-lg border px-3 py-1.5 font-mono text-[0.65rem] font-bold uppercase tracking-wider ${badgeClass(pub.badgeStyle)}`}
              >
                {pub.badge}
              </span>

              {/* Hover accent */}
              <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-bright transition-transform duration-500 group-hover:scale-x-100 rounded-b-2xl" aria-hidden />
            </article>
          ))}
        </RevealStagger>

        <Reveal className="mt-10 flex flex-wrap gap-3">
          {publications.ctas.map((c) => (
            <Link
              key={c.label}
              href={c.href}
              className="group inline-flex items-center gap-2 rounded-lg border border-line bg-surface-card px-5 py-2.5 text-sm font-medium text-ink transition-all duration-300 hover:border-accent/30 hover:bg-accent-faint hover:shadow-glow-sm"
            >
              {c.label}
              <IconArrowRight className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
