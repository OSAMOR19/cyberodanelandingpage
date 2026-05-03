"use client";

import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { IconArrowRight, IconChevronDown } from "@/components/icons/Icons";
import { ctaBand } from "@/lib/content";

export function CTASection() {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line-accent">
            {/* Background image */}
            <div className="absolute inset-0">
              <Image
                src="/images/partnership-handshake.png"
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/70" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.06] via-transparent to-gold/[0.04]" />
            </div>
            <div className="absolute inset-0 cyber-grid opacity-20" aria-hidden />

            {/* Ambient orbs */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/10 blur-[80px]" aria-hidden />
            <div className="pointer-events-none absolute -left-12 -bottom-12 h-48 w-48 rounded-full bg-gold/10 blur-[60px]" aria-hidden />

            <div className="relative px-7 py-14 sm:px-14 sm:py-18">
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-surface-card border border-line px-4 py-1.5 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="font-mono text-[0.65rem] font-bold uppercase tracking-wider text-accent">
                    Open for partnerships
                  </span>
                </span>

                <h2 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
                  {ctaBand.title}
                </h2>
                <p className="mt-5 text-lg text-ink-secondary leading-relaxed">{ctaBand.body}</p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href={ctaBand.primary.href}
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-accent-contrast transition-all duration-300 hover:shadow-glow-accent hover:scale-[1.02]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-accent-bright/0 via-white/20 to-accent-bright/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                    <span className="relative">{ctaBand.primary.label}</span>
                    <IconArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href={ctaBand.secondary.href}
                    className="group inline-flex items-center gap-2 rounded-lg border border-line bg-surface-card px-7 py-3.5 text-sm font-medium text-ink backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-accent-faint"
                  >
                    {ctaBand.secondary.label}
                    <IconChevronDown className="h-4 w-4 text-accent transition-transform group-hover:translate-y-0.5" />
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
