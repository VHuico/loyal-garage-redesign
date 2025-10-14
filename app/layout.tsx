import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: "Loyal Garage | Professional Garage Door Service El Paso, TX",
  description: "New to El Paso, bringing years of garage door expertise from Austin. Licensed & insured one-person operation offering honest, quality service. Personal attention on every job. Call (915) 555-0123 for a free quote!",
  keywords: [
    "garage door repair El Paso",
    "garage door installation El Paso",
    "garage door service El Paso TX",
    "one person garage door business",
    "garage door opener El Paso",
    "garage door maintenance",
    "broken garage door spring",
    "personal garage door service"
  ],
  authors: [{ name: "Loyal Garage" }],
  openGraph: {
    title: "Loyal Garage | Personal Garage Door Service in El Paso",
    description: "New to El Paso with years of experience. One-person operation means you get direct owner service every time. Licensed, insured, and committed to earning your trust.",
    url: "https://loyalgarage.com",
    siteName: "Loyal Garage",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
