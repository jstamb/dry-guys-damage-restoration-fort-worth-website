import React from 'react';
import SchemaMarkup from './SchemaMarkup';
// In a real application, this function would be imported from a library file
// import { generateLocalBusinessSchema } from '@/lib/schema';

// MOCK IMPLEMENTATION: Assumes this lives in `@/lib/schema`
const generateLocalBusinessSchema = (data: any) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": data.name,
  "image": data.image,
  "@id": data.url,
  "url": data.url,
  "telephone": data.telephone,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": data.address.streetAddress,
    "addressLocality": data.address.addressLocality,
    "addressRegion": data.address.addressRegion,
    "postalCode": data.address.postalCode,
    "addressCountry": data.address.addressCountry
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "sameAs": data.socialLinks
});

/**
 * Renders the LocalBusiness schema markup.
 * Data is typically hard-coded from a site configuration file.
 */
const LocalBusinessSchema: React.FC = () => {
  // This data would typically come from a configuration file or a CMS
  const siteConfig = {
    name: "Your Company Name",
    url: "https://www.yourcompany.com",
    logo: "https://www.yourcompany.com/logo.png",
    phone: "+15551234567",
    address: {
      streetAddress: "123 Main St",
      addressLocality: "Anytown",
      addressRegion: "CA",
      postalCode: "90210",
      addressCountry: "US",
    },
    socialLinks: [
      "https://www.facebook.com/yourcompany",
      "https://www.twitter.com/yourcompany"
    ]
  };

  const schema = generateLocalBusinessSchema(siteConfig);

  return <SchemaMarkup schema={schema} />;
};

export default LocalBusinessSchema;
