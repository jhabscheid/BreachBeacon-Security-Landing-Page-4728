import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Features from '../components/Features';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiShield, FiBell, FiEye, FiLock, FiTrendingUp, FiZap, FiDatabase, FiGlobe } = FiIcons;

const FeaturesPage = () => {
  const advancedFeatures = [
    {
      icon: FiDatabase,
      title: 'Dark Web Monitoring',
      description: 'Continuous scanning of underground forums, marketplaces, and criminal databases where stolen data is sold.',
      color: 'text-red-400'
    },
    {
      icon: FiGlobe,
      title: 'Global Breach Database',
      description: 'Access to the world\'s largest collection of breach data, updated in real-time from trusted sources.',
      color: 'text-blue-400'
    },
    {
      icon: FiBell,
      title: 'Multi-Channel Alerts',
      description: 'Get notified via email, SMS, push notifications, or integrate with your security tools via API.',
      color: 'text-yellow-400'
    },
    {
      icon: FiEye,
      title: 'Historical Analysis',
      description: 'View your complete exposure history and track how your security posture improves over time.',
      color: 'text-green-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Comprehensive
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Breach Protection
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Advanced monitoring, instant alerts, and expert guidance to keep your digital identity secure
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.a
              href="https://breachbeacon.io"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all space-x-2"
            >
              <SafeIcon icon={FiShield} />
              <span>Start Monitoring Now</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <Features />

      {/* Advanced Features */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Protection Features
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Enterprise-grade security monitoring for complete peace of mind
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advancedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-900/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/30 transition-all"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.color} bg-slate-800 rounded-2xl mb-6`}>
                  <SafeIcon icon={feature.icon} className="text-2xl" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturesPage;