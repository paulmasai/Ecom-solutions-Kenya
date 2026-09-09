import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/site/page-intro";
import { ResourceList } from "@/components/marketing/resource-list";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Free AI Resources",
  "Download practical customer reply prompts, a content planning workbook and an automation checklist. Free resources for Kenyan businesses.",
  "/resources",
);

export default function ResourcesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Useful before you book"
        title="A little help for your next big step."
        description="Simple prompts and practical starting points for your everyday work. Download them, make them your own and see what helps."
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
            <p className="eyebrow">Find your starting point</p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight">
              Where could AI help your business?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
              Try a short, self-guided opportunity audit and leave with a
              workflow to explore. No email address needed.
            </p>
          </div>
          <Link href="/audit" className="text-link">
            Try the free audit{" "}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
