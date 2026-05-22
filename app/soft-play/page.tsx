import type { Metadata } from "next";
import { RentalPage } from "@/components/rental-page";
import { BigCTA } from "@/components/big-cta";
import { getRental, getOtherRentals } from "@/lib/data/rentals";
import { serviceSchema } from "@/lib/jsonld";
import { notFound } from "next/navigation";

const SLUG = "soft-play";

export const metadata: Metadata = {
  title: "Soft Play Rental Calgary · Pastel Foam Play Sets for Toddler Parties",
  description:
    "Rent our pastel soft play set in Calgary — foam blocks, slide, ball pit, climbing pieces, playhouse. Perfect for toddlers and Instagram-worthy parties.",
  alternates: { canonical: "/soft-play" },
};

export default function Page() {
  const rental = getRental(SLUG);
  if (!rental) notFound();
  const others = getOtherRentals(SLUG);
  const schema = serviceSchema(SLUG);
  return (
    <>
      <RentalPage rental={rental} others={others} />
      <BigCTA />
      {schema && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </>
  );
}
