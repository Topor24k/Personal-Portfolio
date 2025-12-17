export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-xl text-blue-600 font-semibold">
              Who is Kayeen Campana?
            </p>
          </div>

          {/* About Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Hello! I'm <span className="font-bold text-gray-900">Kayeen Campana</span>, 
                a passionate and dedicated Full Stack Web Developer currently pursuing my 
                Computer Science degree at the University of Mindanao. As a 3rd-year student, 
                I've immersed myself in the world of web development, constantly learning and 
                applying cutting-edge technologies to create meaningful digital experiences.
              </p>

              <p>
                My journey in web development has been fueled by curiosity and a genuine love 
                for problem-solving. I specialize in building modern, responsive web applications 
                using technologies like <span className="font-semibold text-blue-600">React</span>, 
                <span className="font-semibold text-blue-600"> Next.js</span>, and 
                <span className="font-semibold text-blue-600"> Tailwind CSS</span>, combined with 
                robust backend solutions.
              </p>

              <p>
                Beyond academics, I actively collaborate with real-world clients, startups, and 
                companies, transforming their ideas into functional, scalable applications. This 
                hands-on experience has taught me the importance of clean code, user-centric design, 
                and effective communication in delivering successful projects.
              </p>

              <p>
                I'm constantly exploring new technologies and best practices in web development, 
                believing that continuous learning is key to staying relevant in this ever-evolving 
                field. My goal is to create digital solutions that not only meet technical requirements 
                but also provide exceptional user experiences.
              </p>

              <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">3+</div>
                  <div className="text-sm text-gray-600">Years Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Projects Done</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Dedication</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
