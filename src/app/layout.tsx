import type { Metadata } from "next";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { siteConfig } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Practical AI Coaching | E Commerce Solutions Kenya",
    template: "%s | E Commerce Solutions Kenya",
  },
  description: siteConfig.description,
  icons: {
    icon: { url: siteConfig.logoMark, type: "image/png" },
    shortcut: { url: siteConfig.logoMark, type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-KE">
      <body>
        <a
          href="#main-content"
          className="fixed top-3 left-4 z-[100] -translate-y-24 rounded-md bg-foreground px-5 py-3 text-sm text-white focus:translate-y-0"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
