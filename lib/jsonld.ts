import { RENTALS } from "@/lib/data/rentals";
import { FAQS } from "@/lib/data/faqs";
import { SITE } from "@/lib/utils";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.domain}/#localbusiness`,
    name: SITE.name,
    image: `${SITE.domain}/images/fantastic_logo-removebg-preview.png`,
    description:
      "Kids party rental services in Calgary offering bumper cars, bubble domes, bouncy castles, soft play, and party chairs and tables for children's birthday parties.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Calgary",
      addressRegion: "AB",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    telephone: "+1-587-969-5441",
    email: SITE.email,
    url: SITE.domain,
    priceRange: "$180-$350",
    areaServed: { "@type": "City", name: "Calgary" },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 5,
      reviewCount: 5,
    },
    sameAs: [SITE.socials.facebook, SITE.socials.instagram],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Party Rental Services",
      itemListElement: RENTALS.map((r) => ({
        "@type": "Offer",
        ...(r.startingPrice ? { price: r.startingPrice.toFixed(2), priceCurrency: "CAD" } : {}),
        itemOffered: {
          "@type": "Service",
          name: `${r.name} Calgary`,
          description: r.description,
          provider: { "@type": "LocalBusiness", name: SITE.name },
        },
      })),
    },
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function serviceSchema(slug: string) {
  const r = RENTALS.find((x) => x.slug === slug);
  if (!r) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${r.name} Rental Calgary`,
    description: r.description,
    serviceType: r.name,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      telephone: "+1-587-969-5441",
      areaServed: { "@type": "City", name: "Calgary" },
    },
    areaServed: { "@type": "City", name: "Calgary" },
    image: `${SITE.domain}${r.heroImage}`,
    ...(r.startingPrice
      ? {
          offers: {
            "@type": "Offer",
            price: r.startingPrice.toFixed(2),
            priceCurrency: "CAD",
            availability: "https://schema.org/InStock",
            url: `${SITE.domain}${r.href}`,
          },
        }
      : {}),
  };
}
