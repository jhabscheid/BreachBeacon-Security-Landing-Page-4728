import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiShield, FiMail, FiTwitter, FiLinkedin, FiGithub } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <SafeIcon icon={FiShield} className="text-2xl text-purple-400" />
              <span className="text-xl font-bold text-white">BreachBeacon</span>
            </div>
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
              <li><a href="#features" className="text-gray-400 hover:text-purple-400 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-purple-400 transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-purple-400 transition-colors">Pricing</a></li>
              <li><a href="https://breachbeacon.io" className="text-gray-400 hover:text-purple-400 transition-colors">Get Started</a></li>
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