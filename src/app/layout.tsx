import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ecommercesolutions.co.ke"),
  title: {
    default: "AI Mastery Coaching for Kenyan Business Owners | Ecommerce Solutions Kenya",
    template: "%s | Ecommerce Solutions Kenya",
  },
  description:
    "Practical AI coaching, automation and digital growth systems for Kenyan business owners, creators and teams.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
