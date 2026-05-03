"use client";

import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { grants } from "@/lib/content";

function statusIndicator(tone: "active" | "seeking") {
  if (tone === "active") {
    return (
      <span className="inline-flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-40" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
        </span>
        <span className="font-mono text-[0.7rem] font-bold uppercase tracking-wider text-teal">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
        </span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-gold/60" />
    </span>
  );
}

function statusClass(tone: "active" | "seeking") {
  return tone === "active" ? "text-teal" : "text-gold";
}

export function GrantsSection() {
  return (
    <section id="grants" className="relative scroll-mt-24 py-24 sm:py-32 overflow-hidden">
      <div className="gradient-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-glow-radial opacity-30" aria-hidden />

      <Container>
        <Reveal>
          <SectionHeader label={grants.label} title={grants.title} description={grants.intro} />
        </Reveal>

        {/* Desktop table */}
        <Reveal className="mt-12 hidden md:block">
          <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                  <th className="px-5 py-4 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-teal">
                    Programme
                  </th>
                  <th className="px-5 py-4 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-teal">
                    Funder
                  </th>
                  <th className="px-5 py-4 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-teal">
                    Focus
                  </th>
                  <th className="px-5 py-4 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-teal">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {grants.rows.map((row, i) => (
                  <tr
                    key={row.programme}
                    className={`border-b border-white/[0.04] transition-colors hover:bg-white/[0.03] ${
                      i % 2 === 0 ? "bg-white/[0.01]" : "bg-transparent"
                    }`}
                  >
                    <td className="px-5 py-5 align-top">
                      <div className="font-medium text-mist">{row.programme}</div>
                      <div className="mt-1 text-xs text-mist-muted">{row.funder}</div>
                    </td>
                    <td className="px-5 py-5 align-top text-mist-dim">{row.org}</td>
                    <td className="px-5 py-5 align-top text-mist-dim">{row.focus}</td>
                    <td className="px-5 py-5 align-top">
                      <span className={`inline-flex items-center gap-2 font-mono text-[0.7rem] font-bold uppercase tracking-wider ${statusClass(row.statusTone)}`}>
                        {row.statusTone === "active" ? (
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-40" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
                          </span>
                        ) : (
                          <span className="h-2 w-2 rounded-full bg-gold/60" />
                        )}
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Mobile cards */}
        <RevealStagger className="mt-10 flex flex-col gap-4 md:hidden">
          {grants.rows.map((row) => (
            <article
              key={row.programme}
              data-reveal-item
              className="cyber-card p-5"
            >
              <div className="font-semibold text-mist">{row.programme}</div>
              <div className="mt-1 text-xs text-mist-muted">{row.funder}</div>
              <div className="mt-3 text-sm text-mist-dim">{row.focus}</div>
              <div className={`mt-4 inline-flex items-center gap-2 font-mono text-[0.7rem] font-bold uppercase tracking-wider ${statusClass(row.statusTone)}`}>
                {row.statusTone === "active" ? (
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-40" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
                  </span>
                ) : (
                  <span className="h-2 w-2 rounded-full bg-gold/60" />
                )}
                {row.status}
              </div>
            </article>
          ))}
        </RevealStagger>

        {/* CTA banner */}
        <Reveal className="mt-14">
          <div className="relative overflow-hidden rounded-2xl border border-teal/15 bg-gradient-to-r from-teal/[0.08] via-navy-mid to-teal/[0.04] p-7 sm:p-9">
            <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 bg-teal/10 blur-[80px] rounded-full" aria-hidden />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-mist sm:text-2xl">{grants.cta.title}</h3>
                <p className="mt-3 max-w-2xl text-sm text-mist-dim">{grants.cta.body}</p>
              </div>
              <Link
                href={grants.cta.href}
                className="inline-flex shrink-0 items-center gap-2 justify-center rounded-lg bg-teal px-6 py-3 text-sm font-semibold text-navy transition-all duration-300 hover:shadow-glow-teal hover:scale-[1.02]"
              >
                {grants.cta.label}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
