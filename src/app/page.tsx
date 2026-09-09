import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import UnderlineHeroSection from "@/components/ui/underline-hero-section";
import { Outcomes } from "@/components/marketing/outcomes";
import { Process } from "@/components/marketing/process";
import { Packages } from "@/components/coaching/packages";
import { FAQ } from "@/components/marketing/faq";
import { FinalCTA } from "@/components/marketing/final-cta";
import { ResourceList } from "@/components/marketing/resource-list";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Practical AI Coaching for Kenyan Businesses",
  "Practical, one-to-one AI coaching for Kenyan business owners, creators and teams. Build useful workflows for content, customers and growth.",
  "/",
);

export default function HomePage() {
  return (
    <>
      <UnderlineHeroSection />
      <div className="border-b bg-[#edeee7]">
        <div className="site-container grid grid-cols-2 gap-x-5 gap-y-4 py-6 text-[11px] font-medium text-muted-foreground sm:text-xs lg:grid-cols-4">
          {[
            "Made for Kenyan businesses",
            "Live, one-to-one coaching",
            "Built around your real work",
            "Online, wherever you are",
          ].map((item) => (
            <p key={item} className="flex items-center gap-2.5">
              <Check
                className="size-3.5 shrink-0 text-primary"
                aria-hidden="true"
              />
              {item}
            </p>
          ))}
        </div>
      </div>
      <Outcomes />
      <Process />
      <section id="packages" className="section-space">
        <div className="site-container">
          <div className="scroll-reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">A clear starting point</p>
              <h2 className="section-heading mt-4">
                Your pace.
                <br />
                <span className="font-editorial italic">Your next level.</span>
              </h2>
            </div>
            <p className="max-w-sm text-base leading-7 text-muted-foreground">
              Focused coaching. Useful systems. Choose the support that fits
              where you are today.
            </p>
          </div>
          <Packages />
          <p className="mt-6 text-center text-xs leading-6 text-muted-foreground">
            Prices in Kenyan shillings. Final scope and any tool costs are
            agreed before you commit.
          </p>
        </div>
      </section>
      <section className="section-space border-t bg-white">
        <div className="site-container">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">A useful place to begin</p>
              <h2 className="section-heading mt-4">
                Small steps.
                <br />
                <span className="font-editorial italic">Real momentum.</span>
              </h2>
            </div>
            <Link href="/resources" className="text-link">
              Explore free resources{" "}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <ResourceList />
        </div>
      </section>
      <FAQ />
      <FinalCTA />
    </>
  );
}
