/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Sparkles, BookOpen, Music, X, ArrowRight, Star } from 'lucide-react';

import atulImgUrl from '../assets/guru_atul.jpg';
import artiImgUrl from '../assets/guru_arti.jpg';
import rishabImgUrl from '../../IMG-20260515-WA0007.jpg';

interface GurusSectionProps {
  onEnquire?: (courseTitle: string) => void;
}

export default function GurusSection({ onEnquire }: GurusSectionProps) {
  // Image states with local path first, falling back to high-quality public Unsplash representatives
  const [atulImg, setAtulImg] = useState(atulImgUrl);
  const [artiImg, setArtiImg] = useState(artiImgUrl);
  const [rishabImg, setRishabImg] = useState(rishabImgUrl);

  const [selectedGuru, setSelectedGuru] = useState<any | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Fallback handlers
  const handleAtulError = () => {
    if (atulImg !== 'https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?auto=format&fit=crop&q=80&w=400&h=400') {
      setAtulImg('https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?auto=format&fit=crop&q=80&w=400&h=400');
    }
  };

  const handleArtiError = () => {
    if (artiImg !== 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=400&h=400') {
      setArtiImg('https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=400&h=400');
    }
  };

  const handleRishabError = () => {
    if (rishabImg !== 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400') {
      setRishabImg('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400');
    }
  };

  const gurus = [
    {
      name: "Atul Dave",
      role: "Senior Music Trainer",
      experience: "40+ Years",
      bio: "A deeply rooted music educator with over 4 decades of experience. His calm and structured teaching approach has shaped hundreds of classical students.",
      tags: ["Hindustani Classical", "Tabla", "Riyaz"],
      imgSrc: atulImg,
      onError: handleAtulError,
      courseToSelect: "Classical Music",
      icon: <BookOpen className="w-3.5 h-3.5 text-brand-primary" />
    },
    {
      name: "Arti Trivedi",
      role: "Senior Vocal Trainer",
      experience: "40+ Years",
      bio: "A soulful vocalist and inspiring teacher with over 4 decades of dedication to Indian classical, devotional bhajans, and rich vocal singing traditions.",
      tags: ["Vocal Music", "Bhajan", "Classical Singing"],
      imgSrc: artiImg,
      onError: handleArtiError,
      courseToSelect: "Vocal Music",
      icon: <Music className="w-3.5 h-3.5 text-brand-primary" />
    },
    {
      name: "Rishab Dave",
      role: "Music Trainer & Instructor",
      experience: "18+ Years",
      bio: "A dynamic and energetic music trainer bringing modern techniques combined with classical foundations. Specialist in fast-paced keyboard learning.",
      tags: ["Modern Music", "Keyboard", "Light Music"],
      imgSrc: rishabImg,
      onError: handleRishabError,
      courseToSelect: "Keyboard",
      icon: <Star className="w-3.5 h-3.5 text-brand-primary" />
    }
  ];

  const handleScroll = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollLeft = container.scrollLeft;
      const width = container.offsetWidth;
      // Because width visible can vary, we approximate by child width factor
      const index = Math.round(scrollLeft / (width * 0.72));
      setActiveIndex(Math.min(Math.max(index, 0), gurus.length - 1));
    }
  };

  const scrollToGuru = (idx: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const childWidth = container.scrollWidth / gurus.length;
      container.scrollTo({
        left: idx * childWidth * 0.95,
        behavior: 'smooth'
      });
      setActiveIndex(idx);
    }
  };

  const handleEnquireFromPopup = (course: string) => {
    setSelectedGuru(null);
    if (onEnquire) {
      onEnquire(course);
    }
  };

  return (
    <section id="gurus" className="py-16 px-4 md:px-12 bg-brand-bg border-t border-brand-border overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-brand-accent/50 border border-brand-border px-4 py-1 rounded-full text-[10px] font-mono tracking-widest text-brand-primary font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-primary animate-pulse" />
            <span>Master Educators</span>
          </div>
          <h3 className="font-serif text-2xl md:text-4xl font-bold text-brand-dark tracking-tight">
            Meet Our <span className="text-brand-primary italic font-normal">Gurus</span>
          </h3>
          <p className="text-xs text-brand-dark/70 font-sans leading-relaxed max-w-md mx-auto">
            Learn from master trainers who combine traditional wisdom with modern engagement techniques.
          </p>
        </div>

        {/* 3-Column Grid Responsive Layout */}
        <div className="relative">
          <div 
            ref={containerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 gap-5 px-2 md:grid md:grid-cols-3 md:gap-6 lg:gap-8 md:overflow-visible max-w-full"
          >
            {gurus.map((guru, index) => (
              <motion.div
                key={guru.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => setSelectedGuru(guru)}
                className="bg-brand-light border border-brand-border rounded-2xl p-5 shadow-xs hover:border-brand-primary hover:shadow-md transition-all duration-300 flex flex-col items-center text-center relative group select-none snap-start w-[78vw] flex-shrink-0 md:w-auto cursor-pointer"
              >
                {/* Compact Photo: 90px circular, brand framed */}
                <div className="relative w-[90px] h-[90px] rounded-full p-1 border border-brand-primary/80 bg-brand-accent/40 shadow-xs mb-4 flex-shrink-0 overflow-hidden">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-brand-primary/5 mix-blend-multiply pointer-events-none z-10" />
                    <img
                      src={guru.imgSrc}
                      alt={`${guru.name} - ${guru.role}`}
                      onError={guru.onError}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 relative z-0"
                    />
                  </div>
                </div>

                {/* Name */}
                <h4 className="font-serif text-base font-bold text-brand-dark tracking-tight group-hover:text-brand-primary transition-colors">
                  {guru.name}
                </h4>

                {/* Role in terracotta small text */}
                <p className="text-[10px] text-brand-primary font-mono tracking-wider font-bold uppercase flex items-center justify-center gap-1 mt-1">
                  {guru.icon}
                  <span>{guru.role}</span>
                </p>

                {/* Experience Badge */}
                <div className="mt-2.5 inline-flex items-center gap-1 px-2.5 py-0.5 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-brand-primary font-bold text-[9px] uppercase tracking-wider font-mono">
                  <Award className="w-3 h-3 text-brand-primary" />
                  <span>{guru.experience} Experience</span>
                </div>

                {/* 2 Specialization tags maximum on card */}
                <div className="mt-4 flex flex-wrap justify-center gap-1.5 pt-3 border-t border-brand-border/60 w-full">
                  {guru.tags.slice(0, 2).map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-brand-bg text-brand-dark/80 border border-brand-border rounded-md text-[8.5px] uppercase tracking-wider font-bold font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Profile Action */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedGuru(guru);
                  }}
                  className="mt-4 text-[10px] font-bold uppercase tracking-wider text-brand-primary hover:text-brand-dark transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>View Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

              </motion.div>
            ))}
          </div>

          {/* Swipe Hint Indicator dots at bottom on Mobile */}
          <div className="flex md:hidden justify-center items-center gap-1.5 mt-3">
            {gurus.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToGuru(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-4 bg-brand-primary' : 'w-1.5 bg-brand-border'}`}
                aria-label={`Scroll to guru ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Profile Detail Popup Modal */}
      <AnimatePresence>
        {selectedGuru && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedGuru(null)}
              className="absolute inset-0 bg-brand-dark/65 backdrop-blur-xs cursor-pointer"
            />

            {/* Modal dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative bg-brand-light border border-brand-border rounded-3xl p-6 md:p-8 max-w-sm w-full shadow-2xl z-10 flex flex-col items-center text-center gap-5"
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setSelectedGuru(null)}
                className="absolute top-4 right-4 p-1.5 text-brand-dark/60 hover:text-brand-primary hover:bg-brand-accent/40 rounded-full transition-colors cursor-pointer"
                aria-label="Close profile modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Portrait Circle */}
              <div className="relative w-[110px] h-[110px] rounded-full p-1 border-2 border-brand-primary bg-brand-accent/40 shadow-sm mt-2 overflow-hidden flex-shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-brand-primary/5 mix-blend-multiply pointer-events-none z-10" />
                  <img
                    src={selectedGuru.imgSrc}
                    alt={selectedGuru.name}
                    onError={selectedGuru.onError}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Identity labels */}
              <div className="space-y-1">
                <h4 className="font-serif text-xl md:text-2xl font-bold text-brand-dark tracking-tight">
                  {selectedGuru.name}
                </h4>
                <p className="text-xs text-brand-primary font-mono tracking-wider font-bold uppercase flex items-center justify-center gap-1">
                  {selectedGuru.icon}
                  <span>{selectedGuru.role}</span>
                </p>
              </div>

              {/* Experience and All tags */}
              <div className="space-y-3 w-full">
                <div className="inline-flex items-center gap-1 px-3 py-0.5 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-brand-primary font-bold text-[10px] uppercase tracking-wider font-mono">
                  <Award className="w-3.5 h-3.5 text-brand-primary" />
                  <span>{selectedGuru.experience} Experience</span>
                </div>

                {/* Show ALL specialization tags on popup */}
                <div className="flex flex-wrap justify-center gap-1.5 pt-1">
                  {selectedGuru.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-brand-bg text-brand-dark/90 border border-brand-border rounded-lg text-[9px] uppercase tracking-wider font-bold font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Full Bio description */}
              <p className="text-xs md:text-sm text-brand-dark/80 leading-relaxed font-sans px-1">
                {selectedGuru.bio}
              </p>

              {/* Enquire Now trigger button */}
              <button
                type="button"
                onClick={() => handleEnquireFromPopup(selectedGuru.courseToSelect)}
                className="w-full py-3 mt-2 bg-brand-primary hover:bg-brand-dark text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
