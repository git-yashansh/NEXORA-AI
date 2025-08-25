import React from 'react';
import { 
  FileText, 
  Palette, 
  Code, 
  Rocket,
  ArrowRight,
  CheckCircle 
} from 'lucide-react';

/**
 * Working Process Section Component
 * Features: Step-by-step process visualization with animations
 * Planning → Design → Execute → Deliver workflow
 */
const Process: React.FC = () => {
  const enquireNowUrl = "https://forms.google.com/your-form-id"; // Replace with actual Google Form URL

  const processSteps = [
    {
      step: "01",
      title: "Planning",
      description: "We begin with comprehensive analysis of your requirements, market research, and strategic planning to ensure project success.",
      icon: <FileText className="w-12 h-12" />,
      details: [
        "Requirement Analysis",
        "Market Research", 
        "Resource Planning",
        "Timeline Definition"
      ]
    },
    {
      step: "02", 
      title: "Design",
      description: "Our design team creates intuitive user experiences and stunning visual interfaces that align with your brand identity.",
      icon: <Palette className="w-12 h-12" />,
      details: [
        "UI/UX Design",
        "Prototype Creation",
        "User Testing",
        "Design Refinement"
      ]
    },
    {
      step: "03",
      title: "Execute", 
      description: "Expert development team brings your vision to life using cutting-edge technologies and best practices.",
      icon: <Code className="w-12 h-12" />,
      details: [
        "Agile Development",
        "Quality Assurance",
        "Code Reviews",
        "Testing & Debugging"
      ]
    },
    {
      step: "04",
      title: "Deliver",
      description: "We deploy your solution with comprehensive support, training, and ongoing maintenance to ensure success.",
      icon: <Rocket className="w-12 h-12" />,
      details: [
        "Deployment",
        "User Training",
        "Support & Maintenance", 
        "Performance Monitoring"
      ]
    }
  ];

  return (
    <section id="process" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/80 to-black">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-l from-white/5 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Our Working Process
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A proven methodology that ensures successful project delivery through systematic planning, execution, and support.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-purple-400/60 to-transparent z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="w-4 h-4 text-purple-400" />
                  </div>
                </div>
              )}

              {/* Step Card */}
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/60 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 group">
                {/* Electric Border Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 via-white/10 to-purple-600/20 blur-sm animate-pulse" />
                </div>

                <div className="relative z-10">
                  {/* Step Number */}
                  <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent mb-4 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-gradient-to-r from-purple-600/20 to-white/10 rounded-xl text-purple-400 group-hover:text-white transition-colors duration-300">
                      {step.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-white mb-4 text-center group-hover:text-purple-200 transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 text-center leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span className="text-gray-300 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Benefits */}
        <div className="bg-gradient-to-r from-purple-900/20 to-gray-900/40 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Why Our Process Works</h3>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Our systematic approach ensures transparency, quality, and timely delivery while keeping you involved at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600/20 to-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">98%</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Success Rate</h4>
              <p className="text-gray-400 text-sm">Projects delivered successfully</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600/20 to-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">24/7</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Support</h4>
              <p className="text-gray-400 text-sm">Continuous assistance available</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600/20 to-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">100+</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Projects</h4>
              <p className="text-gray-400 text-sm">Successfully completed</p>
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
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;