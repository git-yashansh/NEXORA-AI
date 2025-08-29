// import React, { useRef, useEffect, useState } from "react";
// import { ArrowRight } from "lucide-react";
// import CurvedLoop from "./CurvedLoop";
// import Particles from "./Particles";
// import ElectricBorder from "./ElectricBorder"; // Make sure this file exists

// const Hero: React.FC = () => {
//   const enquireNowUrl = "https://forms.google.com/your-form-id";
//   const textRef = useRef<HTMLHeadingElement>(null);
//   const [textDims, setTextDims] = useState({ width: 0, height: 0 });
//   const textParticleColors = ["#a855f7", "#c084fc", "#ffffff", "#8b5cf6", "#facc15", "#34d399"];

//   const scrollToWhyChoose = () => {
//     document.getElementById("why-choose")?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     if (textRef.current) {
//       const { offsetWidth, offsetHeight } = textRef.current;
//       setTextDims({ width: offsetWidth, height: offsetHeight });
//     }
//   }, []);

//   const logoDisplaySize = 115; // Logo size
//   const orbitOffsetX = -5;
//   const orbitOffsetY = -14;

//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900">
//         <Particles
//           particleCount={1000}
//           particleSpread={12}
//           speed={0.10}
//           particleColors={["#a855f7", "#ffffff", "#c084fc", "#8b5cf6"]}
//           moveParticlesOnHover={true}
//           particleHoverFactor={0.9}
//           alphaParticles={true}
//           particleBaseSize={120}
//           sizeRandomness={1.2}
//           cameraDistance={18}
//           disableRotation={false}
//         />

//         <CurvedLoop
//           marqueeText="NexoraAI • AI-Powered Solutions • Digital Transformation • Kumar yashansh • Technology • "
//           speed={1.6}
//           curveAmount={300}
//           direction="left"
//           interactive={false}
//           style={{
//             position: 'absolute',
//             top: '45%',          // keeps it nicely placed
//             left: 0,
//             right: 0,
//             opacity: 0.99,       // slightly brighter than before
//             pointerEvents: 'none',
//             zIndex: 5,
//             color: '#d8b4fe', // slightly brighter but soft lavender
//             textShadow: '0 0 4px rgba(216,180,254,0.5), 0 0 6px rgba(216,180,254,0.3)' // subtle glow
//             }}
//         />

//         <div className="absolute inset-0">
//           <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-600/20 to-transparent rounded-full blur-3xl animate-pulse" />
//           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-white/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-purple-400/15 to-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }} />
//         </div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
//         {/* Logo with Electric Border */}
//         <div className="relative mb-4 flex justify-center items-center">
//           <ElectricBorder
            
//             thickness={6}     // Border thickness
//             speed={2}         // Slightly faster electric movement
//             chaos={1.1}         // More sparks
//             style={{ width: logoDisplaySize, height: logoDisplaySize }}
//           >
//             <img
//               src="/new.png"
//               alt="Logo"
//               className="w-full h-full object-contain rounded-full"
//             />
//           </ElectricBorder>
//         </div>

//         {/* Headline */}
//         <div className="relative inline-block mb-8">
//           <h1
//             ref={textRef}
//             className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-[0_0_15px_rgba(168,85,247,0.9)]"
//           >
//             NexoraAI
//           </h1>

//           {/* Text particles */}
//           <div className="absolute inset-0 -z-10 overflow-visible">
//             {[...Array(50)].map((_, i) => {
//               const left = Math.random() * textDims.width - textDims.width / 2;
//               const top = Math.random() * textDims.height - textDims.height / 2;
//               const duration = 1.5 + Math.random();
//               const delay = Math.random() * 2;
//               const color = textParticleColors[Math.floor(Math.random() * textParticleColors.length)];
//               return (
//                 <span
//                   key={i}
//                   className="absolute font-mono text-sm"
//                   style={{
//                     left: `calc(50% + ${left}px)`,
//                     top: `calc(50% + ${top}px)`,
//                     color,
//                     textShadow: `0 0 6px ${color}, 0 0 12px ${color}`,
//                     animation: `text-spark-${i} ${duration}s linear infinite`,
//                     animationDelay: `${delay}s`,
//                   }}
//                 >
//                   {Math.random() > 0.5 ? "0" : "1"}
//                   <style jsx>{`
//                     @keyframes text-spark-${i} {
//                       0% { transform: translateY(0) scale(1); opacity: 1; }
//                       100% { transform: translateY(-60px) scale(0.5); opacity: 0; }
//                     }
//                   `}</style>
//                 </span>
//               );
//             })}
//           </div>
//         </div>

//         {/* Subheading */}
//         <div className="mb-8">
//           <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
//             Your Trusted Partner for Next-Gen Technology Solutions
//           </h2>
//           <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
//             Transforming businesses through innovative AI-powered solutions, cutting-edge development, 
//             and strategic digital transformation services.
//           </p>
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <button
//             onClick={scrollToWhyChoose}
//             className="group bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 flex items-center gap-2"
//           >
//             Get Started
//             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//           </button>
          
//           <button
//             onClick={scrollToWhyChoose}
//             className="group bg-black border-2 border-purple-400 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center relative overflow-hidden"
//           >
//             <span className="relative z-10 bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text text-transparent animate-pulse font-bold text-xl">
//               NexoraAI
//             </span>
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-white/10 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
//           </button>
          
//           <a
//             href={enquireNowUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-gradient-to-r from-white to-gray-200 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-gray-100 hover:to-white transition-all duration-300 shadow-lg hover:shadow-xl"
//           >
//             Enquire Now
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;










 //////////////MAINTANANCE SCREEN CODE(comment out above code and uncomment bottom code /////////////////////////


import React, { useEffect } from "react";
import { Wrench, Coffee, Smile } from "lucide-react";

const Maintenance: React.FC = () => {
  // Prevent scrolling when maintenance is active
  useEffect(() => {
    document.body.style.overflow = "hidden"; // disable scroll
    return () => {
      document.body.style.overflow = "auto"; // re-enable when unmounted
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
        {/* Funny Icon */}
        <div className="mb-6 flex justify-center">
          <div className="p-6 rounded-full bg-gradient-to-tr from-purple-600 to-purple-800 shadow-lg shadow-purple-500/40 animate-bounce">
            <Coffee className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.9)] mb-4">
          Oops... We’re On a Coffee Break ☕
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
          Our developers are currently bribing the code with coffee.  
          The site will be back once the caffeine kicks in 🚀
        </p>

        {/* Funny status */}
        <div className="flex justify-center items-center gap-3 text-purple-400 font-semibold text-lg animate-pulse">
          <Wrench className="w-6 h-6" />
          <span>Fixing things… with duct tape & optimism</span>
        </div>

        {/* CEO friendly note */}
        <div className="mt-6 text-yellow-400 flex items-center justify-center gap-2">
          <Smile className="w-6 h-6" />
          <span>Don’t worry boss, it’s under control! 😉</span>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} NexoraAI — We’ll be back faster than you can say “debugging”.
      </div>
    </section>
  );
};

export default Maintenance;

