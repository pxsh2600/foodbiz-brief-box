"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HERO } from "@/lib/content";
import { inferIntent, type IntentResult } from "@/lib/intent";

type Props = {
  engaged: boolean;
  result: IntentResult;
  input: string;
  onEngage: (text: string) => void;
  onReset: () => void;
};

export function BriefBox({
  engaged,
  result,
  input,
  onEngage,
  onReset,
}: Props) {
  const [value, setValue] = useState(input);
  const [nudge, setNudge] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setValue(input);
  }, [input]);

  function submit(text: string) {
    if (!text.trim()) {
      setNudge(true);
      inputRef.current?.focus();
      window.setTimeout(() => setNudge(false), 1600);
      return;
    }
    onEngage(text.trim());
    // smooth-scroll the reshape into view
    window.setTimeout(() => {
      document
        .getElementById("reshape")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 700);
  }

  return (
    <section
      id="hero"
      aria-label="Brief box"
      className="relative min-h-[100svh] w-full flex items-center justify-center px-6 md:px-10 overflow-hidden"
    >
      {/* ambient detail — slow drifting gradients in place of an MP4 */}
      <div className="ambient" aria-hidden />
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" aria-hidden />

      {/* slim pinned header once engaged */}
      <AnimatePresence>
        {engaged && (
          <motion.div
            key="pinned"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-cream/80 border-b hairline"
          >
            <div className="mx-auto max-w-6xl px-6 md:px-10 py-3 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-xs uppercase tracking-[0.2em] text-ink/50 shrink-0">
                  Brief
                </span>
                <span className="font-display text-lg md:text-xl text-ink truncate">
                  {input}
                </span>
              </div>
              <button
                type="button"
                onClick={onReset}
                className="text-sm text-ink/70 hover:text-ink underline underline-offset-4 decoration-gold/60 hover:decoration-gold"
              >
                {HERO.reset}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-full max-w-3xl mx-auto text-center">
        <AnimatePresence mode="wait">
          {!engaged ? (
            <motion.div
              key="prompt"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xs uppercase tracking-[0.28em] text-ink/50 mb-6">
                Foodbiz · since 1996
              </p>

              <h1 className="font-display tracking-tightish text-balance text-[clamp(2.6rem,6.6vw,5.6rem)] leading-[1.02] text-ink">
                {HERO.prompt}
              </h1>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submit(value);
                }}
                className="mt-10 md:mt-12 max-w-2xl mx-auto"
                aria-label="What are you planning?"
              >
                <label htmlFor="brief-input" className="sr-only">
                  Tell us what you're planning
                </label>
                <input
                  id="brief-input"
                  ref={inputRef}
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder={HERO.placeholder}
                  className="input-underline w-full text-center text-lg md:text-xl text-ink placeholder:text-ink/40 font-sans"
                  autoComplete="off"
                />
                <AnimatePresence>
                  {nudge && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-3 text-sm text-ink/60 italic"
                    >
                      {HERO.emptyNudge}
                    </motion.p>
                  )}
                </AnimatePresence>

                <div className="mt-8 md:mt-10">
                  <div className="flex md:flex-wrap md:justify-center gap-2 overflow-x-auto no-scrollbar pb-1 md:overflow-visible">
                    {HERO.chips.map((c, i) => (
                      <motion.button
                        key={c}
                        type="button"
                        onClick={() => {
                          setValue(c);
                          submit(c);
                        }}
                        className="chip shrink-0"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.2 + i * 0.06,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        {c}
                      </motion.button>
                    ))}
                  </div>
                  <p className="mt-6 text-xs text-ink/40">{HERO.langNote}</p>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="ack"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="pt-24 md:pt-32"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-ink/50 mb-4">
                Reshaping for you
              </p>
              <h2 className="font-display text-balance text-[clamp(1.8rem,3.5vw,2.6rem)] leading-tight text-ink max-w-2xl mx-auto">
                {result.ack}
              </h2>
              <p className="mt-6 text-sm text-ink/60 italic">
                Scroll on — the page below is set for {brandLabel(result.intent)}.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function brandLabel(intent: IntentResult["intent"]) {
  switch (intent) {
    case "moira":
      return "Moira";
    case "pillar":
      return "Pillar Live";
    case "caterpillar":
      return "Caterpillar";
    case "gummy":
      return "Gummy Gourmet";
    default:
      return "Foodbiz";
  }
}

// re-export inferIntent for the page component
export { inferIntent };
