export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'services' | 'process' | 'emergency' | 'warranty';
}

export const faqs: FAQ[] = [
  {
    id: 'faq-gen-1',
    question: 'Are you a licensed and insured restoration company in Fort Worth?',
    answer: 'Yes, absolutely. Dry Guys Damage Restoration is fully licensed and insured to perform water and fire damage restoration services in Fort Worth and throughout the state of Texas. We adhere to all local regulations and IICRC industry standards.',
    category: 'general'
  },
  {
    id: 'faq-gen-2',
    question: 'What areas of Fort Worth do you serve?',
    answer: 'We proudly serve the entire Fort Worth metro area and surrounding communities. This includes all major neighborhoods like Downtown, Northside, Southside, the East Side, and the West Side, ensuring rapid response times wherever you are.',
    category: 'general'
  },
  {
    id: 'faq-gen-3',
    question: 'How long has your company been in business?',
    answer: 'Dry Guys Damage Restoration Fort Worth was established in 2015. We have years of experience helping local homeowners and businesses recover from property damage with professionalism and care.',
    category: 'general'
  },
  {
    id: 'faq-gen-4',
    question: 'Do you work with all insurance companies?',
    answer: 'Yes, we have extensive experience working with all major insurance carriers. We can communicate directly with your adjuster, provide detailed documentation, and bill your insurance company to streamline the claims process for you.',
    category: 'general'
  },
  {
    id: 'faq-price-1',
    question: 'How is the cost of water damage restoration determined?',
    answer: 'The cost is based on several factors: the size of the affected area, the type of water (clean, gray, or black), the extent of damage to materials, and the amount of equipment and labor required. We use industry-standard pricing software to provide a detailed and transparent estimate.',
    category: 'pricing'
  },
  {
    id: 'faq-price-2',
    question: 'Do you provide free estimates?',
    answer: 'Yes, we offer a free, no-obligation inspection and estimate for property owners in Fort Worth. Our project manager will assess the damage and provide you with a comprehensive scope of work and a detailed cost breakdown.',
    category: 'pricing'
  },
  {
    id: 'faq-price-3',
    question: 'Will my homeowner\'s insurance cover the full cost of restoration?',
    answer: 'In most covered-loss scenarios, your insurance will pay for the full cost of mitigation and restoration, minus your deductible. We work to ensure our scope of work aligns with your policy coverage for a smooth claims experience.',
    category: 'pricing'
  },
  {
    id: 'faq-price-4',
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods, including insurance checks, personal checks, credit cards, and financing options for qualified customers. We can discuss the best option for your situation.',
    category: 'pricing'
  },
  {
    id: 'faq-serv-1',
    question: 'What types of water damage do you handle?',
    answer: 'We handle all types of water damage, including issues from burst pipes, appliance failures, sewage backups, toilet overflows, and storm or flood damage. We classify the water type and apply the appropriate restoration protocol.',
    category: 'services'
  },
  {
    id: 'faq-serv-2',
    question: 'Do you offer mold remediation services?',
    answer: 'While our primary focus is water and fire restoration, our processes are designed to prevent mold growth. If mold is discovered during our work, we are equipped to handle containment and can coordinate professional mold remediation services.',
    category: 'services'
  },
  {
    id: 'faq-serv-3',
    question: 'Can you restore personal belongings damaged by fire or water?',
    answer: 'Yes, we have a specialized content cleaning division. We can often restore items like furniture, documents, electronics, and textiles that have been damaged by smoke, soot, or water using advanced cleaning techniques.',
    category: 'services'
  },
  {
    id: 'faq-serv-4',
    question: 'Do you handle commercial property restoration in Fort Worth?',
    answer: 'Yes, we provide comprehensive restoration services for commercial properties, including offices, retail stores, restaurants, and industrial facilities. We work to minimize business interruption and get you back to operation quickly.',
    category: 'services'
  },
  {
    id: 'faq-proc-1',
    question: 'How long does the typical restoration process take?',
    answer: 'The duration depends on the scope of work. Water mitigation and drying typically take 3-5 days. Fire damage restoration is more complex and can range from a week to several months for significant structural repairs.',
    category: 'process'
  },
  {
    id: 'faq-proc-2',
    question: 'What is the first step after I call your company?',
    answer: 'The first step is our immediate dispatch. A team will arrive at your Fort Worth property, usually within 60-90 minutes, to perform an initial inspection, assess the safety of the site, and begin emergency mitigation procedures to prevent further damage.',
    category: 'process'
  },
  {
    id: 'faq-proc-3',
    question: 'How do you ensure my property is completely dry?',
    answer: 'We use professional moisture meters and thermal imaging cameras to detect moisture in and behind walls, floors, and ceilings. We don\'t just guess; we monitor the drying process daily and continue until moisture levels return to normal.',
    category: 'process'
  },
  {
    id: 'faq-proc-4',
    question: 'Will I be updated on the progress of the restoration?',
    answer: 'Absolutely. You will be assigned a dedicated project manager who will be your single point of contact. They will provide you with regular updates and be available to answer any questions you have throughout the entire process.',
    category: 'process'
  },
  {
    id: 'faq-emer-1',
    question: 'What is your emergency response time in the Fort Worth area?',
    answer: 'We offer a 24/7/365 emergency service. Our goal is to have a certified technician on-site at your Fort Worth property within 60 to 90 minutes of your call to begin the assessment and mitigation process immediately.',
    category: 'emergency'
  },
  {
    id: 'faq-emer-2',
    question: 'What should I do while waiting for your team to arrive?',
    answer: 'Your safety is the top priority. For water damage, if safe, turn off the water source and electricity to the affected area. For fire damage, do not re-enter the property until cleared by the fire department. Avoid touching sooty surfaces.',
    category: 'emergency'
  },
  {
    id: 'faq-emer-3',
    question: 'Is a small leak considered an emergency?',
    answer: 'Yes, even a small leak can quickly lead to significant damage and mold growth, especially in our humid Texas climate. It\'s always best to treat any active water intrusion as an emergency to minimize long-term damage and cost.',
    category: 'emergency'
  },
  {
    id: 'faq-emer-4',
    question: 'Who should I call first: my insurance or a restoration company?',
    answer: 'You can call either first, but we recommend calling us at the same time you call your insurance agent. While your insurance company processes the claim, we can begin immediate mitigation to prevent the damage from getting worse, which is often required by your policy.',
    category: 'emergency'
  },
  {
    id: 'faq-warr-1',
    question: 'Do you offer a warranty or guarantee on your restoration work?',
    answer: 'Yes, we stand behind our work. We offer a comprehensive workmanship warranty on all our restoration and repair services. We guarantee that the affected area has been dried to industry standards.',
    category: 'warranty'
  },
  {
    id: 'faq-warr-2',
    question: 'What happens if I find a problem after the job is complete?',
    answer: 'Your satisfaction is our priority. If you discover any issues related to our workmanship after the project is completed, simply give us a call. We will promptly return to assess and address your concerns.',
    category: 'warranty'
  },
  {
    id: 'faq-warr-3',
    question: 'Is the equipment you use safe for my family and pets?',
    answer: 'Yes. While our equipment is powerful, it is safe for use in occupied properties. We take care to place it strategically for maximum effectiveness and safety. Any cleaning agents we use are industry-approved and we prioritize low-VOC or green products when possible.',
    category: 'warranty'
  }
];

export const getFAQsByCategory = (category: string): FAQ[] => {
  return faqs.filter((faq) => faq.category === category);
};
