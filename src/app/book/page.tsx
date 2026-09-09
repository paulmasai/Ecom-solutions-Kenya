import { Suspense } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { PageIntro } from "@/components/site/page-intro";
import { BookingEnquiry } from "@/components/forms/enquiry-form";
import { Button } from "@/components/ui/button";
import { siteConfig, whatsappUrl } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Book an AI Mastery Call",
  "Start a conversation about your business, explore practical AI opportunities and choose the coaching support that fits your goals.",
  "/book",
);

export default function BookPage() {
  return (
    <>
      <PageIntro
        eyebrow="Your AI Mastery Call"
        title="Let’s find your next useful step."
        description="Bring your business questions. We’ll look at where AI could help, what you want to achieve and the support that makes sense for you."
      />
      <section className="site-container grid items-start gap-12 pb-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <h2 className="text-2xl font-medium tracking-tight">
            Come with a task. Leave with a direction.
          </h2>
          <ul className="mt-6 space-y-5">
            {[
              "Talk through your business and priorities.",
              "Explore a practical workflow worth building.",
              "Discuss the right package, scope and costs.",
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
                    Choose a time{" "}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                    <span className="sr-only">
                      {" "}
                      (opens scheduling in a new tab)
                    </span>
                  </a>
                </Button>
                <p className="mt-4 text-xs leading-6 text-muted-foreground">
                  You’ll see availability and confirm your time on our
                  scheduling page.
                </p>
              </>
            ) : whatsappUrl ? (
              <>
                <Button asChild size="lg" className="h-12">
                  <a href={whatsappUrl}>
                    Arrange a time on WhatsApp{" "}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </Button>
                <p className="mt-4 text-xs leading-6 text-muted-foreground">
                  We’ll agree on a suitable time together.
                </p>
              </>
            ) : (
              <p className="rounded-md bg-secondary p-5 text-sm leading-7 text-muted-foreground">
                Online scheduling is currently unavailable. You can prepare and
                download a brief for your conversation. This does not reserve a
                session.
              </p>
            )}
          </div>
        </div>
        <Suspense
          fallback={
            <div className="rounded-lg border bg-white p-8">
              <p role="status" className="text-sm text-muted-foreground">
                Loading your conversation brief…
              </p>
              <noscript>
                Enable JavaScript to prepare your brief. Use the scheduling or
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
