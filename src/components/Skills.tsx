"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillCategories, learningSkills } from '@/data/skills';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <motion.div
            variants={cardVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-interactive-primary">Mes</span> Compétences
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Un aperçu de mes compétences techniques et outils maîtrisés 
              à travers mes projets personnels et mon expérience pratique.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.id}
                variants={cardVariants}
                className="bg-background-card rounded-xl p-8 shadow-card hover:shadow-floating transition-all duration-300 border border-border-subtle"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-interactive-primary mb-2">
                    {category.name}
                  </h3>
                  {category.description && (
                    <p className="text-sm text-text-secondary mb-4">
                      {category.description}
                    </p>
                  )}
                  <div className="w-12 h-1 bg-interactive-primary rounded-full"></div>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      className="group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-start gap-3 mb-1">
                            <h4 className={`font-medium transition-colors ${
                              skill.highlighted 
                                ? (skill.techSkill ? 'text-accent-tech' : 'text-interactive-primary')
                                : (skill.techSkill ? 'text-text-primary group-hover:text-accent-tech' : 'text-text-primary group-hover:text-interactive-primary')
                            }`}>
                              {skill.name}
                            </h4>
                            {skill.highlighted && (
                              <motion.div
                                variants={badgeVariants}
                                className={`w-2 h-2 rounded-full flex-shrink-0 mt-2 ${
                                  skill.techSkill ? 'bg-accent-tech' : 'bg-interactive-primary'
                                }`}
                              />
                            )}
                          </div>
                          {skill.description && (
                            <p className="text-sm text-text-secondary leading-relaxed">
                              {skill.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          
          <motion.div
            variants={cardVariants}
            className="mt-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              <div className="bg-background-card rounded-xl p-8 shadow-card border border-border-subtle">
                <h3 className="text-xl font-semibold mb-4 text-interactive-primary">
                  Mon Processus Design-to-Code
                </h3>
                <p className="text-text-secondary mb-6">
                  Ma double expertise design/développement me permet de créer des expériences utilisateur 
                  complètes, de la conception à l&apos;implémentation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-interactive-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-interactive-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary">Design & Prototypage</h4>
                      <p className="text-sm text-text-secondary">Photoshop, InDesign, Figma pour créer des maquettes et prototypes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-interactive-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-interactive-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary">Développement Frontend</h4>
                      <p className="text-sm text-text-secondary">Transformation pixel-perfect en code React/TypeScript</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-interactive-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-interactive-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary">Backend Integration</h4>
                      <p className="text-sm text-text-secondary">APIs robustes avec Symfony pour une expérience complète</p>
                    </div>
                  </div>
                </div>
              </div>

              
              <div className="bg-background-card rounded-xl p-8 shadow-card border border-border-subtle">
                <h3 className="text-xl font-semibold mb-4 text-interactive-primary">
                  En apprentissage continu
                </h3>
                <p className="text-text-secondary mb-6">
                  Toujours curieux d&apos;apprendre de nouvelles technologies pour rester à la pointe 
                  des tendances du développement web et du design.
                </p>
                <div className="space-y-3">
                  {learningSkills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      className="flex items-start space-x-3 group"
                    >
                      <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0 mt-2"></div>
                      <div>
                        <h4 className="font-medium text-text-primary group-hover:text-interactive-primary transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-text-secondary">
                          {skill.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
