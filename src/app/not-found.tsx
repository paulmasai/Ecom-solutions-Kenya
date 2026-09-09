import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="site-container py-24 text-center">
      <p className="eyebrow">404 · Page not found</p>
      <h1 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl">
        We couldn’t find that page.
      </h1>
      <p className="mx-auto mt-5 max-w-md text-muted-foreground">
        The link may be out of date. Go to the homepage to find AI coaching
        packages, free templates and ways to get started.
      </p>
      <Button asChild className="mt-8 h-12 rounded-full">
        <Link href="/">
          <ArrowLeft className="size-4" aria-hidden="true" />
          Go to homepage
        </Link>
      </Button>
    </div>
  );
}
