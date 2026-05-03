import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { footer, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-navy-mid py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="#hero" className="font-display text-xl font-bold text-mist">
              CYBER <span className="text-teal">ODANE</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist-dim">{footer.blurb}</p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-mist-muted">
              {footer.affiliations.map((a, i) => (
                <span key={a} className="flex items-center gap-2">
                  {i > 0 ? <span aria-hidden>·</span> : null}
                  {a}
                </span>
              ))}
            </div>
          </div>
          {footer.cols.map((col) => (
            <div key={col.title}>
              <h3 className="font-sans text-sm font-semibold text-mist">{col.title}</h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-mist-muted transition hover:text-teal"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-white/[0.08] pt-8 text-sm text-mist-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <p className="text-xs">{footer.legal}</p>
        </div>
      </Container>
    </footer>
  );
}
