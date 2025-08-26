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
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-jade-electric/10 to-clay-sunset/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-clay-sunset/10 to-jade-electric/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
      </div>
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-interactive-primary/20 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 leading-[0.9] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-jade-electric to-interactive-primary bg-clip-text text-transparent">
                Enez
              </span>{" "}
              <span className="block lg:inline">Gubeljic</span>
            </motion.h1>
            
            <motion.div 
              className="text-lg md:text-xl lg:text-2xl text-text-secondary/80 mb-3 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Développeur Full Stack & Designer UI/UX
            </motion.div>
            
            <motion.h2 
              className="text-base md:text-lg text-text-secondary/60 mb-8 min-h-[1.5rem] md:min-h-[2rem] font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <TypingText 
                text="Créateur d'expériences digitales modernes et performantes"
                delay={1200}
                speed={60}
              />
            </motion.h2>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 sm:gap-4 justify-center lg:justify-start mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <MagneticButton as="a" href="#contact" className="px-8 py-4 bg-gradient-to-r from-jade-electric to-jade-hover text-white rounded-md font-medium transition-all-smooth hover:shadow-lg hover:-translate-y-0.5 text-center w-full sm:w-auto text-base md:text-lg" intensity={0.4}>
                Me Contacter
              </MagneticButton>
              <MagneticButton as="a" href="#projects" className="btn-outline w-full sm:w-auto text-base md:text-lg px-8 py-4" intensity={0.3}>
                Voir mes Projets
              </MagneticButton>
            </motion.div>
            
            <motion.div 
              className="flex gap-8 mt-12 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a 
                href="https://github.com/EEnez" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-jade-electric hover:to-jade-hover transition-all duration-300 transform hover:scale-110"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <GithubIcon />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/enez-gubeljic-76313229b" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-jade-electric hover:to-jade-hover transition-all duration-300 transform hover:scale-110"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <LinkedInIcon />
              </motion.a>
              <motion.a 
                href="https://x.com/Enez_Gubeljic" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-3 rounded-full bg-gradient-to-r from-gray-900 to-black hover:from-jade-electric hover:to-jade-hover transition-all duration-300 transform hover:scale-110"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <TwitterIcon />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            className="relative pb-8 md:pb-12"
          >
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-jade-electric/20 to-interactive-primary/20 rounded-2xl rotate-12 animate-pulse" />
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-clay-sunset/20 to-jade-electric/20 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }} />
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-4 group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-jade-electric via-jade-hover to-jade-electric p-1 animate-spin" style={{ animationDuration: '8s' }}>
                <div className="w-full h-full rounded-full bg-background" />
              </div>
              
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-jade-electric/30 to-jade-hover/30 blur-sm" />
              
              <div className="relative inset-3 rounded-full overflow-hidden">
                <ProfileImage
                  src="/images/profil.png"
                  alt="Enez Gubeljic"
                  width={320}
                  height={320}
                  className="rounded-full shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
              
              <div className="absolute top-1/4 -right-4 w-2 h-2 bg-jade-electric rounded-full animate-ping" />
              <div className="absolute bottom-1/3 -left-3 w-1.5 h-1.5 bg-clay-sunset rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
              <div className="absolute top-2/3 right-0 w-1 h-1 bg-jade-hover rounded-full animate-ping" style={{ animationDelay: '1s' }} />
            </div>
            
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-jade-electric/5 via-jade-hover/5 to-jade-electric/5 blur-3xl scale-150 animate-pulse" style={{ animationDuration: '4s' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 