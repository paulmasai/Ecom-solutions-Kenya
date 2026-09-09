import { PageIntro } from "@/components/site/page-intro";
import { AuditForm } from "@/components/forms/audit-form";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Free AI Business Opportunity Audit",
  "Find a practical AI starting point for your business. A short self-guided audit with a downloadable action plan. No email required.",
  "/audit",
);

export default function AuditPage() {
  return (
    <>
      <PageIntro
        eyebrow="Free AI business opportunity audit"
        title="Find one thing AI could help you do better."
        description="Start small. Choose a task that takes up your time, get a practical workflow to explore and download a plan you can act on."
      />
      <section
        className="site-container grid items-start gap-10 pb-20 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20"
        aria-label="Your self-guided audit"
      >
        <div className="border-t pt-6">
          <p className="font-editorial text-3xl italic">
            Useful starts with specific.
          </p>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            You don’t need to change everything at once. A single repeatable
            task is a good place to learn what works for you.
          </p>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            This is a self-guided exercise. Your selected task determines the
            suggested workflow; a coaching conversation can help tailor it to
            your business.
          </p>
        </div>
        <AuditForm />
      </section>
    </>
  );
}
