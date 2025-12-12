import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Send, CheckCircle, AlertTriangle } from 'lucide-react';

const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$|^[0-9]{10}$/, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().optional(),
});

type LeadFormInputs = z.infer<typeof leadSchema>;

const services = [
  'Water Damage Restoration',
  'Fire Damage Repair',
  'Mold Remediation',
  'Storm Damage Cleanup',
  'Other'
];

const HeroForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormInputs>({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit: SubmitHandler<LeadFormInputs> = async (data) => {
    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Network response was not ok.');
      
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error('Submission error:', error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded-lg shadow-lg flex items-center">
        <CheckCircle className="w-8 h-8 mr-4" />
        <div>
          <h3 className="font-bold text-lg">Thank You!</h3>
          <p>Your request has been sent. We will contact you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl">
      <h3 className="text-2xl font-bold mb-1 text-center">Get a Free, No-Obligation Quote</h3>
      <p className="text-center text-gray-600 mb-6">Fill out the form below to get started.</p>
      {isError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2"/>
          <span>There was an error submitting your request. Please try again.</span>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input {...register('name')} placeholder="Your Name" className={`w-full px-4 py-3 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`} />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <input {...register('phone')} type="tel" placeholder="Phone Number" className={`w-full px-4 py-3 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`} />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <select {...register('service')} className={`w-full px-4 py-3 border rounded-md bg-white ${errors.service ? 'border-red-500' : 'border-gray-300'}`}>
            <option value="">Select a Service...</option>
            {services.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
        </div>
        <div>
          <textarea {...register('message')} placeholder="Message (Optional)" rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-md"></textarea>
        </div>
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full flex items-center justify-center bg-primary text-white font-bold py-4 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : <><Send className="w-5 h-5 mr-2" /><span>Get My Free Quote</span></>}
        </button>
      </form>
    </div>
  );
};

export default HeroForm;
