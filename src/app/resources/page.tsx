'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface Resource {
  title: string;
  subtitle?: string;
  url: string;
  type: 'guide' | 'website' | 'video' | 'book';
  imageUrl: string;
  color: string;
  width?: number;
  height?: number;
}

const guides: Resource[] = [
  {
    title: 'The 400 Questions Guide',
    subtitle: 'Investment Banking Interview Questions & Answers You Need to Know',
    url: 'https://img1.wsimg.com/blobby/go/f5133f7c-4cb1-4fcd-8c88-92f634f45c56/downloads/400%20Questions%20%26%20Technicals.pdf',
    type: 'guide',
    imageUrl: 'https://raw.githubusercontent.com/paulvonredecker/resources/main/400q.png',
    color: 'bg-gradient-to-br from-gray-700 to-gray-900',
    width: 400,
    height: 225
  },
  {
    title: 'Breaking Into Wall Street',
    subtitle: 'Financial Modeling Training',
    url: 'https://breakingintowallstreet.com',
    type: 'website',
    imageUrl: 'https://raw.githubusercontent.com/paulvonredecker/resources/main/biws.png',
    color: 'bg-[#0B1C3D]',
    width: 400,
    height: 225
  },
  {
    title: 'Investment Banking',
    subtitle: 'Valuation, LBOs, M&A (Rosenbaum & Pearl)',
    url: 'https://www.wiley.com/en-us/Investment+Banking%3A+Valuation%2C+LBOs%2C+M%26A%2C+and+IPOs%2C+3rd+Edition-p-9781119706182',
    type: 'book',
    imageUrl: 'https://raw.githubusercontent.com/paulvonredecker/resources/main/rosenbaum.png',
    color: 'bg-[#F3D03E]',
    width: 400,
    height: 225
  },
];

const websites: Resource[] = [
  {
    title: 'Wall Street Oasis',
    subtitle: 'Investment Banking Community',
    url: 'https://www.wallstreetoasis.com',
    type: 'website',
    imageUrl: 'https://www.wallstreetoasis.com/sites/default/files/wso-logo-main.png',
    color: 'bg-white',
    width: 400,
    height: 225
  },
  {
    title: 'Corporate Finance Institute',
    subtitle: 'Financial Analyst Training',
    url: 'https://corporatefinanceinstitute.com',
    type: 'website',
    imageUrl: 'https://cdn.corporatefinanceinstitute.com/assets/cfi-logo-1.png',
    color: 'bg-white',
    width: 400,
    height: 225
  },
  {
    title: 'Mergers & Inquisitions',
    subtitle: 'Investment Banking Insights',
    url: 'https://www.mergersandinquisitions.com',
    type: 'website',
    imageUrl: 'https://www.mergersandinquisitions.com/wp-content/uploads/2023/12/mi-logo.png',
    color: 'bg-white',
    width: 400,
    height: 225
  },
];

const channels: Resource[] = [
  {
    title: 'LSESU Business & Investment Group',
    subtitle: 'Student-Led Investment Society',
    url: 'https://www.lsesu.com/activities/societies/society/businessandinvestmentgroup/',
    type: 'video',
    imageUrl: 'https://raw.githubusercontent.com/paulvonredecker/resources/main/lsesu.png',
    color: 'bg-[#0B1C3D]',
    width: 400,
    height: 225
  },
  {
    title: 'Meet Kevin',
    subtitle: 'Finance & Investment Analysis',
    url: 'https://www.youtube.com/@MeetKevin',
    type: 'video',
    imageUrl: 'https://raw.githubusercontent.com/paulvonredecker/resources/main/meetkevin.png',
    color: 'bg-[#0B1C3D]',
    width: 400,
    height: 225
  },
  {
    title: 'Rare Liquid',
    subtitle: 'Ex-JP Morgan | Wharton MBA',
    url: 'https://www.youtube.com/@rareliquid',
    type: 'video',
    imageUrl: 'https://raw.githubusercontent.com/paulvonredecker/resources/main/rareliquid.png',
    color: 'bg-[#0B1C3D]',
    width: 400,
    height: 225
  },
];

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg"
      style={{ width: resource.width || 400, height: resource.height || 225 }}
    >
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full w-full"
      >
        <div className={`relative h-full w-full ${resource.color} flex items-center justify-center`}>
          <div className="relative h-full w-full">
            <Image
              src={resource.imageUrl}
              alt={resource.title}
              fill
              className="object-contain p-4"
              sizes="(max-width: 400px) 100vw, 400px"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl font-semibold leading-tight drop-shadow-lg">{resource.title}</h3>
            {resource.subtitle && (
              <p className="mt-2 text-sm text-white/90 drop-shadow-lg">{resource.subtitle}</p>
            )}
          </div>
        </div>
      </a>
    </motion.div>
  );
};

interface ScrollingSectionProps {
  title: string;
  items: Resource[];
}

const ScrollingSection = ({ title, items }: ScrollingSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const opacity = useTransform(scrollXProgress, [0, 0.5, 1], [1, 1, 0.3]);

  return (
    <div className="mb-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        <motion.div style={{ opacity }} className="text-sm text-gray-500">
          Scroll for more →
        </motion.div>
      </div>
      <div
        ref={containerRef}
        className="hide-scrollbar flex gap-6 overflow-x-auto pb-6"
      >
        {items.map((item) => (
          <ResourceCard key={item.title} resource={item} />
        ))}
      </div>
    </div>
  );
};

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filterResources = (items: Resource[], query: string) => {
    if (!query) return items;
    return items.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(query.toLowerCase()))
    );
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="mb-8 text-center text-4xl font-semibold text-gray-900">
            Investment Banking Resources
          </h1>
          
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border-none bg-white/80 px-4 py-3 pl-12 shadow-lg backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <MagnifyingGlassIcon className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <ScrollingSection
          title="Essential Guides"
          items={filterResources(guides, searchQuery)}
        />

        <ScrollingSection
          title="Top Websites"
          items={filterResources(websites, searchQuery)}
        />

        <ScrollingSection
          title="YouTube Channels"
          items={filterResources(channels, searchQuery)}
        />

        <div className="rounded-2xl bg-white/80 p-8 shadow-sm backdrop-blur-sm">
          <h2 className="mb-6 text-2xl font-semibold text-gray-900">Coming Soon</h2>
          <p className="text-gray-500 italic">More resources will be added soon:</p>
          <ul className="mt-4 space-y-2 text-gray-500 list-disc list-inside">
            <li>Market Analysis Podcasts</li>
            <li>Political Podcasts</li>
            <li>Reading List</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 