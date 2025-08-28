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
      className="group bg-gradient-to-br from-surface/50 to-surface-secondary/30 backdrop-blur-sm border border-text-secondary/10 rounded-2xl overflow-hidden hover:border-interactive-primary/30 transition-all duration-500 relative"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gold-rose rounded-full opacity-20 animate-pulse" />
      
      <div className="relative cursor-pointer overflow-hidden" onClick={() => onImageClick?.(project)}>
        <ProjectImage
          src={project.image}
          alt={project.title}
          variant="card"
          className="group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <motion.div 
            className="bg-white/20 backdrop-blur-md rounded-full p-4 border border-white/30"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-white" />
          </motion.div>
        </div>

        {project.featured && (
          <div className="absolute top-4 left-4 bg-gold-rose text-white px-3 py-1 rounded-full text-xs font-semibold">
            ⭐ Featured
          </div>
        )}
      </div>
      
      <div className="p-8">
        <motion.h3 
          className="text-xl font-bold mb-4 text-text-primary group-hover:text-interactive-primary transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          {project.title}
        </motion.h3>
        
        <p className="text-text-secondary mb-6 line-clamp-3 leading-relaxed text-sm">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.slice(0, 3).map((tag, index) => (
            <motion.span
              key={tag}
              className="px-3 py-1.5 bg-interactive-primary/10 border border-interactive-primary/20 text-interactive-primary text-xs font-medium rounded-full hover:bg-interactive-primary/20 transition-colors duration-300"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {tag}
            </motion.span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-3 py-1.5 bg-text-secondary/10 border border-text-secondary/20 text-text-secondary text-xs font-medium rounded-full">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex gap-3">
          {project.demoLink && project.codeLink && project.demoLink !== project.codeLink ? (
            <>
              <motion.a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gold-rose text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-gold-rose/30 group"
                style={{ cursor: 'pointer' }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <ArrowTopRightOnSquareIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <span className="transition-all duration-300">Demo</span>
              </motion.a>
              <motion.a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-text-secondary/30 text-text-secondary rounded-xl font-semibold text-sm transition-all duration-300 hover:border-interactive-primary hover:text-interactive-primary hover:bg-interactive-primary/5 hover:shadow-md group"
                style={{ cursor: 'pointer' }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <CodeBracketIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span className="transition-all duration-300">Code</span>
              </motion.a>
            </>
          ) : (
            <motion.a
              href={project.codeLink || project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
                              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-gold-rose hover:shadow-lg hover:shadow-gold-rose/30 group"
              style={{ cursor: 'pointer' }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <CodeBracketIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              <span className="transition-all duration-300">Voir sur GitHub</span>
            </motion.a>
          )}
        </div>
      </div>

              <div className="absolute inset-0 bg-gold-rose/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
    </motion.div>
  );
} 