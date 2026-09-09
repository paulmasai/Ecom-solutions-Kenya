import Link from "next/link";
import { ArrowUpRight, Check, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { packages } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Packages() {
  return (
    <div className="mt-12 grid gap-5 lg:grid-cols-3">
      {packages.map((pkg, index) => (
        <article
          key={pkg.slug}
          className={cn(
            "scroll-reveal relative flex flex-col rounded-lg border p-7 sm:p-8",
            index === 1
              ? "border-foreground bg-foreground text-white"
              : "bg-white",
          )}
        >
          <p
            className={cn(
              "text-[10px] font-semibold uppercase tracking-[0.12em]",
              index === 1 ? "text-[#efb597]" : "text-primary",
            )}
          >
            {pkg.label}
          </p>
          <h3 className="mt-6 text-2xl font-medium tracking-tight">
            {pkg.name}
          </h3>
          <p
            className={cn(
              "mt-3 min-h-12 text-sm leading-6",
              index === 1 ? "text-white/70" : "text-muted-foreground",
            )}
          >
            {pkg.audience}
          </p>
          <div className="mt-8">
            <p
              className={cn(
                "mb-1 text-xs",
                index === 1 ? "text-white/65" : "text-muted-foreground",
              )}
            >
              Starting from
            </p>
            <p className="text-4xl font-medium tracking-[-0.04em]">
              <span className="mr-2 text-sm font-normal tracking-normal">
                KES
              </span>
              {pkg.price}
            </p>
          </div>
          <div
            className={cn(
              "mt-7 space-y-2 border-y py-5 text-xs",
              index === 1
                ? "border-white/20 text-white/80"
                : "text-muted-foreground",
            )}
          >
            <p className="flex items-center gap-2">
              <Clock3 className="size-3.5" aria-hidden="true" />
              {pkg.sessions}
            </p>
            <p>{pkg.support}</p>
          </div>
          <ul className="mt-6 mb-8 flex-1 space-y-4">
            {pkg.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-xs leading-5"
              >
                <Check
                  className={cn(
                    "mt-0.5 size-3.5 shrink-0",
                    index === 1 ? "text-[#efb597]" : "text-primary",
                  )}
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
          <Button
            asChild
            variant={index === 1 ? "default" : "outline"}
            className={cn(
              "h-12 w-full rounded-full",
              index === 1 && "bg-[#edab8d] text-foreground hover:bg-[#f4bea4]",
            )}
          >
            <Link
              href={`/book?package=${pkg.slug}`}
              aria-label={`Discuss ${pkg.name}`}
            >
              Discuss {pkg.name}{" "}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </article>
      ))}
    </div>
  );
}
