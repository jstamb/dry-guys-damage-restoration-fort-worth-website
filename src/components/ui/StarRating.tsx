import * as React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  totalStars?: number;
  showCount?: boolean;
  className?: string;
  starClassName?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ 
  rating,
  totalStars = 5,
  showCount = false,
  className,
  starClassName
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

  const stars = React.useMemo(() => {
    return Array.from({ length: totalStars }, (_, i) => {
      if (i < fullStars) {
        return 'full';
      } else if (i === fullStars && hasHalfStar) {
        return 'half';
      } else {
        return 'empty';
      }
    });
  }, [rating, totalStars]);

  return (
    <div className={cn('flex items-center gap-2', className)} aria-label={`Rating: ${rating} out of ${totalStars} stars`}>
      <div className="flex items-center">
        {stars.map((type, index) => (
          <div key={index} className="relative">
            <Star
              className={cn('h-5 w-5 text-slate-300', starClassName)}
              strokeWidth={1.5}
            />
            <Star
              className={cn(
                'absolute top-0 left-0 h-5 w-5 text-amber-500',
                starClassName
              )}
              style={{ 
                clipPath: type === 'full' ? 'inset(0 0 0 0)' : type === 'half' ? 'inset(0 50% 0 0)' : 'inset(0 100% 0 0)' 
              }}
              fill="currentColor"
              strokeWidth={1.5}
            />
          </div>
        ))}
      </div>
      {showCount && <span className="text-sm text-muted-foreground">({rating.toFixed(1)})</span>}
    </div>
  );
};

StarRating.displayName = 'StarRating';

export { StarRating };
