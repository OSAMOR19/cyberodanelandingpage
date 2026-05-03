import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { team } from "@/lib/content";

export function TeamSection() {
  return (
    <section id="team" className="scroll-mt-24 bg-navy-mid py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeader label={team.label} title={team.title} description={team.intro} />
        </Reveal>

        <RevealStagger className="mt-12 grid gap-6 lg:grid-cols-3">
          {team.members.map((m) => (
            <article
              key={m.name}
              data-reveal-item
              className="flex flex-col rounded-sm border border-white/[0.08] bg-navy/60 p-6 backdrop-blur-md transition hover:border-teal/20"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-teal/15 font-mono text-sm font-medium text-teal">
                {m.initials}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-mist">{m.name}</h3>
              <p className="mt-1 text-sm font-medium text-gold">{m.role}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-mist-dim">{m.bio}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {m.creds.map((c) => (
                  <span
                    key={c}
                    className="rounded-sm border border-white/10 px-2 py-0.5 font-mono text-[0.65rem] text-mist-muted"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </RevealStagger>

        <Reveal className="mt-12 flex flex-col gap-4 rounded-sm border border-white/[0.08] bg-mist-ghost/20 p-6 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h3 className="font-sans text-base font-medium text-mist">{team.fellowship.title}</h3>
            <p className="mt-1 max-w-xl text-sm text-mist-dim">{team.fellowship.body}</p>
          </div>
          <Link
            href={team.fellowship.href}
            className="inline-flex justify-center rounded-sm border border-[var(--border-accent)] px-4 py-2 text-sm text-mist transition hover:border-teal hover:bg-teal/[0.08]"
          >
            {team.fellowship.label}
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
