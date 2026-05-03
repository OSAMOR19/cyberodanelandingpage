"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import { Container } from "@/components/ui/Container";
import { useTheme } from "@/components/ui/ThemeProvider";
import { IconSun, IconMoon, IconSend, IconChevronDown, IconArrowRight } from "@/components/icons/Icons";
import { navLinks } from "@/lib/content";
import type { NavLink } from "@/lib/content";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const { theme, toggle } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (link: NavLink) => {
    if (link.href.startsWith("#")) return false;
    if (link.href === "/") return pathname === "/";
    return pathname.startsWith(link.href);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-surface-overlay shadow-lg backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        {/* Logo */}
        <Link
          href="/"
          className="group relative flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-ink sm:text-2xl"
          onClick={() => setOpen(false)}
        >
          <span className="relative">
            CYBER{" "}
            <span className="gradient-text">ODANE</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          <ul className="flex gap-0.5">
            {navLinks.map((l) => {
              const hasChildren = l.children && l.children.length > 0;
              const active = isActive(l);

              if (hasChildren) {
                return (
                  <li key={l.href} className="nav-dropdown-trigger relative">
                    <Link
                      href={l.href}
                      className={`group relative inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm transition-all duration-300 ${
                        active
                          ? "text-accent"
                          : "text-ink-muted hover:text-ink hover:bg-surface-tertiary"
                      }`}
                    >
                      {l.label}
                      <IconChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                      {active && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute -bottom-1 left-1/4 right-1/4 h-0.5 rounded-full bg-accent"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>

                    {/* Dropdown panel */}
                    <div className="nav-dropdown absolute left-1/2 top-full pt-2 -translate-x-1/2">
                      <div className="w-[340px] overflow-hidden rounded-xl border border-line bg-surface shadow-lg backdrop-blur-xl">
                        <div className="p-2">
                          {l.children!.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="group/item flex flex-col gap-0.5 rounded-lg px-4 py-3 transition-all duration-200 hover:bg-accent-faint"
                            >
                              <span className="text-sm font-semibold text-ink transition group-hover/item:text-accent">
                                {child.label}
                              </span>
                              <span className="text-xs text-ink-muted leading-relaxed">
                                {child.desc}
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-line bg-surface-secondary px-4 py-3">
                          <Link
                            href={l.href}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition hover:text-ink"
                          >
                            View all research
                            <IconArrowRight className="h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`relative rounded-lg px-3.5 py-2 text-sm transition-all duration-300 ${
                      active
                        ? "text-accent"
                        : "text-ink-muted hover:text-ink hover:bg-surface-tertiary"
                    }`}
                  >
                    {l.label}
                    {active && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute -bottom-1 left-1/4 right-1/4 h-0.5 rounded-full bg-accent"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink-muted transition-all duration-300 hover:border-accent hover:text-accent hover:bg-accent-faint"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconSun className="h-[18px] w-[18px]" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconMoon className="h-[18px] w-[18px]" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          <Link
            href="#contact"
            className="hidden items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-contrast transition-all duration-300 hover:shadow-glow-accent hover:scale-[1.03] sm:inline-flex"
          >
            <IconSend className="h-4 w-4" />
            Partner with us
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink transition hover:border-accent hover:bg-accent-faint lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <motion.span
                className="block h-0.5 w-5 bg-current"
                animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-0.5 w-5 bg-current"
                animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-0.5 w-5 bg-current"
                animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </span>
          </button>
        </div>
      </Container>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 bg-surface/98 backdrop-blur-2xl overflow-y-auto lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-8">
              {navLinks.map((l, i) => {
                const hasChildren = l.children && l.children.length > 0;
                const isDropdownOpen = mobileDropdownOpen === l.label;

                return (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    {hasChildren ? (
                      <div>
                        <button
                          onClick={() => setMobileDropdownOpen(isDropdownOpen ? null : l.label)}
                          className="flex w-full items-center justify-between gap-3 rounded-lg px-4 py-3.5 text-lg text-ink-secondary transition hover:bg-surface-tertiary hover:text-ink"
                        >
                          <span className="flex items-center gap-3">
                            <span className="h-1 w-1 rounded-full bg-accent/50" />
                            {l.label}
                          </span>
                          <IconChevronDown className={`h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-8 flex flex-col gap-1 border-l border-line pl-4 py-2">
                                {l.children!.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className="rounded-lg px-3 py-2.5 transition hover:bg-accent-faint"
                                    onClick={() => setOpen(false)}
                                  >
                                    <div className="text-sm font-medium text-ink">{child.label}</div>
                                    <div className="mt-0.5 text-xs text-ink-muted">{child.desc}</div>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={l.href}
                        className="flex items-center gap-3 rounded-lg px-4 py-3.5 text-lg text-ink-secondary transition hover:bg-surface-tertiary hover:text-ink"
                        onClick={() => setOpen(false)}
                      >
                        <span className="h-1 w-1 rounded-full bg-accent/50" />
                        {l.label}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="#contact"
                  className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-4 text-center font-semibold text-accent-contrast"
                  onClick={() => setOpen(false)}
                >
                  <IconSend className="h-4 w-4" />
                  Partner with us
                </Link>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
