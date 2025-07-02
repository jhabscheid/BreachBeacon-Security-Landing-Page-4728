import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar, FiUser } = FiIcons;

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Small Business Owner',
      content: 'BreachBeacon alerted me that my business email was in the recent Medicare breach. I was able to secure my accounts before any damage was done.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'IT Professional',
      content: 'After the 16 billion password leak, I needed to know which of my accounts were compromised. BreachBeacon gave me instant, actionable insights.',
      rating: 5
    },
    {
      name: 'Jennifer Park',
      role: 'Healthcare Worker',
      content: 'The healthcare sector has been hit hard with breaches. BreachBeacon helps me stay ahead of threats and protect my patients\' trust.',
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            See how BreachBeacon has helped protect our users from recent breaches
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/30 transition-all"
            >
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="text-yellow-400 text-lg fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-4">
                  <SafeIcon icon={FiUser} className="text-white text-lg" />
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;