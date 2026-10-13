import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
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

      {/* Main about section */}
      <section className="site-container grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-20">
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

      {/* Principles section */}
      <section className="border-y bg-[#edeee7]">
        <div className="site-container py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Our coaching principles</p>
            <h2 className="section-heading mt-4">
              Practical.{" "}
              <span className="font-editorial italic">Honest. Useful.</span>
            </h2>
            <p className="mt-6 leading-7 text-muted-foreground">
              We don’t teach AI as a magic solution. We help you find the tasks
              where it genuinely saves time, and we build those processes with
              you during the session.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Start with one task.",
                description:
                  "Broad AI courses teach tools. We teach you how to use AI on a specific thing you need to do this week.",
              },
              {
                title: "You check every draft.",
                description:
                  "AI makes mistakes. We show you how to spot them so you send messages that are accurate and sound like you.",
              },
              {
                title: "You keep what we build.",
                description:
                  "Session recordings, prompt templates and step-by-step notes are yours to use and adapt after coaching ends.",
              },
            ].map((principle) => (
              <div
                key={principle.title}
                className="rounded-lg border bg-white p-7"
              >
                <h3 className="text-lg font-semibold tracking-tight">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA bridge */}
      <section className="site-container py-16">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-medium tracking-tight">
              Ready to try AI on a real business task?
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Start with a free AI business check, or discuss a package that fits your work.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 sm:shrink-0">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Discuss AI coaching{" "}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            <Link href="/audit" className="text-link text-xs">
              Try the free AI business check{" "}
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
