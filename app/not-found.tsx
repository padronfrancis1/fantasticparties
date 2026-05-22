import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Balloon, Sparkle } from "@/components/decorative/shapes";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[70vh] place-items-center overflow-hidden px-4 py-20 text-center">
      <div aria-hidden className="absolute left-[10%] top-[20%]">
        <Balloon color="#FF6B6B" className="w-20" />
      </div>
      <div aria-hidden className="absolute right-[12%] top-[25%]">
        <Balloon color="#4D96FF" className="w-24" />
      </div>
      <div aria-hidden className="absolute right-[20%] bottom-[20%]">
        <Sparkle color="#FFD93D" className="w-12" />
      </div>

      <div className="relative">
        <p className="font-display text-8xl font-semibold text-coral">404</p>
        <h1
          className="mt-4 font-display font-semibold tracking-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          The party's not here.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-ink-soft">
          Looks like this page floated away with the balloons. Let's get you back to the fun.
        </p>
        <Button size="lg" asChild className="mt-8">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </section>
  );
}
