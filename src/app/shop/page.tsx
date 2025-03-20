'use client';

import { loadStripe } from '@stripe/stripe-js';
import { motion } from 'framer-motion';
import { BriefcaseIcon, AcademicCapIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const products = [
  {
    id: 'price_H5ggYwtDq5YPwb',
    name: '1-on-1 Consultation',
    description: '60-minute personal consultation with our expert advisors.',
    price: 99.99,
    icon: BriefcaseIcon,
  },
  {
    id: 'price_H5ggZ9NiprKpJz',
    name: 'Career Development Package',
    description: 'Comprehensive career guidance package including resume review and interview prep.',
    price: 299.99,
    icon: AcademicCapIcon,
  },
  {
    id: 'price_H5ggaKm2d7Xpqx',
    name: 'Life Planning Workshop',
    description: 'Group workshop focused on goal setting and life planning strategies.',
    price: 149.99,
    icon: ChartBarIcon,
  },
  {
    id: 'price_H5ggbWxYq8Nmv4',
    name: 'Monthly Mentorship',
    description: 'Ongoing mentorship with monthly check-ins and unlimited email support.',
    price: 199.99,
    icon: UserGroupIcon,
  },
];

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Shop() {
  const handleCheckout = async (priceId: string) => {
    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to initialize.');

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
        }),
      });

      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="relative bg-white min-h-screen overflow-hidden">
      {/* Floating gradient backgrounds */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
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
        className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: [0, -50, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="relative">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-lg text-gray-500">
              Choose from our selection of professional services designed to help you achieve your goals.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.id}
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="aspect-h-1 aspect-w-1 w-full flex items-center justify-center p-8 bg-blue-50">
                    <Icon className="h-16 w-16 text-blue-600" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-medium text-blue-900">${product.price}</p>
                      <button
                        onClick={() => handleCheckout(product.id)}
                        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-200"
                      >
                        Purchase Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
} 