"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BriefBox } from "@/components/BriefBox";
import { Reshape } from "@/components/Reshape";
import { Story } from "@/components/Story";
import { Numbers } from "@/components/Numbers";
import { FiveTables } from "@/components/FiveTables";
import { SelectedWork } from "@/components/SelectedWork";
import { BrandsWall } from "@/components/BrandsWall";
import { People } from "@/components/People";
import { BriefForm } from "@/components/BriefForm";
import { Footer } from "@/components/Footer";
import { BottomDock } from "@/components/BottomDock";
import { inferIntent, type IntentResult } from "@/lib/intent";

export default function Home() {
  const [input, setInput] = useState("");
  const [engaged, setEngaged] = useState(false);

  const result: IntentResult = useMemo(() => inferIntent(input), [input]);

  // tint body for the intent
  useEffect(() => {
    if (!engaged) {
      document.body.removeAttribute("data-intent");
      return;
    }
    document.body.setAttribute("data-intent", result.intent);
  }, [engaged, result.intent]);

  function onEngage(text: string) {
    setInput(text);
    setEngaged(true);
  }

  function onReset() {
    setEngaged(false);
    setInput("");
    document.body.removeAttribute("data-intent");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="relative">
      <BriefBox
        engaged={engaged}
        result={result}
        input={input}
        onEngage={onEngage}
        onReset={onReset}
      />

      <AnimatePresence>
        {engaged && (
          <motion.div
            key="reshape-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Reshape result={result} />
            <Story />
            <Numbers />
            <FiveTables result={result} />
            <SelectedWork result={result} />
            <BrandsWall />
            <People />
            <BriefForm result={result} prefilled={input} />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pre-engage: still show a quiet teaser strip so the page isn't empty */}
      {!engaged && (
        <PreEngageTeaser />
      )}

      <BottomDock visible={engaged} result={result} />
    </main>
  );
}

function PreEngageTeaser() {
  return (
    <section
      aria-hidden
      className="relative w-full px-6 md:px-10 pb-20 md:pb-28 -mt-16 md:-mt-24"
    >
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs uppercase tracking-[0.28em] text-ink/45">
          Foodbiz · Mumbai · since 1996
        </p>
        <p className="mt-6 font-display italic text-ink/65 text-[clamp(1rem,1.6vw,1.25rem)] max-w-xl mx-auto">
          Thirty years of cooking and hosting. Five specialist brands. One promise:
          be present, leave the rest to us.
        </p>
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => {
              document
                .getElementById("brief-input")
                ?.scrollIntoView({ behavior: "smooth", block: "center" });
              document.getElementById("brief-input")?.focus();
            }}
            className="text-xs uppercase tracking-[0.3em] text-ink/50 hover:text-ink transition-colors"
          >
            Start with a brief ↑
          </button>
        </div>
      </div>
    </section>
  );
}
