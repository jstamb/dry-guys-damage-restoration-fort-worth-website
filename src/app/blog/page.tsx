import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Restoration Blog | Tips from Dry Guys Fort Worth',
  description: 'Our blog provides helpful tips on preventing water damage, what to do after a fire, and insights into the restoration industry from the experts at Dry Guys.',
};

const posts = [
  { title: '5 Early Warning Signs of Water Damage in Your Home', excerpt: 'Learn to spot the subtle signs of water damage before it becomes a major problem. From musty odors to peeling paint, we cover what to look for.', date: 'October 26, 2023' },
  { title: 'What to Do Immediately After a House Fire', excerpt: 'The moments after a fire can be chaotic. This guide outlines the first crucial steps to take to ensure your safety and protect your property.', date: 'October 15, 2023' },
  { title: 'Understanding the Water Damage Restoration Process', excerpt: 'We break down our water damage restoration process step-by-step, from initial assessment and water extraction to drying and final repairs.', date: 'September 30, 2023' },
];

export default function BlogPage() {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">From the Dry Guys Blog</h1>
          <p className="text-lg text-gray-600 mt-2">Expert tips and insights on property restoration and safety.</p>
        </div>
        <div className="text-center mb-8">
          {/* Placeholder for category filters */}
          <button className="btn btn-primary mx-2">All</button>
          <button className="btn btn-secondary mx-2">Water Damage</button>
          <button className="btn btn-secondary mx-2">Fire Damage</button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <div key={post.title} className="card flex flex-col">
              <div className="flex-grow">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
              </div>
              <Link href="#" className="text-primary-600 font-semibold hover:underline mt-auto">Read More &rarr;</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}