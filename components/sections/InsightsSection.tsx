"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { insights } from "@/lib/content";

const catIcons: Record<string, string> = {
  "Threat landscape": "⚠️",
  "Machine learning": "🤖",
  "Policy & regulation": "📜",
  "Research methods": "🔬",
  "Developing economies": "🌍",
};

export function InsightsSection() {
  return (
    <section id="insights" className="relative scroll-mt-24 py-24 sm:py-32 overflow-hidden">
      <div className="gradient-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-glow-radial opacity-30" aria-hidden />

      <Container>
        <Reveal>
          <SectionHeader label={insights.label} title={insights.title} description={insights.intro} />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {insights.items.map((item, index) => {
            const isFeatured = item.featured && index === 0;
            return (
              <Reveal
                key={item.title}
                className={isFeatured ? "lg:col-span-12" : "lg:col-span-6"}
                delay={index * 0.04}
              >
                <article
                  className={`cyber-card group flex h-full flex-col overflow-hidden sm:flex-row ${
                    isFeatured ? "sm:min-h-[260px]" : ""
                  }`}
                >
                  {/* Gradient visual area */}
                  <div
                    className={`relative flex min-h-[140px] items-center justify-center bg-gradient-to-br ${item.gradient} sm:w-2/5 ${
                      isFeatured ? "sm:min-h-[200px] lg:w-1/3" : ""
                    }`}
                  >
                    {/* Decorative elements */}
                    <div className="absolute inset-0 cyber-grid opacity-20" aria-hidden />
                    <div className="relative flex flex-col items-center gap-3">
                      <span className="text-3xl opacity-60 transition group-hover:opacity-100 group-hover:scale-110">
                        {catIcons[item.cat] || "📊"}
                      </span>
                      <div className="opacity-30 transition group-hover:opacity-60" aria-hidden>
                        <div className="h-16 w-16 rounded-full border border-teal/30 animate-pulse-ring" />
                      </div>
                    </div>
                  </div>

                  {/* Content area */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[0.63rem] font-bold uppercase tracking-[0.15em] text-gold">
                        {item.cat}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-lg font-bold text-mist transition group-hover:text-teal sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-mist-dim">{item.body}</p>
                    <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/[0.06] pt-4">
                      <span className="font-mono text-xs text-mist-muted">{item.date}</span>
                      <Link
                        href="#contact"
                        className="group/link inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-teal transition hover:text-mist"
                      >
                        Read
                        <svg className="h-3 w-3 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <Link
            href={insights.viewAll.href}
            className="group inline-flex items-center gap-2 rounded-lg border border-teal/20 bg-white/[0.02] px-6 py-3 text-sm font-medium text-mist transition-all duration-300 hover:border-teal/40 hover:bg-teal/[0.08] hover:shadow-glow-sm"
          >
            {insights.viewAll.label}
            <svg className="h-4 w-4 text-teal transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
