/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Github, ArrowRight, X } from 'lucide-react';
import { Project } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectCardProps {
  project: Project;
  key?: string;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div 
        whileHover={{ y: -8 }}
        className="group bg-surface border border-surface-variant overflow-hidden flex flex-col h-full shadow-[0_20px_40px_-10px_rgba(7,26,59,0.04)] hover:shadow-[0_30px_60px_-12px_rgba(7,26,59,0.08)] transition-all duration-500"
      >
        <div 
          className="aspect-[4/3] overflow-hidden cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
        </div>
      
      <div className="p-8 flex-grow flex flex-col">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="bg-surface-variant text-primary-container px-3 py-1 label-caps text-[10px]">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary-container transition-colors">
          {project.title}
        </h3>
        
        <p className="text-secondary text-sm mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex items-center gap-6 pt-4 border-t border-surface-variant">
          {project.links?.view && (
            <a 
              href={project.links.view}
              className="label-caps text-primary flex items-center gap-2 hover:translate-x-1 transition-transform"
            >
              VIEW <ArrowRight size={14} />
            </a>
          )}
          {project.links?.github && (
            <a 
              href={project.links.github}
              className="label-caps text-secondary flex items-center gap-2 hover:text-primary transition-colors"
            >
              GITHUB <Github size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-background/90 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-12 right-0 text-secondary hover:text-primary transition-colors bg-surface-variant/50 p-2 rounded-full"
              >
                <X size={24} />
              </button>
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-auto max-h-[85vh] object-contain border border-surface-variant shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
