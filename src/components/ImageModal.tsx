"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import type { Project } from '@/data/projects';
import ProjectImage from './ProjectImage';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

export default function ImageModal({ isOpen, onClose, project }: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-gradient-to-br from-surface/95 to-surface-secondary/95 backdrop-blur-xl border border-text-secondary/20 rounded-2xl overflow-hidden shadow-2xl max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 rounded-full transition-colors backdrop-blur-sm"
            >
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>

            <div className="relative">
              <ProjectImage
                src={project.image}
                alt={project.title}
                variant="modal"
                className="w-full"
                priority
              />
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-text-primary">
                  {project.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-interactive-primary/10 text-interactive-primary text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-4">
                {project.demoLink && (
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-interactive-primary text-white rounded-lg font-medium hover:bg-interactive-hover transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    Voir le projet
                  </motion.a>
                )}
                {project.codeLink && (
                  <motion.a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-interactive-primary text-interactive-primary rounded-lg font-medium hover:bg-interactive-primary/10 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <CodeBracketIcon className="h-5 w-5" />
                    Voir le code
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
