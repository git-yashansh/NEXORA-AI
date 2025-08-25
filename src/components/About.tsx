import React from 'react';
import { Target, Eye, Brain, ArrowRight } from 'lucide-react';
import Particles from './Particles';

/**
 * About Section Component
 * Features: Company vision, mission, AI-driven approach
 * Particle background animation with purple/white accents
 */
const About: React.FC = () => {
  const enquireNowUrl = "https://forms.google.com/your-form-id"; // Replace with actual Google Form URL

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black">
        {/* 3D Particles Background */}
        <Particles
          particleCount={100}
          particleSpread={8}
          speed={0.05}
          particleColors={["#a855f7", "#ffffff", "#c084fc"]}
          moveParticlesOnHover={true}
          particleHoverFactor={0.3}
          alphaParticles={true}
          particleBaseSize={60}
          sizeRandomness={0.8}
          cameraDistance={20}
          disableRotation={false}
        />
        
        {/* Subtle particle animation */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-ping"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            About NexoraAI
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Leading the future of technology with innovative AI-powered solutions that transform businesses and drive digital excellence.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-gray-900/80 to-purple-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-600/20 to-white/10 rounded-lg">
                  <Eye className="w-8 h-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Our Vision</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To be the global leader in AI-powered technology solutions, empowering businesses 
                    to achieve unprecedented growth through innovation, automation, and digital transformation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900/80 to-purple-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-600/20 to-white/10 rounded-lg">
                  <Target className="w-8 h-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Our Mission</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To deliver cutting-edge technology solutions that drive business success, enhance 
                    operational efficiency, and create sustainable competitive advantages for our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Approach */}
          <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/50 backdrop-blur-sm border border-purple-400/30 rounded-3xl p-8 relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent rounded-3xl blur-xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-r from-purple-600/30 to-white/20 rounded-xl">
                  <Brain className="w-10 h-10 text-purple-400" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  AI-Driven Approach
                </h3>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                At NexoraAI, we harness the power of artificial intelligence and machine learning 
                to create intelligent solutions that adapt, learn, and evolve with your business needs. 
                Our expertise spans across multiple domains, ensuring comprehensive digital transformation 
                that positions your organization for future success.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <span className="text-gray-300">Advanced Machine Learning Integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <span className="text-gray-300">Intelligent Automation Solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  <span className="text-gray-300">Predictive Analytics & Insights</span>
                </div>
              </div>
            </div>
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
            Start Your Digital Transformation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;