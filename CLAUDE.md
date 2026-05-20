# CLAUDE.md — Foodbiz one-pager (The Brief Box)

You're building a draft Next.js site for a Mumbai-based premium catering and hospitality company called **Foodbiz**. This folder is self-contained — everything you need is here. Read it before writing code.

---

## What you're building

A single-page interactive website built around one idea: the page opens with one question — *"What are you planning?"* — and reshapes itself around the visitor's answer. The visitor types or picks from suggestion chips; the page below assembles to fit their intent. The five Foodbiz sub-brands (Moira, Caterpillar, Pillar Live, Gummy Gourmet, Foodbiz parent) surface contextually instead of being navigated to.

**This is a design draft for client approval. NOT a production launch.** The client will see this and pick between this concept and a sibling concept (*The Pass* — being built in a different folder). Optimise for: visual polish on the hero, the Reshape animation moment, and conveying the brand voice. Don't sweat: real Sanity CMS integration, full SEO, comprehensive a11y, production form-handling pipeline.

---

## Files in this folder

| File | What it is | When you'd read it |
|---|---|---|
| `PRD.md` | Full product spec for this one-pager. Section-by-section. | First. Most of what you need. |
| `brand-voice.md` | Voice & language reference. Has a list of **banned vocabulary** — read it carefully. | Before writing any copy in code. |
| `business-context.md` | Background on Foodbiz: brand architecture, real client list, founders. | When you need to understand a decision in the PRD. |
| `content.md` | Placeholder copy for every section, in the locked voice. Use this verbatim for v1. | When filling content into components. |
| `logos/` | Brand marks: `foodbiz-parent.png/.jpg`, `caterpillar.png/.jpg`, `gummy-gourmet.png/.jpg`. PNGs are transparent-bg, ready for web use. | When wiring sub-brand marks. |

---

## Critical constraints

### Tech stack (locked)
- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS**
- **Framer Motion** (for the Reshape animation, scroll behaviour, hover micro-interactions)
- **Vercel** for hosting / preview URLs
- No CMS at v1 — content is in TSX files driven by `content.md`
- No backend at v1 — form submission can `console.log` for now (or post to a webhook if trivial)

### Brand marks — Moira and Pillar Live
**Both logos are still being designed.** Use typographic placeholders, baked into a single shared `<BrandMark name="moira" />` component so you can swap the real logos later with no other changes:

- **Moira** — serif display face, **gold/copper colour `#C9A961`** (sample against the legacy gold mark in `logos/foodbiz-weddings-legacy.png` for the exact tone). Mixed case. Set at the same optical weight as the other sub-brand marks.
- **Pillar Live** — serif display face, **deep navy `#162646`**. **All caps**, slightly tighter tracking. Two words on one line. Reads institutional, not flashy.

The other three (`foodbiz-parent`, `caterpillar`, `gummy-gourmet`) use the real PNGs in `logos/`.

### Imagery
The client has a strong real-photography library; we don't have access to it from this folder. **Use high-quality placeholder photography from Unsplash** (or similar free, license-clear source) that approximates the *kind* of image the spec calls for. Hand off slots with semantic file names (`hero-bg.jpg`, `selected-work-navy.jpg`, etc.) so the client team can swap to real images later.

For the ambient hero loop in §5.1 of the PRD (a quiet looping detail in the background) — use a single short MP4 from a free source (Pexels Video, Coverr, Pixabay) of food-related motion. If none works, replace with a single very-slow-pan still image.

### Brand voice — non-negotiable
Read `brand-voice.md` before writing any in-code copy. The "Don't" section lists banned words across four categories:
- Cliché catering (*bespoke, curated, crafted, exquisite, gourmet, elevated…*)
- Ultra-luxury / philosophical (*reverence, sacred, anticipatory grace, art of offering…*)
- Corporate jargon (*solutions, leverage, world-class, turnkey…*)
- Wedding-industry tropes (*your special day, fairytale, dream wedding…*)

If a draft sentence contains any of these, rewrite it. This applies to error messages, button labels, alt text — every visible string.

### Visual palette (from PRD §6)
- Base: `#FBF8F3` (warm off-white)
- Text: `#1A1A1A` (deep charcoal)
- Master accent (gold): `#C9A961`
- Foodbiz parent accent: `#1AAFA0` (teal — accent only, not full brand)
- Moira: `#C9A961` gold / `#B07A3D` copper
- Caterpillar: red/yellow/green from existing mark, desaturated
- Pillar Live: `#162646` deep navy
- Gummy Gourmet: pastels from existing mark

