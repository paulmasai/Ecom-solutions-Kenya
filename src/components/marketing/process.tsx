import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    title: "Choose a task worth improving.",
    description:
      "Tell us what you sell or do, which tools you use and what keeps you busy. We agree on a priority, the work involved and the price before coaching starts.",
  },
  {
    title: "Build it together in a live session.",
    description:
      "Join online and work through your own business examples with guidance. During coaching, we build at least one useful workflow and show you how to check the results.",
  },
  {
    title: "Keep using it after coaching.",
    description:
      "Use your recordings, prompts and written steps to practise. Growth includes two weeks of WhatsApp support; Pro VIP includes 30 days of implementation support.",
  },
];

export function Process() {
  return (
    <section id="how-it-works" className="section-space border-y bg-[#edeee7]">
      <div className="site-container grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
        <div className="scroll-reveal lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">How AI coaching works</p>
          <h2 className="section-heading mt-4">
            Learn by doing,
            <br />
            <span className="font-editorial italic">with guidance.</span>
          </h2>
          <p className="mt-6 max-w-sm leading-7 text-muted-foreground">
            Bring a real task from your business. We’ll work through it with
            you, step by step, so you understand how to do it again.
          </p>
          <Link href="/about" className="text-link mt-6">
            Read about our approach{" "}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <ol>
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="scroll-reveal grid grid-cols-[2.5rem_1fr] gap-5 border-t border-foreground/20 py-8 first:pt-0 first:border-0 sm:gap-8"
            >
              <span className="pt-1 font-editorial text-3xl italic text-primary">
                0{index + 1}
              </span>
              <div>
                <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
