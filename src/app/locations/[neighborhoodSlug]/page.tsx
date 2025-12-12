import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// --- Data Imports ---
// Assumes the existence of these data files and types
// import { services } from '@/data/services';
// import { neighborhoods, Neighborhood } from '@/data/neighborhoods';

// --- Component Imports ---
// Assumes the existence of these components
// import { Hero } from '@/components/Hero';
// import { MapSection } from '@/components/MapSection';
// import { FAQSection } from '@/components/FAQSection';
// import { CTASection } from '@/components/CTASection';

// Mock Data (replace with actual imports)
const services = [
  { slug: 'water-damage-restoration', name: 'Water Damage Restoration' },
  { slug: 'fire-damage-restoration', name: 'Fire Damage Restoration' }
];

const neighborhoods = [
    { slug: 'downtown', name: 'Downtown', lat: 32.7555, lon: -97.3308, about: 'Downtown Fort Worth presents unique challenges with its mix of historic high-rises and modern commercial spaces. We are experienced in handling large-scale water and fire damage in complex commercial environments, ensuring minimal business interruption.' },
    { slug: 'northside', name: 'Northside', lat: 32.7788, lon: -97.3496, about: 'The historic homes in Northside require a delicate touch. Our team is skilled in restoring older properties, preserving their unique character while using modern techniques to mitigate damage from issues like old plumbing or electrical systems.' },
    { slug: 'southside', name: 'Southside', lat: 32.7254, lon: -97.3408, about: 'Southside\'s vibrant mix of residential and commercial properties means we\'re ready for anything. From restaurant kitchen fires to basement flooding in historic homes, we have the expertise to serve this diverse and dynamic community.' },
    { slug: 'east-side', name: 'East Side', lat: 32.7543, lon: -97.2708, about: 'In the residential communities of the East Side, we often deal with storm-related damage and appliance failures. We understand the importance of getting families back into their homes quickly and safely.' },
    { slug: 'west-side', name: 'West Side', lat: 32.7480, lon: -97.3970, about: 'Properties in the West Side range from sprawling estates to modern family homes. We are equipped to handle large-loss scenarios and are familiar with the construction materials common to this affluent area, ensuring a high-quality restoration.' }
];

const locationFaqs = [
    { q: 'How fast can you get to my property in [Neighborhood]?', a: 'Our central Fort Worth location allows us to reach any neighborhood, including [Neighborhood], typically within 60-90 minutes of your call, ensuring a rapid response to your emergency.' },
    { q: 'Are your services more expensive in certain neighborhoods?', a: 'No, our pricing is based on the scope of the work required, not the location of your property. We provide transparent, upfront estimates for all our clients in Fort Worth.' },
    { q: 'Do you have experience with the types of homes in [Neighborhood]?', a: 'Absolutely. Our team has extensive experience working on a wide variety of properties throughout Fort Worth, from historic homes to modern constructions. We tailor our approach to the specific needs of your property.' }
];

// --- Static Generation ---
export async function generateStaticParams() {
  return neighborhoods.map((n) => ({
    neighborhoodSlug: n.slug,
  }));
}

