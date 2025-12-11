import { Link } from 'react-router-dom'
import { Phone, CheckCircle, Star, Shield, Clock } from 'lucide-react'
import LeadForm from '../components/LeadForm'
import { BUSINESS, SERVICES, TARGET_CITIES, TRUST_BADGES } from '../constants'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Your Trusted {BUSINESS.niche} Professionals in {BUSINESS.address.city}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {BUSINESS.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {TRUST_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm"
                >
                  <CheckCircle size={16} />
                  {badge}
                </span>
              ))}
            </div>

            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-bold rounded-lg text-lg hover:bg-accent/90 transition-colors shadow-lg"
            >
              <Phone size={24} />
              Call {BUSINESS.phone}
            </a>
          </div>

          <div className="lg:pl-8">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We offer comprehensive {BUSINESS.niche.toLowerCase()} services for residential and commercial properties.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service: string) => (
              <div
                key={service}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{service}</h3>
                <p className="text-gray-600">
                  Professional {service.toLowerCase()} services with guaranteed satisfaction.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose {BUSINESS.name}?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{BUSINESS.yearsInBusiness}+ Years Experience</h3>
              <p className="text-gray-600">Trusted by thousands of customers in {BUSINESS.address.city}.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed, bonded, and insured for your protection.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Emergency services available around the clock.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Service Areas</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TARGET_CITIES.map((city: any) => (
              <Link
                key={city.name}
                to={`/locations/${city.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="p-4 bg-white rounded-lg text-center hover:bg-primary hover:text-white transition-colors shadow-sm"
              >
                {city.name}, {city.state}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for a free estimate. No obligation, no pressure.
          </p>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-bold rounded-lg text-lg hover:bg-accent/90 transition-colors"
          >
            <Phone size={24} />
            Call Now: {BUSINESS.phone}
          </a>
        </div>
      </section>
    </>
  )
}