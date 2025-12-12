import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Water & Fire Damage Restoration Services in Fort Worth',
  description: 'Dry Guys offers expert water damage restoration and fire damage restoration services in Fort Worth, TX. 24/7 emergency response for homes and businesses.',
};

const services = [
  {
    title: 'Water Damage Restoration',
    description: 'Our comprehensive water damage service includes emergency water extraction, structural drying, dehumidification, and mold prevention. We handle everything from minor leaks to major floods, ensuring your property is returned to its pre-loss condition.',
    href: '/services/water-damage-restoration'
  },
  {
    title: 'Fire Damage Restoration',
    description: 'We provide complete fire and smoke damage cleanup services. This includes soot and smoke removal, deodorization, content cleaning, and full structural repairs. We work diligently to erase the evidence of a fire and make your property safe again.',
    href: '/services/fire-damage-restoration'
  }
];

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Our Restoration Services</h1>
          <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">We specialize in restoring properties affected by water and fire. Our certified team uses advanced techniques and equipment to deliver the best results for our Fort Worth clients.</p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div key={service.title} className="card flex flex-col">
              <h2 className="text-2xl font-bold mb-4 text-primary-700">{service.title}</h2>
              <p className="text-gray-700 flex-grow mb-6">{service.description}</p>
              <Link href="#" className="btn btn-primary mt-auto self-start">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}