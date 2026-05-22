"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/utils";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function FloatingCTA() {
  const reduce = useReducedMotion();
  return (
    <motion.a
      href={SITE.phoneHref}
      aria-label={`Call ${SITE.name} at ${SITE.phone}`}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.6, type: "spring", stiffness: 200, damping: 18 }}
      className="fixed bottom-5 right-5 z-40 grid place-items-center md:hidden"
    >
      {!reduce && (
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-full bg-coral"
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
        />
      )}
      <span className="relative grid size-16 place-items-center rounded-full bg-coral text-white ring-pop">
        <Phone className="size-7" />
      </span>
    </motion.a>
  );
}
