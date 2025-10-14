'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Jennifer M.',
    location: 'Austin, TX',
    rating: 5,
    text: 'I worked with him for years in Austin. Always professional, always on time, and never tried to sell me something I didn\'t need. Honest guy who does quality work.',
    service: 'Spring Repair',
  },
  {
    id: 2,
    name: 'Robert K.',
    location: 'Austin, TX',
    rating: 5,
    text: 'He installed a new garage door for us in Austin before he moved. Beautiful work and the price was very fair. El Paso is lucky to have him!',
    service: 'New Installation',
  },
  {
    id: 3,
    name: 'Sandra P.',
    location: 'Austin, TX',
    rating: 5,
    text: 'Used his services multiple times over the years. He really knows his stuff and takes pride in his work. You won\'t regret hiring him.',
    service: 'Maintenance & Repairs',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            What <span className="text-yellow-500">Past Customers</span> Say
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Reviews from my time in Austin—building the same reputation in El Paso
          </p>

          {/* Trust Notice */}
          <div className="inline-flex items-center gap-2 bg-blue-50 px-6 py-3 rounded-lg border border-blue-200">
            <div className="text-sm text-blue-800">
              <span className="font-semibold">New to El Paso</span> • Austin customer reviews
            </div>
          </div>
        </div>

        {/* Testimonials Grid - Compact */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-yellow-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="fill-yellow-500 text-yellow-500" size={16} />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>

              {/* Customer Info */}
              <div className="border-t border-gray-200 pt-3">
                <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
                <p className="text-xs text-gray-600">{testimonial.location} • {testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA for El Paso Customers - Compact */}
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300 rounded-xl p-6 md:p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Help Me Build My El Paso Reputation
          </h3>
          <p className="text-gray-700 mb-4">
            Be one of my first El Paso customers! Competitive rates to build my local portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => {
                const element = document.getElementById('booking');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-bold transition-all"
            >
              Get a Free Quote
            </button>
            <a
              href="tel:+19159554928"
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-bold transition-all"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
