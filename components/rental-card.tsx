"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Rental } from "@/lib/data/rentals";
import { cn } from "@/lib/utils";

const ACCENT_CLASSES: Record<Rental["accent"], { chip: string; ring: string; glow: string }> = {
  coral: {
    chip: "bg-coral text-white",
    ring: "group-hover:ring-coral/40",
    glow: "from-coral/30",
  },
  sunshine: {
    chip: "bg-sunshine text-ink",
    ring: "group-hover:ring-sunshine/40",
    glow: "from-sunshine/30",
  },
  mint: {
    chip: "bg-mint text-white",
    ring: "group-hover:ring-mint/40",
    glow: "from-mint/30",
  },
  sky: {
    chip: "bg-sky text-white",
    ring: "group-hover:ring-sky/40",
    glow: "from-sky/30",
  },
};

export function RentalCard({ rental, index = 0 }: { rental: Rental; index?: number }) {
  const accent = ACCENT_CLASSES[rental.accent];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      whileHover={{ y: -8, rotate: index % 2 === 0 ? -1 : 1 }}
      style={{ transformOrigin: "center bottom" }}
    >
      <Link
        href={rental.href}
        className={cn(
          "group relative block overflow-hidden rounded-3xl bg-white shadow-[0_20px_44px_-24px_rgb(31_26_26_/_0.25)] ring-2 ring-ink/5 transition-shadow hover:shadow-[0_28px_60px_-20px_rgb(31_26_26_/_0.3)]",
          accent.ring
        )}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={rental.heroImage}
            alt={rental.heroImageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover scale-[1.03] transition-transform duration-700 group-hover:scale-105"
          />
          <div
            className={cn(
              "absolute inset-x-0 -bottom-px h-1/2 bg-gradient-to-t to-transparent",
              accent.glow
            )}
            aria-hidden
          />
          <span
            className={cn(
              "absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold shadow",
              accent.chip
            )}
          >
            {rental.priceLabel}
          </span>
        </div>

        <div className="p-6">
          <h3 className="font-display text-2xl font-semibold leading-tight">{rental.name}</h3>
          <p className="mt-1 text-ink-soft">{rental.tagline}</p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-2 text-xs text-ink-muted">
              <span className="rounded-full bg-cream-100 px-2.5 py-1">{rental.ages}</span>
              <span className="rounded-full bg-cream-100 px-2.5 py-1">{rental.duration}</span>
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-coral transition group-hover:gap-2">
              Learn more
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
