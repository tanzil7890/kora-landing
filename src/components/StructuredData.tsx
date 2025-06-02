export default function StructuredData() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Outhad AI",
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
      "name": "Outhad AI",
      "url": "https://outhad.com",
      "logo": "https://outhad.com/logo.svg",
      "sameAs": [
        "https://twitter.com/outhadai",
        "https://linkedin.com/company/outhadai"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "sales@outhad.com",
        "availableLanguage": ["English"]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Outhad AI",
      "url": "https://outhad.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://outhad.com/search?q={search_term_string}",
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