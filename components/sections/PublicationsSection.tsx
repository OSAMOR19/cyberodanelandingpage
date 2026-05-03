import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { publications } from "@/lib/content";

function badgeClass(style: "springer" | "ieee" | "neutral") {
  if (style === "springer") return "border-teal/35 bg-teal/10 text-teal";
  if (style === "ieee") return "border-blue-400/30 bg-blue-500/10 text-blue-200";
  return "border-white/15 text-mist-muted";
}

export function PublicationsSection() {
  return (
    <section id="publications" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            label={publications.label}
            title={publications.title}
            description={publications.intro}
          />
        </Reveal>

        <RevealStagger className="mt-10 flex flex-col gap-3">
          {publications.items.map((pub) => (
            <article
              key={pub.title}
              data-reveal-item
              className="flex flex-col gap-4 rounded-sm border border-white/[0.08] bg-mist-ghost/30 p-5 backdrop-blur-sm sm:flex-row sm:items-start sm:gap-6 sm:p-6"
            >
              <span className="shrink-0 font-mono text-sm text-gold">{pub.year}</span>
              <div className="min-w-0 flex-1">
                <h3 className="font-sans text-base font-medium text-mist">{pub.title}</h3>
                <p className="mt-2 text-sm text-mist-dim">{pub.meta}</p>
              </div>
              <span
                className={`shrink-0 self-start rounded-sm border px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider ${badgeClass(pub.badgeStyle)}`}
              >
                {pub.badge}
              </span>
            </article>
          ))}
        </RevealStagger>

        <Reveal className="mt-8 flex flex-wrap gap-3">
          {publications.ctas.map((c) => (
            <Link
              key={c.label}
              href={c.href}
              className="inline-flex rounded-sm border border-[var(--border-accent)] px-4 py-2 text-sm text-mist transition hover:border-teal hover:bg-teal/[0.08]"
            >
              {c.label}
            </Link>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
