import { ArrowRight, Bot, CheckCircle2, MessageCircle, Sparkles, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const packages = [
  {
    name: "AI Starter",
    audience: "Shops, salons, restaurants & small businesses",
    price: "From KES 8,000",
    description: "Get practical AI working on customer replies, product content and marketing.",
  },
  {
    name: "AI Growth",
    audience: "Creators, influencers, coaches & consultants",
    price: "From KES 25,000",
    description: "Build a repeatable content, lead-generation and automation system.",
  },
  {
    name: "AI Pro VIP",
    audience: "Established businesses, agencies & teams",
    price: "From KES 60,000",
    description: "Build custom AI systems, train your team and automate high-value workflows.",
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <div className="font-bold tracking-tight">Ecommerce Solutions Kenya</div>
          <Button asChild variant="outline" size="sm">
            <a href="https://wa.me/254700000000" aria-label="Chat on WhatsApp">
              <MessageCircle className="size-4" /> WhatsApp
            </a>
          </Button>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border bg-muted px-3 py-1 text-sm font-medium">
            <Sparkles className="size-4 text-primary" /> Practical AI coaching for Kenya
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Turn AI Into a Business Advantage.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Learn how to use AI to create content faster, respond to customers better, generate leads and automate repetitive work — with a system built around your business.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="https://wa.me/254700000000">
                Book your AI Mastery Call <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#packages">See coaching packages</a>
            </Button>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
            {[
              "Built around your business",
              "Live workflow implementation",
              "WhatsApp support available",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" /> {item}
              </div>
            ))}
          </div>
        </div>

        <Card className="self-center border-primary/15 bg-muted/50 shadow-none">
          <CardHeader>
            <div className="mb-2 flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Workflow className="size-5" />
            </div>
            <CardTitle>We build, not just teach.</CardTitle>
            <CardDescription>
              At least one useful workflow is implemented live during coaching so you leave with something that works.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              [Bot, "Customer enquiry → AI → response"],
              [Sparkles, "Product → AI → description + caption"],
              [Workflow, "Lead → form → AI → follow-up"],
            ].map(([Icon, label]) => (
              <div key={label as string} className="flex items-center gap-3 rounded-xl border bg-background p-4">
                <Icon className="size-5 text-primary" />
                <span className="text-sm font-medium">{label as string}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section id="packages" className="border-y bg-muted/30">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Choose your starting point</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">AI coaching matched to your business stage.</h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {packages.map((pkg) => (
              <Card key={pkg.name} className="bg-background">
                <CardHeader>
                  <CardTitle>{pkg.name}</CardTitle>
                  <CardDescription>{pkg.audience}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-semibold">{pkg.price}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{pkg.description}</p>
                  <Button asChild variant="outline" className="mt-6 w-full">
                    <a href="https://wa.me/254700000000">Discuss this package</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
