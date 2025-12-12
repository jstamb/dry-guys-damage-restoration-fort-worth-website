import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// --- Data Imports ---
// Assumes the existence of these data files and types
// import { posts, Post } from '@/data/blog';
// import { services } from '@/data/services';

// --- Component Imports ---
// Assumes the existence of these components
// import { TableOfContents } from '@/components/TableOfContents';
// import { AuthorBio } from '@/components/AuthorBio';
// import { CTASection } from '@/components/CTASection';
// import { ArticleSchema } from '@/components/Schema';

// Mock Data (replace with actual imports)
const posts = [
  {
    slug: 'preventing-water-damage-in-fort-worth-homes',
    title: 'Preventing Water Damage in Fort Worth Homes: A Complete Guide',
    author: 'David Miller',
    authorImage: '/images/authors/david-miller.jpg',
    authorBio: 'David Miller is a Senior IICRC-Certified Technician at Dry Guys with over 15 years of experience in water damage mitigation and structural drying. He is passionate about educating homeowners on proactive property maintenance.',
    publishedAt: '2023-10-26',
    readingTime: '8 min read',
    excerpt: 'Discover the most common causes of water damage in Fort Worth and learn practical, actionable steps you can take to protect your home and prevent costly repairs.',
    content: `
<p>Water damage is one of the most common and costly issues faced by homeowners in Fort Worth, TX. From sudden plumbing failures to the relentless Texas weather, the threats are numerous. However, the good news is that many instances of water damage are preventable. By taking proactive steps and understanding the risks, you can safeguard your property, save money on repairs, and protect your peace of mind. This guide will walk you through the primary causes of water damage in our area and provide a comprehensive checklist for prevention.</p>

<h2 id="1-plumbing-and-appliance-failures">1. Plumbing and Appliance Failures</h2>
<p>The most frequent culprit of indoor water damage is your own plumbing system. Over time, pipes corrode, fittings loosen, and hoses become brittle. Appliances that use water, like washing machines, dishwashers, and water heaters, are also common points of failure.</p>
<h3>Prevention Checklist:</h3>
<ul>
  <li><strong>Inspect Hoses Annually:</strong> Check the water supply hoses for your washing machine, dishwasher, and refrigerator ice maker. Look for cracks, bulges, or brittleness. Replace them every 3-5 years, even if they look fine.</li>
  <li><strong>Know Your Water Main:</strong> Ensure everyone in your household knows the location of the main water shut-off valve and how to use it. In an emergency, shutting off the water quickly can prevent a catastrophe.</li>
  <li><strong>Water Heater Maintenance:</strong> Have your water heater inspected annually by a professional. Sediment buildup can cause corrosion and leaks. Most water heaters have a lifespan of 8-12 years.</li>
  <li><strong>Consider a Leak Detection System:</strong> Smart home technology now includes water leak detectors that can send an alert to your phone and even automatically shut off the water main if a leak is detected.</li>
</ul>

<h2 id="2-roofing-and-gutter-issues">2. Roofing and Gutter Issues</h2>
<p>Your roof is your home's first line of defense against the elements. In Fort Worth, intense sun, heavy rain, and occasional hail can take a toll. A compromised roof or clogged gutter system can allow water to seep into your attic and walls, causing hidden damage that grows over time.</p>
<h3>Prevention Checklist:</h3>
<ul>
  <li><strong>Regular Roof Inspections:</strong> Visually inspect your roof twice a year (spring and fall) and after any major storm. Look for missing, cracked, or curling shingles.</li>
  <li><strong>Keep Gutters Clean:</strong> Clogged gutters and downspouts cause water to overflow and pool around your foundation or seep behind your siding. Clean them at least twice a year.</li>
  <li><strong>Check Flashing and Seals:</strong> Ensure the flashing around chimneys, vents, and skylights is secure and the seals are intact. These are common points for leaks.</li>
</ul>

<h2 id="3-foundation-and-drainage-problems">3. Foundation and Drainage Problems</h2>
<p>The heavy clay soil common in North Texas expands and contracts dramatically with moisture changes. This can put immense pressure on your home's foundation, leading to cracks. Poor drainage around your property can exacerbate this issue, allowing water to pool against the foundation and seep into your basement or crawlspace.</p>
<h3>Prevention Checklist:</h3>
<ul>
  <li><strong>Grade Your Landscape:</strong> Ensure the ground around your foundation slopes away from the house (at least 6 inches over 10 feet) to direct rainwater away.</li>
  <li><strong>Use Downspout Extenders:</strong> Make sure your downspouts discharge water at least 5-10 feet away from the foundation.</li>
  <li><strong>Maintain a Sump Pump:</strong> If you have a basement or crawlspace with a sump pump, test it regularly to ensure it's working correctly, especially before a big storm.</li>
  <li><strong>Inspect for Foundation Cracks:</strong> Regularly check the interior and exterior of your foundation for cracks. Seal any small cracks immediately to prevent water intrusion.</li>
</ul>

<h2 id="what-to-do-if-you-find-water-damage">What to Do If You Find Water Damage</h2>
<p>Even with the best prevention, accidents can happen. If you discover water damage, acting quickly is critical to minimizing the long-term impact. The first 24-48 hours are crucial for preventing mold growth and secondary damage.</p>
<ol>
  <li><strong>Stop the Water Source:</strong> If possible, shut off the water main or the specific valve for the leaking appliance.</li>
  <li><strong>Ensure Safety:</strong> Turn off electricity in the affected area to prevent electrical hazards. Be cautious of slipping on wet floors.</li>
  <li><strong>Call a Professional:</strong> Contact a certified restoration company like <a href='/services/water-damage-restoration'>Dry Guys Damage Restoration Fort Worth</a> immediately. Our team is available 24/7 to respond to emergencies.</li>
  <li><strong>Document the Damage:</strong> Take photos and videos for your insurance claim before any items are moved or repaired.</li>
</ol>
<p>By staying vigilant and performing regular maintenance, you can significantly reduce your risk of water damage. But if the worst happens, know that professional help is just a phone call away.</p>
`,
    relatedPosts: ['common-fire-hazards-in-texas-homes']
  },
  {
    slug: 'common-fire-hazards-in-texas-homes',
    title: 'Common Fire Hazards in Texas Homes and How to Avoid Them',
    author: 'David Miller',
    authorImage: '/images/authors/david-miller.jpg',
    authorBio: 'David Miller is a Senior IICRC-Certified Technician at Dry Guys with over 15 years of experience in water damage mitigation and structural drying. He is passionate about educating homeowners on proactive property maintenance.',
    publishedAt: '2023-09-15',
    readingTime: '7 min read',
    excerpt: 'Protect your family and property by understanding the most common fire risks in Fort Worth homes, from kitchen accidents to electrical issues.',
    content: '<p>Content for fire hazards post...</p>',
    relatedPosts: ['preventing-water-damage-in-fort-worth-homes']
  }
];

