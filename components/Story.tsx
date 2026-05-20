"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STORY } from "@/lib/content";
import { BrandMark } from "./BrandMark";

export function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [playing, setPlaying] = useState(false);

  return (
    <section
      id="story"
      ref={ref}
      className="relative w-full px-6 md:px-10 py-20 md:py-32 border-t hairline"
    >
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden bg-ink/5"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
            alt="A Foodbiz kitchen in Powai, from the early years."
            className="absolute inset-0 w-full h-full object-cover slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 text-cream/90 text-xs uppercase tracking-[0.25em]">
            Powai, 1996
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <p className="eyebrow mb-5">The story, briefly</p>
          <div className="flex items-center gap-3 mb-5">
            <BrandMark name="parent" size="sm" />
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-ink/45">
              est. 1996
            </span>
          </div>
          <p className="font-display text-balance text-2xl md:text-3xl leading-snug text-ink">
            {STORY.opening}
          </p>

          {/* mini voice-note player (UI only — audio disabled per CLAUDE.md) */}
          <div className="mt-10 p-5 border hairline bg-cream/70 relative overflow-hidden">
            <span
              className="absolute top-0 left-0 h-[2px] w-16 bg-gold"
              aria-hidden
            />
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setPlaying((p) => !p)}
                disabled
                aria-label="Play founder voice note (recording pending)"
                className="h-11 w-11 rounded-full border hairline flex items-center justify-center text-ink/60 cursor-not-allowed"
              >
                {playing ? (
                  <span className="block w-3 h-3 bg-ink/60" />
                ) : (
                  <span
                    className="block border-l-[10px] border-l-ink/60 border-y-[7px] border-y-transparent ml-0.5"
                    aria-hidden
                  />
                )}
              </button>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs uppercase tracking-[0.2em] text-ink/55">
                    Voice note · Amar
                  </span>
                  <span className="text-xs font-mono text-ink/45">0:20</span>
                </div>
                {/* fake waveform */}
                <div className="flex items-end gap-[2px] h-6">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <span
                      key={i}
                      className="block w-[3px] bg-ink/35"
                      style={{
                        height: `${
                          30 +
                          Math.abs(Math.sin(i * 0.6) * 100) * 0.5 +
                          ((i * 17) % 20)
                        }%`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-ink/65 italic leading-relaxed">
              "{STORY.voiceNote}"
            </p>
            <p className="mt-2 text-xs text-ink/40">
              Auto-transcript · audio recording pending
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
