import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import WelcomeSplash from "@/components/layout/WelcomeSplash";
import WhatsAppFab from "@/components/layout/WhatsAppFab";
import { business, siteUrl } from "@/lib/business";
import { getDictionary } from "@/lib/i18n";
import { isLocale, locales } from "@/lib/i18n/routes";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  // Short on purpose: nearly every page title already says Kaiserslautern, and
  // the long form cost 27 characters of the ~60 Google shows.
  title: { default: business.name, template: "%s | City Taxi" },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getDictionary(locale);

  return (
    <html
      lang={t.htmlLang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      /*
       * The script below stamps data-welcome onto this element before React
       * hydrates, so the client <html> has an attribute the server never sent.
       * That is the point of the script, not a bug — suppress the warning it
       * would otherwise log on every page load. This only covers this element's
       * own attributes; everything inside still hydrates and warns normally.
       */
      suppressHydrationWarning
    >
      <head>
        {/*
          Runs before first paint: if this session has already been greeted, the
          splash is hidden by CSS straight away rather than rendering and then
          being removed, which would flash on every page load.

          This has to be a bare <script>, and React logs "Encountered a script
          tag while rendering React component" for it. That warning is worth
          understanding rather than silencing:

           - It is development-only. The string lives solely in React's
             .development build and never reaches production, and React sets an
             internal flag after the first one, so it is a single line per page
             load, not one per navigation.
           - What it warns about does not apply here. React declines to execute
             an inline script when it renders one on the CLIENT. We only need
             this on the server render: the browser runs it while parsing the
             initial HTML, and the attribute it sets stays on <html> for the
             life of the document, so client navigations never need it again.
           - next/script with strategy="beforeInteractive" is NOT a substitute,
             despite being the obvious fix. It does not emit a running script —
             it pushes the source onto Next's __next_s queue, which an async
             runtime chunk drains later. Every Next chunk is async, so the code
             would run after first paint, which is the exact flash this exists
             to prevent. Checked against the built HTML; do not swap it back.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(sessionStorage.getItem('citytaxi-welcomed')==='1')" +
              "document.documentElement.dataset.welcome='seen'}catch(e){}",
          }}
        />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <WelcomeSplash />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-fg"
        >
          {t.common.skipToContent}
        </a>
        <Header locale={locale} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} />
        <WhatsAppFab locale={locale} />
        <CookieBanner locale={locale} />
      </body>
    </html>
  );
}
