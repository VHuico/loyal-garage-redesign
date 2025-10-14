'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How much does garage door repair cost?',
    answer: 'Repair costs vary depending on the issue. Basic repairs like spring replacement start at $149, while more complex repairs may cost more. We provide free estimates and upfront pricing before starting any work.',
  },
  {
    question: 'Do you offer same-day service?',
    answer: 'Yes! We offer same-day service for most repairs in the El Paso area, subject to availability. For emergency situations, we provide 24/7 service to get your garage door working as quickly as possible.',
  },
  {
    question: 'How long does a garage door installation take?',
    answer: 'Most residential garage door installations are completed in 4-6 hours. Commercial installations may take longer depending on the size and complexity. We\'ll provide a specific timeline during your free consultation.',
  },
  {
    question: 'What brands do you work with?',
    answer: 'We service all major garage door brands including LiftMaster, Chamberlain, Clopay, Wayne Dalton, Amarr, Genie, and many more. We\'re certified to work on both residential and commercial systems.',
  },
  {
    question: 'Is your work guaranteed?',
    answer: 'Absolutely! All our work comes with a 1-year warranty on labor and parts. We stand behind our service 100% and will make it right if there are any issues.',
  },
  {
    question: 'Do you service commercial properties?',
    answer: 'Yes! We provide comprehensive commercial garage door services including installation, repair, and maintenance for businesses, warehouses, and industrial facilities throughout El Paso.',
  },
  {
    question: 'What should I do if my garage door won\'t close?',
    answer: 'First, check if something is blocking the sensors at the bottom of the door. If that\'s not the issue, don\'t try to force it closed. Call us immediately for emergency service - we\'re available 24/7 to help.',
  },
  {
    question: 'How often should I have my garage door serviced?',
    answer: 'We recommend professional maintenance at least once a year to ensure safe and smooth operation. Regular tune-ups can prevent costly repairs and extend the life of your garage door system.',
  },
  {
    question: 'Do you offer financing options?',
    answer: 'Yes, we offer flexible financing options for larger projects like new installations. Contact us to learn more about our payment plans and current promotions.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes! Loyal Garage is fully licensed, bonded, and insured. We\'re also a BBB accredited business with an A+ rating, giving you complete peace of mind.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-yellow-500">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our garage door services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 text-yellow-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            We&apos;re here to help! Contact us and we&apos;ll be happy to answer any questions you have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19155550123"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-3 rounded-lg font-bold transition-all inline-block"
            >
              Call (915) 555-0123
            </a>
            <a
              href="#booking"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-bold transition-all inline-block"
            >
              Send a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
