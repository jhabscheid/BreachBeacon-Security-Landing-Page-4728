import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiShield, FiCheck, FiX, FiStar } = FiIcons;

const PricingPage = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for personal monitoring',
      features: [
        { text: '1 email address monitoring', included: true },
        { text: 'Basic breach alerts', included: true },
        { text: 'Monthly security reports', included: true },
        { text: 'Community support', included: true },
        { text: 'Real-time monitoring', included: false },
        { text: 'Dark web scanning', included: false },
        { text: 'Priority support', included: false },
        { text: 'API access', included: false }
      ],
      buttonText: 'Get Started Free',
      popular: false,
      color: 'border-slate-700'
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: 'per month',
      description: 'Complete protection for individuals',
      features: [
        { text: 'Up to 5 email addresses', included: true },
        { text: 'Real-time breach alerts', included: true },
        { text: 'Dark web monitoring', included: true },
        { text: 'Weekly security reports', included: true },
        { text: 'Priority email support', included: true },
        { text: 'Password strength analysis', included: true },
        { text: 'Mobile app access', included: true },
        { text: 'API access', included: false }
      ],
      buttonText: 'Start Pro Trial',
      popular: true,
      color: 'border-purple-500'
    },
    {
      name: 'Business',
      price: '$29.99',
      period: 'per month',
      description: 'Advanced protection for teams',
      features: [
        { text: 'Unlimited email monitoring', included: true },
        { text: 'Real-time breach alerts', included: true },
        { text: 'Dark web monitoring', included: true },
        { text: 'Daily security reports', included: true },
        { text: '24/7 priority support', included: true },
        { text: 'Team management dashboard', included: true },
        { text: 'API access & integrations', included: true },
        { text: 'Custom breach notifications', included: true }
      ],
      buttonText: 'Contact Sales',
      popular: false,
      color: 'border-slate-700'
    }
  ];

  const faqs = [
    {
      question: 'How quickly will I be notified of a breach?',
      answer: 'Pro and Business users receive real-time alerts within minutes of a breach being detected. Free users receive notifications within 24 hours.'
    },
    {
      question: 'What data sources do you monitor?',
      answer: 'We monitor over 16 billion credentials from major breaches, dark web marketplaces, paste sites, and underground forums where stolen data is traded.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. Your account will remain active until the end of your billing period.'
    },
    {
      question: 'Is my personal information secure?',
      answer: 'Absolutely. We use enterprise-grade encryption and never store your passwords. We only monitor for your email addresses appearing in breach databases.'
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
            Simple, Transparent
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Choose the protection level that's right for you. Start free, upgrade when you need more.
          </motion.p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-slate-900/50 backdrop-blur-lg border-2 ${plan.color} rounded-2xl p-8 ${
                  plan.popular ? 'scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <SafeIcon icon={FiStar} className="text-xs" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.price !== '$0' && <span className="text-gray-400 ml-2">{plan.period}</span>}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <SafeIcon 
                        icon={feature.included ? FiCheck : FiX} 
                        className={`mr-3 ${feature.included ? 'text-green-400' : 'text-gray-500'}`} 
                      />
                      <span className={feature.included ? 'text-gray-300' : 'text-gray-500'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/25'
                      : 'border border-purple-500/50 text-purple-300 hover:bg-purple-500/10'
                  }`}
                >
                  {plan.buttonText}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;