import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { services } from '@/data/services';
import { neighborhoods } from '@/data/neighborhoods';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About & Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">Dry Guys Fort Worth</h3>
            <p className="mt-4 text-sm">
              Your trusted partner for water and fire damage restoration in the Fort Worth area.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <p><strong>Phone:</strong> <a href={`tel:${siteConfig.phone}`} className="hover:text-secondary-500">{siteConfig.phone}</a></p>
              <p><strong>Email:</strong> <a href={`mailto:${siteConfig.email}`} className="hover:text-secondary-500">{siteConfig.email}</a></p>
              <p><strong>Address:</strong> {siteConfig.address}</p>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="mt-4 space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-sm hover:text-secondary-500 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h3 className="text-lg font-semibold text-white">Service Areas</h3>
            <ul className="mt-4 space-y-2">
              {neighborhoods.map((area) => (
                <li key={area.name}>
                  <Link href={area.href} className="text-sm hover:text-secondary-500 transition-colors">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Business Info */}
          <div>
            <h3 className="text-lg font-semibold text-white">Business Hours</h3>
            <div className="mt-4 space-y-2 text-sm">
                <p>24/7 Emergency Services</p>
                <p>Mon-Fri: 8:00 AM - 5:00 PM</p>
                <p>Sat-Sun: By Appointment</p>
            </div>
            <div className="mt-6">
                <h4 className="text-md font-semibold text-white">License Info</h4>
                <p className="text-sm mt-2">Licensed & Insured</p>
                <p className="text-sm">TDLR #12345</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} {siteConfig.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
