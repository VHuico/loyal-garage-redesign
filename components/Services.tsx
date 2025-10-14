'use client';

import { useState } from 'react';
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
  const [activeTab, setActiveTab] = useState(0);

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeService = services[activeTab];
  const Icon = activeService.icon;

  return (
    <section id="services" className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            <span className="text-yellow-500">Services</span> Offered
          </h2>
          <p className="text-gray-600">
            Professional garage door solutions for El Paso homes and businesses
          </p>
        </div>

        {/* Tab Navigation - Wraps on desktop, scrolls on mobile */}
        <div className="relative mb-6">
          <div className="md:flex md:flex-wrap md:justify-center flex overflow-x-auto gap-2 pb-2 md:pb-0 snap-x snap-mandatory scrollbar-hide">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg font-semibold text-sm transition-all snap-center ${
                  activeTab === index
                    ? 'bg-yellow-500 text-gray-900 shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {service.title.replace('Garage Door ', '')}
              </button>
            ))}
          </div>
          {/* Scroll indicators - mobile only */}
          <div className="md:hidden flex justify-center gap-1 mt-2">
            {services.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all ${
                  index === activeTab ? 'w-6 bg-yellow-500' : 'w-1 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Active Service Content */}
        <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 md:p-10 shadow-lg">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Icon className="text-white" size={32} />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {activeService.title}
              </h3>
              <p className="text-gray-600">{activeService.description}</p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-3 mb-6">
            {activeService.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 text-gray-700">
                <span className="text-yellow-500 mt-1 font-bold">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Price & CTA */}
          <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Starting at</p>
              <p className="text-3xl font-bold text-gray-900">{activeService.price}</p>
            </div>
            <button
              onClick={scrollToBooking}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-3 rounded-lg font-bold transition-all shadow-md hover:shadow-lg"
            >
              Get Free Quote
            </button>
          </div>
        </div>

        {/* Bottom CTA - Compact */}
        <div className="mt-8 text-center bg-gray-50 rounded-xl p-6">
          <p className="text-gray-700 mb-3">
            Not sure which service you need? <strong>Call Enrique directly</strong>
          </p>
          <a
            href="tel:+19159554928"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-bold transition-all"
          >
            (915) 955-4928
          </a>
        </div>
      </div>
    </section>
  );
}
