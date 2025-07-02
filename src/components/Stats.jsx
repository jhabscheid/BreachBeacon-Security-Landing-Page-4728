import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiDatabase, FiAlertCircle, FiTrendingUp } = FiIcons;

const Stats = () => {
  const stats = [
    {
      icon: FiDatabase,
      number: '16B+',
      label: 'Passwords Leaked',
      sublabel: 'In recent mega-breach',
      color: 'text-red-400'
    },
    {
      icon: FiUsers,
      number: '103K',
      label: 'Medicare Accounts',
      sublabel: 'Fraudulently created',
      color: 'text-orange-400'
    },
    {
      icon: FiAlertCircle,
      number: '23M+',
      label: 'Healthcare Records',
      sublabel: 'Breached in 2025',
      color: 'text-yellow-400'
    },
    {
      icon: FiTrendingUp,
      number: '500K+',
      label: 'Users Protected',
      sublabel: 'By BreachBeacon',
      color: 'text-green-400'
    }
  ];

  return (
    <section className="py-16 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Breach Crisis is <span className="text-red-400">Real</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Recent data breaches have exposed billions of credentials. Are you protected?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-6 text-center hover:border-purple-500/30 transition-all"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.color} bg-slate-800 rounded-2xl mb-4`}>
                <SafeIcon icon={stat.icon} className="text-2xl" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-300 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;