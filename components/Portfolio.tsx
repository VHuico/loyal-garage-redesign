'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleItems = portfolioItems.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Recent <span className="text-yellow-500">Work</span>
          </h2>
          <p className="text-lg text-gray-600">
            Examples from my Austin projects • Building my El Paso portfolio
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Before/After Images Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  <div className="absolute inset-0 flex">
                    {/* Before */}
                    <div className="w-1/2 bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center border-r-2 border-white">
                      <div className="text-center text-white px-2">
                        <p className="text-xs font-semibold mb-1">BEFORE</p>
                        <p className="text-xs">{item.beforeAlt}</p>
                      </div>
                    </div>
                    {/* After */}
                    <div className="w-1/2 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                      <div className="text-center text-white px-2">
                        <p className="text-xs font-semibold mb-1">AFTER</p>
                        <p className="text-xs">{item.afterAlt}</p>
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-yellow-500 text-gray-900 px-2 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <span className="text-yellow-500">📍</span>
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-yellow-500 text-gray-900 p-3 rounded-full shadow-lg transition-all z-10"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-yellow-500 text-gray-900 p-3 rounded-full shadow-lg transition-all z-10"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-yellow-500 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
