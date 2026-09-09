import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/site/page-intro";
import { ResourceList } from "@/components/marketing/resource-list";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Free AI Templates for Business",
  "Download free WhatsApp reply prompts, a weekly content planner and an automation checklist for Kenyan businesses. No sign-up or email required.",
  "/resources",
);

export default function ResourcesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Free AI resources for Kenyan businesses"
        title="Try AI on your next reply, post or follow-up."
        description="Start with a task you already do. Download a template, add your business details and check the result. All three are plain text files you can copy and edit. No sign-up needed."
      />
      <section
        className="site-container pb-20"
        aria-label="Download free resources"
      >
        <ResourceList />
      </section>
      <section className="border-t bg-secondary">
        <div className="site-container grid gap-8 py-16 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="eyebrow">Not sure which task to choose?</p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight">
              Find a practical place to start with AI.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
              Answer three questions to get a suggested task plan and a
              matching resource. It’s free, and you don’t need to leave an email.
            </p>
          </div>
          <Link href="/audit" className="text-link">
            Try the free AI business check{" "}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
