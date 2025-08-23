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
    <section id="about" className="pt-24 pb-20 bg-white dark:bg-dark">
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
            Développeur web junior full-stack basé à Bruxelles, je me spécialise dans les technologies modernes du développement web avec une forte expertise en design et UX/UI.
            </p>
            
            <p className="text-lg mb-6">
            <strong>Côté design</strong>, je maîtrise Photoshop et InDesign pour la création graphique, ainsi que Figma pour le prototypage et les interfaces. <strong>Côté frontend</strong>, je développe des interfaces réactives avec React 18, TypeScript et Tailwind CSS, en privilégiant l&apos;accessibilité et les performances. <strong>Côté backend</strong>, j&apos;utilise Symfony 7 et MySQL pour créer des APIs RESTful robustes et sécurisées.
            </p>
            
            <p className="text-lg mb-8">
            Ma double compétence design/développement me permet de créer des expériences utilisateur complètes, de la conception graphique à l&apos;implémentation technique. Mes projets démontrent cette approche holistique : interfaces soignées, animations fluides, architectures microservices et design systems cohérents. Mon objectif ? Rejoindre une équipe expérimentée où je pourrai continuer à grandir techniquement tout en contribuant à des projets innovants.
            </p>

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