import type { Metadata } from "next";
import { RentalPage } from "@/components/rental-page";
import { BigCTA } from "@/components/big-cta";
import { getRental, getOtherRentals } from "@/lib/data/rentals";
import { serviceSchema } from "@/lib/jsonld";
import { notFound } from "next/navigation";

const SLUG = "bubble-domes";

export const metadata: Metadata = {
  title: "Bubble Dome Rental Calgary · Inflatable Photo Domes for Kids Parties",
  description:
    "Rent our crystal-clear inflatable bubble domes for kids parties in Calgary. Large ($250) and small ($180) options, balloons included. The most photographed party rental in YYC.",
  alternates: { canonical: "/bubble-domes" },
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
