# Ecommerce Solutions Kenya

**AI Systems & Digital Growth for Kenyan Businesses**

Production domain: https://ecommercesolutions.co.ke

A Kenya-focused business website and lead-generation platform for practical AI coaching, automation and digital growth.

## Positioning

> **Turn AI Into a Business Advantage.**

Practical AI coaching and automation for Kenyan business owners, creators and teams — focused on saving time, creating content faster, generating leads, improving customer communication and automating repetitive work.

This site sells business outcomes, not AI theory.

## Offers

| Package | Ideal client | Delivery | Starting price |
|---|---|---|---:|
| **AI Starter** | Shops, salons, restaurants & small businesses | 2 × 60-min sessions | KES 8,000 |
| **AI Growth** | Creators, influencers, coaches & consultants | 4 × 60-min sessions + 2 weeks WhatsApp support | KES 25,000 |
| **AI Pro VIP** | Established businesses & agencies | 6 × 60-min sessions + 30 days support | KES 60,000 |

International / diaspora pricing can be offered in USD at approximately $100, $250 and $600 respectively, subject to scope.

## Differentiator

Every engagement is implementation-focused. At least one useful workflow is built live with the client during coaching.

Examples:

- Customer enquiry → AI → response
- Product → AI → description + social caption
- Video → AI → script + captions + posts
- Lead → form → AI → follow-up
- Content idea → AI → content calendar

## Frontend Stack

The website is now standardized on:

- **Next.js App Router**
- **TypeScript** with strict mode
- **Tailwind CSS v4**
- **shadcn/ui** as the base component system
- **21st.dev** for selected higher-level UI components and visual patterns
- **Lucide React** for icons
- **Supabase** for future lead/client data
- **n8n** for automation
- **Cloudflare** for production delivery

### Component strategy

shadcn provides the stable primitives. 21st.dev is used selectively for polished patterns, heroes, marketing sections and interaction-heavy components. Installed components become source code in this repository and must be reviewed and normalized to the project's tokens and accessibility standards.

See [`docs/COMPONENT-SYSTEM.md`](docs/COMPONENT-SYSTEM.md) for the full component rules and installation workflow.

## Project Structure

```text
.
├── components.json
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── docs/
│   ├── OFFER.md
│   ├── SITE-ARCHITECTURE.md
│   ├── IMPLEMENTATION_PLAN.md
│   └── COMPONENT-SYSTEM.md
└── src/
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/
    │   └── ui/
    │       ├── button.tsx
    │       └── card.tsx
    ├── hooks/
    └── lib/
        └── utils.ts
```

As the site grows, use `components/site`, `components/marketing`, `components/coaching` and `components/forms` for domain components. Keep `components/ui` reserved for reusable shadcn-style primitives.

## 21st.dev workflow

21st.dev components are installed through the shadcn registry mechanism. A typical component URL follows this pattern:

```bash
npx shadcn@latest add "https://21st.dev/r/<username>/<slug>?api_key=$API_KEY_21ST"
```

Keep the API key in the local environment; never commit it. Review every file written by the command before merging. Avoid registry collisions by checking whether the component name already exists in `src/components/ui`.

## Target Pages

MVP:

```text
/
├── Home
├── AI Coaching
├── About
├── Resources
├── Contact
└── Book a Call
```

Future expansion:

```text
/
├── Home
├── AI Coaching
│   ├── AI Starter
│   ├── AI Growth
│   └── AI Pro VIP
├── For Businesses
├── For Creators
├── How It Works
├── Resources
├── About
├── Contact
└── Book
```

## Conversion Flow

```text
Visitor
  ↓
Business problem / desired outcome
  ↓
Relevant AI outcome
  ↓
Audience or package
  ↓
WhatsApp / Book
  ↓
Qualification
  ↓
Payment
  ↓
Coaching
  ↓
Implementation
  ↓
Support
  ↓
Testimonial / Referral
```

Primary CTA: **Book your AI Mastery Call**.

Secondary CTA: **WhatsApp**.

## Delivery

- Booking: WhatsApp-first, with online scheduling as a secondary route.
- Calls: Google Meet or Zoom.
- Recordings: session replays supplied to clients.
- Materials: Google Drive with recordings, prompts, templates and SOPs.
- Support: WhatsApp according to package.
- Kenya payments: M-Pesa, Airtel Money and card/payment links as configured.
- International payments: card, PayPal or configured payment provider.

## Lead Magnet

**Free AI Business Opportunity Audit**

Suggested fields:

- Business type
- Main time-consuming task
- Primary business goal
- Name
- WhatsApp
- Email

Future submissions should feed into Supabase and an n8n follow-up workflow.

## Design Direction

Premium Kenyan business consultancy + modern AI.

- Primary accent: `#1D4ED8`
- High-intent CTA accent: `#F97316`
- Clean white/neutral surfaces
- Strong typography
- Restrained borders and shadows
- Real business imagery and practical workflow screenshots
- Mobile-first responsive design
- Purposeful, restrained animation

Avoid robot-heavy imagery, glowing brains, excessive neon, generic AI stock photography and technology-first messaging.

## Development Principles

- Mobile-first
- Performance-first
- Semantic, accessible HTML
- Server-rendered by default
- Minimal client-side JavaScript
- Strict TypeScript
- Reusable shadcn primitives
- Reusable domain components
- Validate forms before persistence
- Keep Supabase and automation secrets server-side
- Never expose service-role keys or private credentials
- Protect lead data with Supabase RLS
- Build the conversion MVP before adding a client portal

## Environment Variables

Expected future variables may include:

```env
NEXT_PUBLIC_SITE_URL=https://ecommercesolutions.co.ke
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_CALENDLY_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
API_KEY_21ST=
```

Only variables actually required by the implementation should be added. Secrets must never be committed.

## Local Development

```bash
npm install
npm run dev
npm run build
npm run start
```

## Roadmap

### Phase 1 — Foundation

- Next.js App Router setup
- shadcn configuration
- Tailwind design tokens
- 21st.dev component workflow
- Global layout/navigation
- Responsive homepage
- WhatsApp CTA
- SEO metadata

### Phase 2 — Conversion

- Coaching package pages
- Booking flow
- Contact form
- Free AI Opportunity Audit
- Lead storage
- Conversion tracking

### Phase 3 — Automation

- Supabase lead pipeline
- n8n notifications
- Automated lead follow-up
- WhatsApp workflow integration
- Booking/payment status automation

### Phase 4 — Authority

- Resources hub
- SEO content
- Case studies
- Testimonials
- Lead magnets

### Phase 5 — Client Experience

- Secure client portal
- Session resources
- Recordings
- Prompt libraries
- SOPs
- Support/status area

## Repository Scope

This repository is dedicated to **Ecommerce Solutions Kenya / ecommercesolutions.co.ke** and its AI coaching, automation and digital-growth website.

It is separate from the existing MobDeals project and must not inherit MobDeals-specific application logic, branding, database schemas or deployment configuration unless explicitly required.

## Status

**Project stage:** Frontend foundation initialized.

**Primary market:** Kenya.

**Primary conversion:** WhatsApp conversation / booked consultation.
