"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects, categories, type CategoryId, type Project } from '@/data/projects';
import ProjectCard from './ProjectCard';
import ImageModal from './ImageModal';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const getAnimationVariant = (index: number) => {
  const variants = [
    {
      initial: { opacity: 0, y: 50, scale: 0.9 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: { duration: 0.6, ease: "easeOut" }
    },
    {
      initial: { opacity: 0, x: -50, y: 20 },
      animate: { opacity: 1, x: 0, y: 0 },
      transition: { duration: 0.6, ease: "easeOut" }
    },
    {
      initial: { opacity: 0, x: 50, y: 20 },
      animate: { opacity: 1, x: 0, y: 0 },
      transition: { duration: 0.6, ease: "easeOut" }
    },
    {
      initial: { opacity: 0, scale: 0.8, rotate: -5 },
      animate: { opacity: 1, scale: 1, rotate: 0 },
      transition: { duration: 0.6, ease: "easeOut" }
    },
    {
      initial: { opacity: 0, y: 30, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    {
      initial: { opacity: 0, y: 40, scale: 0.9 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: { duration: 0.5, ease: "easeOut" }
    }
  ];
  
  return variants[index % variants.length];
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleImageClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="pt-16 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background-secondary" />
              <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-interactive-primary/5 to-interactive-hover/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '15s' }} />
              <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-r from-interactive-hover/5 to-interactive-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Mes{" "}
              <span className="text-interactive-primary">
                Projets
              </span>
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-interactive-primary mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              animate={inView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <motion.p 
              className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Une sélection de mes créations récentes, chacune reflétant ma passion pour l&apos;innovation et l&apos;excellence technique.
            </motion.p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 relative overflow-hidden group ${
                  activeCategory === category.id
                    ? 'bg-interactive-primary text-text-dark shadow-lg shadow-interactive-primary/30'
                    : 'bg-surface/50 backdrop-blur-sm border border-text-secondary/20 text-text-secondary hover:text-text-primary hover:border-interactive-primary/40'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
              >
                <span className="relative z-10">{category.name}</span>
                {activeCategory !== category.id && (
                  <div className="absolute inset-0 bg-interactive-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </motion.button>
            ))}
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => {
              const animationVariant = getAnimationVariant(index);
              return (
                <motion.div 
                  key={project.id} 
                  variants={itemVariants}
                  initial={animationVariant.initial}
                  animate={inView ? animationVariant.animate : animationVariant.initial}
                  transition={{ 
                    ...animationVariant.transition,
                    delay: 1.2 + (index * 0.1)
                  }}
                  layout
                >
                <ProjectCard 
                  project={project} 
                  onImageClick={handleImageClick}
                />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {selectedProject && (
        <ImageModal
          isOpen={!!selectedProject}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </section>
  );
} 