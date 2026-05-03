"use client";

import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  IconPartnership,
  IconGrant,
  IconAdvisory,
  IconPublication,
  IconShield,
  IconTraining,
} from "@/components/icons/Icons";
import { services } from "@/lib/content";
import type { ServiceTag } from "@/lib/content";

const iconMap = {
  partnership: IconPartnership,
  grant: IconGrant,
  advisory: IconAdvisory,
  publication: IconPublication,
  shield: IconShield,
  training: IconTraining,
} as const;

const tagColors: Record<ServiceTag, string> = {
  "CORE OFFERING": "border-accent/30 bg-accent-muted text-accent",
  STRATEGIC: "border-gold/30 bg-gold-muted text-gold",
  ADVISORY: "border-gold/30 bg-gold-muted text-gold",
  PUBLICATION: "border-accent/30 bg-accent-muted text-accent",
  RESEARCH: "border-accent/30 bg-accent-muted text-accent",
  EDUCATION: "border-accent/30 bg-accent-muted text-accent",
};

export function FeaturesSection() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-32 overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <Container className="relative">
        <Reveal>
          <SectionHeader
            label="What we do"
            title="End-to-end research & consultancy services"
            description="From identifying grant opportunities to publishing in elite journals, Cyberodane manages the full lifecycle of applied cybersecurity research — in partnership with your organisation."
          />
        </Reveal>

        <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <article
                key={s.title}
                data-reveal-item
                className="card group relative p-6 sm:p-7"
              >
                {/* Hover gradient accent */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />

                {/* Animated bottom line */}
                <span
                  className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-accent via-accent-bright to-accent transition-transform duration-500 group-hover:scale-x-100 rounded-b-2xl"
                  aria-hidden
                />

                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent-faint text-accent ring-1 ring-line transition-all duration-300 group-hover:ring-accent/20 group-hover:shadow-glow-sm group-hover:bg-accent-muted">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-base font-semibold text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{s.body}</p>

                <span
                  className={`mt-5 inline-flex items-center rounded-lg border px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-wider ${tagColors[s.tag]}`}
                >
                  {s.tag}
                </span>
              </article>
            );
          })}
        </RevealStagger>
      </Container>
    </section>
  );
}
