/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import samLogoIcon from '../images/samlogoicon.png';
import { Linkedin, Facebook } from 'lucide-react';

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant py-20 mt-auto">
      <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <div className="flex items-center gap-3">
            <img src={samLogoIcon} alt="Sam Logo" className="h-6 w-auto opacity-80" />
            <h2 className="font-sans text-xl font-black tracking-tight text-primary">SAM</h2>
          </div>
          <p className="text-secondary text-sm">© 2026 Sam Tañafranca Portfolio. All Rights Reserved.</p>
        </div>

        <div className="flex gap-6 items-center">
          <a href="https://www.linkedin.com/in/sam-ta%C3%B1afranca-75ab24303/" aria-label="LinkedIn" className="p-2 text-secondary hover:text-primary hover:bg-surface-variant rounded-full transition-all hover:scale-110">
            <Linkedin size={20} />
          </a>
          <a href="https://web.facebook.com/sam.tanafranca.2026/" aria-label="Facebook" className="p-2 text-secondary hover:text-primary hover:bg-surface-variant rounded-full transition-all hover:scale-110">
            <Facebook size={20} />
          </a>
          <a href="https://wa.me/639923615117" aria-label="WhatsApp" className="p-2 text-secondary hover:text-primary hover:bg-surface-variant rounded-full transition-all hover:scale-110">
            <WhatsAppIcon size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
