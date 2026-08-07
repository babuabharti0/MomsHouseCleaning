export default function SEO() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HouseCleaning"],
    "name": "Mom's House Cleaning",
    "telephone": "+1-210-380-8066",
    "founder": [
      {
        "@type": "Person",
        "name": "Glen Talley"
      },
      {
        "@type": "Person",
        "name": "Lisa Talley"
      }
    ],
    "foundingDate": "1999",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Antonio",
      "addressRegion": "TX",
      "addressCountry": "USA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.4241,
      "longitude": -98.4936
    },
    "priceRange": "$$",
    "paymentAccepted": "Credit Card, Zelle, Venmo, CashApp",
    "areaServed": [
      {
        "@type": "City",
        "name": "San Antonio"
      },
      {
        "@type": "Neighborhood",
        "name": "Stone Oak"
      },
      {
        "@type": "City",
        "name": "Alamo Heights"
      },
      {
        "@type": "Neighborhood",
        "name": "The Dominion"
      },
      {
        "@type": "City",
        "name": "Boerne"
      },
      {
        "@type": "City",
        "name": "Fair Oaks Ranch"
      },
      {
        "@type": "City",
        "name": "Helotes"
      },
      {
        "@type": "City",
        "name": "Bulverde"
      },
      {
        "@type": "PostalCode",
        "postalCode": "78258"
      },
      {
        "@type": "PostalCode",
        "postalCode": "78209"
      },
      {
        "@type": "PostalCode",
        "postalCode": "78006"
      },
      {
        "@type": "PostalCode",
        "postalCode": "78257"
      },
      {
        "@type": "PostalCode",
        "postalCode": "78228"
      }
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Cleaning"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Cleaning"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Maid Services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Move-Out Cleaning"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Airbnb Cleaning"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Green Cleaning"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
