import React from 'react';
import SchemaMarkup from './SchemaMarkup';
// import { generateReviewSchema } from '@/lib/schema';

export type Review = {
  author: {
    name: string;
  };
  datePublished: string; // ISO 8601 format e.g., "2023-10-26"
  reviewBody: string;
  reviewRating: {
    ratingValue: number; // e.g., 5
    bestRating?: number;  // e.g., 5
    worstRating?: number; // e.g., 1
  };
  itemReviewed: {
    name: string;
    url?: string;
    image?: string;
  };
};

// MOCK IMPLEMENTATION: Assumes this lives in `@/lib/schema`
const generateReviewSchema = (reviews: Review[]) => ({
  "@context": "https://schema.org",
  // Use @graph to represent multiple top-level entities
  "@graph": reviews.map(review => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author.name
    },
    "datePublished": review.datePublished,
    "reviewBody": review.reviewBody,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.reviewRating.ratingValue,
      "bestRating": review.reviewRating.bestRating || 5,
      "worstRating": review.reviewRating.worstRating || 1
    },
    "itemReviewed": {
      "@type": "Thing", // Can be more specific like Product, LocalBusiness, etc.
      "name": review.itemReviewed.name,
      ...(review.itemReviewed.url && { "url": review.itemReviewed.url }),
      ...(review.itemReviewed.image && { "image": review.itemReviewed.image }),
    }
  }))
});

type ReviewSchemaProps = {
  reviews: Review[];
};

/**
 * Renders one or more Review schemas.
 */
const ReviewSchema: React.FC<ReviewSchemaProps> = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return null;
  }
  const schema = generateReviewSchema(reviews);
  return <SchemaMarkup schema={schema} />;
};

export default ReviewSchema;
