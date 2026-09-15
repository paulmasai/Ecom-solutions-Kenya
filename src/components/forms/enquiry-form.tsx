"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Download, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl, siteConfig } from "@/lib/constants";
import { packages } from "@/lib/content";
import { downloadText } from "@/lib/download";
import { services, servicePlanFromParams, servicePlanHref, servicePlanSummary, type ServicePlan } from "@/lib/service-planner";

type Fields = "name" | "email" | "business" | "message";

export function BookingEnquiry() {
  const params = useSearchParams();
  const selected =
    packages.find((pkg) => pkg.slug === params.get("package"))?.slug ?? "";
  const servicePlan = servicePlanFromParams(params);
  return <EnquiryForm key={servicePlan ? servicePlanHref(servicePlan) : selected} initialPackage={selected} initialPlan={servicePlan} booking />;
}

export function EnquiryForm({
  initialPackage = "",
  initialPlan = null,
  booking = false,
}: {
  initialPackage?: string;
  initialPlan?: ServicePlan | null;
  booking?: boolean;
}) {
  const [summary, setSummary] = useState("");
  const [draft, setDraft] = useState({
    name: "",
    email: "",
    business: initialPlan && initialPlan.business.id !== "unspecified" ? initialPlan.business.label : "",
    message: initialPlan ? servicePlanSummary(initialPlan) : "",
    package: initialPackage,
  });
  const [errors, setErrors] = useState<Partial<Record<Fields, string>>>({});
  const result = useRef<HTMLDivElement>(null);
  const nameInput = useRef<HTMLInputElement>(null);
  const hasContact = Boolean(
    siteConfig.whatsappNumber || siteConfig.contactEmail,
  );

  useEffect(() => {
    if (summary) result.current?.focus();
    else if (draft.name) nameInput.current?.focus();
  }, [summary, draft.name]);

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const business = String(data.get("business") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const selected = initialPlan
      ? initialPlan.serviceIds.map((id) => services[id].name).join("; ")
      :
      packages.find((pkg) => pkg.slug === data.get("package"))?.name ??
      "Please help me choose a package";
    const nextErrors: Partial<Record<Fields, string>> = {};
    if (name.length < 2)
      nextErrors.name = "Enter your name using at least 2 characters.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email =
        "Use an email address like you@example.com, or leave this field blank.";
    if (business.length < 2)
      nextErrors.business = "Enter your business name or type using at least 2 characters.";
    if (message.length < 10)
      nextErrors.message =
        "Describe the task you need help with using at least 10 characters.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      const first = Object.keys(nextErrors)[0];
      (event.currentTarget.elements.namedItem(first) as HTMLElement)?.focus();
      return;
    }
    setDraft({
      name,
      email,
      business,
      message,
      package: String(data.get("package") ?? ""),
    });
    setSummary(
      [
        initialPlan
          ? "AI services conversation — enquiry"
          : booking
          ? "AI coaching conversation — enquiry"
          : "E Commerce Solutions Kenya — enquiry",
        "",
        `Name: ${name}`,
        ...(email ? [`Email: ${email}`] : []),
        `Business: ${business}`,
        `Interested in: ${selected}`,
        "",
        "What I’d like help with:",
        message,
      ].join("\n"),
    );
  }

  if (summary) {
    const whatsapp = getWhatsAppUrl(summary);
    const email = siteConfig.contactEmail
      ? `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(initialPlan ? "AI service plan enquiry" : booking ? "AI coaching call enquiry" : "AI coaching enquiry")}&body=${encodeURIComponent(summary)}`
      : null;
    return (
      <div
        ref={result}
        tabIndex={-1}
        className="rounded-lg border bg-white p-6 sm:p-9"
      >
        <p className="eyebrow">Preview · Nothing sent yet</p>
        <h2 className="mt-4 text-2xl font-medium tracking-tight">
          Review your enquiry.
        </h2>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          {hasContact
            ? "Check your details, then open an available contact option below. You’ll need to press send in WhatsApp or your email app."
            : "Download a copy to keep. Direct contact is not available here yet, so this enquiry has not been sent to us."}{" "}
          {booking && "Preparing an enquiry does not book a call."}
        </p>
        <pre className="my-6 rounded-md bg-secondary p-5 font-sans text-sm leading-7 whitespace-pre-wrap break-words">
          {summary}
        </pre>
        <div className="no-print flex flex-wrap gap-3">
          {whatsapp && (
            <Button asChild className="h-12">
              <a href={whatsapp}>
                <MessageCircle className="size-4" aria-hidden="true" />
                Open WhatsApp draft
              </a>
            </Button>
          )}
          {email && (
            <Button
              asChild
              variant={whatsapp ? "outline" : "default"}
              className="h-12"
            >
              <a href={email}>
                <Mail className="size-4" aria-hidden="true" />
                Open email draft
              </a>
            </Button>
          )}
          <Button
            type="button"
            variant="outline"
            className="h-12"
            onClick={() => downloadText(initialPlan ? "ai-service-plan-enquiry.txt" : "ai-coaching-enquiry.txt", summary)}
          >
            <Download className="size-4" aria-hidden="true" />
            Download enquiry
          </Button>
        </div>
        <button
          type="button"
          onClick={() => setSummary("")}
          className="text-link no-print mt-4"
        >
          Edit my enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={prepare}
      noValidate
      className="rounded-lg border bg-white p-6 sm:p-9"
    >
      <h2 className="text-2xl font-medium tracking-tight">
        Prepare your enquiry.
      </h2>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        {hasContact
          ? "Add your details, preview your message, then choose an available contact option to send it."
          : "Use this form to write and download an enquiry for later. It does not send a message to us."}{" "}
        Required fields are marked *.
      </p>
      {initialPlan && (
        <div className="mt-6 rounded-md bg-secondary p-5">
          <h3 className="text-sm font-semibold">Your service plan is included</h3>
          <p className="mt-2 text-sm leading-6">{initialPlan.serviceIds.map((id) => services[id].name).join(" · ")}</p>
          <p className="mt-2 text-xs leading-6 text-muted-foreground">Your choices are filled in below. Add your name and any details before previewing the enquiry.</p>
          <Link href={servicePlanHref(initialPlan, "/service-planner")} className="text-link mt-2">Change my service choices</Link>
        </div>
      )}
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="field-label">
            Your name *
          </label>
          <input
            id="name"
            name="name"
            ref={nameInput}
            defaultValue={draft.name}
            autoComplete="name"
            required
            maxLength={100}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="form-control"
            placeholder="Your name"
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-xs text-destructive">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="field-label">
            Email{" "}
            <span className="font-normal text-muted-foreground">
              (optional)
            </span>
          </label>
          <input
            id="email"
            name="email"
            defaultValue={draft.email}
            type="email"
            autoComplete="email"
            maxLength={254}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="form-control"
            placeholder="you@business.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-xs text-destructive">
              {errors.email}
            </p>
          )}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="business" className="field-label">
            Your business or line of work *
          </label>
          <input
            id="business"
            name="business"
            defaultValue={draft.business}
            autoComplete="organization"
            required
            maxLength={150}
            aria-invalid={Boolean(errors.business)}
            aria-describedby={errors.business ? "business-error" : undefined}
            className="form-control"
            placeholder="Clothing shop in Nakuru"
          />
          {errors.business && (
            <p id="business-error" className="mt-2 text-xs text-destructive">
              {errors.business}
            </p>
          )}
        </div>
        {!initialPlan && <div className="sm:col-span-2">
          <label htmlFor="package" className="field-label">
            Coaching package (optional)
          </label>
          <select
            id="package"
            name="package"
            defaultValue={draft.package}
            className="form-control"
          >
            <option value="">Help me choose a package</option>
            {packages.map((pkg) => (
              <option key={pkg.slug} value={pkg.slug}>
                {pkg.name} — from KES {pkg.price}
              </option>
            ))}
          </select>
        </div>}
        <div className="sm:col-span-2">
          <label htmlFor="message" className="field-label">
            What would you like help with? *
          </label>
          <textarea
            id="message"
            name="message"
            defaultValue={draft.message}
            required
            minLength={10}
            maxLength={2000}
            rows={4}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="form-control resize-y"
            placeholder="For example, I spend too much time replying to price and delivery questions on WhatsApp."
          />
          {errors.message && (
            <p id="message-error" className="mt-2 text-xs text-destructive">
              {errors.message}
            </p>
          )}
        </div>
      </div>
      <p className="mt-6 text-xs leading-6 text-muted-foreground">
        We don’t save or send this form automatically. Download your enquiry
        or use an available contact option before leaving the page. Please
        leave out private customer details.
      </p>
      <Button type="submit" size="lg" className="mt-6 h-12 w-full sm:w-auto">
        Preview my enquiry{" "}
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </Button>
      <noscript>
        <p className="mt-4 text-sm text-destructive">
          Enable JavaScript to preview your enquiry. Use the contact options on
          this page if available.
        </p>
      </noscript>
    </form>
  );
}
