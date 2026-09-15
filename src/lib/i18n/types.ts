import type { LandingPageKey } from "./routes";

/** Icon keys the service cards know how to render. */
export type ServiceIconName =
  | "pin"
  | "plane"
  | "users"
  | "briefcase"
  | "clock"
  | "accessible";

export type ServiceCopy = {
  title: string;
  body: string;
  icon: ServiceIconName;
  /** Optional link to a detail page, rendered as a "read more" on the card. */
  link?: LandingPageKey;
};

export type FaqItem = { q: string; a: string };

/** Content blocks the landing pages are assembled from. */
export type LandingBlock =
  | { type: "text"; heading: string; paragraphs: string[] }
  | { type: "list"; heading: string; intro?: string; items: string[] }
  | {
      type: "table";
      heading: string;
      intro?: string;
      columns: string[];
      rows: string[][];
    }
  | { type: "note"; heading: string; paragraphs: string[] }
  | { type: "faq"; heading: string; items: FaqItem[] };

export type LandingCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  blocks: LandingBlock[];
};
