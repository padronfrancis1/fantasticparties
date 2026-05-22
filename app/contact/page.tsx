import type { Metadata } from "next";
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Balloon } from "@/components/decorative/shapes";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact · Calgary Kids Party Rentals",
  description:
    "Call 587-969-5441 or message us to book your kids party rental in Calgary. Fast replies and the best parties in YYC.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div aria-hidden className="absolute -left-10 top-12 hidden sm:block">
          <Balloon color="#FFD93D" className="w-20" />
        </div>
        <div aria-hidden className="absolute -right-6 top-1/3 hidden sm:block">
          <Balloon color="#4D96FF" className="w-24" />
        </div>

        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-coral/15 px-4 py-1.5 text-sm font-semibold text-coral-700">
            Let's plan a party
          </span>
          <h1
            className="mt-4 font-display font-semibold leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2.75rem, 7vw, 5.5rem)" }}
          >
            Say hello.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft sm:text-xl">
            Call, text, message, or use our booking form. We reply fast — usually within a
            couple of hours.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:gap-8 lg:px-8">
          <ContactCard
            icon={<Phone className="size-7 text-coral" />}
            tint="coral"
            label="Call or text"
            value={SITE.phone}
            href={SITE.phoneHref}
            hint="Fastest way to reach us"
          />
          <ContactCard
            icon={<Mail className="size-7 text-sky" />}
            tint="sky"
            label="Email"
            value={SITE.email}
            href={SITE.emailHref}
            hint="We reply within 24 hours"
          />
          <ContactCard
            icon={<Instagram className="size-7 text-mint-600" />}
            tint="mint"
            label="Instagram"
            value="@fantasticpartiesyyc"
            href={SITE.socials.instagram}
            hint="DMs are open"
          />
          <ContactCard
            icon={<Facebook className="size-7 text-sky-600" />}
            tint="sky"
            label="Facebook"
            value="Fantastic Parties YYC"
            href={SITE.socials.facebook}
            hint="Message us anytime"
          />
        </div>

        <div className="mx-auto mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 rounded-3xl bg-white p-6 ring-2 ring-ink/5 sm:grid-cols-2 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-sunshine/15">
                <MapPin className="size-6 text-sunshine-600" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">Based in Calgary</h3>
                <p className="mt-1 text-ink-soft">
                  Pickup base in Evergreen, SW Calgary. We deliver across YYC and to
                  surrounding communities like Airdrie, Cochrane, Chestermere, and Okotoks.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-coral/15">
                <Clock className="size-6 text-coral-700" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">Open 7 days a week</h3>
                <p className="mt-1 text-ink-soft">
                  We host parties any day of the week. For weekend dates, book 1–2 weeks
                  ahead to lock in your preferred time slot.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid place-items-center rounded-3xl bg-gradient-to-br from-coral via-coral-600 to-coral-700 p-10 text-center text-white sm:p-14">
            <h2
              className="font-display font-semibold leading-tight tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Ready when you are.
            </h2>
            <p className="mt-3 max-w-xl text-white/90">
              Start your booking now — takes about two minutes.
            </p>
            <div className="mt-8">
              <Button variant="sunshine" size="xl" asChild>
                <a href={SITE.phoneHref}>Call {SITE.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  hint,
  tint,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  hint: string;
  tint: "coral" | "sky" | "mint";
}) {
  const tints: Record<typeof tint, string> = {
    coral: "bg-coral/15",
    sky: "bg-sky/15",
    mint: "bg-mint/15",
  };
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-5 rounded-3xl bg-white p-6 ring-2 ring-ink/5 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgb(31_26_26_/_0.2)]"
    >
      <div className={`grid size-14 shrink-0 place-items-center rounded-2xl ${tints[tint]}`}>
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold uppercase tracking-wide text-ink-muted">{label}</p>
        <p className="mt-0.5 font-display text-xl font-semibold leading-tight break-all sm:break-normal">
          {value}
        </p>
        <p className="mt-0.5 text-sm text-ink-soft">{hint}</p>
      </div>
    </a>
  );
}
