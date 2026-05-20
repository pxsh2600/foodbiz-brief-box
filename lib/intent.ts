export type Intent = "moira" | "pillar" | "caterpillar" | "gummy" | "parent";

export type IntentResult = {
  intent: Intent;
  // Order of the Five Tables panels for this intent
  order: Intent[];
  // Slim acknowledgement line shown above the reshape
  ack: string;
  // CTA copy used by the Brief Form
  formHeading: string;
  formCta: string;
  // Soft secondary nudge (e.g. wedding for 1500 → Pillar Live)
  secondary?: Intent;
};

const KEYWORDS: Record<Intent, string[]> = {
  moira: [
    "wedding",
    "weddings",
    "bride",
    "groom",
    "mehendi",
    "sangeet",
    "haldi",
    "marwari",
    "gujarati",
    "christian",
    "punjabi",
    "south indian wedding",
    "engagement",
    "anniversary party",
    "nikah",
    "shaadi",
  ],
  pillar: [
    "summit",
    "g20",
    "defence",
    "defense",
    "government",
    "protocol",
    "gala",
    "1000",
    "1500",
    "2000",
    "large",
    "navy",
    "army",
    "diplomat",
    "ambassador",
    "state visit",
    "head of state",
  ],
  caterpillar: [
    "office",
    "office lunch",
    "lunch programme",
    "lunch program",
    "executive dining",
    "cafeteria",
    "daily",
    "cafe",
    "corporate dining",
    "recurring",
    "canteen",
    "weekly",
    "monthly",
  ],
  gummy: [
    "kid",
    "kids",
    "child",
    "children",
    "birthday",
    "party",
    "school",
    "playdate",
    "preschool",
    "third birthday",
  ],
  parent: [
    "event",
    "corporate",
    "brand",
    "launch",
    "dinner",
    "press event",
    "activation",
    "opening",
    "premiere",
  ],
};

const ACK: Record<Intent, string> = {
  moira: "Sounds like a Moira brief. Here's what that looks like.",
  pillar: "This is the kind of event Pillar Live is built for. Read on.",
  caterpillar: "Caterpillar territory. Here's how we'd run it.",
  gummy: "Kid's party. Our favourite brief. Read on.",
  parent:
    "Got it. Here's what we do, all of it. We'll figure out which corner we're in together.",
};

const FORM: Record<Intent, { heading: string; cta: string }> = {
  moira: {
    heading: "Tell us about your wedding.",
    cta: "Send the brief",
  },
  pillar: {
    heading: "Brief us on your event.",
    cta: "Send the brief",
  },
  caterpillar: {
    heading: "Plan a corporate programme.",
    cta: "Send the brief",
  },
  gummy: {
    heading: "Tell us about the party.",
    cta: "Send the brief",
  },
  parent: {
    heading: "Tell us what you're planning.",
    cta: "Send the brief",
  },
};

const ORDER: Record<Intent, Intent[]> = {
  moira: ["moira", "parent", "pillar", "caterpillar", "gummy"],
  pillar: ["pillar", "parent", "moira", "caterpillar", "gummy"],
  caterpillar: ["caterpillar", "parent", "pillar", "moira", "gummy"],
  gummy: ["gummy", "parent", "moira", "caterpillar", "pillar"],
  parent: ["parent", "moira", "pillar", "caterpillar", "gummy"],
};

function tokenize(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function detectNumber(s: string): number | null {
  // detect numeric guest counts e.g. "600 people", "1500 guests", "2000+"
  const match = s.match(/(\d{2,5})/);
  if (!match) return null;
  const n = parseInt(match[1], 10);
  return Number.isFinite(n) ? n : null;
}

const UNKNOWN_PHRASES = [
  "don't know",
  "dont know",
  "not sure",
  "honestly",
  "no idea",
  "tbd",
];

export function inferIntent(rawInput: string): IntentResult {
  const text = tokenize(rawInput);

  if (!text) {
    return {
      intent: "parent",
      order: ORDER.parent,
      ack: ACK.parent,
      formHeading: FORM.parent.heading,
      formCta: FORM.parent.cta,
    };
  }

  if (UNKNOWN_PHRASES.some((p) => text.includes(p))) {
    return {
      intent: "parent",
      order: ORDER.parent,
      ack: ACK.parent,
      formHeading: FORM.parent.heading,
      formCta: FORM.parent.cta,
    };
  }

  const scores: Record<Intent, number> = {
    moira: 0,
    pillar: 0,
    caterpillar: 0,
    gummy: 0,
    parent: 0,
  };

  (Object.keys(KEYWORDS) as Intent[]).forEach((intent) => {
    for (const kw of KEYWORDS[intent]) {
      if (text.includes(kw)) {
        // Multi-word phrases score higher
        scores[intent] += kw.includes(" ") ? 3 : 2;
      }
    }
  });

  // Numeric scale signal — > 300 nudges toward Pillar Live
  const n = detectNumber(text);
  if (n && n >= 300) {
    scores.pillar += n >= 800 ? 3 : 1;
  }

  // Pick winner
  const keys = Object.keys(scores) as Intent[];
  let winner: Intent = keys.reduce<Intent>(
    (best, k) => (scores[k] > scores[best] ? k : best),
    "parent" as Intent
  );
  const best = scores[winner];

  if (best === 0) {
    return {
      intent: "parent",
      order: ORDER.parent,
      ack: ACK.parent,
      formHeading: FORM.parent.heading,
      formCta: FORM.parent.cta,
    };
  }

  // Soft secondary: wedding + large scale → also surface Pillar Live note
  let secondary: Intent | undefined;
  if (winner === "moira" && n !== null && n >= 1000) {
    secondary = "pillar";
  }

  return {
    intent: winner,
    order: ORDER[winner],
    ack: ACK[winner],
    formHeading: FORM[winner].heading,
    formCta: FORM[winner].cta,
    secondary,
  };
}
