"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconMail, IconMapPin, IconLinkedin, IconSend, IconCheck } from "@/components/icons/Icons";
import { contact, site } from "@/lib/content";

const channelIcons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  "Research enquiries": IconMail,
  "Institute location": IconMapPin,
  "Academic & LinkedIn": IconLinkedin,
};

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

  const inputClasses = "mt-2 w-full rounded-xl border border-line bg-surface px-4 py-3 text-ink placeholder:text-ink-faint transition-all duration-300 focus:border-accent focus:bg-surface-secondary focus:shadow-glow-sm focus:outline-none";

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32 overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeader label={contact.label} title={contact.title} description={contact.intro} />

            <ul className="mt-10 space-y-5">
              {contact.channels.map((ch) => {
                const Icon = channelIcons[ch.label] || IconMail;
                return (
                  <li key={ch.label} className="group flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-surface-card text-accent transition group-hover:border-accent/20 group-hover:bg-accent-faint">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-ink-muted">
                        {ch.label}
                      </div>
                      {"href" in ch && ch.href ? (
                        <Link href={ch.href} className="mt-1 inline-block text-sm text-accent hover:text-ink transition">
                          {ch.value}
                        </Link>
                      ) : (
                        <div className="mt-1 text-sm text-ink-secondary">{ch.value}</div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-surface-card p-5">
              {(() => {
                const i = contact.commitment.indexOf(":");
                if (i === -1) return <p className="text-sm text-ink-secondary">{contact.commitment}</p>;
                return (
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    <strong className="font-bold text-accent">{contact.commitment.slice(0, i + 1)}</strong>
                    {contact.commitment.slice(i + 1)}
                  </p>
                );
              })()}
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <form
              onSubmit={onSubmit}
              className="card relative overflow-hidden p-7 sm:p-9"
            >
              {/* Form glow effect */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 bg-accent/[0.04] blur-[60px] rounded-full" aria-hidden />

              <div className="relative">
                <h3 className="font-display text-lg font-bold text-ink mb-6">Send an enquiry</h3>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-ink-muted">
                    First name
                    <input
                      name="first"
                      required
                      className={inputClasses}
                      placeholder="Jane"
                      autoComplete="given-name"
                    />
                  </label>
                  <label className="block text-sm font-medium text-ink-muted">
                    Last name
                    <input
                      name="last"
                      required
                      className={inputClasses}
                      placeholder="Smith"
                      autoComplete="family-name"
                    />
                  </label>
                </div>

                <label className="mt-5 block text-sm font-medium text-ink-muted">
                  Organisation
                  <input
                    name="org"
                    className={inputClasses}
                    placeholder="Your institution or company"
                    autoComplete="organization"
                  />
                </label>

                <label className="mt-5 block text-sm font-medium text-ink-muted">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    className={inputClasses}
                    placeholder="jane.smith@organisation.co.uk"
                    autoComplete="email"
                  />
                </label>

                <label className="mt-5 block text-sm font-medium text-ink-muted">
                  Nature of enquiry
                  <select
                    name="type"
                    className={`${inputClasses} cursor-pointer`}
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

                <label className="mt-5 block text-sm font-medium text-ink-muted">
                  Message
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className={`${inputClasses} resize-y`}
                    placeholder="Briefly describe the research challenge or collaboration opportunity."
                  />
                </label>

                <button
                  type="submit"
                  className="group relative mt-8 w-full overflow-hidden rounded-xl bg-accent py-3.5 text-sm font-bold text-accent-contrast transition-all duration-300 hover:shadow-glow-accent hover:scale-[1.01] sm:w-auto sm:px-10"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-accent-bright/0 via-white/20 to-accent-bright/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  <span className="relative inline-flex items-center gap-2">
                    Send enquiry
                    <IconSend className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>

                {submitted ? (
                  <div className="mt-4 flex items-center gap-2 rounded-xl bg-accent-muted border border-accent/20 px-4 py-3">
                    <IconCheck className="h-4 w-4 text-accent shrink-0" />
                    <p className="text-sm text-accent">
                      Opening your email client — if nothing opens, email us directly at {site.email}.
                    </p>
                  </div>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
