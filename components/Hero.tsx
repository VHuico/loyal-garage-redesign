'use client';

import { Phone, Clock, Shield, Award } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-yellow-500/10 rounded-full">
              <span className="text-yellow-600 font-semibold text-sm">New to El Paso • Experienced in Service</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Professional <span className="text-yellow-500">Garage Door Service</span><br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-gray-600 font-semibold">You Work Directly With Me</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Bringing years of experience from Austin to serve El Paso with honest, quality work
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <div className="flex items-center gap-2 text-gray-700">
                <Clock className="text-yellow-500" size={20} />
                <span className="font-medium">Flexible Scheduling</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Shield className="text-yellow-500" size={20} />
                <span className="font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Award className="text-yellow-500" size={20} />
                <span className="font-medium">Austin-Trained Pro</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('booking')}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Book Online Now
              </button>
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Phone size={22} />
                (915) 955-4928
              </a>
            </div>

            {/* Emergency Notice */}
            <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
              <p className="text-blue-700 font-semibold">
                Quick Response • Personal Service
              </p>
              <p className="text-blue-600 text-sm">
                When you call, you talk to me. No middlemen, no runaround—just honest service.
              </p>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero/hero.jpeg"
                alt="Professional garage door installation by Enrique Carrillo"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 0vw, 50vw"
              />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold text-yellow-500">Quality</div>
              <div className="text-gray-600 font-medium">Over Quantity</div>
            </div>

            <div className="absolute -top-8 -right-8 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold text-yellow-500">Direct</div>
              <div className="text-gray-600 font-medium">Owner Contact</div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm mb-6">BUILDING MY REPUTATION IN EL PASO</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">Licensed</p>
              <p className="text-sm text-gray-600">Texas State License</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">Insured</p>
              <p className="text-sm text-gray-600">Fully Protected</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">Personal</p>
              <p className="text-sm text-gray-600">One-on-One Service</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">Warranty</p>
              <p className="text-sm text-gray-600">Work Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
