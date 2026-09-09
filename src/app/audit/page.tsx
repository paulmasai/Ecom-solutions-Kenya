import { PageIntro } from "@/components/site/page-intro";
import { AuditForm } from "@/components/forms/audit-form";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Free AI Business Check",
  "Answer three questions to find an AI task to try in your Kenyan business. Get a free step-by-step plan and matching template. No email required.",
  "/audit",
);

export default function AuditPage() {
  return (
    <>
      <PageIntro
        eyebrow="Free AI business check"
        title="Find your first useful AI task."
        description="Answer three questions about your work. Get a suggested plan for customer replies, content or follow-ups, plus a free resource to help you try it. No email or sign-up needed."
      />
      <section
        className="site-container grid items-start gap-10 pb-20 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20"
        aria-label="Your self-guided AI business check"
      >
        <div className="border-t pt-6">
          <p className="font-editorial text-3xl italic">
            One task is enough to start.
          </p>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            Think of something you repeat each week: answering delivery
            questions, writing captions or checking which enquiries need a reply.
          </p>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            This self-guided check suggests a plan based on the task you choose.
            Use it as a starting point; a coaching conversation can help adapt
            the steps to your business.
          </p>
        </div>
        <AuditForm />
      </section>
    </>
  );
}
