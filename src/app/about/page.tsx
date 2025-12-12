import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Dry Guys Damage Restoration Fort Worth',
  description: 'Learn about Dry Guys, Fort Worth’s trusted damage restoration experts since 2015. Our story, mission, and commitment to serving the Fort Worth community.',
};

const CTASection = () => (
  <section className="bg-secondary-500 text-white py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Need Emergency Restoration Services?</h2>
      <p className="text-lg mb-8">Our certified team is available 24/7 to help you.</p>
      <a href="tel:555-555-5555" className="btn btn-primary text-xl">Call (555) 555-5555 Now</a>
    </div>
  </section>
);

export default function AboutPage() {
  return (
    <>
      <section className="section bg-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Your Local Fort Worth Restoration Experts</h1>
          <div className="max-w-4xl mx-auto text-gray-700 space-y-6 leading-relaxed">
            <h2 className="text-3xl font-bold text-primary-700">Our Story</h2>
            <p>Dry Guys Damage Restoration Fort Worth was founded in 2015 with a simple yet powerful mission: to provide the residents and business owners of Fort Worth with a reliable, professional, and compassionate restoration service they could count on during their most challenging times. Our founder, a long-time Fort Worth resident, saw a need for a local company that prioritized customer care and technical excellence over everything else. In the wake of a severe storm that affected many of our neighbors, it became clear that a rapid, local response was crucial to minimizing damage and helping our community get back on its feet.</p>
            <p>We started with a single truck and a handful of dedicated, IICRC-certified technicians. From day one, our focus has been on mastering the science of restoration. We invested in the best equipment and continuous training to ensure we could handle any situation, from a small pipe leak in a residential home to a large-scale fire in a commercial building. Word of our meticulous work, transparent pricing, and unwavering commitment to our clients spread quickly. Over the years, we have grown into one of Fort Worth's most trusted names in damage restoration, but our core values have remained the same. We are still a locally-owned and operated business, deeply rooted in the community we serve.</p>
            
            <h2 className="text-3xl font-bold text-primary-700 mt-12">Our Mission & Our Team</h2>
            <p>Our mission is to deliver exceptional restoration services with integrity, professionalism, and empathy, ensuring our clients' properties and peace of mind are fully restored. We strive to be a beacon of reliability in times of crisis. We achieve this with our incredible team. Our technicians are the heart of Dry Guys. Each team member is not only IICRC certified but also undergoes continuous training on the latest techniques and safety protocols. We believe that a knowledgeable team is an effective team, so we empower them with the best tools and a supportive work environment. When you call Dry Guys, you can be confident that the professionals arriving at your door are skilled, respectful, and ready to solve your problem efficiently.</p>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}