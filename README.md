# Ecommerce Solutions Kenya

**AI Systems & Digital Growth for Kenyan Businesses**

Website: https://ecommercesolutions.co.ke

A Kenya-focused business website and lead-generation platform for practical AI coaching, automation, and digital growth services.

## Core Offer

### AI Mastery Coaching

We sell business outcomes, not AI theory. The service helps business owners, creators, coaches, agencies, and teams use AI to save time, create content, generate leads, improve customer communication, and automate repetitive work.

### Packages

| Package | Ideal client | Delivery | Starting price |
|---|---|---|---:|
| **AI Starter** | Shops, salons, restaurants, small businesses | 2 × 60-min sessions | KES 8,000 |
| **AI Growth** | Creators, influencers, coaches, consultants | 4 × 60-min sessions + 2 weeks WhatsApp support | KES 25,000 |
| **AI Pro VIP** | Established businesses and agencies | 6 × 60-min sessions + 30 days support | KES 60,000 |

International / diaspora pricing can be offered in USD: approximately $100, $250, and $600 respectively, subject to scope.

## Positioning

Primary message:

> **Turn AI Into a Business Advantage.**

Supporting message:

> Practical AI coaching and automation for Kenyan business owners, creators and teams—so you can create content faster, respond to customers better and automate repetitive work.

The website should avoid generic AI hype, excessive futuristic visuals, and technology-first messaging. Lead with measurable business outcomes and practical implementation.

## Target Audiences

1. **Small Business Owners** — shops, salons, restaurants, online sellers, and service businesses.
2. **Creators & Coaches** — influencers, content creators, coaches, consultants, and personal brands.
3. **Businesses & Agencies** — established businesses, agencies, marketing teams, and organizations requiring custom systems and team training.

## Differentiator

Every engagement is implementation-focused. At least one useful workflow is built live with the client during coaching. The service is positioned as mastery through practical implementation rather than passive AI training.

Examples:

- Customer enquiry → AI → response
- Product → AI → product description + social caption
- Video → AI → script + captions + posts
- Lead → form → AI → follow-up
- Content idea → AI → content calendar

## Coaching Curriculum

### Small Business Owners

**Session 1 — AI for Customers**
- Customer replies
- WhatsApp / Instagram response workflows
- Product descriptions
- Review assistance

**Session 2 — AI for Marketing**
- 30 days of social content
- Ad copy
- Promotional copy
- Canva AI workflows

### Creators & Influencers

**Session 1 — Content Machine**
- Generate large batches of content ideas
- Write video scripts
- Repurpose one piece of content into multiple posts

**Session 2 — Monetization**
- Brand pitches
- Media kit content
- Sponsor emails

**Session 3 — Community**
- DM assistance
- Live-session planning
- Engagement workflows

**Session 4 — Automation**
- n8n workflows
- Lead collection
- Email automation
- Growth tracking

## Delivery Model

- **Booking:** WhatsApp-first, with online scheduling as a secondary route.
- **Calls:** Google Meet or Zoom.
- **Recordings:** Session replays supplied to clients.
- **Materials:** Google Drive containing recordings, prompts, templates, and SOPs.
- **Support:** WhatsApp between sessions according to package.
- **Payments in Kenya:** M-Pesa, Airtel Money, and card/payment links as configured.
- **International payments:** Card and PayPal/payment-provider options as configured.

## Recommended Technology Stack

- **Astro** — static-first website
- **Cloudflare Pages** — deployment, CDN, and edge delivery
- **Supabase** — lead/application data and future client portal capabilities
- **n8n** — business automation and integrations
- **WhatsApp** — primary sales/support channel
- **Calendly or equivalent** — scheduling
- **Payment provider** — M-Pesa/card/international payment integration

## Website Architecture

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

## Homepage Conversion Flow

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

The website should not require visitors to understand AI before taking action. The visitor should immediately understand what the service can do for their business.

## Lead Magnet

Recommended initial lead-generation asset:

**Free AI Business Opportunity Audit**

Purpose: identify where AI could save a business time or improve marketing, customer service, sales, or administration.

Suggested fields:

- Business type
- Main time-consuming task
- Primary business goal
- Name
- WhatsApp
- Email

Submissions should eventually feed into Supabase and an n8n follow-up workflow.

## SEO Direction

Primary themes:

- AI for small businesses in Kenya
- ChatGPT for business Kenya
- AI automation Kenya
- AI tools for Kenyan businesses
- ChatGPT for WhatsApp business
- AI content creation Kenya
- AI marketing for small business
- n8n automation Kenya
- AI coaching Kenya
- ChatGPT training Kenya

Content should be practical and locally relevant rather than generic AI news.

Example articles:

- 10 Ways a Nairobi Business Can Use ChatGPT to Save 5 Hours a Week
- How to Use ChatGPT to Create 30 Days of Facebook Content
- 5 WhatsApp Customer Service Tasks You Can Automate
- How Kenyan Creators Can Use AI to Turn One Video Into 10 Pieces of Content

## Design Direction

Premium Kenyan business consultancy + modern AI.

Avoid:

- Robot-heavy imagery
- Glowing brains
- Excessive neon
- Generic AI stock photography
- Empty AI buzzwords

Preferred direction:

- Clean, modern layouts
- Strong typography
- White / neutral surfaces
- Electric blue as a primary accent
- Orange used selectively for high-intent CTAs
- Real business imagery and screenshots of practical workflows
- Mobile-first responsive design

The visual standard should feel credible for a KES 60,000–100,000 client while remaining approachable to a KES 8,000–12,000 small-business client.

## Development Principles

- Mobile-first
- Performance-first
- Accessible semantic HTML
- SEO-friendly static rendering
- Minimal client-side JavaScript
- Reusable Astro components
- Typed configuration/data where practical
- Secure handling of environment variables
- Never expose service-role keys or private credentials
- Keep lead data protected with Supabase RLS
- Build the MVP before adding complex client-portal functionality

## Environment Variables

Expected future variables may include:

```env
PUBLIC_SITE_URL=https://ecommercesolutions.co.ke
PUBLIC_WHATSAPP_NUMBER=
PUBLIC_CALENDLY_URL=
PUBLIC_SUPABASE_URL=
PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

Only variables that are actually required by an implementation should be added to the runtime configuration. Secrets must never be committed.

## Development

Once the Astro application is initialized:

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deployment

Target production domain:

`https://ecommercesolutions.co.ke`

Recommended deployment target: Cloudflare Pages.

DNS and production secrets should be configured outside the repository. The repository must remain safe to publish or collaborate on without exposing credentials.

## Roadmap

### Phase 1 — Foundation

- Astro project setup
- Global layout
- Navigation
- Responsive design system
- Homepage
- WhatsApp CTA
- SEO metadata
- Basic analytics

### Phase 2 — Conversion

- AI coaching package section/pages
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

This repository is dedicated to **Ecommerce Solutions Kenya / ecommercesolutions.co.ke** and its AI coaching, automation, and digital-growth website.

It is separate from the existing MobDeals automation repository and should not inherit MobDeals-specific application logic, branding, database schemas, or deployment configuration unless explicitly required.

## Status

**Project stage:** Planning / foundation

**Production website:** Not yet implemented in this repository.

**Primary domain:** `ecommercesolutions.co.ke`

**Primary market:** Kenya

**Primary conversion:** WhatsApp conversation / booked consultation
