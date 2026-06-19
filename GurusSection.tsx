/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, Sparkles, BookOpen, Music } from 'lucide-react';

import atulImgUrl from '../assets/guru_atul.jpg';
import artiImgUrl from '../assets/guru_arti.jpg';

export default function GurusSection() {
  // Image states with local path first, falling back to gorgeous high-quality public Unsplash representations
  const [atulImg, setAtulImg] = useState(atulImgUrl);
  const [artiImg, setArtiImg] = useState(artiImgUrl);

  // Fallback handlers
  const handleAtulError = () => {
    // Falls back to a premium, warm, authentic portrait of a smiling classical older Indian master
    if (atulImg !== 'https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?auto=format&fit=crop&q=80&w=400&h=400') {
      setAtulImg('https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?auto=format&fit=crop&q=80&w=400&h=400');
    }
  };

  const handleArtiError = () => {
    // Falls back to a soulful portrait of an Indian classical female singer in a serene green saree context
    if (artiImg !== 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=400&h=400') {
      setArtiImg('https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=400&h=400');
    }
  };

  const gurus = [
    {
      name: "Atul Dave",
      role: "Senior Music Trainer",
      experience: "40+ Years Experience",
      bio: "A deeply rooted music educator with over 4 decades of experience. His calm and structured teaching approach has shaped hundreds of students.",
      tags: ["Hindustani Classical", "Tabla", "Riyaz"],
      imgSrc: atulImg,
      onError: handleAtulError,
      icon: <BookOpen className="w-4 h-4 text-brand-primary" />
    },
    {
      name: "Arti Trivedi",
      role: "Senior Vocal Trainer",
      experience: "40+ Years Experience",
      bio: "A soulful vocalist and inspiring teacher with over 4 decades of dedication to Indian classical and devotional music traditions.",
      tags: ["Vocal Music", "Bhajan", "Classical Singing"],
      imgSrc: artiImg,
      onError: handleArtiError,
      icon: <Music className="w-4 h-4 text-brand-primary" />
    }
  ];

  return (
    <section id="gurus" className="py-24 px-6 md:px-12 bg-brand-bg border-t border-brand-border">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-brand-accent/50 border border-brand-border px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest text-brand-primary font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-primary animate-pulse" />
            <span>Our Educators</span>
          </div>
          <h3 className="font-serif text-3xl md:text-5xl font-bold text-brand-dark tracking-tight">
            Meet Our <span className="text-brand-primary italic font-normal">Gurus</span>
          </h3>
          <p className="text-xs md:text-sm text-brand-dark/70 font-sans leading-relaxed">
            Learn from masters who have dedicated their lives to the art of Indian classical music.
          </p>
        </div>

        {/* 2-Column Grid Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {gurus.map((guru, index) => (
            <motion.div
              key={guru.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className="bg-brand-light border border-brand-border rounded-3xl p-8 md:p-10 shadow-xs hover:border-brand-primary hover:shadow-md transition-all duration-300 flex flex-col items-center text-center relative group"
            >
              {/* Photo Styling: 120px x 120px circle, terracotta frame, warm overlay */}
              <div className="relative w-[120px] h-[120px] rounded-full p-1 border-2 border-brand-primary/85 bg-brand-accent/40 shadow-sm mb-6 flex-shrink-0 overflow-hidden">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  {/* Warm overlay */}
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

              {/* Guru Name and Role */}
              <div className="space-y-1">
                <h4 className="font-serif text-2xl font-bold text-brand-dark tracking-tight">
                  {guru.name}
                </h4>
                <p className="text-xs text-brand-primary font-mono tracking-wider font-bold uppercase flex items-center justify-center gap-1.5">
                  {guru.icon}
                  <span>{guru.role}</span>
                </p>
              </div>

              {/* Experience Badge with star icon */}
              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-brand-primary font-bold text-[10px] uppercase tracking-wider font-mono">
                <Award className="w-3.5 h-3.5 text-brand-primary fill-brand-primary/25" />
                <span>✦ 40+ Years Experience</span>
              </div>

              {/* Bio description */}
              <p className="mt-6 text-xs text-brand-dark/75 font-sans leading-relaxed max-w-sm">
                {guru.bio}
              </p>

              {/* Decorative Tags with consistent beige badges */}
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                {guru.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-brand-bg text-brand-dark/80 border border-brand-border rounded-lg text-[9px] uppercase tracking-wider font-bold font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
