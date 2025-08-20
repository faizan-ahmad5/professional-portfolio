'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:hafeezuddiniiui99@gmail.com',
    icon: Mail,
  },
  {
    name: 'Phone',
    href: 'tel:+966503657540',
    icon: Phone,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hafeez-uddin-87a466217/',
    icon: Linkedin,
  },
];

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const skills = [
  "Drone and Satellite Imagery Analysis and Processing",
  "Hydrological and Watershed Modeling",
  "Disaster Risk Assessment (Flood, GLOF, Landsliding)",
  "Urban Growth and Infrastructure Mapping",
  "Climate Change Monitoring and Analysis"
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">HU</span>
                </div>
                <span className="font-heading font-bold text-xl">Hafeez Uddin</span>
              </Link>
              <p className="text-gray-400 leading-relaxed mb-6">
                Adept in GIS, Remote Sensing, and spatial data analysis, specializing in delivering actionable insights for environmental and infrastructure projects.
              </p>
              <div className="flex items-center text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Taif, Mecca, Saudi Arabia</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
                <li>
                  <a
                    href="/resume.pdf"
                    download
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    Download Resume
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Skills */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg mb-4">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs border border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact & Social */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg mb-4">Connect</h3>
              <div className="space-y-3 mb-6">
                <a
                  href="mailto:hafeezuddiniiui99@gmail.com"
                  className="flex items-center text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  hafeezuddiniiui99@gmail.com
                </a>
                <a
                  href="tel:+966503657540"
                  className="flex items-center text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +966 503657540
                </a>
              </div>
              
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.name === 'LinkedIn' || social.name === 'GitHub' ? '_blank' : undefined}
                    rel={social.name === 'LinkedIn' || social.name === 'GitHub' ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200 group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-400 text-sm">
              <p>&copy; {currentYear} Hafeez Uddin. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Developed by</span>
              <a 
                href="https://www.linkedin.com/in/faizan-ahmad-khan5/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-primary-400 hover:text-primary-300 transition-colors duration-200 font-medium"
              >
                <span>Faizan Ahmad Khan</span>
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
    </footer>
  );
}
