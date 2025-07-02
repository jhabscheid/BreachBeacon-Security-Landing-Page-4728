import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiUser, FiArrowRight, FiTrendingUp } = FiIcons;

const BlogPage = () => {
  const featuredPost = {
    slug: '16-billion-passwords-leaked-what-you-need-to-know',
    title: '16 Billion Passwords Leaked: What You Need to Know',
    excerpt: 'The largest password leak in history has exposed credentials from Google, Facebook, Apple, and more. Here\'s what happened and how to protect yourself.',
    author: 'Security Team',
    date: 'January 15, 2025',
    readTime: '8 min read',
    category: 'Security Alert',
    featured: true
  };

  const blogPosts = [
    {
      slug: 'medicare-breach-103k-accounts-compromised',
      title: 'Medicare Breach: 103K Accounts Compromised Through Fraudulent Creation',
      excerpt: 'Malicious actors created fake Medicare accounts using stolen beneficiary information. Learn how this breach affects you and what steps to take.',
      author: 'Healthcare Security',
      date: 'January 12, 2025',
      readTime: '6 min read',
      category: 'Breach Alert'
    },
    {
      slug: 'healthcare-cybersecurity-crisis-2025',
      title: 'Healthcare Cybersecurity Crisis: 23M Records Breached in 2025',
      excerpt: 'The healthcare sector faces unprecedented cyber threats. Discover the vulnerabilities and protection strategies for medical data.',
      author: 'Industry Analysis',
      date: 'January 10, 2025',
      readTime: '10 min read',
      category: 'Industry Report'
    },
    {
      slug: 'dark-web-monitoring-complete-guide',
      title: 'Dark Web Monitoring: A Complete Guide to Protecting Your Identity',
      excerpt: 'Understanding how cybercriminals trade stolen data and how dark web monitoring can keep you protected.',
      author: 'Tech Team',
      date: 'January 8, 2025',
      readTime: '12 min read',
      category: 'Guide'
    },
    {
      slug: 'password-security-best-practices-2025',
      title: 'Password Security Best Practices for 2025',
      excerpt: 'With billions of passwords compromised, learn the latest strategies for creating and managing secure passwords.',
      author: 'Security Team',
      date: 'January 5, 2025',
      readTime: '7 min read',
      category: 'Best Practices'
    },
    {
      slug: 'infostealer-malware-rising-threat',
      title: 'Infostealer Malware: The Rising Threat Behind Major Breaches',
      excerpt: 'How infostealer malware is responsible for the recent surge in credential theft and what you can do to protect yourself.',
      author: 'Threat Intelligence',
      date: 'January 3, 2025',
      readTime: '9 min read',
      category: 'Threat Analysis'
    },
    {
      slug: 'two-factor-authentication-setup-guide',
      title: 'Two-Factor Authentication: Complete Setup Guide',
      excerpt: 'Step-by-step instructions for enabling 2FA on all your important accounts to prevent unauthorized access.',
      author: 'Security Team',
      date: 'December 30, 2024',
      readTime: '5 min read',
      category: 'Tutorial'
    }
  ];

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
            Security Insights &
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Breach Intelligence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Stay informed about the latest security threats, breach analyses, and protection strategies
          </motion.p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <SafeIcon icon={FiTrendingUp} className="text-purple-400 mr-2" />
              <span className="text-purple-400 font-semibold">Featured Article</span>
            </div>

            <Link to={`/blog/${featuredPost.slug}`}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-purple-500/20 rounded-3xl p-8 md:p-12 hover:border-purple-500/40 transition-all"
              >
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(featuredPost.category)} mb-6`}>
                  {featuredPost.category}
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 hover:text-purple-300 transition-colors">
                  {featuredPost.title}
                </h2>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center text-gray-400 text-sm mb-6">
                  <SafeIcon icon={FiUser} className="mr-2" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <SafeIcon icon={FiCalendar} className="mr-2" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <span>{featuredPost.readTime}</span>
                </div>

                <div className="flex items-center text-purple-400 font-semibold">
                  <span>Read Full Article</span>
                  <SafeIcon icon={FiArrowRight} className="ml-2" />
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Latest Security Articles
            </h2>
            <p className="text-gray-300 text-lg">
              Expert insights on cybersecurity threats and protection strategies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`}>
                  <motion.article
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-slate-900/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all h-full"
                  >
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(post.category)} mb-4`}>
                      {post.category}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 hover:text-purple-300 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-gray-400 text-sm mb-4">
                      <SafeIcon icon={FiUser} className="mr-2" />
                      <span className="mr-3">{post.author}</span>
                      <SafeIcon icon={FiCalendar} className="mr-2" />
                      <span>{post.date}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                      <div className="flex items-center text-purple-400 text-sm font-semibold">
                        <span>Read More</span>
                        <SafeIcon icon={FiArrowRight} className="ml-2" />
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;