# Service planner

Mode: Operate. Extend the existing website and its enquiry form with the flow approved by the owner.

## Direction contract

THESIS: Help visitors name the work they need help with and carry a complete service plan into an enquiry.

OWN-WORLD: Inherit the existing warm neutral surfaces, coral action colour, system UI type, Georgia emphasis and bordered working forms from DESIGN.md.

STORY: Pick business needs, see an explained recommendation, optionally add business context, then discuss the plan through the existing booking page.

FIRST VIEWPORT: A compact introduction above an eight-choice needs list and a live recommendation panel. Desktop uses two columns; mobile stacks them with a shortcut to the result. One primary action, “Discuss my plan”, belongs to the result.

FORM: Precisely specified extension approved by the user; no concept seed needed. Native checkboxes and selects; no modal, new visual world or generated imagery. Selection changes update the recommendation immediately without moving keyboard focus.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Booking handoff

The planner serializes only allowlisted option IDs in the internal `/book` link. The booking page recomputes the plan from those IDs, prefills the business type and task summary, and permits edits before contact. Personal names, email addresses and free-text enquiries never go into the planner URL. Unknown options are ignored. Empty or wholly invalid plans fall back to the existing coaching enquiry.

Business OS needs take priority. Otherwise the most-selected service leads; ties use the fixed order automation, AI assistant, business OS, Meta. Every other selected service remains in the recommendation. Hidden AI platform and Meta channel values are excluded from the handoff.

## Validation and review

Run `npm test`, `npm run lint`, `npm run typecheck` and `npm run build`.

- Recommendation tests cover all 255 non-empty need combinations and complete booking-link round trips, tie rules, invalid parameters and hidden options.
- DOM-level React tests cover selections, AI platform and Meta channels, booking prefill, enquiry preview and edit, WhatsApp draft contents, direct coaching packages, copy success/fallback and reset focus. They do not send enquiries.
- `jsdom` and `tsx` are development-only test dependencies. Tests use the installed Next.js search-parameter context so both actual page components are exercised.
- Source review found no material issue in the feature scope. Documentation review confirmed inheritance of the existing design system. No brand assets or global tokens changed.
- Desktop/mobile visual checks remain pending: the cloud browser could not access localhost. Before merging, check `/`, `/service-planner` (empty and all-needs states), and `/book` on a desktop and a narrow phone viewport; verify wrapping, overflow, visible keyboard focus and access to all result-panel actions. The implementation is delivered as a draft PR, not as production visual approval.

The private Sites preview is separate from this repository. Its owner-only access settings are not changed by this feature branch. Merging into a production deployment branch is a separate publishing decision.
