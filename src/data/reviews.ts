export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  source: 'google' | 'yelp' | 'facebook' | 'direct';
  serviceType: string;
  neighborhood: string;
  verified: boolean;
}

export const reviews: Review[] = [
  {
    id: 'rev-01',
    author: 'Sarah K.',
    rating: 5,
    text: 'A pipe burst in our West Side home and flooded the entire first floor. Dry Guys was there within an hour and handled everything. Their team was professional and so reassuring during a stressful time. Highly recommend!',
    date: '2024-05-15T10:00:00Z',
    source: 'google',
    serviceType: 'Water Damage Restoration',
    neighborhood: 'West Side',
    verified: true
  },
  {
    id: 'rev-02',
    author: 'Michael R.',
    rating: 5,
    text: 'We had a small kitchen fire that left a huge mess and a terrible smell. Dry Guys completely eliminated the smoke odor and cleaned up the soot perfectly. Our Downtown condo looks and smells like it never happened.',
    date: '2024-04-22T14:30:00Z',
    source: 'yelp',
    serviceType: 'Fire Damage Restoration',
    neighborhood: 'Downtown',
    verified: true
  },
  {
    id: 'rev-03',
    author: 'Jessica L.',
    rating: 5,
    text: 'Incredible service! After a major storm, our basement in Southside was under a foot of water. They extracted the water quickly and set up drying equipment immediately. They saved us from a much bigger disaster.',
    date: '2024-03-10T08:45:00Z',
    source: 'facebook',
    serviceType: 'Water Damage Restoration',
    neighborhood: 'Southside',
    verified: true
  },
  {
    id: 'rev-04',
    author: 'David Chen',
    rating: 4,
    text: 'The process took a little longer than I expected, but the results were excellent. They were very thorough with the fire damage cleanup at our business in the Northside. The communication was good throughout.',
    date: '2024-02-18T11:20:00Z',
    source: 'google',
    serviceType: 'Fire Damage Restoration',
    neighborhood: 'Northside',
    verified: true
  },
  {
    id: 'rev-05',
    author: 'Emily B.',
    rating: 5,
    text: 'Our washing machine hose broke and made a huge mess. I called Dry Guys and they were professional from start to finish. The technician who came to our East Side home was knowledgeable and efficient.',
    date: '2024-01-29T19:00:00Z',
    source: 'direct',
    serviceType: 'Water Damage Restoration',
    neighborhood: 'East Side',
    verified: true
  },
  {
    id: 'rev-06',
    author: 'Brian T.',
    rating: 5,
    text: 'Top-notch fire restoration work. They handled the insurance claim for our West Side property, which took a huge weight off our shoulders. The quality of the repair work was fantastic.',
    date: '2023-12-05T16:15:00Z',
    source: 'google',
    serviceType: 'Fire Damage Restoration',
    neighborhood: 'West Side',
    verified: true
  },
  {
    id: 'rev-07',
    author: 'Maria G.',
    rating: 5,
    text: 'I was so impressed with their rapid response. We discovered a leak late at night in our Southside home and they had a team here in what felt like minutes. They truly are 24/7.',
    date: '2023-11-11T23:30:00Z',
    source: 'yelp',
    serviceType: 'Water Damage Restoration',
    neighborhood: 'Southside',
    verified: true
  },
  {
    id: 'rev-08',
    author: 'Kevin P.',
    rating: 5,
    text: 'A grease fire in our restaurant in the Stockyards was a nightmare. Dry Guys handled the soot and smoke cleanup with expertise, allowing us to reopen much faster than we thought possible. Lifesavers!',
    date: '2023-10-02T09:00:00Z',
    source: 'direct',
    serviceType: 'Fire Damage Restoration',
    neighborhood: 'Northside',
    verified: true
  },
  {
    id: 'rev-09',
    author: 'Linda H.',
    rating: 4,
    text: 'They did a great job drying out our flooded garage in the East Side. It was a bit pricey, but the peace of mind knowing there wouldn\'t be any mold was worth it. Very professional crew.',
    date: '2023-09-20T13:00:00Z',
    source: 'google',
    serviceType: 'Water Damage Restoration',
    neighborhood: 'East Side',
    verified: true
  },
  {
    id: 'rev-10',
    author: 'Steven W.',
    rating: 5,
    text: 'A water heater leak in our Downtown apartment created a mess. Dry Guys worked with our building management seamlessly and got everything dry and repaired fast. Excellent communication.',
    date: '2023-08-14T18:00:00Z',
    source: 'facebook',
    serviceType: 'Water Damage Restoration',
    neighborhood: 'Downtown',
    verified: true
  },
  {
    id: 'rev-11',
    author: 'Rachel M.',
    rating: 5,
    text: 'After an electrical fire, the smoke damage was overwhelming. The team from Dry Guys was so kind and professional. They packed up our belongings with care and made our house livable again.',
    date: '2023-07-01T12:45:00Z',
    source: 'yelp',
    serviceType: 'Fire Damage Restoration',
    neighborhood: 'West Side',
    verified: true
  },
  {
    id: 'rev-12',
    author: 'Carlos V.',
    rating: 5,
    text: 'A storm damaged our roof and we had significant water intrusion in our Northside house. Dry Guys not only dried everything out but also tarped our roof to prevent more damage. Great all-around service.',
    date: '2023-05-28T07:00:00Z',
    source: 'google',
    serviceType: 'Water Damage Restoration',
    neighborhood: 'Northside',
    verified: true
  },
  {
    id: 'rev-13',
    author: 'Diana J.',
    rating: 5,
    text: 'The absolute best in Fort Worth. They handled a puffback from our furnace that covered our Southside home in soot. It was a meticulous job and they did it perfectly.',
    date: '2023-02-11T15:00:00Z',
    source: 'direct',
    serviceType: 'Fire Damage Restoration',
    neighborhood: 'Southside',
    verified: true
  }
];
