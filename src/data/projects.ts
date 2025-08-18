export interface Project {
  id: number;
  title: string;
  description: string;
  images: {
    url: string;
    alt: string;
    isThumbnail?: boolean;
  }[];
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
    title: 'Gestion de contenu',
    description: 'Une plateforme moderne de gestion de contenu permettant la création et la gestion d\'articles avec une interface d\'administration intuitive.',
    images: [
      {
        url: '/images/project1-thumbnail.webp',
        alt: 'Création d\'un article',
        isThumbnail: true
      },
      {
        url: '/images/project1.2-thumbnail.webp',
        alt: 'Gestion des articles'
      },
      {
        url: '/images/project1.3-thumbnail.webp',
        alt: 'Inscription'
      }
    ],
    tags: ["Symfony 6.4", "MySQL", "Bootstrap 5", "Twig", "Doctrine"],
    category: 'web',
    featured: true
  },
  {
    id: 2,
    title: 'Site Web du Centre de Formation CF2M',
    description: 'Le centre de formation CF2M m\'a confié la mission de redesigner leur site web pour moderniser son design et améliorer l\'expérience utilisateur.',
    images: [
      {
        url: '/images/project2-thumbnail.webp',
        alt: 'Page d\'accueil du site CF2M',
        isThumbnail: true
      },
      {
        url: '/images/project2.1-thumbnail.webp',
        alt: 'Page des formations'
      },
      {
        url: '/images/project2.2-thumbnail.webp',
        alt: 'Informations pratiques'
      }
    ],
    tags: ["Figma", "WordPress", "Kadence Theme", "HTML", "CSS", "JavaScript"],
    category: 'web',
    featured: true
  },
  {
    id: 3,
    title: 'LevelList - Gestionnaire de Collection de Jeux',
    description: 'Application web full-stack développée avec React et Node.js pour gérer une collection personnelle de jeux vidéo. Interface moderne avec dashboard interactif, système de recherche avancée, gestion des statistiques de jeu et authentification sécurisée. Architecture REST API avec base de données optimisée.',
    images: [
      {
        url: '/images/project3-thumbnail.webp',
        alt: 'Dashboard principal avec statistiques de jeux',
        isThumbnail: true
      },
      {
        url: '/images/project3.1-thumbnail.webp',
        alt: 'Interface de gestion des jeux avec filtres'
      },
      {
        url: '/images/project3.2-thumbnail.webp',
        alt: 'Formulaire d\'ajout de jeu avec validation'
      },
    ],
    tags: ["React 18", "Node.js", "Express", "MySQL", "Tailwind CSS", "JWT", "Axios"],
    category: 'web',
    featured: true
  }
]; 