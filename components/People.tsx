"use client";

import { motion } from "framer-motion";
import { PEOPLE } from "@/lib/content";

export function People() {
  return (
    <section
      id="people"
      className="relative w-full px-6 md:px-10 py-20 md:py-28 border-t hairline"
    >
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-5">The people</p>
        <h2 className="font-display text-balance text-3xl md:text-5xl leading-tight text-ink max-w-3xl">
          {PEOPLE.opener}
        </h2>

        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-8 md:gap-10">
          {PEOPLE.founders.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div
                className="relative aspect-[4/5] overflow-hidden border hairline grain group-hover:border-gold/70 transition-colors duration-500"
                style={{ background: "rgba(26,26,26,0.04)" }}
                role="img"
                aria-label={`Portrait of ${p.name} pending`}
              >
                {/* corner accent */}
                <span
                  className="absolute top-3 left-3 h-3 w-3 border-l border-t border-ink/20 group-hover:border-gold transition-colors duration-500"
                  aria-hidden
                />
                <span
                  className="absolute bottom-3 right-3 h-3 w-3 border-r border-b border-ink/20 group-hover:border-gold transition-colors duration-500"
                  aria-hidden
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-ink/30">
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    aria-hidden
                  >
                    <circle cx="28" cy="22" r="9" stroke="currentColor" strokeWidth="1.25" />
                    <path
                      d="M11 47c2.5-8 9-13 17-13s14.5 5 17 13"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                  <p className="mt-4 text-[10px] uppercase tracking-[0.28em]">
                    Portrait pending
                  </p>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-[10px] uppercase tracking-[0.22em] text-ink/40">
                  <span>{p.name.split(" ")[0]}</span>
                  <span className="font-mono">
                    0{i + 1}/0{PEOPLE.founders.length}
                  </span>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-xs uppercase tracking-[0.2em] text-ink/55">
                  {p.role}
                </p>
                <h3 className="mt-1 font-display text-2xl md:text-3xl text-ink">
                  {p.name}
                </h3>
                <p className="mt-3 text-ink/75 leading-relaxed">{p.bio}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 md:mt-24">
          <p className="eyebrow mb-8">The team behind the work</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            {PEOPLE.team.map((t, i) => (
              <div
                key={t.name}
                className="group relative pl-5 border-l hairline hover:border-l-gold transition-colors duration-300"
              >
                <span className="absolute -left-px top-0 h-8 w-px bg-gold scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
                <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-ink/40">
                  0{i + 1}
                </p>
                <p className="font-display text-xl text-ink mt-2">{t.name}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-ink/55 mt-1">
                  {t.role}
                </p>
                <p className="text-sm text-ink/65 mt-3 italic leading-snug">
                  "{t.caption}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
