import { Suspense } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { PageIntro } from "@/components/site/page-intro";
import { BookingEnquiry } from "@/components/forms/enquiry-form";
import { Button } from "@/components/ui/button";
import { siteConfig, whatsappUrl } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Discuss AI Coaching",
  "Prepare for an AI coaching conversation. Outline your business task, compare suitable packages and understand the scope and costs before you decide.",
  "/book",
);

export default function BookPage() {
  return (
    <>
      <PageIntro
        eyebrow="Discuss AI coaching for your business"
        title="Let’s work out where AI could help you."
        description="Start with one task: customer replies, content or follow-ups. We’ll discuss what you want to improve, which package fits and what it would cost. No package decision needed yet."
      />
      <section className="site-container grid items-start gap-12 pb-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <h2 className="text-2xl font-medium tracking-tight">
            What we’ll cover in the conversation
          </h2>
          <ul className="mt-6 space-y-5">
            {[
              "Your business, customers and the tools you use.",
              "One repeated task you’d like to make easier.",
              "The coaching, setup work and costs involved.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6">
                <Check
                  className="mt-1 size-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t pt-7">
            {siteConfig.bookingUrl ? (
              <>
                <Button asChild size="lg" className="h-12">
                  <a
                    href={siteConfig.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Choose a call time{" "}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                    <span className="sr-only">
                      {" "}
                      (opens scheduling in a new tab)
                    </span>
                  </a>
                </Button>
                <p className="mt-4 text-xs leading-6 text-muted-foreground">
                  The scheduling page opens in a new tab. Choose an available
                  time there to complete your booking.
                </p>
              </>
            ) : whatsappUrl ? (
              <>
                <Button asChild size="lg" className="h-12">
                  <a href={whatsappUrl}>
                    Arrange a call on WhatsApp{" "}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </Button>
                <p className="mt-4 text-xs leading-6 text-muted-foreground">
                  Send us a message to agree on a suitable call time.
                </p>
              </>
            ) : (
              <p className="rounded-md bg-secondary p-5 text-sm leading-7 text-muted-foreground">
                Call scheduling is not available on this website yet. You can
                prepare and download an enquiry for later; it does not book a call.
              </p>
            )}
          </div>
        </div>
        <Suspense
          fallback={
            <div className="rounded-lg border bg-white p-8">
              <p role="status" className="text-sm text-muted-foreground">
                Loading your enquiry form…
              </p>
              <noscript>
                Enable JavaScript to prepare your enquiry. Use the scheduling or
                contact options on this page if available.
              </noscript>
            </div>
          }
        >
          <BookingEnquiry />
        </Suspense>
      </section>
    </>
  );
}
