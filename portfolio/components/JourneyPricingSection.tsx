export default function JourneyPricingSection() {
  const journey = [
    {
      year: '2023',
      title: 'Started Computer Science',
      institution: 'University of Mindanao',
      description: 'Began my journey in Computer Science, discovering my passion for web development.',
      icon: '🎓'
    },
    {
      year: '2023-2024',
      title: 'First Year Achievements',
      institution: 'Academic Excellence',
      description: 'Mastered programming fundamentals, achieved high grades, and started building personal projects.',
      icon: '🏆'
    },
    {
      year: '2024-2025',
      title: 'Professional Experience',
      institution: 'Client Collaborations',
      description: 'Started working with real clients, startups, and companies, applying academic knowledge to real-world projects.',
      icon: '💼'
    },
    {
      year: '2025-Present',
      title: 'Third Year Excellence',
      institution: 'Advanced Development',
      description: 'Specializing in full-stack development, leading projects, and mentoring junior students.',
      icon: '🚀'
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$500',
      duration: 'Starting from',
      description: 'Perfect for small projects and landing pages',
      features: [
        'Responsive Design',
        'Up to 5 Pages',
        'Basic SEO',
        'Mobile Optimization',
        '1 Month Support',
        'Source Code Included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,500',
      duration: 'Starting from',
      description: 'Ideal for business websites and web applications',
      features: [
        'Everything in Basic',
        'Up to 15 Pages',
        'Advanced SEO',
        'CMS Integration',
        'API Integration',
        '3 Months Support',
        'Performance Optimization',
        'Analytics Setup'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      duration: 'Contact for pricing',
      description: 'For complex applications and large-scale projects',
      features: [
        'Everything in Professional',
        'Unlimited Pages',
        'Custom Features',
        'Database Design',
        'User Authentication',
        '6 Months Support',
        'Dedicated Development',
        'Priority Support'
      ],
      popular: false
    }
  ];

  return (
    <section id="journey-pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Academic Journey */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My Academic and Professional Journey
            </h2>
            <p className="text-xl text-gray-600">
              From student to professional developer
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {journey.map((item, index) => (
              <div key={index} className="relative pb-12 last:pb-0">
                {index !== journey.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-blue-200"></div>
                )}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-2xl z-10">
                    {item.icon}
                  </div>
                  <div className="flex-grow bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-blue-600 font-bold mb-1">{item.year}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <div className="text-purple-600 font-semibold mb-3">
                      {item.institution}
                    </div>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Model */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My Pricing Model
            </h2>
            <p className="text-xl text-gray-600">
              Transparent and flexible pricing for every project size
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white transform scale-105 shadow-2xl'
                    : 'bg-white text-gray-900 shadow-lg'
                } hover:shadow-2xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                
                <div className="mb-4">
                  <div className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-blue-600'}`}>
                    {plan.price}
                  </div>
                  <div className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.duration}
                  </div>
                </div>
                
                <p className={`mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className={`w-6 h-6 mr-2 flex-shrink-0 ${
                          plan.popular ? 'text-green-300' : 'text-green-500'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className={plan.popular ? 'text-white' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
