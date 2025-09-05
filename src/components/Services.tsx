import React from 'react';
import { 
  Smartphone, 
  BarChart3, 
  Zap, 
  Users, 
  Palette, 
  Server, 
  Database,
  ArrowRight
} from 'lucide-react';
import Particles from './Particles';

/**
 * Services Section Component
 * Features: ElectricBorder cards with service offerings
 * Black/white/purple theme with glowing hover effects
 */
const Services: React.FC = () => {
  const enquireNowUrl = "https://forms.google.com/your-form-id"; // Replace with actual Google Form URL

  const services = [
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications built with cutting-edge technology and AI integration for iOS and Android platforms.",
      features: ["Native iOS & Android", "Cross-Platform Solutions", "AI Integration", "Cloud Connectivity"]
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Data & Analytics",
      description: "Transform raw data into actionable insights with advanced analytics, machine learning models, and real-time reporting solutions Data & Analytics",
      features: ["Machine Learning Models", "Real-time Analytics", "Business Intelligence", "Predictive Analytics"]
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Digital Transformation",
      description: "Comprehensive digital transformation services to modernize your business processes and accelerate growth through technology.",
      features: ["Process Automation", "Cloud Migration", "Legacy Modernization", "Digital Strategy"]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "IT & Business Consulting",
      description: "Strategic consulting services to optimize your technology infrastructure and align IT with business objectives.",
      features: ["Technology Strategy", "Architecture Design", "Performance Optimization", "Cost Reduction"]
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that create intuitive, engaging, and accessible digital experiences across all platforms.",
      features: ["User Research", "Prototype Design", "Accessibility Standards", "Design Systems"]
    },
    {
      icon: <Server className="w-12 h-12" />,
      title: "IT Infrastructure Services",
      description: "Robust and scalable IT infrastructure solutions including cloud services, security, and network management.",
      features: ["Cloud Infrastructure", "Network Security", "System Monitoring", "Disaster Recovery"]
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "CRM Solutions",
      description: "Custom CRM systems powered by AI to enhance customer relationships, automate sales processes, and drive business growth.",
      features: ["Sales Automation", "Customer Analytics", "Lead Management", "Integration Support"]
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        {/* 3D Particles Background */}
        <Particles
          particleCount={80}
          particleSpread={6}
          speed={0.03}
          particleColors={["#a855f7", "#ffffff", "#c084fc"]}
          moveParticlesOnHover={true}
          particleHoverFactor={0.2}
          alphaParticles={true}
          particleBaseSize={40}
          sizeRandomness={0.6}
          cameraDistance={25}
          disableRotation={false}
        />
        
        {/* Particle Animation */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/40 rounded-full animate-pulse"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions powered by AI to transform your business and drive innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col h-full bg-gradient-to-br from-gray-900/80 to-black/60 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Electric Border Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 via-white/10 to-purple-600/20 blur-sm animate-pulse" />
              </div>

              {/* Floating Particles (hover only) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-purple-400 rounded-full animate-bounce"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${20 + i * 20}%`,
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: '2s'
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Top content */}
                <div className="flex-grow">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-gradient-to-r from-purple-600/20 to-white/10 rounded-xl text-purple-400 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-purple-200 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 text-center leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features (always visible) */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-center gap-2 transition-all duration-500"
                        style={{ transitionDelay: `${featureIndex * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons always aligned at bottom */}
                <div className="space-y-3 mt-auto">
                  <button className="w-full flex items-center justify-center gap-2 text-purple-400 hover:text-white border border-purple-400/40 hover:border-purple-400 rounded-lg py-3 px-4 transition-all duration-300 hover:bg-purple-400/10">
                    Learn More
                  </button>
                  
                  <a
                    href={enquireNowUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg shadow-purple-500/25"
                  >
                    Enquire Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a
            href={enquireNowUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-white to-gray-200 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-gray-100 hover:to-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started with NexoraAI
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
