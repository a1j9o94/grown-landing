import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "./components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://growncooking.com"),
  title: {
    default: "Grown | THC-Infused Cooking Oil & Salt",
    template: "%s | Grown",
  },
  description:
    "Pantry staples for your unwind era. THC-infused cooking oil and finishing salt designed for dinner parties, not dorm rooms. Available in Colorado.",
  keywords: [
    "THC oil",
    "THC salt",
    "cannabis cooking",
    "edibles",
    "THC cooking oil",
    "infused oil",
    "cannabis recipes",
    "Colorado THC",
    "adult edibles",
  ],
  authors: [{ name: "Grown" }],
  creator: "Grown",
  publisher: "Grown",
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
  icons: {
    icon: "/logo.ico",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://growncooking.com",
    siteName: "Grown",
    title: "Grown | THC-Infused Cooking Oil & Salt",
    description:
      "Pantry staples for your unwind era. THC-infused cooking oil and finishing salt designed for dinner parties, not dorm rooms.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Grown - THC-Infused Cooking Oil & Salt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grown | THC-Infused Cooking Oil & Salt",
    description:
      "Pantry staples for your unwind era. THC-infused cooking oil and finishing salt designed for dinner parties, not dorm rooms.",
    images: ["/og-image.jpg"],
  },
  verification: {
    // Add Google Search Console verification when ready
    // google: "your-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
