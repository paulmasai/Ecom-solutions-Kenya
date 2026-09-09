import { PageIntro } from "@/components/site/page-intro";
import { Packages } from "@/components/coaching/packages";
import { Process } from "@/components/marketing/process";
import { FAQ } from "@/components/marketing/faq";
import { FinalCTA } from "@/components/marketing/final-cta";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "AI Coaching Packages & Prices",
  "Compare AI coaching packages from KES 8,000. Learn customer replies, content planning and automation through live online sessions for Kenyan businesses.",
  "/ai-coaching",
);

export default function CoachingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Online AI training for Kenyan businesses"
        title="Choose the AI skills your business needs next."
        description="Learn to handle customer replies, create content or organise follow-ups. Every package includes live coaching using your own business tasks, with a clear scope and price agreed upfront."
      />
      <section
        className="site-container pb-20"
        aria-label="Compare coaching packages"
      >
        <Packages />
        <p className="mt-6 text-center text-sm leading-6 text-muted-foreground">
          Starting prices in Kenyan shillings. Each session is 60 minutes.
          Paid tools, messaging and hosting are separate where needed; we
          explain the full costs before you commit.
        </p>
      </section>
      <Process />
      <FAQ />
      <FinalCTA />
    </>
  );
}
