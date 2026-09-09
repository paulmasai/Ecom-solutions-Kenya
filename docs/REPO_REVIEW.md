# Repository review — 9 September 2026

## Scope and outcome

Reviewed the local source, package scripts, roadmap, component guidance and conversion flows. Built the missing public frontend routes and improved the homepage. Production hosting, external accounts, databases and automations were not deployed or verified.

## Findings addressed

| Finding in the initial repository                                                       | Resolution                                                                                                                 |
| --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| All conversion buttons resolved to a missing `#contact` anchor when WhatsApp was unset. | Real `/book` and `/contact` routes; optional channels appear only with valid configuration; clear unavailable states.      |
| Navigation lived inside the hero and had incomplete keyboard behavior.                  | Shared header/footer, skip link, Escape dismissal, focus return and active-route indication.                               |
| The stacked logo became tiny at header height; visual styling was inconsistent.         | Original mark with readable horizontal wordmark; warm neutrals, coral accent and shared typography/spacing tokens.         |
| A large client hero bundled navigation and a second button primitive.                   | Server-rendered adaptation of the supplied 21st.dev hero; shared shadcn button; local photo and reduced-motion-safe CSS.   |
| Only the home route existed.                                                            | Home, coaching, about, resources, contact, booking, audit and not-found pages.                                             |
| Packages omitted session/support details and shared the same generic CTA.               | Consistent offer data, scope/features, session counts and package selection passed into booking.                           |
| No resources or audit could be used.                                                    | Three actual text downloads; a self-guided audit with three workflow plans and downloadable output.                        |
| Metadata was minimal and the sitemap only covered the homepage.                         | Route-specific metadata/canonicals, a 1200 × 630 social image, generated sitemap and robots using the configured site URL. |
| `next start` was incompatible with the existing static export.                          | `npm start` now previews `out/` through pinned `serve`; no SPA fallback hides real 404s.                                   |
| Docs still instructed contributors to initialise/deploy Astro.                          | Updated architecture, README and checklist to the implemented Next.js stack.                                               |

## Remaining work, in priority order

### P0 — Enable and verify the real conversion channels

Configure `NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_CONTACT_EMAIL` and, optionally, `NEXT_PUBLIC_CALENDLY_URL`. These are public, build-time values. Rebuild after changing them. No real business contact values were supplied during this work.

The unconfigured frontend deliberately allows downloading a brief, and explicitly states that nothing has been sent or booked. This is useful frontend behavior, but it is not a live lead-capture integration. Test real delivery and a confirmed booking before launch.

### P0 — Confirm production delivery

Choose and configure the Cloudflare static hosting project, build command `npm run build`, output directory `out`, domain/DNS and deployment environment. A server API will need separate hosting or a server-capable Next.js deployment. This review did not publish changes.

### P1 — Lead persistence and automation

Implement a validated, rate-limited API before enabling database submissions. Add a Supabase schema, appropriate RLS, privacy/retention decisions and spam protection. Keep service-role and n8n secrets server-side. Add delivery monitoring and retries before treating follow-up automation as reliable.

The current static export cannot run request-time Server Actions/API persistence. Do not silently add an endpoint that cannot run on the deployment target.

### P1 — Restore new 21st.dev imports

The existing 21st.dev Underline Hero Section is adapted and attributed in the source and [DESIGN.md](../DESIGN.md). The MCP environment variable remains unset; a public registry fetch also required authentication. The previously saved key was rejected in earlier connection troubleshooting. A fresh valid key is needed for additional registry imports. Newly authored tabs, FAQ and forms are local components, not claimed as registry downloads.

### P2 — Build authority and measurement

Add an approved consultant biography, credentials, original photography, verified case studies and genuine testimonials. Add substantive articles and conversion tracking with an appropriate privacy approach. No client counts, endorsements or outcome statistics were invented.

### P2 — Make ongoing maintenance repeatable

Add CI for lint, type checking and production builds. Adopt explicit dependency update/pinning policy; most original packages still use `latest`, with the committed lockfile supplying reproducibility through `npm ci`. Add recurring automated browser coverage as the live booking and API integrations are introduced.

## Validation

- `npm run lint` — passed without warnings.
- `npm run typecheck` — passed.
- `npm run build` — passed; all seven public routes plus not-found, robots and sitemap exported. A sandbox-induced Turbopack worker failure required moving the generated cache aside and rebuilding with local port access; no source workaround was needed.
- `npm start -- --listen tcp://127.0.0.1:3101` — served the production export successfully.
- Chromium browser checks — 133 assertions covering all seven routes at 360, 390, 768 and 1440px, internal links/downloads, images, metadata, HTTP 404 behavior, mobile navigation, Escape/focus return, keyboard tabs/FAQs and reduced motion. No runtime exceptions were observed.
- Enquiry/audit checks — 28 assertions covering required and whitespace-only inputs, optional/invalid email, package selection, unknown package fallback, editable drafts, unavailable channels and all three audit outcomes. Downloaded enquiry and audit files were also checked for usable content.
- Configuration checks — 13 assertions for missing values, rejected unsafe URL schemes, WhatsApp number normalization, email configuration and encoded message text.
- Axe WCAG A/AA scans — zero automated violations across seven routes at 390 and 1440px after darkening the coral token. Photography-background contrast remains a manual check and was reviewed visually.
- Final targeted review confirmed that the self-guided audit does not preselect a coaching package and that the corrected color token is present in the export.

Local screenshots and one-off browser check scripts are in `output/playwright/` (ignored by Git). Business contact delivery, scheduling confirmation, production hosting and future backend integrations still require real end-to-end verification.
