# Component System

## Stack contract

This website uses a deliberately opinionated frontend stack:

- **Next.js App Router**
- **TypeScript** with strict mode
- **Tailwind CSS v4**
- **shadcn/ui** for the base component system
- **21st.dev** for high-quality component patterns and visual starting points
- **Lucide React** for icons
- **Supabase** for future lead/client data
- **n8n** for automation
- **Cloudflare** for production delivery

The goal is not to copy a component library wholesale. Components from 21st.dev are starting points that must be adapted to this project's design tokens, content model, accessibility requirements and conversion goals.

## Directory structure

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── ai-coaching/
│   ├── about/
│   ├── resources/
│   ├── contact/
│   └── book/
├── components/
│   ├── ui/                 # shadcn primitives and adapted registry components
│   ├── site/               # site-wide sections and chrome
│   ├── marketing/          # reusable conversion sections
│   ├── coaching/           # coaching/package-specific components
│   └── forms/              # lead and booking forms
├── hooks/                  # client-side reusable hooks
└── lib/
    ├── utils.ts
    ├── constants.ts
    ├── content.ts
    └── validations.ts
```

### Component ownership

- `components/ui/*`: generated/adapted shadcn primitives and registry components. Keep them reusable.
- `components/site/*`: Header, Footer, mobile navigation, WhatsApp CTA, trust strip.
- `components/marketing/*`: Hero, outcomes, audience selector, testimonials, FAQ, final CTA.
- `components/coaching/*`: Package cards, curriculum, implementation workflow, support details.
- `components/forms/*`: Lead capture and audit forms. Forms should not contain business logic for Supabase or n8n directly.
- `lib/*`: data, validation, utility functions and server-safe configuration.

## shadcn rules

1. Prefer the official shadcn component for common UI primitives.
2. Install components into `src/components/ui`.
3. Keep generated primitives close to upstream conventions.
4. Put business-specific styling in wrapper components under `site`, `marketing`, `coaching`, or `forms` rather than heavily mutating primitives.
5. Use `cn()` for conditional class composition.
6. Use Lucide icons instead of manually drawn SVG icons unless a brand asset is required.
7. Every interactive component must have keyboard, focus, disabled and accessible-label states.

## 21st.dev rules

21st.dev components may be used when they provide a meaningful UX or visual pattern that is better than building from scratch.

### Installation workflow

21st.dev currently distributes components through shadcn-compatible registry URLs. Use the exact component URL supplied by 21st.dev rather than inventing a generic `@21st/*` alias:

```bash
npx shadcn@latest add "https://21st.dev/r/<username>/<slug>?api_key=$API_KEY_21ST"
```

Keep `API_KEY_21ST` local or in the deployment environment. Never commit the key. If a component is copied manually, treat the copied code as project-owned code and place it in the appropriate `src/components/*` directory. Do not paste an entire demo page into `src/app/page.tsx`.

When installing a registry component, preserve a short source comment at the top of the copied file when practical so future maintainers can trace its origin.

### Adaptation checklist

Before merging a 21st.dev component:

- Replace demo copy with Kenyan business-focused copy.
- Remove irrelevant dependencies and effects.
- Replace icon sets with Lucide where practical.
- Use the project's shadcn tokens instead of hard-coded palette values.
- Confirm mobile behavior at 360px and 390px widths.
- Check keyboard navigation and focus states.
- Check reduced-motion behavior for animation-heavy components.
- Keep the component server-rendered unless interactivity requires `use client`.
- Keep animations purposeful; no decorative motion that competes with the CTA.
- Confirm the component does not introduce a duplicate design language.

### Attached hero component

The supplied `underline-hero-section.tsx` is adapted into `src/components/ui/underline-hero-section.tsx`, with a source link to its 21st.dev listing. It keeps the underline treatment and reduced-motion-safe animation and uses local business photography. It now renders as a Server Component. Navigation and the shared button primitive live outside the hero. The registry currently requires a valid key for additional imports; locally authored tabs, FAQ and forms are not registry downloads.

## Visual language

Current action accent: `#A4422B` (coral), with warm neutral surfaces and `#202C2B` ink. Preserve the existing multicolour brand mark. See [DESIGN.md](../DESIGN.md) for the implemented system and asset sources.

Default visual direction:

- premium Kenyan business consultancy
- clean white/neutral surfaces
- strong typography
- restrained borders and shadows
- practical screenshots/workflows
- subtle motion
- clear CTA hierarchy

Avoid:

- robot imagery
- glowing brains
- excessive neon
- generic AI stock photography
- unexplained technical jargon
- component-demo aesthetics that make the website look like a template

## Tailwind rules

- Use Tailwind utility classes for layout and component styling.
- Do not create a Tailwind config file unless a future requirement actually needs one; Tailwind v4 is CSS-first here.
- Define reusable design tokens in `src/app/globals.css`.
- Avoid arbitrary values when an existing token or standard utility is appropriate.
- Keep responsive behavior mobile-first.

## Server/client boundary

Default to React Server Components.

Use `"use client"` only for components that require browser state, event handlers, effects, or client-only APIs. Keep data fetching, secrets, Supabase service-role access and automation credentials on the server.

Never expose:

- Supabase service-role keys
- n8n credentials
- payment secrets
- private API keys
- webhook signing secrets

## Conversion rules

Every major section should answer at least one of these questions:

- What business problem does this solve?
- What outcome can I expect?
- Is this relevant to my type of business?
- What happens after I contact you?
- How much does it cost or what is the next step?

Primary CTA: **Book your AI Mastery Call**.

Secondary CTA: **WhatsApp**.

The site should feel useful before it asks for contact details.
