'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'I offer a comprehensive range of web development services including custom website development, web application development, UI/UX design, backend development, API integration, database design, and ongoing maintenance and support. I specialize in React, Next.js, and modern JavaScript frameworks.'
    },
    {
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines vary depending on complexity and requirements. A simple landing page might take 1-2 weeks, while a complex web application could take 2-3 months. I provide detailed timeline estimates during the initial consultation and keep you updated throughout the development process.'
    },
    {
      question: 'What is your development process?',
      answer: 'My development process includes: 1) Initial consultation and requirement gathering, 2) Planning and wireframing, 3) Design mockups for approval, 4) Development with regular progress updates, 5) Testing and quality assurance, 6) Deployment and launch, 7) Post-launch support and maintenance.'
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes! All projects include a support period (duration depends on the package). I offer bug fixes, minor updates, and technical support. For ongoing maintenance, I offer separate maintenance packages tailored to your needs.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'I primarily work with modern web technologies including React, Next.js, TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB, PostgreSQL, and various APIs. I stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.'
    },
    {
      question: 'Can you work with existing projects?',
      answer: 'Absolutely! I can work on existing projects for bug fixes, feature additions, performance optimization, or complete redesigns. I\'m experienced in working with various codebases and can quickly understand and improve existing systems.'
    },
    {
      question: 'How do you handle project communication?',
      answer: 'I believe in transparent and regular communication. I provide weekly progress updates, am available via email, and can schedule video calls as needed. I use project management tools to keep everything organized and ensure you\'re always informed about your project\'s status.'
    },
    {
      question: 'What information do you need to start a project?',
      answer: 'To get started, I need: 1) Your project goals and objectives, 2) Target audience information, 3) Design preferences or brand guidelines, 4) Feature requirements and functionality, 5) Any existing assets (logos, content, etc.), 6) Timeline and budget expectations. We\'ll discuss all details during our initial consultation.'
    },
    {
      question: 'Do you offer custom packages?',
      answer: 'Yes! While I have standard pricing packages, I understand that every project is unique. I\'m happy to create custom packages tailored to your specific needs and budget. Contact me to discuss your requirements and get a personalized quote.'
    },
    {
      question: 'How do payments work?',
      answer: 'For most projects, I require a 30-50% upfront payment to begin work, with the remaining balance due upon project completion. For larger projects, we can arrange milestone-based payments. I accept various payment methods and provide detailed invoices for all transactions.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about working with me
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-center justify-between"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions? */}
          <div className="mt-12 text-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="mb-6">
              Can't find the answer you're looking for? Feel free to reach out!
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
