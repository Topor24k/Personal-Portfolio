import Image from 'next/image';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      description: 'A modern e-commerce platform with real-time inventory management, secure payment processing, and admin dashboard.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
      image: '🛍️',
      link: '#',
      github: '#'
    },
    {
      title: 'Task Management App',
      category: 'Web Application',
      description: 'Collaborative task management tool with drag-and-drop interface, team collaboration features, and real-time updates.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      image: '📋',
      link: '#',
      github: '#'
    },
    {
      title: 'Portfolio Website',
      category: 'Frontend',
      description: 'Responsive portfolio website with smooth animations, dark mode support, and optimized performance.',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      image: '💼',
      link: '#',
      github: '#'
    },
    {
      title: 'Weather Dashboard',
      category: 'Frontend',
      description: 'Real-time weather application with location-based forecasts, interactive maps, and weather alerts.',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      image: '🌤️',
      link: '#',
      github: '#'
    },
    {
      title: 'Blog Platform',
      category: 'Full Stack',
      description: 'Content management system with markdown support, SEO optimization, and comment functionality.',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
      image: '✍️',
      link: '#',
      github: '#'
    },
    {
      title: 'Fitness Tracker',
      category: 'Mobile Web',
      description: 'Progressive web app for tracking workouts, nutrition, and fitness goals with offline capabilities.',
      technologies: ['React', 'PWA', 'IndexedDB'],
      image: '💪',
      link: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Latest Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my recent work and creative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-8xl">
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    View Project
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 text-center border-2 border-gray-300 text-gray-700 py-2 rounded-lg hover:border-gray-400 transition-colors font-medium"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
