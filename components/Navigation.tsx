'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              <span className="text-yellow-500">Loyal</span> Garage
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-yellow-500 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-yellow-500 transition-colors font-medium"
            >
              Our Work
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-yellow-500 transition-colors font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="text-gray-700 hover:text-yellow-500 transition-colors font-medium"
            >
              Contact
            </button>
            <a
              href="tel:+19159554928"
              className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-bold transition-colors"
            >
              <Phone size={18} />
              <span className="hidden lg:inline">Call Now</span>
            </a>
            <button
              onClick={() => scrollToSection('booking')}
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-bold transition-colors"
            >
              Book Online
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-yellow-500 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-3 text-gray-700 hover:text-yellow-500 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left py-3 text-gray-700 hover:text-yellow-500 font-medium"
            >
              Our Work
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-3 text-gray-700 hover:text-yellow-500 font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="block w-full text-left py-3 text-gray-700 hover:text-yellow-500 font-medium"
            >
              Contact
            </button>
            <a
              href="tel:+19159554928"
              className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-bold transition-colors mt-4"
            >
              <Phone size={18} />
              Call Now
            </a>
            <button
              onClick={() => scrollToSection('booking')}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-bold transition-colors"
            >
              Book Online
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
