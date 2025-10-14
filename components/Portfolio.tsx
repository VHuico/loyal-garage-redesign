'use client';

import { useState } from 'react';

const portfolioItems = [
  {
    id: 1,
    category: 'Residential Installation',
    title: 'Modern Steel Garage Door',
    location: 'West El Paso',
    beforeAlt: 'Old garage door before installation',
    afterAlt: 'New modern steel garage door',
  },
  {
    id: 2,
    category: 'Spring Repair',
    title: 'Emergency Spring Replacement',
    location: 'East El Paso',
    beforeAlt: 'Broken garage door spring',
    afterAlt: 'Repaired garage door spring',
  },
  {
    id: 3,
    category: 'Commercial',
    title: 'Commercial Roll-Up Door',
    location: 'Downtown El Paso',
    beforeAlt: 'Old commercial garage door',
    afterAlt: 'New commercial roll-up door',
  },
  {
    id: 4,
    category: 'Residential Installation',
    title: 'Carriage Style Door',
    location: 'Northeast El Paso',
    beforeAlt: 'Old garage door',
    afterAlt: 'Beautiful carriage style door',
  },
  {
    id: 5,
    category: 'Repair',
    title: 'Panel Replacement',
    location: 'Westside El Paso',
    beforeAlt: 'Damaged garage door panel',
    afterAlt: 'Replaced garage door panel',
  },
  {
    id: 6,
    category: 'Smart Opener',
    title: 'Wi-Fi Garage Door Opener',
    location: 'Central El Paso',
    beforeAlt: 'Old garage door opener',
    afterAlt: 'New smart opener installation',
  },
];

const categories = ['All', 'Residential Installation', 'Repair', 'Commercial', 'Smart Opener', 'Spring Repair'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-yellow-500">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the quality of our garage door installations and repairs throughout El Paso
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-yellow-500 text-gray-900'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Before/After Images Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                <div className="absolute inset-0 flex">
                  {/* Before */}
                  <div className="w-1/2 bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center border-r-2 border-white">
                    <div className="text-center text-white">
                      <p className="text-sm font-semibold mb-2">BEFORE</p>
                      <p className="text-xs px-4">{item.beforeAlt}</p>
                    </div>
                  </div>
                  {/* After */}
                  <div className="w-1/2 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <p className="text-sm font-semibold mb-2">AFTER</p>
                      <p className="text-xs px-4">{item.afterAlt}</p>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 flex items-center gap-2">
                  <span className="text-yellow-500">📍</span>
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note for Business Owner */}
        <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <p className="text-blue-900 font-semibold mb-2">📸 For the Business Owner:</p>
          <p className="text-blue-800">
            Replace these placeholder images with real before/after photos of your actual work.
            High-quality photos showing the transformation will greatly increase customer trust and conversions.
            Store images in the <code className="bg-blue-100 px-2 py-1 rounded">public/images/portfolio/</code> folder.
          </p>
        </div>
      </div>
    </section>
  );
}
