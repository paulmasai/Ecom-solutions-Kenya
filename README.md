# Ecommerce Solutions Kenya

Practical AI coaching, automation and digital growth for Kenyan business owners, creators and teams.

Production domain: https://ecommercesolutions.co.ke

## Current status

The public frontend is implemented with Next.js App Router, strict TypeScript, Tailwind CSS v4, shadcn primitives and an adapted 21st.dev underline hero.

Routes: `/`, `/ai-coaching`, `/about`, `/resources`, `/contact`, `/book` and `/audit`.

- Responsive shared navigation/footer, audience workflow tabs, package comparison and FAQ.
- Local business imagery and a social sharing image.
- Three downloadable resources and a free AI business check with a downloadable task plan.
- Enquiry preparation with validation and explicit WhatsApp/email handoff when configured.
- Canonical metadata, generated sitemap/robots and a not-found page.

**Not yet live:** backend lead storage, confirmed scheduling, production deployment and follow-up automations. Without business contact configuration, the interface clearly offers a downloadable brief and does not claim to send or book anything.

See [the repository review](docs/REPO_REVIEW.md), [content review](docs/CONTENT_REVIEW.md) and [remaining tasks](docs/IMPLEMENTATION_PLAN.md).

## Offers

| Package    | Audience                                        | Delivery                                          | Starting price |
| ---------- | ----------------------------------------------- | ------------------------------------------------- | -------------: |
| AI Starter | Shops, salons, restaurants and small businesses | 2 × 60-minute sessions                            |      KES 8,000 |
| AI Growth  | Creators, coaches and consultants               | 4 × 60-minute sessions + 2 weeks WhatsApp support |     KES 25,000 |
| AI Pro VIP | Established businesses, agencies and teams      | 6 × 60-minute sessions + 30 days support          |     KES 60,000 |

At least one useful workflow is built live during each engagement. Final scope, price and separate tool costs are agreed before commitment. The full offer remains in [OFFER.md](docs/OFFER.md).

## Local development

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Configure the public business channels in `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://ecommercesolutions.co.ke
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_CONTACT_EMAIL=
NEXT_PUBLIC_CALENDLY_URL=
```

Use an international WhatsApp number including its country code and no local leading zero. Scheduling requires a full HTTPS URL. Invalid or missing channels remain unavailable in the UI. These are build-time values; rebuild after changing them.

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

The site uses `output: "export"`. The production artifact is `out/`; `npm start` serves it locally on port 3000 using `serve`. Stop the development server before using the same port. Deploy the static output to an appropriate host; no deployment is performed by these commands.

Read the relevant installed Next.js documentation in `node_modules/next/dist/docs/` before changing framework code, as directed by [AGENTS.md](AGENTS.md).

## Component ownership

- `src/components/ui`: shared shadcn primitives and adapted registry components.
- `src/components/site`: shared header, footer, brand and page introductions.
- `src/components/marketing`: homepage sections, tabs, FAQ and resource lists.
- `src/components/coaching`: package comparison.
- `src/components/forms`: local enquiry and audit interactions.
- `src/lib`: offer content, public configuration, metadata and downloads.

The 21st.dev hero already supplied in the repository is attributed in its source. Additional registry imports need a valid development key:

```bash
npx shadcn@latest add "https://21st.dev/r/<username>/<slug>?api_key=$API_KEY_21ST"
```

Use a real component URL, review the files before accepting changes, and keep the credential out of commits and public environment variables. A Next.js `.env.local` does not automatically export a variable into the parent Codex process.

See [COMPONENT-SYSTEM.md](docs/COMPONENT-SYSTEM.md), [DESIGN.md](DESIGN.md) and [SITE-ARCHITECTURE.md](docs/SITE-ARCHITECTURE.md).

## Data and future integrations

The current enquiry form stores nothing: the visitor prepares a brief, reviews it and chooses whether to download it or open an external message draft. The audit uses a task-based suggestion, without an external AI API or personal-data capture.

Supabase persistence, n8n follow-up and payments are future work. They require a server endpoint, input validation, access controls, spam protection and appropriate privacy information. Never expose service-role keys, automation secrets, payment secrets or registry API keys.

This repository is dedicated to Ecommerce Solutions Kenya. It is separate from MobDeals and other projects.
