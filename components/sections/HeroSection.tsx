"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";

import { Container } from "@/components/ui/Container";
import { hero } from "@/lib/content";
import { prefersReducedMotion } from "@/lib/gsap";

export function HeroSection() {
  const root = useRef<HTMLElement>(null);
  const kicker = useRef<HTMLDivElement>(null);
  const line1 = useRef<HTMLSpanElement>(null);
  const lineEm = useRef<HTMLSpanElement>(null);
  const sub = useRef<HTMLParagraphElement>(null);
  const actions = useRef<HTMLDivElement>(null);
  const stats = useRef<HTMLDivElement>(null);
  const scrollHint = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        const els = [
          kicker.current,
          line1.current,
          lineEm.current,
          sub.current,
          actions.current,
          stats.current,
          scrollHint.current,
        ].filter(Boolean);
        gsap.set(els, { opacity: 1, y: 0, scale: 1 });
        return;
      }
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(kicker.current, { opacity: 0, y: 16, duration: 0.6 })
        .from(
          line1.current,
          { opacity: 0, y: 32, duration: 0.75 },
          "-=0.35",
        )
        .from(
          lineEm.current,
          { opacity: 0, y: 28, duration: 0.7 },
          "-=0.55",
        )
        .from(sub.current, { opacity: 0, y: 20, duration: 0.65 }, "-=0.45")
        .from(actions.current, { opacity: 0, y: 18, duration: 0.55 }, "-=0.4")
        .from(
          stats.current?.children ?? [],
          { opacity: 0, y: 22, stagger: 0.09, duration: 0.55 },
          "-=0.35",
        )
        .from(
          scrollHint.current,
          { opacity: 0, y: 10, duration: 0.5 },
          "-=0.2",
        );
    },
    { scope: root },
  );

  return (
    <section
      id="hero"
      ref={root}
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-20 sm:pt-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grid-fine bg-grid opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-[-10%] h-[min(600px,80vw)] w-[min(600px,80vw)] rounded-full bg-teal/[0.08] blur-[80px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-[10%] h-[min(400px,70vw)] w-[min(400px,70vw)] rounded-full bg-gold/[0.06] blur-[80px]"
        aria-hidden
      />

      <Container className="relative z-[1]">
        <div className="max-w-4xl">
          <div
            ref={kicker}
            className="mb-6 inline-flex items-center gap-2 rounded-sm border border-[var(--border-accent)] bg-teal/[0.06] px-3 py-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-teal"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            {hero.kicker}
          </div>

          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-mist sm:text-5xl md:text-6xl lg:text-7xl">
            <span ref={line1} className="block">
              {hero.titleLine1}
            </span>
            <span ref={lineEm} className="mt-1 block italic text-teal">
              {hero.titleEm}
            </span>
          </h1>

          <p
            ref={sub}
            className="mt-6 max-w-xl text-lg leading-relaxed text-mist-dim sm:text-xl"
          >
            {hero.sub}
          </p>

          <div ref={actions} className="mt-10 flex flex-wrap gap-4">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex rounded-sm bg-teal px-6 py-3 text-sm font-medium text-navy transition hover:opacity-90"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex rounded-sm border border-[var(--border-accent)] px-6 py-3 text-sm text-mist transition hover:border-teal hover:bg-teal/[0.08]"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>

          <div
            ref={stats}
            className="mt-14 grid grid-cols-2 gap-8 sm:flex sm:flex-wrap sm:gap-12 lg:gap-14"
          >
            {hero.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl font-bold text-mist lg:text-5xl">
                  {s.value}
                  <span className="text-teal">{s.suffix}</span>
                </div>
                <div className="mt-1 max-w-[10rem] text-xs uppercase tracking-wider text-mist-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div
        ref={scrollHint}
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        aria-hidden
      >
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-mist-muted">
          Scroll
        </span>
        <span className="h-14 w-px bg-gradient-to-b from-teal to-transparent" />
      </div>
    </section>
  );
}
