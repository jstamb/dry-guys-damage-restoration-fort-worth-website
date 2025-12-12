import React from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import HeroForm from './HeroForm';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  showForm?: boolean;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  backgroundImage = '/images/hero-background.jpg',
  showForm = true
}) => {
  const businessPhone = "555-555-5555";

  return (
    <section className="relative bg-gray-800 text-white py-20 md:py-32 min-h-[70vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href={`tel:${businessPhone}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-lg text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg"
              >
                <Phone className="w-5 h-5 mr-3" />
                Call Now: {businessPhone}
              </a>
              <Link href="#quote-form" legacyBehavior>
                <a className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-gray-900 font-bold rounded-lg text-lg hover:bg-amber-600 transition-colors duration-300 shadow-lg">
                  Get a Free Quote
                </a>
              </Link>
            </div>
          </div>
          
          {showForm && (
            <div id="quote-form">
              <HeroForm />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
