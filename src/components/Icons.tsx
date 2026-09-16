import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function PlaneIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M10.5 12.5 3 10l1-2 8.5 1.5L17 4.6a2 2 0 0 1 2.8 2.8l-4.9 4.5L16.4 21l-2 1-2.6-7.5-3.1 2.8.2 3-1.6.8-1.4-3.2L2.7 16l.8-1.6 3 .2 2.8-3.1Z" />
    </Base>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </Base>
  );
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="7.5" width="18" height="12.5" rx="2.2" />
      <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5" />
      <path d="M3 12.5h18" />
    </Base>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="9.5" cy="8" r="3.2" />
      <path d="M3.5 20a6 6 0 0 1 12 0" />
      <path d="M16.5 5.2a3.2 3.2 0 0 1 0 6.2" />
      <path d="M17.5 14.4a6 6 0 0 1 3 5.6" />
    </Base>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </Base>
  );
}

export function AccessibleIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="13.2" cy="4" r="1.8" />
      <path d="M10.8 8.2v5.2h5.4l2.1 6.2" />
      <circle cx="10.6" cy="15.4" r="5" />
    </Base>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6.2 3.5h2.6l1.5 4-2 1.3a12 12 0 0 0 5.4 5.4l1.3-2 4 1.5v2.6a2 2 0 0 1-2.2 2A16.6 16.6 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z" />
    </Base>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.4" />
      <path d="m3.8 6.6 7 5.1a2 2 0 0 0 2.4 0l7-5.1" />
    </Base>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Base strokeWidth={2} {...props}>
      <path d="m4.5 12.5 4.8 4.8L19.5 7" />
    </Base>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3.2 19 6v5.4c0 4.4-2.9 7.8-7 9.4-4.1-1.6-7-5-7-9.4V6l7-2.8Z" />
      <path d="m9 12 2.2 2.2L15.2 10" />
    </Base>
  );
}

export function CardIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.2" />
      <path d="M3 10h18" />
      <path d="M7 14.8h3.5" />
    </Base>
  );
}

export function LuggageIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="5" y="7.5" width="14" height="12" rx="2" />
      <path d="M9.5 7.5V5.6a1.6 1.6 0 0 1 1.6-1.6h1.8a1.6 1.6 0 0 1 1.6 1.6v1.9" />
      <path d="M10 11v5M14 11v5" />
    </Base>
  );
}

/** Used for passenger capacity. A person reads far better than a seat at 16px. */
export function PassengerIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="7.6" r="3.3" />
      <path d="M5.4 20a6.6 6.6 0 0 1 13.2 0" />
    </Base>
  );
}

export function ChevronIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m6 9.5 6 6 6-6" />
    </Base>
  );
}

/** WhatsApp brand glyph, used only to link to WhatsApp. */
export function WhatsAppIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.2-.25-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.7.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.58-.35M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.89-9.89 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.88 9.89m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.42" />
    </svg>
  );
}

/** Apple logo, used only on the App Store link. */
export function AppleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

/** Google Play mark, used only on the Play Store link. */
export function GooglePlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M3.9 2.1c-.3.3-.5.8-.5 1.4v17c0 .6.2 1.1.5 1.4l.1.1 9.5-9.5v-.2L4 2l-.1.1z" opacity=".7" />
      <path d="M17.2 15.3 14 12.1v-.2l3.2-3.2.1.1 3.8 2.1c1.1.6 1.1 1.6 0 2.2l-3.9 2.2z" />
      <path d="M17.3 15.2 14 12 3.9 22.1c.4.4 1 .4 1.7.1l11.7-7z" opacity=".85" />
      <path d="M17.3 8.8 5.6 2.2c-.7-.4-1.3-.3-1.7.1L14 12l3.3-3.2z" opacity=".55" />
    </svg>
  );
}

/** Marks a callout that qualifies or limits what is offered. */
export function InfoIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 11v5.2" />
      <path d="M12 7.7h.01" />
    </Base>
  );
}

/** Filled star, for the Google rating and the review button. */
export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="m12 2.6 2.9 5.88 6.5.95-4.7 4.58 1.11 6.47L12 17.42l-5.81 3.06 1.11-6.47-4.7-4.58 6.5-.95z" />
    </svg>
  );
}
