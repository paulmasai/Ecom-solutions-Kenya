# Implementation plan

Reviewed against the repository on 9 September 2026. This is a Next.js App Router static export; the previous Astro checklist was obsolete.

## Phase 1 — Foundation

- [x] Next.js App Router, strict TypeScript and Tailwind v4
- [x] shadcn component foundation
- [x] Adapt the existing 21st.dev underline hero and record its source
- [x] Shared responsive navigation, footer and skip link
- [x] Cohesive design tokens, local imagery and reduced-motion support
- [x] Homepage with audience workflows, process, packages, resources and FAQs
- [x] Page metadata, canonical URLs, social image, robots and sitemap
- [x] Dedicated not-found page
- [x] Static-export preview command compatible with `output: "export"`
- [x] Configure owner-provided public WhatsApp/email defaults and local build settings
- [ ] Verify receipt of a real enquiry after deployment; configure scheduling if needed
- [ ] Restore a valid development-only 21st.dev API key for new registry imports

## Phase 2 — Conversion

- [x] AI coaching overview with package comparison and delivery details
- [x] Booking route with configured scheduling/WhatsApp options
- [x] Carry the selected package into a conversation brief
- [x] Accessible enquiry form with validation, review and download
- [x] Explicit WhatsApp/email handoff when those channels are configured
- [x] Free self-guided AI business check at `/audit` with downloadable plan
- [x] Rewrite public copy, metadata, form states and downloads for Kenyan business customers
- [ ] Persist contact and audit submissions through a validated server endpoint
- [ ] Add spam protection, rate limits and suitable lead-data retention/consent
- [ ] Add conversion events with a documented privacy approach
- [ ] Verify a real enquiry and confirmed booking end to end

The enquiry form currently prepares a brief in the browser; it does not submit to a backend or confirm a booking. The audit gives a deterministic suggestion based on the selected task, not an AI-generated assessment. Neither flow stores personal information.

## Phase 3 — Automation

- [ ] Create Supabase lead schema and least-privilege RLS
- [ ] Choose a separate server API or move from static export to a server-capable deployment
- [ ] Add n8n lead notifications and monitored retry behavior
- [ ] Add consent-based email/WhatsApp follow-up
- [ ] Connect verified booking events
- [ ] Connect payment events and reconciliation

## Phase 4 — Authority

- [x] Resources hub
- [x] Downloadable customer-reply prompt, content workbook and automation checklist
- [x] About page describing the actual coaching approach
- [ ] Add verified consultant biography, credentials and original business photography
- [ ] Publish substantive SEO articles with author and review dates
- [ ] Add approved case studies with measured results
- [ ] Add real testimonials with permission

## Phase 5 — Client experience

- [ ] Authentication and authorised client dashboard
- [ ] Session recordings and resources
- [ ] Client prompt/SOP libraries
- [ ] Support and session-status area

## Launch gates

- Production domain and hosting configuration verified.
- Confirmed public contacts included in the production build; remove stale empty hosting overrides. Configure a scheduling URL if using online booking.
- WhatsApp conversation and booking tested on mobile and desktop.
- If lead storage is enabled: validation, spam protection, access controls and privacy information verified.
- Production build, type check, lint and browser smoke checks pass.
- Responsive and keyboard flows verified; no broken internal links or missing resources.
- No secrets committed.

See [REPO_REVIEW.md](REPO_REVIEW.md) for findings, priorities and validation evidence.
