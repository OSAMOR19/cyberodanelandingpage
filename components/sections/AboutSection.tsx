import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { about } from "@/lib/content";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <SectionHeader label={about.label} title={about.title} />
            </Reveal>

            <Reveal className="mt-10" delay={0.05}>
              <figure className="rounded-sm border border-[var(--border-accent)] bg-[var(--teal-glow)] p-6 sm:p-8">
                <blockquote className="font-display text-xl italic leading-snug text-mist sm:text-2xl">
                  {about.quote}
                </blockquote>
                <figcaption className="mt-4 font-mono text-xs uppercase tracking-wider text-teal">
                  {about.quoteCite}
                </figcaption>
              </figure>
            </Reveal>

            <RevealStagger className="mt-8 flex flex-col gap-3">
              {about.pillars.map((p) => (
                <div
                  key={p.n}
                  data-reveal-item
                  className="flex gap-4 rounded-sm border border-white/[0.08] border-l-[3px] border-l-teal bg-mist-ghost/80 p-4 backdrop-blur-sm sm:p-5"
                >
                  <span className="font-mono text-xs text-teal">{p.n}</span>
                  <div>
                    <h3 className="text-sm font-medium text-mist">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-mist-dim">{p.body}</p>
                  </div>
                </div>
              ))}
            </RevealStagger>
          </div>

          <div className="lg:pt-4">
            <Reveal>
              <SectionHeader
                label={about.missionLabel}
                title={about.missionTitle}
                titleAs="h3"
              />
            </Reveal>
            <Reveal className="mt-6 space-y-4 text-mist-dim" delay={0.05}>
              {about.missionParas.map((p, i) => (
                <p key={i} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </Reveal>

            <RevealStagger className="mt-8 flex flex-col gap-3">
              {about.affiliations.map((a) => (
                <div
                  key={a.tag}
                  data-reveal-item
                  className="flex flex-col gap-2 rounded-sm border border-white/[0.08] bg-mist-ghost/50 p-4 backdrop-blur-sm sm:flex-row sm:items-center sm:gap-4"
                >
                  <span className="shrink-0 font-mono text-[0.7rem] uppercase tracking-wider text-teal">
                    {a.tag}
                  </span>
                  <span className="text-sm text-mist-dim">{a.text}</span>
                </div>
              ))}
            </RevealStagger>
          </div>
        </div>
      </Container>
    </section>
  );
}
