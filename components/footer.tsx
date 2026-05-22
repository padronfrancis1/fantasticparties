import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { SITE } from "@/lib/utils";
import { RENTALS } from "@/lib/data/rentals";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden">
      <div className="absolute inset-x-0 -top-12 h-24 bg-cream" aria-hidden />
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="absolute -top-px h-12 w-full text-ink"
        aria-hidden
      >
        <path d="M0 60 C 360 0, 1080 0, 1440 60 Z" fill="currentColor" />
      </svg>

      <div className="bg-ink text-cream pt-20 pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <Link href="/" className="inline-flex items-center">
                <Image
                  src="/images/fantastic_logo-removebg-preview.png"
                  alt="Fantastic Parties YYC"
                  width={360}
                  height={96}
                  className="h-20 w-auto object-contain"
                />
              </Link>
              <p className="mt-4 max-w-sm text-cream/70 leading-relaxed">
                Calgary's most fantastic kids' party rentals. Bumper cars, bubble domes, bouncy
                castles, soft play, and everything in between — delivered, set up, and ready
                to make memories.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href={SITE.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="grid size-11 place-items-center rounded-full bg-cream/10 hover:bg-coral transition-colors"
                >
                  <Instagram className="size-5" />
                </a>
                <a
                  href={SITE.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="grid size-11 place-items-center rounded-full bg-cream/10 hover:bg-coral transition-colors"
                >
                  <Facebook className="size-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-cream mb-4">Rentals</h3>
              <ul className="space-y-2">
                {RENTALS.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={r.href}
                      className="text-cream/70 hover:text-sunshine transition-colors"
                    >
                      {r.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-cream mb-4">Get in touch</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={SITE.phoneHref}
                    className="flex items-center gap-3 text-cream/85 hover:text-sunshine"
                  >
                    <Phone className="size-4" />
                    <span>{SITE.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.emailHref}
                    className="flex items-center gap-3 text-cream/85 hover:text-sunshine"
                  >
                    <Mail className="size-4" />
                    <span className="break-all">{SITE.email}</span>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-cream/70">
                  <MapPin className="size-4" />
                  <span>Calgary, AB · Pickup in Evergreen SW</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-cream/10 pt-6 text-sm text-cream/60 sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} Fantastic Parties YYC. Making birthdays magical.</p>
            <p>Calgary, Alberta · Serving all of YYC and surrounding areas</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
