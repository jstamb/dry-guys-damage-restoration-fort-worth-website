import React from 'react';
import { Award, ShieldCheck, Star, Clock } from 'lucide-react';

const trustItems = [
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    text: "10+ Years in Business",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    text: "Licensed & Insured",
  },
  {
    icon: <Star className="w-8 h-8 text-secondary" />,
    text: "5-Star Reviews",
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    text: "24/7 Emergency Service",
  },
];

const TrustBar: React.FC = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-2">{item.icon}</div>
              <p className="font-semibold text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
