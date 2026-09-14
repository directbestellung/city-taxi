import { Geist, Geist_Mono } from "next/font/google";
import NotFoundContent from "@/components/sections/NotFoundContent";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

/**
 * Global 404 for paths that never reach a locale segment. The root layout is a
 * pass-through, so this page has to supply html and body itself.
 */
export default function NotFound() {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <NotFoundContent />
      </body>
    </html>
  );
}
