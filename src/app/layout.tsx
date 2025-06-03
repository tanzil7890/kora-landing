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
  metadataBase: new URL('https://kora.ai'),
  title: {
    default: "Kora AI - Revolutionize Hiring with AI-Powered Interview Platform",
    template: "%s | Kora AI"
  },
  description: "Transform your hiring process with Kora AI's intelligent interviews, candidate sourcing across 200+ platforms, and behavioral assessments. Reduce time-to-hire by 80% with our advanced AI technology.",
  keywords: [
    "AI hiring platform",
    "AI interviews",
    "candidate sourcing",
    "hiring intelligence",
    "behavioral assessments",
    "remote hiring",
    "AI recruiting",
    "smart hiring platform",
    "recruitment technology",
    "AI-powered hiring",
    "talent acquisition",
    "hiring automation",
    "interview platform",
    "candidate screening",
    "global hiring platform"
  ],
  authors: [{ name: "Kora AI", url: "https://kora.ai" }],
  creator: "Kora AI Team",
  publisher: "Kora AI",
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
    title: "Kora AI - Transform Your Hiring Process with AI",
    description: "Reduce time-to-hire by 80% with AI-powered interviews, intelligent candidate sourcing, and behavioral assessments. Join leading companies using Kora AI.",
    url: "https://kora.ai",
    siteName: "Kora AI",
    images: [
      {
        url: "/images/kora-home.png",
        width: 1200,
        height: 630,
        alt: "Kora AI - Revolutionizing Hiring with AI",
      },
      {
        url: "/images/kora-interviews.png",
        width: 1200,
        height: 630,
        alt: "AI-Powered Interview Platform",
      },
      {
        url: "/images/kora-candidate-sourcing.png",
        width: 1200,
        height: 630,
        alt: "Candidate Sourcing Across 200+ Platforms",
      },
      {
        url: "/images/kora-hiring-analytics.png",
        width: 1200,
        height: 630,
        alt: "Hiring Analytics and Insights",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kora AI - Next-Gen Hiring Platform",
    description: "Revolutionize your hiring process with AI-powered interviews, candidate sourcing, and behavioral assessments. 80% reduction in time-to-hire.",
    site: "@koraai",
    creator: "@koraai",
    images: ["/images/kora-home.png"],
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
        <link rel="canonical" href="https://kora.ai" />
        <meta name="theme-color" content="#f88e4c" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/KoraAnimated.svg" />
        <link rel="apple-touch-icon" href="/KoraAnimated.svg" />
      </head>
      <body className={`${spaceGrotesk.className} gradient-bg text-white min-h-screen antialiased`} suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
