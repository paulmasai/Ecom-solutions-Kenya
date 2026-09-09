"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Brand } from "@/components/site/brand";
import { Button } from "@/components/ui/button";
import { navigation } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const trigger = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    }
    function onPointer(event: PointerEvent) {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <header
      ref={header}
      className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-xl"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <div className="site-container flex h-20 items-center justify-between gap-5">
        <Brand onClick={() => setOpen(false)} />
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={cn(
                "py-3 text-[13px] font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button
          asChild
          className="hidden h-11 rounded-full px-5 lg:inline-flex"
        >
          <Link href="/book">
            Let’s talk <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </Button>
        <button
          ref={trigger}
          type="button"
          className="flex size-11 items-center justify-center rounded-full border lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="mobile-nav-enter border-t bg-background px-6 pb-6 lg:hidden"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => setOpen(false)}
              className="flex min-h-14 items-center justify-between border-b text-base"
            >
              {item.label}
              <ArrowUpRight
                className="size-4 text-muted-foreground"
                aria-hidden="true"
              />
            </Link>
          ))}
          <Button asChild className="mt-5 h-12 w-full">
            <Link href="/book" onClick={() => setOpen(false)}>
              Book your AI Mastery Call{" "}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
