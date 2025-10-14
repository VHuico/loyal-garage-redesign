'use client';

import { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Booking() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Schedule Your <span className="text-yellow-500">Service</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Book your appointment online or contact us directly
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            <p className="text-gray-600 mb-8">
              Ready to get started? Fill out the form or contact us directly. We&apos;ll respond within 1 hour during business hours.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                  <a href="tel:+19159554928" className="text-yellow-500 hover:text-yellow-600 text-lg font-semibold">
                    (915) 955-4928
                  </a>
                  <p className="text-sm text-gray-600">Call us anytime - 24/7 emergency service</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:loyalgarageatx@gmailm.com" className="text-yellow-500 hover:text-yellow-600 font-semibold">
                    loyalgarageatx@gmail.com
                  </a>
                  <p className="text-sm text-gray-600">We&apos;ll respond within 24 hours</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Service Area</h4>
                  <p className="text-gray-700 font-semibold">El Paso, TX & Surrounding Areas</p>
                  <p className="text-sm text-gray-600">25+ mile service radius</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Business Hours</h4>
                  <p className="text-gray-700">Monday - Friday: 7:00 AM - 7:00 PM</p>
                  <p className="text-gray-700">Saturday: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-700">Sunday: Emergency Only</p>
                  <p className="text-sm text-red-600 font-semibold mt-2">24/7 Emergency Service Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Calendly Booking Widget */}
          <div className="bg-gray-50 rounded-2xl p-4 md:p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Your Appointment</h3>

            {/* Calendly Inline Widget */}
            <div
              className="calendly-inline-widget rounded-lg overflow-hidden"
              data-url="https://calendly.com/victorhuicochea28/30min?primary_color=f5f56c"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
