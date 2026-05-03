import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { grants } from "@/lib/content";

function statusClass(tone: "active" | "seeking") {
  return tone === "active"
    ? "text-teal"
    : "text-gold";
}

export function GrantsSection() {
  return (
    <section id="grants" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeader label={grants.label} title={grants.title} description={grants.intro} />
        </Reveal>

        <Reveal className="mt-10 hidden md:block">
          <div className="overflow-hidden rounded-sm border border-white/[0.08]">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/[0.08] bg-navy-mid/90">
                  <th className="px-4 py-3 font-mono text-[0.65rem] uppercase tracking-wider text-mist-muted">
                    Programme
                  </th>
                  <th className="px-4 py-3 font-mono text-[0.65rem] uppercase tracking-wider text-mist-muted">
                    Funder
                  </th>
                  <th className="px-4 py-3 font-mono text-[0.65rem] uppercase tracking-wider text-mist-muted">
                    Focus
                  </th>
                  <th className="px-4 py-3 font-mono text-[0.65rem] uppercase tracking-wider text-mist-muted">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {grants.rows.map((row) => (
                  <tr
                    key={row.programme}
                    className="border-b border-white/[0.06] bg-navy/40 transition hover:bg-navy-mid/60"
                  >
                    <td className="px-4 py-4 align-top">
                      <div className="font-medium text-mist">{row.programme}</div>
                      <div className="mt-1 text-xs text-mist-muted">{row.funder}</div>
                    </td>
                    <td className="px-4 py-4 align-top text-mist-dim">{row.org}</td>
                    <td className="px-4 py-4 align-top text-mist-dim">{row.focus}</td>
                    <td className="px-4 py-4 align-top">
                      <span className={`font-mono text-[0.7rem] uppercase tracking-wider ${statusClass(row.statusTone)}`}>
                        ● {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <RevealStagger className="mt-8 flex flex-col gap-4 md:hidden">
          {grants.rows.map((row) => (
            <article
              key={row.programme}
              data-reveal-item
              className="rounded-sm border border-white/[0.08] bg-mist-ghost/20 p-4 backdrop-blur-sm"
            >
              <div className="font-medium text-mist">{row.programme}</div>
              <div className="mt-1 text-xs text-mist-muted">{row.funder}</div>
              <div className="mt-2 text-sm text-mist-dim">{row.focus}</div>
              <div
                className={`mt-3 font-mono text-[0.7rem] uppercase tracking-wider ${statusClass(row.statusTone)}`}
              >
                ● {row.status}
              </div>
            </article>
          ))}
        </RevealStagger>

        <Reveal className="mt-12 flex flex-col gap-6 rounded-sm border border-[var(--border-accent)] bg-teal/[0.06] p-6 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h3 className="font-display text-xl font-semibold text-mist">{grants.cta.title}</h3>
            <p className="mt-2 max-w-2xl text-sm text-mist-dim">{grants.cta.body}</p>
          </div>
          <Link
            href={grants.cta.href}
            className="inline-flex shrink-0 justify-center rounded-sm bg-teal px-5 py-2.5 text-sm font-medium text-navy transition hover:opacity-90"
          >
            {grants.cta.label}
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