// --- Metadata Generation ---
export async function generateMetadata({ params }: { params: { neighborhoodSlug: string } }): Promise<Metadata> {
  const neighborhood = neighborhoods.find(n => n.slug === params.neighborhoodSlug);

  if (!neighborhood) {
    return {};
  }

  const title = `Damage Restoration in ${neighborhood.name}, Fort Worth | Dry Guys`;
  const description = `Your local experts for water and fire damage restoration in the ${neighborhood.name} neighborhood. Dry Guys provides 24/7 emergency service to all of Fort Worth.`;
  const url = `https://www.dryguysfortworth.com/locations/${neighborhood.slug}`;

  return {
    title,
    description,
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
          url: `/images/og-location-${neighborhood.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

// --- Page Component ---
export default function NeighborhoodPage({ params }: { params: { neighborhoodSlug: string } }) {
  const neighborhood = neighborhoods.find(n => n.slug === params.neighborhoodSlug);

  if (!neighborhood) {
    notFound();
  }

  const otherNeighborhoods = neighborhoods.filter(n => n.slug !== params.neighborhoodSlug);

  return (
    <article>
      <header className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Damage Restoration Services in {neighborhood.name}, Fort Worth</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Dry Guys: Your Neighbors in Restoration, Providing Fast, Reliable Service to the {neighborhood.name} Community.</p>
        </div>
      </header>

      <main className="py-16 bg-white">
        <div className="container mx-auto px-4 space-y-12">

          <section id="about-neighborhood">
            <h2 className="text-3xl font-bold mb-4">Your Local Experts in {neighborhood.name}</h2>
            <div className="prose lg:prose-xl max-w-none">
              <p>{neighborhood.about}</p>
              <p>At Dry Guys Damage Restoration, we are proud to be a part of the Fort Worth community, and we have a deep understanding of the unique needs of property owners in the {neighborhood.name} area. Our local presence means we're not just a service provider; we're your neighbors. When you call us, you're getting a team that is already familiar with the local infrastructure, building codes, and environmental factors that can affect your property. This intimate knowledge allows us to respond faster, diagnose problems more accurately, and implement solutions that are perfectly suited to your home or business in {neighborhood.name}.</p>
            </div>
          </section>

          <section id="services-available">
            <h2 className="text-3xl font-bold mb-4">Our Services in {neighborhood.name}</h2>
            <p className="mb-6">We offer our full suite of professional restoration services to residents and business owners in {neighborhood.name}. No matter the scale of the disaster, we have the team and equipment to handle it.</p>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map(service => (
                <div key={service.slug} className="border p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">Complete recovery services for {service.name.toLowerCase()}.</p>
                  <Link href={`/services/${service.slug}`} className="text-blue-600 font-semibold hover:underline">
                    Learn More &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section id="local-expertise">
            <h2 className="text-3xl font-bold mb-4">Why a Local Team Matters</h2>
             <div className="prose lg:prose-xl max-w-none">
              <p>When you're facing property damage, you need more than just a company with the right equipment; you need a team that understands your immediate environment. Our local expertise in {neighborhood.name} provides tangible benefits:</p>
              <ul>
                <li><strong>Faster Response Times:</strong> Being based in Fort Worth means we can navigate the city efficiently, avoiding traffic hotspots and reaching your {neighborhood.name} property faster than out-of-town companies.</li>
                <li><strong>Knowledge of Local Conditions:</strong> We understand the specific risks in Fort Worth, from the potential for flash flooding during heavy rains to the types of materials used in local construction. This knowledge informs our entire restoration process.</li>
                <li><strong>Community Relationships:</strong> We have established relationships with local suppliers, tradespeople, and insurance adjusters in the Fort Worth area, which helps us streamline the restoration and rebuilding process for you.</li>
                <li><strong>Commitment to Our Neighbors:</strong> Our reputation in {neighborhood.name} and across Fort Worth is everything. We are committed to providing exceptional service because our customers are our neighbors, and we believe in strengthening our community by helping it recover from disasters.</li>
              </ul>
            </div>
          </section>

          {/* <MapSection lat={neighborhood.lat} lon={neighborhood.lon} /> */}
          <section id="map">
            <h2 className="text-3xl font-bold mb-4 text-center">We're On Our Way</h2>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Map of {neighborhood.name}, Fort Worth centered at ({neighborhood.lat}, {neighborhood.lon})</p>
            </div>
          </section>

           <section id="nearby-neighborhoods">
            <h2 className="text-3xl font-bold mb-4">Also Serving Nearby Areas</h2>
            <p className="mb-6">Our service area covers all of Fort Worth. If you have friends, family, or business associates in other neighborhoods, know that Dry Guys is ready to help them too.</p>
            <div className="flex flex-wrap gap-4">
              {otherNeighborhoods.map(n => (
                <Link key={n.slug} href={`/locations/${n.slug}`} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors">
                  {n.name}
                </Link>
              ))}
            </div>
          </section>

          {/* <FAQSection faqs={...} /> */}
          <section id="faq">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">{neighborhood.name} Restoration FAQs</h2>
              <div className="space-y-4">
                {locationFaqs.map((faq, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-semibold text-lg">{faq.q.replace('[Neighborhood]', neighborhood.name)}</h3>
                    <p className="mt-2 text-gray-700">{faq.a.replace('[Neighborhood]', neighborhood.name)}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* <CTASection /> */}
       <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Live in {neighborhood.name} and Need Help?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">Don't let water or fire damage disrupt your life. Contact Dry Guys Damage Restoration now for immediate, professional service right here in your neighborhood.</p>
          <a href="tel:123-456-7890" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-colors">Call Us 24/7: (123) 456-7890</a>
        </div>
      </section>
    </article>
  );
}