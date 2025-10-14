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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-yellow-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive garage door solutions for homes and businesses in El Paso, TX
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-yellow-500 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
                  <Icon className="text-yellow-500 group-hover:text-white transition-colors" size={32} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-yellow-500 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <p className="text-2xl font-bold text-gray-900">{service.price}</p>
                </div>

                {/* CTA */}
                <button
                  onClick={scrollToBooking}
                  className="w-full bg-gray-900 hover:bg-yellow-500 text-white hover:text-gray-900 py-3 rounded-lg font-semibold transition-all"
                >
                  Get Quote
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Not sure which service you need?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Contact us for a free consultation and honest assessment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToBooking}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all"
            >
              Schedule Free Inspection
            </button>
            <a
              href="tel:+19155550123"
              className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg border-2 border-gray-200 transition-all"
            >
              Call (915) 555-0123
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
