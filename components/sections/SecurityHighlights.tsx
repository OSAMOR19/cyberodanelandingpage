"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { research } from "@/lib/content";
import { prefersReducedMotion } from "@/lib/gsap";

gsap.registerPlugin(ScrollTrigger);

const themeIcons = ["🧠", "🔒", "🔎", "📱", "🕸️", "🌐"];

export function SecurityHighlights() {
  const metricsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = metricsRef.current;
      if (!root || prefersReducedMotion()) return;
      const bars = root.querySelectorAll<HTMLElement>("[data-metric-bar]");
      gsap.fromTo(
        bars,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.4,
          ease: "power3.out",
          stagger: 0.15,
          transformOrigin: "left center",
          scrollTrigger: { trigger: root, start: "top 80%" },
        },
      );
    },
    { scope: metricsRef },
  );

  return (
    <section id="research" className="relative scroll-mt-24 py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-cyber-gradient" />
      <div className="gradient-divider absolute top-0 left-0 right-0" />

      {/* Ambient orbs */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[400px] w-[400px] bg-teal/[0.03] blur-[100px] rounded-full" aria-hidden />
      <div className="pointer-events-none absolute left-0 bottom-1/4 h-[300px] w-[300px] bg-gold/[0.03] blur-[80px] rounded-full" aria-hidden />

      <Container className="relative">
        <Reveal>
          <SectionHeader
            label={research.label}
            title={research.title}
            description={
              <>
                {research.intro.map((p, i) => (
                  <p key={i} className={i > 0 ? "mt-4" : ""}>
                    {p}
                  </p>
                ))}
              </>
            }
          />
        </Reveal>

        {/* Publication target banner */}
        <Reveal className="mt-12 overflow-hidden rounded-2xl border border-teal/15 bg-gradient-to-r from-teal/[0.08] via-navy-mid to-teal/[0.04] p-6 sm:p-7">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-xl">
              🎯
            </div>
            <div>
              <p className="font-mono text-[0.7rem] font-bold uppercase tracking-wider text-teal">
                {research.publicationTargetLabel}
              </p>
              <p className="font-display mt-2 text-lg text-mist sm:text-xl">
                {research.publicationTarget}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Research themes grid */}
        <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {research.themes.map((t, i) => (
            <article
              key={t.id}
              data-reveal-item
              className="cyber-card group flex flex-col p-6"
            >
              {/* Theme icon */}
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-base transition group-hover:bg-gold/15">
                  {themeIcons[i]}
                </span>
                <span className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.15em] text-gold">
                  {t.id}
                </span>
              </div>

              <h3 className="font-sans text-base font-semibold text-mist">{t.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-mist-dim">{t.body}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[0.63rem] font-medium text-mist-muted transition group-hover:border-teal/15 group-hover:text-mist-dim"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </RevealStagger>

        {/* Flagship product showcase */}
        <div className="mt-20 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl">
          <div className="grid gap-0 lg:grid-cols-2">
            {/* Image side */}
            <Reveal className="relative min-h-[280px] sm:min-h-[320px]">
              <Image
                src="/images/threat-network.png"
                alt="Odane Guard threat intelligence network visualization"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-navy/20 to-navy lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-navy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent lg:bg-none" />

              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-navy/80 border border-teal/20 px-4 py-2 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
                  <span className="font-mono text-[0.7rem] font-bold uppercase tracking-wider text-teal">Production-grade AI</span>
                </span>
              </div>
            </Reveal>

            {/* Content side */}
            <div className="p-7 sm:p-10">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-lg bg-teal/10 border border-teal/20 px-3 py-1.5 font-mono text-[0.7rem] font-bold uppercase tracking-[0.15em] text-teal">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {research.flagship.label}
                </span>
                <h3 className="font-display mt-4 text-2xl font-bold text-mist sm:text-3xl">
                  {research.flagship.title}
                </h3>
                {research.flagship.paras.map((p, i) => (
                  <p key={i} className="mt-4 text-sm leading-relaxed text-mist-dim sm:text-base">
                    {p}
                  </p>
                ))}
              </Reveal>

              {/* Metrics */}
              <div ref={metricsRef} className="mt-8 flex flex-col gap-3">
                {research.flagship.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-navy/80 p-4 transition hover:border-teal/15"
                  >
                    {m.label === "Detection accuracy" || m.label === "Training dataset" ? (
                      <div
                        data-metric-bar
                        className="absolute inset-y-0 left-0 w-full origin-left bg-gradient-to-r from-teal/10 to-teal/[0.03]"
                        aria-hidden
                      />
                    ) : null}
                    <div className="relative flex items-center justify-between gap-4">
                      <span className="text-sm text-mist-muted">{m.label}</span>
                      <span
                        className={`text-right ${
                          "accent" in m && m.accent
                            ? "inline-flex items-center gap-2 rounded-lg bg-teal/10 border border-teal/20 px-2.5 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-[0.1em] text-teal"
                            : "mono" in m && m.mono
                              ? "font-mono text-sm text-mist sm:text-base"
                              : "font-display text-xl font-bold gradient-text sm:text-2xl"
                        }`}
                      >
                        {m.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
