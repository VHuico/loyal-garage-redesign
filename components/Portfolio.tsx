'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { getImagePath } from '@/lib/utils';

const portfolioItems = [
  {
    id: 1,
    category: 'Residential Installation',
    title: 'Modern Garage Door Replacement',
    location: 'Austin, TX',
    image1: '/images/portfolio/workHorizontal3.jpeg',
    image2: '/images/portfolio/workHorizontal2.jpeg',
    alt1: 'Modern garage door replacement example 1',
    alt2: 'Modern garage door replacement example 2',
    isExample: true,
  },
  {
    id: 2,
    category: 'Residential Installation',
    title: 'Modern Steel Garage Door',
    location: 'Austin, TX',
    image1: '/images/portfolio/workVertical.jpeg',
    image2: '/images/portfolio/workVertical2.jpeg',
    alt1: 'Modern steel garage door example 1',
    alt2: 'Modern steel garage door example 2',
    isExample: true,
  },
  {
    id: 3,
    category: 'Full Door Replacement',
    title: 'Complete Damaged Door Replacement',
    location: 'Austin, TX',
    beforeImage: '/images/portfolio/Before4.jpeg',
    afterImage: '/images/portfolio/After4.jpeg',
    beforeAlt: 'Damaged garage door before replacement',
    afterAlt: 'Brand new replacement door installed',
    isExample: false,
  },
  {
    id: 4,
    category: 'Repair & Adjustment',
    title: 'Garage Door Reframing & Realignment',
    location: 'Austin, TX',
    beforeImage: '/images/portfolio/Before5.jpeg',
    afterImage: '/images/portfolio/After5.jpeg',
    beforeAlt: 'Misaligned garage door frame',
    afterAlt: 'Properly reframed and aligned door',
    isExample: false,
  },
  {
    id: 5,
    category: 'Modernization',
    title: 'Outdated to Modern Door Upgrade',
    location: 'Austin, TX',
    beforeImage: '/images/portfolio/Before1.jpeg',
    afterImage: '/images/portfolio/After1.jpeg',
    beforeAlt: 'Old outdated garage door',
    afterAlt: 'Modern upgraded garage door',
    isExample: false,
  },
  {
    id: 6,
    category: 'Replacement',
    title: 'Damaged Door Replacement',
    location: 'Austin, TX',
    beforeImage: '/images/portfolio/Before3.jpeg',
    afterImage: '/images/portfolio/After3.jpeg',
    beforeAlt: 'Severely damaged garage door',
    afterAlt: 'Brand new replacement door',
    isExample: false,
  },
];

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;
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
    <section id="portfolio" className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Recent <span className="text-yellow-500">Work</span>
          </h2>
          <p className="text-gray-600">
            Examples from Enrique&apos;s Austin projects • Building El Paso portfolio
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-2 gap-6">
            {visibleItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Images */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 flex">
                    {item.isExample ? (
                      <>
                        {/* Example Images - No Labels */}
                        <div className="relative w-1/2 border-r-2 border-white">
                          <Image
                            src={getImagePath(item.image1!)}
                            alt={item.alt1!}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                        </div>
                        <div className="relative w-1/2">
                          <Image
                            src={getImagePath(item.image2!)}
                            alt={item.alt2!}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Before/After Images */}
                        <div className="relative w-1/2 border-r-2 border-white">
                          <Image
                            src={getImagePath(item.beforeImage!)}
                            alt={item.beforeAlt!}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                          <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-semibold">
                            BEFORE
                          </div>
                        </div>
                        <div className="relative w-1/2">
                          <Image
                            src={getImagePath(item.afterImage!)}
                            alt={item.afterAlt!}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                          <div className="absolute bottom-2 left-2 bg-yellow-500 text-gray-900 px-2 py-1 rounded text-xs font-semibold">
                            AFTER
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-yellow-500 text-gray-900 px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
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
