"use client";

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconResearch, IconHandshake, IconFunding, IconOpenScience } from "@/components/icons/Icons";
import { about } from "@/lib/content";

const pillarIcons = [IconResearch, IconHandshake, IconFunding, IconOpenScience];

export function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32 overflow-hidden">
      {/* Divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <SectionHeader label={about.label} title={about.title} />
            </Reveal>

            <Reveal className="mt-10" delay={0.05}>
              <figure className="relative overflow-hidden rounded-2xl border border-line-accent bg-accent-faint p-7 sm:p-9">
                <div className="absolute top-0 right-0 h-32 w-32 bg-accent/[0.05] blur-[60px]" aria-hidden />
                <div className="absolute -left-2 top-4 h-20 w-1 rounded-full bg-gradient-to-b from-accent to-transparent" aria-hidden />
                <blockquote className="relative font-display text-xl italic leading-snug text-ink sm:text-2xl">
                  &ldquo;{about.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">
                    {about.quoteCite}
                  </span>
                </figcaption>
              </figure>
            </Reveal>

            <RevealStagger className="mt-8 flex flex-col gap-4">
              {about.pillars.map((p, i) => {
                const Icon = pillarIcons[i];
                return (
                  <div
                    key={p.n}
                    data-reveal-item
                    className="card group flex gap-5 p-5 sm:p-6"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-faint text-accent transition-all duration-300 group-hover:bg-accent-muted group-hover:shadow-glow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[0.65rem] font-bold text-accent/60">{p.n}</span>
                        <h3 className="text-sm font-semibold text-ink">{p.title}</h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{p.body}</p>
                    </div>
                  </div>
                );
              })}
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

            {/* Consulting image with humans */}
            <Reveal className="mt-8" delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-line">
                <Image
                  src="/images/consulting-session.png"
                  alt="Cyberodane cybersecurity consulting session in a modern boardroom"
                  width={640}
                  height={400}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-surface/80 border border-accent/20 px-3 py-1.5 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="font-mono text-[0.65rem] uppercase tracking-wider text-accent">Active research environment</span>
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal className="mt-6 space-y-4 text-ink-secondary" delay={0.05}>
              {about.missionParas.map((p, i) => (
                <p key={i} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </Reveal>

            {/* Analyst workspace image */}
            <Reveal className="mt-6" delay={0.12}>
              <div className="relative overflow-hidden rounded-2xl border border-line">
                <Image
                  src="/images/analyst-workspace.png"
                  alt="Cybersecurity analyst workstation showing SIEM and vulnerability scanning dashboards"
                  width={640}
                  height={360}
                  className="w-full h-[200px] sm:h-[240px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-surface/80 border border-accent/20 px-3 py-1 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="font-mono text-[0.6rem] uppercase tracking-wider text-accent">SOC operations</span>
                  </span>
                </div>
              </div>
            </Reveal>

            <RevealStagger className="mt-8 flex flex-col gap-3">
              {about.affiliations.map((a) => (
                <div
                  key={a.tag}
                  data-reveal-item
                  className="card group flex flex-col gap-2 overflow-hidden p-4 sm:flex-row sm:items-center sm:gap-4"
                >
                  <span className="inline-flex shrink-0 items-center rounded-lg bg-accent-muted px-3 py-1 font-mono text-[0.7rem] font-bold uppercase tracking-wider text-accent">
                    {a.tag}
                  </span>
                  <span className="text-sm text-ink-secondary">{a.text}</span>
                </div>
              ))}
            </RevealStagger>
          </div>
        </div>
      </Container>
    </section>
  );
}
