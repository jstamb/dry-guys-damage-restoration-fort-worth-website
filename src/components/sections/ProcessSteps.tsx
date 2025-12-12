import React from 'react';
import { PhoneCall, Search, Wrench, ShieldCheck } from 'lucide-react';

// Assuming this type is defined in @/types
export interface ProcessStep {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  title?: string;
}

const ProcessSteps: React.FC<ProcessStepsProps> = ({ 
  steps,
  title = "Our Simple 4-Step Restoration Process"
}) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
          <p className="mt-4 text-lg text-gray-600">We make the restoration process stress-free and straightforward.</p>
        </div>
        <div className="relative">
          {/* Desktop timeline line */}
          <div className="hidden md:block absolute top-10 left-1/2 w-0.5 h-[calc(100%-5rem)] bg-gray-200 -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 lg:gap-x-24">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative md:flex md:items-start ${index % 2 === 0 ? 'md:pr-6 lg:pr-12' : 'md:pl-6 lg:pl-12 md:flex-row-reverse md:text-right'} ${index >= 2 ? 'md:mt-24' : ''}`}
              >
                <div className={`flex-shrink-0 w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mx-auto md:mx-0 ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                  <step.icon className="w-10 h-10" />
                </div>
                {/* Desktop timeline circle */}
                <div className={`hidden md:flex absolute top-10 w-4 h-4 rounded-full bg-primary border-4 border-white ${index % 2 === 0 ? 'right-0 translate-x-[calc(50%+1px)]' : 'left-0 -translate-x-[calc(50%-1px)]'}`}></div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mt-4 md:mt-0 mb-2">Step {index + 1}: {step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
