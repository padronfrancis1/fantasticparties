import type { Metadata } from "next";
import { RentalPage } from "@/components/rental-page";
import { BigCTA } from "@/components/big-cta";
import { getRental, getOtherRentals } from "@/lib/data/rentals";
import { serviceSchema } from "@/lib/jsonld";
import { notFound } from "next/navigation";

const SLUG = "bouncy-castle";

export const metadata: Metadata = {
  title: "Bouncy Castle Rental Calgary · Commercial-Grade Inflatable for Kids Parties",
  description:
    "Rent a 9×9×7 ft commercial-grade bouncy castle for your kids birthday party in Calgary. Pairs beautifully with our soft play.",
  alternates: { canonical: "/bouncy-castle" },
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
