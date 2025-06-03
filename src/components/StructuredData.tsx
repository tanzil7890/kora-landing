export default function StructuredData() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Kora AI",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "description": "Transform your online store with context-aware search, personalized shopping agents, and data-driven insights to boost conversions and customer satisfaction.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "priceValidUntil": "2025-12-31"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "150",
        "bestRating": "5",
        "worstRating": "1"
      },
      "featureList": [
        "Context-Aware Search",
        "Personalized Shopping Agents",
        "Data-Driven Insights",
        "Real-time Analytics",
        "AI-Powered Recommendations"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Kora AI",
      "url": "https://Kora.com",
      "logo": "https://Kora.com/logo.svg",
      "sameAs": [
        "https://twitter.com/Koraai",
        "https://linkedin.com/company/Koraai"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "sales@Kora.com",
        "availableLanguage": ["English"]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Kora AI",
      "url": "https://Kora.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://Kora.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 