"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ctaBand } from "@/lib/content";

export function CTASection() {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-teal/15">
            {/* Multi-layer gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal/[0.12] via-navy-mid to-navy" />
            <div className="absolute inset-0 bg-gradient-to-tl from-gold/[0.04] via-transparent to-teal/[0.06]" />
            <div className="absolute inset-0 cyber-grid opacity-20" aria-hidden />

            {/* Ambient orbs */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-teal/15 blur-[80px]" aria-hidden />
            <div className="pointer-events-none absolute -left-12 -bottom-12 h-48 w-48 rounded-full bg-gold/10 blur-[60px]" aria-hidden />

            <div className="relative px-7 py-14 sm:px-14 sm:py-18">
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-4 py-1.5 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
                  <span className="font-mono text-[0.65rem] font-bold uppercase tracking-wider text-teal">
                    Open for partnerships
                  </span>
                </span>

                <h2 className="mt-6 font-display text-3xl font-bold text-mist sm:text-4xl lg:text-5xl">
                  {ctaBand.title}
                </h2>
                <p className="mt-5 text-lg text-mist-dim leading-relaxed">{ctaBand.body}</p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href={ctaBand.primary.href}
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-teal px-7 py-3.5 text-sm font-semibold text-navy transition-all duration-300 hover:shadow-glow-teal hover:scale-[1.02]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-teal-bright/0 via-white/20 to-teal-bright/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                    <span className="relative">{ctaBand.primary.label}</span>
                    <svg className="relative h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href={ctaBand.secondary.href}
                    className="group inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-medium text-mist backdrop-blur-sm transition-all duration-300 hover:border-teal/30 hover:bg-teal/[0.08]"
                  >
                    {ctaBand.secondary.label}
                    <svg className="h-4 w-4 text-teal transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
