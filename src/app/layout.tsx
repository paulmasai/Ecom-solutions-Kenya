import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ecommercesolutions.co.ke"),
  title: {
    default: "AI Mastery Coaching for Kenyan Business Owners | E Commerce Solutions Kenya",
    template: "%s | E Commerce Solutions Kenya",
  },
  description:
    "Practical AI coaching, automation and digital growth systems for Kenyan business owners, creators and teams.",
  icons: {
    icon: "/images/logo-mark.svg",
    shortcut: "/images/logo-mark.svg",
  },
  openGraph: {
    title: "E Commerce Solutions Kenya",
    description: "Practical AI coaching, automation and digital growth systems for Kenyan businesses.",
    url: "https://ecommercesolutions.co.ke",
    siteName: "E Commerce Solutions Kenya",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
