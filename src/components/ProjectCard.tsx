import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

// Dégradés uniques pour chaque projet
const getProjectGradient = (projectId: number): string => {
  const gradients = {
    1: 'bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800',
    2: 'bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800', 
    3: 'bg-gradient-to-br from-purple-600 via-violet-700 to-indigo-800',
  };
  return gradients[projectId as keyof typeof gradients] || gradients[1];
};

// Icônes pour les catégories
const getProjectIcon = (category: string): string => {
  const icons = {
    web: '🌐',
    mobile: '📱',
    backend: '⚙️',
  };
  return icons[category as keyof typeof icons] || '💻';
};

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="group relative bg-background-card rounded-xl overflow-hidden cursor-pointer hover:scale-[1.01] hover:shadow-lg transition-all duration-200 ease-out"
      onClick={onClick}
    >
      <div className={`relative h-48 flex items-center justify-center ${getProjectGradient(project.id)}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-card/20 z-10" />
        <div className="relative z-20 text-center text-white">
          <div className="text-4xl font-bold mb-2 opacity-80">
            {getProjectIcon(project.category)}
          </div>
          <div className="text-sm font-medium opacity-60">
            {project.category.toUpperCase()}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-text-primary">{project.title}</h3>
        <p className="text-text-secondary mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 bg-interactive-primary/10 text-interactive-primary text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out">
          {project.demoLink && (
            <motion.a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-interactive-primary text-white rounded-md font-medium hover:bg-interactive-hover transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              Démo
            </motion.a>
          )}
          {project.codeLink && (
            <motion.a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-interactive-primary text-interactive-primary rounded-md font-medium hover:bg-interactive-primary/10 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CodeBracketIcon className="h-4 w-4" />
              Code
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
} 