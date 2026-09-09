import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { PageIntro } from "@/components/site/page-intro";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { siteConfig, whatsappUrl } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Contact Us About AI Coaching",
  "Explore AI coaching for your Kenyan business. Prepare an enquiry about customer replies, content or automation, and discuss the scope and costs.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact E Commerce Solutions Kenya"
        title="Which business task would you like help with?"
        description="Too many customer questions to retype? Content you never get time to post? Tell us what you do and where you’re getting stuck. You don’t need to know which AI tool to choose."
      />
      <section className="site-container grid items-start gap-12 pb-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <h2 className="text-2xl font-medium tracking-tight">
            Start with your business, not a package.
          </h2>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            We’ll discuss the task you want to improve, explain how coaching
            could help and confirm the work and costs before you decide.
          </p>
          <div className="mt-7 space-y-3">
            {whatsappUrl && (
              <a href={whatsappUrl} className="text-link flex border-b py-4">
                <MessageCircle
                  className="size-5 text-primary"
                  aria-hidden="true"
                />
                Chat on WhatsApp{" "}
                <ArrowUpRight className="ml-auto size-4" aria-hidden="true" />
              </a>
            )}
            {siteConfig.contactEmail && (
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-link flex break-all border-b py-4"
              >
                <Mail
                  className="size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                {siteConfig.contactEmail}
              </a>
            )}
            {!whatsappUrl && !siteConfig.contactEmail && (
              <p className="rounded-md bg-secondary p-5 text-sm leading-7 text-muted-foreground">
                Direct contact is not available on this website yet. You can
                prepare and download an enquiry to keep for later. It will not
                be sent to us.
              </p>
            )}
          </div>
          <Link href="/audit" className="text-link mt-6">
            Try the free AI business check{" "}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <EnquiryForm />
      </section>
    </>
  );
}
