import React from 'react';
import Link from 'next/link';
import { Droplets, Flame, Wind, Zap } from 'lucide-react';

// Assuming this type is defined in @/types
export interface Service {
  slug: string;
  name: string;
  description: string;
  icon: React.ElementType;
}

interface ServicesGridProps {
  services: Service[];
  compact?: boolean;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ services, compact = false }) => {
  return (
    <section className={compact ? "py-12" : "py-20 bg-white"}>
      <div className="container mx-auto px-4">
        {!compact && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Restoration Services</h2>
            <p className="mt-4 text-lg text-gray-600">We handle all types of property damage with expert care.</p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link href={`/services/${service.slug}`} key={service.slug} legacyBehavior>
              <a className="block bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <service.icon className="w-12 h-12 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="font-semibold text-primary group-hover:underline">Learn More &rarr;</span>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
