"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { IntentResult } from "@/lib/intent";
import { SUBBRANDS } from "@/lib/content";
import { BrandMark } from "./BrandMark";

export function Reshape({ result }: { result: IntentResult }) {
  const sb = SUBBRANDS[result.intent];

  return (
    <section
      id="reshape"
      aria-label="Page reshape"
      className="relative w-full px-6 md:px-10 py-16 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={result.intent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            layout
          >
            <div className="flex items-center gap-3 mb-5">
              <span
                className="inline-block h-px w-10"
                style={{ background: sb.accent }}
              />
              <span className="text-xs uppercase tracking-[0.22em] text-ink/55">
                Page set for
              </span>
              <BrandMark name={result.intent} size="sm" />
            </div>
            <p className="font-display text-balance text-[clamp(1.6rem,3.2vw,2.2rem)] leading-snug text-ink max-w-3xl">
              {result.ack}
            </p>
            {result.secondary && (
              <p className="mt-4 text-sm md:text-base text-ink/70 max-w-2xl">
                At that scale, our{" "}
                <span className="text-ink underline underline-offset-4 decoration-gold/60">
                  Pillar Live
                </span>{" "}
                team usually sits in too — protocol, security, headcount logistics.
                We'll plug them in.
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
