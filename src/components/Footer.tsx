'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin, Twitter, Facebook } from 'lucide-react';
import Link from 'next/link';
import { shareOnLinkedIn, shareOnTwitter, shareOnFacebook, shareViaEmail } from '@/utils/socialMedia';

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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
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

        {/* Social Sharing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-4 text-white">Share This Portfolio</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
              Found my GIS expertise interesting? Share my portfolio with your network!
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={shareOnLinkedIn}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors duration-200"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </button>
              <button
                onClick={shareOnTwitter}
                className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg text-sm font-medium transition-colors duration-200"
                aria-label="Share on Twitter"
              >
                <Twitter className="w-4 h-4" />
                Twitter
              </button>
              <button
                onClick={shareOnFacebook}
                className="flex items-center gap-2 px-4 py-2 bg-blue-800 hover:bg-blue-900 text-white rounded-lg text-sm font-medium transition-colors duration-200"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </button>
              <button
                onClick={shareViaEmail}
                className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors duration-200"
                aria-label="Share via Email"
              >
                <Mail className="w-4 h-4" />
                Email
              </button>
            </div>
          </div>
        </motion.div>

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
