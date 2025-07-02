import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiBell, FiShield, FiArrowRight } = FiIcons;

const HowItWorks = () => {
  const steps = [
    {
      icon: FiSearch,
      title: 'Enter Your Email',
      description: 'Simply provide your email address to start monitoring across billions of breach records.',
      color: 'text-blue-400'
    },
    {
      icon: FiBell,
      title: 'Get Instant Results',
      description: 'Immediately see if your credentials appear in known data breaches and dark web dumps.',
      color: 'text-yellow-400'
    },
    {
      icon: FiShield,
      title: 'Take Action',
      description: 'Follow our expert guidance to secure compromised accounts and prevent future breaches.',
      color: 'text-green-400'
    }
  ];

  return (
    <section id="how-it-works" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How BreachBeacon Works
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Get protected in three simple steps
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative text-center"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm z-10">
                  {index + 1}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`inline-flex items-center justify-center w-20 h-20 ${step.color} bg-slate-900 border-2 border-slate-700 rounded-2xl mb-6`}
                >
                  <SafeIcon icon={step.icon} className="text-3xl" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>

                {/* Arrow (only between steps) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 text-purple-400">
                    <SafeIcon icon={FiArrowRight} className="text-2xl" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://breachbeacon.io"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all space-x-2"
          >
            <SafeIcon icon={FiSearch} />
            <span>Check Your Exposure Now</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;