import { PageIntro } from "@/components/site/page-intro";
import { Packages } from "@/components/coaching/packages";
import { Process } from "@/components/marketing/process";
import { FAQ } from "@/components/marketing/faq";
import { FinalCTA } from "@/components/marketing/final-cta";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "AI Coaching & Packages",
  "Compare AI Starter, AI Growth and AI Pro VIP. Practical one-to-one coaching and workflow implementation from KES 8,000.",
  "/ai-coaching",
);

export default function CoachingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Practical skills. Lasting value."
        title="Learn AI by putting it to work."
        description="Choose a focused starting point or build a deeper system. Every package brings your real business tasks into the session."
      />
      <section
        className="site-container pb-20"
        aria-label="Compare coaching packages"
      >
        <Packages />
        <p className="mt-6 text-center text-sm leading-6 text-muted-foreground">
          Starting prices in KES. We confirm the final scope, pricing and any
          separate tool subscriptions before you commit.
        </p>
      </section>
      <Process />
      <FAQ />
      <FinalCTA />
    </>
  );
}
