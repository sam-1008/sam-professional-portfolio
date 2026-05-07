/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { EXPERIENCES, EDUCATION, CERTIFICATIONS, BADGES, DIGITAL_CERTIFICATES } from '../constants';
import { History, School, BadgeCheck, Award, Plus, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export default function Experience() {
  return (
    <div className="max-w-[1200px] mx-auto px-8 pt-32 pb-16">
      {/* Hero */}
      <section className="mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-primary-container mb-6"
        >
          Professional Journey
        </motion.h2>
        <p className="text-xl text-secondary max-w-2xl font-serif">
          A timeline of my growth across full-stack development, data analysis, and multimedia design—driven by a passion for creating functional and engaging digital experiences.
        </p>
      </section>

      {/* Work Experience */}
      <section className="mb-32">
        <div className="flex items-center gap-4 mb-12 border-b border-outline-variant/30 pb-4">
          <History className="text-primary-container" size={32} />
          <h3 className="text-4xl font-bold text-primary-container font-sans">Work Experience</h3>
        </div>

        <div className="space-y-16">
          {EXPERIENCES.map((job) => (
            <div key={job.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 group">
              <div className="md:col-span-3 lg:col-span-2">
                <span className="text-xl font-bold text-primary-container block">{job.period}</span>
                <span className="label-caps text-secondary text-[10px] tracking-widest">{job.location}</span>
              </div>

              <div className="md:col-span-9 lg:col-span-10 relative pl-12 border-l-2 border-primary-container/20 group-last:border-l-0">
                <div className="absolute left-[-7px] top-2 w-3 h-3 bg-primary-container rounded-full ring-4 ring-white" />

                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-primary mb-1">{job.role}</h4>
                    <p className="label-caps text-on-primary-container font-bold">{job.company}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map(tag => (
                      <span key={tag} className="bg-surface-variant px-3 py-1 label-caps text-[10px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="text-secondary font-serif space-y-4 max-w-4xl list-none">
                  {job.description.map((item, i) => (
                    <li key={i} className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-primary-container before:font-bold">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bento Grid: Education & Certifications */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Education */}
        <div className="md:col-span-2 bg-white p-12 shadow-sm border border-outline-variant/30">
          <div className="flex items-center gap-4 mb-12">
            <School className="text-primary-container" size={28} />
            <h3 className="text-4xl font-bold text-primary-container font-sans">Education</h3>
          </div>
          <div className="space-y-12">
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 group">
                <div>
                  <h4 className="text-2xl font-bold text-primary mb-1 group-hover:text-primary-container transition-colors font-sans">
                    {edu.degree}
                  </h4>
                  <p className="text-secondary font-serif">
                    {edu.institution}
                  </p>
                </div>
                <span className="label-caps bg-primary-container text-white px-6 py-2 rounded-full shadow-sm">
                  {edu.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-primary-container text-white relative flex flex-col h-[450px] md:h-auto md:min-h-0 overflow-hidden">
          <div className="absolute inset-0 p-12 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-8 text-inverse-primary shrink-0">
              <BadgeCheck size={28} />
              <h3 className="text-2xl font-bold font-sans">Certifications</h3>
            </div>
            <div className="flex-grow overflow-y-auto pr-4 -mr-4 custom-scrollbar">
              <ul className="space-y-8 pb-4">
                {CERTIFICATIONS.map((cert) => (
                  <li key={cert.id} className="border-b border-white/10 pb-6 group last:border-0 last:pb-0">
                    <p className="label-caps text-on-primary-container/60 mb-2 tracking-widest">{cert.issuer}</p>
                    <p className="text-lg font-bold leading-tight group-hover:text-inverse-primary transition-colors font-sans">
                      {cert.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Badges */}
      <section className="mt-8 bg-white p-12 shadow-sm border border-outline-variant/30 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10 relative z-10">
          <div className="flex items-center gap-4">
            <Award className="text-primary-container" size={28} />
            <h3 className="text-3xl font-bold text-primary-container font-sans">Achievement Badges</h3>
          </div>
          <p className="text-secondary font-serif max-w-md text-sm md:text-right">
            Digital credentials and verified achievements shows continuous learning and expertise in specialized technical domains.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 items-center relative z-10">
          {BADGES.map((badge) => (
            <div key={badge.id} className="relative group/badge">
              {/* Customized Frame */}
              <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-gradient-to-br from-white to-surface-variant/30 border border-outline-variant/40 shadow-sm flex items-center justify-center transition-all duration-300 group-hover/badge:shadow-lg group-hover/badge:-translate-y-2 group-hover/badge:border-primary-container/30">
                {/* Inner background effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-primary-container/0 transition-colors duration-300 group-hover/badge:bg-primary-container/5" />

                {/* Badge Image - object-contain ensures full size/shape is captured */}
                <img
                  src={badge.imageUrl}
                  alt={badge.name}
                  className="w-[85%] h-[85%] object-contain drop-shadow-sm transition-transform duration-300 group-hover/badge:scale-110 relative z-10"
                />
              </div>
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/badge:opacity-100 transition-opacity bg-primary-container text-white text-[10px] label-caps px-3 py-1.5 rounded shadow-md whitespace-nowrap pointer-events-none z-20">
                {badge.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Digital Certificates Gallery */}
      <section className="mt-8 bg-surface p-12 shadow-sm border border-outline-variant/30 overflow-hidden relative group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10 relative z-10">
          <div className="flex items-center gap-4">
            <FileText className="text-primary-container" size={28} />
            <h3 className="text-3xl font-bold text-primary-container font-sans">Digital Certificates</h3>
          </div>
          <p className="text-secondary font-serif max-w-md text-sm md:text-right">
            Verified documents of completion from various seminars, competitions, and specialized technical courses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {DIGITAL_CERTIFICATES.map((cert) => (
            <div key={cert.id} className="group/cert cursor-pointer relative rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] bg-white flex items-center justify-center p-2">
                <img src={cert.imageUrl} alt={cert.name} className="w-full h-full object-contain group-hover/cert:scale-105 transition-transform duration-500 drop-shadow-sm" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h4 className="text-white font-bold text-lg leading-tight mb-2 font-sans">{cert.name}</h4>
                <p className="text-inverse-primary label-caps">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
