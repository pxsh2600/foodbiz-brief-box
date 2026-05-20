import type { Intent } from "./intent";

export const HERO = {
  prompt: "What are you planning?",
  placeholder:
    "Type in a few words. A wedding, an event, a kid's party…",
  chips: [
    "A wedding",
    "A corporate launch",
    "A 1000+ person event",
    "An office lunch programme",
    "A kid's birthday",
    "Honestly, I don't know yet",
  ],
  reset: "Change brief",
  emptyNudge: "Tell us a bit more.",
  langNote: "We respond in English and Hindi.",
};

export const STORY = {
  opening:
    "Foodbiz started in 1996, in a kitchen in Powai. Thirty years later, we're still in a kitchen in Powai. We've just grown out of it five times.",
  voiceNote:
    "Hi — Amar here. The way to think about Foodbiz is: we cook for hosts who'd rather be present at their own events than running them. That's been the brief for thirty years. The food and the experience around it. We'll take care of both.",
};

export const NUMBERS = [
  { value: 30, suffix: " years", label: "of cooking and hosting" },
  { value: 1800, suffix: "+ events", label: "weddings, corporates, launches, ceremonies" },
  { value: 21, suffix: " cities", label: "and four countries where we've shown up" },
  { value: 5, suffix: " brands", label: "one for each kind of event" },
];

export type SubBrand = {
  id: Intent;
  name: string;
  tagline: string;
  description: string;
  cta: string;
  accent: string; // hex
  tint: string; // hex bg tint
  // Unsplash placeholder image url (real photos swapped in later)
  image: string;
  alt: string;
};

export const SUBBRANDS: Record<Intent, SubBrand> = {
  parent: {
    id: "parent",
    name: "Foodbiz",
    tagline: "The full spread.",
    description:
      "The parent brand. Weddings, corporates, events — whichever you've come for, you can start here. We'll route you to the right team.",
    cta: "Brief us",
    accent: "#1AAFA0",
    tint: "#E6F6F4",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80",
    alt: "A long table set for a Foodbiz event, warm light, dishes being plated.",
  },
  moira: {
    id: "moira",
    name: "Moira",
    tagline: "The wedding side of Foodbiz.",
    description:
      "Multi-day weddings, the family dishes that have to be there, cross-cultural menus, and someone who actually shows up to the morning haldi. Built for couples and families who'd rather enjoy their wedding than manage it.",
    cta: "Tell us about your wedding",
    accent: "#C9A961",
    tint: "#FBF3E6",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
    alt: "A long Indian wedding banquet, marigolds, brass thalis, candlelight.",
  },
  caterpillar: {
    id: "caterpillar",
    name: "Caterpillar",
    tagline: "Lunch, every day, well.",
    description:
      "Same team, same standards, fresh menu every day. Built for offices that take what their people eat seriously. Daily corporate dining, executive lunches, the events your office hosts every month.",
    cta: "Plan a corporate programme",
    accent: "#8B7A3C",
    tint: "#F3F0E6",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1400&q=80",
    alt: "A weekday corporate lunch served on a long shared table.",
  },
  pillar: {
    id: "pillar",
    name: "Pillar Live",
    tagline: "Built for the big briefs.",
    description:
      "1,200 guests. Three security perimeters. Forty-minute window for the head table. That's the kind of brief Pillar Live is built for. We've catered the commissioning of an Indian Navy submarine. We know how protocol works.",
    cta: "Brief us on your event",
    accent: "#162646",
    tint: "#EEF0F6",
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1400&q=80",
    alt: "A large formal banquet hall set for a thousand-guest event.",
  },
  gummy: {
    id: "gummy",
    name: "Gummy Gourmet",
    tagline: "Real food for small people.",
    description:
      "No neon icing. No mystery cheese. Mini biryani, build-your-own dosa, a vegetable that kids actually eat. Birthdays, kids' menus for adult events, school programmes. Promise.",
    cta: "Curate a kids' party",
    accent: "#D26A6A",
    tint: "#FBEFEF",
    image:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=1400&q=80",
    alt: "A children's birthday table with colourful food, no neon icing.",
  },
};

export type CaseStudy = {
  id: string;
  client: string;
  event: string;
  year: string;
  caption: string;
  category: "Weddings" | "Corporate" | "Brand launches" | "Government" | "Kids";
  subBrand: Intent;
  image: string;
  size: "wide" | "tall" | "square";
};

