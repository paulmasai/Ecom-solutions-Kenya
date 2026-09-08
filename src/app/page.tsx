import { ArrowRight, Bot, CheckCircle2, MessageCircle, Sparkles, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import UnderlineHeroSection from "@/components/ui/underline-hero-section";
import { whatsappUrl } from "@/lib/constants";

const packages = [
  { name: "AI Starter", audience: "Shops, salons, restaurants & small businesses", price: "From KES 8,000", description: "Get practical AI working on customer replies, product content and marketing." },
  { name: "AI Growth", audience: "Creators, influencers, coaches & consultants", price: "From KES 25,000", description: "Build a repeatable content, lead-generation and automation system." },
  { name: "AI Pro VIP", audience: "Established businesses, agencies & teams", price: "From KES 60,000", description: "Build custom AI systems, train your team and automate high-value workflows." },
];

export default function HomePage() {
  return (
    <main>
      <UnderlineHeroSection whatsappHref={whatsappUrl} bookCallHref={whatsappUrl} />
      <section id="features" className="border-y bg-muted/30">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-2xl"><p className="brand-gradient-text text-sm font-semibold uppercase tracking-wider">Practical implementation</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">We build, not just teach.</h2><p className="mt-4 text-muted-foreground">Every engagement is designed around a real business workflow, so you leave with something useful instead of another folder of AI theory.</p></div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">{[[Bot, "Customer enquiry → AI → response"], [Sparkles, "Product → AI → description + caption"], [Workflow, "Lead → form → AI → follow-up"]].map(([Icon, label], index) => <Card key={label as string} className="bg-background shadow-none transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#9b60e4]/10"><CardHeader><div className="mb-2 flex size-11 items-center justify-center rounded-xl brand-gradient text-white"><Icon className="size-5" /></div><CardTitle className="text-lg">{label as string}</CardTitle><CardDescription>{["Automate first responses and keep customer conversations moving.","Turn product details into ready-to-use marketing content.","Capture, qualify and follow up with a repeatable workflow."][index]}</CardDescription></CardHeader></Card>)}</div>
        </div>
      </section>
      <section id="pricing" className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-2xl"><p className="brand-gradient-text text-sm font-semibold uppercase tracking-wider">Choose your starting point</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">AI coaching matched to your business stage.</h2></div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">{packages.map((pkg) => <Card key={pkg.name} className="group bg-background transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#9b60e4]/10"><CardHeader><CardTitle>{pkg.name}</CardTitle><CardDescription>{pkg.audience}</CardDescription></CardHeader><CardContent><p className="brand-gradient-text text-2xl font-semibold">{pkg.price}</p><p className="mt-3 text-sm leading-6 text-muted-foreground">{pkg.description}</p><Button asChild variant="outline" className="mt-6 w-full group-hover:border-[#9b60e4]/40"><a href={whatsappUrl}>Discuss this package <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a></Button></CardContent></Card>)}</div>
        </div>
      </section>
      <section id="about" className="border-y bg-muted/30">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center"><div className="max-w-3xl"><p className="brand-gradient-text text-sm font-semibold uppercase tracking-wider">Built for Kenya</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Useful AI systems without the hype.</h2><p className="mt-4 text-lg leading-8 text-muted-foreground">From WhatsApp customer replies to content production and n8n automation, the focus is simple: save time, improve execution and create measurable business leverage.</p><div className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">{["Kenyan business context", "Live workflow implementation", "WhatsApp support"].map((item) => <div key={item} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#9b60e4]" />{item}</div>)}</div></div><Button asChild size="lg" className="brand-gradient text-white hover:opacity-90"><a href={whatsappUrl}><MessageCircle className="size-4" /> Chat on WhatsApp</a></Button></div></div>
      </section>
    </main>
  );
}
