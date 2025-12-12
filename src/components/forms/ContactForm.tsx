'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
// Mocked imports - create these files in your project
// import { services } from '@/data/services'; 
// import { ContactFormData } from '@/types';
import FormSuccess from './FormSuccess';

// Mocks for demonstration purposes
const services = [
  { id: 'web-dev', name: 'Web Development' },
  { id: 'seo', name: 'SEO Optimization' },
  { id: 'marketing', name: 'Digital Marketing' },
  { id: 'consulting', name: 'Consulting' },
];

// Zod validation schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
});

// Infer the type from the schema
type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, type: 'contact' }),
      });

      if (!response.ok) {
        // Simulate a server error message
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
      <div className="form-group">
        <label htmlFor="name" className="form-label">Full Name</label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className="form-input"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby="name-error"
        />
        {errors.name && <p id="name-error" className="form-error">{errors.name.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">Email Address</label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="form-input"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby="email-error"
        />
        {errors.email && <p id="email-error" className="form-error">{errors.email.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="phone" className="form-label">Phone Number (Optional)</label>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="service" className="form-label">Service of Interest</label>
        <select
          id="service"
          {...register('service')}
          className="form-select"
          defaultValue=""
          aria-invalid={errors.service ? "true" : "false"}
          aria-describedby="service-error"
        >
          <option value="" disabled>Select a service...</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>{service.name}</option>
          ))}
        </select>
        {errors.service && <p id="service-error" className="form-error">{errors.service.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className="form-textarea"
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby="message-error"
        ></textarea>
        {errors.message && <p id="message-error" className="form-error">{errors.message.message}</p>}
      </div>
      
      {error && <p className="form-error-main">{error}</p>}

      <button type="submit" disabled={isSubmitting} className="submit-button">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
