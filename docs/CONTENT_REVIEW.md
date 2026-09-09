# Website content review — 9 September 2026

## Audience and offer

The site continues to sell practical AI coaching to Kenyan shop owners, online sellers, service businesses, creators and teams. Copy uses clear English, KES prices and recognisable business tasks: WhatsApp enquiries, delivery questions, product descriptions, social posts and quotation follow-ups. Coaching remains the primary offer; this pass does not add website development services or change the packages.

This is an editorial improvement, not a measured conversion result. No keyword-volume research, customer interviews or conversion experiment was performed. English and the existing AI coaching focus are the working assumptions pending owner confirmation.

## Findings and changes

| Surface | Finding | Updated approach |
| --- | --- | --- |
| Homepage and shared sections | Several headings described ambition or momentum without explaining the service. | Name AI coaching, everyday tasks, live guidance, starting price and what the customer can practise. |
| Packages | Abstract phrases such as “content engine” and “SOPs” made the deliverables harder to compare. | Use concrete deliverables and “Discuss [package]” links; preserve session counts, starting prices and support periods. |
| About | General technology language did little to explain the coaching experience. | Describe working through the visitor’s own tasks, checking drafts and keeping reusable materials. |
| FAQs | Buying questions were spread across the site. | Answer beginner suitability, practical uses, prices, online delivery, additional costs, support and package choice. |
| Contact and booking | “AI Mastery Call” added jargon and suggested a booking action before one was available. | Use “Discuss AI coaching”; explain enquiry preview, manual sending and unavailable scheduling accurately. |
| `/audit` | “Opportunity audit” implied a deeper assessment than the three-question tool provides. | Call it a “Free AI business check”; explain that the chosen task selects a suggested plan. Keep the existing URL. |
| Form states | Labels varied between brief, conversation and enquiry. | Use enquiry consistently for preview, download and edit; explain exactly how to correct invalid inputs. |
| Resources | Downloads were useful but generic and lacked a clear continuation. | Add Kenyan examples, editable prompts, practical review steps and links to relevant coaching packages. Mark example shop details as fictional. |
| Metadata and 404 | Some titles were generic or repeated long marketing phrases. | Give each page a distinct, descriptive title and summary; provide a direct recovery action on the 404 page. |

Shared navigation, footer, accessible labels, download text, validation, loading, unavailable and result states were included. The supplied logos, illustrative photography and existing social image remain suitable brand assets and are unchanged.

## Terminology and factual boundaries

- **Discuss AI coaching:** the route for considering coaching and preparing an enquiry. It does not itself book or pay for a session.
- **Enquiry:** the visitor’s message, previewed locally and then downloaded or opened in a configured contact app. Nothing is automatically sent or stored by the form.
- **Free AI business check:** the existing self-guided tool at `/audit`. Its result is selected by task, without an AI API or personalised assessment.
- **Workflow:** a repeatable set of steps. Examples explain the steps rather than assuming the visitor knows the term.
- Prices remain **from KES 8,000 / 25,000 / 60,000**, with **2 / 4 / 6 sessions of 60 minutes**. Growth retains two weeks of WhatsApp support; Pro VIP retains 30 days of implementation support. Paid tools and other applicable external costs remain separate.
- No sales guarantees, time-saving percentages, client counts, testimonials, credentials, physical locations or new payment options were added.
- Customer prompts may ask for the customer’s preferred language, with translation review. This does not promise coaching delivery in an unconfirmed language.

## Source of truth and maintenance

This repository does not contain the SES ICT HUB Python inventory generator. The applicable content entry points are `src/lib/content.ts`, `src/lib/constants.ts`, the route components, forms and `public/resources/`. The SEO Content Creator skill’s factual-accuracy rule was applied directly; no inventory pipeline, API key or additional dependency was needed.

Existing offer facts come from [OFFER.md](OFFER.md) and the implemented package data. When prices or support terms change, update package data, FAQs, homepage price copy, metadata and downloadable resources together. The resource links currently use the project’s existing `ecommercesolutions.co.ke` domain; update them if the owner confirms a different domain.

SEO editing follows Google’s guidance on [helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [descriptive title links](https://developers.google.com/search/docs/appearance/title-link) and [page-specific snippets](https://developers.google.com/search/docs/appearance/snippet). The focus is a clear answer to the visitor’s question, without keyword repetition or invented authority.

## Remaining conversion dependencies

The most immediate launch dependency is working public contact information. Configure and test WhatsApp/email and, if wanted, scheduling; rebuild after changing these public environment values. Copy cannot complete an enquiry journey while those channels are unavailable.

Owner-confirmed service focus, language preferences, biography, real business photography and approved customer results would support the next content pass. Measure package discussions, completed enquiries and confirmed bookings once those paths are live; use those results to evaluate future copy changes.

## Validation

- Production build, including TypeScript, and ESLint passed after the final copy corrections.
- All seven public pages and the 404 page were checked at 360px and 1440px: one main heading, expected HTTP status and no horizontal overflow or clipped heading/button/link text. Public pages have distinct titles, descriptions and canonical links.
- 27 interaction checks passed for mobile navigation, audience examples, price FAQs, selected packages, enquiry validation/preview/edit/download, all three business check plans and the three resource downloads. No runtime exceptions or form submissions occurred.
- Downloaded resources match their edited source files. Each downloaded task plan contains four steps and the assessment limitation; the enquiry includes the selected package and omits an unused email field.
- Mobile and desktop screenshots were reviewed. The final pass shortened the business placeholder and added the brand to the homepage search title.
- `.env` and local browser artifacts remain ignored. No keys or new dependencies were added.

These checks cover the local static export. They do not establish production delivery, search rankings or conversion performance.