const services = [
  { slug: 'water-damage-restoration', name: 'Water Damage Restoration' },
  { slug: 'fire-damage-restoration', name: 'Fire Damage Restoration' }
];

// --- Static Generation ---
export async function generateStaticParams() {
  return posts.map((post) => ({
    postSlug: post.slug,
  }));
}

// --- Metadata Generation ---
export async function generateMetadata({ params }: { params: { postSlug: string } }): Promise<Metadata> {
  const post = posts.find(p => p.slug === params.postSlug);

  if (!post) {
    return {};
  }

  const url = `https://www.dryguysfortworth.com/blog/${post.slug}`;

  return {
    title: `${post.title} | Dry Guys Blog`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: 'Dry Guys Damage Restoration Fort Worth',
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [
        {
          url: `/images/og-blog-${post.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

// --- Page Component ---
export default function BlogPostPage({ params }: { params: { postSlug: string } }) {
  const post = posts.find(p => p.slug === params.postSlug);

  if (!post) {
    notFound();
  }

  const relatedPostData = posts.find(p => p.slug === post.relatedPosts[0]);

  return (
    <>
      {/* <ArticleSchema post={post} /> */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-sm text-gray-600">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{post.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <article className="lg:col-span-8">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
              <div className="flex items-center text-gray-600 text-sm">
                <Image src={post.authorImage} alt={post.author} width={40} height={40} className="rounded-full mr-3" />
                <span>By {post.author}</span>
                <span className="mx-2">•</span>
                <span>{post.publishedAt}</span>
                <span className="mx-2">•</span>
                <span>{post.readingTime}</span>
              </div>
            </header>

            <div className="prose lg:prose-xl max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

            <hr className="my-12" />

            <section id="related-services">
              <h3 className="text-2xl font-bold mb-4">Need Professional Help?</h3>
              <p className="mb-4">If you're currently dealing with property damage, our team at Dry Guys is ready to help 24/7. We specialize in:</p>
              <div className="flex gap-4">
                {services.map(s => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="text-blue-600 font-semibold hover:underline">
                    {s.name} &rarr;
                  </Link>
                ))}
              </div>
            </section>

          </article>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* <TableOfContents content={post.content} /> */}
              <div className="border p-4 rounded-lg bg-gray-50">
                  <h3 className="font-bold text-lg mb-2">Table of Contents</h3>
                  <ul className="list-disc list-inside space-y-1 text-blue-600">
                      <li><a href="#1-plumbing-and-appliance-failures" className="hover:underline">Plumbing & Appliance Failures</a></li>
                      <li><a href="#2-roofing-and-gutter-issues" className="hover:underline">Roofing & Gutter Issues</a></li>
                      <li><a href="#3-foundation-and-drainage-problems" className="hover:underline">Foundation & Drainage Problems</a></li>
                      <li><a href="#what-to-do-if-you-find-water-damage" className="hover:underline">What To Do If You Find Damage</a></li>
                  </ul>
              </div>

              {relatedPostData && (
                <div className="border p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Related Post</h3>
                  <Link href={`/blog/${relatedPostData.slug}`} className="block hover:bg-gray-100 p-2 rounded-md">
                    <h4 className="font-semibold text-blue-700">{relatedPostData.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{relatedPostData.excerpt}</p>
                  </Link>
                </div>
              )}

              {/* <AuthorBio author={...} /> */}
              <div className="border p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">About the Author</h3>
                <div className="flex items-start">
                  <Image src={post.authorImage} alt={post.author} width={60} height={60} className="rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold">{post.author}</h4>
                    <p className="text-sm text-gray-600 mt-1">{post.authorBio}</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* <CTASection /> */}
      <section className="bg-blue-600 text-white py-16 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Facing a Property Emergency in Fort Worth?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">Don't wait. Our certified experts are available 24/7 to provide immediate assistance for water, fire, and smoke damage.</p>
          <a href="tel:123-456-7890" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-colors">Call Us Now: (123) 456-7890</a>
        </div>
      </section>
    </>
  );
}