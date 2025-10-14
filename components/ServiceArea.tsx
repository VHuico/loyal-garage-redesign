'use client';

import { MapPin, Phone } from 'lucide-react';

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
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Serving <span className="text-yellow-500">El Paso, TX</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bringing quality garage door service to neighborhoods across El Paso
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Service Info Cards */}
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">25+ Miles</h3>
            <p className="text-gray-600">Service Radius</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Quick Response</h3>
            <p className="text-gray-600">Flexible Scheduling</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">EP</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Local Service</h3>
            <p className="text-gray-600">El Paso Based</p>
          </div>
        </div>

        {/* Areas List */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Areas We Serve
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {areas.map((area, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-700">
                <MapPin className="text-yellow-500 flex-shrink-0" size={18} />
                <span className="font-medium text-sm">{area}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-4">
              Don&apos;t see your area listed? Call to check if I service your location!
            </p>
            <a
              href="tel:+19159554928"
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-bold transition-all"
            >
              <Phone size={20} />
              (915) 955-4928
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
