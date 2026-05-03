"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { publications } from "@/lib/content";

function badgeClass(style: "springer" | "ieee" | "neutral") {
  if (style === "springer") return "border-teal/25 bg-teal/10 text-teal";
  if (style === "ieee") return "border-blue-400/25 bg-blue-500/10 text-blue-300";
  return "border-white/10 bg-white/[0.04] text-mist-muted";
}

function yearColor(year: string) {
  if (year === "2025") return "text-teal";
  if (year === "2024") return "text-gold";
  return "text-mist-muted";
}

export function PublicationsSection() {
  return (
    <section id="publications" className="relative scroll-mt-24 py-24 sm:py-32 overflow-hidden">
      <div className="gradient-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-glow-radial opacity-30" aria-hidden />

      <Container>
        <Reveal>
          <SectionHeader
            label={publications.label}
            title={publications.title}
            description={publications.intro}
          />
        </Reveal>

        <RevealStagger className="mt-12 flex flex-col gap-4">
          {publications.items.map((pub, i) => (
            <article
              key={pub.title}
              data-reveal-item
              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 backdrop-blur-sm transition-all duration-500 hover:border-teal/15 hover:bg-white/[0.04] sm:flex-row sm:items-start sm:gap-6 sm:p-6"
            >
              {/* Year label */}
              <div className="flex shrink-0 flex-col items-center">
                <span className={`font-display text-2xl font-bold ${yearColor(pub.year)}`}>
                  {pub.year}
                </span>
                <span className="mt-1 h-px w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-sans text-base font-semibold text-mist transition group-hover:text-teal">
                  {pub.title}
                </h3>
                <p className="mt-2 text-sm text-mist-dim">{pub.meta}</p>
              </div>

              <span
                className={`shrink-0 self-start rounded-lg border px-3 py-1.5 font-mono text-[0.65rem] font-bold uppercase tracking-wider ${badgeClass(pub.badgeStyle)}`}
              >
                {pub.badge}
              </span>

              {/* Hover accent */}
              <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-teal to-teal-bright transition-transform duration-500 group-hover:scale-x-100" aria-hidden />
            </article>
          ))}
        </RevealStagger>

        <Reveal className="mt-10 flex flex-wrap gap-3">
          {publications.ctas.map((c) => (
            <Link
              key={c.label}
              href={c.href}
              className="group inline-flex items-center gap-2 rounded-lg border border-teal/20 bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-mist transition-all duration-300 hover:border-teal/40 hover:bg-teal/[0.08] hover:shadow-glow-sm"
            >
              {c.label}
              <svg className="h-3.5 w-3.5 text-teal transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
