# Portfolio - Enez Gubeljic

> Portfolio professionnel d'un développeur Full Stack Junior spécialisé en React, TypeScript et Symfony.

## 🌐 Demo Live

**[Voir le portfolio →](https://www.enezgubeljic.com/)**

## 🛠️ Technologies Utilisées

### Frontend
- **Next.js 14.1.0** - Framework React avec App Router
- **React 18.2.0** - Bibliothèque UI moderne
- **TypeScript 5** - Type safety et développement moderne
- **Tailwind CSS 3.4.17** - Design system et responsive design
- **Framer Motion 12.4.7** - Animations fluides et interactives
- **React Intersection Observer 9.15.1** - Animations déclenchées au scroll

### Outils & Performance
- **Sharp 0.33.5** - Optimisation d'images avancée
- **Heroicons 2.2.0** - Icônes SVG modernes
- **ESLint 8.56.0** - Qualité et cohérence du code
- **PostCSS 8.5.3** - Traitement CSS avancé
- **Autoprefixer 10.4.20** - Compatibilité navigateurs
- **Responsive design** mobile-first

## 🎨 Fonctionnalités

- ✅ **Design moderne** avec dégradés colorés et animations
- ✅ **Section compétences** interactive avec catégorisation et animations
- ✅ **Galerie de projets** avec modal interactif et filtres par catégorie
- ✅ **Formulaire de contact** fonctionnel avec validation
- ✅ **CV téléchargeable** intégré
- ✅ **Liens sociaux** vers GitHub, LinkedIn et Twitter/X
- ✅ **Performance optimisée** (Core Web Vitals)
- ✅ **Images optimisées** avec composants dédiés et lazy loading
- ✅ **Animations fluides** avec Framer Motion et Intersection Observer
- ✅ **Interface responsive** adaptée à tous les écrans

## 🚀 Installation & Développement

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Cloner le repository (pour consultation du code uniquement)
git clone https://github.com/EEnez/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement local
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Scripts disponibles
```bash
npm run dev          # Serveur de développement local
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Vérification du code (ESLint)
```

## 📱 Responsive Design

Le portfolio est entièrement responsive et optimisé pour :
- 📱 **Mobile** (320px+)
- 📱 **Tablette** (768px+) 
- 💻 **Desktop** (1024px+)
- 🖥️ **Large Desktop** (1440px+)

## 🏗️ Architecture Technique

### Structure du Projet
```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Styles globaux et Tailwind
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Page d'accueil
├── components/          # Composants React réutilisables
│   ├── Hero.tsx        # Section d'accueil
│   ├── About.tsx       # Présentation personnelle
│   ├── Skills.tsx      # Compétences techniques
│   ├── Projects.tsx    # Galerie de projets
│   ├── Contact.tsx     # Formulaire de contact
│   ├── Header.tsx      # Navigation
│   ├── Footer.tsx      # Pied de page
│   ├── ImageModal.tsx  # Modal pour projets
│   ├── ProjectCard.tsx # Carte de projet
│   ├── ProjectImage.tsx # Image de projet optimisée
│   ├── ProfileImage.tsx # Image de profil
│   ├── OptimizedImage.tsx # Composant image optimisé
│   └── SocialIcons.tsx # Icônes sociales
├── data/               # Données statiques
│   ├── projects.ts     # Projets et catégories
│   └── skills.ts       # Compétences et catégories
└── utils/              # Fonctions utilitaires
    └── validation.ts   # Validation des formulaires

public/
├── images/             # Images optimisées des projets
├── CV_Enez_Gubeljic.pdf
└── icônes SVG          # Icônes et assets
```

### Composants Principaux
- **`Hero`** - Section d'accueil avec image de profil et liens sociaux
- **`About`** - Présentation personnelle 
- **`Skills`** - Compétences techniques organisées par catégories avec animations
- **`Projects`** - Galerie de projets avec filtres et modal interactif
- **`Contact`** - Formulaire de contact avec validation
- **`Header`** - Navigation responsive
- **`Footer`** - Pied de page avec informations
- **`ImageModal`** - Modal interactif pour visualiser les projets
- **`ProjectCard`** - Carte de projet avec tags et liens
- **`ProfileImage`** - Image de profil optimisée
- **`SocialIcons`** - Icônes sociales (GitHub, LinkedIn, Twitter)

## 🎯 Projets Présentés

### 1. LevelList - Collection de Jeux
- **Technologies :** React, Node.js, Express, MySQL, Tailwind CSS, JWT
- **Fonctionnalités :** Dashboard interactif, recherche avancée, statistiques et authentification sécurisée avec architecture REST API
- **Catégorie :** Web
- **Lien :** [Voir le projet](https://github.com/EEnez/levelist)

### 2. Gestion de contenu
- **Technologies :** Symfony, MySQL, Bootstrap, Twig, Doctrine
- **Fonctionnalités :** Plateforme moderne avec interface d'administration intuitive. Système complet de création et gestion d'articles avec authentification et gestion des rôles
- **Catégorie :** Web
- **Lien :** [Voir le projet](https://github.com/EEnez/sym64ENEZ)

### 3. Site Web CF2M
- **Technologies :** Figma, WordPress, HTML, CSS, JavaScript
- **Mission :** Redesign complet avec optimisation UX pour améliorer l'engagement et les conversions
- **Catégorie :** Web
- **Focus :** Design moderne et responsive

## 🚀 Compétences Techniques

### Frontend Development
- **React Ecosystem** - React 18, Next.js, TypeScript
- **Modern CSS** - Tailwind CSS, CSS3, Responsive Design
- **JavaScript ES6+** - Vanilla JS moderne et asynchrone
- **Framer Motion** - Animations et micro-interactions

### Backend Development
- **PHP & Symfony** - PHP 8.x, Symfony 7, Doctrine ORM
- **API Development** - REST APIs, JWT, API Platform
- **Node.js** - Express.js, server-side JavaScript
- **Database Design** - MySQL, PostgreSQL, optimisation

### Design & UX/UI
- **UI/UX Design** - User research, wireframing, prototyping
- **Adobe Creative Suite** - Photoshop, InDesign, design graphique
- **Figma** - Prototypage collaboratif et design systems
- **Design Systems** - Composants réutilisables et cohérence

### Outils & Workflow
- **Git & GitHub** - Versionning, collaboration, CI/CD
- **Development Environment** - VS Code, Terminal, Package managers
- **Docker** - Containerisation et déploiement

### En cours d'apprentissage
- **Vue.js** - Alternative à React pour diversifier mes compétences
- **Python** - Élargissement vers d'autres écosystèmes backend
- **DevOps & Cloud** - AWS, déploiement automatisé
- **Motion Design** - Animations avancées et micro-interactions

## 📊 Performance & Qualité

- ⚡ **Lighthouse Score :** 95+ 
- 🎯 **Core Web Vitals :** Optimisés
- 📱 **Mobile Performance :** Excellente
- 🔍 **SEO Score :** 100
- 🧹 **Code Quality :** ESLint, TypeScript strict
- 🚀 **Bundle optimisé :** Next.js avec tree-shaking automatique
- 🖼️ **Images optimisées :** Sharp pour compression avancée

## 📧 Contact

- **Email :** enezgubeljic@gmail.com
- **LinkedIn :** [Enez Gubeljic](https://www.linkedin.com/in/enez-gubeljic-76313229b)
- **GitHub :** [EEnez](https://github.com/EEnez)
- **Twitter/X :** [@Enez_Gubeljic](https://x.com/Enez_Gubeljic)
- **Localisation :** Bruxelles, Belgique

## 📄 CV

[Télécharger mon CV (PDF)](./public/CV_Enez_Gubeljic.pdf)

## 🚀 Déploiement

Ce portfolio est déployé sur **Vercel** et maintenu par Enez Gubeljic.

**Note :** Ce repository présente le code source de mon portfolio personnel.

## 📝 Utilisation et License

**⚠️ Important :** Ce portfolio est personnel et reflète mon travail et mes compétences. 

- ✅ **Consultation du code** : Libre pour apprendre et s'inspirer
- ✅ **Références techniques** : Vous pouvez étudier l'architecture et les solutions
- ❌ **Copie directe** : Veuillez ne pas déployer ou réutiliser tel quel
- ❌ **Contenu personnel** : Projets, CV, et informations personnelles sont privés

Ce repository est open source à des fins éducatives et de démonstration de compétences.

---

> 💡 **Développeur Junior Full Stack** à la recherche d'opportunités passionnantes en développement web moderne. N'hésitez pas à me contacter !