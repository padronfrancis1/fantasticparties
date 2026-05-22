import type { Metadata } from "next";
import { RentalPage } from "@/components/rental-page";
import { BigCTA } from "@/components/big-cta";
import { getRental, getOtherRentals } from "@/lib/data/rentals";
import { serviceSchema } from "@/lib/jsonld";
import { notFound } from "next/navigation";

const SLUG = "bumper-cars";

export const metadata: Metadata = {
  title: "Bumper Cars Rental Calgary · Electric Bumper Cars + Inflatable Arena",
  description:
    "Rent 4 electric bumper cars with a 13×13 ft inflatable arena for kids aged 1–6 in Calgary. Parent remote speed control. From $350.",
  alternates: { canonical: "/bumper-cars" },
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
