import React, { useEffect } from "react";
import { Wrench, Clock } from "lucide-react";

const Maintenance: React.FC = () => {
  // Prevent scrolling when maintenance is active
  useEffect(() => {
    document.body.style.overflow = "hidden";   // disable scroll
    return () => {
      document.body.style.overflow = "auto";   // re-enable when unmounted
    };
  }, []);

  return (
    <section className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 overflow-hidden">
      {/* Animated Background Glows */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400/15 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Icon with Glow */}
        <div className="mb-6 flex justify-center">
          <div className="p-6 rounded-full bg-gradient-to-tr from-purple-600 to-purple-800 shadow-lg shadow-purple-500/40 animate-bounce">
            <Wrench className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.9)] mb-4">
          We’ll Be Back Soon!
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
          Our site is currently down for scheduled maintenance.  
          We’re working hard to improve your experience and will be back online shortly.
        </p>

        {/* Status Indicator */}
        <div className="flex justify-center items-center gap-3 text-purple-400 font-semibold text-lg animate-pulse">
          <Clock className="w-6 h-6" />
          <span>Expected Downtime: Very Short</span>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} NexoraAI — All rights reserved.
      </div>
    </section>
  );
};

export default Maintenance;
