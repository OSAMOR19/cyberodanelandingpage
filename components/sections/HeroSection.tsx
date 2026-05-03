"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { hero } from "@/lib/content";
import { prefersReducedMotion } from "@/lib/gsap";

/* Animated counter hook */
function useCounter(end: number, duration = 2000, delay = 500) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let startTime: number;
    let animFrame: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) animFrame = requestAnimationFrame(step);
    };
    animFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animFrame);
  }, [started, end, duration]);

  return count;
}

function AnimatedStat({ value, suffix, label, delay }: { value: string; suffix: string; label: string; delay: number }) {
  const numericValue = parseInt(value);
  const isNumeric = !isNaN(numericValue);
  const count = useCounter(isNumeric ? numericValue : 0, 2000, delay);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="absolute inset-0 rounded-xl bg-teal/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 backdrop-blur-sm transition-all duration-500 group-hover:border-teal/20 group-hover:shadow-glow-sm">
        <div className="font-display text-4xl font-bold tracking-tight text-mist stat-number lg:text-5xl">
          {isNumeric ? count : value}
          <span className="gradient-text">{suffix}</span>
        </div>
        <div className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-mist-muted">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

/* Floating particles background */
function CyberParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-teal/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Horizontal data lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-teal/20 to-transparent"
          style={{
            top: `${15 + i * 18}%`,
            width: "100%",
          }}
          animate={{ opacity: [0, 0.5, 0], x: ["-100%", "100%"] }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  const root = useRef<HTMLElement>(null);
  const kicker = useRef<HTMLDivElement>(null);
  const line1 = useRef<HTMLSpanElement>(null);
  const lineEm = useRef<HTMLSpanElement>(null);
  const sub = useRef<HTMLParagraphElement>(null);
  const actions = useRef<HTMLDivElement>(null);
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
          scrollHint.current,
        ].filter(Boolean);
        gsap.set(els, { opacity: 1, y: 0, scale: 1 });
        return;
      }
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(kicker.current, { opacity: 0, y: 20, duration: 0.8, delay: 0.3 })
        .from(line1.current, { opacity: 0, y: 50, duration: 1 }, "-=0.5")
        .from(lineEm.current, { opacity: 0, y: 40, duration: 0.9 }, "-=0.7")
        .from(sub.current, { opacity: 0, y: 25, duration: 0.8 }, "-=0.5")
        .from(actions.current, { opacity: 0, y: 20, duration: 0.7 }, "-=0.4")
        .from(scrollHint.current, { opacity: 0, y: 15, duration: 0.6 }, "-=0.2");
    },
    { scope: root },
  );

  return (
    <section
      id="hero"
      ref={root}
      className="scanline relative flex min-h-screen items-center overflow-hidden pt-24 pb-20 sm:pt-28"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="object-cover opacity-25"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/80 to-navy" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-transparent to-navy/80" />
      </div>

      {/* Animated grid */}
      <div className="pointer-events-none absolute inset-0 cyber-grid opacity-40" aria-hidden />

      {/* Particle system */}
      <CyberParticles />

      {/* Ambient glow orbs */}
      <motion.div
        className="pointer-events-none absolute -right-24 top-[-10%] h-[min(700px,90vw)] w-[min(700px,90vw)] rounded-full bg-teal/[0.06] blur-[120px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -left-32 bottom-[10%] h-[min(500px,70vw)] w-[min(500px,70vw)] rounded-full bg-gold/[0.04] blur-[100px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute left-1/3 top-1/4 h-[300px] w-[300px] rounded-full bg-cyber-purple/[0.04] blur-[80px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        aria-hidden
      />

      <Container className="relative z-[2]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            {/* Status badge */}
            <motion.div
              ref={kicker}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-teal/20 bg-teal/[0.06] px-4 py-2.5 backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal shadow-glow-teal" />
              </span>
              <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.14em] text-teal">
                {hero.kicker}
              </span>
            </motion.div>

            {/* Main heading */}
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-mist sm:text-5xl md:text-6xl lg:text-7xl">
              <span ref={line1} className="block">
                {hero.titleLine1}
              </span>
              <span ref={lineEm} className="mt-2 block gradient-text italic">
                {hero.titleEm}
              </span>
            </h1>

            <p
              ref={sub}
              className="mt-7 max-w-xl text-lg leading-relaxed text-mist-dim sm:text-xl"
            >
              {hero.sub}
            </p>

            {/* CTA buttons */}
            <div ref={actions} className="mt-10 flex flex-wrap gap-4">
              <Link
                href={hero.primaryCta.href}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-teal px-7 py-3.5 text-sm font-semibold text-navy transition-all duration-300 hover:shadow-glow-teal hover:scale-[1.02]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-teal-bright/0 via-white/20 to-teal-bright/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <span className="relative">{hero.primaryCta.label}</span>
                <svg className="relative h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="group inline-flex items-center gap-2 rounded-lg border border-teal/25 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-mist backdrop-blur-sm transition-all duration-300 hover:border-teal/50 hover:bg-teal/[0.08] hover:shadow-glow-sm"
              >
                {hero.secondaryCta.label}
                <svg className="h-4 w-4 text-teal transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Stats grid on the right */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {hero.stats.map((s, i) => (
                <AnimatedStat
                  key={s.label}
                  value={s.value}
                  suffix={s.suffix}
                  label={s.label}
                  delay={800 + i * 200}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        ref={scrollHint}
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-mist-muted">
          Scroll to explore
        </span>
        <div className="relative h-10 w-5 rounded-full border border-teal/30">
          <motion.div
            className="absolute left-1/2 top-2 h-2 w-1 -translate-x-1/2 rounded-full bg-teal"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent z-[1]" />
    </section>
  );
}
