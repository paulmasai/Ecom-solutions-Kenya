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
    label: "Shops & services",
    icon: MessageSquare,
    title: "Answer customer questions without starting from scratch.",
    description:
      "Still typing the same answers about prices, stock and delivery? Build reply templates for your shop, salon or restaurant, then use AI to adapt each draft.",
    inputLabel: "A familiar customer question",
    input: "“Hi! Is this available, and do you deliver to Nakuru?”",
    outputLabel: "Draft from your confirmed details",
    output:
      "A reply covering availability, your delivery fee and the next step. You supply the facts, check the wording and send it yourself.",
    takeaway: "Reusable replies that still sound like your business.",
  },
  {
    label: "Creators & coaches",
    icon: PenLine,
    title: "Turn what you know into posts worth reading.",
    description:
      "Use your own ideas to draft Instagram captions, WhatsApp Status updates and emails. Build a plan you can return to when client work gets busy.",
    inputLabel: "Start with what you know",
    input: "A question a client asked, or a tip from a video you’ve already made.",
    outputLabel: "One idea, several useful drafts",
    output:
      "Three post angles and an email outline, each with a clear next step for the reader. Add your voice and check the facts before publishing.",
    takeaway: "A content routine you can repeat each week.",
  },
  {
    label: "Teams & agencies",
    icon: Workflow,
    title: "Give every enquiry a clear next step.",
    description:
      "When enquiries arrive in different places, follow-ups are easy to miss. Map who responds, what happens next and which repeated steps you can automate.",
    inputLabel: "A new enquiry comes in",
    input: "A potential customer asks your team for a quotation.",
    outputLabel: "Record, assign, then follow up",
    output:
      "A record of the enquiry, a reminder for the person handling it and a follow-up draft to check before sending.",
    takeaway: "A shared process your team can follow.",
  },
];

export function Outcomes() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

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
            <p className="eyebrow">AI for your everyday business tasks</p>
            <h2 className="section-heading mt-4">
              What could you
              <br />
              <span className="font-editorial italic">
                use AI for?
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-muted-foreground">
            Start with the work already on your plate. These examples show
            what we can build and practise together during coaching.
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
            <div className="grid items-center gap-10 pt-10 lg:grid-cols-[0.95fr_1fr] lg:gap-20">
              <div className="hero-enter">
                <span className="text-xs font-medium text-muted-foreground">
                  0{index + 1} / A PRACTICAL STARTING POINT
                </span>
                <h3 className="mt-5 max-w-md text-3xl leading-tight font-medium tracking-tight sm:text-4xl">
                  {outcome.title}
                </h3>
                <p className="mt-5 max-w-md leading-7 text-muted-foreground">
                  {outcome.description}
                </p>
                <Link href="/ai-coaching" className="text-link mt-6">
                  Compare coaching packages{" "}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="hero-enter rounded-lg bg-secondary p-6 sm:p-9">
                <p className="mb-6 text-[10px] font-semibold tracking-[0.15em] text-muted-foreground">
                  EXAMPLE WORKFLOW
                </p>
                <div className="border-l-2 border-primary/30 pl-5">
                  <p className="text-xs font-semibold text-primary">
                    {outcome.inputLabel}
                  </p>
                  <p className="mt-3 text-base leading-6">{outcome.input}</p>
                </div>
                <ArrowRight
                  className="my-5 ml-5 size-5 rotate-90 text-primary"
                  aria-hidden="true"
                />
                <div className="border-l-2 border-primary pl-5">
                  <p className="text-xs font-semibold text-primary">
                    {outcome.outputLabel}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {outcome.output}
                  </p>
                </div>
                <p className="mt-8 flex items-center gap-2 border-t border-foreground/10 pt-5 text-xs font-medium">
                  <Check
                    className="size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  {outcome.takeaway}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
