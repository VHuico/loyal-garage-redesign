'use client';

import { Award, Heart, Users, Wrench } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-yellow-500">Enrique Carrillo</span>
            </h2>

            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Hi, I&apos;m Enrique Carrillo, owner of Loyal Garage. I recently moved to El Paso from Austin,
              where I spent years mastering the garage door business.
            </p>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Starting fresh in a new city is both exciting and challenging. I left behind an
              established business in Austin to build something here in El Paso. Why? Because I
              believe in honest work, fair pricing, and the value of personal service.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              When you hire me, you&apos;re not getting a salesperson or a rotating crew—you get me, Enrique,
              someone who stakes his reputation on every job. I&apos;m licensed, insured, and
              ready to earn your trust one garage door at a time.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <Heart className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Honest Service</h3>
                  <p className="text-sm text-gray-600">No upselling, just what you need</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <Award className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Quality Work</h3>
                  <p className="text-sm text-gray-600">Austin-trained expertise</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <Users className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Personal Touch</h3>
                  <p className="text-sm text-gray-600">You work directly with me</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <Wrench className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Proven Skills</h3>
                  <p className="text-sm text-gray-600">Years of hands-on experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - About Me Photo */}
          <div className="relative">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/team/AboutMe.jpeg"
                alt="Enrique Carrillo - Owner of Loyal Garage"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Certifications Box */}
            <div className="absolute -bottom-6 left-4 right-4 md:-bottom-8 md:-left-8 md:right-auto bg-white p-6 rounded-xl shadow-xl md:max-w-xs">
              <h4 className="font-bold text-gray-900 mb-3">Credentials</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Texas State Licensed</li>
                <li>✓ Fully Insured & Bonded</li>
                <li>✓ Austin-Trained Professional</li>
                <li>✓ All Major Brands Serviced</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Brands We Service */}
        <div className="mt-24 pt-12 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            I Work With All Major Brands
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-gray-400">
            <div className="text-xl font-bold">LiftMaster</div>
            <div className="text-xl font-bold">Chamberlain</div>
            <div className="text-xl font-bold">Clopay</div>
            <div className="text-xl font-bold">Wayne Dalton</div>
            <div className="text-xl font-bold">Amarr</div>
            <div className="text-xl font-bold">Genie</div>
          </div>
          <p className="text-center text-gray-600 mt-6">
            ...and many more brands and models
          </p>
        </div>
      </div>
    </section>
  );
}
