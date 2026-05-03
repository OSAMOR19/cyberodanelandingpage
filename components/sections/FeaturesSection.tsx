import {
  IconAdvisory,
  IconGrant,
  IconPartnership,
  IconPublication,
  IconShield,
  IconTraining,
} from "@/components/icons/ServiceIcons";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/lib/content";
import type { ServiceTag } from "@/lib/content";

const iconMap = {
  partnership: IconPartnership,
  grant: IconGrant,
  advisory: IconAdvisory,
  publication: IconPublication,
  shield: IconShield,
  training: IconTraining,
} as const;

function tagClass(tag: ServiceTag) {
  if (tag === "CORE OFFERING") return "border-teal/30 text-teal";
  if (tag === "STRATEGIC" || tag === "ADVISORY") return "border-gold/30 text-gold";
  return "border-white/15 text-mist-muted";
}

export function FeaturesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-navy-mid py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            label="What we do"
            title="End-to-end research & consultancy services"
            description="From identifying grant opportunities to publishing in elite journals, Cyberodane manages the full lifecycle of applied cybersecurity research — in partnership with your organisation."
          />
        </Reveal>

        <RevealStagger className="mt-12 grid gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 xl:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <article
                key={s.title}
                data-reveal-item
                className="group relative overflow-hidden bg-navy-mid p-6 transition-colors hover:bg-navy-light sm:p-8"
              >
                <span
                  className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-teal transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden
                />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm border border-[var(--border-accent)] bg-teal/[0.12] text-teal transition group-hover:shadow-glow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-medium text-mist">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-dim">{s.body}</p>
                <span
                  className={`mt-4 inline-block rounded-sm border px-2 py-1 font-mono text-[0.65rem] uppercase tracking-wider ${tagClass(s.tag)}`}
                >
                  {s.tag}
                </span>
              </article>
            );
          })}
        </RevealStagger>
      </Container>
    </section>
  );
}
