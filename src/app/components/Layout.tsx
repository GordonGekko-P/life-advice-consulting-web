'use client';

import { motion } from 'framer-motion';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Content wrapper with padding for fixed header */}
      <main className="pt-24">
        {/* Floating Gradients */}
        <motion.div
          className="fixed top-0 left-0 w-[800px] h-[800px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="fixed top-[20%] right-0 w-[600px] h-[600px] bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20"
          animate={{
            x: [0, -50, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="fixed bottom-0 left-1/2 w-[700px] h-[700px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -70, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Main content */}
        <div className="relative">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative mt-auto py-12 bg-gradient-to-b from-transparent to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-4">von Redecker Guide</h3>
              <p className="text-gray-600">
                Strategic solutions for career, finance, and personal growth.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Contact</h3>
              <p className="text-gray-600">
                Paul von Redecker<br />
                <a href="mailto:paulvonr@protonmail.com" className="hover:text-blue-900 transition-colors">
                  paulvonr@protonmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/book" className="text-gray-600 hover:text-blue-900 transition-colors">
                    Book Consultation
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-gray-600 hover:text-blue-900 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-gray-600 hover:text-blue-900 transition-colors">
                    Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-100">
            <p className="text-center text-gray-500">
              © {new Date().getFullYear()} von Redecker Guide. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 