import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  businessName: 'Dry Guys Damage Restoration Fort Worth',
  niche: 'other',
  nicheSlug: 'other',
  city: 'Fort Worth',
  citySlug: 'fort-worth',
  state: 'TX',
  phone: '555-555-5555',
  phoneFormatted: '555-555-5555',
  email: 'info@dry-guys-damage-restoration-fort-worth.com',

  address: {
    street: '',
    city: 'Fort Worth',
    state: 'TX',
    zip: '',
    full: ', Fort Worth, TX ',
  },

  coordinates: {
    lat: 0,
    lng: 0,
  },

  googleMapsEmbedUrl: '',
  googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  googlePlaceId: '',

  domain: 'dry-guys-damage-restoration-fort-worth.com',
  yearEstablished: 2015,
  licenseNumber: '',

  businessHours: {
    monday: { open: '07:00', close: '19:00' },
    tuesday: { open: '07:00', close: '19:00' },
    wednesday: { open: '07:00', close: '19:00' },
    thursday: { open: '07:00', close: '19:00' },
    friday: { open: '07:00', close: '19:00' },
    saturday: { open: '08:00', close: '17:00' },
    sunday: 'closed',
  },

  socialLinks: {
    facebook: '',
    instagram: '',
    yelp: '',
    googleBusiness: '',
  },

  branding: {
    primaryColor: '#2563eb',
    secondaryColor: '#f59e0b',
    logoUrl: '/images/logo.svg',
  },
};

export const getFullUrl = (path: string): string => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || `https://${siteConfig.domain}`;
  return `${baseUrl}${path}`;
};

export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  return `+1${cleaned}`;
};

export const getPhoneLink = (): string => {
  return `tel:${formatPhone(siteConfig.phone)}`;
};
