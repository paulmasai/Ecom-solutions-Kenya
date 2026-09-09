import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="bg-[#f2e2d7]">
      <div className="site-container flex flex-col justify-between gap-8 py-16 lg:flex-row lg:items-center lg:py-20">
        <div>
          <p className="eyebrow">Your next chapter starts here</p>
          <h2 className="mt-4 text-4xl leading-tight font-medium tracking-[-0.04em] sm:text-5xl">
            Make room for
            <br className="sm:hidden" />{" "}
            <span className="font-editorial italic">what’s next.</span>
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-6 text-muted-foreground">
            Let’s find the right starting point for you and your business.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <Button asChild size="lg" className="h-13 rounded-full px-7">
            <Link href="/book">
              Book your AI Mastery Call{" "}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
          <Link href="/audit" className="text-link text-xs">
            Not sure yet? Try the free AI audit{" "}
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
