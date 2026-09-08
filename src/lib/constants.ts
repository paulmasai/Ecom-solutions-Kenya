export const siteConfig = {
  name: "E Commerce Solutions Kenya",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ecommercesolutions.co.ke",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  logo: "/images/logo-dark.svg",
  logoWhite: "/images/logo.svg",
  logoMark: "/images/logo-mark.svg",
  description:
    "Practical AI coaching, automation and digital growth systems for Kenyan business owners, creators and teams.",
  colors: {
    teal: "#2DCFBD",
    violet: "#9B60E4",
    pink: "#EC3463",
    coral: "#F26844",
    amber: "#F39B2B",
    ink: "#0F172A",
  },
};

export const brandGradient =
  "linear-gradient(135deg, #2DCFBD 0%, #9B60E4 32%, #EC3463 58%, #F26844 80%, #F39B2B 100%)";

export const whatsappUrl = siteConfig.whatsappNumber
  ? `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}`
  : "#contact";
