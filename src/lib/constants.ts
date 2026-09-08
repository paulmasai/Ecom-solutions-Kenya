export const siteConfig = {
  name: "Ecommerce Solutions Kenya",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ecommercesolutions.co.ke",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  logo: "/images/logo.svg",
  logoWhite: "/images/logo-white.svg",
  description:
    "Practical AI coaching, automation and digital growth systems for Kenyan business owners, creators and teams.",
};

export const whatsappUrl = siteConfig.whatsappNumber
  ? `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}`
  : "#contact";
