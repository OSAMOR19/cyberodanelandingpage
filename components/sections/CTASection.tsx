import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ctaBand } from "@/lib/content";

export function CTASection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-sm border border-[var(--border-accent)] bg-gradient-to-br from-teal/[0.12] via-navy-mid to-navy px-6 py-12 sm:px-12 sm:py-16">
            <div
              className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-teal/20 blur-[80px]"
              aria-hidden
            />
            <div className="relative max-w-3xl">
              <h2 className="font-display text-3xl font-semibold text-mist sm:text-4xl">
                {ctaBand.title}
              </h2>
              <p className="mt-4 text-lg text-mist-dim">{ctaBand.body}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={ctaBand.primary.href}
                  className="inline-flex rounded-sm bg-teal px-6 py-3 text-sm font-medium text-navy transition hover:opacity-90"
                >
                  {ctaBand.primary.label}
                </Link>
                <Link
                  href={ctaBand.secondary.href}
                  className="inline-flex rounded-sm border border-white/20 px-6 py-3 text-sm text-mist transition hover:border-teal hover:bg-teal/[0.08]"
                >
                  {ctaBand.secondary.label}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
