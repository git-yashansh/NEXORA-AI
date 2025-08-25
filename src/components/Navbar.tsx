import React, { useState, useEffect } from 'react';
import PillNav from './PillNav';

/**
 * Navigation Component
 * Features: Modern pill navigation with smooth transitions
 * Updated to use PillNav component
 */
const Navbar: React.FC = () => {
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#technology', label: 'Technology Stack' },
    { href: '#why-choose', label: 'Why Choose Us' },
    { href: '#ceo', label: 'CEO' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <PillNav
      logo="/logo.svg"
      logoAlt="NexoraAI Logo"
      items={navItems}
      activeHref="#home"
      className="nexora-nav"
      ease="power2.easeOut"
      baseColor="#000000"
      pillColor="#ffffff"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#000000"
    />
  );
};

export default Navbar;