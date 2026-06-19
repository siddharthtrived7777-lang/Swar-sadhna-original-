/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Music, CheckCircle2, User, Building, Phone } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-brand-bg/90 backdrop-blur-md border-b border-brand-border px-4 md:px-12 py-5 shadow-xs">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
        
        {/* Logo and Brand */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate('hero')}>
          <div className="w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center text-white transition-transform group-hover:scale-105">
            <Music className="w-4.5 h-4.5" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-serif font-bold text-brand-primary tracking-tight leading-none italic">
              Swar Sadhna
            </h1>
            <span className="text-[9px] uppercase tracking-widest font-semibold text-brand-dark/60 mt-0.5">
              Musical Classes
            </span>
          </div>
        </div>

        {/* Anchor Links */}
        <div className="flex items-center justify-center flex-wrap gap-2">
          <button 
            type="button"
            onClick={() => onNavigate('about')}
            className="px-3 py-1.5 text-xs text-brand-dark/80 hover:text-brand-primary hover:border-b hover:border-brand-primary font-semibold tracking-wider uppercase transition-all"
          >
            About Us
          </button>
          <button 
            type="button"
            onClick={() => onNavigate('courses')}
            className="px-3 py-1.5 text-xs text-brand-dark/80 hover:text-brand-primary hover:border-b hover:border-brand-primary font-semibold tracking-wider uppercase transition-all"
          >
            Courses Offered
          </button>

          <button 
            type="button"
            onClick={() => onNavigate('faqs')}
            className="px-3 py-1.5 text-xs text-brand-dark/80 hover:text-brand-primary hover:border-b hover:border-brand-primary font-semibold tracking-wider uppercase transition-all"
          >
            FAQs
          </button>
          <button 
            type="button"
            onClick={() => onNavigate('location')}
            className="px-3 py-1.5 text-xs text-brand-dark/80 hover:text-brand-primary hover:border-b hover:border-brand-primary font-semibold tracking-wider uppercase transition-all"
          >
            Location
          </button>
          <button 
            type="button"
            onClick={() => onNavigate('contact')}
            className="px-5 py-2.5 text-xs uppercase tracking-widest font-bold bg-brand-primary text-white rounded-full hover:bg-brand-dark transition-all hover:shadow-xs"
          >
            Admissions
          </button>
        </div>

      </div>
    </nav>
  );
}
