'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BriefcaseIcon, UserGroupIcon, HeartIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Career Guidance',
    description: 'Expert guidance to help you navigate your career path and achieve your professional goals.',
    icon: BriefcaseIcon,
    href: '/services/career-guidance',
  },
  {
    name: 'Personal Growth',
    description: 'Transform your life with personalized coaching and development strategies.',
    icon: UserGroupIcon,
    href: '/services/personal-growth',
  },
  {
    name: 'Relationship Advice',
    description: 'Build stronger, healthier relationships with professional counseling and support.',
    icon: HeartIcon,
    href: '/services/relationship-advice',
  },
  {
    name: 'Financial Planning',
    description: 'Secure your financial future with expert planning and investment strategies.',
    icon: CurrencyDollarIcon,
    href: '/services/financial-planning',
  },
];

export default function Services() {
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
              Our Services
            </motion.h1>
            <motion.p
              className="mt-6 text-lg leading-8 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We offer a comprehensive range of professional services to help you achieve your personal and professional goals.
              Choose the service that best fits your needs and start your journey to success today.
            </motion.p>
          </div>
        </div>

        {/* Services grid */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                className="flex flex-col gap-y-6 rounded-2xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 hover:ring-blue-600 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.href} className="group">
                  <div className="flex items-center gap-x-4">
                    <service.icon className="h-10 w-10 flex-none text-blue-600" aria-hidden="true" />
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 group-hover:text-blue-600">
                      {service.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center gap-x-2 text-sm font-semibold leading-6 text-blue-600">
                    Learn more
                    <span aria-hidden="true" className="group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="relative isolate mt-32 px-6 py-16 sm:mt-40 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Take the first step towards achieving your goals.
              Contact us today to learn more about how we can help you succeed.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Contact Us
              </Link>
              <Link href="/shop" className="text-sm font-semibold leading-6 text-gray-900">
                View Packages <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 