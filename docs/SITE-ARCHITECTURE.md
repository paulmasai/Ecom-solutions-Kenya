# Site architecture

## Implemented routes

| Route          | Purpose                                                                                     |
| -------------- | ------------------------------------------------------------------------------------------- |
| `/`            | Homepage: practical promise, audience workflows, delivery process, packages, resources, FAQ |
| `/ai-coaching` | Package scope, prices, session counts and support details                                   |
| `/about`       | Coaching approach and delivery principles                                                   |
| `/resources`   | Three downloadable text resources                                                           |
| `/contact`     | Contact options and local enquiry preparation                                               |
| `/book`        | Scheduling/WhatsApp handoff and package-aware conversation brief                            |
| `/audit`       | Self-guided workflow suggestion and downloadable plan                                       |

A shared layout owns the navigation, footer and main landmark. Next.js supplies the not-found route. Audience-specific `/businesses` and `/creators` pages are deferred; the homepage currently covers those audiences through accessible tabs.

## Conversion hierarchy

Primary: book an AI Mastery Call. Secondary: WhatsApp when configured. Alternative starting point: free self-guided audit.

Package links pass a validated package slug in the booking URL. Enquiry details are held in memory and reviewed before the visitor chooses a download or external WhatsApp/email handoff. A prepared brief is not a sent lead or confirmed booking.

## Current architecture

```text
Next.js App Router + TypeScript
  ├── Server-rendered marketing pages at build time
  ├── Client navigation, tabs and local forms
  ├── Shared shadcn primitives + existing adapted 21st.dev hero
  └── Static export: out/
        └── Static hosting (Cloudflare target; deployment not configured here)
```

`npm start` serves the built export locally. Public contact values and metadata URL are evaluated at build time. Images and downloads are local files.

## Future lead pipeline

```text
Browser form
  → validated/rate-limited server endpoint
  → Supabase leads + consent/retention controls
  → n8n notification and follow-up
  → verified booking/payment events
```

The current static export has no request-time backend. A separate endpoint or a server-capable deployment must be selected before adding persistence. Service-role keys, automation credentials and registry keys must never be public client environment variables.

## Visual direction

See [DESIGN.md](../DESIGN.md). The current implementation uses warm neutral surfaces, dark typography, one coral action accent, the original multicolour brand mark, illustrative business photography and reduced-motion-safe transitions.
