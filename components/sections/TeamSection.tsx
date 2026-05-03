"use client";

import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconArrowRight } from "@/components/icons/Icons";
import { team } from "@/lib/content";

export function TeamSection() {
  const isFounder = (name: string) => name.includes("Jude") || name.includes("Osamor");

  return (
    <section id="team" className="relative scroll-mt-24 py-24 sm:py-32 overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <Container className="relative">
        <Reveal>
          <SectionHeader label={team.label} title={team.title} description={team.intro} />
        </Reveal>

        <RevealStagger className="mt-14 grid gap-6 lg:grid-cols-3">
          {team.members.map((m) => (
            <article
              key={m.name}
              data-reveal-item
              className="card group flex flex-col overflow-hidden"
            >
              {/* Avatar / Image area */}
              {isFounder(m.name) ? (
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/images/founder-portrait.png"
                    alt={m.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-surface/80 border border-accent/20 px-3 py-1 backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                      <span className="font-mono text-[0.6rem] font-bold uppercase tracking-wider text-accent">Founder</span>
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex h-36 items-center justify-center bg-surface-secondary">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-accent-faint font-display text-2xl font-bold text-accent ring-2 ring-accent/10 transition group-hover:ring-accent/25 group-hover:shadow-glow-sm">
                    {m.initials}
                  </div>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold text-ink">{m.name}</h3>
                <p className="mt-1 text-sm font-medium text-gold">{m.role}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-secondary">{m.bio}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {m.creds.map((c) => (
                    <span
                      key={c}
                      className="rounded-lg border border-line bg-surface-card px-2.5 py-1 font-mono text-[0.63rem] font-medium text-ink-muted transition group-hover:border-accent/15"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </RevealStagger>

        {/* Fellowship CTA */}
        <Reveal className="mt-14">
          <div className="card relative overflow-hidden p-7 sm:p-9">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 bg-accent/[0.05] blur-[80px] rounded-full" aria-hidden />
            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-ink sm:text-xl">{team.fellowship.title}</h3>
                <p className="mt-2 max-w-xl text-sm text-ink-secondary">{team.fellowship.body}</p>
              </div>
              <Link
                href={team.fellowship.href}
                className="inline-flex shrink-0 items-center gap-2 justify-center rounded-lg border border-line bg-surface-card px-5 py-2.5 text-sm font-medium text-ink transition-all duration-300 hover:border-accent/30 hover:bg-accent-faint hover:shadow-glow-sm"
              >
                {team.fellowship.label}
                <IconArrowRight className="h-4 w-4 text-accent" />
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
