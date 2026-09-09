import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Brand } from "@/components/site/brand";
import { whatsappUrl } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t bg-[#edeee7]">
      <div className="site-container py-14">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Brand />
            <p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">
              Practical AI. Human guidance.
              <br />
              More room to grow your business.
            </p>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">Explore</p>
            <div className="mt-4 flex flex-col items-start gap-1">
              {[
                ["/ai-coaching", "AI coaching & packages"],
                ["/about", "About us"],
                ["/resources", "Free resources"],
              ].map(([href, label]) => (
                <Link key={href} href={href} className="text-link font-normal">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">Take the next step</p>
            <div className="mt-4 flex flex-col items-start gap-1">
              <Link href="/book" className="text-link font-normal">
                Book a conversation{" "}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
              <Link href="/audit" className="text-link font-normal">
                Free AI opportunity audit
              </Link>
              <Link href="/contact" className="text-link font-normal">
                Contact us
              </Link>
              {whatsappUrl && (
                <a href={whatsappUrl} className="text-link font-normal">
                  WhatsApp{" "}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-foreground/15 pt-7 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} E Commerce Solutions Kenya.</p>
          <p>Built around Kenyan businesses. Open to the world.</p>
        </div>
      </div>
    </footer>
  );
}
