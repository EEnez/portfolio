"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import MagneticButton from './MagneticButton';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="pt-16 pb-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background-secondary" />
              <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-interactive-primary/5 to-interactive-hover/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
              <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-interactive-hover/5 to-interactive-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              À propos de{" "}
              <span className="text-interactive-primary">
                moi
              </span>
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-interactive-primary mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Side */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Intro Card */}
              <motion.div 
                className="bg-gradient-to-br from-surface/50 to-surface-secondary/30 backdrop-blur-sm border border-text-secondary/10 rounded-2xl p-8 relative overflow-hidden group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-interactive-primary/5 to-interactive-hover/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-interactive-primary">🚀 Développeur Full Stack</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Développeur web junior basé à <strong className="text-text-primary">Bruxelles</strong>, je me spécialise dans les technologies modernes du développement web avec une forte expertise en design et UX/UI.
                  </p>
                </div>
              </motion.div>

              {/* Skills Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <motion.div 
                  variants={itemVariants}
                  className="bg-gradient-to-br from-interactive-primary/10 to-interactive-hover/5 border border-interactive-primary/20 rounded-xl p-6 text-center group hover:border-interactive-primary/40 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl mb-3">🎨</div>
                  <h4 className="font-bold text-interactive-primary mb-2">Design</h4>
                  <p className="text-sm text-text-secondary">Photoshop, InDesign, Figma</p>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="bg-gradient-to-br from-interactive-primary/10 to-interactive-hover/5 border border-interactive-primary/20 rounded-xl p-6 text-center group hover:border-interactive-primary/40 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl mb-3">⚛️</div>
                  <h4 className="font-bold text-interactive-primary mb-2">Frontend</h4>
                  <p className="text-sm text-text-secondary">React, TypeScript, Tailwind</p>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="bg-gradient-to-br from-interactive-primary/10 to-interactive-hover/5 border border-interactive-primary/20 rounded-xl p-6 text-center group hover:border-interactive-primary/40 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl mb-3">⚙️</div>
                  <h4 className="font-bold text-interactive-primary mb-2">Backend</h4>
                  <p className="text-sm text-text-secondary">Symfony, MySQL, APIs</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Philosophy Side */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div 
                className="bg-gradient-to-br from-surface/50 to-surface-secondary/30 backdrop-blur-sm border border-text-secondary/10 rounded-2xl p-8 relative overflow-hidden group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-interactive-hover/5 to-interactive-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-interactive-primary">✨ Ma Philosophie</h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Ma <strong className="text-text-primary">double compétence design/développement</strong> me permet de créer des expériences utilisateur complètes, de la conception graphique à l&apos;implémentation technique.
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    Mes projets démontrent cette approche holistique : <strong className="text-interactive-primary">interfaces soignées, animations fluides, architectures microservices</strong> et design systems cohérents.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-surface/50 to-surface-secondary/30 backdrop-blur-sm border border-text-secondary/10 rounded-2xl p-8 relative overflow-hidden group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-interactive-primary/5 to-interactive-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-interactive-primary">🎯 Mon Objectif</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Rejoindre une <strong className="text-text-primary">équipe expérimentée</strong> où je pourrai continuer à grandir techniquement tout en contribuant à des <strong className="text-interactive-primary">projets innovants</strong>.
                  </p>
                </div>
              </motion.div>

              {/* CV Download */}
              <motion.div variants={itemVariants} className="text-center">
                <MagneticButton 
                  as="a" 
                  href="/CV_Enez_Gubeljic.pdf"
                  className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 inline-flex items-center gap-3"
                  intensity={0.4}
                  download
                >
                  <span>📄</span>
                  Télécharger mon CV
                </MagneticButton>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 