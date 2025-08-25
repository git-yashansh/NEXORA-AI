import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import TechnologyStack from './components/TechnologyStack';
import WhyChooseUs from './components/WhyChooseUs';
import CEO from './components/CEO';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Sections */}
      <Hero />
      <About />
      <Services />
      <Process />
      <TechnologyStack />
      <WhyChooseUs />
      <CEO />
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;