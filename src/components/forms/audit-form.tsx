"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Download, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { downloadText } from "@/lib/download";

const opportunities = {
  replies: {
    title: "Build a set of replies you can reuse.",
    description:
      "Start with the price, stock and delivery questions you answer most often. Give AI your confirmed details and use it to draft replies you can check and adapt.",
    steps: [
      "List five common questions from your WhatsApp chats, DMs or shop conversations. Leave out private customer details.",
      "Write down the correct answer using your real delivery, pricing and returns information.",
      "Ask AI for a short reply using only those facts, in the language your customer used. Check any translation.",
      "Review every draft before sending and keep the versions that work.",
    ],
    measure:
      "Compare the time it takes to draft five replies, and check each one for accuracy and tone.",
    resource: "/resources/customer-reply-prompts.txt",
  },
  content: {
    title: "Turn one customer question into three posts.",
    description:
      "Use a question you already know how to answer. Turn it into helpful content for WhatsApp Status, Instagram or Facebook, then edit it in your own voice.",
    steps: [
      "Choose one question your audience regularly asks.",
      "Write down your answer, including a real example from your work.",
      "Ask AI to draft three posts: a direct answer, a useful tip and an explanation of your product or service.",
      "Check the facts, add one next step for each reader and choose when to publish on your usual channels.",
    ],
    measure:
      "Track your drafting time and the conversations each post creates. Refine the formats that are useful to your audience.",
    resource: "/resources/content-planning-workbook.txt",
  },
  followup: {
    title: "Give each enquiry an owner and a next step.",
    description:
      "Bring order to enquiries from WhatsApp, DMs, calls or forms. Test a simple follow-up process with your team before connecting automation tools.",
    steps: [
      "Write down where enquiries arrive and who is responsible for each one.",
      "Use a shared sheet or your existing system to record the enquiry, who handles it and when to follow up.",
      "Draft a reusable follow-up message for your team to review.",
      "Test the process manually on a few enquiries before connecting automation.",
    ],
    measure:
      "Check whether each enquiry has an owner and a next action, and track how long it waits for a follow-up.",
    resource: "/resources/automation-checklist.txt",
  },
} as const;

type Result = {
  task: keyof typeof opportunities;
  business: string;
  goal: string;
};

export function AuditForm() {
  const [result, setResult] = useState<Result | null>(null);
  const heading = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (result) heading.current?.focus();
  }, [result]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const task = String(data.get("task"));
    if (task !== "replies" && task !== "content" && task !== "followup") return;
    setResult({
      task,
      business: String(data.get("business")),
      goal: String(data.get("goal")),
    });
  }

  if (result) {
    const suggestion = opportunities[result.task];
    const brief = [
      "Your AI business check plan — E Commerce Solutions Kenya",
      "",
      `Business: ${result.business}`,
      `Goal: ${result.goal}`,
      "",
      suggestion.title,
      suggestion.description,
      "",
      ...suggestion.steps.map((step, index) => `${index + 1}. ${step}`),
      "",
      "How to check if it helps",
      suggestion.measure,
      "",
      "This self-guided plan is selected by your chosen task. Adapt the steps to your business; it is not a personalised assessment.",
    ].join("\n");
    return (
      <div
        ref={heading}
        tabIndex={-1}
        className="rounded-lg border bg-white p-6 sm:p-10"
      >
        <p className="eyebrow">Your suggested task plan</p>
        <h2 className="mt-4 text-3xl leading-tight font-medium tracking-tight">
          {suggestion.title}
        </h2>
        <p className="mt-5 leading-7 text-muted-foreground">
          {suggestion.description}
        </p>
        <div className="my-7 grid gap-3 rounded-md bg-secondary p-5 text-sm sm:grid-cols-2">
          <p>
            <span className="block text-xs text-muted-foreground">
              Your business
            </span>
            <span className="mt-1 block">{result.business}</span>
          </p>
          <p>
            <span className="block text-xs text-muted-foreground">
              Your priority
            </span>
            <span className="mt-1 block">{result.goal}</span>
          </p>
        </div>
        <h3 className="font-semibold">Your first four steps</h3>
        <ol className="mt-5 space-y-4">
          {suggestion.steps.map((step, index) => (
            <li key={step} className="flex gap-3 text-sm leading-6">
              <span className="font-semibold text-primary">0{index + 1}</span>
              {step}
            </li>
          ))}
        </ol>
        <div className="mt-7 border-t pt-6">
          <h3 className="flex items-center gap-2 text-sm font-semibold">
            <Check className="size-4 text-primary" aria-hidden="true" />
            How to check if it helps
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            {suggestion.measure}
          </p>
        </div>
        <p className="mt-6 text-xs leading-6 text-muted-foreground">
          Your chosen task selects this plan. Adapt the steps to your business;
          this is not a personalised assessment. We haven’t saved or sent your
          answers. Download the plan to keep it.
        </p>
        <div className="no-print mt-7 flex flex-wrap gap-3">
          <Button
            type="button"
            className="h-12"
            onClick={() => downloadText("my-ai-opportunity.txt", brief)}
          >
            <Download className="size-4" aria-hidden="true" />
            Download my plan
          </Button>
          <Button asChild variant="outline" className="h-12">
            <a href={suggestion.resource} download>
              Download matching resource{" "}
              <Download className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
        <div className="no-print mt-5 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/book"
            className="text-link"
          >
            Discuss AI coaching{" "}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setResult(null)}
            className="text-link font-normal text-muted-foreground"
          >
            <RotateCcw className="size-3.5" aria-hidden="true" />
            Try another task
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-lg border bg-white p-6 sm:p-10">
      <p className="eyebrow">Three questions · No sign-up</p>
      <div className="mt-8 space-y-7">
        <div>
          <label htmlFor="audit-business" className="field-label">
            01. What best describes your business?
          </label>
          <select
            id="audit-business"
            name="business"
            required
            defaultValue=""
            className="form-control"
          >
            <option value="" disabled>
              Select your business type
            </option>
            <option>Shop or online store</option>
            <option>Service business</option>
            <option>Creator, coach or consultant</option>
            <option>Agency or established team</option>
            <option>Another kind of business</option>
          </select>
        </div>
        <div>
          <label htmlFor="audit-task" className="field-label">
            02. Which task takes too much of your time?
          </label>
          <select
            id="audit-task"
            name="task"
            required
            defaultValue=""
            className="form-control"
          >
            <option value="" disabled>
              Choose one task to explore
            </option>
            <option value="replies">Answering customer questions</option>
            <option value="content">Creating content consistently</option>
            <option value="followup">Organising leads and following up</option>
          </select>
        </div>
        <div>
          <label htmlFor="audit-goal" className="field-label">
            03. What would help your business most?
          </label>
          <select
            id="audit-goal"
            name="goal"
            required
            defaultValue=""
            className="form-control"
          >
            <option value="" disabled>
              Choose your main goal
            </option>
            <option>More time for customers</option>
            <option>More consistent marketing</option>
            <option>A more organised team</option>
            <option>More time to grow my business</option>
          </select>
        </div>
      </div>
      <Button type="submit" size="lg" className="mt-8 h-12 w-full sm:w-auto">
        Show my suggested plan{" "}
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </Button>
      <p className="mt-5 text-xs leading-6 text-muted-foreground">
        All three questions are required. We don’t save or send your answers.
        You can download your plan on the next screen.
      </p>
      <noscript>
        <p className="mt-4 text-sm">
          Enable JavaScript to use the business check, or download a checklist from our
          resources page.
        </p>
      </noscript>
    </form>
  );
}
