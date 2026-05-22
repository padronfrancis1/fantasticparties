import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { RentalsGrid } from "@/components/rentals-grid";
import { HowItWorks } from "@/components/how-it-works";
import { PackageSection } from "@/components/package-section";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { FAQAccordion } from "@/components/faq-accordion";
import { BigCTA } from "@/components/big-cta";
import { faqSchema } from "@/lib/jsonld";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <RentalsGrid />
      <HowItWorks />
      <PackageSection />
      <TestimonialCarousel />
      <FAQAccordion />
      <BigCTA />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }}
      />
    </>
  );
}
