/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import {
  ArrowRight, Code2, Palette, Box, Layers, GitBranch,
  FileCode2, Wind, Triangle, Hash, Server,
  ServerCog, FlaskConical, Zap, Flame, Database,
  Leaf, Github, Terminal, Braces, Atom,
  Coffee, Cpu, HardDrive
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import samFormalImage from '../images/sam_formal.jpg';

const SKILL_CATEGORIES = [
  {
    title: 'FRONTEND',
    skills: [
      { name: 'HTML', icon: <FileCode2 size={28} /> },
      { name: 'CSS', icon: <Palette size={28} /> },
      { name: 'JAVASCRIPT', icon: <Code2 size={28} /> },
      { name: 'REACT', icon: <Atom size={28} /> },
      { name: 'NEXT.JS', icon: <Triangle size={28} /> },
      { name: 'TAILWIND CSS', icon: <Wind size={28} /> },
      { name: 'MATERIAL UI', icon: <Layers size={28} /> },
    ]
  },
  {
    title: 'BACKEND',
    skills: [
      { name: 'TYPESCRIPT', icon: <Braces size={28} /> },
      { name: 'JAVA', icon: <Coffee size={28} /> },
      { name: 'PYTHON', icon: <Cpu size={28} /> },
      { name: 'NODE.JS', icon: <Server size={28} /> },
      { name: 'C# (.NET)', icon: <Hash size={28} /> },
      { name: 'EXPRESS.JS', icon: <ServerCog size={28} /> },
      { name: 'FLASK', icon: <FlaskConical size={28} /> },
      { name: 'FASTAPI', icon: <Zap size={28} /> },
      { name: 'LARAVEL', icon: <Flame size={28} /> },
      { name: 'DJANGO', icon: <Box size={28} /> },
    ]
  },
  {
    title: 'DATABASE',
    skills: [
      { name: 'MYSQL', icon: <Database size={28} /> },
      { name: 'POSTGRESQL', icon: <HardDrive size={28} /> },
      { name: 'MONGODB ATLAS', icon: <Leaf size={28} /> },
      { name: 'SUPABASE', icon: <Zap size={28} /> },
    ]
  },
  {
    title: 'DEVOPS',
    skills: [
      { name: 'GIT/GITHUB', icon: <Github size={28} /> },
      { name: 'LINUX', icon: <Terminal size={28} /> },
    ]
  }
];

export default function Home() {
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary-container text-white py-24 lg:py-32 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col gap-6 order-2 lg:order-1"
          >
            <span className="label-caps text-on-primary-container tracking-[0.2em]">DATA ANALYSIS & SOFTWARE DEVELOPMENT</span>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              Where thought meets structure.
            </h1>
            <p className="text-xl text-on-primary-container/80 max-w-lg font-serif italic">
              Creating structured digital solutions with clarity, purpose, and real-world usability.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link to="/projects">
                <button className="bg-white text-primary label-caps px-8 py-4 hover:bg-surface-variant transition-all shadow-xl active:scale-95">
                  VIEW PROJECTS
                </button>
              </Link>
              <Link to="/contact">
                <button className="border border-white/30 text-white label-caps px-8 py-4 hover:bg-white/10 transition-all active:scale-95">
                  CONTACT ME
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] overflow-hidden border-4 border-white/10 shadow-2xl relative bg-surface-variant/10">
              <img
                src={samFormalImage}
                alt="Sam"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-surface py-24 border-b border-outline-variant/30 text-primary">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="flex flex-col gap-2">
                <span className="label-caps text-secondary">INTRODUCTION</span>
                <h2 className="text-4xl font-bold font-sans">About Me</h2>
              </div>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-8">
              <p className="text-xl text-secondary leading-relaxed">
                Hi, I'm Sam Tañafranca, a Computer Science graduate and freelancer driven by a passion for web development, data analysis and digital creativity. I work across both logic and design, building solutions that are not only functional but also clear and engaging.

                I have hands-on experience developing full-stack websites and system applications, allowing me to turn ideas into complete, working products from front end to back end. Alongside development, my background in multimedia design helps me create outputs that feel intuitive, purposeful, and visually refined.
              </p>
              <div className="flex flex-wrap gap-3">
                {['UI/UX DESIGN', 'WEB DEVELOPMENT', 'SYSTEM ANALYSIS', 'DATA VISUALIZATION'].map(chip => (
                  <span key={chip} className="bg-background px-4 py-2 label-caps text-primary border border-outline-variant/30">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-surface py-24 border-b border-outline-variant/30">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex flex-col gap-2 mb-12">
            <span className="label-caps text-secondary">TECHNICAL TOOLKIT</span>
            <h2 className="text-4xl font-bold font-sans">Skills & Proficiencies</h2>
          </div>
          <div className="flex flex-col gap-12">
            {SKILL_CATEGORIES.map((category) => (
              <div key={category.title}>
                <h3 className="text-sm font-bold text-secondary label-caps mb-6 border-b border-outline-variant/30 pb-4">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -5 }}
                      className="flex flex-col items-center justify-center p-6 bg-white border border-outline-variant/30 group hover:border-primary transition-all duration-300"
                    >
                      <div className="mb-4 text-primary group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </div>
                      <span className="label-caps text-[10px] text-secondary text-center">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex justify-between items-end mb-12">
            <div className="flex flex-col gap-2">
              <span className="label-caps text-secondary">SELECTED WORKS</span>
              <h2 className="text-4xl font-bold font-sans">Curated Projects</h2>
            </div>
            <Link to="/projects" className="label-caps text-primary border-b border-primary pb-1 hover:opacity-70 transition-all inline-flex items-center gap-2">
              SEE ALL WORK <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
