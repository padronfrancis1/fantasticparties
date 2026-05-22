import type { Metadata } from "next";
import { RentalPage } from "@/components/rental-page";
import { BigCTA } from "@/components/big-cta";
import { getRental, getOtherRentals } from "@/lib/data/rentals";
import { serviceSchema } from "@/lib/jsonld";
import { notFound } from "next/navigation";

const SLUG = "chairs-and-tables";

export const metadata: Metadata = {
  title: "Kids Party Chairs & Tables Rental Calgary · $3 Chairs · $4 Tables",
  description:
    "Rent kids party chairs ($3/day) and tables ($4/day) in Calgary. Perfect for ages 1–7. Pickup in Evergreen SW or delivery available. No deposit required.",
  alternates: { canonical: "/chairs-and-tables" },
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
