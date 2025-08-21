'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Globe, Award, Users, ArrowRight } from 'lucide-react';
import { smoothScrollTo } from '@/utils/internalLinking';

const stats = [
  { icon: MapPin, label: 'Projects Completed', value: '6+' },
  { icon: Globe, label: 'Countries Worked', value: '2' },
  { icon: Award, label: 'Publications', value: '2' },
  { icon: Users, label: 'Years Experience', value: '2+' },
];

const skills = [
  { category: 'Optical Sensors (Passive)', items: ['Landsat (TM, ETM+, OLI)', 'Sentinel-2 MSI', 'MODIS', 'AVHRR', 'IKONOS', 'QuickBird'] },
  { category: 'Thermal Sensors (Passive)', items: ['Landsat TIRS', 'MODIS (Thermal Bands)', 'ASTER (Thermal Infrared Radiometer)'] },
  { category: 'Microwave Sensors (Active)', items: ['RADAR', 'Sentinel-1 (SAR)', 'RISAT', 'TerraSAR-X', 'ALOS PALSAR'] },
  { category: 'LiDAR (Active)', items: ['Airborne LiDAR systems', 'Terrestrial LiDAR systems', 'High-resolution elevation data', '3D data processing'] },
  { category: 'GIS Software', items: ['ArcMap', 'ArcGIS Pro', 'HEC-RAS', 'REVIT', 'ERDAS Imagine', 'Google Earth Pro', 'Google Earth Engine (GEE)', 'Feature Manipulation Engine (FME)'] },
  { category: 'Programming', items: ['Python', 'JavaScript', 'MATLAB', 'C++'] },
  { category: 'Specialization', items: ['Geographic Information System', 'Remote Sensing'] },
];

const languages = ['English', 'Urdu', 'Arabic', 'Khowar'];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 w-full max-w-full overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 w-full"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none w-full">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed break-words text-justify">
              I, Hafeez Uddin, am a GIS Specialist currently based in Taif, Mecca, Saudi Arabia, working with Twaik Holding Group (Twaik Co. Ltd for Maintenance and Operation). My passion lies in making sense of complex geospatial data and turning it into clear, practical insights that actually make a difference, whether it&apos;s for sustainable development, infrastructure, or environmental planning.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed break-words text-justify">
                With a degree in Geomatics (Remote Sensing and GIS) from the University of Peshawar, Pakistan, I&apos;ve built hands-on experience using remote sensing technologies like optical, thermal, microwave, and LiDAR. Over the years, I&apos;ve had the chance to work on projects in both Pakistan and Saudi Arabia, covering areas such as urban and regional planning, forest monitoring, disaster risk reduction, land management, and agriculture monitoring.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed break-words text-justify">
                At Twaik, I work with tools like ArcGIS Pro, ERDAS Imagine, Google Earth Engine, along with Python and JavaScript, to analyze satellite imagery, run spatial models, and create accurate maps that guide real-world decisions. My work has ranged from flash flood and GLOF (Glacial Lake Outburst Flood) assessments to urban planning and environmental hazard mapping, all aimed at building resilience and smarter solutions. You can explore some of my{' '}
                <button
                  onClick={() => smoothScrollTo('projects')}
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors underline decoration-primary-500/30 hover:decoration-primary-500 font-medium"
                >
                  recent projects and publications
                </button>{' '}
                to see these applications in action.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed break-words text-justify">
                I&apos;m especially driven by how GIS can tackle today&apos;s toughest challenges, like climate change, environmental conservation, and sustainable resource management. I see geospatial science as more than just maps and data; it&apos;s a powerful way to connect science with sustainable development. Continuous learning, collaboration, and problem-solving keep me motivated to stay ahead in this evolving field.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed break-words text-justify">
                In short: I&apos;m all about using geospatial intelligence to turn data into action, helping communities and organizations make informed, future-focused decisions. Feel free to{' '}
                <button
                  onClick={() => smoothScrollTo('contact')}
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors underline decoration-primary-500/30 hover:decoration-primary-500 font-medium"
                >
                  get in touch
                </button>{' '}
                if you&apos;d like to discuss potential collaborations.
              </p>
            </div>

            {/* Languages */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((language) => (
                  <span
                    key={language}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Navigation Links */}
            <div className="mt-8 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Explore More:</h4>
              <div className="flex flex-wrap gap-4 text-sm">
                <button
                  onClick={() => smoothScrollTo('experience')}
                  className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                  <span>Professional Experience</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
                <button
                  onClick={() => smoothScrollTo('projects')}
                  className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                  <span>Projects & Publications</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 w-full"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Skills & Expertise</h3>
            <div className="grid gap-4 sm:gap-6 w-full">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 rounded-lg w-full"
                >
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3 break-words">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs sm:text-sm border border-gray-200 dark:border-gray-600 break-words"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-gray-200 dark:border-gray-700 w-full"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-200">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 break-words">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Education</h3>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                Bachelor Studies in Geomatics (GIS and Remote Sensing)
              </h4>
              <p className="text-primary-600 dark:text-primary-400 font-medium">University of Peshawar, Pakistan</p>
              <p className="text-gray-600 dark:text-gray-300 mt-1">Session 2019-2023</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                <strong>Thesis:</strong> Ecotourism Potential Assessment for District Lower Chitral-Pakistan, Using Integration of GIS and Remote Sensing
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
