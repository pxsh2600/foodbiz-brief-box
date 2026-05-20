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
        <p className="text-xs uppercase tracking-[0.25em] text-ink/55 mb-3">
          The people
        </p>
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
              <div className="relative aspect-[4/5] overflow-hidden bg-ink/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={`${p.name}, ${p.role}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
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

        <div className="mt-16 md:mt-20">
          <p className="text-xs uppercase tracking-[0.22em] text-ink/55 mb-6">
            The team behind the work
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {PEOPLE.team.map((t) => (
              <div key={t.name} className="border-l hairline pl-4">
                <p className="font-display text-lg text-ink">{t.name}</p>
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
