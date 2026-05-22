import type { Metadata, Viewport } from "next";
import { Fredoka, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { FloatingCTA } from "@/components/floating-cta";
import { SmoothScroll } from "@/components/smooth-scroll";
import { BookingModal } from "@/components/booking-modal";
import { BookingModalProvider } from "@/components/booking-modal-provider";
import { SITE } from "@/lib/utils";
import { localBusinessSchema } from "@/lib/jsonld";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "Fantastic Parties YYC · Kids Party Rentals in Calgary",
    template: "%s · Fantastic Parties YYC",
  },
  description:
    "Calgary's most fantastic kids party rentals. Bumper cars, bubble domes, bouncy castle, soft play, and more. Book in 60 seconds.",
  keywords: [
    "kids party rentals Calgary",
    "bumper cars rental Calgary",
    "bubble dome rental Calgary",
    "bouncy castle rental Calgary",
    "soft play rental Calgary",
    "kids party chairs Calgary",
  ],
  authors: [{ name: SITE.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE.domain,
    siteName: SITE.name,
    title: "Fantastic Parties YYC · Calgary's most fantastic kids party rentals",
    description:
      "Bumper cars, bubble domes, bouncy castles & soft play — delivered, set up, and ready to make memories.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fantastic Parties YYC · Calgary kids party rentals",
    description:
      "Bumper cars, bubble domes, bouncy castles & soft play in Calgary.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FFF9F2",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${inter.variable}`}>
      <body
        suppressHydrationWarning
        className="min-h-screen overflow-x-hidden bg-cream text-ink antialiased"
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <BookingModalProvider>
          <SmoothScroll />
          <Nav />
          <main id="main">{children}</main>
          <Footer />
          <FloatingCTA />
          <BookingModal />
        </BookingModalProvider>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
