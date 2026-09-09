function publicHttpsUrl(value: string | undefined) {
  if (!value?.trim()) return null;
  try {
    const url = new URL(value.trim());
    return url.protocol === "https:" ? url.toString().replace(/\/$/, "") : null;
  } catch {
    return null;
  }
}

// Public business contacts; explicit environment overrides can replace or disable them.
const whatsappNumber = (
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "254701499849"
).replace(/[\s()+-]/g, "");
const contactEmail = (
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "paul.maasai@yahoo.com"
).trim();

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
  logoMark: "/images/ecommerce_solutions_kenya_icon_logo.png",
  description:
    "One-to-one AI coaching for Kenyan businesses. Learn to draft customer replies, plan content and manage follow-ups. Packages from KES 8,000.",
};

export function getWhatsAppUrl(
  message = "Hello, I’d like to discuss AI coaching and find a package that fits my business.",
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
  { href: "/resources", label: "Free resources" },
];
