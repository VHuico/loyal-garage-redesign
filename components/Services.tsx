'use client';

import { Wrench, Settings, Clock, Home, Building, Zap } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Garage Door Installation',
    description: 'New garage door installation for residential and commercial properties. Wide selection of styles and materials.',
    features: ['Free consultation', 'Professional installation', 'Warranty included', 'Same-day service available'],
    price: 'Starting at $899',
  },
  {
    icon: Wrench,
    title: 'Garage Door Repair',
    description: 'Expert repair services for broken springs, cables, rollers, tracks, and panels. Fast response time.',
    features: ['Broken springs', 'Cable replacement', 'Track alignment', 'Panel replacement'],
    price: 'Starting at $149',
  },
  {
    icon: Zap,
    title: 'Opener Installation & Repair',
    description: 'Smart garage door opener installation and repair. Wi-Fi enabled options for smartphone control.',
    features: ['Smart openers', 'Belt & chain drive', 'Remote programming', 'Safety sensor repair'],
    price: 'Starting at $299',
  },
  {
    icon: Settings,
    title: 'Maintenance & Tune-Ups',
    description: 'Preventive maintenance to keep your garage door running smoothly and safely year-round.',
    features: ['Safety inspection', 'Lubrication service', 'Balance adjustment', 'Parts inspection'],
    price: 'Starting at $89',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Emergency garage door repair service available around the clock. We respond fast when you need us most.',
    features: ['Available 24/7', 'Fast response', 'Same-day repair', 'All major brands'],
    price: 'Call for pricing',
  },
  {
    icon: Building,
    title: 'Commercial Services',
    description: 'Specialized commercial garage door services for businesses, warehouses, and industrial facilities.',
    features: ['Roll-up doors', 'Sectional doors', 'High-speed doors', 'Loading dock doors'],
    price: 'Custom quotes',
  },
];

export default function Services() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            <span className="text-yellow-500">Services</span> Offered
          </h2>
          <p className="text-lg text-gray-600">
            Professional garage door solutions for El Paso homes and businesses
          </p>
        </div>

        {/* Services Grid - Compact */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-yellow-500 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500 transition-colors">
                  <Icon className="text-yellow-500 group-hover:text-white transition-colors" size={24} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>

                {/* Features - Only show first 3 */}
                <ul className="space-y-1 mb-4">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-yellow-500 text-xs mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                  <p className="text-lg font-bold text-gray-900">{service.price}</p>
                  <button
                    onClick={scrollToBooking}
                    className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-lg font-semibold text-sm transition-all"
                  >
                    Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA - Compact */}
        <div className="mt-10 text-center bg-gray-50 rounded-xl p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Not sure which service you need?
          </h3>
          <p className="text-gray-600 mb-4">
            Call for a free consultation and honest assessment
          </p>
          <a
            href="tel:+19159554928"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-bold transition-all"
          >
            Call (915) 955-4928
          </a>
        </div>
      </div>
    </section>
  );
}