export const CASES: CaseStudy[] = [
  {
    id: "navy",
    client: "Indian Navy",
    event: "INS Karanj commissioning",
    year: "2017",
    caption:
      "Mumbai harbour. 400 guests. Protocol-grade catering for a submarine commissioning.",
    category: "Government",
    subBrand: "pillar",
    image:
      "https://images.unsplash.com/photo-1601758174039-91065ab2b86e?auto=format&fit=crop&w=1400&q=80",
    size: "wide",
  },
  {
    id: "ferrari",
    client: "Ferrari",
    event: "812 Superfast launch",
    year: "2018",
    caption:
      "Bandra. The car was the centrepiece. We made sure no one talked about the food, in a good way.",
    category: "Brand launches",
    subBrand: "pillar",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1400&q=80",
    size: "tall",
  },
  {
    id: "edelweiss",
    client: "Edelweiss",
    event: "Quarterly conference series",
    year: "2016–present",
    caption:
      "Sustained corporate dining for a financial-services audience. Three cities.",
    category: "Corporate",
    subBrand: "caterpillar",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
    size: "square",
  },
  {
    id: "rangerover",
    client: "Range Rover",
    event: "Velar launch",
    year: "2017",
    caption: "Powai. Hundreds of guests. One driver.",
    category: "Brand launches",
    subBrand: "pillar",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
    size: "square",
  },
  {
    id: "wedding-marwari",
    client: "A Marwari family",
    event: "Four-day wedding",
    year: "2023",
    caption:
      "Udaipur. Thirty-two meals over four days, each one its own event. Family recipes on every table.",
    category: "Weddings",
    subBrand: "moira",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1400&q=80",
    size: "wide",
  },
  {
    id: "hublot",
    client: "Hublot",
    event: "Boutique opening",
    year: "2019",
    caption: "Worli. Luxury watch crowd. Cuisine to match.",
    category: "Brand launches",
    subBrand: "pillar",
    image:
      "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&w=1400&q=80",
    size: "square",
  },
  {
    id: "netflix",
    client: "Netflix",
    event: "Press event",
    year: "2022",
    caption: "Mumbai. A streaming launch that needed to feel like a film premiere.",
    category: "Brand launches",
    subBrand: "pillar",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=80",
    size: "tall",
  },
  {
    id: "kotak",
    client: "Kotak Mutual Fund",
    event: "SIP Day",
    year: "2018",
    caption: "Worli. 800-person financial-services gathering.",
    category: "Corporate",
    subBrand: "caterpillar",
    image:
      "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1400&q=80",
    size: "square",
  },
  {
    id: "kids-party",
    client: "A family in Bandra",
    event: "Third birthday",
    year: "2024",
    caption: "Mini biryani. A vegetable that kids actually ate. Two parents who could sit down.",
    category: "Kids",
    subBrand: "gummy",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1400&q=80",
    size: "square",
  },
];

export const BRANDS_WALL = [
  { name: "INDIAN NAVY", intent: "pillar" as Intent },
  { name: "FERRARI", intent: "pillar" as Intent },
  { name: "EDELWEISS", intent: "caterpillar" as Intent },
  { name: "RANGE ROVER", intent: "pillar" as Intent },
  { name: "HUBLOT", intent: "pillar" as Intent },
  { name: "KOTAK", intent: "caterpillar" as Intent },
  { name: "VODAFONE", intent: "pillar" as Intent },
  { name: "TIMES NETWORK", intent: "pillar" as Intent },
  { name: "NETFLIX", intent: "pillar" as Intent },
  { name: "ULTRA JAPAN", intent: "pillar" as Intent },
  { name: "YOUTUBE", intent: "pillar" as Intent },
  { name: "INSTAGRAM", intent: "pillar" as Intent },
  { name: "MERCEDES-AMG", intent: "pillar" as Intent },
];

export const BRANDS_CLOSE =
  "And thirty years' worth of families who didn't want their names on a wall.";

export const PEOPLE = {
  opener:
    "Two founders. Thirty years in. A team that's been together long enough that the kitchen runs without raised voices.",
  founders: [
    {
      name: "Amar Jog",
      role: "Co-founder",
      bio: "Amar runs the front of the business — clients, brands, the weeks where everything has to come together. He's been in catering for thirty years and remembers every menu he's ever served.",
      image: "",
    },
    {
      name: 'Kushal "Kush" Shetty',
      role: "Co-founder",
      bio: "Kush runs the back of the business — the kitchen, the food, the standards. He cooks better than he'll admit. He's also the reason we still know where every ingredient came from.",
      image: "",
    },
  ],
  team: [
    { name: "Head Chef", role: "Kitchen lead", caption: "I plate the food we serve." },
    { name: "Events Lead", role: "Operations", caption: "I run the days you've been planning for a year." },
    { name: "Pillar Live Lead", role: "Protocol events", caption: "I read security briefings before I read menus." },
    { name: "Moira Lead", role: "Weddings", caption: "I sit with families. Then I plan the menu." },
  ],
};

export const FORM_COPY = {
  subline: "We'll come back within a working day.",
  fields: {
    planning: "What you're planning",
    when: "When",
    where: "Where",
    guests: "Roughly how many guests",
    name: "Your name",
    contact: "Your number or email",
    notes: "Anything we should know up front?",
  },
  whenHint: "A month or rough date is fine.",
  guestHint: "A range works.",
  contactHint: "One or the other.",
  notesHint: "Optional.",
  success: (name: string) =>
    `Got it, ${name || "thanks"}. We'll be in touch within a working day. If it's urgent, Amar's number is +91 98196 95223 — say you sent a brief.`,
  networkError:
    "That didn't go through. Try once more, or call Amar on +91 98196 95223.",
};

export const FOOTER = {
  closer: "Made for hosts who'd rather be present.",
  address: "41 National House, Sakivihar Road, Powai, Andheri (East), Mumbai 400 072",
  phone: "+91 98196 95223",
  email: "hello@foodbiz.co.in",
  social: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Pinterest", href: "#" },
    { label: "YouTube", href: "#" },
  ],
  links: [
    { label: "Home", href: "#" },
    { label: "About", href: "#story" },
    { label: "Moira", href: "#tables" },
    { label: "Caterpillar", href: "#tables" },
    { label: "Pillar Live", href: "#tables" },
    { label: "Gummy Gourmet", href: "#tables" },
    { label: "Foodbiz", href: "#tables" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#brief" },
  ],
  copyright: "© Foodies Hospitality. All rights reserved.",
};
