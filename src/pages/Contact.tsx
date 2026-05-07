/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Download, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="flex flex-col">
      {/* Title Section */}
      <section className="pt-32 pb-20 bg-surface">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-7xl font-bold text-primary mb-6 font-sans tracking-tight"
          >
            Get in touch.
          </motion.h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto font-serif">
            I am currently open to new opportunities and strategic collaborations. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-7 bg-white p-12 md:p-16 shadow-[0_40px_80px_-20px_rgba(7,26,59,0.08)]"
            >
              <form className="space-y-10">
                <div>
                  <label className="label-caps text-secondary block mb-3">NAME</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-background border-none p-5 font-serif focus:ring-1 focus:ring-primary-container outline-none"
                  />
                </div>
                <div>
                  <label className="label-caps text-secondary block mb-3">EMAIL ADDRESS</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-background border-none p-5 font-serif focus:ring-1 focus:ring-primary-container outline-none"
                  />
                </div>
                <div>
                  <label className="label-caps text-secondary block mb-3">MESSAGE</label>
                  <textarea 
                    rows={6}
                    placeholder="How can I help you?"
                    className="w-full bg-background border-none p-5 font-serif focus:ring-1 focus:ring-primary-container outline-none resize-none"
                  />
                </div>
                <button className="w-full bg-primary-container text-white label-caps py-6 tracking-[0.2em] hover:bg-primary transition-all active:scale-[0.99]">
                  SEND MESSAGE
                </button>
              </form>
            </motion.div>

            {/* Sidebar info */}
            <div className="lg:col-span-5 space-y-16">
              {/* Resume Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-10 border border-outline-variant/30 bg-surface group hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-2xl font-bold font-sans">Curriculum Vitae</h3>
                    <p className="text-sm text-secondary font-serif mt-1">Updated June 2024 • PDF format</p>
                  </div>
                  <FileText className="text-primary-container group-hover:translate-y-1 transition-transform" size={36} />
                </div>
                <a href="#" className="inline-flex items-center gap-3 label-caps border-b-2 border-primary pb-2 text-primary hover:gap-5 transition-all">
                  DOWNLOAD RESUME <Download size={14} />
                </a>
              </motion.div>

              {/* Image Deco */}
              <div className="aspect-[4/3] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-xl">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFvOQ5GX0dm_640ZrdPXfurUyF9duha_HXU64kRe4zu742DE8bkY2BV39cdNSGBOeW2eMHR9xXDMmCn4tAvJhYhKbmNhUZGmTtClNud6bu70QN_JQP0kcfuupEoaH9xvb2Eq2zhuidIK8nw92PnH68zrjLCW8M8fTQfxLKKU3PdW6k9nlhGWrrXLA978fEWYQqaaW7cWhxNChMWmxIRYNe4OjOv8fhwLVGfqoDxS4S1UqdTl_ADgVie0ZfTjb1PX5lhR-ZxCHUtnQ" 
                  alt="Office" 
                  className="w-full h-full object-cover"
                />
              </div>


            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
