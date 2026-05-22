"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sparkle } from "@/components/decorative/shapes";

const PERKS = [
  "4 electric bumper cars",
  "13×13 ft inflatable arena",
  "Parent remote speed control",
  "2–3 hours of pure joy",
];

export function PackageSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid items-center gap-12 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-coral via-coral-600 to-coral-700 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
          <motion.div
            aria-hidden
            className="absolute -right-12 -top-12 size-64 rounded-full bg-sunshine/40 blur-3xl"
          />
          <motion.div
            aria-hidden
            className="absolute -left-16 -bottom-16 size-64 rounded-full bg-coral-300/30 blur-3xl"
          />

          <motion.div
            initial={{ opacity: 0, rotate: 360 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            aria-hidden
            className="absolute right-6 top-6"
          >
            <Sparkle className="w-10 text-sunshine" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
              ⭐ Most popular package
            </span>
            <h2
              className="mt-4 font-display font-semibold leading-[1] tracking-tight text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Bumper Cars + Inflatable Arena
            </h2>
            <p className="mt-4 max-w-md text-lg text-white/90">
              Our flagship. Four cars, an inflatable arena, and an absolutely unforgettable
              2–3 hours. Built for ages 1–6 with parent-controlled speed.
            </p>
            <ul className="mt-6 grid gap-2.5">
              {PERKS.map((p) => (
                <li key={p} className="flex items-center gap-3 text-white">
                  <span className="grid size-6 place-items-center rounded-full bg-white/20">
                    <Check className="size-4 text-white" />
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="rounded-full bg-white px-6 py-3 font-display text-3xl font-semibold text-coral-700 ring-pop-sm">
                $350
                <span className="ml-1 text-sm font-medium text-ink-muted">/event</span>
              </div>
              <Button variant="sunshine" size="lg" asChild>
                <Link href="/contact">Get a quote</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link href="/bumper-cars">
                  Details <ArrowRight className="size-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-4 ring-white/30 shadow-2xl lg:aspect-square"
          >
            <Image
              src="/images/bumper_cars.png"
              alt="Bumper cars in an inflatable arena at a Calgary birthday party"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover scale-[1.03]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
