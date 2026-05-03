"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { team } from "@/lib/content";

export function TeamSection() {
  const isFounder = (name: string) => name.includes("Jude") || name.includes("Osamor");

  return (
    <section id="team" className="relative scroll-mt-24 py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-cyber-gradient" />
      <div className="gradient-divider absolute top-0 left-0 right-0" />

      <Container className="relative">
        <Reveal>
          <SectionHeader label={team.label} title={team.title} description={team.intro} />
        </Reveal>

        <RevealStagger className="mt-14 grid gap-6 lg:grid-cols-3">
          {team.members.map((m) => (
            <article
              key={m.name}
              data-reveal-item
              className="cyber-card group flex flex-col overflow-hidden"
            >
              {/* Avatar / Image area */}
              {isFounder(m.name) ? (
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/images/team-lead.png"
                    alt={m.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-mid via-navy-mid/40 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-navy/80 border border-teal/20 px-3 py-1 backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
                      <span className="font-mono text-[0.6rem] font-bold uppercase tracking-wider text-teal">Founder</span>
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex h-36 items-center justify-center bg-gradient-to-br from-white/[0.03] to-transparent">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-teal/10 font-display text-2xl font-bold text-teal ring-2 ring-teal/10 transition group-hover:ring-teal/25 group-hover:shadow-glow-sm">
                    {m.initials}
                  </div>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold text-mist">{m.name}</h3>
                <p className="mt-1 text-sm font-medium text-gold">{m.role}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-mist-dim">{m.bio}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {m.creds.map((c) => (
                    <span
                      key={c}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[0.63rem] font-medium text-mist-muted transition group-hover:border-teal/15"
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
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 backdrop-blur-sm sm:p-9">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 bg-teal/[0.05] blur-[80px] rounded-full" aria-hidden />
            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-mist sm:text-xl">{team.fellowship.title}</h3>
                <p className="mt-2 max-w-xl text-sm text-mist-dim">{team.fellowship.body}</p>
              </div>
              <Link
                href={team.fellowship.href}
                className="inline-flex shrink-0 items-center gap-2 justify-center rounded-lg border border-teal/20 bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-mist transition-all duration-300 hover:border-teal/40 hover:bg-teal/[0.08] hover:shadow-glow-sm"
              >
                {team.fellowship.label}
                <svg className="h-4 w-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
