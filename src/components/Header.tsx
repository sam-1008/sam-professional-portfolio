/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import samLogoIcon from '../images/samlogoicon.png';
import { RESUME_URL } from '../constants';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-4 pt-4 sm:pt-6 w-full pointer-events-none">
      <header
        className={`pointer-events-auto w-full max-w-[1200px] transition-all duration-500 md:rounded-full flex flex-col overflow-hidden ${
          isScrolled || isOpen
            ? 'bg-surface/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-surface-variant rounded-2xl'
            : 'bg-transparent rounded-2xl'
        }`}
      >
        <div className={`flex justify-between items-center px-6 lg:px-8 transition-all duration-500 ${isScrolled || isOpen ? 'h-16' : 'h-20'}`}>
          <NavLink to="/" className="flex items-center gap-3 group">
            <img src={samLogoIcon} alt="Sam Logo Icon" className="h-8 w-auto group-hover:scale-105 transition-transform" />
            <h1 className="font-sans text-2xl font-black tracking-tighter text-primary group-hover:scale-105 transition-transform">SAM</h1>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `label-caps px-5 py-2 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'bg-primary/10 text-primary font-bold' 
                      : 'text-secondary hover:text-primary hover:bg-surface-variant/50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="w-px h-6 bg-surface-variant mx-2"></div>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="label-caps bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-all active:scale-95 shadow-md hover:shadow-lg ml-2">
              RESUME
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-primary p-2 bg-surface-variant/50 rounded-full hover:bg-surface-variant transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-surface/50 border-t border-surface-variant"
            >
              <div className="flex flex-col p-6 gap-2">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `label-caps px-4 py-3 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-primary/10 text-primary font-bold' 
                          : 'text-secondary hover:bg-surface-variant/50 hover:text-primary'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="label-caps text-center mt-4 bg-primary text-white px-6 py-4 rounded-xl hover:bg-primary/90 transition-all shadow-md block">
                  RESUME
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
