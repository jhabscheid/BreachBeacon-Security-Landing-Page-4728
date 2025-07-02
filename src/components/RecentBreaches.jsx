import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiAlertTriangle, FiUsers, FiCalendar, FiExternalLink } = FiIcons;

const RecentBreaches = () => {
  const breaches = [
    {
      title: '16 Billion Password Mega-Leak',
      description: 'Massive aggregation from 30+ datasets including Google, Facebook, Apple accounts',
      impact: '16 billion credentials',
      date: '2025',
      severity: 'critical',
      details: 'Infostealer malware and credential stuffing attacks exposed unprecedented scale of passwords'
    },
    {
      title: 'Medicare Data Breach',
      description: 'Fraudulent account creation on Medicare.gov using stolen beneficiary information',
      impact: '103,000 beneficiaries',
      date: 'May 2025',
      severity: 'high',
      details: 'Personal info including addresses, dates of birth, Medicare IDs, and treatment records exposed'
    },
    {
      title: 'Healthcare Sector Crisis',
      description: 'Multiple healthcare breaches affecting millions in first half of 2025',
      impact: '23+ million records',
      date: '2025 YTD',
      severity: 'high',
      details: 'Ongoing vulnerabilities in U.S. health IT infrastructure continue to be exploited'
    }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'text-red-400 bg-red-500/10 border-red-500/20';
      case 'high': return 'text-orange-400 bg-orange-500/10 border-orange-500/20';
      default: return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
    }
  };

  return (
    <section id="recent-breaches" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Recent Major Breaches
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Stay informed about the latest security incidents that could affect you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {breaches.map((breach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getSeverityColor(breach.severity)}`}>
                  <SafeIcon icon={FiAlertTriangle} className="mr-1" />
                  {breach.severity.toUpperCase()}
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <SafeIcon icon={FiCalendar} className="mr-1" />
                  {breach.date}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{breach.title}</h3>
              <p className="text-gray-300 mb-4">{breach.description}</p>
              
              <div className="flex items-center text-purple-400 mb-4">
                <SafeIcon icon={FiUsers} className="mr-2" />
                <span className="font-semibold">{breach.impact}</span>
              </div>

              <p className="text-gray-400 text-sm mb-6">{breach.details}</p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 px-4 py-2 rounded-lg text-purple-300 font-medium hover:bg-purple-500/10 transition-all flex items-center justify-center space-x-2"
              >
                <span>Check if You're Affected</span>
                <SafeIcon icon={FiExternalLink} />
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://breachbeacon.io"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all space-x-2"
          >
            <SafeIcon icon={FiAlertTriangle} />
            <span>Get Instant Breach Alerts</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentBreaches;