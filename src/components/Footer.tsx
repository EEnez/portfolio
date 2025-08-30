"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedInIcon, TwitterIcon } from './SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background-secondary to-background">
      {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-interactive-primary/5 to-interactive-hover/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-interactive-hover/5 to-interactive-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="#home" className="group">
                <h3 className="text-3xl font-black mb-4">
                  <span className="text-interactive-primary">
                    Enez
                  </span>
                </h3>
              </Link>
            </motion.div>
            <p className="text-text-secondary leading-relaxed mb-6">
              Développeur Full Stack & Designer UI/UX basé à Bruxelles. Je transforme les idées en applications web modernes et fonctionnelles.
            </p>
            <div className="w-16 h-1 bg-interactive-primary rounded-full" />
          </motion.div>
          
          {/* Navigation Section */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-6 text-text-primary">Navigation</h4>
            <ul className="space-y-4">
              {['Accueil', 'À propos', 'Compétences', 'Projets', 'Contact'].map((item) => {
                const href = item === 'Accueil' ? '#home' : 
                           item === 'À propos' ? '#about' :
                           item === 'Compétences' ? '#skills' :
                           item === 'Projets' ? '#projects' : '#contact';
                return (
                  <li key={item}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link 
                        href={href} 
                        className="text-text-secondary hover:text-interactive-primary transition-all duration-300 group flex items-center"
                      >
                        <span className="w-2 h-2 bg-text-secondary/40 rounded-full mr-3 group-hover:bg-interactive-primary transition-colors duration-300" />
                        {item}
                      </Link>
                    </motion.div>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-6 text-text-primary">Contact</h4>
            <div className="space-y-4">
              <motion.a
                href="mailto:enezgubeljic@gmail.com"
                className="group block"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center space-x-3 text-text-secondary group-hover:text-interactive-primary transition-colors duration-300">
                  <div className="w-8 h-8 bg-interactive-primary/10 rounded-lg flex items-center justify-center group-hover:bg-interactive-primary/20">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span className="text-sm">enezgubeljic@gmail.com</span>
                </div>
              </motion.a>
              
              <motion.a
                href="tel:+32486081369"
                className="group block"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center space-x-3 text-text-secondary group-hover:text-interactive-primary transition-colors duration-300">
                  <div className="w-8 h-8 bg-interactive-primary/10 rounded-lg flex items-center justify-center group-hover:bg-interactive-primary/20">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="text-sm">+32 486 08 13 69</span>
                </div>
              </motion.a>
              
              <motion.a
                href="https://maps.google.com/?q=Bruxelles,Belgique"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center space-x-3 text-text-secondary group-hover:text-interactive-primary transition-colors duration-300">
                  <div className="w-8 h-8 bg-interactive-primary/10 rounded-lg flex items-center justify-center group-hover:bg-interactive-primary/20">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Bruxelles, Belgique</span>
                </div>
              </motion.a>
            </div>
          </motion.div>
          
          {/* Social Section */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-6 text-text-primary">Réseaux</h4>
            <div className="space-y-4">
              <motion.a
                href="https://github.com/EEnez"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 p-4 bg-gradient-to-r from-interactive-primary/20 to-interactive-hover/20 border border-interactive-primary/20 rounded-xl hover:from-interactive-hover/30 hover:to-interactive-primary/30 hover:border-interactive-hover/30 transition-all duration-300"
                whileHover={{ scale: 1.02, x: 5 }}
                style={{ cursor: 'pointer' }}
                title="GitHub"
              >
                <div className="flex-shrink-0">
                  <GithubIcon variant="footer" />
                </div>
                <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">GitHub</span>
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/enez-gubeljic-76313229b"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 p-4 bg-gradient-to-r from-interactive-primary/20 to-interactive-hover/20 border border-interactive-primary/20 rounded-xl hover:from-interactive-hover/30 hover:to-interactive-primary/30 hover:border-interactive-hover/30 transition-all duration-300"
                whileHover={{ scale: 1.02, x: 5 }}
                style={{ cursor: 'pointer' }}
                title="LinkedIn"
              >
                <div className="flex-shrink-0">
                  <LinkedInIcon variant="footer" />
                </div>
                <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">LinkedIn</span>
              </motion.a>
              
              <motion.a
                href="https://x.com/Enez_Gubeljic"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 p-4 bg-gradient-to-r from-interactive-primary/20 to-interactive-hover/20 border border-interactive-primary/20 rounded-xl hover:from-interactive-hover/30 hover:to-interactive-primary/30 hover:border-interactive-hover/30 transition-all duration-300"
                style={{ cursor: 'pointer' }}
                title="Twitter"
              >
                <div className="flex-shrink-0">
                  <TwitterIcon variant="footer" />
                </div>
                <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">Twitter</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-text-secondary/20 relative"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-interactive-primary/50 to-transparent" />
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p 
              className="text-text-secondary text-sm"
              whileHover={{ scale: 1.02 }}
            >
              © {currentYear} <span className="text-interactive-primary font-semibold">Enez Gubeljic</span>. Tous droits réservés.
            </motion.p>
            
            <motion.div
              className="flex items-center space-x-4 text-xs text-text-secondary/70"
              whileHover={{ scale: 1.02 }}
            >
              <span className="flex items-center space-x-1">
                <span>Built with Next.js & Tailwind</span>
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  ⚡
                </motion.span>
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 