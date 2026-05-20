# PRD — Foodbiz one-pager website

**Status:** Draft v1
**Owner:** Kami Labs (Purusharth)
**Last updated:** 2026-05-20
**Companion docs:** `CLAUDE.md`, `business-context.md`, `brand-voice.md`, `design-concepts.md`, `prd-multipager.md`

---

## 1. What we're building

A single-page, scroll-driven website at the root of `foodbiz.co.in` (or a marketing subdomain — TBD) that *reshapes itself around the visitor's brief*. Designed to be the share-worthy, polarising, brand-defining surface of Foodbiz. The multi-pager (see `prd-multipager.md`) sits behind it and carries the SEO, deep sub-brand pages, and long-tail traffic.

**Design concept:** Concept A from `design-concepts.md` — *The Brief Box*. The site opens with one prompt ("*What are you planning?*") and assembles itself around the visitor's answer. Alternatives B / C / D from the same doc are noted at the end of this PRD as fallback positions.

## 2. Goals and non-goals

### Goals
1. **Make Foodbiz feel singular.** A visitor who lands here should not be able to confuse this site with any other premium caterer in India (or globally).
2. **Embody the "hassle-free" brand promise in product, not in copy.** The site should *do* the work for the visitor.
3. **Surface the five-brand architecture without making the visitor learn it.** Moira / Caterpillar / Pillar Live / Gummy Gourmet / Foodbiz parent emerge contextually based on intent.
4. **Get a qualified brief out of the visitor with minimum friction.** The lead is the conversion event.
5. **Showcase the real portfolio.** Indian Navy, Ferrari, Edelweiss, Range Rover, Hublot, Kotak, Vodafone, Times Network, Ultra Japan, YouTube, Instagram — these names must land.

