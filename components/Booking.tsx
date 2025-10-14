'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // TODO: Replace with your actual Formspree endpoint
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          time: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

            {/* Calendly Alternative */}
            <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded">
              <p className="text-blue-900 font-semibold mb-2">💡 Pro Tip:</p>
              <p className="text-blue-800 text-sm">
                Consider integrating <strong>Calendly</strong> (free tier available) for real-time appointment booking.
                Simply embed their widget below the form or replace the form entirely!
              </p>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Service</h3>

            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                <p className="text-green-800 font-semibold">Thank you! We&apos;ll contact you shortly.</p>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <p className="text-red-800 font-semibold">Something went wrong. Please call us instead.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="(915) 955-4928"
                />
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="">Select a service...</option>
                  <option value="installation">New Installation</option>
                  <option value="repair">Repair Service</option>
                  <option value="opener">Opener Installation/Repair</option>
                  <option value="maintenance">Maintenance/Tune-up</option>
                  <option value="emergency">Emergency Service</option>
                  <option value="commercial">Commercial Service</option>
                  <option value="other">Other/Not Sure</option>
                </select>
              </div>

              {/* Date */}
              <div>
                <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              {/* Time */}
              <div>
                <label htmlFor="time" className="block text-gray-700 font-semibold mb-2">
                  Preferred Time
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="">Select time...</option>
                  <option value="morning">Morning (7 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                  <option value="evening">Evening (5 PM - 7 PM)</option>
                  <option value="asap">As soon as possible</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your garage door issue or project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 py-4 rounded-lg font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : 'Request Service'}
              </button>

              <p className="text-sm text-gray-600 text-center">
                By submitting this form, you agree to be contacted by Loyal Garage regarding your service request.
              </p>
            </form>

            {/* Formspree Setup Note */}
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
              <p className="text-yellow-900 font-semibold text-sm mb-1">⚠️ Setup Required:</p>
              <p className="text-yellow-800 text-sm">
                Sign up at <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="underline">formspree.io</a> (free tier: 50 submissions/month)
                and replace <code className="bg-yellow-100 px-1 rounded">YOUR_FORM_ID</code> in the code with your actual form ID.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
