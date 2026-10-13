import { ArrowDownToLine } from "lucide-react";
import { resources } from "@/lib/content";

export function ResourceList() {
  return (
    <div className="mt-10 grid gap-8 md:grid-cols-3">
      {resources.map((resource) => (
        <a
          key={resource.href}
          href={resource.href}
          download
          title={`Download: ${resource.title}`}
          className="group scroll-reveal flex flex-col rounded-md border-t border-foreground/25 pt-6 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <div className="flex items-center justify-between">
            <span className="font-editorial text-3xl italic text-primary">
              {resource.number}
            </span>
            <ArrowDownToLine
              className="size-5 text-primary transition-transform group-hover:translate-y-1 group-focus-visible:translate-y-1"
              aria-hidden="true"
            />
          </div>
          <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.13em] text-muted-foreground">
            {resource.category}
          </p>
          <h3 className="mt-3 max-w-xs text-2xl leading-tight font-medium tracking-tight transition-colors group-hover:text-primary group-focus-visible:text-primary">
            {resource.title}
          </h3>
          <p className="mt-4 mb-6 flex-1 text-sm leading-6 text-muted-foreground">
            {resource.description}
          </p>
          <span className="text-xs font-medium">
            {resource.format}
            <span className="sr-only"> — download</span>
          </span>
        </a>
      ))}
    </div>
  );
}
