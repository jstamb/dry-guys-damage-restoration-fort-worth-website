import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Script from 'next/script';

// Assuming this type is defined in @/types
export interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

const FAQItem: React.FC<{ faq: FAQ; isOpen: boolean; onClick: () => void }> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button onClick={onClick} className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800">
        <span>{faq.question}</span>
        {isOpen ? <Minus className="w-6 h-6 text-primary" /> : <Plus className="w-6 h-6 text-gray-500" />}
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
            <p className="pt-4 text-gray-600">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQSection: React.FC<FAQSectionProps> = ({ 
  faqs,
  title = "Frequently Asked Questions"
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-20 bg-white">
      <Script 
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              faq={faq} 
              isOpen={openIndex === index} 
              onClick={() => handleClick(index)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
