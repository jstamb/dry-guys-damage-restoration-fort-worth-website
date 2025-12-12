import React from 'react';
import SchemaMarkup from './SchemaMarkup';
// import { generateFAQSchema } from '@/lib/schema';

export type FAQ = {
  question: string;
  answer: string;
};

// MOCK IMPLEMENTATION: Assumes this lives in `@/lib/schema`
const generateFAQSchema = (faqs: FAQ[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

type FAQSchemaProps = {
  faqs: FAQ[];
};

/**
 * Renders FAQPage schema markup from a list of questions and answers.
 */
const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
  if (!faqs || faqs.length === 0) {
    return null;
  }
  const schema = generateFAQSchema(faqs);
  return <SchemaMarkup schema={schema} />;
};

export default FAQSchema;
