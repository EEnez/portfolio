"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="inline-block border-b-4 border-primary pb-2">À propos de moi</span>
          </h2>
          
          <div className="bg-white dark:bg-dark shadow-subtle rounded-xl p-8 md:p-10">
            <p className="text-lg mb-6">
            Développeur web junior full-stack basé à Bruxelles, je me spécialise dans les technologies modernes du développement web.
            </p>
            
            <p className="text-lg mb-6">
            <strong>Côté frontend</strong>, je développe des interfaces réactives avec React 18, TypeScript et Tailwind CSS, en privilégiant l&apos;accessibilité et les performances. <strong>Côté backend</strong>, j&apos;utilise Symfony 7 et MySQL pour créer des APIs RESTful robustes et sécurisées.
            </p>
            
            <p className="text-lg mb-6">
            Mes projets démontrent cette approche moderne : applications responsive, authentification JWT, et architectures microservices. Mon objectif ? Rejoindre une équipe expérimentée où je pourrai continuer à grandir techniquement tout en contribuant à des projets innovants.
            </p>
            
            {/* Section Compétences */}
            <div className="mt-8 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-center">Mes Compétences</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Frontend */}
                <div className="bg-background-secondary p-4 rounded-lg">
                  <h4 className="font-medium text-interactive-primary mb-3">Frontend</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">React 18</span>
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-interactive-primary h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">TypeScript</span>
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-interactive-primary h-2 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Tailwind CSS</span>
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-interactive-primary h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Backend */}
                <div className="bg-background-secondary p-4 rounded-lg">
                  <h4 className="font-medium text-interactive-primary mb-3">Backend</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Symfony 7</span>
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-interactive-primary h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">PHP</span>
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-interactive-primary h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">MySQL</span>
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-interactive-primary h-2 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Outils & Méthodes */}
                <div className="bg-background-secondary p-4 rounded-lg">
                  <h4 className="font-medium text-interactive-primary mb-3">Outils & Méthodes</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Git</span>
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-interactive-primary h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Responsive Design</span>
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-interactive-primary h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">APIs REST</span>
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-interactive-primary h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <motion.a
                href="/CV_Enez_Gubeljic.pdf"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-interactive-hover transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download
              >
                Télécharger mon CV
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 