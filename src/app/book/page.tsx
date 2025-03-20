'use client';

import dynamic from 'next/dynamic';

const CalBooking = dynamic(
  () => import('@/components/CalBooking'),
  { ssr: false }
);

export default function BookPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Book a Consultation
          </h1>
          <p className="text-lg text-gray-600">
            Choose a time that works best for you. We look forward to speaking with you.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-xl p-4 md:p-8">
          <div className="aspect-video">
            <CalBooking />
          </div>
        </div>
      </div>
    </div>
  );
} 