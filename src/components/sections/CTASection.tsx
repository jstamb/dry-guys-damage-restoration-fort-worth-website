import React from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ 
  title = "Need Emergency Restoration Services in Fort Worth?",
  subtitle = "We're available 24/7. Call us now for immediate assistance!"
}) => {
  const businessPhone = "555-555-5555";

  return (
    <section className="bg-secondary text-gray-900 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          {title}
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        <a 
          href={`tel:${businessPhone}`}
          className="inline-flex items-center justify-center px-10 py-5 bg-primary text-white font-bold rounded-lg text-xl hover:bg-blue-700 transition-colors duration-300 shadow-lg"
        >
          <Phone className="w-6 h-6 mr-3" />
          Call Now: {businessPhone}
        </a>
      </div>
    </section>
  );
};

export default CTASection;
