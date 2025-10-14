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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What <span className="text-yellow-500">Past Customers</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Reviews from my time in Austin—building the same reputation in El Paso
          </p>

          {/* Trust Notice */}
          <div className="inline-flex items-center gap-3 bg-blue-50 px-8 py-4 rounded-xl border-2 border-blue-200">
            <div className="text-left">
              <div className="text-lg font-bold text-blue-900">New to El Paso</div>
              <div className="text-sm text-blue-700">These reviews are from satisfied customers in Austin</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-yellow-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="fill-yellow-500 text-yellow-500" size={20} />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>

              {/* Service Badge */}
              <div className="mb-4">
                <span className="inline-block bg-yellow-500/10 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.service}
                </span>
              </div>

              {/* Customer Info */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA for El Paso Customers */}
        <div className="mt-16 bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Help Me Build My El Paso Reputation
          </h3>
          <p className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
            Be one of my first El Paso customers! I&apos;m offering competitive rates to build my local portfolio and reviews.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const element = document.getElementById('booking');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              Get a Free Quote
            </button>
            <a
              href="tel:+19155550123"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
