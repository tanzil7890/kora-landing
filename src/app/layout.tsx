import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";
import { Metadata } from 'next';
import StructuredData from "@/components/StructuredData";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://outhad.com'),
  title: {
    default: "Outhad AI - Revolutionize E-commerce Search with AI-Powered Solutions",
    template: "%s | Outhad AI"
  },
  description: "Transform your online store with Outhad AI's context-aware search (98% accuracy), personalized shopping agents, and data-driven insights. Boost conversions by 4.2% and enhance customer satisfaction with our advanced AI technology.",
  keywords: [
    "AI search engine",
    "e-commerce search solution",
    "personalized shopping",
    "context-aware search",
    "AI shopping assistant",
    "conversion optimization",
    "e-commerce analytics",
    "smart product recommendations",
    "retail search technology",
    "AI-powered search",
    "semantic search",
    "natural language search",
    "product discovery platform",
    "intelligent search solution",
    "real-time analytics"
  ],
  authors: [{ name: "Outhad AI", url: "https://outhad.com" }],
  creator: "Outhad AI Team",
  publisher: "Outhad AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: "Outhad AI - Transform Your E-commerce Search Experience",
    description: "Boost conversions by 4.2% with AI-powered context-aware search, personalized shopping agents, and real-time analytics. Join leading brands using Outhad AI.",
    url: "https://outhad.com",
    siteName: "Outhad AI",
    images: [
      {
        url: "/images/outhad-home.png",
        width: 1200,
        height: 630,
        alt: "Outhad AI - Revolutionizing E-commerce Search with AI",
      },
      {
        url: "/images/context-aware-search.png",
        width: 1200,
        height: 630,
        alt: "Context-Aware Search with 98% Accuracy",
      },
      {
        url: "/images/personlized-shoping-agent.png",
        width: 1200,
        height: 630,
        alt: "AI-Powered Personal Shopping Assistant",
      },
      {
        url: "/images/data-driven-insights-boost-conversion.png",
        width: 1200,
        height: 630,
        alt: "Data-Driven Insights for E-commerce Growth",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Outhad AI - Next-Gen E-commerce Search Solution",
    description: "Elevate your online store with AI-powered search technology. 98% search accuracy, 4.2% conversion boost, and personalized shopping experiences.",
    site: "@outhadai",
    creator: "@outhadai",
    images: ["/images/outhad-home.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Technology",
  verification: {
    google: "RzmEVPT4njdIgBTft8WCh_FN44x2G-eL7ndpbhf2j00",
    yandex: "6c846fad5a28f9ed<",
  },
  other: {
    "google-site-verification": "RzmEVPT4njdIgBTft8WCh_FN44x2G-eL7ndpbhf2j00",
    "msvalidate.01": "C0CFD1000BB687CA6E64C07843E34B01",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <StructuredData />
        <link rel="canonical" href="https://outhad.com" />
        <meta name="theme-color" content="#6d28d9" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/outhad-logo.png" />
        <link rel="apple-touch-icon" href="/outhad-logo.png" />
      </head>
      <body className={`${spaceGrotesk.className} gradient-bg text-white min-h-screen antialiased`} suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
