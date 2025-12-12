import React from 'react';
import { Star, StarHalf } from 'lucide-react';

// Assuming this type is defined in @/types
export interface Review {
  id: number;
  author: string;
  date: string;
  source: 'Google' | 'Yelp' | 'Facebook';
  rating: number;
  content: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
  title?: string;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center text-secondary">
      {[...Array(fullStars)].map((_, i) => <Star key={`full-${i}`} fill="currentColor" className="w-5 h-5" />)}
      {halfStar && <StarHalf key="half" fill="currentColor" className="w-5 h-5" />}
      {[...Array(emptyStars)].map((_, i) => <Star key={`empty-${i}`} className="w-5 h-5" />)}
    </div>
  );
};

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ 
  reviews,
  title = "What Our Fort Worth Clients Say"
}) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
          <div className="flex justify-center items-center mt-4">
            <span className="font-bold text-xl mr-2">4.9/5</span>
            <div className="flex text-secondary">
              <Star fill="currentColor" className="w-6 h-6" />
              <Star fill="currentColor" className="w-6 h-6" />
              <Star fill="currentColor" className="w-6 h-6" />
              <Star fill="currentColor" className="w-6 h-6" />
              <StarHalf fill="currentColor" className="w-6 h-6" />
            </div>
            <span className="ml-2 text-gray-600">based on 150+ reviews</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <StarRating rating={review.rating} />
                <span className="text-sm font-semibold text-gray-500">{review.source}</span>
              </div>
              <p className="text-gray-600 italic mb-4 flex-grow">"{review.content}"</p>
              <div>
                <p className="font-bold text-gray-800">{review.author}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
