export interface Neighborhood {
  id: string;
  name: string;
  slug: string;
  city: string;
  description: string;
  coordinates: { lat: number; lng: number };
  zipCodes: string[];
  nearbyNeighborhoods: string[];
  landmarks: string[];
  metaTitle: string;
  metaDescription: string;
}

export const neighborhoods: Neighborhood[] = [
  {
    id: 'downtown',
    name: 'Downtown',
    slug: 'downtown',
    city: 'Fort Worth',
    description: 'Downtown Fort Worth is the vibrant heart of the city, blending modern skyscrapers with beautifully restored 20th-century architecture. Home to the dazzling Sundance Square, it offers a mix of business, entertainment, and upscale urban living. From high-rise apartments and condos to corporate headquarters, the properties here are diverse. Water or fire damage in such a dense, complex environment requires a team with experience navigating urban logistics and high-rise building regulations. We provide rapid, discreet service to minimize disruption for residents and businesses near landmarks like the Fort Worth Convention Center and Bass Performance Hall, ensuring a swift return to normalcy.',
    coordinates: { lat: 32.7555, lng: -97.3308 },
    zipCodes: ['76102'],
    nearbyNeighborhoods: ['southside', 'west-side', 'northside'],
    landmarks: ['Sundance Square', 'Fort Worth Convention Center', 'Bass Performance Hall', 'Fort Worth Water Gardens'],
    metaTitle: 'Water & Fire Restoration in Downtown, Fort Worth | Dry Guys',
    metaDescription: 'Fast, reliable damage restoration for Downtown Fort Worth. We handle water and fire emergencies in high-rises and businesses. Call 24/7 for immediate response.'
  },
  {
    id: 'northside',
    name: 'Northside',
    slug: 'northside',
    city: 'Fort Worth',
    description: 'The Northside is steeped in the rich history of Fort Worth\'s western heritage, famously home to the Stockyards National Historic District. This area features a unique mix of historic homes, industrial spaces, and thriving local businesses that celebrate its cowboy culture. Properties range from charming bungalows to larger commercial facilities. When disaster strikes here, it often involves older construction which requires a knowledgeable approach to restoration. We respect the historic character of Northside properties, providing careful and thorough water and fire damage cleanup to preserve the unique charm of the area while ensuring modern safety standards are met.',
    coordinates: { lat: 32.7895, lng: -97.3496 },
    zipCodes: ['76164', '76106'],
    nearbyNeighborhoods: ['downtown', 'west-side'],
    landmarks: ['Fort Worth Stockyards', 'Billy Bob\'s Texas', 'Cowtown Coliseum', 'Joe T. Garcia\'s'],
    metaTitle: 'Water & Fire Restoration in Northside, Fort Worth | Dry Guys',
    metaDescription: 'Specialized damage restoration for Northside Fort Worth homes and businesses. We restore properties in the Stockyards area and beyond. Available 24/7.'
  },
  {
    id: 'southside',
    name: 'Southside',
    slug: 'southside',
    city: 'Fort Worth',
    description: 'Fort Worth\'s Southside, particularly the Near Southside and Magnolia Avenue area, is a dynamic and eclectic neighborhood known for its vibrant arts scene, medical district, and trendy restaurants. It features a mix of beautifully restored historic homes, modern apartments, and bustling commercial storefronts. The architectural diversity presents unique challenges for restoration, from craftsman bungalows to multi-unit medical facilities. Our team is experienced in handling emergencies in this lively district, providing efficient service that respects the community fabric and helps business owners and residents on Magnolia and Fairmount get back on their feet quickly.',
    coordinates: { lat: 32.7326, lng: -97.3400 },
    zipCodes: ['76104', '76110'],
    nearbyNeighborhoods: ['downtown', 'west-side'],
    landmarks: ['Magnolia Avenue', 'Medical District', 'Rahr & Sons Brewing Company', 'Fairmount National Historic District'],
    metaTitle: 'Water & Fire Restoration in Southside, Fort Worth | Dry Guys',
    metaDescription: '24/7 emergency water and fire restoration in Fort Worth\'s Southside. We serve the Magnolia area, Medical District, and Fairmount. Call for a fast response.'
  },
  {
    id: 'east-side',
    name: 'East Side',
    slug: 'east-side',
    city: 'Fort Worth',
    description: 'The East Side of Fort Worth is a large, diverse area characterized by established residential neighborhoods, beautiful parks like Gateway Park, and a growing number of businesses. It\'s a community with deep roots and a variety of housing styles, from mid-century ranches to newer developments. Proximity to the Trinity River means some areas can be susceptible to weather-related water issues. Our teams are frequently in the East Side, providing homeowners with reliable water extraction, storm damage repair, and fire restoration services. We understand the needs of this community and are committed to providing fast, effective solutions to protect their homes and families.',
    coordinates: { lat: 32.7564, lng: -97.2619 },
    zipCodes: ['76112', '76120', '76103'],
    nearbyNeighborhoods: ['downtown'],
    landmarks: ['Gateway Park', 'Tandy Hills Natural Area', 'Lake Arlington', 'Meadowbrook Golf Course'],
    metaTitle: 'Water & Fire Restoration in East Side, Fort Worth | Dry Guys',
    metaDescription: 'Trusted damage restoration for the East Side of Fort Worth. From storm damage to house fires, our team is ready to help 24/7. Contact us for a free estimate.'
  },
  {
    id: 'west-side',
    name: 'West Side',
    slug: 'west-side',
    city: 'Fort Worth',
    description: 'Fort Worth\'s West Side is known for its prestigious Cultural District, upscale residential areas like Westover Hills and Ridglea, and the bustling Camp Bowie Boulevard. This area boasts a mix of stately historic homes, luxury properties, and well-established commercial districts. Restoring properties in the West Side demands a high level of care, precision, and attention to detail. Our technicians are equipped to handle complex restoration projects in high-value homes and businesses, ensuring that everything from fine finishes to structural integrity is meticulously restored after water or fire damage. We provide the discreet, professional service that West Side residents expect.',
    coordinates: { lat: 32.7480, lng: -97.4128 },
    zipCodes: ['76107', '76116'],
    nearbyNeighborhoods: ['downtown', 'southside', 'northside'],
    landmarks: ['Kimbell Art Museum', 'Amon Carter Museum of American Art', 'Will Rogers Memorial Center', 'Fort Worth Botanic Garden'],
    metaTitle: 'Water & Fire Restoration in West Side, Fort Worth | Dry Guys',
    metaDescription: 'Premier water and fire damage restoration for Fort Worth\'s West Side, including the Cultural District and Ridglea. Call for expert 24/7 emergency services.'
  }
];

export const getNeighborhoodBySlug = (slug: string): Neighborhood | undefined => {
  return neighborhoods.find((n) => n.slug === slug);
};
