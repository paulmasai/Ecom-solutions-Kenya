# Site Architecture

## MVP Pages

- `/` — conversion-focused homepage
- `/ai-coaching` — coaching overview and packages
- `/businesses` — AI outcomes for business owners
- `/creators` — AI outcomes for creators and coaches
- `/resources` — practical Kenya-focused AI content
- `/about` — company and consultant credibility
- `/contact` — contact options
- `/book` — consultation / booking route

## Homepage Sections

1. Hero: outcome-led promise
2. Trust signals: Kenya, practical implementation, automation, WhatsApp support
3. Business outcomes
4. Audience selector: businesses / creators / established teams
5. Live implementation differentiator
6. Package comparison
7. How it works
8. Tools and integrations
9. Free AI Business Opportunity Audit
10. Testimonials / case studies when available
11. FAQ
12. Final CTA

## Conversion Hierarchy

Primary CTA: **Chat on WhatsApp**

Secondary CTA: **Book an AI Mastery Call**

Tertiary CTA: **Get the Free AI Business Opportunity Audit**

## Design System Direction

- Mobile-first
- Premium consultancy feel
- Neutral/light surfaces
- Strong dark typography
- Electric blue primary accent
- Orange reserved for high-intent actions
- Subtle borders and depth rather than heavy glassmorphism
- Human/business photography and real workflow screenshots
- Avoid generic AI robots and neon-futuristic stock imagery

## Technical Architecture

```text
Astro site
   ↓
Cloudflare Pages
   ↓
Supabase
   ├── leads
   ├── audit submissions
   ├── consultation requests
   └── future client records
   ↓
n8n
   ├── notifications
   ├── lead qualification
   ├── email follow-up
   ├── WhatsApp workflows
   └── booking/payment events
```

## Security

- Public Supabase client may only use the anon key.
- Service-role credentials remain server-side and are never committed.
- Lead tables require appropriate RLS policies.
- Form endpoints must validate and rate-limit input.
- Spam protection should be added before production launch.
