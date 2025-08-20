export interface Skill {
  name: string;
  category: string;
  highlighted?: boolean;
  description?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
  description?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    description: 'Création d\'interfaces utilisateur modernes et réactives',
    skills: [
      { name: 'React Ecosystem', category: 'frontend', highlighted: true, description: 'React 18, Next.js, TypeScript' },
      { name: 'Modern CSS', category: 'frontend', highlighted: true, description: 'Tailwind CSS, CSS3, Responsive Design' },
      { name: 'JavaScript ES6+', category: 'frontend', description: 'Vanilla JS moderne et asynchrone' },
      { name: 'Framer Motion', category: 'frontend', description: 'Animations et micro-interactions' }
    ]
  },
  {
    id: 'backend',
    name: 'Backend Development', 
    description: 'Développement d\'APIs robustes et architecture serveur',
    skills: [
      { name: 'PHP & Symfony', category: 'backend', highlighted: true, description: 'PHP 8.x, Symfony 7, Doctrine ORM' },
      { name: 'API Development', category: 'backend', highlighted: true, description: 'REST APIs, JWT, API Platform' },
      { name: 'Node.js', category: 'backend', description: 'Express.js, server-side JavaScript' },
      { name: 'Database Design', category: 'backend', description: 'MySQL, PostgreSQL, optimisation' }
    ]
  },
  {
    id: 'design',
    name: 'Design & UX/UI',
    description: 'Conception d\'expériences utilisateur et interfaces visuelles',
    skills: [
      { name: 'UI/UX Design', category: 'design', highlighted: true, description: 'User research, wireframing, prototyping' },
      { name: 'Adobe Creative Suite', category: 'design', highlighted: true, description: 'Photoshop, InDesign, design graphique' },
      { name: 'Figma', category: 'design', description: 'Prototypage collaboratif et design systems' },
      { name: 'Design Systems', category: 'design', description: 'Composants réutilisables et cohérence' }
    ]
  },
  {
    id: 'tools',
    name: 'Outils & Workflow',
    description: 'Environnement de développement et outils de productivité', 
    skills: [
      { name: 'Git & GitHub', category: 'tools', highlighted: true, description: 'Versionning, collaboration, CI/CD' },
      { name: 'Development Environment', category: 'tools', description: 'VS Code, Terminal, Package managers' },
      { name: 'Docker', category: 'tools', description: 'Containerisation et déploiement' }
    ]
  }
];

export const learningSkills = [
  { name: 'Vue.js', description: 'Alternative à React pour diversifier mes compétences' },
  { name: 'Python', description: 'Élargissement vers d\'autres écosystèmes backend' },
  { name: 'DevOps & Cloud', description: 'AWS, déploiement automatisé' },
  { name: 'Motion Design', description: 'Animations avancées et micro-interactions' }
];

export const getSkillsByCategory = (categoryId: string): Skill[] => {
  const category = skillCategories.find(cat => cat.id === categoryId);
  return category ? category.skills : [];
};

export const getAllSkills = (): Skill[] => {
  return skillCategories.flatMap(category => category.skills);
};

export const getHighlightedSkills = (): Skill[] => {
  return getAllSkills().filter(skill => skill.highlighted);
};

export const getSkillByName = (skillName: string): Skill | undefined => {
  const allSkills = getAllSkills();
  return allSkills.find(s => s.name === skillName);
};

