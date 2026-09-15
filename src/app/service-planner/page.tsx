import { Suspense } from "react";
import Link from "next/link";
import { ServicePlanner } from "@/components/planner/service-planner";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Find the right AI service",
  "Choose the business tasks you need help with and prepare a plan for custom automation, AI assistant setup, connected operations or Meta services.",
  "/service-planner",
);

export default function ServicePlannerPage() {
  return (
    <>
      <div className="site-container pt-12 pb-9 sm:pt-16">
        <h1 className="max-w-3xl text-4xl leading-[1.12] font-medium tracking-[-0.04em] sm:text-5xl">
          Find the right AI support<br className="hidden sm:block" />
          <span className="font-editorial italic"> for your business.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
          Choose what you need help with. Get a suggested service plan, then
          take it into a conversation about scope and costs.
        </p>
      </div>
      <Suspense fallback={<div className="site-container pb-20"><p role="status">Loading your service planner…</p></div>}>
        <ServicePlanner />
      </Suspense>
      <noscript><p className="site-container pb-10">Enable JavaScript to use the planner, or <Link href="/book" className="underline">prepare an enquiry on our booking page</Link>.</p></noscript>
    </>
  );
}
