'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Jennifer M.',
    location: 'Austin, TX',
    rating: 5,
    text: 'I worked with Enrique for years in Austin. Always professional, always on time, and never tried to sell me something I didn\'t need. Honest guy who does quality work.',
    service: 'Spring Repair',
  },
  {
    id: 2,
    name: 'Robert K.',
    location: 'Austin, TX',
    rating: 5,
    text: 'Enrique installed a new garage door for us in Austin before he moved. Beautiful work and the price was very fair. El Paso is lucky to have him!',
    service: 'New Installation',
  },
  {
    id: 3,
    name: 'Sandra P.',
    location: 'Austin, TX',
    rating: 5,
    text: 'Used Enrique\'s services multiple times over the years. He really knows his stuff and takes pride in his work. You won\'t regret hiring him.',
    service: 'Maintenance & Repairs',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000); // Change every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      className="py-12 bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            What <span className="text-yellow-500">Past Customers</span> Say
          </h2>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Austin reviews</span> • Building El Paso reputation
          </p>
        </div>

        {/* Single Testimonial Carousel */}
        <div className="relative">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-gray-100">
            {/* Stars */}
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="fill-yellow-500 text-yellow-500" size={24} />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed text-center italic">
              &ldquo;{currentTestimonial.text}&rdquo;
            </p>

            {/* Customer Info */}
            <div className="text-center border-t border-gray-200 pt-6">
              <p className="font-bold text-gray-900 text-lg">{currentTestimonial.name}</p>
              <p className="text-gray-600">{currentTestimonial.location}</p>
              <span className="inline-block mt-3 bg-yellow-500/10 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium">
                {currentTestimonial.service}
              </span>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white hover:bg-yellow-500 text-gray-900 p-2 md:p-3 rounded-full shadow-lg transition-all z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white hover:bg-yellow-500 text-gray-900 p-2 md:p-3 rounded-full shadow-lg transition-all z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-yellow-500 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA for El Paso Customers - Compact */}
        <div className="mt-8 bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-300 rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Help Enrique Build His El Paso Reputation
          </h3>
          <p className="text-sm text-gray-700 mb-4">
            Be one of his first El Paso customers! Competitive rates to build local portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => {
                const element = document.getElementById('booking');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-2.5 rounded-lg font-bold text-sm transition-all"
            >
              Get a Free Quote
            </button>
            <a
              href="tel:+19159554928"
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
