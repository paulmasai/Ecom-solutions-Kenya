"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, Check, ChevronDown, Copy, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  buildServicePlan, businessTypes, metaChannels, needs, platforms, services,
  servicePlanFromParams, servicePlanHref, servicePlanSummary, stages,
  type PlannerInput,
} from "@/lib/service-planner";

export function ServicePlanner() {
  const params = useSearchParams();
  const initial = servicePlanFromParams(params);
  return <PlannerForm key={initial ? servicePlanHref(initial) : "empty"} initial={initial ? {
    needs: initial.needs.map((need) => need.id), business: initial.business.id,
    stage: initial.stage.id, platform: initial.platform?.id,
    channels: initial.channels.map((channel) => channel.id),
  } : { needs: [] }} />;
}

function PlannerForm({ initial }: { initial: PlannerInput }) {
  const [input, setInput] = useState<PlannerInput>(initial);
  const [copyStatus, setCopyStatus] = useState("");
  const [showCopy, setShowCopy] = useState(false);
  const copyAttempt = useRef(0);
  const firstChoice = useRef<HTMLInputElement>(null);
  const result = useRef<HTMLElement>(null);
  const plan = buildServicePlan(input);
  const summary = plan ? servicePlanSummary(plan) : "";

  function change(next: PlannerInput) {
    copyAttempt.current += 1;
    setCopyStatus("");
    setShowCopy(false);
    setInput(next);
  }

  function toggleNeed(id: string) {
    const next = { ...input, needs: input.needs.includes(id)
      ? input.needs.filter((value) => value !== id) : [...input.needs, id] };
    const nextPlan = buildServicePlan(next);
    change({ ...next, platform: nextPlan?.platform?.id, channels: nextPlan?.channels.map((channel) => channel.id) ?? [] });
  }

  async function copyPlan() {
    const attempt = ++copyAttempt.current;
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(summary);
      if (attempt === copyAttempt.current) setCopyStatus("Plan copied. You can paste it into a message.");
    } catch {
      if (attempt !== copyAttempt.current) return;
      setShowCopy(true);
      setCopyStatus("Automatic copying is unavailable. Select and copy your plan below.");
    }
  }

  return (
    <div className="site-container grid items-start gap-10 pb-20 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
      <div className="min-w-0">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-x-4">
          <h2 className="text-xl font-semibold tracking-tight">What could work better?</h2>
          <button type="button" onClick={() => { change({ needs: [] }); firstChoice.current?.focus(); }} className="text-link font-normal text-muted-foreground">
            <RotateCcw className="size-4" aria-hidden="true" /> Start again
          </button>
        </div>
        <fieldset>
          <legend className="mb-5 text-sm leading-6 text-muted-foreground">Select all the business needs that apply.</legend>
          <div className="divide-y border-y">
            {needs.map((need, index) => (
              <label key={need.id} className={`flex cursor-pointer items-start gap-4 px-3 py-4 transition-colors hover:bg-secondary ${input.needs.includes(need.id) ? "bg-accent/60" : ""}`}>
                <input ref={index === 0 ? firstChoice : undefined} type="checkbox" checked={input.needs.includes(need.id)} onChange={() => toggleNeed(need.id)} className="mt-1 size-5 shrink-0 accent-primary" aria-describedby={`need-${need.id}-description`} />
                <span>
                  <span className="block text-sm font-semibold leading-6">{need.name}</span>
                  <span id={`need-${need.id}-description`} className="mt-1 block text-sm leading-6 text-muted-foreground">{need.description}</span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>
        <button type="button" disabled={!plan} onClick={() => { result.current?.focus(); result.current?.scrollIntoView({ block: "start", behavior: "instant" }); }} className="text-link mt-3 lg:hidden disabled:opacity-50">
          View my plan{plan ? ` (${plan.needs.length} selected)` : ""}<ArrowUpRight className="size-4" aria-hidden="true" />
        </button>
        <fieldset className="mt-9">
          <legend className="text-xl font-semibold tracking-tight">Make it yours <span className="text-sm font-normal text-muted-foreground">(optional)</span></legend>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="planner-business" className="field-label">What kind of business?</label>
              <select id="planner-business" className="form-control" value={input.business ?? "unspecified"} onChange={(event) => change({ ...input, business: event.target.value })}>
                {businessTypes.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="planner-stage" className="field-label">Where are you now?</label>
              <select id="planner-stage" className="form-control" value={input.stage ?? "exploring"} onChange={(event) => change({ ...input, stage: event.target.value })}>
                {stages.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
              </select>
            </div>
            {plan?.platform && <div className="sm:col-span-2">
              <label htmlFor="planner-platform" className="field-label">Preferred AI platform</label>
              <select id="planner-platform" className="form-control" value={plan.platform.id} onChange={(event) => change({ ...input, platform: event.target.value })}>
                {platforms.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
              </select>
            </div>}
          </div>
          {plan?.serviceIds.includes("meta") && <fieldset className="mt-6">
            <legend className="field-label">Which Meta channels?</legend>
            <div className="mt-2 flex flex-wrap gap-x-5">
              {metaChannels.map((channel) => <label key={channel.id} className="inline-flex min-h-12 cursor-pointer items-center gap-2 text-sm">
                <input type="checkbox" checked={input.channels?.includes(channel.id) ?? false} onChange={() => change({ ...input, channels: input.channels?.includes(channel.id) ? input.channels.filter((id) => id !== channel.id) : [...(input.channels ?? []), channel.id] })} className="size-4 accent-primary" />
                {channel.label}
              </label>)}
            </div>
          </fieldset>}
        </fieldset>
        <p className="mt-7 text-xs leading-6 text-muted-foreground">Your selected options carry into the booking page. Nothing is sent to us until you choose a contact option and send your enquiry.</p>
      </div>
      <section ref={result} id="your-plan" tabIndex={-1} aria-labelledby="plan-heading" className="min-w-0 scroll-mt-24 rounded-lg border bg-white p-6 sm:p-8 lg:sticky lg:top-28">
        <h2 id="plan-heading" className="text-xl font-semibold tracking-tight">Your suggested plan</h2>
        <p role="status" aria-atomic="true" className="mt-2 text-sm leading-6 text-muted-foreground">{plan ? `${plan.needs.length} ${plan.needs.length === 1 ? "need" : "needs"} selected · Start with ${services[plan.primary].name}` : "Choose a business need to find a starting point."}</p>
        {plan ? <>
          <h3 className="mt-7 text-3xl leading-tight font-medium tracking-[-0.03em]">{services[plan.primary].name}</h3>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">{services[plan.primary].description}</p>
          <p className="mt-5 text-sm leading-6"><span className="font-semibold">Why this fits: </span>{plan.primary === "business-os" ? "You want connected tools or a clearer view of operations, so we start with how the system fits together." : "This service matches your main selected needs. We can agree on the first task together."}</p>
          {plan.serviceIds.length > 1 && <div className="mt-6 border-t pt-5">
            <h4 className="text-sm font-semibold">Also include in the conversation</h4>
            <ul className="mt-3 space-y-3">{plan.serviceIds.slice(1).map((id) => <li key={id} className="flex items-start gap-2 text-sm leading-6"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />{services[id].name}</li>)}</ul>
          </div>}
          <details className="mt-6 border-y py-3">
            <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-3 text-sm font-semibold">Review the plan to carry into booking<ChevronDown className="size-4 shrink-0" aria-hidden="true" /></summary>
            <pre className="mt-3 font-sans text-sm leading-7 whitespace-pre-wrap break-words">{summary}</pre>
          </details>
          <p className="mt-5 text-xs leading-6 text-muted-foreground">A starting point for discussion. We’ll confirm scope, tool access, pricing and any separate subscriptions before work begins.</p>
          <Button asChild size="lg" className="mt-6 min-h-12 w-full"><Link href={servicePlanHref(plan)}>Discuss my plan <ArrowUpRight className="size-4" aria-hidden="true" /></Link></Button>
          <button type="button" onClick={copyPlan} className="text-link mt-2 w-full justify-center font-normal"><Copy className="size-4" aria-hidden="true" /> Copy my plan</button>
          <p role="status" className="text-sm leading-6 text-muted-foreground">{copyStatus}</p>
          {showCopy && <div className="mt-4"><label htmlFor="plan-copy" className="field-label">Select and copy your plan</label><textarea ref={(node) => { node?.focus(); node?.select(); }} id="plan-copy" readOnly value={summary} rows={8} className="form-control" onFocus={(event) => event.currentTarget.select()} /></div>}
        </> : <div className="mt-7 border-t pt-6">
          <p className="text-2xl leading-snug font-editorial italic">Start with the work<br />on your plate.</p>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">Your choices will suggest automation, an AI assistant, connected business operations or Meta support. You can combine services.</p>
          <Button type="button" disabled size="lg" className="mt-7 w-full">Discuss my plan</Button>
        </div>}
        <Link href="/book" className="text-link mt-4 w-full justify-center text-center text-xs font-normal text-muted-foreground">Prefer to talk first? Go straight to booking.</Link>
      </section>
    </div>
  );
}
