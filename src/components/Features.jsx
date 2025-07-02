import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiShield, FiBell, FiEye, FiLock, FiTrendingUp, FiZap } = FiIcons;

const Features = () => {
  const features = [
    {
      icon: FiEye,
      title: 'Continuous Monitoring',
      description: 'Real-time scanning of dark web databases and breach dumps to detect your exposed credentials instantly.',
      color: 'text-blue-400'
    },
    {
      icon: FiBell,
      title: 'Instant Alerts',
      description: 'Get notified immediately when your email or passwords appear in new data breaches.',
      color: 'text-yellow-400'
    },
    {
      icon: FiShield,
      title: 'Breach Analysis',
      description: 'Detailed reports on what data was compromised and actionable steps to secure your accounts.',
      color: 'text-green-400'
    },
    {
      icon: FiLock,
      title: 'Security Guidance',
      description: 'Expert recommendations for password changes, 2FA setup, and account recovery procedures.',
      color: 'text-purple-400'
    },
    {
      icon: FiTrendingUp,
      title: 'Risk Assessment',
      description: 'Comprehensive security score based on your exposure across multiple breach databases.',
      color: 'text-red-400'
    },
    {
      icon: FiZap,
      title: 'Rapid Response',
      description: 'Automated tools to help you quickly secure compromised accounts and change passwords.',
      color: 'text-orange-400'
    }
  ];

  return (
    <section id="features" className="py-16 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Complete Breach Protection
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Advanced monitoring and response tools to keep your digital identity secure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-slate-900/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/30 transition-all group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.color} bg-slate-800 rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
                <SafeIcon icon={feature.icon} className="text-2xl" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://breachbeacon.io"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all space-x-2"
          >
            <SafeIcon icon={FiShield} />
            <span>Start Monitoring Now</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;