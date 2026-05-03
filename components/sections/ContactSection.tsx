"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { contact, site } from "@/lib/content";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const first = String(data.get("first") ?? "").trim();
    const last = String(data.get("last") ?? "").trim();
    const org = String(data.get("org") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const type = String(data.get("type") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(`[${site.nameBody}] ${type || "Enquiry"} — ${org || "Organisation"}`);
    const body = encodeURIComponent(
      `Name: ${first} ${last}\nOrganisation: ${org}\nEmail: ${email}\nEnquiry: ${type}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-navy-mid py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeader label={contact.label} title={contact.title} description={contact.intro} />
            <ul className="mt-8 space-y-5">
              {contact.channels.map((ch) => (
                <li key={ch.label} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-white/10 bg-mist-ghost/30">
                    <span className="text-teal" aria-hidden>
                      ·
                    </span>
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-mist-muted">
                      {ch.label}
                    </div>
                    {"href" in ch && ch.href ? (
                      <Link href={ch.href} className="mt-0.5 text-sm text-teal hover:text-mist">
                        {ch.value}
                      </Link>
                    ) : (
                      <div className="mt-0.5 text-sm text-mist-dim">{ch.value}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-sm border border-white/[0.08] bg-mist-ghost/20 p-4 text-sm text-mist-dim">
              {(() => {
                const i = contact.commitment.indexOf(":");
                if (i === -1) return contact.commitment;
                return (
                  <>
                    <strong className="text-teal">{contact.commitment.slice(0, i + 1)}</strong>
                    {contact.commitment.slice(i + 1)}
                  </>
                );
              })()}
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <form
              onSubmit={onSubmit}
              className="rounded-sm border border-white/[0.08] bg-navy/60 p-6 backdrop-blur-md sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-mist-muted">
                  First name
                  <input
                    name="first"
                    required
                    className="mt-1.5 w-full rounded-sm border border-white/10 bg-navy px-3 py-2 text-mist placeholder:text-mist-muted/50 focus:border-teal focus:outline-none"
                    placeholder="Jane"
                    autoComplete="given-name"
                  />
                </label>
                <label className="block text-sm text-mist-muted">
                  Last name
                  <input
                    name="last"
                    required
                    className="mt-1.5 w-full rounded-sm border border-white/10 bg-navy px-3 py-2 text-mist placeholder:text-mist-muted/50 focus:border-teal focus:outline-none"
                    placeholder="Smith"
                    autoComplete="family-name"
                  />
                </label>
              </div>
              <label className="mt-4 block text-sm text-mist-muted">
                Organisation
                <input
                  name="org"
                  className="mt-1.5 w-full rounded-sm border border-white/10 bg-navy px-3 py-2 text-mist placeholder:text-mist-muted/50 focus:border-teal focus:outline-none"
                  placeholder="Your institution or company"
                  autoComplete="organization"
                />
              </label>
              <label className="mt-4 block text-sm text-mist-muted">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1.5 w-full rounded-sm border border-white/10 bg-navy px-3 py-2 text-mist placeholder:text-mist-muted/50 focus:border-teal focus:outline-none"
                  placeholder="jane.smith@organisation.co.uk"
                  autoComplete="email"
                />
              </label>
              <label className="mt-4 block text-sm text-mist-muted">
                Nature of enquiry
                <select
                  name="type"
                  className="mt-1.5 w-full rounded-sm border border-white/10 bg-navy px-3 py-2 text-mist focus:border-teal focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select enquiry type
                  </option>
                  {contact.form.enquiryOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </label>
              <label className="mt-4 block text-sm text-mist-muted">
                Message
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="mt-1.5 w-full resize-y rounded-sm border border-white/10 bg-navy px-3 py-2 text-mist placeholder:text-mist-muted/50 focus:border-teal focus:outline-none"
                  placeholder="Briefly describe the research challenge or collaboration opportunity."
                />
              </label>
              <button
                type="submit"
                className="mt-6 w-full rounded-sm bg-teal py-3 text-sm font-medium text-navy transition hover:opacity-90 sm:w-auto sm:px-8"
              >
                Send enquiry →
              </button>
              {submitted ? (
                <p className="mt-3 text-sm text-teal">
                  Opening your email client — if nothing opens, email us directly at {site.email}.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
