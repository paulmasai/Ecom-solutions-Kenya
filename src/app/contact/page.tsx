import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { PageIntro } from "@/components/site/page-intro";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { siteConfig, whatsappUrl } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Contact Us",
  "Talk to E Commerce Solutions Kenya about practical AI coaching, business automation and the right starting point for your business.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Let’s start a conversation"
        title="What could work better in your business?"
        description="A repetitive task, a content challenge, an idea you want to explore — tell us what’s on your mind."
      />
      <section className="site-container grid items-start gap-12 pb-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <h2 className="text-2xl font-medium tracking-tight">
            A useful conversation comes first.
          </h2>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            We’ll start with your priorities, help you understand your options
            and agree on a practical next step.
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
                Our contact options are being updated. You can prepare and save
                an enquiry here in the meantime.
              </p>
            )}
          </div>
          <Link href="/audit" className="text-link mt-6">
            Explore a free AI opportunity audit{" "}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <EnquiryForm />
      </section>
    </>
  );
}
