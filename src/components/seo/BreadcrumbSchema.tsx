import React from 'react';
import SchemaMarkup from './SchemaMarkup';
// import { generateBreadcrumbSchema } from '@/lib/schema';

export type BreadcrumbItem = {
  name: string;
  url: string;
};

// MOCK IMPLEMENTATION: Assumes this lives in `@/lib/schema`
const generateBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

type BreadcrumbSchemaProps = {
  items: BreadcrumbItem[];
};

/**
 * Renders BreadcrumbList schema markup.
 */
const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  if (!items || items.length === 0) {
    return null;
  }
  const schema = generateBreadcrumbSchema(items);
  return <SchemaMarkup schema={schema} />;
};

export default BreadcrumbSchema;
