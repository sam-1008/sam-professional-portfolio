/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PROJECTS, RESUME_URL } from '../constants';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <div className="max-w-[1200px] mx-auto px-8 pt-32 pb-16">
      {/* Hero */}
      <section className="mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="label-caps text-on-primary-container mb-4">SELECTED WORKS</p>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8 leading-tight font-sans">
            Versatile Software Solutions.
          </h1>
          <p className="text-xl text-secondary max-w-2xl font-serif">
            A diverse collection of applications ranging from full-stack platforms and analytical dashboards to C# desktop systems and modern landing pages. Each project highlights a commitment to intuitive design, clean architecture, and practical problem-solving.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface-variant/20 border-t border-outline-variant/30 text-center -mx-8 px-8">
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-6 font-sans">Ready to start a project?</h2>
          <p className="text-lg text-secondary mb-10 font-serif">
            I am currently open to new projects and collaborations. Let's discuss how we can turn your ideas into functional and engaging digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-primary-container text-white px-10 py-4 label-caps transition-all hover:bg-primary active:scale-95 text-center">
              GET IN TOUCH
            </Link>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="border border-primary-container text-primary-container px-10 py-4 label-caps transition-all hover:bg-primary-container hover:text-white active:scale-95 text-center">
              VIEW RESUME
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
