"use client";

import { motion } from "framer-motion";
import { RentalCard } from "@/components/rental-card";
import { RENTALS } from "@/lib/data/rentals";
import { Squiggle } from "@/components/decorative/shapes";

export function RentalsGrid() {
  return (
    <section id="rentals" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-mint/15 px-4 py-1.5 text-sm font-semibold text-mint-600">
            ✨ Six ways to wow
          </span>
          <h2
            className="mt-4 font-display font-semibold tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            Pick your{" "}
            <span className="relative inline-block">
              <span className="relative z-10">fun</span>
              <Squiggle
                className="absolute -bottom-1 left-0 right-0 h-2.5 w-full"
                color="#FF6B6B"
              />
            </span>
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Each rental is delivered, set up, and broken down for you. Mix and match — we'll
            help you build the perfect party.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RENTALS.map((r, i) => (
            <RentalCard key={r.slug} rental={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
