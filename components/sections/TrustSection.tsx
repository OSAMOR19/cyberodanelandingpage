"use client";

import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { IconBank, IconBolt, IconHeart, IconBuilding, IconGraduation, IconCpu, IconScale, IconTruck, IconSignal } from "@/components/icons/Icons";
import { about, trust } from "@/lib/content";

const sectorIcons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  "Financial services": IconBank,
  "Critical infrastructure": IconBolt,
  "Healthcare & NHS": IconHeart,
  "Government & defence": IconBuilding,
  "Higher education": IconGraduation,
  "Technology vendors": IconCpu,
  "Legal & professional services": IconScale,
  "Logistics & supply chain": IconTruck,
  "Telco & media": IconSignal,
};

export function TrustSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <Container className="relative">
        <Reveal>
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl lg:text-4xl">
            {trust.sectorsTitle}
          </h2>
        </Reveal>

        <RevealStagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trust.sectors.map((s) => {
            const Icon = sectorIcons[s] || IconCpu;
            return (
              <div
                key={s}
                data-reveal-item
                className="card group flex items-center gap-4 px-5 py-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-tertiary text-accent transition group-hover:bg-accent-muted">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-ink-secondary transition group-hover:text-ink">
                  {s}
                </span>
              </div>
            );
          })}
        </RevealStagger>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          {/* Venues marquee */}
          <Reveal>
            <h3 className="font-mono text-[0.72rem] font-bold uppercase tracking-[0.18em] text-accent">
              Publication & funding venues
            </h3>
            <div className="mt-5 overflow-hidden rounded-2xl border border-line bg-surface-card p-5">
              <div className="flex flex-wrap gap-3">
                {trust.venues.map((v) => (
                  <span
                    key={v}
                    className="inline-flex items-center rounded-xl border border-line bg-surface px-4 py-2 text-sm font-medium text-ink-secondary transition hover:border-accent/20 hover:text-ink"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Quote card */}
          <Reveal delay={0.06}>
            <figure className="relative overflow-hidden rounded-2xl border border-line bg-surface-card p-7 backdrop-blur-md">
              <div className="absolute top-0 right-0 h-24 w-24 bg-accent/[0.04] blur-[50px]" aria-hidden />
              <div className="absolute -left-2 top-4 h-16 w-1 rounded-full bg-gradient-to-b from-accent to-transparent" aria-hidden />
              <blockquote className="relative font-display text-lg italic text-ink sm:text-xl">
                &ldquo;{about.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
                <span className="font-mono text-xs text-accent">
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
              className="card group relative overflow-hidden bg-accent-faint border-accent/10 p-6 text-center"
            >
              <div className="font-display text-4xl font-bold gradient-text">{s.value}</div>
              <div className="mt-2 text-xs font-medium uppercase tracking-wider text-ink-muted">{s.label}</div>
            </div>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
