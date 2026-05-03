import type { ReactNode } from "react";

export function SectionHeader({
  label,
  title,
  description,
  className = "",
  titleAs: TitleTag = "h2",
}: {
  label: string;
  title: string;
  description?: string | ReactNode;
  className?: string;
  titleAs?: "h2" | "h3";
}) {
  return (
    <div className={className}>
      <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.18em] text-teal">
        {label}
      </span>
      <TitleTag className="font-display mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-mist sm:text-4xl">
        {title}
      </TitleTag>
      {description ? (
        <div className="mt-4 max-w-2xl text-base leading-relaxed text-mist-dim">{description}</div>
      ) : null}
    </div>
  );
}
