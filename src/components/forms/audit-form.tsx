"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Download, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { downloadText } from "@/lib/download";

const opportunities = {
  replies: {
    title: "Start with a customer reply workflow.",
    description:
      "Create a small library of accurate answers to your most common questions, then use AI to help adapt the wording.",
    steps: [
      "List five questions your customers ask most often.",
      "Write down the correct answer using your real delivery, pricing and returns information.",
      "Ask AI to draft a friendly reply using only those facts.",
      "Review every draft before sending and keep the versions that work.",
    ],
    measure:
      "Compare the time it takes to draft five replies, and check each one for accuracy and tone.",
    resource: "/resources/customer-reply-prompts.txt",
  },
  content: {
    title: "Start with a repeatable content workflow.",
    description:
      "Turn one useful idea from your business into a small set of posts you can review, refine and publish.",
    steps: [
      "Choose one question your audience regularly asks.",
      "Write down your answer, including a real example from your work.",
      "Use AI to draft three different posts from that one idea.",
      "Edit the facts and voice, then schedule the posts on your usual channels.",
    ],
    measure:
      "Track your drafting time and the conversations each post creates. Refine the formats that are useful to your audience.",
    resource: "/resources/content-planning-workbook.txt",
  },
  followup: {
    title: "Start with a clear lead follow-up process.",
    description:
      "Map what happens after an enquiry and make one repeatable step easier before automating the whole process.",
    steps: [
      "Write down where enquiries arrive and who is responsible for each one.",
      "Create a simple record with the enquiry, its owner and the next action.",
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
      "Your AI business opportunity — E Commerce Solutions Kenya",
      "",
      `Business: ${result.business}`,
      `Goal: ${result.goal}`,
      "",
      suggestion.title,
      suggestion.description,
      "",
      ...suggestion.steps.map((step, index) => `${index + 1}. ${step}`),
      "",
      "What to measure",
      suggestion.measure,
      "",
      "This is a self-guided starting point based on your selected task, not a personalised business assessment.",
    ].join("\n");
    return (
      <div
        ref={heading}
        tabIndex={-1}
        className="rounded-lg border bg-white p-6 sm:p-10"
      >
        <p className="eyebrow">Your starting point</p>
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
            What to measure
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            {suggestion.measure}
          </p>
        </div>
        <p className="mt-6 text-xs leading-6 text-muted-foreground">
          This self-guided suggestion is based on the task you selected. It is a
          starting point to explore, not a personalised business assessment.
          Your answers have not been stored or sent.
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
              Get the matching template{" "}
              <Download className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
        <div className="no-print mt-5 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/book"
            className="text-link"
          >
            Build it with us{" "}
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
      <p className="eyebrow">Three questions. One useful direction.</p>
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
            03. What would you like to make room for?
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
        Find my starting point{" "}
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </Button>
      <p className="mt-5 text-xs leading-6 text-muted-foreground">
        No email needed. Your answers stay in this page. You can download your
        suggested plan at the end.
      </p>
      <noscript>
        <p className="mt-4 text-sm">
          Enable JavaScript to use the audit, or download a checklist from our
          resources page.
        </p>
      </noscript>
    </form>
  );
}
