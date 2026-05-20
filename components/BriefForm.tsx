"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { IntentResult } from "@/lib/intent";
import { FORM_COPY, SUBBRANDS } from "@/lib/content";
import { BrandMark } from "./BrandMark";

export function BriefForm({
  result,
  prefilled,
}: {
  result: IntentResult;
  prefilled: string;
}) {
  const [planning, setPlanning] = useState(prefilled);
  const [when, setWhen] = useState("");
  const [where, setWhere] = useState("Mumbai");
  const [guests, setGuests] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (prefilled) setPlanning(prefilled);
  }, [prefilled]);

  const accent = SUBBRANDS[result.intent].accent;

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!planning.trim()) {
      setError("Tell us a bit more about what you're planning.");
      return;
    }
    if (!name.trim()) {
      setError("We'd like to know your name.");
      return;
    }
    if (!contact.trim()) {
      setError("A number or email — one or the other.");
      return;
    }
    // v1: no backend. Log to console.
    // eslint-disable-next-line no-console
    console.log("[brief]", {
      intent: result.intent,
      planning,
      when,
      where,
      guests,
      name,
      contact,
      notes,
      submittedAt: new Date().toISOString(),
    });
    setSubmitted(true);
  }

  return (
    <section
      id="brief"
      className="relative w-full px-6 md:px-10 py-20 md:py-32 border-t hairline"
    >
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow mb-5">Send a brief</p>
        <div className="flex items-center flex-wrap gap-x-3 gap-y-2 mb-3">
          <BrandMark name={result.intent} size="md" />
          <span className="hidden sm:block h-5 w-px bg-ink/15" />
          <span className="text-xs uppercase tracking-[0.22em] text-ink/55">
            routes to {SUBBRANDS[result.intent].name}
          </span>
        </div>
        <h2 className="font-display text-balance text-3xl md:text-5xl leading-tight text-ink">
          {result.formHeading}
        </h2>
        <p className="mt-3 text-ink/65">{FORM_COPY.subline}</p>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              onSubmit={onSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
            >
              <div className="md:col-span-2">
                <Label>{FORM_COPY.fields.planning}</Label>
                <input
                  type="text"
                  value={planning}
                  onChange={(e) => setPlanning(e.target.value)}
                  className="input-underline w-full text-lg"
                  required
                />
              </div>

              <div>
                <Label hint={FORM_COPY.whenHint}>
                  {FORM_COPY.fields.when}
                </Label>
                <input
                  type="text"
                  value={when}
                  onChange={(e) => setWhen(e.target.value)}
                  placeholder="November · or a rough date"
                  className="input-underline w-full"
                />
              </div>

              <div>
                <Label>{FORM_COPY.fields.where}</Label>
                <input
                  type="text"
                  value={where}
                  onChange={(e) => setWhere(e.target.value)}
                  className="input-underline w-full"
                />
              </div>

              <div>
                <Label hint={FORM_COPY.guestHint}>
                  {FORM_COPY.fields.guests}
                </Label>
                <input
                  type="text"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  placeholder="200–250"
                  className="input-underline w-full"
                />
              </div>

              <div>
                <Label>{FORM_COPY.fields.name}</Label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-underline w-full"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <Label hint={FORM_COPY.contactHint}>
                  {FORM_COPY.fields.contact}
                </Label>
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="+91 98… or you@example.com"
                  className="input-underline w-full"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <Label hint={FORM_COPY.notesHint}>
                  {FORM_COPY.fields.notes}
                </Label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className="input-underline w-full resize-none"
                />
              </div>

              {error && (
                <p className="md:col-span-2 text-sm text-ink/75 italic">
                  {error}
                </p>
              )}

              <div className="md:col-span-2 mt-2 flex flex-wrap items-center gap-5">
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ background: accent, color: result.intent === "gummy" || result.intent === "moira" ? "#1A1A1A" : "#FBF8F3" }}
                >
                  {result.formCta}
                  <span aria-hidden>→</span>
                </button>
                <span className="text-xs text-ink/50">
                  We'll come back within a working day.
                </span>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 p-8 md:p-10 border hairline bg-cream/70 relative overflow-hidden"
            >
              <span
                className="absolute top-0 left-0 h-1 w-24"
                style={{ background: accent }}
                aria-hidden
              />
              <div className="flex items-center flex-wrap gap-x-3 gap-y-2 mb-3">
                <p className="text-xs uppercase tracking-[0.25em] text-ink/55">
                  Brief received · routed to
                </p>
                <BrandMark name={result.intent} size="sm" />
              </div>
              <p className="font-display text-2xl md:text-3xl text-ink leading-snug">
                Got it,{" "}
                <span
                  style={{ color: accent }}
                  className="underline underline-offset-4"
                >
                  {name.trim() || "thanks"}
                </span>
                .
              </p>
              <p className="mt-4 text-ink/75 leading-relaxed max-w-xl">
                {summarise({
                  planning,
                  when,
                  where,
                  guests,
                })}
              </p>
              <p className="mt-3 text-ink/65 max-w-xl">
                We'll be in touch within a working day. If it's urgent, Amar's
                number is{" "}
                <a
                  href="tel:+919819695223"
                  className="underline underline-offset-4 decoration-gold/60 hover:decoration-gold"
                >
                  +91 98196 95223
                </a>{" "}
                — say you sent a brief.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function Label({ children, hint }: { children: React.ReactNode; hint?: string }) {
  return (
    <label className="block text-xs uppercase tracking-[0.2em] text-ink/55 mb-1.5">
      {children}
      {hint && (
        <span className="ml-2 normal-case tracking-normal text-ink/40 italic">
          {hint}
        </span>
      )}
    </label>
  );
}

function summarise(p: {
  planning: string;
  when: string;
  where: string;
  guests: string;
}) {
  const parts = [p.planning];
  if (p.when) parts.push(p.when);
  if (p.where) parts.push(`in ${p.where}`);
  if (p.guests) parts.push(`around ${p.guests} guests`);
  return parts.join(", ") + ".";
}
