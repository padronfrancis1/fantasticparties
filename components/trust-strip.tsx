"use client";

import { motion } from "framer-motion";
import { Star, Truck, Sparkles, Baby } from "lucide-react";
import { StatCounter } from "@/components/stat-counter";

const ITEMS = [
  {
    icon: <Star className="fill-sunshine text-sunshine" />,
    label: "5.0",
    sub: "on Google",
  },
  {
    icon: <Sparkles className="text-coral" />,
    label: <StatCounter to={100} suffix="+" />,
    sub: "parties hosted",
  },
  {
    icon: <Truck className="text-sky" />,
    label: "Calgary",
    sub: "& surrounding areas",
  },
  {
    icon: <Baby className="text-mint" />,
    label: "Ages 1–7",
    sub: "kid-tested approved",
  },
];

export function TrustStrip() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-2 gap-4 rounded-3xl border-2 border-ink/5 bg-white p-6 shadow-[0_18px_40px_-20px_rgb(31_26_26_/_0.12)] sm:grid-cols-4 sm:gap-2"
        >
          {ITEMS.map((it, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0 },
              }}
              className="flex flex-col items-center gap-1 px-2 text-center"
            >
              <span className="grid size-12 place-items-center rounded-full bg-cream-100 [&_svg]:size-6">
                {it.icon}
              </span>
              <span className="mt-1 font-display text-2xl font-semibold leading-none">
                {it.label}
              </span>
              <span className="text-sm text-ink-muted">{it.sub}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
