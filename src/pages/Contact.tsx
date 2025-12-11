import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import LeadForm from '../components/LeadForm'
import { BUSINESS } from '../constants'

export default function Contact() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Get in touch for a free estimate
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Get In Touch</h2>

            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">{BUSINESS.phone}</p>
              </div>
            </a>

            <a
              href={`mailto:${BUSINESS.email}`}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600">{BUSINESS.email}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-gray-600">{BUSINESS.address.city}, {BUSINESS.address.state}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Clock className="text-primary" size={24} />
              </div>
              <div>
                <p className="font-semibold">Hours</p>
                <p className="text-gray-600">24/7 Emergency Service Available</p>
              </div>
            </div>
          </div>

          <LeadForm title="Send Us a Message" />
        </div>
      </div>
    </section>
  )
}