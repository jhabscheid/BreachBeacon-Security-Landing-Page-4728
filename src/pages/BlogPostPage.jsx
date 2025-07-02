import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiUser, FiArrowLeft, FiShare2, FiBookmark } = FiIcons;

const BlogPostPage = () => {
  const { slug } = useParams();

  // Sample blog post data - in a real app, this would come from an API
  const blogPost = {
    title: '16 Billion Passwords Leaked: What You Need to Know',
    excerpt: 'The largest password leak in history has exposed credentials from Google, Facebook, Apple, and more. Here\'s what happened and how to protect yourself.',
    author: 'Security Team',
    date: 'January 15, 2025',
    readTime: '8 min read',
    category: 'Security Alert',
    content: `
      <p>In what cybersecurity experts are calling the largest password leak in internet history, over 16 billion credentials have been exposed in a massive data aggregation that spans multiple platforms and services.</p>

      <h2>What Actually Happened?</h2>
      <p>This wasn't a single catastrophic hack of major tech companies like Google, Apple, or Facebook. Instead, it represents an aggregation from at least 30 separate datasets, primarily sourced from:</p>
      <ul>
        <li>Infostealer malware campaigns</li>
        <li>Credential stuffing attacks</li>
        <li>Recycled data from previous breaches</li>
        <li>Dark web marketplace collections</li>
      </ul>

      <h2>The Scale of the Problem</h2>
      <p>The exposed credentials span major services including:</p>
      <ul>
        <li><strong>Google accounts:</strong> Gmail, Google Drive, YouTube</li>
        <li><strong>Social media:</strong> Facebook, Instagram, Twitter</li>
        <li><strong>Apple services:</strong> iCloud, App Store accounts</li>
        <li><strong>Professional platforms:</strong> LinkedIn, GitHub</li>
        <li><strong>Communication apps:</strong> Telegram, WhatsApp</li>
        <li><strong>Government portals:</strong> Various official websites</li>
      </ul>

      <h2>How Infostealer Malware Works</h2>
      <p>Much of this data comes from infostealer malware, which operates by:</p>
      <ol>
        <li><strong>Silent infection:</strong> Spreading through malicious downloads or phishing emails</li>
        <li><strong>Data harvesting:</strong> Extracting browser-stored passwords, cookies, and autofill data</li>
        <li><strong>Session hijacking:</strong> Stealing session tokens that bypass two-factor authentication</li>
        <li><strong>Marketplace distribution:</strong> Selling stolen data on cybercriminal forums</li>
      </ol>

      <h2>Why This Creates Unprecedented Danger</h2>
      <p>This database represents more than just a collection of old passwords. It enables:</p>
      <ul>
        <li><strong>Identity theft at scale:</strong> Comprehensive personal information for targeted attacks</li>
        <li><strong>Advanced phishing:</strong> Highly personalized scam campaigns using real data</li>
        <li><strong>Account takeovers:</strong> Credential stuffing across multiple platforms</li>
        <li><strong>Session hijacking:</strong> Bypassing security measures through stolen tokens</li>
      </ul>

      <h2>Immediate Steps to Protect Yourself</h2>
      <p>If you're concerned about your exposure, take these actions immediately:</p>

      <h3>1. Check Your Exposure</h3>
      <p>Use BreachBeacon to see if your email appears in this or other known breaches. Our monitoring service scans billions of records to identify compromised credentials.</p>

      <h3>2. Password Security Overhaul</h3>
      <ul>
        <li>Create unique, strong passwords for every account</li>
        <li>Use a reputable password manager like Bitwarden, 1Password, or KeePassXC</li>
        <li>Enable password generators for maximum security</li>
        <li>Avoid reusing passwords across multiple sites</li>
      </ul>

      <h3>3. Enable Two-Factor Authentication</h3>
      <ul>
        <li>Prefer app-based authenticators over SMS</li>
        <li>Consider hardware security keys like YubiKey for critical accounts</li>
        <li>Enable 2FA on all important accounts immediately</li>
      </ul>

      <h3>4. Session Security Maintenance</h3>
      <ul>
        <li>Log out of unfamiliar devices and sessions</li>
        <li>Clear browser cookies after changing passwords</li>
        <li>Monitor account activity regularly</li>
        <li>Review logged-in devices on important accounts</li>
      </ul>

      <h3>5. Consider Passkey Technology</h3>
      <p>Where available, adopt passkey technology. This device-based biometric authentication eliminates traditional passwords entirely, making your accounts significantly more secure.</p>

      <h2>The Bigger Picture</h2>
      <p>This incident is part of an escalating trend. Recent major leaks include:</p>
      <ul>
        <li><strong>MOAB (Mother Of All Breaches):</strong> 26 billion records in early 2024</li>
        <li><strong>RockYou2024:</strong> 10 billion unique passwords in summer 2024</li>
        <li><strong>Various healthcare breaches:</strong> Over 23 million records in 2025 alone</li>
      </ul>

      <h2>How BreachBeacon Helps</h2>
      <p>BreachBeacon continuously monitors dark web databases and breach dumps to detect your exposed credentials instantly. Our service provides:</p>
      <ul>
        <li>Real-time breach monitoring</li>
        <li>Instant email alerts</li>
        <li>Detailed breach analysis</li>
        <li>Actionable security recommendations</li>
        <li>Ongoing dark web surveillance</li>
      </ul>

      <h2>Conclusion</h2>
      <p>While the scale of this breach is unprecedented, it's important to understand that much of the data comes from previous incidents. However, the aggregation creates new risks for identity theft and account takeovers.</p>

      <p>The key to staying protected is proactive monitoring and good security hygiene. Don't wait for the next breach to affect you – start monitoring your exposure today and take steps to secure your digital identity.</p>
    `
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Security Alert': 'bg-red-500/10 text-red-400 border-red-500/20',
      'Breach Alert': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      'Industry Report': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      'Guide': 'bg-green-500/10 text-green-400 border-green-500/20',
      'Best Practices': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      'Threat Analysis': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
      'Tutorial': 'bg-pink-500/10 text-pink-400 border-pink-500/20'
    };
    return colors[category] || 'bg-gray-500/10 text-gray-400 border-gray-500/20';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      {/* Article Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
            >
              <SafeIcon icon={FiArrowLeft} className="mr-2" />
              Back to Blog
            </Link>

            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(blogPost.category)} mb-6`}>
              {blogPost.category}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {blogPost.title}
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {blogPost.excerpt}
            </p>

            <div className="flex items-center justify-between mb-8 pb-8 border-b border-slate-700">
              <div className="flex items-center text-gray-400">
                <SafeIcon icon={FiUser} className="mr-2" />
                <span className="mr-4">{blogPost.author}</span>
                <SafeIcon icon={FiCalendar} className="mr-2" />
                <span className="mr-4">{blogPost.date}</span>
                <span>{blogPost.readTime}</span>
              </div>

              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <SafeIcon icon={FiShare2} className="text-xl" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <SafeIcon icon={FiBookmark} className="text-xl" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <div 
              className="text-gray-300 leading-relaxed article-content"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
              style={{
                fontSize: '18px',
                lineHeight: '1.8'
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-purple-500/20 rounded-3xl p-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Protect Yourself from Future Breaches
            </h3>
            <p className="text-gray-300 mb-6">
              Don't wait for your data to be compromised. Start monitoring now with BreachBeacon.
            </p>
            <motion.a
              href="https://breachbeacon.io"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all space-x-2"
            >
              <span>Check Your Exposure Free</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPostPage;