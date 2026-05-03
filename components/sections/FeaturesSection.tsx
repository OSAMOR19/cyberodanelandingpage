"use client";

import { motion } from "framer-motion";
import {
  IconAdvisory,
  IconGrant,
  IconPartnership,
  IconPublication,
  IconShield,
  IconTraining,
} from "@/components/icons/ServiceIcons";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
  "CORE OFFERING": "border-teal/30 bg-teal/10 text-teal",
  STRATEGIC: "border-gold/30 bg-gold/10 text-gold",
  ADVISORY: "border-gold/30 bg-gold/10 text-gold",
  PUBLICATION: "border-cyber-blue/30 bg-cyber-blue/10 text-blue-300",
  RESEARCH: "border-teal/30 bg-teal/10 text-teal",
  EDUCATION: "border-cyber-purple/30 bg-cyber-purple/10 text-purple-300",
};

const iconGradients = [
  "from-teal/20 to-teal/5",
  "from-gold/20 to-gold/5",
  "from-gold/20 to-gold/5",
  "from-blue-400/20 to-blue-400/5",
  "from-teal/20 to-teal/5",
  "from-purple-400/20 to-purple-400/5",
];

export function FeaturesSection() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-cyber-gradient" />
      <div className="gradient-divider absolute top-0 left-0 right-0" />

      <Container className="relative">
        <Reveal>
          <SectionHeader
            label="What we do"
            title="End-to-end research & consultancy services"
            description="From identifying grant opportunities to publishing in elite journals, Cyberodane manages the full lifecycle of applied cybersecurity research — in partnership with your organisation."
          />
        </Reveal>

        <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <article
                key={s.title}
                data-reveal-item
                className="cyber-card group relative p-6 sm:p-7"
              >
                {/* Hover gradient accent */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-br from-teal/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />

                {/* Animated bottom line */}
                <span
                  className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-teal via-teal-bright to-teal transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden
                />

                {/* Icon */}
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${iconGradients[i]} text-teal ring-1 ring-white/[0.08] transition-all duration-300 group-hover:ring-teal/20 group-hover:shadow-glow-sm`}>
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-base font-semibold text-mist">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist-dim">{s.body}</p>

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
