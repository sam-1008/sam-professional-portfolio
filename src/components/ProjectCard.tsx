/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Github, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectCardProps {
  project: Project;
  key?: string;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const images = project.images && project.images.length > 0 ? project.images : [project.imageUrl];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentImageIndex((prev) => (prev + newDirection + images.length) % images.length);
  };

  return (
    <>
      <motion.div 
        whileHover={{ y: -8 }}
        className="group bg-surface border border-surface-variant overflow-hidden flex flex-col h-full shadow-[0_20px_40px_-10px_rgba(7,26,59,0.04)] hover:shadow-[0_30px_60px_-12px_rgba(7,26,59,0.08)] transition-all duration-500"
      >
        <div 
          className="aspect-[4/3] overflow-hidden cursor-pointer"
          onClick={() => {
            setCurrentImageIndex(0);
            setIsModalOpen(true);
          }}
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

      <AnimatePresence initial={false}>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-background/95 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-14 right-0 text-secondary hover:text-primary transition-colors bg-surface-variant/50 p-2 rounded-full z-50"
              >
                <X size={24} />
              </button>

              <div className="relative w-full aspect-video overflow-hidden rounded-xl border border-surface-variant shadow-2xl bg-surface flex items-center justify-center">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    className="absolute w-full h-full object-contain"
                  />
                </AnimatePresence>

                {images.length > 1 && (
                  <>
                    <button
                      className="absolute left-4 z-10 bg-surface/80 hover:bg-primary-container hover:text-white p-3 rounded-full text-primary transition-all backdrop-blur-sm shadow-lg"
                      onClick={() => paginate(-1)}
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      className="absolute right-4 z-10 bg-surface/80 hover:bg-primary-container hover:text-white p-3 rounded-full text-primary transition-all backdrop-blur-sm shadow-lg"
                      onClick={() => paginate(1)}
                    >
                      <ChevronRight size={24} />
                    </button>

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-black/20 px-3 py-2 rounded-full backdrop-blur-md">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setDirection(index > currentImageIndex ? 1 : -1);
                            setCurrentImageIndex(index);
                          }}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentImageIndex 
                              ? "bg-white w-6" 
                              : "bg-white/50 hover:bg-white/80"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              <div className="mt-6 text-center">
                <h2 className="text-2xl font-bold text-primary mb-2">{project.title}</h2>
                <p className="text-secondary max-w-2xl text-sm">{project.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
