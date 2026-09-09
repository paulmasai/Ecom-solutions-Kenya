import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    title: "Start with your business.",
    description:
      "We talk about what you do, what takes up your time and where AI could make a useful difference.",
  },
  {
    title: "Learn it. Build it. Use it.",
    description:
      "Work one-to-one with us on your actual tasks. Build at least one practical workflow during your coaching.",
  },
  {
    title: "Make it part of your day.",
    description:
      "Leave with recordings, prompts and a clear process. Get the follow-through included in your package.",
  },
];

export function Process() {
  return (
    <section id="how-it-works" className="section-space border-y bg-[#edeee7]">
      <div className="site-container grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
        <div className="scroll-reveal lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">Human guidance. Real implementation.</p>
          <h2 className="section-heading mt-4">
            We build
            <br />
            <span className="font-editorial italic">with you.</span>
          </h2>
          <p className="mt-6 max-w-sm leading-7 text-muted-foreground">
            Practical coaching, shaped around your business. From “where do I
            start?” to “I can do this.”
          </p>
          <Link href="/about" className="text-link mt-6">
            Get to know our approach{" "}
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
