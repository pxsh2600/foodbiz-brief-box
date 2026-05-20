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
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 px-3 hidden md:block"
        >
          <div className="flex items-center gap-1 px-2 py-2 bg-ink/90 backdrop-blur shadow-xl rounded-full">
            {result.order.map((id) => {
              const sb = SUBBRANDS[id];
              return (
                <a
                  key={id}
                  href="#tables"
                  className="px-3.5 py-1.5 text-[11px] uppercase tracking-[0.2em] text-cream/85 hover:text-cream rounded-full transition-colors"
                  style={
                    id === result.intent
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
                  {sb.name}
                </a>
              );
            })}
            <span className="mx-1 h-4 w-px bg-cream/20" />
            <a
              href="#brief"
              className="px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] bg-cream text-ink rounded-full hover:opacity-90"
            >
              Talk to us
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
