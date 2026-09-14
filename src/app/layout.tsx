/**
 * Every route lives under /[locale], and that layout renders <html>/<body> so
 * the lang attribute can follow the language. This root layout is a pass-through.
 */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return children;
}
