'use client';

import { MapPin } from 'lucide-react';

const areas = [
  'West El Paso',
  'East El Paso',
  'Northeast El Paso',
  'Central El Paso',
  'Downtown El Paso',
  'Westside El Paso',
  'Mission Valley',
  'Eastwood',
  'Kern Place',
  'Sunset Heights',
  'Socorro',
  'Horizon City',
];

export default function ServiceArea() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Proudly Serving <span className="text-yellow-500">El Paso, TX</span>
            </h2>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              We provide fast, reliable garage door services throughout El Paso and surrounding areas.
              As a local business, we understand the unique needs of our community and are committed
              to being there when you need us.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mb-8">
              <p className="text-yellow-900 font-semibold mb-2">
                Fast Response Times Across El Paso
              </p>
              <p className="text-yellow-800">
                Same-day service available in most areas. Emergency service available 24/7.
              </p>
            </div>

            {/* Areas Grid */}
            <div className="grid grid-cols-2 gap-3">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700">
                  <MapPin className="text-yellow-500 flex-shrink-0" size={18} />
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-gray-600">
              Don&apos;t see your area listed?{' '}
              <a href="#contact" className="text-yellow-500 hover:text-yellow-600 font-semibold">
                Contact us
              </a>{' '}
              to check if we service your location!
            </p>
          </div>

          {/* Right Content - Map Placeholder */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Map Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                <div className="text-center text-gray-700 p-8">
                  <MapPin className="mx-auto mb-4 text-yellow-600" size={80} />
                  <p className="text-2xl font-bold mb-4">Service Area Map</p>
                  <p className="text-lg mb-4">Embed Google Maps or custom map here</p>
                  <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg inline-block">
                    <p className="text-sm font-semibold mb-3">Integration Options:</p>
                    <ul className="text-left text-sm space-y-2">
                      <li>• Google Maps embed (free)</li>
                      <li>• Mapbox custom map</li>
                      <li>• Static map image</li>
                      <li>• Interactive area selector</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Radius Badge */}
            <div className="absolute -top-6 -right-6 bg-yellow-500 text-gray-900 p-6 rounded-full shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm font-semibold">Mile Radius</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
