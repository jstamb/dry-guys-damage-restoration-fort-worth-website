import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface MapSectionProps {
  title?: string;
  coordinates?: { lat: number; lng: number };
}

const MapSection: React.FC<MapSectionProps> = ({ 
  title = "Our Fort Worth Service Hub",
  coordinates = { lat: 32.7555, lng: -97.3308 }
}) => {
  const businessName = "Dry Guys Damage Restoration Fort Worth";
  const businessAddress = "123 Main St, Fort Worth, TX 76102";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessAddress)}`;
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Fort+Worth+TX+USA`; // Replace YOUR_API_KEY

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{title}</h2>
            <div className="flex items-start mb-4">
              <MapPin className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl">{businessName}</h3>
                <p className="text-gray-600">{businessAddress}</p>
              </div>
            </div>
            <a 
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary font-semibold hover:underline"
            >
              <Navigation className="w-5 h-5 mr-2" />
              Get Directions
            </a>
          </div>
          <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Fort Worth"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
