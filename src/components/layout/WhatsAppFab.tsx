import { business, whatsappUrl } from "@/lib/business";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/routes";
import { WhatsAppIcon } from "@/components/Icons";

/** Floating WhatsApp button, on the same number as the phone line. */
export default function WhatsAppFab({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <a
      href={whatsappUrl(t.common.whatsappMessage)}
      target="_blank"
      rel="noreferrer"
      data-whatsapp-fab
      aria-label={t.common.whatsappAria}
      title={`${t.common.whatsapp}: ${business.phoneDisplay}`}
      className="fixed bottom-4 right-4 z-40 flex items-center gap-2.5 rounded-full bg-[#25D366] py-3 pl-3.5 pr-4 text-sm font-semibold text-[#06281a] shadow-lg shadow-black/25 transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-bg print:hidden sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="size-6 shrink-0" />
      <span className="hidden sm:inline">{t.common.whatsapp}</span>
    </a>
  );
}
