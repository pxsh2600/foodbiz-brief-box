"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { IntentResult } from "@/lib/intent";
import { SUBBRANDS } from "@/lib/content";

export function BottomDock({
  visible,
  result,
}: {
  visible: boolean;
  result: IntentResult;
}) {
  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Desktop dock */}
          <motion.div
            key="dock-desktop"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 hidden md:block"
          >
            <div
              className="flex items-center gap-1 px-2.5 py-2 bg-ink/95 backdrop-blur-xl rounded-full"
              style={{
                boxShadow:
                  "0 1px 0 rgba(255,255,255,0.05) inset, 0 20px 60px rgba(26,26,26,0.35)",
              }}
            >
              {result.order.map((id) => {
                const sb = SUBBRANDS[id];
                const isActive = id === result.intent;
                return (
                  <a
                    key={id}
                    href="#tables"
                    className="relative px-3.5 py-1.5 text-[10.5px] uppercase tracking-[0.22em] text-cream/80 hover:text-cream rounded-full transition-colors duration-300 flex items-center gap-2"
                    style={
                      isActive
                        ? {
                            background: sb.accent,
                            color:
                              id === "gummy" || id === "moira"
                                ? "#1A1A1A"
                                : "#FBF8F3",
                          }
                        : undefined
                    }
                  >
                    {isActive && (
                      <span
                        className="block w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ background: "currentColor" }}
                      />
                    )}
                    {sb.name}
                  </a>
                );
              })}
              <span className="mx-1 h-4 w-px bg-cream/15" />
              <a
                href="#brief"
                className="px-4 py-1.5 text-[10.5px] uppercase tracking-[0.22em] bg-cream text-ink rounded-full hover:bg-gold transition-colors duration-300"
              >
                Talk to us →
              </a>
            </div>
          </motion.div>

          {/* Mobile floating brief button */}
          <motion.a
            key="dock-mobile"
            href="#brief"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 px-5 py-3 bg-ink text-cream text-[11px] uppercase tracking-[0.22em] rounded-full"
            style={{
              boxShadow: "0 14px 30px rgba(26,26,26,0.35)",
            }}
          >
            Brief us
            <span aria-hidden>→</span>
          </motion.a>
        </>
      )}
    </AnimatePresence>
  );
}
