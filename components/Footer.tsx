"use client";

import { FOOTER } from "@/lib/content";
import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="relative w-full px-6 md:px-10 pt-20 md:pt-28 pb-10 border-t hairline">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <BrandMark name="parent" size="lg" />
        </div>
        <p className="font-display text-balance text-3xl md:text-5xl leading-tight text-ink max-w-2xl">
          {FOOTER.closer}
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-ink/55 mb-3">
              Contact
            </p>
            <p className="text-ink/85 leading-relaxed">{FOOTER.address}</p>
            <p className="mt-3">
              <a
                href={`tel:${FOOTER.phone.replace(/\s/g, "")}`}
                className="text-ink hover:underline underline-offset-4 decoration-gold/60 hover:decoration-gold"
              >
                {FOOTER.phone}
              </a>
              <span className="text-ink/40 mx-2">·</span>
              <a
                href={`mailto:${FOOTER.email}`}
                className="text-ink hover:underline underline-offset-4 decoration-gold/60 hover:decoration-gold"
              >
                {FOOTER.email}
              </a>
            </p>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
              {FOOTER.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-sm text-ink/70 hover:text-ink"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-ink/55 mb-3">
              The rest of the site
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {FOOTER.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-ink/75 hover:text-ink hover:underline underline-offset-4 decoration-gold/60 hover:decoration-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t hairline">
          <p className="text-[10px] uppercase tracking-[0.28em] text-ink/45 mb-5">
            The five tables, under one roof
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap items-center gap-x-6 md:gap-x-10 gap-y-5">
            <BrandMark name="parent" size="sm" />
            <BrandMark name="moira" size="sm" />
            <BrandMark name="caterpillar" size="sm" />
            <BrandMark name="pillar" size="sm" />
            <BrandMark name="gummy" size="sm" />
          </div>
        </div>

        <div className="mt-12 pt-6 border-t hairline flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-ink/55">{FOOTER.copyright}</p>
          <p className="text-xs text-ink/55 italic">
            Mumbai · Pune · Udaipur · Delhi · Bengaluru
          </p>
        </div>
      </div>
    </footer>
  );
}
