import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SafeAura AI | Drone Inspection, Thermal Imaging & Diagnostics Sydney",
  description: "SafeAura AI combines drone technology, thermal imaging, and engineering intelligence for construction monitoring, solar panel inspections, and building diagnostics in Sydney, NSW.",
  keywords: [
    "drone inspection Sydney",
    "thermal imaging NSW",
    "solar panel inspection drone",
    "building diagnostics Sydney",
    "construction monitoring NSW",
    "earthworks analytics Australia",
    "WHS safety inspections Sydney",
    "aerial thermal diagnostics",
    "SafeAura AI",
    "civil 3D site mapping Australia"
  ],
  authors: [{ name: "SafeAura AI" }],
  creator: "SafeAura AI",
  publisher: "SafeAura AI",
  metadataBase: new URL("https://safe-aura-ai-ahmet-7f2536bty-emredemirdoken-gmailcoms-projects.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SafeAura AI | Next-Gen Drone & AI Intelligence Sydney",
    description: "Drone inspections, thermal diagnostics, and engineering intelligence for construction, solar assets, and infrastructure in Sydney, NSW.",
    url: "/",
    siteName: "SafeAura AI",
    locale: "en_AU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "AU-NSW",
    "geo.placename": "Sydney",
    "geo.position": "-33.8688;151.2093",
    "ICBM": "-33.8688, 151.2093",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "SafeAura AI",
  "image": "https://safe-aura-ai-ahmet-7f2536bty-emredemirdoken-gmailcoms-projects.vercel.app/logo.svg",
  "@id": "https://safe-aura-ai-ahmet-7f2536bty-emredemirdoken-gmailcoms-projects.vercel.app/#organization",
  "url": "https://safe-aura-ai-ahmet-7f2536bty-emredemirdoken-gmailcoms-projects.vercel.app",
  "telephone": "+61421781826",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sydney",
    "addressLocality": "Sydney",
    "addressRegion": "NSW",
    "postalCode": "2000",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.8688,
    "longitude": 151.2093
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.linkedin.com/company/safeaura-ai",
    "https://www.facebook.com/safeaura-ai"
  ],
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Sydney"
    },
    {
      "@type": "AdministrativeArea",
      "name": "New South Wales"
    }
  ],
  "description": "SafeAura AI combines drone technology, thermal imaging, and engineering intelligence to deliver accurate insights, reduce risk, and protect your projects in Sydney, NSW."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
