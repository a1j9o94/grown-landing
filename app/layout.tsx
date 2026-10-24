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
  metadataBase: new URL("https://grownthc.com"),
  title: {
    default: "Grown | THC-Infused Seafood Seasoning & Chili-Lime",
    template: "%s | Grown",
  },
  description:
    "THC-infused seafood seasoning and chili-lime seasoning in single-serve 5mg sachets. Designed for dinner parties, not dorm rooms. Launching in Illinois.",
  keywords: [
    "THC seafood seasoning",
    "THC chili-lime seasoning",
    "cannabis cooking",
    "edibles",
    "THC sachets",
    "cannabis recipes",
    "Illinois THC",
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
    url: "https://grownthc.com",
    siteName: "Grown",
    title: "Grown | THC-Infused Seafood Seasoning & Chili-Lime",
    description:
      "THC-infused seafood seasoning and chili-lime seasoning in single-serve 5mg sachets. Designed for dinner parties, not dorm rooms.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Grown - THC-Infused Seafood Seasoning & Chili-Lime",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grown | THC-Infused Seafood Seasoning & Chili-Lime",
    description:
      "THC-infused seafood seasoning and chili-lime seasoning in single-serve 5mg sachets. Designed for dinner parties, not dorm rooms.",
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
