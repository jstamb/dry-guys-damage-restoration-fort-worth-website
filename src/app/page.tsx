import { Metadata } from 'next';
import Link from 'next/link';

export const generateMetadata = (): Metadata => {
  return {
    title: '#1 Damage Restoration in Fort Worth, TX | Dry Guys',
    description: 'Need fast, reliable water or fire damage restoration in Fort Worth? Dry Guys offers 24/7 emergency services. Certified and trusted since 2015. Call now for immediate help!',
  };
};

const Hero = () => (
  <section className="bg-primary-700 text-white py-20">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">24/7 Water & Fire Damage Restoration in Fort Worth</h1>
      <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">Fast, Professional, and Reliable. We restore your property and peace of mind.</p>
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md mx-auto">
        <h3 className="text-gray-800 text-2xl font-bold mb-4">Get a Free Estimate Now</h3>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="input w-full" />
          <input type="tel" placeholder="Phone" className="input w-full" />
          <textarea placeholder="Describe the damage..." className="input w-full h-24"></textarea>
          <button type="submit" className="btn btn-primary w-full">Request Help Now</button>
        </form>
        <p className="text-gray-600 mt-4">Or Call Us 24/7: <a href="tel:555-555-5555" className="phone-link">555-555-5555</a></p>
      </div>
    </div>
  </section>
);

const TrustBar = () => (
  <div className="bg-gray-100 py-4">
    <div className="container mx-auto flex justify-around items-center text-center text-sm text-gray-600">
      <span>✓ 24/7 Emergency Service</span>
      <span>✓ IICRC Certified</span>
      <span>✓ Locally Owned Since 2015</span>
      <span>✓ Direct Insurance Billing</span>
    </div>
  </div>
);

const ServicesGrid = () => (
  <section className="section">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Our Restoration Services</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card">
          <h3 className="text-2xl font-bold mb-2">Water Damage Restoration</h3>
          <p className="mb-4">From burst pipes to flooding, we handle water extraction, drying, and full property restoration quickly and efficiently.</p>
          <Link href="/services" className="text-primary-600 font-semibold hover:underline">Learn More &rarr;</Link>
        </div>
        <div className="card">
          <h3 className="text-2xl font-bold mb-2">Fire Damage Restoration</h3>
          <p className="mb-4">We provide comprehensive fire and smoke damage cleanup, soot removal, odor control, and structural repairs.</p>
          <Link href="/services" className="text-primary-600 font-semibold hover:underline">Learn More &rarr;</Link>
        </div>
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="section bg-white">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Why Fort Worth Trusts Dry Guys</h2>
        <p className="text-lg text-gray-600 mt-2">Your Local Damage Restoration Experts Since 2015</p>
      </div>
      <div className="max-w-4xl mx-auto text-gray-700 space-y-4 leading-relaxed">
        <p>When disaster strikes your Fort Worth property, you need a team that is not only skilled but also fast, reliable, and compassionate. At Dry Guys Damage Restoration Fort Worth, we have built our reputation since 2015 on being that team for our community. We understand the stress and uncertainty that comes with water or fire damage, and our primary goal is to restore not just your property, but also your peace of mind. Our approach is founded on a commitment to excellence and customer satisfaction, making us the premier choice for restoration services in the DFW area.</p>
        <p>Our technicians are the backbone of our company. Each member is IICRC certified, which means they are trained to the highest industry standards for property damage restoration. This isn't just a job for us; it's a craft that requires precision, advanced technology, and a deep understanding of building science. We invest in the latest equipment, from powerful water extractors and industrial-grade dehumidifiers to advanced thermal imaging cameras that detect hidden moisture. This allows us to work efficiently, minimizing secondary damage like mold growth and ensuring your property is dried completely and safely.</p>
        <p>What truly sets us apart is our local commitment. We are not a faceless national chain; we are your neighbors. We live and work in Fort Worth, and we care about the well-being of our community. This local focus means we can offer a truly rapid response, 24/7. When you call us, you're not getting a distant call center. You're getting a local expert ready to dispatch a team to your location immediately. We also simplify the process by working directly with all major insurance companies, handling the paperwork and communication so you can focus on your family or business. Choosing Dry Guys means choosing a dedicated partner who will be with you every step of the way, from initial assessment to the final touches of restoration.</p>
      </div>
    </div>
  </section>
);

const ReviewsSection = () => (
  <section className="section bg-primary-50">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="card text-left">...</div>
        <div className="card text-left">...</div>
        <div className="card text-left">...</div>
      </div>
      <Link href="/reviews" className="btn btn-secondary mt-12">Read More Reviews</Link>
    </div>
  </section>
);

const ServiceAreas = () => ( <div/> );
const MapSection = () => ( <div/> );

const FAQSection = () => {
  const faqs = [
    { q: 'Are you available 24/7?', a: 'Yes, we offer 24/7 emergency services for water and fire damage in Fort Worth. Call us anytime, day or night.' },
    { q: 'Do you work with insurance companies?', a: 'Absolutely. We have extensive experience working directly with all major insurance providers to streamline your claim process.' },
    { q: 'How quickly can you respond to an emergency?', a: 'As a local Fort Worth company, our goal is to be on-site within 60-90 minutes of your call.' },
    { q: 'What is water damage restoration?', a: 'It is the process of cleaning, drying, sanitizing, and repairing a property after it has been damaged by water from leaks, floods, or other events.' },
    { q: 'Can you handle smoke and soot removal?', a: 'Yes, our fire damage restoration service includes complete smoke, soot, and odor removal from all affected surfaces.' },
    { q: 'Is your team certified?', a: 'Yes, all of our lead technicians are IICRC (Institute of Inspection, Cleaning and Restoration Certification) certified, the industry gold standard.' },
    { q: 'How long does the restoration process take?', a: 'The timeline varies depending on the extent of the damage. We will provide a detailed scope and timeline after our initial assessment.' },
    { q: 'Can you prevent mold growth after water damage?', a: 'Yes, rapid and professional drying is key. We use specialized equipment and techniques to prevent mold growth.' },
  ];
  return (
    <section className="section">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg">{faq.q}</h3>
              <p className="text-gray-600 mt-2">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="bg-secondary-500 text-white py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Facing Water or Fire Damage in Fort Worth?</h2>
      <p className="text-lg mb-8">Don't wait. Call the experts at Dry Guys for a fast, professional response.</p>
      <a href="tel:555-555-5555" className="btn btn-primary text-xl">Call Now for 24/7 Emergency Service</a>
    </div>
  </section>
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WhyChooseUs />
      <ReviewsSection />
      {/* <ServiceAreas /> */}
      {/* <MapSection /> */}
      <FAQSection />
      <CTASection />
    </> 
  );
}