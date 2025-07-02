import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HowItWorks from '../components/HowItWorks';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiShield, FiSearch, FiBell, FiLock, FiCheckCircle } = FiIcons;

const HowItWorksPage = () => {
  const detailedSteps = [
    {
      step: 1,
      title: 'Sign Up & Enter Your Email',
      description: 'Create your free account and add the email addresses you want to monitor.',
      details: [
        'Instant account creation - no credit card required',
        'Add multiple email addresses to monitor',
        'Secure encryption of all your data',
        'Start monitoring immediately'
      ],
      icon: FiSearch,
      color: 'text-blue-400'
    },
    {
      step: 2,
      title: 'We Scan Billions of Records',
      description: 'Our system searches through massive breach databases and dark web sources.',
      details: [
        'Access to 16+ billion compromised credentials',
        'Real-time monitoring of new breaches',
        'Dark web marketplace surveillance',
        'Historical breach data analysis'
      ],
      icon: FiBell,
      color: 'text-yellow-400'
    },
    {
      step: 3,
      title: 'Get Instant Alerts',
      description: 'Receive immediate notifications when your data appears in new breaches.',
      details: [
        'Email alerts within minutes of detection',
        'Detailed breach information and impact',
        'Severity rating and risk assessment',
        'Mobile push notifications available'
      ],
      icon: FiShield,
      color: 'text-green-400'
    },
    {
      step: 4,
      title: 'Take Protective Action',
      description: 'Follow our expert guidance to secure your compromised accounts.',
      details: [
        'Step-by-step remediation instructions',
        'Password change recommendations',
        '2FA setup guidance',
        'Account recovery assistance'
      ],
      icon: FiLock,
      color: 'text-purple-400'
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
            How BreachBeacon
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Protects You
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Our advanced monitoring system works 24/7 to keep your digital identity secure
          </motion.p>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {detailedSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      {step.step}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">{step.title}</h2>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-6">{step.description}</p>
                  
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <SafeIcon icon={FiCheckCircle} className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className="flex-1 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-48 h-48 ${step.color} bg-slate-900/50 border-2 border-slate-700 rounded-3xl flex items-center justify-center backdrop-blur-lg`}
                  >
                    <SafeIcon icon={step.icon} className="text-6xl" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Original How It Works Component */}
      <HowItWorks />

      <Footer />
    </div>
  );
};

export default HowItWorksPage;