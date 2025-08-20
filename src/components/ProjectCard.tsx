import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import type { Project } from '@/data/projects';
import ProjectImage from './ProjectImage';

interface ProjectCardProps {
  project: Project;
  onImageClick?: (project: Project) => void;
}

export default function ProjectCard({ project, onImageClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group bg-background-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 ease-out border border-border/10 hover:border-interactive-primary/20"
    >
      <div className="relative cursor-pointer overflow-hidden rounded-t-xl" onClick={() => onImageClick?.(project)}>
        <ProjectImage
          src={project.image}
          alt={project.title}
          variant="card"
          className="group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black/60 backdrop-blur-sm rounded-full p-3">
            <MagnifyingGlassIcon className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-interactive-primary transition-colors duration-200">
          {project.title}
        </h3>
        
        <p className="text-text-secondary mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 4).map(tag => (
            <span
              key={tag}
              className="px-3 py-1 bg-interactive-primary/10 text-interactive-primary text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-3 py-1 bg-border/10 text-text-muted text-sm rounded-full">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
        
        <div className="flex gap-3">
          {project.demoLink && (
            <motion.a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-interactive-primary text-white rounded-lg font-medium hover:bg-interactive-hover transition-colors text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              Voir le projet
            </motion.a>
          )}
          {project.codeLink && (
            <motion.a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 border border-interactive-primary text-interactive-primary rounded-lg font-medium hover:bg-interactive-primary/10 transition-colors text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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