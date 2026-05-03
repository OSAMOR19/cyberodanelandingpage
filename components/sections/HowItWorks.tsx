import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { howItWorks } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="partnerships" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeader
              label={howItWorks.label}
              title={howItWorks.title}
              description={
                <>
                  {howItWorks.intro.map((p, i) => (
                    <p key={i} className={i > 0 ? "mt-4" : ""}>
                      {p}
                    </p>
                  ))}
                </>
              }
            />
            <Link
              href={howItWorks.cta.href}
              className="mt-8 inline-flex rounded-sm bg-teal px-5 py-2.5 text-sm font-medium text-navy transition hover:opacity-90"
            >
              {howItWorks.cta.label}
            </Link>
          </Reveal>

          <RevealStagger className="relative">
            <div
              className="absolute left-4 top-6 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-teal/50 via-white/10 to-transparent md:block"
              aria-hidden
            />
            <ol className="space-6 md:space-8">
              {howItWorks.steps.map((step) => (
                <li
                  key={step.n}
                  data-reveal-item
                  className="relative flex gap-4 rounded-sm border border-white/[0.08] bg-mist-ghost/40 p-5 backdrop-blur-md md:ml-6 md:pl-8"
                >
                  <span className="font-mono text-sm text-teal md:absolute md:-left-[1.85rem] md:top-5 md:flex md:h-8 md:w-8 md:items-center md:justify-center md:rounded-full md:border md:border-teal/40 md:bg-navy">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-sans text-base font-medium text-mist">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist-dim">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </RevealStagger>
        </div>
      </Container>
    </section>
  );
}
