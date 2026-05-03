"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { howItWorks } from "@/lib/content";

const stepIcons = ["🔍", "📋", "⚗️", "🚀"];

export function HowItWorks() {
  return (
    <section id="partnerships" className="relative scroll-mt-24 py-24 sm:py-32 overflow-hidden">
      <div className="gradient-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-glow-radial opacity-30" aria-hidden />

      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeader
              label={howItWorks.label}
              title={howItWorks.title}
              description={
                <>
                  {howItWorks.intro.map((p, i) => (
                    <p key={i} className={i > 0 ? "mt-4" : ""}>
                      {p}
                    </p>
                  ))}
                </>
              }
            />
            <Link
              href={howItWorks.cta.href}
              className="mt-10 inline-flex items-center gap-2 rounded-lg bg-teal px-6 py-3 text-sm font-semibold text-navy transition-all duration-300 hover:shadow-glow-teal hover:scale-[1.02]"
            >
              {howItWorks.cta.label}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Reveal>

          <RevealStagger className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-6 hidden h-[calc(100%-2.5rem)] w-px md:block"
              aria-hidden
            >
              <div className="h-full w-full bg-gradient-to-b from-teal/50 via-teal/20 to-transparent" />
            </div>

            <ol className="flex flex-col gap-6 md:gap-8">
              {howItWorks.steps.map((step, i) => (
                <li
                  key={step.n}
                  data-reveal-item
                  className="group relative flex gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-md transition-all duration-500 hover:border-teal/20 hover:bg-white/[0.04] hover:shadow-glow-sm md:ml-8 md:pl-8"
                >
                  {/* Step number node */}
                  <span className="shrink-0 font-mono text-sm text-teal md:absolute md:-left-[2rem] md:top-6 md:flex md:h-10 md:w-10 md:items-center md:justify-center md:rounded-full md:border md:border-teal/30 md:bg-navy md:text-base md:shadow-glow-sm">
                    <span className="md:hidden">{stepIcons[i]}</span>
                    <span className="hidden md:inline">{step.n}</span>
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg md:hidden">{step.n}</span>
                      <h3 className="font-sans text-base font-semibold text-mist">{step.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-mist-dim">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </RevealStagger>
        </div>
      </Container>
    </section>
  );
}
