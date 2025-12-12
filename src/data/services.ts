import { Droplets, Flame } from 'lucide-react';

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  benefits: string[];
  process: ProcessStep[];
  faqs: FAQ[];
  relatedServices: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export const services: Service[] = [
  {
    id: 'water-damage-restoration',
    name: 'Water Damage Restoration',
    slug: 'water-damage-restoration',
    shortDescription: 'Expert 24/7 water damage restoration and flood cleanup services in Fort Worth, TX.',
    description: `Water damage can strike unexpectedly, whether from a burst pipe, a severe North Texas storm, or a faulty appliance. At Dry Guys Damage Restoration Fort Worth, we understand the urgency and stress this causes. Our certified team is on call 24/7 to provide immediate, expert water damage restoration services across the Fort Worth area. We act fast to mitigate damage, prevent mold growth, and restore your property to its pre-loss condition. Our process begins with a thorough assessment using advanced moisture detection equipment to identify all affected areas, including hidden moisture in walls and under floors. We then employ powerful pumps and vacuums for rapid water extraction. Following extraction, we use industrial-grade air movers and dehumidifiers to thoroughly dry the structure, a critical step in the humid Fort Worth climate to prevent secondary damage like mold and mildew. We also handle content pack-out, cleaning, and restoration, ensuring your belongings are cared for. From historic homes in the Southside district to modern businesses Downtown, we have the experience and equipment to handle any size water damage event. We work directly with all major insurance carriers, simplifying the claims process for you and ensuring a smoother, faster recovery. Don't let water damage compromise your property's safety and value; trust the local experts at Dry Guys.`, 
    icon: Droplets,
    features: [
      '24/7 Emergency Response Team',
      'Advanced Moisture Detection & Mapping',
      'Rapid Water Extraction & Pumping',
      'Industrial-Grade Structural Drying',
      'Dehumidification & Climate Control',
      'Content Pack-Out & Restoration',
      'Mold & Mildew Prevention',
      'Direct Insurance Billing'
    ],
    benefits: [
      'Minimize property damage and loss',
      'Prevent dangerous mold growth',
      'Restore your home or business faster',
      'Reduce stress with a simplified insurance process',
      'Ensure a safe and healthy environment',
      'Protect your property\'s value'
    ],
    process: [
      { step: 1, title: 'Emergency Contact & Inspection', description: 'Call us 24/7. Our team arrives quickly to assess the extent of the water damage and create a restoration plan.' },
      { step: 2, title: 'Water Removal & Extraction', description: 'We use powerful, professional-grade equipment to remove standing water from your Fort Worth property immediately.' },
      { step: 3, title: 'Drying & Dehumidification', description: 'Industrial air movers and dehumidifiers are strategically placed to dry affected structures, flooring, and air.' },
      { step: 4, title: 'Cleaning & Sanitizing', description: 'We clean and sanitize all affected surfaces and belongings to prevent mold and eliminate odors.' },
      { step: 5, title: 'Restoration & Repairs', description: 'Our team performs necessary repairs, from replacing drywall to installing new flooring, to restore your property.' }
    ],
    faqs: [
      { id: 'w-faq-1', question: 'How long does the water damage restoration process take?', answer: 'The timeline varies depending on the extent of the damage. A small leak might take 2-3 days, while a major flood in a Fort Worth home could take a week or more. We provide a detailed timeline after our initial assessment.', category: 'process' },
      { id: 'w-faq-2', question: 'Is my water damage covered by insurance?', answer: 'Most homeowner\'s insurance policies cover sudden and accidental water damage, like a burst pipe. Flood damage from natural disasters often requires a separate policy. We can help you navigate your claim.', category: 'pricing' },
      { id: 'w-faq-3', question: 'Can I stay in my home during the restoration?', answer: 'It depends on the severity. For minor damage, you may be able to stay. For extensive damage or potential contamination, it may be safer to relocate temporarily. We prioritize your safety.', category: 'safety' },
      { id: 'w-faq-4', question: 'What is the difference between water mitigation and restoration?', answer: 'Mitigation is the immediate action to prevent further damage, like water extraction and drying. Restoration involves the repairs to bring your property back to its original condition.', category: 'services' },
      { id: 'w-faq-5', question: 'How do you prevent mold after water damage?', answer: 'Rapid and thorough drying is key. We use specialized equipment to reduce moisture levels and apply antimicrobial treatments to inhibit mold growth, which is crucial in the humid Texas climate.', category: 'process' }
    ],
    relatedServices: ['fire-damage-restoration'],
    metaTitle: 'Water Damage Restoration Fort Worth, TX | Dry Guys',
    metaDescription: 'Need fast water damage restoration in Fort Worth? Our 24/7 certified team offers expert flood cleanup, water extraction, and drying services. Call now for a free estimate!',
    keywords: ['water damage restoration Fort Worth', 'flood cleanup Fort Worth TX', 'emergency water removal', 'burst pipe repair', 'storm damage cleanup', 'structural drying', 'Fort Worth water mitigation', 'basement flooding cleanup']
  },
  {
    id: 'fire-damage-restoration',
    name: 'Fire Damage Restoration',
    slug: 'fire-damage-restoration',
    shortDescription: 'Comprehensive fire and smoke damage restoration services for homes and businesses in Fort Worth.',
    description: `A fire can be one of the most devastating events for a property owner. Even after the flames are extinguished, the damage continues with corrosive soot, smoke odor, and water damage from firefighting efforts. Dry Guys Damage Restoration Fort Worth provides a complete, compassionate fire damage restoration service to help you recover. Our certified technicians understand the complex chemistry of smoke and soot and use specialized techniques to clean and restore your property. We serve all of Fort Worth, from the historic brick buildings in the Northside to the sprawling homes in West Side. Our process includes securing the property, assessing the full scope of fire, smoke, and water damage, and performing content pack-out and cleaning. We use advanced equipment like thermal foggers and ozone generators to permanently eliminate stubborn smoke odors, not just mask them. Soot removal requires specific cleaning agents depending on the type of material burned, and our team is trained to handle this safely and effectively. We also manage the water damage component, ensuring the property is dried correctly to prevent mold. We restore salvageable items and manage the full reconstruction process, from structural repairs to painting and finishing touches. We work closely with you and your insurance adjuster to ensure a transparent and efficient restoration, helping you rebuild your life and restore your peace of mind.`, 
    icon: Flame,
    features: [
      '24/7 Emergency Board-Up & Tarping',
      'Soot & Smoke Removal',
      'Odor Control & Deodorization',
      'Content Cleaning & Restoration',
      'Structural Cleaning & Repair',
      'Water Damage Restoration (from firefighting)',
      'Complete Property Reconstruction',
      'Insurance Claim Coordination'
    ],
    benefits: [
      'Ensure property is safe and secure immediately',
      'Prevent permanent staining and etching from soot',
      'Eliminate hazardous smoke odors permanently',
      'Salvage and restore valuable personal belongings',
      'Comprehensive service from cleanup to rebuild',
      'Navigate the insurance process with an expert advocate'
    ],
    process: [
      { step: 1, title: 'Emergency Contact & Site Security', description: 'We respond immediately to secure your Fort Worth property with board-ups and roof tarps to prevent further damage.' },
      { step: 2, title: 'Damage Assessment & Scope', description: 'A full inspection of fire, smoke, and water damage is conducted to create a detailed restoration plan.' },
      { step: 3, title: 'Soot, Smoke & Water Removal', description: 'We begin by removing soot from all surfaces and extracting water used in firefighting efforts.' },
      { step: 4, title: 'Cleaning, Sanitizing & Odor Removal', description: 'All restorable items and structures are cleaned, sanitized, and deodorized using specialized equipment.' },
      { step: 5, title: 'Restoration & Reconstruction', description: 'The final step is repairing and rebuilding the affected areas of your property to their pre-fire condition.' }
    ],
    faqs: [
      { id: 'f-faq-1', question: 'Can I clean up fire damage myself?', answer: 'It is not recommended. Soot is often acidic and can cause more damage if cleaned improperly. Professionals use specific techniques and safety gear to handle hazardous materials and prevent staining.', category: 'safety' },
      { id: 'f-faq-2', question: 'How do you get rid of the smoke smell?', answer: 'We use several professional methods, including thermal fogging, ozone treatments, and hydroxyl generators, which neutralize odor particles at a molecular level, ensuring permanent removal.', category: 'process' },
      { id: 'f-faq-3', question: 'What should I do right after a fire?', answer: 'Your safety is the priority. Once cleared by the fire department, call your insurance company and a professional restoration company like us. Avoid touching sooty surfaces as oils from your hands can set stains.', category: 'emergency' },
      { id: 'f-faq-4', question: 'Are my belongings a total loss?', answer: 'Not necessarily. Many items can be successfully restored through specialized cleaning techniques. We perform a detailed inventory and determine what is salvageable.', category: 'services' },
      { id: 'f-faq-5', question: 'How long does fire damage restoration take in Fort Worth?', answer: 'This depends heavily on the fire\'s severity. Minor smoke damage might take a few days, while a major structural fire can take several weeks or months to fully restore and rebuild.', category: 'process' }
    ],
    relatedServices: ['water-damage-restoration'],
    metaTitle: 'Fire Damage Restoration Fort Worth, TX | Dry Guys',
    metaDescription: 'Expert fire & smoke damage restoration in Fort Worth. Our 24/7 team handles soot removal, odor control, and full reconstruction. Call for immediate help!',
    keywords: ['fire damage restoration Fort Worth', 'smoke damage cleanup TX', 'soot removal service', 'fire damage repair', 'house fire cleanup', 'odor removal after fire', 'Fort Worth reconstruction services', 'emergency board up']
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((service) => service.slug === slug);
};

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};
