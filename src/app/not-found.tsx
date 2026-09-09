import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="site-container py-24 text-center">
      <p className="eyebrow">404 · Page not found</p>
      <h1 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl">
        Let’s get you back on track.
      </h1>
      <p className="mx-auto mt-5 max-w-md text-muted-foreground">
        This page may have moved. You can explore our coaching packages or start
        again from the homepage.
      </p>
      <Button asChild className="mt-8 h-12 rounded-full">
        <Link href="/">
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to home
        </Link>
      </Button>
    </div>
  );
}
