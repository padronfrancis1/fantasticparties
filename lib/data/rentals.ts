export type Rental = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  href: string;
  priceLabel: string;
  startingPrice?: number;
  duration: string;
  ages: string;
  capacity: string;
  heroImage: string;
  heroImageAlt: string;
  gallery: { src: string; alt: string }[];
  features: string[];
  specs: { label: string; value: string }[];
  safetyImage?: string;
  safetyImageAlt?: string;
  description: string;
  bookable: boolean;
  /** Per-day or per-event price used in the booking modal estimate. 0 means "contact for quote". */
  bookingPrice: number;
  bookingUnit: "event" | "day";
  /** Tailwind background color class for the card chip */
  accent: "coral" | "sunshine" | "mint" | "sky";
};

export const RENTALS: Rental[] = [
  {
    slug: "bumper-cars",
    name: "Bumper Cars + Inflatable Arena",
    shortName: "Bumper Cars",
    tagline: "Four electric bumper cars in a 13×13 ft arena",
    href: "/bumper-cars",
    priceLabel: "From $350",
    startingPrice: 350,
    duration: "2–3 hours",
    ages: "Ages 1–6",
    capacity: "4 cars + arena",
    heroImage: "/images/bumper_cars.png",
    heroImageAlt:
      "Kid driving an electric bumper car inside a 13 by 13 foot inflatable arena at a Calgary birthday party",
    gallery: [
      { src: "/images/bumper_cars.png", alt: "Electric bumper cars in inflatable arena" },
      { src: "/images/bumper_cars_resized.png", alt: "Kids playing in bumper car arena" },
      { src: "/images/bump_car_rules.jpg", alt: "Bumper car safety rules" },
    ],
    features: [
      "4 commercial-grade electric bumper cars",
      "13×13 ft soft inflatable arena (kids can't fall out)",
      "Parent remote-control speed settings",
      "Add extra cars for $100 each",
    ],
    specs: [
      { label: "Duration", value: "2–3 hours" },
      { label: "Ages", value: "1–6 years" },
      { label: "Arena size", value: "13 × 13 ft (4 × 4 m)" },
      { label: "Cars included", value: "4 (add more for $100 each)" },
      { label: "Power", value: "Rechargeable battery — no cords" },
      { label: "Space needed", value: "16 × 16 ft (flat, indoor or outdoor)" },
    ],
    safetyImage: "/images/bump_car_rules.jpg",
    safetyImageAlt: "Bumper car safety rules — ages 1 to 6, supervised play, one child per car",
    description:
      "Our flagship package. Four electric bumper cars inside a soft inflatable arena. Parents control the max speed by remote, so toddlers and big kids can both have a blast safely. Pure birthday magic.",
    bookable: true,
    bookingPrice: 350,
    bookingUnit: "event",
    accent: "coral",
  },
  {
    slug: "bubble-domes",
    name: "Bubble Domes",
    shortName: "Bubble Domes",
    tagline: "Pop-up party rooms in the sky",
    href: "/bubble-domes",
    priceLabel: "From $180",
    startingPrice: 180,
    duration: "3–4 hours",
    ages: "All ages",
    capacity: "Up to 8 kids (large)",
    heroImage: "/images/bubble_dome_1.jpg",
    heroImageAlt:
      "Clear inflatable bubble dome filled with balloons for a kids birthday party in Calgary",
    gallery: [
      { src: "/images/bubble_dome_1.jpg", alt: "Clear inflatable bubble dome filled with balloons at a kids birthday party" },
      { src: "/images/bubble_dome_2.jpg", alt: "Bubble dome decorated for a kids birthday party in Calgary" },
      { src: "/images/bubble_dome_3.jpg", alt: "Kids inside an inflatable bubble dome at a Calgary party" },
      { src: "/images/bubbledome_rules.jpg", alt: "Bubble dome safety rules" },
    ],
    features: [
      "Crystal-clear inflatable dome — perfect for photos",
      "Balloons included (we fill it up)",
      "Quiet, gentle blower keeps it inflated",
      "Large fits up to 8 kids ($250), small fits smaller groups ($180)",
      "Indoor or outdoor",
    ],
    specs: [
      { label: "Large dome price", value: "$250" },
      { label: "Small dome price", value: "$180" },
      { label: "Duration", value: "3–4 hours" },
      { label: "Capacity", value: "Up to 8 kids (large)" },
      { label: "Ages", value: "All ages" },
      { label: "Setup", value: "Available — quoted on booking" },
    ],
    safetyImage: "/images/bubbledome_rules.jpg",
    safetyImageAlt: "Bubble dome safety rules",
    description:
      "An Instagram-worthy bubble of joy. Kids climb in, we fill it with balloons, and the photos basically take themselves. Comes in two sizes for any party size.",
    bookable: true,
    bookingPrice: 250,
    bookingUnit: "event",
    accent: "sky",
  },
  {
    slug: "bouncy-castle",
    name: "Bouncy Castle",
    shortName: "Bouncy Castle",
    tagline: "Commercial-grade bouncing fun",
    href: "/bouncy-castle",
    priceLabel: "Contact for pricing",
    duration: "3–4 hours",
    ages: "All ages",
    capacity: "9×9×7 ft",
    heroImage: "/images/bouncy_castle.jpg",
    heroImageAlt:
      "Commercial PVC bouncy castle setup at a kids birthday party in Calgary",
    gallery: [
      { src: "/images/bouncy_castle.jpg", alt: "Bouncy castle ready for a party" },
      { src: "/images/bouncy_castle_and_softplay.jpg", alt: "Bouncy castle paired with soft play" },
      { src: "/images/bouncy_castle_and_softplay_1.jpg", alt: "Kids playing on bouncy castle" },
      { src: "/images/bouncy_castle_and_softplay_2.jpg", alt: "Bouncy castle and soft play combo" },
    ],
    features: [
      "Commercial-grade PVC — extra durable",
      "Compact 9×9 ft footprint — fits most yards and garages",
      "Pairs beautifully with our soft play package",
      "Quiet blower",
    ],
    specs: [
      { label: "Duration", value: "3–4 hours" },
      { label: "Ages", value: "All ages" },
      { label: "Size", value: "9 × 9 × 7 ft (W × D × H)" },
      { label: "Material", value: "Commercial PVC" },
      { label: "Power", value: "Standard 110V outlet" },
      { label: "Setup", value: "Available — quoted on booking" },
    ],
    description:
      "A classic that never gets old. Our bouncy castle is small enough to fit indoors but tough enough for any backyard crew. Great solo or paired with the soft play package.",
    bookable: true,
    bookingPrice: 0,
    bookingUnit: "event",
    accent: "sunshine",
  },
  {
    slug: "soft-play",
    name: "Soft Play",
    shortName: "Soft Play",
    tagline: "Foam castle for the little ones",
    href: "/soft-play",
    priceLabel: "Contact for pricing",
    duration: "3–4 hours",
    ages: "Ages 1–5",
    capacity: "Up to 6 toddlers",
    heroImage: "/images/bouncy_castle_and_softplay_3.jpg",
    heroImageAlt:
      "Pastel soft play set with foam blocks, slide, and ball pit for toddlers in Calgary",
    gallery: [
      { src: "/images/bouncy_castle_and_softplay_3.jpg", alt: "Soft play setup with slide and ball pit" },
      { src: "/images/bouncy_castle_and_softplay_1.jpg", alt: "Foam play blocks and climbing pieces" },
      { src: "/images/bouncy_castle_and_softplay_2.jpg", alt: "Soft play and bouncy castle combo" },
    ],
    features: [
      "Foam blocks, slide, ball pit, climbing pieces, playhouse",
      "Soft pastel palette — gorgeous for photos",
      "Designed for ages 1–5",
      "Sanitized between every party",
    ],
    specs: [
      { label: "Duration", value: "3–4 hours" },
      { label: "Ages", value: "1–5 years" },
      { label: "Includes", value: "Slide · ball pit · foam blocks · playhouse" },
      { label: "Palette", value: "Soft pastels" },
      { label: "Space needed", value: "~10 × 10 ft" },
      { label: "Setup", value: "Available — quoted on booking" },
    ],
    description:
      "A toddler's dream and a parent's photo album dream. Foam blocks, a small slide, a ball pit, and a playhouse — all in a Pinterest-perfect pastel palette.",
    bookable: true,
    bookingPrice: 0,
    bookingUnit: "event",
    accent: "mint",
  },
  {
    slug: "chairs-and-tables",
    name: "Kids Chairs & Tables",
    shortName: "Chairs & Tables",
    tagline: "Pint-sized seating for pint-sized guests",
    href: "/chairs-and-tables",
    priceLabel: "From $3/day",
    startingPrice: 3,
    duration: "Per day",
    ages: "Ages 1–7",
    capacity: "Mix and match",
    heroImage: "/images/chair-2.jpg",
    heroImageAlt: "Kids party chairs and tables for rent in Calgary",
    gallery: [
      { src: "/images/chair-2.jpg", alt: "Kids party chairs" },
      { src: "/images/table.jpg", alt: "Kids party tables" },
    ],
    features: [
      "Chairs $3/day each — 55 cm tall",
      "Tables $4/day each — 55 × 55 × 45 cm",
      "Indoor or outdoor",
      "Easy pickup in Evergreen SW Calgary, or delivery for an extra fee",
      "No deposit required",
    ],
    specs: [
      { label: "Chair price", value: "$3.00/day each" },
      { label: "Table price", value: "$4.00/day each" },
      { label: "Chair height", value: "55 cm" },
      { label: "Table size", value: "55 × 55 × 45 cm" },
      { label: "Ages", value: "1–7 years" },
      { label: "Pickup", value: "Evergreen SW, or delivery" },
    ],
    description:
      "The unsung heroes of any good kid's party. Pint-sized chairs and tables your little guests will actually fit on. Mix and match — no deposit, no fuss.",
    bookable: true,
    bookingPrice: 3,
    bookingUnit: "day",
    accent: "sunshine",
  },
];

export function getRental(slug: string): Rental | undefined {
  return RENTALS.find((r) => r.slug === slug);
}

export function getOtherRentals(slug: string, limit = 3): Rental[] {
  return RENTALS.filter((r) => r.slug !== slug).slice(0, limit);
}
