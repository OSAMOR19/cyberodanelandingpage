"use client";

import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconArrowRight } from "@/components/icons/Icons";
import { grants } from "@/lib/content";

function statusClass(tone: "active" | "seeking") {
  return tone === "active" ? "text-accent" : "text-gold";
}

export function GrantsSection() {
  return (
    <section id="grants" className="relative scroll-mt-24 py-24 sm:py-32 overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <Container>
        <Reveal>
          <SectionHeader label={grants.label} title={grants.title} description={grants.intro} />
        </Reveal>

        {/* Desktop table */}
        <Reveal className="mt-12 hidden md:block">
          <div className="overflow-hidden rounded-2xl border border-line">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line bg-surface-secondary">
                  <th className="px-5 py-4 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-accent">
                    Programme
                  </th>
                  <th className="px-5 py-4 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-accent">
                    Funder
                  </th>
                  <th className="px-5 py-4 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-accent">
                    Focus
                  </th>
                  <th className="px-5 py-4 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-accent">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {grants.rows.map((row, i) => (
                  <tr
                    key={row.programme}
                    className={`border-b border-line transition-colors hover:bg-surface-tertiary ${
                      i % 2 === 0 ? "bg-surface" : "bg-surface-secondary"
                    }`}
                  >
                    <td className="px-5 py-5 align-top">
                      <div className="font-medium text-ink">{row.programme}</div>
                      <div className="mt-1 text-xs text-ink-muted">{row.funder}</div>
                    </td>
                    <td className="px-5 py-5 align-top text-ink-secondary">{row.org}</td>
                    <td className="px-5 py-5 align-top text-ink-secondary">{row.focus}</td>
                    <td className="px-5 py-5 align-top">
                      <span className={`inline-flex items-center gap-2 font-mono text-[0.7rem] font-bold uppercase tracking-wider ${statusClass(row.statusTone)}`}>
                        {row.statusTone === "active" ? (
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
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
              className="card p-5"
            >
              <div className="font-semibold text-ink">{row.programme}</div>
              <div className="mt-1 text-xs text-ink-muted">{row.funder}</div>
              <div className="mt-3 text-sm text-ink-secondary">{row.focus}</div>
              <div className={`mt-4 inline-flex items-center gap-2 font-mono text-[0.7rem] font-bold uppercase tracking-wider ${statusClass(row.statusTone)}`}>
                {row.statusTone === "active" ? (
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
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
          <div className="relative overflow-hidden rounded-2xl border border-line-accent bg-accent-faint p-7 sm:p-9">
            <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 bg-accent/10 blur-[80px] rounded-full" aria-hidden />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">{grants.cta.title}</h3>
                <p className="mt-3 max-w-2xl text-sm text-ink-secondary">{grants.cta.body}</p>
              </div>
              <Link
                href={grants.cta.href}
                className="inline-flex shrink-0 items-center gap-2 justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast transition-all duration-300 hover:shadow-glow-accent hover:scale-[1.02]"
              >
                {grants.cta.label}
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
