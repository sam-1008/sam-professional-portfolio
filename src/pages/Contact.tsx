/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Download, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('Something went wrong. Please try again later.');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "3d8178f5-ee2a-40f5-84c3-4df802f782ba");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setSubmitStatus('success');
        event.currentTarget.reset();
      } else {
        setSubmitStatus('error');
        setErrorMessage(res.message || 'Something went wrong. Please try again later.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Network error occurred.');
    }
    
    setIsSubmitting(false);
  };

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
              <form onSubmit={onSubmit} className="space-y-10">
                <div>
                  <label className="label-caps text-secondary block mb-3">NAME</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-background border-none p-5 font-serif focus:ring-1 focus:ring-primary-container outline-none"
                  />
                </div>
                <div>
                  <label className="label-caps text-secondary block mb-3">EMAIL ADDRESS</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-background border-none p-5 font-serif focus:ring-1 focus:ring-primary-container outline-none"
                  />
                </div>
                <div>
                  <label className="label-caps text-secondary block mb-3">MESSAGE</label>
                  <textarea 
                    rows={6}
                    name="message"
                    required
                    placeholder="How can I help you?"
                    className="w-full bg-background border-none p-5 font-serif focus:ring-1 focus:ring-primary-container outline-none resize-none"
                  />
                </div>
                <div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-primary-container text-white label-caps py-6 tracking-[0.2em] hover:bg-primary transition-all active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                  </button>
                  {submitStatus === 'success' && (
                    <p className="text-green-600 text-sm mt-4 text-center font-bold">Message sent successfully! I will get back to you soon.</p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-red-500 text-sm mt-4 text-center font-bold">{errorMessage}</p>
                  )}
                </div>
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
