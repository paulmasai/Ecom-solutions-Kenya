"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  MessageSquare,
  PenLine,
  Workflow,
} from "lucide-react";
import { cn } from "@/lib/utils";

const outcomes = [
  {
    label: "Business owners",
    icon: MessageSquare,
    title: "Give every customer a better reply.",
    description:
      "Turn the questions you answer every day into a consistent, helpful response workflow. Keep your voice. Get your time back.",
    inputLabel: "A familiar customer question",
    input: "“Hi! Is this available, and do you deliver to Nakuru?”",
    outputLabel: "Your business knowledge + AI",
    output:
      "A clear draft with the right product details, delivery information and next step — ready for you to check.",
    takeaway: "Less typing. More personal conversations.",
  },
  {
    label: "Creators & coaches",
    icon: PenLine,
    title: "One good idea. A week of content.",
    description:
      "Build a repeatable way to turn your expertise into useful posts, captions and emails that sound like you.",
    inputLabel: "Start with what you know",
    input: "One topic, a voice note or a video you’ve already made.",
    outputLabel: "Your expertise + a content workflow",
    output:
      "A set of post ideas, draft captions and an email outline, shaped around your audience and ready for your edit.",
    takeaway: "More consistency. Less blank-page time.",
  },
  {
    label: "Teams & agencies",
    icon: Workflow,
    title: "Keep good leads moving forward.",
    description:
      "Connect the repetitive steps between an enquiry and a follow-up, so your team can focus on the conversation.",
    inputLabel: "A new enquiry comes in",
    input: "A potential customer shares what they need through your form.",
    outputLabel: "A clear process + automation",
    output:
      "An organised lead record, a notification for the right person and a follow-up draft for review.",
    takeaway: "Clear ownership. Fewer missed follow-ups.",
  },
];

export function Outcomes() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = outcomes[active];

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % outcomes.length;
    else if (event.key === "ArrowLeft")
      next = (index - 1 + outcomes.length) % outcomes.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = outcomes.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <section id="outcomes" className="section-space">
      <div className="site-container">
        <div className="scroll-reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow">Made for the way you work</p>
            <h2 className="section-heading mt-4">
              Big possibilities.
              <br />
              <span className="font-editorial italic">
                Everyday applications.
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-muted-foreground">
            You don’t need another tool to figure out. You need a better way to
            get things done.
          </p>
        </div>
        <div
          role="tablist"
          aria-label="Explore AI for your business"
          className="mt-12 grid grid-cols-3 border-b"
        >
          {outcomes.map((outcome, index) => (
            <button
              key={outcome.label}
              ref={(element) => {
                tabs.current[index] = element;
              }}
              id={`outcome-tab-${index}`}
              role="tab"
              type="button"
              aria-selected={active === index}
              aria-controls={`outcome-panel-${index}`}
              tabIndex={active === index ? 0 : -1}
              onKeyDown={(event) => navigate(event, index)}
              onClick={() => setActive(index)}
              className={cn(
                "flex min-h-16 items-center justify-center gap-3 border-b-2 px-2 py-4 text-center text-xs font-semibold transition-colors sm:text-sm",
                active === index
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              <outcome.icon
                className="hidden size-4 sm:block"
                aria-hidden="true"
              />
              {outcome.label}
            </button>
          ))}
        </div>
        {outcomes.map((outcome, index) => (
          <div
            key={outcome.label}
            id={`outcome-panel-${index}`}
            role="tabpanel"
            aria-labelledby={`outcome-tab-${index}`}
            hidden={active !== index}
            tabIndex={0}
          >
            {active === index && (
              <div className="grid items-center gap-10 pt-10 lg:grid-cols-[0.95fr_1fr] lg:gap-20">
                <div className="hero-enter">
                  <span className="text-xs font-medium text-muted-foreground">
                    0{index + 1} / A PRACTICAL STARTING POINT
                  </span>
                  <h3 className="mt-5 max-w-md text-3xl leading-tight font-medium tracking-tight sm:text-4xl">
                    {current.title}
                  </h3>
                  <p className="mt-5 max-w-md leading-7 text-muted-foreground">
                    {current.description}
                  </p>
                  <Link href="/ai-coaching" className="text-link mt-6">
                    Find your starting point{" "}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
                <div className="hero-enter rounded-lg bg-secondary p-6 sm:p-9">
                  <p className="mb-6 text-[10px] font-semibold tracking-[0.15em] text-muted-foreground">
                    EXAMPLE WORKFLOW
                  </p>
                  <div className="border-l-2 border-primary/30 pl-5">
                    <p className="text-xs font-semibold text-primary">
                      {current.inputLabel}
                    </p>
                    <p className="mt-3 text-base leading-6">{current.input}</p>
                  </div>
                  <ArrowRight
                    className="my-5 ml-5 size-5 rotate-90 text-primary"
                    aria-hidden="true"
                  />
                  <div className="border-l-2 border-primary pl-5">
                    <p className="text-xs font-semibold text-primary">
                      {current.outputLabel}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {current.output}
                    </p>
                  </div>
                  <p className="mt-8 flex items-center gap-2 border-t border-foreground/10 pt-5 text-xs font-medium">
                    <Check
                      className="size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    {current.takeaway}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
