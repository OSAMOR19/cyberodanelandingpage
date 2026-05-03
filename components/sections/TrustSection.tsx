"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { about, trust } from "@/lib/content";

const sectorIcons: Record<string, string> = {
  "Financial services": "🏦",
  "Critical infrastructure": "⚡",
  "Healthcare & NHS": "🏥",
  "Government & defence": "🏛️",
  "Higher education": "🎓",
  "Technology vendors": "💻",
  "Legal & professional services": "⚖️",
  "Logistics & supply chain": "🚚",
  "Telco & media": "📡",
};

export function TrustSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="gradient-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-cyber-gradient" />

      <Container className="relative">
        <Reveal>
          <h2 className="font-display text-2xl font-bold text-mist sm:text-3xl lg:text-4xl">
            {trust.sectorsTitle}
          </h2>
        </Reveal>

        <RevealStagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trust.sectors.map((s) => (
            <div
              key={s}
              data-reveal-item
              className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 backdrop-blur-sm transition-all duration-500 hover:border-teal/20 hover:bg-white/[0.04] hover:shadow-glow-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-lg transition group-hover:bg-teal/10">
                {sectorIcons[s] || "🔹"}
              </span>
              <span className="text-sm font-medium text-mist-dim transition group-hover:text-mist">
                {s}
              </span>
            </div>
          ))}
        </RevealStagger>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          {/* Venues marquee */}
          <Reveal>
            <h3 className="font-mono text-[0.72rem] font-bold uppercase tracking-[0.18em] text-teal">
              Publication & funding venues
            </h3>
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
              <div className="flex flex-wrap gap-3">
                {trust.venues.map((v) => (
                  <span
                    key={v}
                    className="inline-flex items-center rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm font-medium text-mist-dim transition hover:border-teal/20 hover:text-mist"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Quote card */}
          <Reveal delay={0.06}>
            <figure className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 backdrop-blur-md">
              <div className="absolute top-0 right-0 h-24 w-24 bg-teal/[0.04] blur-[50px]" aria-hidden />
              <div className="absolute -left-2 top-4 h-16 w-1 rounded-full bg-gradient-to-b from-teal to-transparent" aria-hidden />
              <blockquote className="relative font-display text-lg italic text-mist sm:text-xl">
                &ldquo;{about.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-teal/30 to-transparent" />
                <span className="font-mono text-xs text-teal">
                  Institutional research philosophy
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Stats recap */}
        <RevealStagger className="mt-16 grid gap-6 sm:grid-cols-3">
          {trust.statsRecap.map((s) => (
            <div
              key={s.label}
              data-reveal-item
              className="group relative overflow-hidden rounded-2xl border border-teal/10 bg-gradient-to-br from-teal/[0.06] to-transparent p-6 text-center backdrop-blur-sm transition-all duration-500 hover:border-teal/25 hover:shadow-glow-sm"
            >
              <div className="font-display text-4xl font-bold gradient-text">{s.value}</div>
              <div className="mt-2 text-xs font-medium uppercase tracking-wider text-mist-muted">{s.label}</div>
            </div>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
