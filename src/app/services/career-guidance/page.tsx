'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckIcon, CalendarIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const benefits = [
  'One-on-one career counseling sessions',
  'Professional resume and cover letter review',
  'Interview preparation and mock interviews',
  'Career path planning and strategy',
  'Networking strategies and techniques',
  'Salary negotiation guidance',
  'Personal branding development',
  'Job search strategy optimization',
];

const packages = [
  {
    name: 'Single Session',
    price: 99.99,
    description: 'Perfect for specific career questions or quick guidance',
    features: [
      '60-minute consultation',
      'Action plan document',
      'Email follow-up',
      'Resource recommendations',
    ],
    priceId: 'price_H5ggYwtDq5YPwb',
  },
  {
    name: 'Career Development Package',
    price: 299.99,
    description: 'Comprehensive career guidance and development program',
    features: [
      '3 x 60-minute consultations',
      'Resume and cover letter review',
      'LinkedIn profile optimization',
      'Interview preparation',
      'Job search strategy',
      'Email support for 1 month',
    ],
    priceId: 'price_H5ggZ9NiprKpJz',
    highlighted: true,
  },
];

export default function CareerGuidance() {
  return (
    <div className="relative bg-white min-h-screen overflow-hidden">
      {/* Floating gradient backgrounds */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: [0, -50, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="relative">
        {/* Hero section */}
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Transform Your Career with Expert Guidance
            </motion.h1>
            <motion.p
              className="mt-6 text-lg leading-8 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Get personalized career advice from experienced professionals who understand the modern job market.
              Whether you're looking to switch careers, advance in your current role, or enter the workforce,
              we're here to help you succeed.
            </motion.p>
          </div>
        </div>

        {/* Benefits section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Career Support
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our career guidance service offers everything you need to advance your professional life and achieve your career goals.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex gap-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CheckIcon className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                  <div className="text-base leading-7 text-gray-600">{benefit}</div>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>

        {/* Pricing section */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-600">Pricing</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Choose Your Path to Success
              </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
              Select the package that best fits your needs and start your journey toward career success today.
            </p>
            <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8 xl:gap-x-12">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  className={`rounded-3xl p-8 ring-1 ${
                    pkg.highlighted
                      ? 'bg-blue-50 ring-blue-600'
                      : 'ring-gray-200'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    {pkg.name}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {pkg.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">${pkg.price}</span>
                  </p>
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    {pkg.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        className="flex gap-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 }}
                      >
                        <CheckIcon className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <Link
                    href={`/shop?package=${pkg.priceId}`}
                    className={`mt-8 block rounded-md px-3.5 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      pkg.highlighted
                        ? 'bg-blue-600 text-white shadow-sm hover:bg-blue-500 focus-visible:outline-blue-600'
                        : 'bg-white text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300'
                    }`}
                  >
                    Get started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="relative isolate mt-16 px-6 py-16 sm:mt-24 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Take the Next Step?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Book a consultation today and start your journey toward career success.
              Our expert advisors are ready to help you achieve your professional goals.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Contact Us
              </Link>
              <Link href="/services" className="text-sm font-semibold leading-6 text-gray-900">
                View All Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 