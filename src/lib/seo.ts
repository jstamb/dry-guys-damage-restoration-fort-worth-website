import { Metadata } from 'next';
import { siteConfig, getFullUrl } from './config';

interface GenerateMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  images?: { url: string; alt: string }[];
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description,
  path,
  keywords = [],
  images = [],
  noIndex = false,
}: GenerateMetadataOptions): Metadata {
  const url = getFullUrl(path);
  const fullTitle = `${title} | ${siteConfig.businessName}`;

  const defaultImage = {
    url: getFullUrl('/images/og-image.jpg'),
    width: 1200,
    height: 630,
    alt: siteConfig.businessName,
  };

  return {
    title: fullTitle,
    description,
    keywords: [...keywords, siteConfig.niche, siteConfig.city, siteConfig.state],
    authors: [{ name: siteConfig.businessName }],

    metadataBase: new URL(getFullUrl('/')),

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.businessName,
      images: images.length > 0
        ? images.map(img => ({ ...img, width: 1200, height: 630 }))
        : [defaultImage],
      locale: 'en_US',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: images.length > 0 ? images.map(img => img.url) : [defaultImage.url],
    },

    robots: noIndex ? {
      index: false,
      follow: true,
    } : {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    other: {
      'geo.region': `US-${siteConfig.state}`,
      'geo.placename': siteConfig.city,
      'geo.position': `${siteConfig.coordinates.lat};${siteConfig.coordinates.lng}`,
      'ICBM': `${siteConfig.coordinates.lat}, ${siteConfig.coordinates.lng}`,
    },
  };
}

export function generateTitle(
  primaryKeyword: string,
  includeCity: boolean = true,
  suffix?: string
): string {
  const parts = [primaryKeyword];

  if (includeCity) {
    parts.push(`${siteConfig.city}, ${siteConfig.state}`);
  }

  if (suffix) {
    parts.push(suffix);
  }

  return parts.join(' | ');
}

export function generateDescription(
  primaryKeyword: string,
  uniqueValue: string,
  cta: string = 'Call for a free estimate!'
): string {
  const desc = `${primaryKeyword} in ${siteConfig.city}, ${siteConfig.state}. ${uniqueValue} ${cta}`;
  return desc.length > 160 ? desc.slice(0, 157) + '...' : desc;
}
