import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/ai-coaching",
    "/about",
    "/resources",
    "/contact",
    "/book",
    "/audit",
  ].map((path) => ({
    url: new URL(path, siteConfig.siteUrl).toString(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path === "/ai-coaching" ? 0.9 : 0.7,
  }));
}
