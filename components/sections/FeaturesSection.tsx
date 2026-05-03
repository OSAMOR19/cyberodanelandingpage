"use client";

import Image from "next/image";

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
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <Reveal>
            <SectionHeader
              label="What we do"
              title="End-to-end research & consultancy services"
              description="From identifying grant opportunities to publishing in elite journals, Cyberodane manages the full lifecycle of applied cybersecurity research — in partnership with your organisation."
            />

            {/* Featured image below the header */}
            <div className="mt-10 relative overflow-hidden rounded-2xl border border-line">
              <Image
                src="/images/services-advisory.png"
                alt="Cyberodane professionals reviewing cybersecurity strategy and risk assessments"
                width={640}
                height={400}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-surface/80 border border-accent/20 px-3 py-1.5 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="font-mono text-[0.65rem] uppercase tracking-wider text-accent">Research-led consultancy</span>
                </span>
              </div>
            </div>
          </Reveal>

          <RevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {services.slice(0, 4).map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <article
                  key={s.title}
                  data-reveal-item
                  className="card group relative p-5"
                >
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />
                  <span
                    className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-accent via-accent-bright to-accent transition-transform duration-500 group-hover:scale-x-100 rounded-b-2xl"
                    aria-hidden
                  />
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-faint text-accent ring-1 ring-line transition-all duration-300 group-hover:ring-accent/20 group-hover:shadow-glow-sm group-hover:bg-accent-muted">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-secondary line-clamp-3">{s.body}</p>
                  <span
                    className={`mt-4 inline-flex items-center rounded-lg border px-2.5 py-0.5 font-mono text-[0.6rem] font-bold uppercase tracking-wider ${tagColors[s.tag]}`}
                  >
                    {s.tag}
                  </span>
                </article>
              );
            })}
          </RevealStagger>
        </div>

        {/* Bottom row — remaining services */}
        <RevealStagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {services.slice(4).map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <article
                key={s.title}
                data-reveal-item
                className="card group relative flex gap-5 p-6"
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
                <span
                  className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-accent via-accent-bright to-accent transition-transform duration-500 group-hover:scale-x-100 rounded-b-2xl"
                  aria-hidden
                />
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent-faint text-accent ring-1 ring-line transition-all duration-300 group-hover:ring-accent/20 group-hover:shadow-glow-sm group-hover:bg-accent-muted">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{s.body}</p>
                  <span
                    className={`mt-4 inline-flex items-center rounded-lg border px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-wider ${tagColors[s.tag]}`}
                  >
                    {s.tag}
                  </span>
                </div>
              </article>
            );
          })}
        </RevealStagger>
      </Container>
    </section>
  );
}
