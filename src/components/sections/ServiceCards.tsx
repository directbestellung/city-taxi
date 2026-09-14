import Link from "next/link";
import type { ServiceCopy } from "@/lib/i18n/types";
import { pathFor, type Locale } from "@/lib/i18n/routes";
import {
  AccessibleIcon,
  BriefcaseIcon,
  ClockIcon,
  PinIcon,
  PlaneIcon,
  UsersIcon,
} from "@/components/Icons";

const icons = {
  plane: PlaneIcon,
  pin: PinIcon,
  briefcase: BriefcaseIcon,
  users: UsersIcon,
  clock: ClockIcon,
  accessible: AccessibleIcon,
} as const;

export default function ServiceCards({
  items,
  locale,
  moreLabel,
}: {
  items: readonly ServiceCopy[];
  locale: Locale;
  moreLabel: string;
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((service) => {
        const Icon = icons[service.icon];
        return (
          <article
            key={service.title}
            className="group rounded-xl border border-border bg-surface-alt p-6 transition hover:border-accent/50 hover:shadow-lg hover:shadow-black/5"
          >
            <span className="flex size-11 items-center justify-center rounded-lg bg-accent/12 text-accent-text transition group-hover:bg-accent group-hover:text-accent-fg">
              <Icon className="size-5" />
            </span>
            <h3 className="mt-4 text-base font-semibold tracking-tight">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{service.body}</p>
            {service.link ? (
              <Link
                href={pathFor(locale, service.link)}
                className="mt-3 inline-flex text-sm font-medium text-accent-text underline underline-offset-2 hover:text-fg"
              >
                {moreLabel}
              </Link>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
