export default function ToolsSection() {
  const tools = [
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
    { name: 'Next.js', icon: '▲', color: 'from-gray-700 to-gray-900' },
    { name: 'TypeScript', icon: 'TS', color: 'from-blue-500 to-blue-700' },
    { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-700' },
    { name: 'Git', icon: '📦', color: 'from-orange-500 to-red-600' },
  ];

  const stacks = [
    {
      name: 'MERN Stack',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      icon: '🔥',
      description: 'Full-stack JavaScript development'
    },
    {
      name: 'Next.js Stack',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
      icon: '⚡',
      description: 'Modern full-stack framework'
    },
    {
      name: 'JAMstack',
      technologies: ['JavaScript', 'APIs', 'Markup', 'Vercel'],
      icon: '🚀',
      description: 'Fast and secure web apps'
    }
  ];

  return (
    <section id="tools" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* My Favorite Tools */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My Favorite Tools
            </h2>
            <p className="text-xl text-gray-600">
              Technologies I love working with
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative text-center">
                  <div className="text-4xl mb-3">{tool.icon}</div>
                  <h3 className="font-semibold text-gray-800">{tool.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Favorite Stacks */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My Favorite Stacks
            </h2>
            <p className="text-xl text-gray-600">
              Complete technology ecosystems I specialize in
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {stacks.map((stack, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4 text-center">{stack.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                  {stack.name}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {stack.description}
                </p>
                <div className="space-y-2">
                  {stack.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="bg-white px-4 py-2 rounded-lg text-center text-gray-700 font-medium"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
