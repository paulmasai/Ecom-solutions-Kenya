import Image from "next/image";
import { Check } from "lucide-react";
import { PageIntro } from "@/components/site/page-intro";
import { FinalCTA } from "@/components/marketing/final-cta";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Our AI Coaching Approach",
  "See how E Commerce Solutions Kenya teaches AI through real business tasks, live guidance and reusable templates, with scope and costs agreed upfront.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="E Commerce Solutions Kenya"
        title="AI coaching that starts with your business."
        description="You know your customers and your work. We help you use that knowledge with AI to draft replies, plan content and make repeated tasks easier to manage."
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
          <p className="eyebrow">What you can expect from us</p>
          <h2 className="section-heading mt-4">
            Bring your work.
            <br />
            <span className="font-editorial italic">Build your skills.</span>
          </h2>
          <p className="mt-6 leading-7 text-muted-foreground">
            Between serving customers, checking orders and keeping up with
            marketing, finding time to learn another tool can be difficult.
            Our sessions use tasks you already need to do, with examples that
            fit your customers, your budget and the way you work.
          </p>
          <p className="mt-5 leading-7 text-muted-foreground">
            We explain each step, build alongside you and write down the
            process so you can use it again. You stay in charge of the prices,
            promises and messages your business shares with customers.
          </p>
          <ul className="mt-8 space-y-5">
            {[
              "Practise with tasks from your own business.",
              "Learn how to check and improve AI drafts.",
              "Keep recordings, templates and steps you can reuse.",
              "Agree on the work and costs before you commit.",
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
