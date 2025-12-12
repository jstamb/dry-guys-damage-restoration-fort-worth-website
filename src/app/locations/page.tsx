import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Areas | Damage Restoration in Fort Worth, TX',
  description: 'Dry Guys proudly serves Fort Worth and surrounding areas including Arlington, Irving, and more. See our full service area for 24/7 water and fire restoration.',
};

const neighborhoods = [
  'Downtown Fort Worth', 'Arlington Heights', 'Benbrook', 'Blue Mound', 'Crowley',
  'Cultural District', 'Eagle Mountain', 'Haltom City', 'Lake Worth', 'North Richland Hills',
  'River Oaks', 'Saginaw', 'Southside', 'TCU Area', 'Westover Hills', 'White Settlement'
];

export default function LocationsPage() {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Our Fort Worth Service Area</h1>
          <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">Dry Guys Damage Restoration is proud to offer 24/7 emergency services to the greater Fort Worth area and beyond. If you don't see your location listed, give us a call!</p>
        </div>
        
        <div className="bg-gray-200 h-96 rounded-lg mb-12"> 
          {/* Placeholder for an interactive map component */}
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Map of Service Area</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Neighborhoods & Cities We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {neighborhoods.map(loc => (
              <div key={loc} className="bg-white p-4 rounded-lg shadow-md">
                <p className="font-semibold">{loc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}