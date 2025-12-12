import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const businessInfo = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Dry Guys Damage Restoration Fort Worth',
  image: '', // URL to a logo
  '@id': '', // URL of the business website
  url: '', // URL of the business website
  telephone: '555-555-5555',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Main St',
    addressLocality: 'Fort Worth',
    addressRegion: 'TX',
    postalCode: '76102',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 32.7555,
    longitude: -97.3308,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  sameAs: [
    // Links to social media profiles
  ],
};

export const metadata: Metadata = {
  title: {
    template: '%s | Dry Guys Damage Restoration Fort Worth',
    default: 'Dry Guys Damage Restoration Fort Worth | 24/7 Emergency Service',
  },
  description: 'Dry Guys provides 24/7 emergency water and fire damage restoration services in Fort Worth, TX. Certified experts since 2015. Call now for a fast response!',
  metadataBase: new URL('https://www.yourfortworthrestoration.com'), // Replace with actual domain
};

const Header = () => (
  <header className="bg-white shadow-md sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center p-4">
      <Link href="/" className="text-2xl font-bold text-primary-600">Dry Guys Fort Worth</Link>
      <nav className="hidden md:flex space-x-6">
        <Link href="/" className="hover:text-primary-500">Home</Link>
        <Link href="/about" className="hover:text-primary-500">About</Link>
        <Link href="/services" className="hover:text-primary-500">Services</Link>
        <Link href="/reviews" className="hover:text-primary-500">Reviews</Link>
        <Link href="/contact" className="hover:text-primary-500">Contact</Link>
      </nav>
      <a href="tel:555-555-5555" className="btn btn-primary">Call (555) 555-5555</a>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white">
    <div className="container mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Dry Guys Fort Worth</h3>
        <p className="text-gray-400">Your trusted partner for water and fire damage restoration since 2015.</p>
        <a href="tel:555-555-5555" className="phone-link mt-4 block">555-555-5555</a>
      </div>
      <div>
        <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
        <ul className="space-y-2">
          <li><Link href="/about" className="hover:text-secondary-400">About Us</Link></li>
          <li><Link href="/services" className="hover:text-secondary-400">Our Services</Link></li>
          <li><Link href="/reviews" className="hover:text-secondary-400">Testimonials</Link></li>
          <li><Link href="/contact" className="hover:text-secondary-400">Contact Us</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-lg mb-4">Services</h4>
        <ul className="space-y-2">
          <li><Link href="/services" className="hover:text-secondary-400">Water Damage</Link></li>
          <li><Link href="/services" className="hover:text-secondary-400">Fire Damage</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-lg mb-4">Business Hours</h4>
        <p>24/7 Emergency Service</p>
      </div>
    </div>
    <div className="bg-gray-900 py-4">
      <div className="container mx-auto text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Dry Guys Damage Restoration Fort Worth. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default function RootLayout({
  children,
}: { 
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessInfo) }}
        />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-800`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}