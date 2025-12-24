export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Slow Türkiye",
    description: "Thoughtful private journeys across Türkiye — designed for travellers who prefer ease and deep immersion.",
    url: "https://slowturkiye.com",
    email: "hello@slowturkiye.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Istanbul",
      addressCountry: "TR",
    },
    areaServed: {
      "@type": "Country",
      name: "Turkey",
    },
    image: "https://slowturkiye.com/og-image.jpg",
    priceRange: "€€€",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Türkiye Private Journeys",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "TouristTrip",
            name: "Cappadocia Discovery",
            description: "Fairy chimneys, cave hotels, and hot air balloons",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "TouristTrip",
            name: "Aegean Coast",
            description: "Ancient ruins and turquoise waters",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "TouristTrip",
            name: "Istanbul & Beyond",
            description: "Where East meets West",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
