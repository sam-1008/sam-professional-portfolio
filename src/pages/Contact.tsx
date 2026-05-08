/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Download, FileText, CheckCircle2, AlertCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { RESUME_URL } from '../constants';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ show: boolean, type: 'success' | 'error', message: string }>({ show: false, type: 'success', message: '' });

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => setToast(prev => ({ ...prev, show: false })), 5000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    setIsSubmitting(true);

    const formData = new FormData(form);
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
        setToast({ show: true, type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
        form.reset();
      } else {
        setToast({ show: true, type: 'error', message: res.message || 'Something went wrong. Please try again later.' });
      }
    } catch (error) {
      setToast({ show: true, type: 'error', message: error instanceof Error ? error.message : 'Network error occurred.' });
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
            className="text-6xl md:text-7xl font-bold text-primary-container mb-6 font-sans tracking-tight"
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
                    <h3 className="text-2xl font-bold font-sans">My Resume</h3>
                    <p className="text-sm text-secondary font-serif mt-1">Updated April 2026 • PDF format</p>
                  </div>
                  <FileText className="text-primary-container group-hover:translate-y-1 transition-transform" size={36} />
                </div>
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" download className="inline-flex items-center gap-3 label-caps border-b-2 border-primary pb-2 text-primary hover:gap-5 transition-all">
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

      {/* Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className={`fixed bottom-8 right-8 z-50 flex items-center gap-4 px-6 py-4 rounded-xl shadow-2xl border backdrop-blur-md ${toast.type === 'success'
                ? 'bg-green-50/90 border-green-200/50 text-green-800'
                : 'bg-red-50/90 border-red-200/50 text-red-800'
              }`}
          >
            {toast.type === 'success' ? <CheckCircle2 size={24} className="text-green-600" /> : <AlertCircle size={24} className="text-red-600" />}
            <p className="font-sans font-medium text-sm pr-4">{toast.message}</p>
            <button
              onClick={() => setToast(prev => ({ ...prev, show: false }))}
              className={`p-1 rounded-full hover:bg-black/5 transition-colors ${toast.type === 'success' ? 'text-green-600' : 'text-red-600'}`}
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
