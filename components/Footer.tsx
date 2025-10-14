'use client';

import { Phone, Mail, MapPin, Facebook, Instagram, Clock } from 'lucide-react';
import { FaYelp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-yellow-500">Loyal</span> Garage
            </h3>
            <p className="text-gray-400 mb-4">
              Professional garage door service in El Paso. New to the area, committed to earning your trust.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://yelp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Yelp"
              >
                <FaYelp size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('booking')}
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Garage Door Installation</li>
              <li>Garage Door Repair</li>
              <li>Opener Installation</li>
              <li>Maintenance Service</li>
              <li>Emergency Service</li>
              <li>Commercial Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="text-yellow-500 flex-shrink-0 mt-1" size={18} />
                <div>
                  <a href="tel:+19155550123" className="text-gray-400 hover:text-yellow-500 transition-colors">
                    (915) 555-0123
                  </a>
                  <p className="text-sm text-gray-500">24/7 Emergency</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-yellow-500 flex-shrink-0 mt-1" size={18} />
                <a href="mailto:info@loyalgarage.com" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  info@loyalgarage.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-yellow-500 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">
                  Serving El Paso, TX<br />
                  & Surrounding Areas
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-yellow-500 flex-shrink-0 mt-1" size={18} />
                <div className="text-gray-400 text-sm">
                  <p>Flexible Scheduling</p>
                  <p>Call to Arrange</p>
                  <p>Evenings & Weekends Available</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between text-center md:text-left">
            <div className="text-gray-400 text-sm">
              <p>&copy; {currentYear} Loyal Garage. All rights reserved.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <ul className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-yellow-500 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500 transition-colors">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA Bar */}
      <div className="bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-900 font-bold text-center sm:text-left">
              Ready to get started? Let&apos;s talk about your garage door needs.
            </p>
            <a
              href="tel:+19155550123"
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-bold transition-colors"
            >
              Call: (915) 555-0123
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
