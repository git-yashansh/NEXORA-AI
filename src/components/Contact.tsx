import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MessageSquare,
  MapPin,
  Send,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
/**
 * Contact Section Component
 * Features: Contact form, WhatsApp integration, contact information
 * Email: kr.yashansh123@gmail.com, Phone: 9304840306
 */
const Contact: React.FC = () => {
  const enquireNowUrl = "https://forms.google.com/your-form-id"; // Keep your Enquire Now link
  const [formData, setFormData] = useState({
    name: '',
    email: '', 
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xeolqqzr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to send message. Please try again.');
    }
  };

  const contactInfo = {
    email: 'kr.yashansh123@gmail.com',
    phone: '9304840306',
    whatsapp: '919304840306',
    location: 'India'
  };

  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=Hello NexoraAI! I'm interested in your services and would like to discuss my project requirements.`;

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Contact network pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {[...Array(144)].map((_, i) => (
              <div
                key={i}
                className="border border-purple-400/10 animate-pulse"
                style={{
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random()}s`
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random()}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with AI-powered solutions? Let's discuss your project and explore how NexoraAI can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900/80 to-black/60 backdrop-blur-sm border border-purple-400/20 rounded-3xl p-8 relative">
          {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent rounded-3xl blur-xl" />
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-white mb-6">Send us a Message</h3>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-purple-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-purple-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-purple-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project requirements, goals, and any specific technologies you're interested in..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg shadow-purple-500/25 group"
                  >
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Keep all your buttons/cards 100% intact */}
            {/* Email */}
            <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-purple-600/20 to-white/10 rounded-lg text-purple-400 group-hover:text-white transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email Us</h4>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-purple-400 hover:text-white transition-colors duration-300"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-purple-600/20 to-white/10 rounded-lg text-purple-400 group-hover:text-white transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Call Us</h4>
                  <a 
                    href={`tel:+91${contactInfo.phone}`}
                    className="text-purple-400 hover:text-white transition-colors duration-300"
                  >
                    +91 {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-gradient-to-br from-gray-900/80 to-green-900/20 backdrop-blur-sm border border-green-400/20 rounded-2xl p-6 hover:border-green-400/40 transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-green-600/20 to-white/10 rounded-lg text-green-400 group-hover:text-white transition-colors duration-300">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-1">WhatsApp</h4>
                  <p className="text-green-400 text-sm mb-2">Get instant responses</p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-400 hover:text-white transition-colors duration-300 text-sm font-medium"
                  >
                    Start Chat
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-purple-600/20 to-white/10 rounded-lg text-purple-400 group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <p className="text-purple-400">{contactInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Enquire Now */}
            <div className="bg-gradient-to-r from-purple-900/30 to-gray-900/50 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-8 text-center">
              <h4 className="text-2xl font-bold text-white mb-4">Quick Enquiry</h4>
              <p className="text-gray-400 mb-6">
                Prefer a structured approach? Fill out our detailed enquiry form to help us understand your requirements better.
              </p>
              <a
                href={enquireNowUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-white to-gray-200 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-gray-100 hover:to-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Enquire Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-gray-900/60 to-purple-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-6 inline-block">
            <h4 className="text-white font-semibold mb-2">Business Hours</h4>
            <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM (IST)</p>
            <p className="text-purple-400 text-sm mt-1">24/7 support available for urgent issues</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
