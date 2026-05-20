"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { IntentResult } from "@/lib/intent";
import { CASES, SUBBRANDS, type CaseStudy } from "@/lib/content";
import { BrandMark } from "./BrandMark";

const FILTERS = ["All", "Weddings", "Corporate", "Brand launches", "Government", "Kids"] as const;

export function SelectedWork({ result }: { result: IntentResult }) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [open, setOpen] = useState<CaseStudy | null>(null);

  const cases = useMemo(() => {
    // Lock the first row: Indian Navy, Ferrari, Edelweiss + Range Rover.
    const PINNED = ["navy", "ferrari", "edelweiss", "rangerover"];
    const pinned = PINNED.map((id) => CASES.find((c) => c.id === id)!).filter(
      Boolean
    );
    const rest = CASES.filter((c) => !PINNED.includes(c.id));

    // Bias remainder ordering by intent
    rest.sort((a, b) => {
      const ai = a.subBrand === result.intent ? 0 : 1;
      const bi = b.subBrand === result.intent ? 0 : 1;
      return ai - bi;
    });

    const all = [...pinned, ...rest];
    if (filter === "All") return all;
    return all.filter((c) => c.category === filter);
  }, [filter, result.intent]);

  return (
    <section
      id="work"
      className="relative w-full px-6 md:px-10 py-20 md:py-28 border-t hairline"
    >
      <div className="mx-auto max-w-6xl mb-10 md:mb-14">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="eyebrow mb-4">Selected work</p>
            <h2 className="font-display text-balance text-3xl md:text-5xl leading-tight text-ink max-w-3xl">
              A working selection. The full list is longer and quieter.
            </h2>
          </div>
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-ink/45 self-end pb-1">
            {cases.length.toString().padStart(2, "0")} / 80+
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`chip ${
                filter === f
                  ? "!bg-ink !text-cream !border-ink hover:!border-ink"
                  : ""
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[220px]">
        {cases.map((c, i) => {
          const span =
            c.size === "wide"
              ? "col-span-2 md:col-span-4 row-span-2"
              : c.size === "tall"
              ? "col-span-2 md:col-span-2 row-span-2"
              : "col-span-2 md:col-span-2 row-span-1";

          return (
            <motion.button
              key={c.id}
              type="button"
              onClick={() => setOpen(c)}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
              className={`${span} group relative overflow-hidden bg-ink/5 text-left`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.image}
                alt={`${c.client} — ${c.event}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-95" />

              {/* corner accent rule in the routed sub-brand colour */}
              <span
                className="absolute top-0 left-0 h-[3px] w-12 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                style={{ background: SUBBRANDS[c.subBrand].accent }}
                aria-hidden
              />

              {/* top-left BrandMark pill */}
              <div className="absolute top-3 left-3">
                <span className="brand-pill">
                  <BrandMark name={c.subBrand} size="sm" />
                </span>
              </div>

              {/* top-right year */}
              <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-[0.2em] text-cream/85">
                {c.year}
              </span>

              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 text-cream">
                <p className="text-base md:text-lg font-display leading-tight truncate">
                  {c.client}
                </p>
                <p className="text-xs md:text-sm text-cream/75 truncate mt-1">
                  {c.event}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-cream/0 group-hover:text-cream/90 transition-colors duration-300">
                  Open
                  <span aria-hidden>→</span>
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="mx-auto max-w-7xl mt-10 flex justify-end">
        <a
          href="#brief"
          className="text-sm uppercase tracking-[0.2em] text-ink/70 hover:text-ink underline underline-offset-8 decoration-gold/60 hover:decoration-gold"
        >
          See all 80+ →
        </a>
      </div>

      <AnimatePresence>
        {open && <CaseModal c={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </section>
  );
}

function CaseModal({ c, onClose }: { c: CaseStudy; onClose: () => void }) {
  const sb = SUBBRANDS[c.subBrand];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-ink/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-cream w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={c.image} alt={`${c.client} — ${c.event}`} className="w-full h-full object-cover" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-cream/90 hover:bg-cream flex items-center justify-center text-ink"
          >
            ×
          </button>
        </div>
        <div className="p-6 md:p-10">
          <div className="flex items-center gap-4">
            <BrandMark name={c.subBrand} size="sm" />
            <span className="h-4 w-px bg-ink/15" />
            <span className="text-xs uppercase tracking-[0.22em] text-ink/55">
              {c.year}
            </span>
          </div>
          <h3 className="mt-4 font-display text-3xl md:text-4xl text-ink leading-tight">
            {c.client} · <span className="italic">{c.event}</span>
          </h3>
          <p className="mt-5 text-ink/75 leading-relaxed max-w-2xl">
            {c.caption}
          </p>
          <p className="mt-3 text-ink/65 leading-relaxed max-w-2xl">
            What it took: the menu was built from scratch for the room, the
            timing was rehearsed against the schedule, and our team was on the
            ground the night before the doors opened.
          </p>
          <p className="mt-3 text-ink/65 leading-relaxed max-w-2xl">
            What the client got: dinner that ran without anyone having to ask
            where the kitchen was. That's the only number we measure.
          </p>
          <div className="mt-8">
            <a
              href="#brief"
              onClick={onClose}
              className="btn-primary"
              style={{
                background: sb.accent,
                color:
                  c.subBrand === "gummy" || c.subBrand === "moira"
                    ? "#1A1A1A"
                    : "#FBF8F3",
              }}
            >
              Brief us on something similar
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
