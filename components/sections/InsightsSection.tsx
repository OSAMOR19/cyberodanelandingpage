import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { insights } from "@/lib/content";

export function InsightsSection() {
  return (
    <section id="insights" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeader label={insights.label} title={insights.title} description={insights.intro} />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {insights.items.map((item, index) => {
            const isFeatured = item.featured && index === 0;
            return (
              <Reveal
                key={item.title}
                className={isFeatured ? "lg:col-span-12" : "lg:col-span-6"}
                delay={index * 0.03}
              >
                <article
                  className={`group flex h-full flex-col overflow-hidden rounded-sm border border-white/[0.08] bg-navy-mid/50 backdrop-blur-md transition hover:border-teal/25 hover:shadow-glow sm:flex-row ${isFeatured ? "" : ""}`}
                >
                  <div
                    className={`relative flex min-h-[160px] items-center justify-center bg-gradient-to-br ${item.gradient} sm:w-2/5 ${isFeatured ? "sm:min-h-[200px] lg:w-1/3" : ""}`}
                  >
                    <div className="opacity-40 transition group-hover:opacity-70" aria-hidden>
                      <div className="h-24 w-24 rounded-full border border-teal/40" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-gold">
                      {item.cat}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-semibold text-mist sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-dim">{item.body}</p>
                    <div className="mt-4 flex items-center justify-between gap-4">
                      <span className="font-mono text-xs text-mist-muted">{item.date}</span>
                      <Link
                        href="#contact"
                        className="font-mono text-xs uppercase tracking-wider text-teal transition hover:text-mist"
                      >
                        Read →
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 text-center">
          <Link
            href={insights.viewAll.href}
            className="inline-flex rounded-sm border border-[var(--border-accent)] px-5 py-2.5 text-sm text-mist transition hover:border-teal hover:bg-teal/[0.08]"
          >
            {insights.viewAll.label}
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
