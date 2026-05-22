"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star as StarIcon, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data/testimonials";

export function TestimonialCarousel() {
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const t = TESTIMONIALS[i];

  React.useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((p) => (p + 1) % TESTIMONIALS.length), 6500);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section
      className="relative py-20 sm:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block rounded-full bg-sunshine/20 px-4 py-1.5 text-sm font-semibold text-sunshine-600">
          What parents say
        </span>
        <h2
          className="mt-4 font-display font-semibold tracking-tight"
          style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
        >
          Calgary parents{" "}
          <span className="bg-gradient-to-br from-coral to-sunshine-600 bg-clip-text text-transparent">
            love
          </span>{" "}
          us.
        </h2>

        <div className="relative mt-14">
          <Quote
            className="absolute -left-2 -top-6 size-20 text-coral/10 sm:-left-8"
            aria-hidden
          />
          <div className="relative min-h-[260px] sm:min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex justify-center gap-1" aria-label={`${t.rating} out of 5 stars`}>
                  {[...Array(t.rating)].map((_, idx) => (
                    <StarIcon
                      key={idx}
                      className="size-5 fill-sunshine text-sunshine"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <blockquote className="mt-6 font-display text-2xl leading-snug sm:text-3xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-ink-soft">
                  <span className="font-semibold text-ink">{t.name}</span> · {t.childAge}
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setI((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="grid size-11 place-items-center rounded-full bg-white ring-pop-sm transition hover:scale-110"
              aria-label="Previous review"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setI(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                  aria-current={idx === i ? "true" : undefined}
                  className={`h-2 rounded-full transition-all ${
                    idx === i ? "w-8 bg-coral" : "w-2 bg-ink/15 hover:bg-ink/30"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setI((p) => (p + 1) % TESTIMONIALS.length)}
              className="grid size-11 place-items-center rounded-full bg-white ring-pop-sm transition hover:scale-110"
              aria-label="Next review"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
