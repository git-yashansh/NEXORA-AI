import React, { useEffect, useRef } from "react";
import { Quote, ArrowRight } from "lucide-react";
import ProfileCard from "./ProfileCard";

const CEO: React.FC = () => {
  const enquireNowUrl = "https://forms.google.com/your-form-id";
  const glowRef = useRef<HTMLDivElement>(null);

  const handleContactClick = () => {
    window.open(enquireNowUrl, "_blank");
  };

  // Electric glow particles around the card
  useEffect(() => {
    const glowContainer = glowRef.current;
    if (!glowContainer) return;

    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className =
        "absolute w-1.5 h-1.5 bg-purple-400 rounded-full opacity-70 animate-glow";
      particle.style.left = `${50 + Math.random() * 100 - 50}%`;
      particle.style.top = `${50 + Math.random() * 100 - 50}%`;
      particle.style.animationDuration = `${1 + Math.random() * 1.5}s`;
      glowContainer.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 2500);
    };

    const interval = setInterval(createParticle, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="ceo"
      className="py-24 relative overflow-hidden bg-gradient-to-br from-black via-gray-900/90 to-purple-900/20"
    >
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-transparent rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-l from-pink-500/10 to-transparent rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Leadership & Vision
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the visionary leader driving NexoraAI's mission to transform
            businesses through innovative AI-powered solutions.
          </p>
        </div>

        {/* CEO Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* CEO ProfileCard with glow */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              ref={glowRef}
              className="absolute inset-0 z-0 pointer-events-none"
            ></div>
            <ProfileCard
              avatarUrl="/CEO.jpg"
              name="Kumar Yashansh"
              title="CEO & Founder"
              handle="KUMAR YASHANSH"
              status="Available for consultation"
              contactText="Connect"
              showUserInfo
              enableTilt
              onContactClick={handleContactClick}
              className="w-full max-w-md h-[32rem]"
            />
          </div>

          {/* CEO Message */}
          <div className="space-y-6">
            <div className="flex justify-start">
              <div className="p-3 bg-gradient-to-r from-purple-600/20 to-white/10 rounded-lg">
                <Quote className="w-8 h-8 text-purple-400" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900/60 to-purple-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8">
              <blockquote className="text-lg text-gray-300 leading-relaxed mb-6 italic">
                "At NexoraAI, we believe that the future belongs to
                organizations that embrace intelligent automation and
                AI-driven innovation. Our mission is to democratize access to
                cutting-edge technology solutions, empowering businesses of all
                sizes to compete in the digital age."
              </blockquote>

              <blockquote className="text-lg text-gray-300 leading-relaxed mb-6 italic">
                "We don't just build software; we craft digital experiences that
                transform how businesses operate, engage with customers, and
                drive growth. Every solution we deliver is backed by our
                commitment to excellence, innovation, and long-term partnership."
              </blockquote>

              <div className="pt-4 border-t border-purple-400/20">
                <p className="text-gray-300 leading-relaxed">
                  With over a decade of experience in enterprise technology and
                  AI, Yashansh leads NexoraAI's vision to create intelligent
                  solutions that adapt, learn, and evolve with your business
                  needs. His passion for innovation and commitment to client
                  success drives our team's dedication to delivering exceptional
                  results.
                </p>
              </div>
            </div>

            {/* Vision Points */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white mb-4">
                Our Leadership Principles
              </h4>
              <div className="space-y-3">
                {[
                  "Innovation-first approach to every challenge",
                  "Client success as our primary measure of achievement",
                  "Continuous learning and adaptation in rapidly evolving tech landscape",
                  "Building long-term partnerships, not just project deliveries",
                ].map((principle, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 animate-pulse" />
                    <span className="text-gray-300">{principle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href={enquireNowUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-white to-gray-200 text-black px-6 py-3 rounded-full font-semibold text-lg hover:from-gray-100 hover:to-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule a Leadership Discussion
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Glow particle animation */}
      <style>{`
        @keyframes glow {
          0% { transform: translate(0,0) scale(0.5); opacity: 0.3; }
          50% { transform: translate(20px, -20px) scale(1); opacity: 0.7; }
          100% { transform: translate(0,0) scale(0.5); opacity: 0.3; }
        }
        .animate-glow {
          animation: glow 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default CEO;
