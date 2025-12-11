import { useParams, Link } from 'react-router-dom'
import { Phone, CheckCircle } from 'lucide-react'
import LeadForm from '../components/LeadForm'
import { BUSINESS, SERVICES, TRUST_BADGES } from '../constants'

export default function ServicePage() {
  const { slug } = useParams()

  const serviceName = SERVICES.find(
    (s: string) => s.toLowerCase().replace(/\s+/g, '-') === slug
  )

  if (!serviceName) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
        <Link to="/" className="text-primary hover:underline">Return Home</Link>
      </div>
    )
  }

  const otherServices = SERVICES.filter((s: string) => s !== serviceName).slice(0, 4)

  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {serviceName} Services
            </h1>

            <p className="text-xl text-white/90 mb-8">
              Professional {serviceName.toLowerCase()} services by {BUSINESS.name}.
              Serving {BUSINESS.address.city} and surrounding areas with quality workmanship.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {TRUST_BADGES.map((badge) => (
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
              Get a Quote
            </a>
          </div>

          <LeadForm title={`Request ${serviceName} Service`} />
        </div>
      </section>

      {otherServices.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Our Other Services</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {otherServices.map((service: string) => (
                <Link
                  key={service}
                  to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                  className="p-4 bg-white rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}