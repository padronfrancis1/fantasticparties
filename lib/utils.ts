import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCAD(amount: number): string {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export const SITE = {
  name: "Fantastic Parties YYC",
  domain: "https://www.fantasticparties.ca",
  phone: "587-969-5441",
  phoneHref: "tel:+15879695441",
  phonePretty: "(587) 969-5441",
  email: "fantasticpartiesyyc@gmail.com",
  emailHref: "mailto:fantasticpartiesyyc@gmail.com",
  city: "Calgary",
  region: "AB",
  country: "Canada",
  pickupArea: "Evergreen, SW Calgary",
  geo: { lat: 51.0447, lng: -114.0719 },
  socials: {
    instagram: "https://www.instagram.com/fantasticpartiesyyc/",
    facebook: "https://www.facebook.com/profile.php?id=61573584459272",
  },
} as const;
