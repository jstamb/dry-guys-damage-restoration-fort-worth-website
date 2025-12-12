// ============================================
// Site Configuration Types
// ============================================

export interface SiteConfig {
  businessName: string;
  niche: string;
  nicheSlug: string;
  city: string;
  citySlug: string;
  state: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  address: Address;
  coordinates: Coordinates;
  googleMapsEmbedUrl: string;
  googleMapsApiKey?: string;
  googlePlaceId?: string;
  domain: string;
  yearEstablished: number;
  licenseNumber?: string;
  businessHours: BusinessHours;
  socialLinks: SocialLinks;
  branding: Branding;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  full: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface BusinessHours {
  monday: DayHours;
  tuesday: DayHours;
  wednesday: DayHours;
  thursday: DayHours;
  friday: DayHours;
  saturday: DayHours;
  sunday: DayHours;
}

export type DayHours = { open: string; close: string } | 'closed';

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
  yelp?: string;
  googleBusiness?: string;
}

export interface Branding {
  primaryColor: string;
  secondaryColor: string;
  logoUrl?: string;
}

// ============================================
// Service Types
// ============================================

export interface Service {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  process: ProcessStep[];
  faqs: FAQ[];
  relatedServices: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon?: string;
}

// ============================================
// Location Types
// ============================================

export interface Neighborhood {
  id: string;
  name: string;
  slug: string;
  city: string;
  description: string;
  coordinates: Coordinates;
  zipCodes: string[];
  nearbyNeighborhoods: string[];
  landmarks?: string[];
  metaTitle: string;
  metaDescription: string;
}

// ============================================
// Content Types
// ============================================

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  source: 'google' | 'yelp' | 'facebook' | 'direct';
  serviceType?: string;
  neighborhood?: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: Author;
  publishedAt: string;
  updatedAt: string;
  featuredImage: string;
  category: string;
  tags: string[];
  relatedServices: string[];
  relatedPosts: string[];
  metaTitle: string;
  metaDescription: string;
  readingTime: number;
}

export interface Author {
  name: string;
  title: string;
  bio: string;
  image?: string;
}

// ============================================
// Form Types
// ============================================

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  preferredContact: 'phone' | 'email';
  preferredTime?: string;
}

export interface QuoteFormData extends ContactFormData {
  address: string;
  projectTimeline: string;
  budget?: string;
}

// ============================================
// SEO Types
// ============================================

export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  openGraph: OpenGraphMeta;
  keywords?: string[];
  robots?: string;
}

export interface OpenGraphMeta {
  title: string;
  description: string;
  url: string;
  siteName: string;
  images: OGImage[];
  locale: string;
  type: string;
}

export interface OGImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

// ============================================
// Schema Types
// ============================================

export interface LocalBusinessSchema {
  '@context': 'https://schema.org';
  '@type': string;
  name: string;
  image: string;
  url: string;
  telephone: string;
  priceRange: string;
  address: PostalAddressSchema;
  geo: GeoSchema;
  openingHoursSpecification: OpeningHoursSchema[];
  sameAs: string[];
  areaServed: AreaServedSchema;
}

export interface PostalAddressSchema {
  '@type': 'PostalAddress';
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export interface GeoSchema {
  '@type': 'GeoCoordinates';
  latitude: number;
  longitude: number;
}

export interface OpeningHoursSchema {
  '@type': 'OpeningHoursSpecification';
  dayOfWeek: string | string[];
  opens: string;
  closes: string;
}

export interface AreaServedSchema {
  '@type': 'City' | 'State';
  name: string;
}
