'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
// Mocked imports - create these files in your project
// import { services } from '@/data/services';
// import { QuoteFormData } from '@/types';
import FormSuccess from './FormSuccess';

// Mocks for demonstration purposes
const services = [
  { id: 'web-dev', name: 'Web Development' },
  { id: 'seo', name: 'SEO Optimization' },
  { id: 'marketing', name: 'Digital Marketing' },
  { id: 'consulting', name: 'Consulting' },
];

// Base schema for contact fields
const contactSchemaBase = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z.string().min(10, { message: "Please provide some project details." }),
});

// Extended schema for quote form
const quoteSchema = contactSchemaBase.extend({
  address: z.string().optional(),
  contactMethod: z.enum(['email', 'phone'], { required_error: "Please select a contact method." }),
  preferredTime: z.string().min(1, { message: "Please select a preferred time." }),
  projectTimeline: z.string().min(1, { message: "Please select a project timeline." }),
});

// Infer the type from the schema
type QuoteFormData = z.infer<typeof quoteSchema>;

const QuoteForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit: SubmitHandler<QuoteFormData> = async (data) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, type: 'quote' }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'An unknown server error occurred.' }));
        throw new Error(errorData.message || 'Something went wrong. Please try again later.');
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return <FormSuccess />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input id="name" type="text" {...register('name')} className="form-input" aria-invalid={!!errors.name} />
          {errors.name && <p className="form-error">{errors.name.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input id="email" type="email" {...register('email')} className="form-input" aria-invalid={!!errors.email} />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone Number (Optional)</label>
          <input id="phone" type="tel" {...register('phone')} className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="address" className="form-label">Project Address (Optional)</label>
          <input id="address" type="text" {...register('address')} className="form-input" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-group">
          <label htmlFor="service" className="form-label">Service of Interest</label>
          <select id="service" {...register('service')} className="form-select" defaultValue="" aria-invalid={!!errors.service}>
            <option value="" disabled>Select a service...</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>{service.name}</option>
            ))}
          </select>
          {errors.service && <p className="form-error">{errors.service.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="projectTimeline" className="form-label">Project Timeline</label>
          <select id="projectTimeline" {...register('projectTimeline')} className="form-select" defaultValue="" aria-invalid={!!errors.projectTimeline}>
            <option value="" disabled>Select a timeline...</option>
            <option value="1-2 weeks">1-2 Weeks</option>
            <option value="1 month">1 Month</option>
            <option value="3+ months">3+ Months</option>
          </select>
          {errors.projectTimeline && <p className="form-error">{errors.projectTimeline.message}</p>}
        </div>
      </div>

      <div className="form-group">
        <fieldset>
          <legend className="form-label">Preferred Contact Method</legend>
          <div className="flex items-center space-x-4 mt-2">
            <div className="flex items-center">
              <input id="contactMethodEmail" type="radio" value="email" {...register('contactMethod')} className="form-radio" />
              <label htmlFor="contactMethodEmail" className="ml-2">Email</label>
            </div>
            <div className="flex items-center">
              <input id="contactMethodPhone" type="radio" value="phone" {...register('contactMethod')} className="form-radio" />
              <label htmlFor="contactMethodPhone" className="ml-2">Phone</label>
            </div>
          </div>
          {errors.contactMethod && <p className="form-error mt-1">{errors.contactMethod.message}</p>}
        </fieldset>
      </div>

      <div className="form-group">
        <label htmlFor="preferredTime" className="form-label">Preferred Contact Time</label>
        <select id="preferredTime" {...register('preferredTime')} className="form-select" defaultValue="" aria-invalid={!!errors.preferredTime}>
          <option value="" disabled>Select a time...</option>
          <option value="morning">Morning (9am-12pm)</option>
          <option value="afternoon">Afternoon (12pm-5pm)</option>
          <option value="evening">Evening (5pm-8pm)</option>
        </select>
        {errors.preferredTime && <p className="form-error">{errors.preferredTime.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">Project Details</label>
        <textarea id="message" rows={5} {...register('message')} className="form-textarea" aria-invalid={!!errors.message}></textarea>
        {errors.message && <p className="form-error">{errors.message.message}</p>}
      </div>
      
      {error && <p className="form-error-main">{error}</p>}

      <button type="submit" disabled={isSubmitting} className="submit-button">
        {isSubmitting ? 'Sending...' : 'Get My Free Quote'}
      </button>
    </form>
  );
};

export default QuoteForm;
