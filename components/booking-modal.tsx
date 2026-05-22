"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import confetti from "canvas-confetti";
import { ArrowLeft, ArrowRight, Check, PartyPopper, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RENTALS } from "@/lib/data/rentals";
import { cn, formatCAD, SITE } from "@/lib/utils";
import { useBookingModal } from "@/components/booking-modal-provider";

const todayPlus = (days: number) => {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().split("T")[0];
};

const BookingSchema = z.object({
  rentals: z.array(z.string()).min(1, "Pick at least one rental"),
  date: z.string().min(1, "Pick a date"),
  time: z.string().min(1, "Pick a start time"),
  address: z.string().min(5, "Enter your party address"),
  name: z.string().min(2, "Tell us your name"),
  phone: z.string().min(7, "We need a phone number to call you back"),
  email: z.string().email("Please enter a valid email"),
  childAge: z.string().optional(),
  notes: z.string().optional(),
});

type BookingForm = z.infer<typeof BookingSchema>;

const STEPS = ["rentals", "date", "address", "details"] as const;
type Step = (typeof STEPS)[number];

function StepIndicator({ current }: { current: number }) {
  return (
    <div
      role="progressbar"
      aria-valuemin={1}
      aria-valuemax={STEPS.length}
      aria-valuenow={current + 1}
      aria-label={`Step ${current + 1} of ${STEPS.length}`}
      className="flex items-center justify-center gap-2 px-6 pt-6"
    >
      {STEPS.map((_, i) => (
        <div
          key={i}
          aria-hidden
          className={cn(
            "h-2 rounded-full transition-all duration-500",
            i <= current ? "w-10 bg-coral" : "w-2 bg-ink/15"
          )}
        />
      ))}
    </div>
  );
}

function StepRentals() {
  const { watch, setValue, formState } = useFormContext<BookingForm>();
  const selected = watch("rentals") || [];
  const toggle = (slug: string) => {
    if (selected.includes(slug)) {
      setValue("rentals", selected.filter((s) => s !== slug), { shouldValidate: true });
    } else {
      setValue("rentals", [...selected, slug], { shouldValidate: true });
    }
  };
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-display text-2xl font-semibold">What's the vibe?</h3>
        <p className="text-ink-soft mt-1">Pick everything you'd like. We'll quote the rest.</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {RENTALS.map((r) => {
          const active = selected.includes(r.slug);
          return (
            <button
              type="button"
              key={r.slug}
              onClick={() => toggle(r.slug)}
              aria-pressed={active}
              className={cn(
                "group flex items-center gap-3 rounded-2xl border-2 p-3 text-left transition-all",
                active
                  ? "border-coral bg-coral/5 shadow-[0_8px_20px_-8px_rgb(255_107_107_/_0.4)]"
                  : "border-ink/10 bg-white hover:border-ink/30"
              )}
            >
              <div className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-cream-100">
                <Image src={r.heroImage} alt="" fill className="object-cover" sizes="64px" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-display font-semibold leading-tight">{r.shortName}</p>
                <p className="text-xs text-ink-muted truncate">{r.priceLabel}</p>
              </div>
              <span
                className={cn(
                  "grid size-7 shrink-0 place-items-center rounded-full border-2 transition",
                  active ? "border-coral bg-coral text-white" : "border-ink/20"
                )}
                aria-hidden
              >
                {active && <Check className="size-4" />}
              </span>
            </button>
          );
        })}
      </div>
      {formState.errors.rentals && (
        <p className="text-sm text-coral-700">{formState.errors.rentals.message}</p>
      )}
    </div>
  );
}

function StepDate() {
  const { register, formState } = useFormContext<BookingForm>();
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-display text-2xl font-semibold">When's the party?</h3>
        <p className="text-ink-soft mt-1">We'll do our best to make your date work.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Date" error={formState.errors.date?.message}>
          <input
            type="date"
            min={todayPlus(1)}
            {...register("date")}
            className="field-input"
          />
        </Field>
        <Field label="Start time" error={formState.errors.time?.message}>
          <input type="time" {...register("time")} className="field-input" />
        </Field>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-semibold text-ink-soft">{label}</span>
      {children}
      {error && <span className="mt-1 block text-sm text-coral-700">{error}</span>}
    </label>
  );
}

function StepAddress() {
  const { register, formState } = useFormContext<BookingForm>();
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-display text-2xl font-semibold">Where to deliver?</h3>
        <p className="text-ink-soft mt-1">Just the address — we'll figure out the rest.</p>
      </div>
      <Field label="Party address" error={formState.errors.address?.message}>
        <input
          type="text"
          autoComplete="street-address"
          placeholder="123 Sunshine Lane, Calgary AB"
          {...register("address")}
          className="field-input"
        />
      </Field>
      <Field label="Child's age (optional)">
        <input type="text" placeholder="Turning 4" {...register("childAge")} className="field-input" />
      </Field>
      <Field label="Anything we should know? (optional)">
        <textarea
          rows={3}
          placeholder="Theme, accessibility needs, special requests…"
          {...register("notes")}
          className="field-input resize-none"
        />
      </Field>
    </div>
  );
}

