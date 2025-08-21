'use client';

import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Mail, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const typewriterText = "Geospatial Engineer";

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= typewriterText.length) return;
    
    const timeout = setTimeout(() => {
      setDisplayText(prev => prev + typewriterText[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, 100);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-16 md:pt-20 flex items-center justify-center bg-gradient-to-br from-white via-primary-50 to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden w-full max-w-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-primary-200 to-secondary-200 transform rotate-12 scale-150"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 md:space-y-6"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block"
          >
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-1 shadow-xl">
                <Image 
                  src="/profile.jpeg"
                  alt="Hafeez Uddin - Geospatial Engineer"
                  width={128}
                  height={128}
                  className="w-full h-full rounded-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 md:w-8 md:h-8 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-3 md:space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl md:text-4xl lg:text-5xl font-bold font-heading text-gray-900 dark:text-white"
            >
              Hafeez Uddin - GIS Specialist & Remote Sensing Engineer
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="h-12 md:h-14 flex items-center justify-center"
            >
              <span className="text-base md:text-xl lg:text-2xl text-primary-600 dark:text-primary-400 font-medium border-r-2 border-primary-500 animate-typewriter pr-1">
                {displayText}
              </span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-sm md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
           Expert in GIS projects, remote sensing analysis, and environmental spatial data analysis for sustainable development solutions.
          </motion.p>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex justify-center items-center"
          >
            <div className="inline-flex items-center justify-center gap-6 text-xs text-gray-600 dark:text-gray-300">
              <div className="inline-flex items-center gap-2">
                <MapPin className="w-3 h-3" style={{ verticalAlign: 'middle', marginTop: '0' }} />
                <span style={{ verticalAlign: 'middle', lineHeight: '1' }}>Taif, SA</span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-2">
                <a href="mailto:hafeezuddiniiui99@gmail.com" className="inline-flex items-center gap-2">
                  <Mail className="w-3 h-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors" style={{ verticalAlign: 'middle', marginTop: '0' }} />
                  <span 
                    className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    style={{ verticalAlign: 'middle', lineHeight: '1' }}
                  >
                    hafeezuddiniiui99@gmail.com
                  </span>
                </a>
              </div>
              <div className="hidden sm:inline-flex items-center gap-2">
                <a href="tel:+966503657540" className="inline-flex items-center gap-2">
                  <Phone className="w-3 h-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors" style={{ verticalAlign: 'middle', marginTop: '0' }} />
                  <span 
                    className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    style={{ verticalAlign: 'middle', lineHeight: '1' }}
                  >
                    +966 503657540
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4 md:pt-6"
          >
            <button
              onClick={scrollToProjects}
              className="group bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 text-sm md:text-base"
            >
              View Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
            <a
              href="/resume.pdf"
              download
              className="group border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
            >
              Download Resume
              <ArrowDown className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToProjects}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-600 dark:text-primary-400 animate-bounce hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        aria-label="Scroll to projects section"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.button>

      {/* Decorative Elements - Hidden on mobile to prevent overflow */}
      <div className="hidden md:block absolute top-1/4 left-10 w-2 h-2 bg-primary-400 rounded-full animate-pulse opacity-60" />
      <div className="hidden md:block absolute top-1/3 right-10 w-3 h-3 bg-secondary-400 rounded-full animate-pulse opacity-40 delay-1000" />
      <div className="hidden md:block absolute bottom-1/4 left-1/4 w-1 h-1 bg-accent-400 rounded-full animate-pulse opacity-50 delay-500" />
      <div className="hidden md:block absolute bottom-1/3 right-1/4 w-2 h-2 bg-primary-300 rounded-full animate-pulse opacity-30 delay-1500" />
    </section>
  );
}
