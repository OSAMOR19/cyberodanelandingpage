import type { ReactNode } from "react";

export function SectionHeader({
  label,
  title,
  description,
  className = "",
  titleAs: TitleTag = "h2",
  centered = false,
}: {
  label: string;
  title: string;
  description?: string | ReactNode;
  className?: string;
  titleAs?: "h2" | "h3";
  centered?: boolean;
}) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <div className={`inline-flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-gradient-to-r from-accent to-transparent" />
        <span className="font-mono text-[0.72rem] font-bold uppercase tracking-[0.18em] text-accent">
          {label}
        </span>
      </div>
      <TitleTag className="font-display mt-4 max-w-3xl text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
        {title}
      </TitleTag>
      {description ? (
        <div className={`mt-5 max-w-2xl text-base leading-relaxed text-ink-secondary ${centered ? "mx-auto" : ""}`}>{description}</div>
      ) : null}
    </div>
  );
}
