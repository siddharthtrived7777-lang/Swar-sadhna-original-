/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Music, Heart, ArrowUp, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenAdmin: () => void;
}

export default function Footer({ onNavigate, onOpenAdmin }: FooterProps) {
  const activeEmail = 'swarsadhnamusic@gmail.com';
  const phone1 = '9558183973';
  const phone2 = '8200049918';

  return (
    <footer className="bg-brand-dark text-[#FAF5EE]/70 border-t border-brand-border py-16 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top visual grid */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-brand-light/10 pb-8">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('hero')}>
              <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white border border-brand-border">
                <Music className="w-4 h-4 text-white" />
              </div>
              <span className="font-serif font-bold text-white text-lg tracking-tight italic">Swar Sadhna</span>
            </div>
            <p className="text-xs text-[#FAF5EE]/60 font-medium font-sans">Since 1998 • Cultivating natural musical precision in Surendranagar &amp; worldwide.</p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('hero')}
            className="px-4 py-2.5 bg-brand-primary hover:bg-[#4d4d36] text-[9px] font-bold text-white uppercase tracking-widest rounded-full flex items-center gap-2 transition-all cursor-pointer"
          >
            <span>Scroll to Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

        {/* Detailed Middle Text */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-xs py-4 text-[#FAF5EE]/50">
          
          {/* Taglines list */}
          <div className="md:col-span-6 space-y-4">
            <h5 className="font-mono text-white font-bold uppercase tracking-wider text-[10px]">Academic Focus Areas</h5>
            <p className="leading-relaxed font-sans max-w-md">
              Swar Sadhna Musical Classes is a premier institution offering high-integrity instruction spanning vocal training, classical music, harmonium keys, modern electronic keyboards, devotional bhajans, and online classes worldwide.
            </p>
          </div>

          {/* Quick links & numbers */}
          <div className="md:col-span-3 space-y-2">
            <h5 className="font-mono text-white font-bold uppercase tracking-wider text-[10px]">Direct Call Desk</h5>
            <div className="space-y-1.5 text-[11px] font-mono">
              <p>📞 <a href={`tel:${phone1}`} className="hover:text-brand-accent font-bold transition-colors">{phone1}</a></p>
              <p>📞 <a href={`tel:${phone2}`} className="hover:text-[#F5F5F0] transition-colors">{phone2}</a></p>
            </div>
          </div>

          {/* Active Email address & Instagram */}
          <div className="md:col-span-3 space-y-2">
            <h5 className="font-mono text-white font-bold uppercase tracking-wider text-[10px]">Digital Channels</h5>
            <div className="space-y-2">
              <p className="truncate font-semibold text-[11px] font-sans flex items-center gap-2">
                <span>📧</span>
                <a href={`mailto:${activeEmail}`} className="hover:text-brand-accent hover:underline transition-colors">{activeEmail}</a>
              </p>
              <p className="font-semibold text-[11px] font-sans flex items-center gap-2">
                <Instagram className="w-4 h-4 text-brand-primary" />
                <a href="https://www.instagram.com/the_swarsadhana/" target="_blank" rel="noreferrer" className="hover:text-brand-accent hover:underline transition-color text-white">@the_swarsadhana</a>
              </p>
            </div>
          </div>

        </div>

        {/* Closing details and copyright */}
        <div className="border-t border-brand-light/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-[#FAF5EE]/40 tracking-normal font-mono uppercase">
          <p className="flex flex-wrap items-center gap-2">
            <span>© 2026 Swar Sadhna</span>
            <span>|</span>
            <button
              type="button"
              onClick={onOpenAdmin}
              className="text-[#FAF5EE]/45 hover:text-brand-accent transition-all text-[11px] font-sans normal-case cursor-pointer underline decoration-dotted"
            >
              Staff Login
            </button>
          </p>
          <p className="flex items-center gap-1">
            <span>Made with Indian Classical</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            <span>in Surendranagar, India</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
