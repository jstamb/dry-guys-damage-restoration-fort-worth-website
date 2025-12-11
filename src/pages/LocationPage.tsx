import { useParams, Link } from 'react-router-dom'
import { Phone, MapPin, CheckCircle } from 'lucide-react'
import LeadForm from '../components/LeadForm'
import { BUSINESS, SERVICES, TARGET_CITIES, TRUST_BADGES } from '../constants'

export default function LocationPage() {
  const { slug } = useParams()

  const city = TARGET_CITIES.find(
    (c: any) => c.name.toLowerCase().replace(/\s+/g, '-') === slug
  )

  if (!city) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Location Not Found</h1>
        <Link to="/" className="text-primary hover:underline">Return Home</Link>
      </div>
    )
  }

  const nearbyAreas = TARGET_CITIES.filter((c: any) => c.name !== city.name).slice(0, 4)

  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-white/80 mb-4">
              <MapPin size={20} />
              {city.name}, {city.state}
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {BUSINESS.niche} in {city.name}
            </h1>

            <p className="text-xl text-white/90 mb-8">
              Looking for reliable {BUSINESS.niche.toLowerCase()} services in {city.name}?
              {BUSINESS.name} provides professional solutions throughout {city.name} and surrounding areas.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {TRUST_BADGES.slice(0, 3).map((badge) => (
                <span key={badge} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
                  <CheckCircle size={16} />
                  {badge}
                </span>
              ))}
            </div>

            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-bold rounded-lg text-lg"
            >
              <Phone size={24} />
              Call Now
            </a>
          </div>

          <LeadForm title={`Get a Free Quote in ${city.name}`} city={city.name} />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services in {city.name}</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((service: string) => (
              <div key={service} className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-gray-600">
                  Professional {service.toLowerCase()} services in {city.name} and nearby areas.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {nearbyAreas.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Also Serving Nearby Areas</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {nearbyAreas.map((area: any) => (
                <Link
                  key={area.name}
                  to={`/locations/${area.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-6 py-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  {area.name}, {area.state}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}