import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { about, trust } from "@/lib/content";

export function TrustSection() {
  return (
    <section className="border-y border-white/[0.06] bg-navy py-20 sm:py-28">
      <Container>
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-mist sm:text-3xl">
            {trust.sectorsTitle}
          </h2>
        </Reveal>

        <RevealStagger className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {trust.sectors.map((s) => (
            <div
              key={s}
              data-reveal-item
              className="rounded-sm border border-white/[0.08] bg-navy-mid/80 px-4 py-3 text-center text-xs font-medium uppercase tracking-wider text-mist-dim backdrop-blur-sm transition hover:border-teal/30 hover:text-mist"
            >
              {s}
            </div>
          ))}
        </RevealStagger>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h3 className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-teal">
              Publication & funding venues
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {trust.venues.map((v) => (
                <span
                  key={v}
                  className="rounded-full border border-white/10 bg-mist-ghost/40 px-3 py-1 text-sm text-mist-dim"
                >
                  {v}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <figure className="rounded-sm border border-white/[0.08] bg-mist-ghost/20 p-6 backdrop-blur-md">
              <blockquote className="font-display text-lg italic text-mist sm:text-xl">
                {about.quote}
              </blockquote>
              <figcaption className="mt-3 font-mono text-xs text-teal">
                Institutional research philosophy — not a paid endorsement
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-3">
          {trust.statsRecap.map((s) => (
            <div
              key={s.label}
              data-reveal-item
              className="rounded-sm border border-[var(--border-accent)] bg-teal/[0.05] p-5 text-center backdrop-blur-sm"
            >
              <div className="font-display text-3xl font-bold text-mist">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-mist-muted">{s.label}</div>
            </div>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
