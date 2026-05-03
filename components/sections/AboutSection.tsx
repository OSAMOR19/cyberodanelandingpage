"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { about } from "@/lib/content";

const pillarIcons = ["🔬", "🤝", "💰", "📖"];

export function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-glow-radial opacity-50" aria-hidden />
      <div className="gradient-divider absolute top-0 left-0 right-0" />

      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <SectionHeader label={about.label} title={about.title} />
            </Reveal>

            <Reveal className="mt-10" delay={0.05}>
              <figure className="relative overflow-hidden rounded-2xl border border-teal/15 bg-gradient-to-br from-teal/[0.08] via-navy-mid to-navy p-7 sm:p-9">
                <div className="absolute top-0 right-0 h-32 w-32 bg-teal/[0.05] blur-[60px]" aria-hidden />
                <div className="absolute -left-2 top-4 h-20 w-1 rounded-full bg-gradient-to-b from-teal to-transparent" aria-hidden />
                <blockquote className="relative font-display text-xl italic leading-snug text-mist sm:text-2xl">
                  &ldquo;{about.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-teal/30 to-transparent" />
                  <span className="font-mono text-xs uppercase tracking-wider text-teal">
                    {about.quoteCite}
                  </span>
                </figcaption>
              </figure>
            </Reveal>

            <RevealStagger className="mt-8 flex flex-col gap-4">
              {about.pillars.map((p, i) => (
                <div
                  key={p.n}
                  data-reveal-item
                  className="cyber-card group flex gap-5 p-5 sm:p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/[0.08] text-lg transition-all duration-300 group-hover:bg-teal/[0.15] group-hover:shadow-glow-sm">
                    {pillarIcons[i]}
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[0.65rem] font-bold text-teal/60">{p.n}</span>
                      <h3 className="text-sm font-semibold text-mist">{p.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-mist-dim">{p.body}</p>
                  </div>
                </div>
              ))}
            </RevealStagger>
          </div>

          <div className="lg:pt-4">
            <Reveal>
              <SectionHeader
                label={about.missionLabel}
                title={about.missionTitle}
                titleAs="h3"
              />
            </Reveal>

            {/* Research lab image */}
            <Reveal className="mt-8" delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.06]">
                <Image
                  src="/images/research-lab.png"
                  alt="Cybersecurity research lab with threat intelligence dashboards"
                  width={640}
                  height={400}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-navy/80 border border-teal/20 px-3 py-1.5 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
                    <span className="font-mono text-[0.65rem] uppercase tracking-wider text-teal">Active research environment</span>
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal className="mt-6 space-y-4 text-mist-dim" delay={0.05}>
              {about.missionParas.map((p, i) => (
                <p key={i} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </Reveal>

            <RevealStagger className="mt-8 flex flex-col gap-3">
              {about.affiliations.map((a) => (
                <div
                  key={a.tag}
                  data-reveal-item
                  className="group flex flex-col gap-2 overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 backdrop-blur-sm transition-all duration-300 hover:border-teal/20 hover:bg-white/[0.04] sm:flex-row sm:items-center sm:gap-4"
                >
                  <span className="inline-flex shrink-0 items-center rounded-lg bg-teal/10 px-3 py-1 font-mono text-[0.7rem] font-bold uppercase tracking-wider text-teal">
                    {a.tag}
                  </span>
                  <span className="text-sm text-mist-dim">{a.text}</span>
                </div>
              ))}
            </RevealStagger>
          </div>
        </div>
      </Container>
    </section>
  );
}
