import React from 'react';
import SchemaMarkup from './SchemaMarkup';
// import { generateServiceSchema } from '@/lib/schema';

export type Service = {
  name: string;
  description: string;
  url: string;
  provider: {
    name: string;
    url: string;
  };
  areaServed?: string;
  serviceType?: string;
};

// MOCK IMPLEMENTATION: Assumes this lives in `@/lib/schema`
const generateServiceSchema = (service: Service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "url": service.url,
  "provider": {
    "@type": "LocalBusiness",
    "name": service.provider.name,
    "url": service.provider.url
  },
  ...(service.areaServed && { "areaServed": { "@type": "AdministrativeArea", "name": service.areaServed } }),
  ...(service.serviceType && { "serviceType": service.serviceType }),
});

type ServiceSchemaProps = {
  service: Service;
};

/**
 * Renders schema markup for a specific Service.
 */
const ServiceSchema: React.FC<ServiceSchemaProps> = ({ service }) => {
  const schema = generateServiceSchema(service);
  return <SchemaMarkup schema={schema} />;
};

export default ServiceSchema;
