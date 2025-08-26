export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
  category: string;
  featured: boolean;
}

export const categories = [
  { id: 'all', name: 'Tous' },
  { id: 'web', name: 'Web' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'backend', name: 'Backend' },
] as const;

export type CategoryId = typeof categories[number]['id'];

export const projects: Project[] = [
  {
    id: 1,
    title: 'LevelList - Collection de Jeux',
    description: 'Application pour gérer une collection de jeux vidéo. Dashboard interactif, recherche avancée, statistiques et authentification sécurisée avec architecture REST API.',
    image: '/images/project1.png',
    tags: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS", "JWT"],
    codeLink: 'https://github.com/EEnez/levelist',
    category: 'web',
    featured: true
  },
  {
    id: 2,
    title: 'Gestion de contenu',
    description: 'Plateforme moderne de gestion de contenu avec interface d\'administration intuitive. Système complet de création et gestion d\'articles avec authentification et gestion des rôles.',
    image: '/images/project2.png',
    tags: ["Symfony", "MySQL", "Bootstrap", "Twig", "Doctrine"],
    codeLink: 'https://github.com/EEnez/sym64ENEZ',
    category: 'web',
    featured: true
  },
  {
    id: 3,
    title: 'Site Web CF2M',
    description: 'Redesign complet du site du centre de formation CF2M. Design moderne et responsive avec optimisation UX pour améliorer l\'engagement et les conversions.',
    image: '/images/project3.png',
    tags: ["Figma", "WordPress", "HTML", "CSS", "JavaScript"],
    codeLink: 'https://github.com/EEnez/cf2m-redesign',
    category: 'web',
    featured: true
  }
];