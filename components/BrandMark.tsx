"use client";

import type { Intent } from "@/lib/intent";

type Props = {
  name: Intent;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
};

// Real PNGs for parent / caterpillar / gummy.
// Moira + Pillar Live are typographic placeholders until real marks ship.
export function BrandMark({
  name,
  variant = "dark",
  size = "md",
  className = "",
}: Props) {
  const dim =
    size === "lg" ? "h-12 md:h-14" : size === "sm" ? "h-6" : "h-8 md:h-10";

  if (name === "moira") {
    const colour = variant === "light" ? "#FBF3E6" : "#C9A961";
    return (
      <span
        className={`font-display italic tracking-tightish leading-none ${className}`}
        style={{
          color: colour,
          fontWeight: 500,
          fontSize:
            size === "lg" ? "2.5rem" : size === "sm" ? "1.1rem" : "1.6rem",
          letterSpacing: "-0.01em",
        }}
        aria-label="Moira"
      >
        Moira
      </span>
    );
  }

  if (name === "pillar") {
    const colour = variant === "light" ? "#EEF0F6" : "#162646";
    return (
      <span
        className={`font-display tracking-tighter2 leading-none uppercase ${className}`}
        style={{
          color: colour,
          fontWeight: 600,
          fontSize:
            size === "lg" ? "1.9rem" : size === "sm" ? "0.85rem" : "1.2rem",
          letterSpacing: "0.04em",
        }}
        aria-label="Pillar Live"
      >
        Pillar Live
      </span>
    );
  }

  const src =
    name === "parent"
      ? "/logos/foodbiz-parent.png"
      : name === "caterpillar"
      ? "/logos/caterpillar.png"
      : "/logos/gummy-gourmet.png";

  const alt =
    name === "parent"
      ? "Foodbiz"
      : name === "caterpillar"
      ? "Caterpillar"
      : "Gummy Gourmet";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={`${dim} w-auto object-contain ${className} ${
        variant === "light" ? "invert brightness-0 contrast-200" : ""
      }`}
      style={
        variant === "light"
          ? { filter: "brightness(0) invert(1)" }
          : undefined
      }
    />
  );
}
