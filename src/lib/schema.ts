import { siteConfig } from './config';
import { Service, FAQ, Review } from '@/types';

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': determineBusinessType(siteConfig.niche),
    name: siteConfig.businessName,
    image: `https://${siteConfig.domain}/images/logo.svg`,
    url: `https://${siteConfig.domain}`,
    telephone: siteConfig.phone,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.coordinates.lat,
      longitude: siteConfig.coordinates.lng,
    },
    openingHoursSpecification: generateOpeningHours(),
    sameAs: Object.values(siteConfig.socialLinks).filter(Boolean),
    areaServed: {
      '@type': 'City',
      name: siteConfig.city,
    },
  };
}

export function generateServiceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.businessName,
    },
    areaServed: {
      '@type': 'City',
      name: siteConfig.city,
    },
    description: service.description,
  };
}

export function generateFAQSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateReviewSchema(reviews: Review[]) {
  const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.businessName,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: avgRating.toFixed(1),
      reviewCount: reviews.length,
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.slice(0, 10).map(review => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
      },
      author: {
        '@type': 'Person',
        name: review.author,
      },
      reviewBody: review.text,
      datePublished: review.date,
    })),
  };
}

function determineBusinessType(niche: string): string {
  const typeMap: { [key: string]: string } = {
    plumber: 'Plumber',
    plumbing: 'Plumber',
    electrician: 'Electrician',
    electrical: 'Electrician',
    hvac: 'HVACBusiness',
    roofer: 'RoofingContractor',
    roofing: 'RoofingContractor',
    landscaper: 'LandscapingBusiness',
    landscaping: 'LandscapingBusiness',
    painter: 'HousePainter',
    painting: 'HousePainter',
    cleaner: 'CleaningService',
    cleaning: 'CleaningService',
    'water damage': 'HomeAndConstructionBusiness',
    restoration: 'HomeAndConstructionBusiness',
    default: 'HomeAndConstructionBusiness',
  };

  const lowerNiche = niche.toLowerCase();
  return typeMap[lowerNiche] || typeMap.default;
}

function generateOpeningHours() {
  const hours = siteConfig.businessHours;
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  return days
    .filter(day => hours[day as keyof typeof hours] !== 'closed')
    .map(day => {
      const dayHours = hours[day as keyof typeof hours];
      if (dayHours === 'closed') return null;

      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: day.charAt(0).toUpperCase() + day.slice(1),
        opens: dayHours.open,
        closes: dayHours.close,
      };
    })
    .filter(Boolean);
}
