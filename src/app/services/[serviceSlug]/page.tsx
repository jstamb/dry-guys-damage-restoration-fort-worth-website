import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// --- Data Imports ---
// Assumes the existence of these data files and types
// import { services, Service } from '@/data/services';
// import { neighborhoods } from '@/data/neighborhoods';

// --- Component Imports ---
// Assumes the existence of these components
// import { Hero } from '@/components/Hero';
// import { ProcessSteps } from '@/components/ProcessSteps';
// import { FAQSection } from '@/components/FAQSection';
// import { CTASection } from '@/components/CTASection';
// import { BreadcrumbSchema, ServiceSchema } from '@/components/Schema';

// Mock Data (replace with actual imports)
const services = [
  {
    slug: 'water-damage-restoration',
    name: 'Water Damage Restoration',
    shortDescription: '24/7 emergency water damage restoration services in Fort Worth. We handle everything from water extraction and drying to complete property restoration.',
    faqs: [
      { q: 'How quickly can you respond to a water damage emergency?', a: 'We offer 24/7 emergency services and aim to be on-site in Fort Worth within 60-90 minutes of your call.' },
      { q: 'Do you work with insurance companies?', a: 'Yes, we work with all major insurance carriers. We can help you document the damage and file your claim to streamline the process.' },
      { q: 'Is it possible to save my carpet and furniture?', a: 'The possibility of saving carpets and furniture depends on the type of water (clean, gray, or black) and the duration of exposure. Our technicians will assess the items and recommend the best course of action.' },
      { q: 'What is the difference between water mitigation and restoration?', a: 'Mitigation is the immediate action to prevent further damage, like stopping the water source and extracting standing water. Restoration involves repairing and rebuilding the affected areas to their pre-damage condition.' }
    ]
  },
  {
    slug: 'fire-damage-restoration',
    name: 'Fire Damage Restoration',
    shortDescription: 'Comprehensive fire and smoke damage restoration services in Fort Worth. We manage soot removal, structural repairs, and odor elimination.',
    faqs: [
      { q: 'What should I do immediately after a fire?', a: 'Your safety is the priority. Once it is safe to do so, call us immediately. Avoid touching any surfaces, as oils from your hands can cause further damage. Do not try to clean soot yourself.' },
      { q: 'Can the smell of smoke ever be fully removed?', a: 'Yes. We use advanced techniques like thermal fogging and ozone treatments to neutralize and permanently eliminate smoke odors from your property and belongings.' },
      { q: 'Is my home structurally safe after a fire?', a: 'Our team includes structural experts who will assess the integrity of your property. We will identify any compromised structures and manage all necessary repairs or rebuilding.' },
      { q: 'How long does fire damage restoration take?', a: 'The timeline varies significantly based on the extent of the fire, smoke, and water damage (from firefighting efforts). We will provide a detailed project timeline after our initial assessment.' }
    ]
  }
];

const neighborhoods = [
    { slug: 'downtown', name: 'Downtown' },
    { slug: 'northside', name: 'Northside' },
    { slug: 'southside', name: 'Southside' },
    { slug: 'east-side', name: 'East Side' },
    { slug: 'west-side', name: 'West Side' }
];

// --- Static Generation ---
export async function generateStaticParams() {
  return services.map((service) => ({
    serviceSlug: service.slug,
  }));
}

