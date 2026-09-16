"use client";

import { useCallback } from "react";
import { business, emailAddress } from "@/lib/business";

/**
 * The email address, rendered so it is not trivially harvestable.
 *
 * Two things keep it out of reach of the common scraper:
 *
 *  - The local part, the @ and the domain are separate elements, so the served
 *    HTML never contains the address as one contiguous string. A harvester
 *    running a regex over the page finds nothing.
 *  - There is no `mailto:` in the markup either. The href is attached on the
 *    client through a ref, after hydration.
 *
 * It stays perfectly normal for a person: the rendered text reads as the
 * address, it can be selected and copied, and once hydrated it is a real
 * mailto link with the usual right-click menu. Without JavaScript it degrades
 * to readable text rather than disappearing — which matters, because the
 * Impressum has to state a working address.
 *
 * Worth being clear-eyed: this defeats cheap harvesters, not a scraper driving
 * a real browser, which sees the assembled address like any visitor. The only
 * complete answer is not publishing an address at all — a contact form, or an
 * alias you can burn if it starts attracting spam.
 */
export default function ObfuscatedEmail({
  className = "",
  asLink = true,
}: {
  className?: string;
  asLink?: boolean;
}) {
  const attachHref = useCallback((node: HTMLAnchorElement | null) => {
    if (node) node.href = `mailto:${emailAddress()}`;
  }, []);

  const parts = (
    <>
      <span>{business.emailUser}</span>
      <span>@</span>
      <span>{business.emailDomain}</span>
    </>
  );

  if (!asLink) return <span className={className}>{parts}</span>;

  return (
    <a ref={attachHref} rel="nofollow" className={className}>
      {parts}
    </a>
  );
}
