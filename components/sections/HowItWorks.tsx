"use client";

import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconDiscovery, IconBidding, IconExecution, IconDeploy, IconArrowRight } from "@/components/icons/Icons";
import { howItWorks } from "@/lib/content";

const stepIcons = [IconDiscovery, IconBidding, IconExecution, IconDeploy];

export function HowItWorks() {
  return (
    <section id="partnerships" className="relative scroll-mt-24 py-24 sm:py-32 overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
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
              className="mt-10 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast transition-all duration-300 hover:shadow-glow-accent hover:scale-[1.02]"
            >
              {howItWorks.cta.label}
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <RevealStagger className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-6 hidden h-[calc(100%-2.5rem)] w-px md:block"
              aria-hidden
            >
              <div className="h-full w-full bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />
            </div>

            <ol className="flex flex-col gap-6 md:gap-8">
              {howItWorks.steps.map((step, i) => {
                const Icon = stepIcons[i];
                return (
                  <li
                    key={step.n}
                    data-reveal-item
                    className="card group relative flex gap-5 p-6 md:ml-8 md:pl-8"
                  >
                    {/* Step number node */}
                    <span className="shrink-0 text-accent md:absolute md:-left-[2rem] md:top-6 md:flex md:h-10 md:w-10 md:items-center md:justify-center md:rounded-full md:border md:border-accent/30 md:bg-surface md:text-base md:shadow-glow-sm">
                      <span className="md:hidden">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="hidden md:inline font-mono text-sm">{step.n}</span>
                    </span>
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="hidden md:flex h-8 w-8 items-center justify-center rounded-lg bg-accent-faint text-accent">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="font-mono text-sm text-accent md:hidden">{step.n}</span>
                        <h3 className="font-sans text-base font-semibold text-ink">{step.title}</h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{step.body}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </RevealStagger>
        </div>
      </Container>
    </section>
  );
}
