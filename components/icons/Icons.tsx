import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const defaultProps: Partial<IconProps> = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function Icon({ children, viewBox = "0 0 24 24", ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg viewBox={viewBox} {...defaultProps} {...props}>
      {children}
    </svg>
  );
}

/* ──────────── Service Icons ──────────── */

export function IconPartnership(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </Icon>
  );
}

export function IconGrant(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <path d="M8 21h8M12 17v4" />
    </Icon>
  );
}

export function IconAdvisory(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </Icon>
  );
}

export function IconPublication(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </Icon>
  );
}

export function IconShield(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </Icon>
  );
}

export function IconTraining(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
      <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
    </Icon>
  );
}

/* ──────────── Pillar Icons (About section) ──────────── */

export function IconResearch(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
      <path d="M11 8v6M8 11h6" />
    </Icon>
  );
}

export function IconHandshake(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
    </Icon>
  );
}

export function IconFunding(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </Icon>
  );
}

export function IconOpenScience(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      <path d="M8 7h8M8 11h6" />
    </Icon>
  );
}

/* ──────────── Step Icons (How it works) ──────────── */

export function IconDiscovery(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </Icon>
  );
}

export function IconBidding(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M9 15l2 2 4-4" />
    </Icon>
  );
}

export function IconExecution(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </Icon>
  );
}

export function IconDeploy(props: IconProps) {
  return (
    <Icon {...props}>
      <polyline points="16 16 12 12 8 16" />
      <line x1="12" y1="12" x2="12" y2="21" />
      <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
    </Icon>
  );
}

/* ──────────── Research Theme Icons ──────────── */

export function IconBrain(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9.5 2A5.5 5.5 0 005 7.5c0 .88.21 1.72.58 2.46L2 16.5V22h5.5l6.54-3.58A5.5 5.5 0 009.5 2z" />
      <path d="M14.5 2A5.5 5.5 0 0120 7.5c0 .88-.21 1.72-.58 2.46L22 16.5V22h-5.5" />
    </Icon>
  );
}

export function IconLock(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </Icon>
  );
}

export function IconFingerprint(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 018 4" />
      <path d="M5 19.5C5.5 18 6 15 6 12c0-2.8 1-5.2 2.8-7" />
      <path d="M8.8 22c-.4-1.6-.8-3.9-.8-6.2 0-3.6 1.3-6.2 3.3-7.8" />
      <path d="M12.6 22a26 26 0 00-.3-4.8c-.3-1.8-.5-3.6-.1-5.4" />
      <path d="M16 22a33 33 0 00-1.3-5.5C14 15 13.5 13 14 11c.5-2 2-3.5 3.5-4" />
      <path d="M20 22a24 24 0 00-.8-5.5c-.3-1.3-.5-2.7-.3-4" />
    </Icon>
  );
}

export function IconSmartphone(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </Icon>
  );
}

export function IconNetwork(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="5" r="3" />
      <circle cx="19" cy="17" r="3" />
      <circle cx="5" cy="17" r="3" />
      <path d="M12 8v4M7.5 15.5L12 12l4.5 3.5" />
    </Icon>
  );
}

export function IconGlobe(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </Icon>
  );
}

/* ──────────── Sector Icons (Trust section) ──────────── */

export function IconBank(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 21h18" />
      <path d="M3 10h18" />
      <path d="M5 6l7-3 7 3" />
      <path d="M4 10v11M20 10v11" />
      <path d="M8 14v3M12 14v3M16 14v3" />
    </Icon>
  );
}

export function IconBolt(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </Icon>
  );
}

export function IconHeart(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </Icon>
  );
}

export function IconBuilding(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M16 10h.01M8 10h.01M8 14h.01M12 14h.01M16 14h.01" />
    </Icon>
  );
}

export function IconGraduation(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
    </Icon>
  );
}

export function IconCpu(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </Icon>
  );
}

export function IconScale(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M16 3l5 5-5 5" />
      <path d="M21 8H9" />
      <path d="M8 21l-5-5 5-5" />
      <path d="M3 16h12" />
    </Icon>
  );
}

export function IconTruck(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="1" y="3" width="15" height="13" />
      <path d="M16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </Icon>
  );
}

export function IconSignal(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 20V4" />
    </Icon>
  );
}

/* ──────────── Insight Category Icons ──────────── */

export function IconAlertTriangle(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <path d="M12 9v4M12 17h.01" />
    </Icon>
  );
}

export function IconCpuChip(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h6v6H9z" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </Icon>
  );
}

export function IconScroll(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8M8 17h4" />
    </Icon>
  );
}

export function IconMicroscope(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
      <path d="M11 8v6M8 11h6" />
    </Icon>
  );
}

export function IconEarth(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </Icon>
  );
}

/* ──────────── Contact Icons ──────────── */

export function IconMail(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </Icon>
  );
}

export function IconMapPin(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </Icon>
  );
}

export function IconLinkedin(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </Icon>
  );
}

/* ──────────── UI Icons ──────────── */

export function IconTarget(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </Icon>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </Icon>
  );
}

export function IconChevronDown(props: IconProps) {
  return (
    <Icon {...props}>
      <polyline points="6 9 12 15 18 9" />
    </Icon>
  );
}

export function IconSend(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
    </Icon>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <Icon {...props}>
      <polyline points="20 6 9 17 4 12" />
    </Icon>
  );
}

export function IconSun(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </Icon>
  );
}

export function IconMoon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </Icon>
  );
}

export function IconShieldCheck(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </Icon>
  );
}
