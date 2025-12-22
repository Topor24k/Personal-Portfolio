export default function ServicesSection() {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Building responsive and modern websites using the latest technologies like React, Next.js, and Tailwind CSS.',
      features: ['Custom Web Applications', 'Responsive Design', 'Performance Optimization']
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces that provide excellent user experiences.',
      features: ['Wireframing & Prototyping', 'User Research', 'Visual Design']
    },
    {
      icon: '⚙️',
      title: 'Backend Development',
      description: 'Developing robust server-side applications and RESTful APIs with secure authentication.',
      features: ['API Development', 'Database Design', 'Server Configuration']
    },
    {
      icon: '📱',
      title: 'Mobile-First Development',
      description: 'Ensuring your web applications work flawlessly on all devices and screen sizes.',
      features: ['Responsive Layouts', 'Touch Optimization', 'Progressive Web Apps']
    },
    {
      icon: '🚀',
      title: 'Performance Optimization',
      description: 'Optimizing your web applications for speed, efficiency, and better user engagement.',
      features: ['Code Optimization', 'SEO Enhancement', 'Load Time Reduction']
    },
    {
      icon: '🛠️',
      title: 'Maintenance & Support',
      description: 'Providing ongoing maintenance, updates, and technical support for your projects.',
      features: ['Bug Fixes', 'Feature Updates', 'Technical Support']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services I Provide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{service.icon}</div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
