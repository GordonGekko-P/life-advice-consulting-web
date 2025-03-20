'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: 'The Truth About Career Transitions: A No-Bullshit Guide',
    excerpt: 'Stop wasting time with endless preparation. Here\'s exactly what you need to do to make a successful career change, based on real client success stories.',
    date: '2024-03-15',
    readTime: '8 min read',
    category: 'Career',
  },
  {
    id: 2,
    title: 'Financial Independence: Cut Through the Noise',
    excerpt: 'Forget the get-rich-quick schemes. Here\'s the straightforward path to building lasting wealth and achieving financial independence.',
    date: '2024-03-10',
    readTime: '10 min read',
    category: 'Finance',
  },
  {
    id: 3,
    title: 'Relationship Success: The Practical Framework',
    excerpt: 'A data-driven approach to building and maintaining successful relationships, stripped of fluff and focused on actionable strategies.',
    date: '2024-03-05',
    readTime: '12 min read',
    category: 'Relationships',
  },
  {
    id: 4,
    title: 'Productivity That Actually Works',
    excerpt: 'Forget the productivity porn. Here\'s what actually moves the needle, based on years of consulting with high-performers.',
    date: '2024-02-28',
    readTime: '7 min read',
    category: 'Personal Growth',
  }
];

export default function Blog() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Floating Gradients */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
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
        className="absolute top-96 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Insights & Solutions
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Direct, actionable advice for real-world challenges
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.id}`}>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-blue-600">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="/avatar.jpg"
                        alt="Paul von Redecker"
                      />
                      <span className="ml-2 text-sm text-gray-600">Paul von Redecker</span>
                    </div>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
} 