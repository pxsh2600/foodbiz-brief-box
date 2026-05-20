"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { NUMBERS } from "@/lib/content";

function useCountUp(target: number, run: boolean) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run]);
  return n;
}

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const n = useCountUp(value, inView);
  const formatted = value >= 1000 ? n.toLocaleString("en-IN") : n.toString();

  return (
    <div ref={ref}>
      <div className="font-display text-ink leading-none">
        <span className="text-[clamp(3.2rem,6.5vw,5.5rem)] tracking-tightish">
          {formatted}
        </span>
        <span className="text-[clamp(1.2rem,2vw,1.6rem)] text-ink/80">
          {suffix}
        </span>
      </div>
      <p className="mt-3 text-sm md:text-base text-ink/65 max-w-[18ch]">
        {label}
      </p>
    </div>
  );
}

export function Numbers() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section
      ref={ref}
      className="relative w-full px-6 md:px-10 py-20 md:py-28 border-t hairline"
    >
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow mb-10 md:mb-14"
        >
          The numbers
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0">
          {NUMBERS.map((s, i) => (
            <div
              key={s.label}
              className={`md:px-8 ${
                i > 0 ? "md:border-l hairline" : ""
              }`}
            >
              <Stat {...s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
