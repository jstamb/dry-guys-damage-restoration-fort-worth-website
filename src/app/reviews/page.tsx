import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Customer Reviews for Dry Guys Damage Restoration',
  description: 'Read reviews and testimonials from satisfied customers of Dry Guys Damage Restoration in Fort Worth, TX. See why we are the trusted choice for restoration services.',
};

const reviews = [
  { name: 'John D.', rating: 5, text: 'Dry Guys were lifesavers after our pipe burst. They arrived in under an hour and had the water out in no time. Professional, courteous, and efficient. Highly recommend!' },
  { name: 'Sarah P.', rating: 5, text: 'We had a small kitchen fire, and the smoke damage was terrible. The team from Dry Guys was incredible. They cleaned everything and removed the smell completely. It\'s like it never happened.' },
  { name: 'Mike R.', rating: 5, text: 'Dealing with insurance is a nightmare, but these guys handled everything directly with my adjuster. It made a stressful situation so much easier. Thank you!' },
  { name: 'Emily C.', rating: 5, text: 'Fast, fair pricing, and excellent communication throughout the entire process. I wouldn\'t hesitate to call them again.' },
];

export default function ReviewsPage() {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Customer Testimonials</h1>
          <p className="text-lg text-gray-600 mt-2">See what our Fort Worth clients have to say about our work.</p>
        </div>
        <div className="bg-primary-50 p-8 rounded-lg text-center mb-12">
          <h2 className="text-2xl font-bold">Aggregate Rating</h2>
          <div className="text-5xl font-bold text-secondary-500 my-2">★★★★★</div>
          <p className="text-lg">Based on 150+ reviews across all platforms.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="card">
              <div className="flex items-center mb-2">
                <div className="text-2xl text-secondary-500">{'★'.repeat(review.rating)}</div>
              </div>
              <p className="text-gray-600 italic mb-4">\"{review.text}\"</p>
              <p className="font-bold text-right">- {review.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/contact" className="btn btn-primary">
            Leave a Review or Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}