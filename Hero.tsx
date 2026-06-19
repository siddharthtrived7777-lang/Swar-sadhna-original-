/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Music, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, HeartHandshake, Mic } from 'lucide-react';

interface HeroProps {
  onExploreCourses: () => void;
  onEnquireNow: () => void;
}

export default function Hero({ onExploreCourses, onEnquireNow }: HeroProps) {
  return (
    <header id="hero" className="relative bg-brand-bg pt-16 lg:pt-24 pb-20 px-6 md:px-12 overflow-hidden border-b border-brand-border">
      
      {/* Subtle Minimal Background Circles */}
      <div className="absolute top-1/4 left-1/10 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/10 w-96 h-96 bg-brand-accent/40 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left: Cultured Minimal Typography */}
        <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
          
          {/* Subtle Accent-colored Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-brand-light border border-brand-border px-4 py-1.5 rounded-full text-[10px] font-semibold text-brand-primary uppercase tracking-widest shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-primary animate-pulse" />
            <span>Admissions Open for 2026 Batch</span>
          </motion.div>
 
          {/* Premium Playfair Title Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-dark tracking-tight leading-tight">
              Swar Sadhna <br />
              <span className="text-brand-primary italic font-normal">
                Musical Classes
              </span>
            </h2>
            <p className="text-lg md:text-xl font-sans font-medium text-brand-dark/80 tracking-wide max-w-xl mx-auto lg:mx-0">
              Learn Music with Confidence and Creativity
            </p>
          </motion.div>
 
          {/* Explanatory Body Copy */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base text-brand-dark/70 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans"
          >
            Swar Sadhna Musical Classes is dedicated to nurturing musical talent through structured training, personal guidance, and a supportive learning environment. We offer foundational music education for beginners as well as advanced training for seasoned learners, covering voice culture, keyboard, and classical harmonium keys.
          </motion.p>
 
          {/* Quick Value Preposition Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4 pt-2 max-w-md mx-auto lg:mx-0 text-left"
          >
            <div className="flex items-center gap-2.5 text-xs font-semibold text-brand-dark/90">
              <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0" />
              <span>Personalized Feedback</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-brand-dark/90">
              <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0" />
              <span>Online &amp; Offline Modes</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-brand-dark/90">
              <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0" />
              <span>Experienced Mentors</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-brand-dark/90">
              <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0" />
              <span>Acoustic Riyaz Training</span>
            </div>
          </motion.div>
 
          {/* Primary Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <button
              type="button"
              onClick={onEnquireNow}
              className="w-full sm:w-auto px-8 py-4 bg-brand-primary text-white rounded-full font-bold font-sans text-xs uppercase tracking-widest hover:bg-brand-dark shadow-xs transition-all flex items-center justify-center gap-2"
            >
              <span>Secure Your Trial Lesson</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onExploreCourses}
              className="w-full sm:w-auto px-8 py-4 bg-brand-light text-brand-dark hover:bg-brand-accent/50 rounded-full font-bold font-sans text-xs uppercase tracking-widest border border-brand-border shadow-xs transition-all flex items-center justify-center gap-2"
            >
              <span>Explore 6 Active Courses</span>
            </button>
          </motion.div>
 
        </div>
 
        {/* Right: Clean Minimalist Instrument / Riyaz Visual Widget */}
        <div className="lg:col-span-12 xl:col-span-5 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full max-w-md bg-brand-light rounded-3xl p-8 border border-brand-border shadow-xs relative overflow-hidden text-brand-dark"
          >
            {/* Background elements resembling ancient music texts */}
            <div className="absolute top-0 right-0 p-8 text-brand-primary/5 select-none text-9xl font-serif">
              ॐ
            </div>
            
            <div className="relative z-10 space-y-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-brand-primary font-bold">
                    ESTD 1998 • SURENDRANAGAR
                  </span>
                  <p className="font-serif text-xl text-brand-primary font-bold italic">Swar Sadhna Music Board</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-accent/70 border border-brand-border flex items-center justify-center">
                  <Mic className="text-brand-primary w-4 h-4" />
                </div>
              </div>
 
              {/* Decorative Audio Bar Chart */}
              <div className="bg-[#FAF5EE] rounded-2xl p-5 border border-brand-border">
                <p className="text-[9px] font-mono text-brand-dark/70 mb-3 tracking-widest uppercase font-bold">Core Svara Frequencies</p>
                <div className="flex items-end gap-1.5 h-16 justify-between px-2 pt-2">
                  {[40, 75, 55, 90, 45, 65, 85, 30, 95, 70, 50, 80].map((h, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-brand-primary/80 rounded-full animate-pulse"
                      style={{ 
                        height: `${h}%`,
                        animationDelay: `${i * 120}ms`,
                        animationDuration: '1.2s'
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-[8px] font-mono text-brand-dark/50 mt-2 px-1 font-bold">
                  <span>SA (C)</span>
                  <span>MA (F)</span>
                  <span>PA (G)</span>
                  <span>SA' (C)</span>
                </div>
              </div>
 
              {/* Real Value Pillars in Swar Sadhna */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-brand-accent/50 rounded-full mt-0.5 text-brand-primary">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wide">Government Certified Curriculum</h4>
                    <p className="text-[11px] text-brand-dark/70 mt-0.5 font-sans leading-relaxed">
                      We offer formal Indian classical training aligned with standard music board examinations.
                    </p>
                  </div>
                </div>
 
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-brand-accent/50 rounded-full mt-0.5 text-brand-primary">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wide">Personal Attentive Mentorship</h4>
                    <p className="text-[11px] text-brand-dark/70 mt-0.5 font-sans leading-relaxed">
                      Each student receives direct, real-time auditory adjustments to avoid vocal strain.
                    </p>
                  </div>
                </div>
              </div>
 
              {/* Elegant signature / border */}
              <div className="border-t border-brand-border pt-4 flex justify-between items-center text-[9px] text-brand-dark/50 font-mono tracking-wider font-bold">
                <span>CONFIDENCE &amp; GRACE</span>
                <span>SURENDRANAGAR, GUJARAT</span>
              </div>
            </div>
 
          </motion.div>
        </div>
 
      </div>
    </header>
  );
}
