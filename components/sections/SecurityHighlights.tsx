"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { research } from "@/lib/content";
import { prefersReducedMotion } from "@/lib/gsap";

gsap.registerPlugin(ScrollTrigger);

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
          duration: 1.1,
          ease: "power2.out",
          stagger: 0.12,
          transformOrigin: "left center",
          scrollTrigger: { trigger: root, start: "top 80%" },
        },
      );
    },
    { scope: metricsRef },
  );

  return (
    <section id="research" className="scroll-mt-24 bg-navy-mid py-20 sm:py-28">
      <Container>
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

        <Reveal className="mt-10 rounded-sm border border-[var(--border-accent)] bg-teal/[0.06] p-5 sm:p-6">
          <p className="font-mono text-[0.7rem] uppercase tracking-wider text-mist-muted">
            {research.publicationTargetLabel}
          </p>
          <p className="font-display mt-2 text-lg text-mist sm:text-xl">
            {research.publicationTarget}
          </p>
        </Reveal>

        <RevealStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {research.themes.map((t) => (
            <article
              key={t.id}
              data-reveal-item
              className="group flex flex-col rounded-sm border border-white/[0.08] bg-navy/80 p-5 backdrop-blur-md transition hover:border-teal/25 hover:shadow-glow-sm sm:p-6"
            >
              <div className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-gold">
                {t.id}
              </div>
              <h3 className="mt-3 font-sans text-base font-medium text-mist">{t.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-dim">{t.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-white/10 bg-mist-ghost/50 px-2 py-0.5 font-mono text-[0.65rem] text-mist-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </RevealStagger>

        <div className="mt-16 grid gap-8 rounded-sm border border-white/[0.08] bg-mist-ghost/30 p-6 backdrop-blur-xl lg:grid-cols-2 lg:gap-12 lg:p-10">
          <Reveal>
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-teal">
              {research.flagship.label}
            </span>
            <h3 className="font-display mt-3 text-2xl font-semibold text-mist sm:text-3xl">
              {research.flagship.title}
            </h3>
            {research.flagship.paras.map((p, i) => (
              <p key={i} className="mt-4 text-sm leading-relaxed text-mist-dim sm:text-base">
                {p}
              </p>
            ))}
          </Reveal>

          <div ref={metricsRef} className="flex flex-col gap-3">
            {research.flagship.metrics.map((m) => (
              <div
                key={m.label}
                className="relative overflow-hidden rounded-sm border border-white/[0.08] bg-navy p-4"
              >
                {m.label === "Detection accuracy" || m.label === "Training dataset" ? (
                  <div
                    data-metric-bar
                    className="absolute inset-y-0 left-0 w-full origin-left bg-teal/10"
                    aria-hidden
                  />
                ) : null}
                <div className="relative flex items-center justify-between gap-4">
                  <span className="text-sm text-mist-muted">{m.label}</span>
                  <span
                    className={`text-right ${
                      "accent" in m && m.accent
                        ? "font-mono text-[0.65rem] font-medium uppercase tracking-[0.12em] text-teal sm:text-xs"
                        : "mono" in m && m.mono
                          ? "font-mono text-sm text-mist sm:text-base"
                          : "font-display text-xl font-bold text-teal sm:text-2xl"
                    }`}
                  >
                    {m.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
