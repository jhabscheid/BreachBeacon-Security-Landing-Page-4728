import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX } = FiIcons;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-lg border-b border-purple-500/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/uploads/favicon.png" 
              alt="BreachBeacon Logo" 
              className="w-10 h-10 rounded-full"
              onError={(e) => {
                console.error('Logo failed to load:', e);
                e.target.style.display = 'none';
              }}
              onLoad={() => console.log('Logo loaded successfully')}
            />
            <span className="text-xl font-bold text-white">BreachBeacon</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/features" 
              className={`transition-colors ${isActive('/features') ? 'text-purple-400' : 'text-gray-300 hover:text-purple-400'}`}
            >
              Features
            </Link>
            <Link 
              to="/how-it-works" 
              className={`transition-colors ${isActive('/how-it-works') ? 'text-purple-400' : 'text-gray-300 hover:text-purple-400'}`}
            >
              How It Works
            </Link>
            <Link 
              to="/pricing" 
              className={`transition-colors ${isActive('/pricing') ? 'text-purple-400' : 'text-gray-300 hover:text-purple-400'}`}
            >
              Pricing
            </Link>
            <Link 
              to="/blog" 
              className={`transition-colors ${isActive('/blog') ? 'text-purple-400' : 'text-gray-300 hover:text-purple-400'}`}
            >
              Blog
            </Link>
            <motion.a
              href="https://breachbeacon.io"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              Get Protected
            </motion.a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            <SafeIcon icon={isMobileMenuOpen ? FiX : FiMenu} className="text-2xl" />
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-800/95 backdrop-blur-lg rounded-lg mt-2 p-4"
          >
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/features" 
                className={`transition-colors ${isActive('/features') ? 'text-purple-400' : 'text-gray-300 hover:text-purple-400'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/how-it-works" 
                className={`transition-colors ${isActive('/how-it-works') ? 'text-purple-400' : 'text-gray-300 hover:text-purple-400'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                to="/pricing" 
                className={`transition-colors ${isActive('/pricing') ? 'text-purple-400' : 'text-gray-300 hover:text-purple-400'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/blog" 
                className={`transition-colors ${isActive('/blog') ? 'text-purple-400' : 'text-gray-300 hover:text-purple-400'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <a
                href="https://breachbeacon.io"
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full text-white font-medium text-center"
              >
                Get Protected
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;