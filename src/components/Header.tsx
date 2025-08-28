"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';


const navItems = [
  { name: 'Accueil', href: '#home' },
  { name: 'À propos', href: '#about' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Projets', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleSectionVisibility = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleSectionVisibility);
    return () => window.removeEventListener('scroll', handleSectionVisibility);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'backdrop-blur-xl bg-gradient-to-r from-background/90 via-background-lighter/85 to-background/90 shadow-2xl border-b border-interactive-primary/20' 
          : 'bg-gradient-to-r from-transparent via-background/5 to-transparent'
      }`}
    >
              <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-interactive-primary origin-left"
          style={{ scaleX }}
        />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <Link href="#home" className="flex items-center">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-2xl font-black text-text-primary transition-colors duration-300 group-hover:text-interactive-primary">
                  <span className="text-interactive-primary group-hover:text-jade-electric transition-all duration-300">E</span><span className="hidden sm:inline">nez</span>
                </span>
                                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-jade-electric group-hover:w-full transition-all duration-300" />
              </motion.div>
            </Link>
          </motion.div>
          
          <motion.nav
            className="hidden md:block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ul className="flex space-x-1">
              {navItems.map((item, index) => (
                <li key={item.name}>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  >
                    <Link 
                      href={item.href}
                      className={`relative px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 rounded-lg group overflow-hidden ${
                        activeSection === item.href.substring(1)
                          ? 'text-white bg-interactive-primary shadow-inner' 
                          : 'text-text-secondary hover:text-text-primary hover:bg-surface/30 backdrop-blur-sm'
                      }`}
                    >
                      
                      {activeSection !== item.href.substring(1) && (
                        <div className="absolute inset-0 bg-gradient-to-r from-jade-electric/10 to-clay-sunset/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                      
                      {activeSection === item.href.substring(1) && (
                        <motion.div
                          className="absolute inset-0 bg-interactive-primary rounded-lg"
                          layoutId="activeBackground"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.nav>
          
          <motion.button
            className="md:hidden p-3 rounded-xl bg-surface/30 backdrop-blur-sm border border-text-secondary/20 text-interactive-primary hover:text-white hover:bg-gradient-to-r hover:from-interactive-primary hover:to-blue-400 hover:border-transparent transition-all duration-300 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="sr-only">{isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
            <motion.div
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
              ) : (
                <Bars3Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-gradient-to-b from-background/95 to-background-secondary/95 backdrop-blur-xl border-t border-interactive-primary/30"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="container mx-auto px-4 py-6">
              <ul className="space-y-3">
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link 
                      href={item.href}
                      className={`block py-4 px-4 text-left w-full transition-all duration-300 rounded-xl relative overflow-hidden group ${
                        activeSection === item.href.substring(1)
                          ? 'text-white bg-interactive-primary shadow-lg shadow-interactive-primary/30' 
                          : 'text-text-secondary hover:text-text-primary hover:bg-surface/30 backdrop-blur-sm border border-text-secondary/10 hover:border-interactive-primary/30'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      
                      {activeSection === item.href.substring(1) && (
                        <motion.div
                          className="absolute inset-0 bg-interactive-primary"
                          layoutId="mobileActiveBackground"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      
                      
                      {activeSection !== item.href.substring(1) && (
                        <div className="absolute inset-0 bg-gradient-to-r from-jade-electric/10 to-clay-sunset/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                      
                      <span className="relative z-10 font-semibold flex items-center">
                        <span className={`w-2 h-2 rounded-full mr-3 transition-colors duration-300 ${
                          activeSection === item.href.substring(1) 
                            ? 'bg-white' 
                            : 'bg-interactive-primary group-hover:bg-interactive-primary'
                        }`} />
                        {item.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 