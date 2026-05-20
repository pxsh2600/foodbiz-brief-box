"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BRANDS_WALL, BRANDS_CLOSE, SUBBRANDS } from "@/lib/content";

export function BrandsWall() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="brands"
      ref={ref}
      className="relative w-full px-6 md:px-10 py-20 md:py-28 border-t hairline"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.25em] text-ink/55 mb-10 md:mb-14">
          Brands we've hosted
        </p>

        <div className="font-display leading-[1.05] text-balance text-[clamp(2rem,5.5vw,4.5rem)] tracking-tightish">
          {BRANDS_WALL.map((b, i) => (
            <motion.span
              key={b.name}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.05 + i * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline"
            >
              <span
                className="transition-colors duration-300 hover:opacity-100"
                style={{
                  color: "#1A1A1A",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLSpanElement).style.color =
                    SUBBRANDS[b.intent].accent;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLSpanElement).style.color = "#1A1A1A";
                }}
              >
                {b.name}
              </span>
              {i < BRANDS_WALL.length - 1 && (
                <span className="text-ink/30 mx-2 md:mx-3">·</span>
              )}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-ink/55 italic block mt-6 text-[clamp(1rem,1.8vw,1.4rem)] font-sans not-italic tracking-normal"
          >
            {BRANDS_CLOSE}
          </motion.span>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 text-sm text-ink/55 italic"
        >
          Discretion is the other half of the job.
        </motion.p>
      </div>
    </section>
  );
}
