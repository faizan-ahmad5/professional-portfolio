'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Home, Mail, MapPin, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  const quickLinks = [
    { name: 'Home', href: '/', icon: Home, description: 'Back to homepage' },
    { name: 'About Me', href: '/#about', icon: Search, description: 'Learn about my GIS expertise' },
    { name: 'Projects', href: '/#projects', icon: MapPin, description: 'View my GIS projects and publications' },
    { name: 'Contact', href: '/#contact', icon: Mail, description: 'Get in touch for collaboration' },
  ];

  const scrollToSection = (href: string) => {
    if (href.includes('#')) {
      router.push('/');
      setTimeout(() => {
        const element = document.getElementById(href.split('#')[1]);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      router.push(href);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* 404 Animation */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="text-8xl md:text-9xl font-bold text-primary-600 dark:text-primary-400 mb-4">
            404
          </div>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Let&apos;s get you back to exploring my GIS portfolio and projects!
          </p>
        </motion.div>

        {/* Quick Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
        >
          {quickLinks.map((link, index) => (
            <motion.button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className="group p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-left border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                  <link.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {link.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {link.description}
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
          <button
            onClick={() => router.push('/')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 transform hover:scale-105"
          >
            <Home className="w-4 h-4" />
            Return Home
          </button>
        </motion.div>

        {/* SEO-friendly content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-left"
        >
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            About Hafeez Uddin - GIS Specialist
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Professional GIS Specialist and Remote Sensing Engineer based in Saudi Arabia. 
            Expertise in ArcGIS Pro, Google Earth Engine, ERDAS Imagine, hazard mapping, 
            environmental planning, and spatial data analysis. Specializing in disaster risk 
            reduction, flood assessment, and sustainable development solutions.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {['GIS Specialist', 'Remote Sensing', 'ArcGIS Pro', 'Google Earth Engine', 'Saudi Arabia'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
