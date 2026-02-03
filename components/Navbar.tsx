import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const toggleLanguage = () => {
      setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-800/95 backdrop-blur-md border-b border-white/10 h-16 shadow-lg' 
          : 'bg-transparent h-20 border-b border-transparent'
      }`}
    >
      <div className="w-full px-4 h-full flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-10 group">
          <div className="bg-blue-600/20 p-2 rounded-lg group-hover:bg-blue-600/40 transition-colors">
            <Terminal className="text-blue-500 w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Dev<span className="text-blue-500">Portfolio</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
            </a>
          ))}
          
          {/* Language Switcher */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-xs font-mono font-bold text-gray-300"
          >
              <Globe size={14} className="text-blue-400" />
              <span>{language.toUpperCase()}</span>
          </button>
        </div>

        {/* Mobile Toggle & Lang */}
        <div className="md:hidden flex items-center gap-4">
             <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-bold text-gray-300"
            >
                {language.toUpperCase()}
            </button>

            <button
            className="text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            >
            {isOpen ? <X /> : <Menu />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 left-0 w-full bg-slate-800 border-b border-white/10 md:hidden flex flex-col items-center py-6 gap-6 shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;