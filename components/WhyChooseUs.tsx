'use client';

import { useState, useRef, useEffect } from 'react';
import { Shield, Clock, DollarSign, Users, Award, Heart } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Direct Owner Service',
    description: 'You work with me directly—no salespeople, no subcontractors. Just honest, personal service.',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed, bonded, and insured for your peace of mind and protection.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'As a one-person operation, I offer flexible hours and work around your schedule.',
  },
  {
    icon: DollarSign,
    title: 'Fair, Honest Pricing',
    description: 'No overhead, no upselling. You get quality work at prices that make sense.',
  },
  {
    icon: Award,
    title: 'Proven Experience',
    description: 'Years of hands-on experience from Austin, now bringing that expertise to El Paso.',
  },
  {
    icon: Heart,
    title: 'Work Guaranteed',
    description: 'I stand behind every job. If there\'s an issue, I\'ll make it right.',
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const itemWidth = container.offsetWidth * 0.85 + 16; // 85% width + gap
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(index, features.length - 1));
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-yellow-500">Me</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The advantages of working with a dedicated, one-person operation
          </p>
        </div>

        {/* Desktop: Features Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <div className="w-14 h-14 bg-yellow-500 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-gray-900" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Mobile: Horizontal Scroll Carousel */}
        <div className="md:hidden">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide pb-2"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-[85%] bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 snap-center"
                >
                  <div className="w-14 h-14 bg-yellow-500 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-gray-900" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Scroll indicators */}
          <div className="flex justify-center gap-1 mt-4">
            {features.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all ${
                  index === activeIndex ? 'w-6 bg-yellow-500' : 'w-1 bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">New</div>
            <div className="text-gray-300">to El Paso</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">5+ Years</div>
            <div className="text-gray-300">of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">1-on-1</div>
            <div className="text-gray-300">Personal Service</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">100%</div>
            <div className="text-gray-300">Dedicated to You</div>
          </div>
        </div>
      </div>
    </section>
  );
}
