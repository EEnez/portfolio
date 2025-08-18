"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import { projects, categories, type Project, type CategoryId } from '@/data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

// Variants d'animation
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

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Filtrer les projets en fonction de la catégorie active
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="inline-block border-b-4 border-interactive-primary pb-2">Mes Projets</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Découvrez une sélection de mes projets récents. Chaque projet est une opportunité d&apos;apprendre et d&apos;appliquer de nouvelles technologies.
            </p>
          </div>
          
          {/* Filtres de catégories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-interactive-primary text-white shadow-lg shadow-interactive-primary/20'
                    : 'bg-background-card text-text-secondary hover:bg-interactive-primary/10 hover:text-interactive-primary'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
          
          {/* Grille de projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Modal de détails du projet */}
          <AnimatePresence>
            {selectedProject && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                onClick={() => setSelectedProject(null)}
              >
                <ProjectModal
                  project={selectedProject}
                  onClose={() => setSelectedProject(null)}
                />
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
} 