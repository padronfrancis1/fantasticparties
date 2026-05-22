"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ChevronRight, Phone, ShieldCheck, X } from "lucide-react";
import type { Rental } from "@/lib/data/rentals";
import { Button } from "@/components/ui/button";
import { RentalCard } from "@/components/rental-card";
import { SITE, cn } from "@/lib/utils";

const ACCENT_BG: Record<Rental["accent"], string> = {
  coral: "from-coral/15 via-coral/5",
  sunshine: "from-sunshine/20 via-sunshine/5",
  mint: "from-mint/15 via-mint/5",
  sky: "from-sky/15 via-sky/5",
};

export function RentalPage({ rental, others }: { rental: Rental; others: Rental[] }) {
  const [active, setActive] = React.useState(0);
  const [lightbox, setLightbox] = React.useState<number | null>(null);
  const lightboxRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (lightbox === null) return;
    lightboxRef.current?.focus();
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? null : (i + 1) % rental.gallery.length));
      if (e.key === "ArrowLeft")
        setLightbox((i) => (i === null ? null : (i - 1 + rental.gallery.length) % rental.gallery.length));
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [lightbox, rental.gallery.length]);

  React.useEffect(() => {
    if (lightbox === null) triggerRef.current?.focus();
  }, [lightbox]);

  return (
    <>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-ink-muted">
          <Link href="/" className="hover:text-coral">
            Home
          </Link>
          <ChevronRight className="size-3.5" />
          <span className="text-ink">{rental.shortName}</span>
        </nav>
      </div>

      {/* Hero */}
      <section
        className={cn(
          "relative py-12 sm:py-16",
          `before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-b before:to-cream`
        )}
      >
        <div
          aria-hidden
          className={cn(
            "absolute inset-x-0 top-0 -z-10 h-[60%] bg-gradient-to-b to-transparent",
            ACCENT_BG[rental.accent]
          )}
        />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setLightbox(active)}
              className="relative block aspect-[4/3] w-full overflow-hidden rounded-3xl ring-pop-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky/40"
              aria-label="Open photo gallery"
            >
              <Image
                src={rental.gallery[active].src}
                alt={rental.gallery[active].alt}
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover scale-[1.03] transition duration-500"
              />
            </button>
            {rental.gallery.length > 1 && (
              <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
                {rental.gallery.map((g, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={g.alt || `Photo ${i + 1}`}
                    className={cn(
                      "relative h-16 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition",
                      i === active ? "border-coral" : "border-transparent opacity-70 hover:opacity-100"
                    )}
                  >
                    <Image src={g.src} alt="" fill className="object-cover scale-[1.03]" sizes="80px" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <span className="inline-block w-fit rounded-full bg-white px-4 py-1.5 text-sm font-semibold ring-pop-sm">
              {rental.priceLabel} · {rental.duration}
            </span>
            <h1
              className="mt-4 font-display font-semibold leading-[1] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
            >
              {rental.name}
            </h1>
            <p className="mt-4 max-w-lg text-lg text-ink-soft">{rental.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">Get a quote</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href={SITE.phoneHref}>
                  <Phone className="size-5" />
                  {SITE.phone}
                </a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-white px-3 py-1 ring-2 ring-ink/5">
                {rental.ages}
              </span>
              <span className="rounded-full bg-white px-3 py-1 ring-2 ring-ink/5">
                {rental.capacity}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2
            className="font-display font-semibold tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            What's included
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {rental.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 rounded-2xl bg-white p-4 ring-2 ring-ink/5"
              >
                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-mint/15">
                  <Check className="size-5 text-mint-600" />
                </span>
                <span className="text-ink-soft">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Specs */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2
            className="font-display font-semibold tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            The details
          </h2>
          <dl className="mt-8 grid gap-px overflow-hidden rounded-3xl bg-ink/5 ring-2 ring-ink/5 sm:grid-cols-2">
            {rental.specs.map((s) => (
              <div key={s.label} className="flex items-center justify-between bg-white p-5">
                <dt className="text-sm font-semibold text-ink-muted uppercase tracking-wide">
                  {s.label}
                </dt>
                <dd className="font-display text-lg text-ink">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Safety */}
      {rental.safetyImage && (
        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-mint/15 px-4 py-1.5 text-sm font-semibold text-mint-600">
                <ShieldCheck className="size-4" /> Safety first
              </span>
              <h2
                className="mt-3 font-display font-semibold tracking-tight"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
              >
                We sweat the small stuff so you don't have to.
              </h2>
              <p className="mt-4 text-lg text-ink-soft">
                Every rental is sanitized between parties, inspected before delivery, and set
                up by us — so you can focus on the kids, not the cords.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-pop-sm">
              <Image
                src={rental.safetyImage}
                alt={rental.safetyImageAlt || ""}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover scale-[1.03]"
              />
            </div>
          </div>
        </section>
      )}

      {/* Cross-sell */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            className="font-display font-semibold tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Other crowd-pleasers
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((r, i) => (
              <RentalCard key={r.slug} rental={r} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          ref={lightboxRef}
          role="dialog"
          aria-modal="true"
          aria-label="Photo gallery"
          tabIndex={-1}
          className="fixed inset-0 z-[60] grid place-items-center bg-ink/90 p-4 outline-none"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 grid size-12 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
          >
            <X className="size-6" />
          </button>
          <div className="relative h-full max-h-[80vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={rental.gallery[lightbox].src}
              alt={rental.gallery[lightbox].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
