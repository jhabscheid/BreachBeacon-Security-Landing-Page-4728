import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiShield, FiAlertTriangle, FiClock } = FiIcons;

const CTA = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-purple-500/20 rounded-3xl p-8 md:p-12 text-center"
        >
          {/* Urgency Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-red-500/20 border border-red-500/30 rounded-full px-4 py-2 mb-6"
          >
            <SafeIcon icon={FiAlertTriangle} className="text-red-400" />
            <span className="text-red-300 font-medium">Don't Wait Until It's Too Late</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Protect Your Digital Identity
            <br />
            <span className="text-purple-400">Before It's Compromised</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            With 16 billion passwords leaked and new breaches happening daily, 
            every second counts. Start monitoring now and get instant alerts when your data is at risk.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <motion.a
              href="https://breachbeacon.io"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center space-x-2"
            >
              <SafeIcon icon={FiShield} />
              <span>Get Protected FREE</span>
            </motion.a>
            
            <div className="flex items-center text-gray-400">
              <SafeIcon icon={FiClock} className="mr-2" />
              <span>Takes less than 30 seconds</span>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto text-gray-400"
          >
            <div className="flex items-center justify-center space-x-2">
              <SafeIcon icon={FiShield} className="text-green-400" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <SafeIcon icon={FiClock} className="text-blue-400" />
              <span>Instant Results</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <SafeIcon icon={FiAlertTriangle} className="text-yellow-400" />
              <span>500K+ Users Protected</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;