'use client';

import { useState } from 'react';

export default function ReviewsSection() {
  const reviews = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      image: '👩‍💼',
      rating: 5,
      review: 'Kayeen delivered an exceptional e-commerce platform that exceeded our expectations. Professional, responsive, and highly skilled!',
      project: 'E-Commerce Platform'
    },
    {
      name: 'Michael Chen',
      role: 'Founder, CreativeHub',
      image: '👨‍💻',
      rating: 5,
      review: 'Working with Kayeen was a pleasure. The website is beautiful, fast, and exactly what we needed. Highly recommended!',
      project: 'Business Website'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager, InnovateCo',
      image: '👩‍🎨',
      rating: 5,
      review: 'Outstanding work on our web application. Kayeen understood our requirements perfectly and delivered a robust solution.',
      project: 'Web Application'
    },
    {
      name: 'David Park',
      role: 'Marketing Director, GrowthLab',
      image: '👨‍💼',
      rating: 5,
      review: 'The landing page Kayeen created boosted our conversion rate by 40%. Great attention to detail and user experience!',
      project: 'Landing Page'
    },
    {
      name: 'Lisa Thompson',
      role: 'Startup Founder',
      image: '👩‍🚀',
      rating: 5,
      review: 'Kayeen helped us launch our MVP quickly and efficiently. A talented developer who truly cares about client success.',
      project: 'MVP Development'
    },
    {
      name: 'James Wilson',
      role: 'Operations Manager',
      image: '👨‍🔧',
      rating: 5,
      review: 'Professional, timely, and excellent communication throughout the project. The dashboard system works flawlessly!',
      project: 'Admin Dashboard'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Impact of My Work
          </h2>
          <p className="text-xl text-gray-600">
            Client Reviews & Testimonials
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600 text-sm">Client Satisfaction</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600 text-sm">Projects Completed</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-gray-600 text-sm">Happy Clients</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">5.0</div>
            <div className="text-gray-600 text-sm">Average Rating</div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevReview}
                className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center"
                aria-label="Previous review"
              >
                ‹
              </button>
              
              <div className="flex-1 mx-8 text-center">
                <div className="text-6xl mb-4">{reviews[currentIndex].image}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {reviews[currentIndex].name}
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  {reviews[currentIndex].role}
                </p>
                <div className="flex justify-center mb-4">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-lg italic mb-4">
                  "{reviews[currentIndex].review}"
                </p>
                <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  {reviews[currentIndex].project}
                </div>
              </div>
              
              <button
                onClick={nextReview}
                className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center"
                aria-label="Next review"
              >
                ›
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* All Reviews Grid (Optional) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{review.image}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-sm">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
