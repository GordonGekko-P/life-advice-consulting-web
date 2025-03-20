'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckIcon, HeartIcon, ChatBubbleLeftRightIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const benefits = [
  'Expert relationship counseling',
  'Communication skills development',
  'Conflict resolution strategies',
  'Trust building techniques',
  'Emotional intimacy guidance',
  'Boundary setting support',
  'Dating and partnership advice',
  'Family dynamics counseling',
];

const packages = [
  {
    name: 'Initial Consultation',
    price: 89.99,
    description: 'Start addressing your relationship concerns with expert guidance',
    features: [
      '75-minute consultation',
      'Relationship assessment',
      'Communication analysis',
      'Initial recommendations',
    ],
    priceId: 'price_H5ggYwtDq5YPwd',
  },
  {
    name: 'Relationship Enhancement Program',
    price: 279.99,
    description: 'Comprehensive relationship development and improvement program',
    features: [
      '4 x 60-minute counseling sessions',
      'Relationship dynamics assessment',
      'Communication skills workshop',
      'Conflict resolution training',
      'Custom relationship exercises',
      'Email support for 2 months',
    ],
    priceId: 'price_H5ggZ9NiprKpJb',
    highlighted: true,
  },
];

export default function RelationshipAdvice() {
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
              Build Stronger Relationships
            </motion.h1>
            <motion.p
              className="mt-6 text-lg leading-8 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Develop deeper connections and improve your relationships with expert guidance.
              Our relationship counselors provide professional support to help you navigate
              challenges and build lasting bonds.
            </motion.p>
          </div>
        </div>

        {/* Benefits section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Expert Support</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Relationship Guidance
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our relationship counseling services are designed to help you build and maintain
              healthy, fulfilling relationships in all areas of your life.
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
                  <HeartIcon className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
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
                Invest in Your Relationships
              </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
              Choose the package that best suits your needs and start building stronger relationships today.
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
              Start Your Journey to Better Relationships
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Take the first step towards healthier, more fulfilling relationships.
              Our expert counselors are here to support you every step of the way.
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