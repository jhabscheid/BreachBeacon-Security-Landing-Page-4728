import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiTwitter, FiLinkedin, FiGithub } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img 
                src="/favicon.png" 
                alt="BreachBeacon Logo" 
                className="w-10 h-10 rounded-full"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="text-xl font-bold text-white">BreachBeacon</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Protecting your digital identity with real-time breach monitoring and instant alerts. 
              Stay one step ahead of cybercriminals.
            </p>
            <div className="flex items-center space-x-4">
              <SafeIcon icon={FiTwitter} className="text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <SafeIcon icon={FiLinkedin} className="text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <SafeIcon icon={FiGithub} className="text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <SafeIcon icon={FiMail} className="text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-400 hover:text-purple-400 transition-colors">Features</Link></li>
              <li><Link to="/how-it-works" className="text-gray-400 hover:text-purple-400 transition-colors">How It Works</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-purple-400 transition-colors">Pricing</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-purple-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 BreachBeacon. All rights reserved. | 
            <a href="https://breachbeacon.io" className="text-purple-400 hover:text-purple-300 ml-1">
              breachbeacon.io
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;