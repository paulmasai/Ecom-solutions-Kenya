import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { faqs } from "@/lib/content";

export function FAQ() {
  return (
    <section className="section-space border-t">
      <div className="site-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow">AI coaching FAQs</p>
          <h2 className="section-heading mt-4">
            Before you
            <br />
            <span className="font-editorial italic">get started.</span>
          </h2>
          <Link href="/contact" className="text-link mt-7">
            Ask about AI coaching{" "}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div>
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border-b first:border-t"
            >
              <summary className="flex min-h-19 list-none items-center justify-between gap-6 py-5 text-sm font-semibold [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Plus
                  className="size-4 shrink-0 text-primary transition-transform group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-xl pb-6 pr-8 text-sm leading-7 text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