**Banned colours in the broader UI:** orange and any green outside the Caterpillar mark itself (per founder direction).

### Typography
- Display: a contemporary serif. Recommended: **PP Editorial New**, **Tiempos Headline**, or **Söhne Breit**. (Use whichever you can license / load free — fallback to `Cormorant Garamond` or `EB Garamond` from Google Fonts.)
- Body: a clean modern sans. **Inter** (Google Fonts) is fine.
- Mono (for time stamps in numbers section): **JetBrains Mono** or **IBM Plex Mono**.

---

## Phase-1 priority order

Build in this order. Get to a deployable Vercel preview as fast as possible.

1. **Skeleton** — Next.js app set up; folder structure; design tokens in Tailwind config; fonts wired.
2. **The Brief Box hero (§5.1)** — input + suggestion chips + ambient loop. The most visible part of the site; spend time here.
3. **The Reshape animation (§5.2)** — the layout-change moment between hero and the rest of the page. Use Framer Motion `LayoutGroup`. This is the second-most-visible piece of bespoke UI.
4. **Intent mapping logic (§5.1)** — rule-based keyword/chip → intent → sub-brand routing. Deterministic; no LLM.
5. **The Five Tables (§5.5)** — sub-brand wall with hover behaviour and intent-driven ordering.
6. **Selected Work (§5.6)** — Bento-style asymmetric grid with case-study modal.
7. **Story, Numbers, People (§5.3, 5.4, 5.8)** — straightforward sections.
8. **Brief Form (§5.9)** — pre-filled with hero input; submission logs to console; success state.
9. **Brands We've Hosted (§5.7)** — typographic word-wall treatment recommended.
10. **Footer (§5.10)**.
11. **Polish pass** — animations, easings, hover states, responsive at 360/768/1024/1440.
12. **Vercel preview** — deploy. Share URL.

---

## Things explicitly out of scope for v1

- Sanity CMS integration. Hardcode content from `content.md`.
- Real form submission backend. `console.log` is fine.
- Full SEO (sitemap, OG images, schema.org). Add a single OG image for sharing if you have time.
- Comprehensive accessibility audit. Cover keyboard nav, alt text, reduced-motion fallback — but a full WCAG audit comes later.
- i18n / multi-language.
- The 20-second founder voice-note (the audio file doesn't exist yet — leave the player UI in but disabled).

---

## Recommended folder structure (your call, this is just a sane default)

```
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # The one-pager
│   └── globals.css
├── components/
│   ├── BriefBox.tsx                # Hero + reshape orchestrator
│   ├── BrandMark.tsx               # Per-sub-brand mark (logo OR typographic placeholder)
│   ├── FiveTables.tsx
│   ├── SelectedWork.tsx
│   ├── BrandsWall.tsx
│   ├── Numbers.tsx
│   ├── People.tsx
│   ├── BriefForm.tsx
│   └── Footer.tsx
├── lib/
│   ├── intent.ts                   # Keyword → intent mapping
│   └── content.ts                  # Typed content exports from content.md
├── public/
│   ├── logos/                      # Copy from this folder's /logos
│   ├── images/                     # Placeholder photography
│   └── og-image.jpg
└── tailwind.config.ts
```

---

## When you're done

- Deploy to Vercel. Get a preview URL.
- Update this CLAUDE.md with a "Known issues" section listing anything you punted on.
- Drop a one-line completion note in this folder: `STATUS.md`.

Good hunting.

---

## Known issues — v1 build (2026-05-20)

- All photography is Unsplash placeholder, served via raw `<img>` tags. Real client library to be swapped in.
- Hero ambient loop is a CSS gradient drift, not an MP4 — sourced clip pending.
- Voice-note player in §5.3 is UI-only and disabled (audio file pending).
- Brief Form submission only `console.log`s — no Resend / Sanity webhook yet.
- No CMS. Content lives in `lib/content.ts` (mirrors `content.md`).
- No Vercel deploy from this session — `next build` and `npm run dev` verified locally only.
- No bespoke OG image.
- Accessibility is reasonable (keyboard, alt text, reduced-motion) but not WCAG-audited.
- Selected Work case-study modal uses two templated context paragraphs; replace with real write-ups.
- Founders' photos are stock; need real Amar / Kush portraits.
- Mobile bottom dock hidden by design — sanity-check at review.
- Moira / Pillar Live wordmarks are typographic placeholders in `components/BrandMark.tsx` — one-file swap when real marks arrive.
