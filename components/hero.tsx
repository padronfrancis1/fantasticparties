"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Phone, Star as StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Balloon, Sparkle, Squiggle } from "@/components/decorative/shapes";
import { SITE } from "@/lib/utils";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBalloon1 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const yBalloon2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const yBalloon3 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const ySparkle1 = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const ySparkle2 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden pt-12 pb-24 sm:pt-20 sm:pb-32"
    >
      {/* Pulsing phone tag — top right */}
      <motion.a
        href={SITE.phoneHref}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 150 }}
        className="absolute right-4 top-4 z-20 hidden md:inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold ring-pop-sm"
      >
        <motion.span
          className="grid size-7 place-items-center rounded-full bg-coral text-white"
          animate={reduce ? undefined : { scale: [1, 1.15, 1] }}
          transition={reduce ? undefined : { duration: 1.6, repeat: Infinity }}
        >
          <Phone className="size-4" />
        </motion.span>
        Call {SITE.phone}
      </motion.a>

      {/* Gradient blob behind headline */}
      <motion.div
        aria-hidden
        style={{ opacity: heroOpacity }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[120%] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute left-1/2 top-1/2 size-[60vw] min-h-[500px] min-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral/30 blur-3xl" />
        <div className="absolute left-[35%] top-[60%] size-[40vw] min-h-[400px] min-w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sunshine/40 blur-3xl" />
        <div className="absolute left-[65%] top-[40%] size-[35vw] min-h-[350px] min-w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint/25 blur-3xl" />
      </motion.div>

      {/* Floating balloons */}
      <motion.div
        aria-hidden
        style={{ y: yBalloon1 }}
        className="absolute left-[6%] top-[18%] hidden sm:block"
      >
        <motion.div
          animate={reduce ? undefined : { rotate: [-5, 5, -5] }}
          transition={reduce ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Balloon color="#FF6B6B" className="w-16 md:w-24 drop-shadow-xl" />
        </motion.div>
      </motion.div>
      <motion.div
        aria-hidden
        style={{ y: yBalloon2 }}
        className="absolute right-[10%] top-[14%] hidden sm:block"
      >
        <motion.div
          animate={reduce ? undefined : { rotate: [4, -6, 4] }}
          transition={reduce ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Balloon color="#4D96FF" className="w-20 md:w-28 drop-shadow-xl" />
        </motion.div>
      </motion.div>
      <motion.div
        aria-hidden
        style={{ y: yBalloon3 }}
        className="absolute right-[24%] bottom-[18%] hidden lg:block"
      >
        <motion.div
          animate={reduce ? undefined : { rotate: [-3, 6, -3] }}
          transition={reduce ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Balloon color="#6BCB77" className="w-16 drop-shadow-xl" />
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        style={{ y: ySparkle1 }}
        className="absolute left-[18%] top-[55%] hidden sm:block"
      >
        <motion.div
          animate={reduce ? undefined : { rotate: 360 }}
          transition={reduce ? undefined : { duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Sparkle color="#FFD93D" className="w-10 md:w-14" />
        </motion.div>
      </motion.div>
      <motion.div
        aria-hidden
        style={{ y: ySparkle2 }}
        className="absolute right-[15%] bottom-[28%] hidden md:block"
      >
        <motion.div
          animate={reduce ? undefined : { rotate: -360 }}
          transition={reduce ? undefined : { duration: 24, repeat: Infinity, ease: "linear" }}
        >
          <Sparkle color="#FF6B6B" className="w-8" />
        </motion.div>
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border-2 border-ink/10 bg-white/80 px-4 py-1.5 backdrop-blur"
        >
          <span className="flex" aria-hidden>
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className="size-3.5 fill-sunshine text-sunshine"
                strokeWidth={0}
              />
            ))}
          </span>
          <span className="text-sm font-semibold text-ink">
            5.0 on Google · Calgary's #1 kids party rental
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-balance mx-auto max-w-5xl text-center font-display font-semibold leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
        >
          Calgary's most{" "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-br from-coral via-coral to-coral-700 bg-clip-text text-transparent">
              fantastic
            </span>
            <Squiggle
              className="absolute -bottom-2 left-0 right-0 h-3 w-full text-sunshine"
              color="#FFD93D"
            />
          </span>{" "}
          kids' parties.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-center text-lg text-ink-soft sm:text-xl"
        >
          Bumper cars, bubble domes, bouncy castles & soft play. Delivered, set up, and
          ready to make your child's birthday the one they'll never forget.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button size="xl" asChild>
            <a href="/contact">Get a quote</a>
          </Button>
          <Button variant="ghost" size="xl" asChild>
            <a href="#rentals">
              See rentals
              <ArrowDown className="size-5" />
            </a>
          </Button>
        </motion.div>

        {/* Hero image grid: 1 large + 2 small */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4"
        >
          <motion.div
            whileHover={{ y: -6, rotate: -1.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="relative col-span-2 aspect-[5/4] overflow-hidden rounded-3xl ring-pop-sm sm:col-span-2 sm:row-span-2 sm:aspect-square"
          >
            <Image
              src="/images/bumper_cars.png"
              alt="Kids playing in bumper cars at a Calgary birthday party"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 640px) 100vw, 60vw"
              className="object-cover scale-[1.03]"
            />
          </motion.div>
          <motion.div
            whileHover={{ y: -6, rotate: 1.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="relative aspect-square overflow-hidden rounded-3xl ring-pop-sm"
          >
            <Image
              src="/images/bubble_dome_1.jpg"
              alt="Clear inflatable bubble dome filled with balloons at a kids birthday party"
              fill
              sizes="(max-width: 640px) 50vw, 30vw"
              className="object-cover scale-[1.03]"
            />
          </motion.div>
          <motion.div
            whileHover={{ y: -6, rotate: -1.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="relative aspect-square overflow-hidden rounded-3xl ring-pop-sm"
          >
            <Image
              src="/images/bouncy_castle_and_softplay_3.jpg"
              alt="Pastel soft play with slide and ball pit for toddlers"
              fill
              sizes="(max-width: 640px) 50vw, 30vw"
              className="object-cover scale-[1.03]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