// --- Metadata Generation ---
export async function generateMetadata({ params }: { params: { serviceSlug: string } }): Promise<Metadata> {
  const service = services.find(s => s.slug === params.serviceSlug);

  if (!service) {
    return {};
  }

  const title = `${service.name} in Fort Worth, TX | Dry Guys`;
  const description = `Expert ${service.name} services in Fort Worth. ${service.shortDescription} Contact Dry Guys Damage Restoration for immediate assistance.`;
  const url = `https://www.dryguysfortworth.com/services/${service.slug}`;

  return {
    title,
    description,
    keywords: [service.name, 'damage restoration', 'Fort Worth', 'emergency services', 'Dry Guys'],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Dry Guys Damage Restoration Fort Worth',
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: `/images/og-${service.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

// --- Page Component ---
export default function ServicePage({ params }: { params: { serviceSlug: string } }) {
  const service = services.find(s => s.slug === params.serviceSlug);

  if (!service) {
    notFound();
  }

  const otherService = services.find(s => s.slug !== params.serviceSlug);

  return (
    <article>
      {/* <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: service.name }]} /> */}
      {/* <ServiceSchema service={service} /> */}

      <header className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">{service.name} in Fort Worth</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Your trusted local experts for rapid response and complete property recovery.</p>
        </div>
      </header>

      <main className="py-16 bg-white">
        <div className="container mx-auto px-4 space-y-12">
          
          <section id="introduction">
            <h2 className="text-3xl font-bold mb-4">Comprehensive {service.name}</h2>
            <div className="prose lg:prose-xl max-w-none">
              <p>When disaster strikes your Fort Worth property, whether from a burst pipe, a severe storm, or the aftermath of a fire, the disruption to your life can be overwhelming. At Dry Guys Damage Restoration Fort Worth, we specialize in providing professional, compassionate, and efficient {service.name}. Our mission is to restore not just your property, but also your peace of mind. With a team of IICRC-certified technicians, state-of-the-art equipment, and a commitment to excellence, we are the first call you should make when facing property damage.</p>
              <p>Understanding the local landscape of Fort Worth gives us a unique advantage. We know the common architectural styles, the weather patterns that contribute to damage, and the specific challenges homeowners and businesses face in our community. This local expertise allows us to provide a more tailored and effective restoration service. We are not just a faceless corporation; we are your neighbors, dedicated to helping our community rebuild and recover, one property at a time. From the initial damage assessment to the final touches of reconstruction, our comprehensive approach ensures no detail is overlooked.</p>
            </div>
          </section>

          <section id="whats-included">
            <h2 className="text-3xl font-bold mb-4">What Our {service.name} Service Includes</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="prose max-w-none">
                <h3>24/7 Emergency Response</h3>
                <p>Damage doesn't wait for business hours. Our team is on call 24 hours a day, 7 days a week, including holidays, to respond to your emergency. A rapid response is critical to minimizing secondary damage like mold growth or structural weakening.</p>
                <h3>Detailed Damage Assessment</h3>
                <p>Upon arrival, our certified project manager conducts a thorough inspection to assess the full extent of the damage. We use advanced tools like moisture meters and thermal imaging cameras to identify hidden damage, ensuring a complete and accurate restoration plan.</p>
              </div>
              <div className="prose max-w-none">
                <h3>Insurance Claim Assistance</h3>
                <p>Navigating insurance claims can be complex and stressful. We assist you every step of the way, providing detailed documentation, photos, and direct communication with your insurance adjuster to ensure your claim is processed smoothly and you receive fair coverage.</p>
                <h3>Complete Restoration & Reconstruction</h3>
                <p>Our services go beyond just cleanup. We are a full-service restoration company, meaning we can handle any necessary reconstruction, from replacing drywall and flooring to complete structural repairs, returning your property to its pre-loss condition.</p>
              </div>
            </div>
          </section>

          {/* <ProcessSteps serviceSlug={service.slug} /> */}
          <section id="process">
             <h2 className="text-3xl font-bold mb-6 text-center">Our Proven Restoration Process</h2>
             <p className="text-center max-w-3xl mx-auto mb-8">We follow a systematic, industry-approved process to ensure your property is restored efficiently and effectively.</p>
             {/* Placeholder for a visual steps component */}
             <div className="flex flex-col md:flex-row justify-center gap-4 text-center">
                <div className="border p-4 rounded-lg flex-1"><strong>Step 1:</strong> Emergency Contact</div>
                <div className="border p-4 rounded-lg flex-1"><strong>Step 2:</strong> Inspection & Assessment</div>
                <div className="border p-4 rounded-lg flex-1"><strong>Step 3:</strong> Mitigation & Cleanup</div>
                <div className="border p-4 rounded-lg flex-1"><strong>Step 4:</strong> Drying & Dehumidification</div>
                <div className="border p-4 rounded-lg flex-1"><strong>Step 5:</strong> Restoration & Repair</div>
             </div>
          </section>

          <section id="benefits">
            <h2 className="text-3xl font-bold mb-4">Why Choose Dry Guys for {service.name}?</h2>
            <div className="prose lg:prose-xl max-w-none">
              <p>Choosing the right restoration company is the most important decision you'll make after a disaster. At Dry Guys, we stand apart through our commitment to quality, communication, and customer satisfaction.</p>
              <ul>
                <li><strong>IICRC Certified Technicians:</strong> Our team is trained to the highest industry standards, ensuring that every job is performed with technical expertise and a focus on safety.</li>
                <li><strong>Advanced Technology:</strong> We invest in the latest restoration technology, including industrial-grade air movers, dehumidifiers, air scrubbers, and specialized cleaning agents. This allows us to work faster and achieve better results.</li>
                <li><strong>Customer-Centric Approach:</strong> We understand this is a stressful time for you. Our team communicates clearly and compassionately, keeping you informed throughout the entire process. Your satisfaction is our top priority.</li>
                <li><strong>Local Fort Worth Experts:</strong> We are proud to be a local business. We are deeply familiar with Fort Worth's neighborhoods, building codes, and common property issues, which enables us to provide a superior level of service.</li>
              </ul>
            </div>
          </section>

          <section id="service-areas">
            <h2 className="text-3xl font-bold mb-4">Serving All Neighborhoods in Fort Worth</h2>
            <p className="mb-6">We provide prompt and reliable {service.name} to homes and businesses across Fort Worth. Whether you're in a historic home or a modern commercial building, our team has the expertise to handle the job. We proudly serve:</p>
            <div className="flex flex-wrap gap-4">
              {neighborhoods.map(n => (
                <Link key={n.slug} href={`/locations/${n.slug}`} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  {n.name}
                </Link>
              ))}
            </div>
          </section>

          {/* <FAQSection faqs={service.faqs} /> */}
          <section id="faq">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {service.faqs.map((faq, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-semibold text-lg">{faq.q}</h3>
                    <p className="mt-2 text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {otherService && (
            <section id="related-services">
              <h2 className="text-3xl font-bold mb-4">Related Services</h2>
              <p>In addition to {service.name}, we also specialize in other forms of property restoration. Many incidents, such as fires, can also involve significant water damage from firefighting efforts. Our team is equipped to handle complex, multi-faceted restoration projects.</p>
              <div className="mt-4">
                <Link href={`/services/${otherService.slug}`} className="text-blue-600 font-semibold hover:underline">
                  Learn more about our {otherService.name} services &rarr;
                </Link>
              </div>
            </section>
          )}
        </div>
      </main>

      {/* <CTASection /> */}
       <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Immediate Help?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">Don't wait. The faster you act, the more damage we can prevent. Contact Dry Guys Damage Restoration Fort Worth now for a rapid response.</p>
          <a href="tel:123-456-7890" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-colors">Call Us 24/7: (123) 456-7890</a>
        </div>
      </section>
    </article>
  );
}