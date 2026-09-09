// Adapted from the existing 21st.dev Underline Hero Section by waleedkibhen / wisedev.
// https://21st.dev/@waleedkibhen/components/underline-hero-section
// Navigation now lives in the shared layout; this hero renders without client JavaScript.
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UnderlineHeroSection() {
  return (
    <section
      className="relative isolate flex min-h-[min(720px,calc(100svh-5rem))] items-center overflow-hidden bg-[#202c2b] text-white"
      aria-labelledby="hero-heading"
    >
      <Image
        src="/images/business-workshop.jpg"
        alt=""
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover object-[68%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(22,35,33,.98)_0%,rgba(22,35,33,.92)_29%,rgba(22,35,33,.60)_53%,rgba(22,35,33,.10)_100%)] max-sm:bg-[linear-gradient(90deg,rgba(22,35,33,.93),rgba(22,35,33,.76))]" />
      <div className="site-container py-12 lg:py-14">
        <p className="hero-enter mb-7 flex items-center gap-3 text-[10px] font-semibold tracking-[0.18em] text-white/80 sm:text-xs">
          <span className="h-px w-8 bg-[#edab8d]" /> AI COACHING. BUILT FOR
          KENYA.
        </p>
        <h1
          id="hero-heading"
          className="hero-enter max-w-2xl text-[clamp(2.6rem,5.1vw,4.65rem)] leading-[1.06] font-medium tracking-[-0.055em]"
        >
          Your business.
          <br />
          Your ambition.
          <br />
          <span className="relative inline-block pb-3 font-editorial font-normal italic text-[#efb597]">
            An AI advantage.
            <svg
              className="hero-underline absolute inset-x-0 bottom-0 h-3 w-full"
              viewBox="0 0 440 16"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M3 11C120 1 275 1 437 8"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>
        <p className="hero-enter hero-enter-delay mt-7 max-w-[27rem] text-base leading-7 text-white/80 sm:text-lg">
          Spend less time on the repetitive work.
          <br className="hidden sm:block" /> Learn practical AI systems for your
          content, customers and everyday business.
        </p>
        <div className="hero-enter hero-enter-last mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-7">
          <Button
            asChild
            size="lg"
            className="h-13 rounded-full bg-[#edab8d] px-6 text-[#202c2b] hover:bg-[#f4bea4]"
          >
            <Link href="/book">
              Book your AI Mastery Call{" "}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
          <Link
            href="/ai-coaching"
            className="inline-flex min-h-11 items-center gap-3 text-sm font-medium text-white underline-offset-4 hover:underline"
          >
            Explore coaching{" "}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <a
          href="#outcomes"
          className="hero-enter hero-enter-last mt-8 inline-flex min-h-11 items-center gap-3 text-[10px] tracking-[0.12em] text-white/65"
        >
          <ArrowDown className="size-4" aria-hidden="true" /> A LITTLE LESS
          BUSY. A LOT MORE POSSIBLE.
        </a>
      </div>
    </section>
  );
}
