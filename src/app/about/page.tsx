import Image from "next/image";
import { Check } from "lucide-react";
import { PageIntro } from "@/components/site/page-intro";
import { FinalCTA } from "@/components/marketing/final-cta";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Our Approach",
  "AI coaching grounded in the everyday work of Kenyan businesses. Human guidance, practical implementation and tools you can keep using.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="E Commerce Solutions Kenya"
        title="Technology should give you more time for your business."
        description="We help Kenyan business owners, creators and teams turn AI into something practical: a better reply, a simpler process, or a more consistent way to show up."
      />
      <section className="site-container grid items-center gap-12 pb-20 lg:grid-cols-2 lg:gap-20">
        <div className="relative aspect-[4/5] max-h-[580px] overflow-hidden rounded-lg">
          <Image
            src="/images/business-owner.jpg"
            alt="A business professional working with a laptop and notebook"
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">The work comes first</p>
          <h2 className="section-heading mt-4">
            Keep the human.
            <br />
            <span className="font-editorial italic">Improve the process.</span>
          </h2>
          <p className="mt-6 leading-7 text-muted-foreground">
            Running a business already asks a lot of you. Learning AI should
            start with the work on your desk, using examples that fit your
            customers, your voice and your priorities.
          </p>
          <p className="mt-5 leading-7 text-muted-foreground">
            Our coaching combines explanation with implementation. We build
            alongside you, document what works and help you make it a repeatable
            part of your day.
          </p>
          <ul className="mt-8 space-y-5">
            {[
              "Your business context shapes the work.",
              "You review what AI creates.",
              "You leave with usable workflows and materials.",
              "Your scope and costs are agreed in advance.",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-6"
              >
                <Check
                  className="mt-1 size-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
