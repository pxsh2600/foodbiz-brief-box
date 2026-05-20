"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import type { IntentResult, Intent } from "@/lib/intent";
import { SUBBRANDS } from "@/lib/content";
import { BrandMark } from "./BrandMark";

export function FiveTables({ result }: { result: IntentResult }) {
  const [open, setOpen] = useState<Intent | null>(null);
  const [hovered, setHovered] = useState<Intent | null>(null);

  return (
    <section
      id="tables"
      className="relative w-full px-6 md:px-10 py-20 md:py-28 border-t hairline"
    >
      <div className="mx-auto max-w-6xl mb-10 md:mb-14 flex items-end justify-between gap-6">
        <div>
          <p className="eyebrow mb-4">The five tables</p>
          <div className="flex items-center gap-4 mb-3">
            <BrandMark name="parent" size="sm" />
            <span className="h-5 w-px bg-ink/15" />
            <span className="text-xs uppercase tracking-[0.22em] text-ink/55">
              parent brand
            </span>
          </div>
          <h2 className="font-display text-balance text-3xl md:text-5xl leading-tight text-ink max-w-2xl">
            Five specialist brands. One kitchen behind them.
          </h2>
        </div>
        <p className="hidden md:block max-w-xs text-sm text-ink/60 text-pretty">
          Whichever you came for, the others are here too. Hover one to see it bigger.
        </p>
      </div>

      <LayoutGroup>
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-5 gap-px bg-ink/10 border hairline">
          {result.order.map((id) => {
            const sb = SUBBRANDS[id];
            const isHovered = hovered === id;
            const anyHovered = hovered !== null;
            return (
              <motion.button
                key={id}
                layout
                onClick={() => setOpen(id)}
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={() => setHovered(null)}
                className="relative text-left group bg-cream overflow-hidden"
                animate={{
                  flexGrow: isHovered ? 1.4 : 1,
                }}
                style={{
                  minHeight: "clamp(420px, 60vh, 620px)",
                  flex: isHovered ? 1.4 : 1,
                  opacity: anyHovered && !isHovered ? 0.78 : 1,
                  transition: "opacity 400ms ease, flex 500ms cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={sb.image}
                  alt={sb.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(180deg, rgba(26,26,26,0.05) 0%, rgba(26,26,26,0.0) 30%, rgba(26,26,26,0.78) 100%)`,
                  }}
                />
                <div
                  className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-cream"
                  style={{ color: "#FBF8F3" }}
                >
                  {/* BrandMark sits in a clean pill so the natural-colour marks read correctly on dark photos */}
                  <span className="brand-pill mb-4">
                    <BrandMark name={id} size="sm" />
                  </span>
                  <p className="font-display text-xl md:text-2xl leading-snug">
                    {sb.tagline}
                  </p>
                  <p className="mt-3 text-sm text-cream/85 max-w-sm hidden md:block">
                    {sb.description}
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-cream/80 inline-flex items-center gap-2">
                    <span>Take me here</span>
                    <span aria-hidden>→</span>
                  </p>
                </div>
                {result.intent === id && (
                  <div
                    className="absolute top-4 left-4 px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] font-medium flex items-center gap-1.5"
                    style={{
                      background: sb.accent,
                      color: id === "gummy" || id === "moira" ? "#1A1A1A" : "#FBF8F3",
                    }}
                  >
                    <span className="block w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    Set for you
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>
      </LayoutGroup>

      {/* Lightbox overlay */}
      <AnimatePresence>
        {open && <Lightbox subBrandId={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </section>
  );
}

function Lightbox({
  subBrandId,
  onClose,
}: {
  subBrandId: Intent;
  onClose: () => void;
}) {
  const sb = SUBBRANDS[subBrandId];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
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
          <img src={sb.image} alt={sb.alt} className="w-full h-full object-cover" />
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
          <div className="mb-4">
            <BrandMark name={subBrandId} size="lg" />
          </div>
          <p className="font-display text-2xl md:text-3xl text-ink leading-snug">
            {sb.tagline}
          </p>
          <p className="mt-4 text-ink/75 leading-relaxed max-w-2xl">
            {sb.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#brief"
              onClick={onClose}
              className="btn-primary"
              style={{
                background: sb.accent,
                color:
                  subBrandId === "gummy" || subBrandId === "moira"
                    ? "#1A1A1A"
                    : "#FBF8F3",
              }}
            >
              {sb.cta}
              <span aria-hidden>→</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="text-sm text-ink/65 hover:text-ink underline underline-offset-4 decoration-gold/60 hover:decoration-gold"
            >
              Keep looking
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
