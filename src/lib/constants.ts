function publicHttpsUrl(value: string | undefined) {
  if (!value?.trim()) return null;
  try {
    const url = new URL(value.trim());
    return url.protocol === "https:" ? url.toString().replace(/\/$/, "") : null;
  } catch {
    return null;
  }
}

const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(
  /[\s()+-]/g,
  "",
);
const contactEmail = (process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "").trim();

export const siteConfig = {
  name: "E Commerce Solutions Kenya",
  siteUrl:
    publicHttpsUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
    "https://ecommercesolutions.co.ke",
  whatsappNumber: /^[1-9]\d{7,14}$/.test(whatsappNumber)
    ? whatsappNumber
    : null,
  bookingUrl: publicHttpsUrl(process.env.NEXT_PUBLIC_CALENDLY_URL),
  contactEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)
    ? contactEmail
    : null,
  logoMark: "/images/logo-mark.svg",
  description:
    "Practical AI coaching, automation and digital growth systems for Kenyan business owners, creators and teams.",
};

export function getWhatsAppUrl(
  message = "Hello! I’d like to discuss AI coaching for my business.",
) {
  return siteConfig.whatsappNumber
    ? `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
    : null;
}

export const whatsappUrl = getWhatsAppUrl();

export const navigation = [
  { href: "/ai-coaching", label: "AI coaching" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/about", label: "About us" },
  { href: "/resources", label: "Resources" },
];
