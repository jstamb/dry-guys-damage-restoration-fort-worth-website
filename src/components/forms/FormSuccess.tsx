import React from 'react';

const FormSuccess: React.FC = () => {
  return (
    <div className="success-container text-center p-8 border rounded-lg bg-green-50 border-green-200">
      <svg
        className="mx-auto h-12 w-12 text-green-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h2 className="mt-4 text-2xl font-bold text-gray-800">
        Thank you for your submission!
      </h2>
      <p className="mt-2 text-gray-600">
        Your message has been received. We're excited to connect with you.
      </p>
      <div className="mt-6 text-sm text-gray-500">
        <p>We'll review your request and get back to you within <strong>24 business hours</strong>.</p>
        <p className="mt-1">For urgent inquiries, please call us at <a href="tel:+15551234567" className="font-semibold text-indigo-600 hover:underline">+1 (555) 123-4567</a>.</p>
      </div>
    </div>
  );
};

export default FormSuccess;
