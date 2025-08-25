import React from 'react';
import { 
  Mail, 
  Phone,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';

/**
 * Footer Component
 * Features: Social media links, contact info, enquire now button
 * Black background with white/purple accents
 */
const Footer: React.FC = () => {
  const enquireNowUrl = "https://forms.google.com/your-form-id"; // Replace with actual Google Form URL
  
  const contactInfo = {
    email: 'kr.yashansh123@gmail.com',
    phone: '9304840306'
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/company/nexoraai',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Facebook', 
      icon: <Facebook className="w-5 h-5" />,
      url: 'https://facebook.com/nexoraai',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: 'https://instagram.com/nexoraai',
      color: 'hover:text-pink-400'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      url: 'https://twitter.com/nexoraai', 
      color: 'hover:text-blue-400'
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-5 h-5" />,
      url: 'https://youtube.com/@nexoraai',
      color: 'hover:text-red-500'
    }
  ];

  const footerLinks = [
    {
      title: 'Services',
      links: [
        'Mobile App Development',
        'Data & Analytics', 
        'Digital Transformation',
        'IT Consulting',
        'UI/UX Design',
        'IT Infrastructure',
        'CRM Solutions'
      ]
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Our Process',
        'Technology Stack',
        'Why Choose Us',
        'Leadership',
        'Careers'
      ]
    },
    {
      title: 'Support',
      links: [
        'Contact Us',
        'Documentation',
        '24/7 Support',
        'FAQ',
        'Privacy Policy',
        'Terms of Service'
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-16 h-full">
          {[...Array(256)].map((_, i) => (
            <div
              key={i}
              className="border border-purple-400/10"
              style={{
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-white to-purple-600 bg-clip-text text-transparent mb-4">
                  NexoraAI
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Your trusted partner for next-gen technology solutions. We transform businesses through 
                  innovative AI-powered solutions and digital transformation services.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <a 
                    href={`tel:+91${contactInfo.phone}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    +91 {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg text-gray-400 transition-all duration-300 hover:scale-110 ${social.color} hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-800`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold text-white mb-6">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <button
                        onClick={() => {
                          // Handle navigation based on link text
                          if (link.includes('About')) scrollToSection('#about');
                          else if (link.includes('Process')) scrollToSection('#process');
                          else if (link.includes('Technology')) scrollToSection('#technology');
                          else if (link.includes('Why Choose')) scrollToSection('#why-choose');
                          else if (link.includes('Leadership')) scrollToSection('#ceo');
                          else if (link.includes('Contact')) scrollToSection('#contact');
                          // Add more navigation logic as needed
                        }}
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-left"
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-900/30 to-gray-900/50 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-8 max-w-2xl mx-auto">
              <h4 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h4>
              <p className="text-gray-400 mb-6">
                Let's discuss how NexoraAI can help you achieve your digital transformation goals.
              </p>
              <a
                href={enquireNowUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
              >
                Enquire Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-400/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 NexoraAI. All rights reserved. Built with ❤️ By Kumar yashansh.
              </p>
              <div className="flex gap-6">
                <button className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                  Privacy Policy
                </button>
                <button className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                  Terms of Service
                </button>
                <button className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                  Cookie Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;