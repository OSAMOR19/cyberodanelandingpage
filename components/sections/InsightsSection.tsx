"use client";

import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconAlertTriangle, IconCpuChip, IconScroll, IconMicroscope, IconEarth, IconArrowRight } from "@/components/icons/Icons";
import { insights } from "@/lib/content";

const catIcons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  "Threat landscape": IconAlertTriangle,
  "Machine learning": IconCpuChip,
  "Policy & regulation": IconScroll,
  "Research methods": IconMicroscope,
  "Developing economies": IconEarth,
};

// Map categories to image paths
const catImages: Record<string, string> = {
  "Threat landscape": "/images/research-lab-new.png",
  "Machine learning": "/images/hero-soc.png",
  "Policy & regulation": "/images/consulting-session.png",
  "Research methods": "/images/team-collaboration.png",
  "Developing economies": "/images/consulting-session.png",
};

export function InsightsSection() {
  return (
    <section id="insights" className="relative scroll-mt-24 py-24 sm:py-32 overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <Container>
        <Reveal>
          <SectionHeader label={insights.label} title={insights.title} description={insights.intro} />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {insights.items.map((item, index) => {
            const isFeatured = item.featured && index === 0;
            const Icon = catIcons[item.cat] || IconCpuChip;
            const imageSrc = catImages[item.cat] || "/images/hero-soc.png";

            return (
              <Reveal
                key={item.title}
                className={isFeatured ? "lg:col-span-12" : "lg:col-span-6"}
                delay={index * 0.04}
              >
                <article
                  className={`card group flex h-full flex-col overflow-hidden sm:flex-row ${
                    isFeatured ? "sm:min-h-[260px]" : ""
                  }`}
                >
                  {/* Image area instead of gradient */}
                  <div
                    className={`relative flex min-h-[140px] items-center justify-center overflow-hidden sm:w-2/5 ${
                      isFeatured ? "sm:min-h-[200px] lg:w-1/3" : ""
                    }`}
                  >
                    <Image
                      src={imageSrc}
                      alt={item.cat}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-surface/40 dark:bg-surface/50" />
                    <div className="relative flex flex-col items-center gap-3 z-10">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface/80 text-accent backdrop-blur-sm border border-line">
                        <Icon className="h-6 w-6" />
                      </span>
                    </div>
                  </div>

                  {/* Content area */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[0.63rem] font-bold uppercase tracking-[0.15em] text-gold">
                        {item.cat}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-lg font-bold text-ink transition group-hover:text-accent sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-secondary">{item.body}</p>
                    <div className="mt-5 flex items-center justify-between gap-4 border-t border-line pt-4">
                      <span className="font-mono text-xs text-ink-muted">{item.date}</span>
                      <Link
                        href="#contact"
                        className="group/link inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-accent transition hover:text-ink"
                      >
                        Read
                        <IconArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <Link
            href={insights.viewAll.href}
            className="group inline-flex items-center gap-2 rounded-lg border border-line bg-surface-card px-6 py-3 text-sm font-medium text-ink transition-all duration-300 hover:border-accent/30 hover:bg-accent-faint hover:shadow-glow-sm"
          >
            {insights.viewAll.label}
            <IconArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
