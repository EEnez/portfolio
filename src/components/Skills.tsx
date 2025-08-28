"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
        staggerChildren: 0.15,
        delayChildren: 0.1
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skillCategories = [
    {
      name: "Frontend",
      icon: "⚛️",
      color: "jade-electric",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"]
    },
    {
      name: "Backend", 
      icon: "⚙️",
      color: "interactive-primary",
      skills: ["PHP", "Symfony", "MySQL", "REST APIs", "Node.js"]
    },
    {
      name: "Design",
      icon: "🎨", 
      color: "clay-sunset",
      skills: ["Figma", "Photoshop", "UI/UX", "Design Systems", "Prototyping"]
    },
    {
      name: "Tools",
      icon: "🛠️",
      color: "gold-rose", 
      skills: ["Git", "Docker", "VS Code", "Webpack", "npm/yarn"]
    }
  ];

  return (
    <section id="skills" className="pt-16 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background-secondary to-background" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-clay-sunset/5 to-jade-electric/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-jade-electric/5 to-clay-sunset/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '3s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
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
              <span className="text-jade-electric">
                Compétences
              </span>
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-jade-electric mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="group relative"
              >
                <motion.div 
                  className="bg-gradient-to-br from-surface/50 to-surface-secondary/30 backdrop-blur-sm border border-text-secondary/10 rounded-2xl p-8 relative overflow-hidden h-full"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`absolute inset-0 bg-${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 text-center">
                    <motion.div 
                      className="text-4xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {category.icon}
                    </motion.div>
                    
                    <h3 className={`text-xl font-bold mb-6 text-${category.color}`}>
                      {category.name}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1 text-xs font-medium bg-text-secondary/10 border border-text-secondary/20 rounded-full text-text-secondary hover:text-text-primary hover:border-text-secondary/40 transition-all duration-300"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: 0.8 + (index * 0.1) + (skillIndex * 0.05),
                            ease: "easeOut"
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${category.color} rounded-full opacity-20 animate-pulse`} />
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <motion.div 
              className="bg-gradient-to-br from-surface/50 to-surface-secondary/30 backdrop-blur-sm border border-text-secondary/10 rounded-2xl p-8 max-w-2xl mx-auto"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
                              <h3 className="text-2xl font-bold mb-4 text-jade-electric">
                🚀 Toujours en évolution
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Passionné par l&apos;apprentissage continu, j&apos;explore constamment de nouvelles technologies 
                et pratiques pour rester à la pointe du développement moderne.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