### Non-goals
- Long-form SEO content. (That's the multi-pager.)
- Deep sub-brand pages with their own URLs. (Multi-pager.)
- Blog / journal / "insights". (Multi-pager.)
- Comprehensive menu/dish catalogue. (Multi-pager + Sanity-managed catalogue.)
- A booking / scheduling system. (Out of scope for v1; future phase.)

## 3. Audience & top jobs-to-be-done

| Visitor segment | What they came for | What the site should give them |
|---|---|---|
| Bride / groom / family | "Find a wedding caterer who can handle our specific cultural and dietary brief." | A photographic answer that says: yes, we've done weddings like yours; here's the team you'd talk to; here's where you start. |
| Corporate buyer (HR / admin / EA) | "Find a serious caterer for sustained corporate dining." | Caterpillar work surfaced; numbers; a way to leave a brief. |
| Event lead at a brand / agency | "Find a caterer who can handle a 500–2000-pax brand launch." | Pillar Live work; client logo wall (Ferrari, Range Rover, etc.); a way to leave a brief. |
| Parent | "Find someone who can cater a kid's party without making me wince." | Gummy Gourmet work; reassurance about food and approach; quick brief form. |
| Government / institutional | "Find a caterer with protocol experience." | Pillar Live work; Indian Navy reference; a serious-feeling brief route. |
| Press / awards / industry | "Get a fast sense of who Foodbiz is and the work they've done." | The numbers, the names, the work, the people. |

## 4. Information architecture (the one-pager)

The page is a single vertical scroll. There is **no traditional top nav** at first load. Once the visitor has engaged with the Brief Box, a slim bottom-dock surfaces with five anchors (one per sub-brand) and a "*Talk to us*" CTA. Sections, in order:

1. **The Brief Box** (above-the-fold hero)
2. **The Reshape** (this isn't a section so much as a state-change — the rest of the page adapts based on the brief)
3. **Story** — one-line origin + a 20-second founder voice-note (Amar or Kush)
4. **The Numbers** — 30 years, big jobs, scale
5. **The Five Tables** — the sub-brand wall (5 panels, one per sub-brand)
6. **Selected Work** — case-study tiles (image-first; named clients; one-line story each)
7. **Brands We've Hosted** — logo wall (Indian Navy, Ferrari, Range Rover, Edelweiss, Hublot, Kotak, Vodafone, Times Network, Netflix, Ultra Japan, YouTube, Instagram, etc.)
8. **The People** — Amar + Kush + key team. Real photos, short bios. The opposite of stock-pic "About Us".
9. **Brief Form** — the longer brief intake, pre-filled with the visitor's earlier prompt
10. **Footer** — phone, email, address, social, links to the multi-pager

## 5. Section-by-section specification

### 5.1 The Brief Box (hero)
**Above the fold. The first impression. The most important screen on the site.**

**Visual:**
- Near-empty page. Background colour: a warm off-white (#FBF8F3 or similar — finalise against the palette).
- Centred typographic prompt: "*What are you planning?*" — set in the brand display face at roughly 64–96px desktop / 36–48px mobile.
- Below the prompt, a single-line text input with a soft underline. Placeholder: "*Type in a few words. A wedding, an event, a kid's party…*"
- Below the input, a horizontal row of 5–6 suggestion chips (animated drift on hover): *a Marwari wedding*, *a 600-person summit*, *my kid's third birthday*, *an executive dining programme*, *honestly, I don't know yet*.
- One slow ambient detail in the background: a single looped video element (8–12s loop). E.g., a hand placing a cardamom pod on a thali, a wedding plate being set, a chef's hands wiping the rim of a bowl. Low brightness, low motion. Filmic.

**Behaviour:**
- On chip click OR Enter on the input, the page transitions: the prompt animates upward, the input pins to the top as a slim header, and below it the page assembles itself for the visitor's intent.
- The transition is one big animation moment — design for it as a centerpiece. Suggested: 600–800ms total; ease-out on layout; cross-fade on background photography.
- After engagement, a small "*Change brief*" affordance lets the visitor restart.

**Intent mapping (rule-based, no LLM required for v1):**
- Keyword matrix → intent → sub-brand routing. Examples:
  - `wedding`, `bride`, `groom`, `mehendi`, `sangeet`, `marwari`, `gujarati`, `christian` → **Moira**
  - `summit`, `g20`, `defence`, `government`, `protocol`, `launch`, `gala`, `1000+`, `large` → **Pillar Live**
  - `office`, `lunch`, `executive dining`, `cafeteria`, `daily`, `cafe`, `corporate dining`, `recurring` → **Caterpillar**
  - `kid`, `kids`, `child`, `children`, `birthday`, `party`, `school` → **Gummy Gourmet**
  - `event`, `corporate`, `brand`, `launch` (without scale signal), `dinner` → **Foodbiz parent** (with a soft Pillar Live nudge if numbers > 300)
  - `i don't know`, `not sure`, "*honestly*" chip → **Foodbiz parent** with all 5 surfacing in a discovery layout

**Edge cases:**
- Empty submission → gently animate the prompt back to neutral with a "*Tell us a bit more.*" nudge.
- Multilingual input → v1 English only. Add a one-line "*We respond in English and Hindi.*" microcopy.
- Multiple intents (e.g., "wedding for 1500 people") → surface Moira primarily with Pillar Live as a "We also handle scale at this size" callout.

**Mobile:**
- Same architecture. Suggestion chips become a scrollable horizontal carousel. Prompt is smaller (36–48px). Background video stays.

### 5.2 The Reshape (state change)
Not a section the visitor sees as a section. It's the moment of layout change between the Brief Box and the rest of the page. Implementation: a single layout-animation moment using Framer Motion's `LayoutGroup` / `motion.div` with shared layout IDs.

**What changes based on intent:**
- Background palette (each sub-brand has a colour accent; the page tints subtly toward that accent).
- The hero photography in subsequent sections.
- The order and emphasis of subsequent sections (e.g., Moira intent → "Selected Work" leads with wedding case studies; "The Five Tables" surfaces Moira first).
- The CTA copy in the Brief Form ("*Tell us about your wedding*" vs "*Brief us on your event*").

**What stays constant:**
- The 5 brands are always present in The Five Tables, just reordered.
- The 30-year story, the founders, the numbers, the logo wall — these don't change.

### 5.3 Story
**Goal:** Establish "30 years" in a way that doesn't feel like a brag.

**Layout:**
- Full-width section. Off-white background.
- Left half: a single, large, archival-looking photograph from the early years of Foodbiz (sourced from the photo library — Amar's choice).
- Right half: one paragraph in the brand voice (≤60 words). Below it: an embedded short audio player — Amar or Kush voice-noting a 20-second welcome.

**Audio component:**
- Custom mini-player (not the default HTML5 element). Single waveform line + play/pause. Tap to play; pauses on scroll past.
- Auto-transcript visible below the waveform.

### 5.4 The Numbers
**Goal:** Substance carries the emotion. No adjectives.

**Layout:**
- Three or four stat blocks side-by-side on desktop, stacked on mobile.
- Each block: one big number (display face, 80–120px) + one short label in body face.
- Numbers count up on scroll-in (Framer Motion `useTransform` + scroll progress; not auto-on-load).

**Sample blocks (numbers to confirm with Amar/Kush):**
- *30 years*
- *Over 1,800 events*
- *21 cities, 4 countries*
- *5 specialist brands*

### 5.5 The Five Tables
**Goal:** Introduce the 5 sub-brands as a wall, in a way that's beautiful even if you scroll past without engaging.

**Layout:**
- Five vertical panels side-by-side on desktop. Each panel: full height of section, edge-to-edge image, slim overlay with sub-brand mark + one-line description.
- On mobile: vertical stack.
- Order: based on visitor intent (Reshape state). For "honestly, I don't know yet", default order: Foodbiz parent → Moira → Pillar Live → Caterpillar → Gummy Gourmet.

**Per-panel content slots:**
- Hero image (real photography, sub-brand-appropriate).
- Sub-brand mark (logo PNG).
- One-line tagline (from content drafts — see `content-drafts.md`).
- Soft CTA: *Take me here* → smooth-scrolls to that sub-brand's section in the multi-pager OR opens its case-study modal.

**Interaction:**
- Hover (desktop): panel slightly expands; sibling panels shrink. Subtle. Not a parallax-festival.
- Click: opens a lightbox-style overlay with that sub-brand's 60-second story + 4 case-study tiles + CTA to the multi-pager's deep page.

### 5.6 Selected Work
**Goal:** Make the portfolio land. The Navy and Ferrari should be the first two seen by everyone.

**Layout:**
- Asymmetric grid (Bento-style). Some tiles 2:1, some 1:1, some 1:2. 6–9 visible tiles, with a *"See all 80+"* CTA at the bottom.
- Each tile: image-first; a thin overlay strip on hover with client name + event name + year + one-line context.
- Filter chips at the top of the section: *All / Weddings / Corporate / Brand launches / Government / Kids*.

**Required first-row tiles (cannot be reordered out of the first viewport):**
- Indian Navy — INS Karanj commissioning
- Ferrari — 812 Superfast launch
- Edelweiss — quarterly conference series
- *(One more, to be picked from photos)*

**Click behaviour:** Opens a case-study modal — full image, three paragraphs of context, the sub-brand it sat under, a *"Brief us on something similar"* CTA.

### 5.7 Brands We've Hosted
**Goal:** The logo wall, but it should not feel like every other site's logo wall.

**Layout treatment options (pick one in design phase):**
- *Option A:* A horizontal scrolling marquee with two opposing rows. Logos in mono / desaturated by default; colour on hover.
- *Option B:* A grid of small client mark cards, each clickable to open the related case study (where it exists).
- *Option C:* A typographic treatment — client names set as a wall of words, like a film credits roll, sub-brand colour-coded.

**Default recommendation:** Option C — typographic. Differentiates from every competitor site, which all use mono logo grids.

### 5.8 The People
**Goal:** Make the company feel like a company you'd want to host you. Real people, not stock-bio prose.

**Layout:**
- Amar + Kush as two large card-style portraits. Real, candid photography (not corporate headshots). Each with a 2-sentence bio in the brand voice.
- A "*The team behind the work*" strip below: 4–8 secondary portraits (chef lead, ops lead, events lead, kitchen lead, etc.). Each has a name + role + a one-line "*what I do at Foodbiz*" caption.

### 5.9 Brief Form
**Goal:** Capture a qualified brief. Pre-filled where possible.

**Fields (lean — friction kills conversion):**
1. *What you're planning* (pre-filled with the visitor's earlier prompt; editable).
2. *When* (date or month, optional).
3. *Where* (city; default Mumbai).
4. *Roughly how many guests* (numeric, optional).
5. *Your name*
6. *Your number / email* (one or the other required)
7. *Anything we should know up front?* (free text, optional)

**Submission behaviour:**
- POST to a Sanity webhook OR a Resend email pipeline; alert goes to the routed sub-brand's owner (Amar / Kush / brand lead).
- Confirmation screen: a personal-feeling acknowledgement using the visitor's name + their brief paraphrased back ("*Got it — Marwari wedding in November, around 600 guests. We'll be in touch within a working day.*").

**Routing logic:** Same intent matrix as the Brief Box. Tag the lead with the routed sub-brand so the right team picks it up.

### 5.10 Footer
**Layout:**
- Two-column on desktop, stacked on mobile.
- Left: address, phone (Amar + Kush), email (hello@foodbiz.co.in), business hours.
- Right: links to the multi-pager (Home, About, Moira, Caterpillar, Pillar Live, Gummy Gourmet, Foodbiz parent, Blog, Careers, Contact), social handles.
- Below: a slim band with *"Made for hosts who'd rather be present."* (or whatever the closer line ends up being from content drafts) and ©.

---

## 6. Visual design direction

**Palette** (anchored to the 23 May 2025 meeting brief — gold + pastel, 50s/70s luxury car palette, no orange/green):
- **Base**: warm off-white (#FBF8F3), deep charcoal text (#1A1A1A).
- **Master accent**: a warm, restrained gold (#C9A961 or similar — sample on copper plates if available).
- **Sub-brand accents**:
  - Foodbiz parent — the existing teal (#1AAFA0), but only as an accent, not the full brand colour.
  - Moira — gold / copper, inherited from Foodbiz Weddings legacy mark.
  - Caterpillar — the existing red/yellow/green from the mark, but desaturated for web use.
  - Pillar Live — TBD. Recommend a deep navy / midnight blue (#162646) to differentiate from the rest and signal institutional weight.
  - Gummy Gourmet — the existing pastel-and-coral from the mark.

**Typography:**
- Display: a contemporary serif with character (recommend *PP Editorial New*, *Söhne Breit*, or *Tiempos Headline*).
- Body: a clean modern sans (recommend *Inter*, *Söhne*, or *Suisse Int'l*).
- Avoid: ornamental scripts, calligraphy, anything that screams "wedding caterer".

**Photography treatment:**
- Real Foodbiz library throughout. No stock.
- Editorial colour grade — slightly desaturated, warm midtones, deep blacks. Reference: *Cereal*, *Kinfolk* (early), *The Gentlewoman*.
- Subject matter biased toward people > food alone. Plates should appear with hands, settings, context.

**Motion:**
- Default: soft, restrained, never bouncy.
- Page transitions and the Reshape moment are the centerpieces.
- Hover micro-interactions on sub-brand panels and case-study tiles only.
- No parallax festivals. No mouse-following blobs.
- Easing: `ease-out` for entries, `ease-in-out` for layout changes, ~300–500ms.

---

## 7. Brand voice in product

All copy follows `brand-voice.md`. Specifically for this site:

- The first words a visitor reads ("*What are you planning?*") must do the brand-voice test: warm, considered, modern.
- Suggestion chips written in the founders' voice (informal, specific).
- Confirmation copy on form submit written like Amar would write it ("*Got it. We'll come back to you within a working day.*"), not like a SaaS auto-responder.
- No use of any banned vocabulary from `brand-voice.md` § "Don't" anywhere in the site. Period.

---

## 8. Tech stack

**Confirmed:** Next.js 15 (App Router) + Tailwind CSS + Framer Motion + Sanity v3 (CMS) + Vercel.

**Detail:**
- **Next.js 15** — App Router; server components for static content; client components only where interactivity is required (Brief Box, Reshape state, case-study modals, form).
- **Tailwind CSS** — utility-first; design tokens (palette, type scale, spacing) defined in `tailwind.config.ts` from the visual palette above.
- **Framer Motion** — page-level layout animations; the Reshape moment; sub-brand panel hover; number count-up; case-study modal transitions.
- **Sanity** — content types: Case Study, Sub-brand, Team Member, Logo Wall Entry, Number Stat, Homepage Copy. Editable by Amar / Kush without engineering involvement.
- **Vercel** — hosting; ISR for the Sanity-driven content; Edge functions for the lead-routing webhook.
- **Email**: Resend for transactional acknowledgement.
- **Forms**: Native HTML + Server Actions for the submission; double-opt-out validation client-side (no third-party form library).
- **Analytics**: Plausible (privacy-first) + a custom event log for Brief Box intent.

**Things explicitly not in the stack:**
- No Webflow / Framer (the product). We need code-level control over the Reshape state.
- No headless e-commerce.
- No WebGL / Three.js at v1 (we keep that capability for the multi-pager's hero if we go ambitious there).

---

## 9. Performance, accessibility, and SEO

**Performance budget:**
- LCP < 2.0s on a fast 4G connection.
- INP < 200ms on the Brief Box interactions.
- CLS < 0.05.
- Initial JS bundle < 150KB gzipped.
- Each hero / Five Tables / Selected Work image: AVIF + WebP with `<picture>`; LQIP / blur placeholder; native lazy loading; max 200KB on the wire per image at typical viewport sizes.

**Accessibility:**
- WCAG 2.2 AA target.
- Brief Box prompt is a real `<form>` with a label; suggestion chips are `<button>` elements; submit is a real submit button.
- All animations respect `prefers-reduced-motion` (the Reshape becomes a crossfade instead of a layout dance).
- Colour contrast verified against the palette.
- Keyboard navigation: full. Especially the Five Tables and case-study modal.
- Alt text on every image. Foodbiz event captions doubled as alt where appropriate.

**SEO:**
- The one-pager is *not* the SEO surface — the multi-pager is.
- Set a `noindex` on the one-pager OR make it a separate experience subdomain (e.g., `experience.foodbiz.co.in`). Recommend: **separate subdomain**. The root `www.foodbiz.co.in` becomes the multi-pager.
- Open Graph / Twitter cards: design one bespoke share image that says "*What are you planning?*" on the brand palette. This is what gets shared.
- Schema.org: Organization, FoodEstablishment, LocalBusiness on the multi-pager. The one-pager carries just Organization.

---

## 10. Analytics & success metrics

**What to track:**
- Brief Box engagement rate (% of visitors who interact with input or chips).
- Brief Box submission rate (% who submit a brief).
- Intent distribution (which sub-brand routes are most common).
- Section scroll-depth.
- Case-study tile clicks per tile (used for prioritising the visible-without-scrolling tiles).
- Share events (OG image link copies, social shares).

**Quality targets (12-month):**
- 1.5%+ visitor-to-brief conversion rate.
- < 30% bounce rate on the Brief Box (defined as "left without engaging or scrolling past hero").
- Time-to-brief median < 90 seconds on a converting session.

---

## 11. Out of scope (for the one-pager)

- Blog / What's In journal — multi-pager.
- Careers page — multi-pager.
- Deep sub-brand pages (Moira's full story, Caterpillar's catering programmes, etc.) — multi-pager.
- Menu PDFs / dish catalogue — multi-pager + Sanity.
- Multi-language (i18n) — Phase 2.
- Payment / booking — Phase 3 (likely the app, not the website).

---

## 12. Open questions for the founders / Kami Labs

1. **Subdomain or root?** One-pager at root (`www.foodbiz.co.in`) with multi-pager at `/explore`, or one-pager at `experience.foodbiz.co.in` with multi-pager at the root? PRD recommends the latter.
2. **The 20-second voice note from Amar or Kush** — willing to record? It's the highest-leverage authenticity device on the site.
3. **The numbers** — the page needs accurate stats. 30 years, ~1,800 events, 21 cities — please confirm or correct.
4. **The first-row Selected Work tiles** — confirm Indian Navy, Ferrari, and Edelweiss as the lead three. Pick the fourth.
5. **Brief routing emails** — single inbox or per-sub-brand owners? PRD assumes per-sub-brand routing.
6. **Logo design for Moira and Pillar Live** — does the design phase start with placeholder wordmarks (typography-only), or do we pause the one-pager until the logos exist? PRD assumes placeholder wordmarks initially.

---

## 13. Fallback positions if Concept A is rejected

If the founders find *The Brief Box* too radical, Concept B (*The Pass*) is the next-best fit and can be substituted with the following PRD changes:
- §5.1 becomes the pass-issue hero (name + brief + date inputs → animated pass).
- §5.2 (Reshape) is replaced by a scroll-pinned cinematic timeline ("5:47am Crawford Market → ... → late-night kitchen").
- §5.5 (Five Tables) becomes "five stops on the day" — embedded inline in the cinematic scroll instead of a standalone wall.
- All other sections (Numbers, Selected Work, Brands, People, Brief Form, Footer) stay as written.

If the founders want Concept C (*Thirty Years*) or D (*Five Plates*), this PRD needs a heavier rewrite — flag and re-spec.
