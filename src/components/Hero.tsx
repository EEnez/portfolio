"use client";

import { motion } from 'framer-motion';
import ProfileImage from './ProfileImage';
import { GithubIcon, LinkedInIcon, TwitterIcon } from './SocialIcons';
import TypingText from './TypingText';
import MagneticButton from './MagneticButton';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pb-16 md:pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-lighter to-background-secondary" />
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-interactive-primary/20 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-interactive-primary">Enez</span> Gubeljic
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-2xl text-text-secondary mb-8 min-h-[2.5rem] md:min-h-[3rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <TypingText 
                text="Développeur Full Stack & Designer UI/UX"
                delay={1200}
                speed={80}
              />
            </motion.h2>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <MagneticButton as="a" href="#contact" className="btn-primary w-full sm:w-auto" intensity={0.4}>
                Me Contacter
              </MagneticButton>
              <MagneticButton as="a" href="#projects" className="btn-outline w-full sm:w-auto" intensity={0.3}>
                Voir mes Projets
              </MagneticButton>
            </motion.div>
            
            <motion.div 
              className="flex gap-6 mt-8 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a href="https://github.com/EEnez" target="_blank" rel="noopener noreferrer" className="group">
                <GithubIcon />
              </a>
              <a href="https://www.linkedin.com/in/enez-gubeljic-76313229b" target="_blank" rel="noopener noreferrer" className="group">
                <LinkedInIcon />
              </a>
              <a href="https://x.com/Enez_Gubeljic" target="_blank" rel="noopener noreferrer" className="group">
                <TwitterIcon />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative pb-8 md:pb-12"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-4">
              <ProfileImage
                src="/images/profil.png"
                alt="Enez Gubeljic"
                width={320}
                height={320}
                className="rounded-full border-4 border-interactive-primary/20 shadow-floating"
                priority
              />
              
              <div className="absolute inset-0 rounded-full bg-interactive-primary/10 blur-2xl animate-pulse" />
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-interactive-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-interactive-primary/5 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 