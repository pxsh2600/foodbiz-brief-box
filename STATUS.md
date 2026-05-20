# STATUS — Brief Box one-pager

Initial Next.js 15 prototype built locally. `next build` passes, dev server confirmed serving HTTP 200 at `http://localhost:3000/`.

## What's built

- Brief Box hero (prompt + underlined input + 6 suggestion chips + ambient drifting gradient in place of MP4).
- Intent mapping (`lib/intent.ts`): rule-based keyword matrix → one of moira / pillar / caterpillar / gummy / parent; numeric scale signal nudges Pillar Live; "I don't know" routes to parent.
- The Reshape: AnimatePresence + LayoutGroup; on submit the page reshapes with a slim acknowledgement line and the rest of the page assembles below.
- Slim pinned header with the visitor's brief and a "Change brief" reset.
- Body background tint shifts subtly toward the routed sub-brand's accent (gold for Moira, navy-ish for Pillar Live, etc.).
- Story section with archival photo + UI-only voice-note player (disabled, audio file pending).
- Numbers (4 stats) with scroll-triggered count-up.
- The Five Tables: 5 panels reordered by intent, hover-to-expand, click opens lightbox with sub-brand story + CTA.
- Selected Work: Bento-style asymmetric grid; first row pinned to Indian Navy / Ferrari / Edelweiss / Range Rover; filter chips; click opens case modal.
- Brands We've Hosted: typographic word-wall, sub-brand-colour on hover (per recommended Option C).
- People: founders + 4-person team strip.
- Brief Form pre-filled with the hero input; client-side validation; success state paraphrases the brief; logs to console on submit.
- Footer with closer line + contact + nav links.
- Floating bottom dock with 5 sub-brand anchors + "Talk to us" CTA (visible only post-engage, desktop only).
- BrandMark component: PNGs for Foodbiz / Caterpillar / Gummy Gourmet; typographic placeholders for Moira (gold #C9A961 serif) and Pillar Live (navy #162646 uppercase). Swap the placeholders in `components/BrandMark.tsx` once real marks ship.
- `prefers-reduced-motion` respected globally.

## How to run

```
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
```

## Known issues / things punted on

- **No real photography.** All images are Unsplash placeholders served via raw `<img>` tags. Replace with the client's real library before the founder review — semantic file names already in place where helpful.
- **No MP4 ambient loop.** The PRD asked for a quiet looping video as the hero background detail; I used a CSS gradient drift instead. Swap for an 8–12s MP4 in `app/page.tsx` / `BriefBox.tsx` once a clip is sourced.
- **Voice-note player is disabled.** UI is in place (waveform, play button, transcript). Wire to a real audio file in `components/Story.tsx` when Amar / Kush record one.
- **Form submission is `console.log` only.** No Sanity webhook / Resend pipeline yet. Hook up before the lead-routing pipeline is needed.
- **No CMS.** All content lives in `lib/content.ts`, sourced from `content.md`. Move to Sanity later.
- **No Vercel deploy.** I built locally and verified `next build` + dev server. Run `vercel` from this folder (or push to GitHub and link it on Vercel) to get a preview URL.
- **No bespoke OG image.** Add `public/og-image.jpg` before sharing.
- **a11y is reasonable but not audited.** Keyboard nav, alt text, reduced-motion fallback are in. Full WCAG 2.2 AA audit is a later pass.
- **Selected Work case-study modal copy is templated.** It uses two generic paragraphs alongside the per-case caption; replace with real client write-ups before launch.
- **The People photos are stock.** Real Amar / Kush portraits needed.
- **Mobile bottom dock hidden.** Per spec; on mobile the visitor scrolls. Sanity-check this with Amar before signoff.

## Notable choices worth flagging for review

- Pre-engage state shows a single quiet teaser strip below the fold ("Thirty years of cooking and hosting…") so the page has a believable lower edge before the visitor engages. Easy to remove.
- The Reshape acknowledgement renders both in-hero (right after engagement) AND as the first piece of the assembled page (as a section heading). That double surfacing matches the PRD's framing of "reshape" as both a state change and a contextual cue.
- Caterpillar's accent is a desaturated gold-brown (#8B7A3C) rather than its multicolour mark — chosen because the PRD bans orange/green in the broader UI. The real PNG mark still carries the original colours.
- I lean on the BrandMark component everywhere, so swapping Moira / Pillar Live to real logos is a one-file change.