function StepDetails() {
  const { register, formState } = useFormContext<BookingForm>();
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-display text-2xl font-semibold">How do we reach you?</h3>
        <p className="text-ink-soft mt-1">We'll call within 24 hours to confirm.</p>
      </div>
      <Field label="Your name" error={formState.errors.name?.message}>
        <input
          type="text"
          autoComplete="name"
          {...register("name")}
          className="field-input"
        />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone" error={formState.errors.phone?.message}>
          <input
            type="tel"
            autoComplete="tel"
            placeholder="(403) 555-0123"
            {...register("phone")}
            className="field-input"
          />
        </Field>
        <Field label="Email" error={formState.errors.email?.message}>
          <input
            type="email"
            autoComplete="email"
            placeholder="you@email.com"
            {...register("email")}
            className="field-input"
          />
        </Field>
      </div>
    </div>
  );
}

function PriceEstimate() {
  const { watch } = useFormContext<BookingForm>();
  const selected = watch("rentals") || [];
  const items = RENTALS.filter((r) => selected.includes(r.slug));
  const fixedTotal = items.reduce((sum, r) => sum + r.bookingPrice, 0);
  const anyQuoteOnly = items.some((r) => r.bookingPrice === 0);

  if (items.length === 0) return null;

  return (
    <div className="mx-6 mb-4 rounded-2xl bg-sunshine/15 border-2 border-sunshine/30 px-4 py-3">
      <div className="flex items-center justify-between gap-3 text-sm">
        <span className="font-semibold text-ink">
          <Sparkles className="inline size-4 -mt-1 mr-1 text-sunshine-600" />
          Estimated total
        </span>
        <span className="font-display text-xl font-semibold tabular-nums">
          {fixedTotal > 0 ? formatCAD(fixedTotal) : ""}
          {anyQuoteOnly && (
            <span className="ml-1 text-sm text-ink-soft">
              {fixedTotal > 0 ? "+ quote" : "Contact for quote"}
            </span>
          )}
        </span>
      </div>
    </div>
  );
}

export function BookingModal() {
  const { open, setOpen, preselect, setPreselect } = useBookingModal();
  const [step, setStep] = React.useState(0);
  const [submitting, setSubmitting] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const methods = useForm<BookingForm>({
    resolver: zodResolver(BookingSchema),
    mode: "onTouched",
    defaultValues: {
      rentals: [],
      date: "",
      time: "",
      address: "",
      name: "",
      phone: "",
      email: "",
      childAge: "",
      notes: "",
    },
  });

  React.useEffect(() => {
    if (open && preselect.length > 0) {
      methods.setValue("rentals", preselect);
      setPreselect([]);
    }
  }, [open, preselect, methods, setPreselect]);

  React.useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setStep(0);
        setDone(false);
        setSubmitError(null);
        methods.reset();
      }, 300);
      return () => clearTimeout(t);
    }
  }, [open, methods]);

  const stepFields: Record<Step, (keyof BookingForm)[]> = {
    rentals: ["rentals"],
    date: ["date", "time"],
    address: ["address"],
    details: ["name", "phone", "email"],
  };

  const next = async () => {
    const ok = await methods.trigger(stepFields[STEPS[step]]);
    if (ok) setStep((s) => Math.min(STEPS.length - 1, s + 1));
  };

  const back = () => setStep((s) => Math.max(0, s - 1));

  const onSubmit = async (data: BookingForm) => {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setDone(true);
      confetti({
        particleCount: 140,
        spread: 90,
        origin: { y: 0.6 },
        colors: ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF"],
      });
    } catch {
      setSubmitError(
        `We couldn't send your booking. Please call us at ${SITE.phone} or email ${SITE.email}.`
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl bg-cream-50">
        {!done ? (
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col">
              <StepIndicator current={step} />
              <div className="px-6 pt-4">
                <DialogTitle className="sr-only">Book your party</DialogTitle>
                <DialogDescription className="sr-only">
                  Four-step booking form
                </DialogDescription>
              </div>
              <div className="px-6 pb-2 pt-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    {step === 0 && <StepRentals />}
                    {step === 1 && <StepDate />}
                    {step === 2 && <StepAddress />}
                    {step === 3 && <StepDetails />}
                  </motion.div>
                </AnimatePresence>
              </div>

              <PriceEstimate />

              {submitError && (
                <div
                  role="alert"
                  className="mx-6 mb-4 rounded-2xl border-2 border-coral/40 bg-coral/10 px-4 py-3 text-sm text-coral-700"
                >
                  {submitError}
                </div>
              )}

              <div className="flex items-center justify-between gap-3 border-t border-ink/5 bg-white px-6 py-4 sm:rounded-b-3xl">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={back}
                  disabled={step === 0}
                  className={cn(step === 0 && "invisible")}
                >
                  <ArrowLeft className="size-4" /> Back
                </Button>
                {step < STEPS.length - 1 ? (
                  <Button type="button" onClick={next}>
                    Next <ArrowRight className="size-4" />
                  </Button>
                ) : (
                  <Button type="submit" disabled={submitting} variant="primary">
                    {submitting ? "Sending…" : "Send booking"}
                    <PartyPopper className="size-5" />
                  </Button>
                )}
              </div>
            </form>
          </FormProvider>
        ) : (
          <div className="p-10 text-center">
            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="mx-auto grid size-24 place-items-center rounded-full bg-sunshine ring-pop"
            >
              <PartyPopper className="size-12 text-ink" />
            </motion.div>
            <DialogTitle className="mt-6 font-display text-3xl font-semibold">
              Yes! Your booking is in.
            </DialogTitle>
            <DialogDescription className="mt-3 text-lg text-ink-soft">
              We'll call or email within 24 hours to lock in your date.
            </DialogDescription>
            <Button onClick={() => setOpen(false)} className="mt-8" size="lg">
              You're the best
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
