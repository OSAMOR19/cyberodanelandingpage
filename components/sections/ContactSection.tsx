"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { contact, site } from "@/lib/content";

const channelIcons: Record<string, string> = {
  "Research enquiries": "✉️",
  "Institute location": "📍",
  "Academic & LinkedIn": "🔗",
};

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

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

  const inputClasses = "mt-2 w-full rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-mist placeholder:text-mist-muted/40 transition-all duration-300 focus:border-teal/40 focus:bg-white/[0.04] focus:shadow-glow-sm focus:outline-none backdrop-blur-sm";

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-cyber-gradient" />
      <div className="gradient-divider absolute top-0 left-0 right-0" />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeader label={contact.label} title={contact.title} description={contact.intro} />

            <ul className="mt-10 space-y-5">
              {contact.channels.map((ch) => (
                <li key={ch.label} className="group flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-lg transition group-hover:border-teal/20 group-hover:bg-teal/10">
                    {channelIcons[ch.label] || "·"}
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-mist-muted">
                      {ch.label}
                    </div>
                    {"href" in ch && ch.href ? (
                      <Link href={ch.href} className="mt-1 inline-block text-sm text-teal hover:text-mist transition">
                        {ch.value}
                      </Link>
                    ) : (
                      <div className="mt-1 text-sm text-mist-dim">{ch.value}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 backdrop-blur-sm">
              {(() => {
                const i = contact.commitment.indexOf(":");
                if (i === -1) return <p className="text-sm text-mist-dim">{contact.commitment}</p>;
                return (
                  <p className="text-sm text-mist-dim leading-relaxed">
                    <strong className="font-bold text-teal">{contact.commitment.slice(0, i + 1)}</strong>
                    {contact.commitment.slice(i + 1)}
                  </p>
                );
              })()}
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <form
              onSubmit={onSubmit}
              className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 backdrop-blur-xl sm:p-9"
            >
              {/* Form glow effect */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 bg-teal/[0.04] blur-[60px] rounded-full" aria-hidden />

              <div className="relative">
                <h3 className="font-display text-lg font-bold text-mist mb-6">Send an enquiry</h3>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-mist-muted">
                    First name
                    <input
                      name="first"
                      required
                      className={inputClasses}
                      placeholder="Jane"
                      autoComplete="given-name"
                    />
                  </label>
                  <label className="block text-sm font-medium text-mist-muted">
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

                <label className="mt-5 block text-sm font-medium text-mist-muted">
                  Organisation
                  <input
                    name="org"
                    className={inputClasses}
                    placeholder="Your institution or company"
                    autoComplete="organization"
                  />
                </label>

                <label className="mt-5 block text-sm font-medium text-mist-muted">
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

                <label className="mt-5 block text-sm font-medium text-mist-muted">
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

                <label className="mt-5 block text-sm font-medium text-mist-muted">
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
                  className="group relative mt-8 w-full overflow-hidden rounded-xl bg-teal py-3.5 text-sm font-bold text-navy transition-all duration-300 hover:shadow-glow-teal hover:scale-[1.01] sm:w-auto sm:px-10"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-teal-bright/0 via-white/20 to-teal-bright/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  <span className="relative inline-flex items-center gap-2">
                    Send enquiry
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                </button>

                {submitted ? (
                  <div className="mt-4 flex items-center gap-2 rounded-xl bg-teal/10 border border-teal/20 px-4 py-3">
                    <svg className="h-4 w-4 text-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm text-teal">
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
