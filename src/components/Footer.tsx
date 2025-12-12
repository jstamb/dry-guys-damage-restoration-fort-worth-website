import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { BUSINESS, TARGET_CITIES } from '../constants'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">{BUSINESS.name}</h3>
          <p className="text-gray-400 mb-6">{BUSINESS.description}</p>
          <div className="space-y-3 text-gray-400">
            <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-3 hover:text-white">
              <Phone size={18} />
              {BUSINESS.phone}
            </a>
            <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 hover:text-white">
              <Mail size={18} />
              {BUSINESS.email}
            </a>
            <div className="flex items-center gap-3">
              <MapPin size={18} />
              {BUSINESS.address.city}, {BUSINESS.address.state}
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
          <ul className="space-y-2 text-gray-400">
            {TARGET_CITIES.slice(0, 6).map((city: any) => (
              <li key={city.name}>
                <Link
                  href={`/locations/${city.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-white"
                >
                  {city.name}, {city.state}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
