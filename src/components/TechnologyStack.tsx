import React from 'react';
import { 
  ArrowRight,
  Code2,
  Smartphone,
  Cloud,
  Database
} from 'lucide-react';

/**
 * Technology Stack Section Component
 * Features: Neon glowing tech stack icons with hover effects
 * Organized by categories: Frontend, Backend, Mobile, Cloud
 */
const TechnologyStack: React.FC = () => {
  const enquireNowUrl = "https://forms.google.com/your-form-id"; // Replace with actual Google Form URL

  const techCategories = [
    {
      title: "Frontend Technologies",
      icon: <Code2 className="w-8 h-8" />,
      technologies: [
        { name: "React", logo: "⚛️", description: "Modern UI library" },
        { name: "Angular", logo: "🅰️", description: "Enterprise framework" },
        { name: "Vue.js", logo: "💚", description: "Progressive framework" },
        { name: "Next.js", logo: "▲", description: "Full-stack React" },
      ]
    },
    {
      title: "Backend Technologies", 
      icon: <Database className="w-8 h-8" />,
      technologies: [
        { name: "Node.js", logo: "📗", description: "JavaScript runtime" },
        { name: ".NET", logo: "🔷", description: "Microsoft framework" },
        { name: "Java", logo: "☕", description: "Enterprise language" },
        { name: "Python", logo: "🐍", description: "AI & automation" },
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      technologies: [
        { name: "React Native", logo: "📱", description: "Cross-platform" },
        { name: "iOS", logo: "🍎", description: "Native iOS apps" },
        { name: "Android", logo: "🤖", description: "Native Android apps" },
        { name: "Flutter", logo: "💙", description: "Google framework" },
      ]
    },
    {
      title: "Cloud Services",
      icon: <Cloud className="w-8 h-8" />,
      technologies: [
        { name: "AWS", logo: "☁️", description: "Amazon Web Services" },
        { name: "Azure", logo: "🔷", description: "Microsoft Cloud" },
        { name: "Google Cloud", logo: "🌥️", description: "Google Cloud Platform" },
        { name: "Firebase", logo: "🔥", description: "Google backend platform" },
      ]
    }
  ];

  return (
    <section id="technology" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Tech Grid Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 h-full">
            {[...Array(64)].map((_, i) => (
              <div
                key={i}
                className="border border-purple-400/20 animate-pulse"
                style={{
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random()}s`
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent leading-tight">
            Technology Stack
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We leverage cutting-edge technologies and frameworks to build scalable, robust, and future-ready solutions.
          </p>
        </div>

        {/* Technology Categories */}
        <div className="space-y-12 mb-16">
          {techCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="relative">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-purple-600/20 to-white/10 rounded-lg text-purple-400">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  {category.title}
                </h3>
              </div>

              {/* Technologies Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="group relative bg-gradient-to-br from-gray-900/80 to-black/60 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/60 transition-all duration-500 hover:scale-105"
                  >
                    {/* Neon Glow Effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/30 via-white/20 to-purple-600/30 blur-md animate-pulse" />
                    </div>

                    <div className="relative z-10">
                      {/* Tech Logo/Icon */}
                      <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                        {tech.logo}
                      </div>

                      {/* Tech Name */}
                      <h4 className="text-lg font-semibold text-white mb-2 text-center group-hover:text-purple-200 transition-colors duration-300">
                        {tech.name}
                      </h4>

                      {/* Description */}
                      <p className="text-gray-400 text-sm text-center leading-relaxed">
                        {tech.description}
                      </p>

                      {/* Glow Border Bottom */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent transition-all duration-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="bg-gradient-to-r from-purple-900/20 to-gray-900/40 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Additional Expertise</h3>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Our technology arsenal extends beyond core frameworks to include specialized tools and platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "GraphQL & REST APIs",
              "Docker & Kubernetes", 
              "AI/ML Frameworks",
              "Blockchain Development",
              "DevOps & CI/CD",
              "Microservices Architecture",
              "Progressive Web Apps",
              "IoT Integration"
            ].map((tech, index) => (
              <div
                key={index}
                className="group text-center p-4 bg-gradient-to-br from-gray-800/40 to-black/20 rounded-lg border border-purple-400/10 hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="w-2 h-2 bg-purple-400 rounded-full mx-auto mb-2 group-hover:animate-pulse" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a
            href={enquireNowUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
          >
            Discuss Your Tech Stack
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;