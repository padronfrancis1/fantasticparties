"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Confetti, Sparkle, Star } from "@/components/decorative/shapes";
import { SITE } from "@/lib/utils";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function BigCTA() {
  const reduce = useReducedMotion();
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-[2.5rem] gradient-cta p-10 text-center sm:p-16">
          <Confetti aria-hidden className="absolute inset-0 -z-10 size-full opacity-50" />
          <motion.div
            aria-hidden
            animate={reduce ? undefined : { rotate: 360 }}
            transition={reduce ? undefined : { duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute left-10 top-10 hidden sm:block"
          >
            <Star color="#FFD93D" className="w-12 drop-shadow" />
          </motion.div>
          <motion.div
            aria-hidden
            animate={reduce ? undefined : { rotate: -360 }}
            transition={reduce ? undefined : { duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute right-10 bottom-10 hidden sm:block"
          >
            <Sparkle color="#fff" className="w-10 drop-shadow" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            className="font-display font-semibold leading-[0.95] tracking-tight text-white"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            Ready to make a memory?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/90 sm:text-xl"
          >
            Two minutes to book. We do the rest. Your kid does the rest of the smiling.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href={SITE.phoneHref}
              className="inline-flex h-16 items-center gap-3 rounded-full bg-white px-8 text-lg font-semibold text-ink ring-pop transition hover:scale-105 active:translate-y-0.5"
            >
              <Phone className="size-5 text-coral" />
              Call {SITE.phone}
            </a>
            <Button size="xl" variant="sunshine" asChild>
              <a href="/contact">Get a quote</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
