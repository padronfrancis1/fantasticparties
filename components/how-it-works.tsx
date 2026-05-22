"use client";

import { motion } from "framer-motion";
import { CalendarHeart, Truck, PartyPopper } from "lucide-react";
import { WavyConnector } from "@/components/decorative/shapes";

const STEPS = [
  {
    icon: CalendarHeart,
    title: "Pick a date",
    desc: "Tell us when, where, and what you want. We'll confirm within a day.",
    tint: "bg-coral",
  },
  {
    icon: Truck,
    title: "We bring it",
    desc: "We deliver and set up everything before guests arrive. You don't lift a thing.",
    tint: "bg-sunshine",
  },
  {
    icon: PartyPopper,
    title: "Party time",
    desc: "Kids freak out (in a good way). We come back at the end and take it all away.",
    tint: "bg-mint",
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-sky/15 px-4 py-1.5 text-sm font-semibold text-sky-600">
            How it works
          </span>
          <h2
            className="mt-4 font-display font-semibold tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            Three easy steps. Zero stress.
          </h2>
        </motion.div>

        <div className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-6">
          <WavyConnector className="pointer-events-none absolute left-[16%] right-[16%] top-12 hidden h-12 md:block" />
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative text-center"
              >
                <div className="relative mx-auto grid size-24 place-items-center">
                  <motion.div
                    whileHover={{ rotate: [-6, 6, -6, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`grid size-24 place-items-center rounded-full ${s.tint} text-white ring-pop`}
                  >
                    <Icon className="size-10" strokeWidth={2} />
                  </motion.div>
                  <span className="absolute -right-2 -top-2 grid size-9 place-items-center rounded-full border-4 border-cream bg-ink text-sm font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-ink-soft">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
