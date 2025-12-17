export default function BlogsSection() {
  const blogs = [
    {
      title: 'Getting Started with Next.js 14',
      excerpt: 'Learn how to build modern web applications with Next.js 14 and its powerful new features including Server Components and improved performance.',
      date: 'Dec 5, 2025',
      category: 'Tutorial',
      readTime: '5 min read',
      image: '📝',
      link: '#'
    },
    {
      title: 'Mastering Tailwind CSS',
      excerpt: 'Discover best practices and advanced techniques for building beautiful, responsive designs with Tailwind CSS utility classes.',
      date: 'Nov 28, 2025',
      category: 'Design',
      readTime: '8 min read',
      image: '🎨',
      link: '#'
    },
    {
      title: 'TypeScript Tips for React Developers',
      excerpt: 'Enhance your React applications with TypeScript. Learn typing patterns, best practices, and common pitfalls to avoid.',
      date: 'Nov 20, 2025',
      category: 'Development',
      readTime: '10 min read',
      image: '⚛️',
      link: '#'
    },
    {
      title: 'Building Scalable Web Applications',
      excerpt: 'Architecture patterns and strategies for creating web applications that scale efficiently as your user base grows.',
      date: 'Nov 15, 2025',
      category: 'Architecture',
      readTime: '12 min read',
      image: '🏗️',
      link: '#'
    },
    {
      title: 'API Design Best Practices',
      excerpt: 'Design RESTful APIs that are intuitive, maintainable, and performant. Learn industry standards and common patterns.',
      date: 'Nov 8, 2025',
      category: 'Backend',
      readTime: '7 min read',
      image: '🔌',
      link: '#'
    },
    {
      title: 'Web Performance Optimization',
      excerpt: 'Practical techniques to improve your website speed, reduce load times, and provide better user experiences.',
      date: 'Nov 1, 2025',
      category: 'Performance',
      readTime: '9 min read',
      image: '⚡',
      link: '#'
    }
  ];

  return (
    <section id="blogs" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blogs & Articles
          </h2>
          <p className="text-xl text-gray-600">
            Sharing knowledge and insights from my development journey
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Blog Image/Icon */}
              <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-7xl">
                {blog.image}
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                    {blog.category}
                  </span>
                  <span className="text-sm text-gray-500">{blog.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                  <a href={blog.link}>{blog.title}</a>
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{blog.date}</span>
                  <a
                    href={blog.link}
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
}
