import React from 'react';
import { 
  Shield, 
  TrendingUp, 
  Lightbulb, 
  Award,
  Clock,
  Users,
  Zap,
  Globe,
  ArrowRight
} from 'lucide-react';
import CurvedLoop from './CurvedLoop';
import Particles from './Particles';

/**
 * Why Choose NexoraAI Section Component
 * Features: Reliability, scalability, innovation highlights
 * AI particle effects and enterprise-ready solutions showcase
 */
const WhyChooseUs: React.FC = () => {
  const enquireNowUrl = "https://forms.google.com/your-form-id"; // Replace with actual Google Form URL

  const advantages = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Enterprise Reliability",
      description: "Built for scale with 99.9% uptime guarantee, robust security protocols, and enterprise-grade infrastructure that grows with your business.",
      stats: "99.9% Uptime"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Proven Scalability",
      description: "Our solutions are designed to handle millions of users and massive data loads while maintaining optimal performance and user experience.",
      stats: "10M+ Users Supported"
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Cutting-Edge Innovation",
      description: "Stay ahead with AI-powered solutions, machine learning integration, and the latest technological advancements in your industry.",
      stats: "50+ AI Models"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Industry Recognition",
      description: "Award-winning solutions recognized by industry leaders, with certified expertise and proven track record of successful implementations.",
      stats: "15+ Awards"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Rapid Deployment",
      description: "Get to market faster with our agile development methodology, pre-built components, and streamlined deployment processes.",
      stats: "50% Faster Launch"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Expert Team",
      description: "Work with certified professionals, senior architects, and AI specialists with extensive experience in enterprise solutions.",
      stats: "100+ Experts"
    }
  ];

  const keyFeatures = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered Automation",
      description: "Intelligent automation that learns and adapts to your business processes."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Accessibility",
      description: "Multi-language, multi-region support with 24/7 availability worldwide."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Bank-Grade Security",
      description: "Advanced encryption, compliance standards, and security monitoring."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performance Analytics",
      description: "Real-time insights and predictive analytics for data-driven decisions."
    }
  ];

  return (
    <section id="why-choose" className="py-20 relative overflow-hidden">
      {/* Background with AI Particle Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/90 to-black">
        {/* 3D Particles Background */}
        <Particles
          particleCount={120}
          particleSpread={10}
          speed={0.06}
          particleColors={["#a855f7", "#ffffff", "#c084fc", "#8b5cf6"]}
          moveParticlesOnHover={true}
          particleHoverFactor={0.5}
          alphaParticles={true}
          particleBaseSize={70}
          sizeRandomness={1.0}
          cameraDistance={22}
          disableRotation={false}
        />
        
        {/* Curved Loop Text Animation */}
        <CurvedLoop
          marqueeText="Why Choose NexoraAI • Enterprise Solutions • Innovation • Reliability • Scalability • "
          speed={1.2}
          curveAmount={250}
          direction="right"
          interactive={false}
        />
        
        {/* AI Network Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 400">
            {[...Array(20)].map((_, i) => (
              <g key={i}>
                <circle
                  cx={Math.random() * 400}
                  cy={Math.random() * 400}
                  r="2"
                  fill="currentColor"
                  className="text-purple-400 animate-pulse"
                  style={{
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random()}s`
                  }}
                />
                {i > 0 && (
                  <line
                    x1={Math.random() * 400}
                    y1={Math.random() * 400}
                    x2={Math.random() * 400}
                    y2={Math.random() * 400}
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-purple-400/30"
                  />
                )}
              </g>
            ))}
          </svg>
        </div>
        
        {/* Floating AI Particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-purple-400/40 rounded-full animate-bounce"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 2}s`,
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
            Why Choose NexoraAI?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Partner with us for enterprise-grade solutions that deliver exceptional results, scalability, and innovation for your digital transformation journey.
          </p>
        </div>

        {/* Main Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/80 to-black/60 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 hover:border-purple-400/60 transition-all duration-500 hover:scale-105"
            >
              {/* Electric Border Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 via-white/10 to-purple-600/20 blur-sm animate-pulse" />
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gradient-to-r from-purple-600/20 to-white/10 rounded-xl text-purple-400 group-hover:text-white transition-colors duration-300">
                    {advantage.icon}
                  </div>
                </div>

                {/* Stats */}
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
                    {advantage.stats}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-purple-200 transition-colors duration-300">
                  {advantage.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-center leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Features Section */}
        <div className="bg-gradient-to-r from-purple-900/20 to-gray-900/40 backdrop-blur-sm border border-purple-400/20 rounded-3xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Enterprise-Ready Features</h3>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Built-in enterprise capabilities that ensure your solution is production-ready from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-gray-800/40 to-black/20 rounded-xl border border-purple-400/10 hover:border-purple-400/40 transition-all duration-300 group"
              >
                <div className="p-3 bg-gradient-to-r from-purple-600/20 to-white/10 rounded-lg text-purple-400 inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {[
            { metric: "500+", label: "Projects Delivered" },
            { metric: "98%", label: "Client Satisfaction" },
            { metric: "24/7", label: "Support Available" },
            { metric: "5+", label: "Years Experience" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent mb-2">
                {stat.metric}
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a
            href={enquireNowUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
          >
            Partner with NexoraAI
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;