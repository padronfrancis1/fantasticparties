"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/utils";
import { RENTALS } from "@/lib/data/rentals";

const LINKS = [
  { href: "/bumper-cars", label: "Bumper Cars" },
  { href: "/bubble-domes", label: "Bubble Domes" },
  { href: "/bouncy-castle", label: "Bouncy Castle" },
  { href: "/soft-play", label: "Soft Play" },
  { href: "/chairs-and-tables", label: "Chairs & Tables" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const shadow = useTransform(
    scrollY,
    [0, 80],
    ["0 0 0 0 rgba(0,0,0,0)", "0 10px 30px -10px rgba(31,26,26,0.15)"]
  );
  const py = useTransform(scrollY, [0, 80], [16, 8]);

  return (
    <motion.header
      style={{ paddingTop: py, paddingBottom: py, boxShadow: shadow }}
      className="sticky top-0 z-40 w-full"
    >
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 -z-10 bg-cream/85 backdrop-blur-md border-b border-ink/5"
      />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky/40"
          aria-label={`${SITE.name} home`}
        >
          <Image
            src="/images/fantastic_logo-removebg-preview.png"
            alt="Fantastic Parties YYC"
            width={400}
            height={108}
            className="h-20 w-auto sm:h-24 object-contain"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors " +
                  (active
                    ? "bg-white text-ink shadow-sm"
                    : "text-ink-soft hover:bg-white hover:text-ink")
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.phoneHref}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-ink ring-pop-sm transition hover:scale-105"
          >
            <Phone className="size-4 text-coral" />
            <span>{SITE.phone}</span>
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle>Menu</SheetTitle>
              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="rounded-2xl px-4 py-3 font-display text-lg hover:bg-coral-50"
                  >
                    Home
                  </Link>
                </SheetClose>
                {RENTALS.map((r) => (
                  <SheetClose key={r.slug} asChild>
                    <Link
                      href={r.href}
                      className="rounded-2xl px-4 py-3 font-display text-lg hover:bg-coral-50"
                    >
                      {r.shortName}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className="rounded-2xl px-4 py-3 font-display text-lg hover:bg-coral-50"
                  >
                    Contact
                  </Link>
                </SheetClose>
              </nav>
              <div className="mt-auto flex flex-col gap-3 pt-8">
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 font-semibold ring-pop-sm"
                >
                  <Phone className="size-5 text-coral" />
                  {SITE.phone}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
