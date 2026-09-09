"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, Download, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl, siteConfig } from "@/lib/constants";
import { packages } from "@/lib/content";
import { downloadText } from "@/lib/download";

type Fields = "name" | "email" | "business" | "message";

export function BookingEnquiry() {
  const params = useSearchParams();
  const selected =
    packages.find((pkg) => pkg.slug === params.get("package"))?.slug ?? "";
  return <EnquiryForm key={selected} initialPackage={selected} booking />;
}

export function EnquiryForm({
  initialPackage = "",
  booking = false,
}: {
  initialPackage?: string;
  booking?: boolean;
}) {
  const [summary, setSummary] = useState("");
  const [draft, setDraft] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
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
    const selected =
      packages.find((pkg) => pkg.slug === data.get("package"))?.name ??
      "I’d like guidance choosing a package";
    const nextErrors: Partial<Record<Fields, string>> = {};
    if (name.length < 2)
      nextErrors.name = "Please enter your name (at least 2 characters).";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email =
        "Please enter a valid email address, or leave this blank.";
    if (business.length < 2)
      nextErrors.business = "Please tell us a little about your business.";
    if (message.length < 10)
      nextErrors.message =
        "Please add at least 10 characters about what you’d like help with.";
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
        booking
          ? "AI Mastery Call — conversation brief"
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
      ? `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(booking ? "AI Mastery Call enquiry" : "AI coaching enquiry")}&body=${encodeURIComponent(summary)}`
      : null;
    return (
      <div
        ref={result}
        tabIndex={-1}
        className="rounded-lg border bg-white p-6 sm:p-9"
      >
        <p className="eyebrow">Ready for your review</p>
        <h2 className="mt-4 text-2xl font-medium tracking-tight">
          Your {booking ? "conversation brief" : "enquiry"} is ready.
        </h2>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          {hasContact
            ? "Review it below, then open WhatsApp or email to send it. Nothing has been sent yet."
            : "Save a copy of your brief. Contact options are currently unavailable, so nothing has been sent."}{" "}
          {booking && "This does not reserve or confirm a session."}
        </p>
        <pre className="my-6 rounded-md bg-secondary p-5 font-sans text-sm leading-7 whitespace-pre-wrap break-words">
          {summary}
        </pre>
        <div className="no-print flex flex-wrap gap-3">
          {whatsapp && (
            <Button asChild className="h-12">
              <a href={whatsapp}>
                <MessageCircle className="size-4" aria-hidden="true" />
                Continue in WhatsApp
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
            onClick={() => downloadText("ai-coaching-enquiry.txt", summary)}
          >
            <Download className="size-4" aria-hidden="true" />
            Download brief
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
        {booking
          ? "Prepare your conversation brief."
          : "Tell us what you have in mind."}
      </h2>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        {hasContact
          ? "Prepare a short enquiry, then choose how to send it."
          : "Prepare and download your enquiry while contact options are being updated."}{" "}
        Required fields are marked *.
      </p>
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
            placeholder="For example, an online clothing shop"
          />
          {errors.business && (
            <p id="business-error" className="mt-2 text-xs text-destructive">
              {errors.business}
            </p>
          )}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="package" className="field-label">
            What are you interested in?
          </label>
          <select
            id="package"
            name="package"
            defaultValue={draft.package}
            className="form-control"
          >
            <option value="">Help me find the right starting point</option>
            {packages.map((pkg) => (
              <option key={pkg.slug} value={pkg.slug}>
                {pkg.name} — from KES {pkg.price}
              </option>
            ))}
          </select>
        </div>
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
            placeholder="Tell us about a task you’d like to simplify or a goal you’re working towards."
          />
          {errors.message && (
            <p id="message-error" className="mt-2 text-xs text-destructive">
              {errors.message}
            </p>
          )}
        </div>
      </div>
      <p className="mt-6 text-xs leading-6 text-muted-foreground">
        Your details stay in this page until you choose to share them through
        WhatsApp or email. We don’t store this form. Avoid including customer
        records or confidential information.
      </p>
      <Button type="submit" size="lg" className="mt-6 h-12 w-full sm:w-auto">
        Prepare {booking ? "my brief" : "my enquiry"}{" "}
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </Button>
      <noscript>
        <p className="mt-4 text-sm text-destructive">
          JavaScript is needed to prepare a brief. Use the contact options on
          this page if available.
        </p>
      </noscript>
    </form>
  );
}
