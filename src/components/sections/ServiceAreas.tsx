import React from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

// Assuming this type is defined in @/types
export interface Neighborhood {
  name: string;
  slug: string;
}

interface ServiceAreasProps {
  neighborhoods: Neighborhood[];
}

const ServiceAreas: React.FC<ServiceAreasProps> = ({ neighborhoods }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Serving All of Fort Worth and Beyond</h2>
          <p className="mt-4 text-lg text-gray-600">We're proud to serve communities throughout the Fort Worth area.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {neighborhoods.map((area) => (
            <Link href={`/service-areas/${area.slug}`} key={area.slug} legacyBehavior>
              <a className="flex items-center p-3 bg-white rounded-md shadow-sm hover:bg-primary hover:text-white transition-colors duration-200 group">
                <MapPin className="w-5 h-5 mr-3 text-primary group-hover:text-white transition-colors duration-200" />
                <span className="font-medium">{area.name}</span>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
