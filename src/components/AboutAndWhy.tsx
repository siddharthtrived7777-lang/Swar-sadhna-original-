/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Users, 
  GraduationCap, 
  Smartphone, 
  Calendar, 
  Heart, 
  Award, 
  Music4 
} from 'lucide-react';

export default function AboutAndWhy() {
  const whyPoints = [
    {
      title: "Experienced Teachers",
      desc: "Guided by certified gurus with extensive backgrounds in performance and classical music pedagogy.",
      icon: GraduationCap,
      color: "bg-brand-light",
      iconColor: "text-brand-primary",
    },
    {
      title: "Beginner to Advanced Training",
      desc: "Structured syllabus scaling step-by-step from raw pitch control to complex ragas and fast compositions.",
      icon: Award,
      color: "bg-brand-light",
      iconColor: "text-brand-primary",
    },
    {
      title: "Individual Attention",
      desc: "Small batches and custom interactive cycles. Teachers evaluate and correct your vocal chords in real-time.",
      icon: Users,
      color: "bg-brand-light",
      iconColor: "text-brand-primary",
    },
    {
      title: "Online & Offline Classes",
      desc: "Study at our premium Surendranagar studio or join high-fidelity online voice setups from anywhere in the world.",
      icon: Smartphone,
      color: "bg-brand-light",
      iconColor: "text-brand-primary",
    },
    {
      title: "Performance Opportunities",
      desc: "Participate in bi-annual stage concerts, classical youth meets, and online showcases to conquer stage fear.",
      icon: Calendar,
      color: "bg-brand-light",
      iconColor: "text-brand-primary",
    },
    {
      title: "Friendly Learning Environment",
      desc: "A warm, joyful, non-judgmental environment of peer learners where safety and creative focus coexist.",
      icon: Heart,
      color: "bg-brand-light",
      iconColor: "text-brand-primary",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white border-t border-brand-border">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* About Section Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block - Text Summary */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] font-mono tracking-widest text-brand-primary bg-brand-accent/50 px-3.5 py-1.5 rounded-full font-bold uppercase border border-brand-border inline-block">
              Rooted in Tradition, Shaped for Today
            </span>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark tracking-tight leading-snug">
              About Swar Sadhna <br />
              <span className="text-brand-primary italic font-normal">Musical Classes</span>
            </h3>
            <div className="space-y-4 text-brand-dark/80 text-sm md:text-base leading-relaxed font-sans">
              <p>
                Swar Sadhna Musical Classes is led by highly experienced, master music educators committed to helping students unlock their pure natural register, develop rich rhythmic control, and play with confidence.
              </p>
              <p>
                Our singular goal is to make music learning enjoyable, disciplined, and deeply accessible for students of all age groups. Whether you want to sing classical bandishes, master keyboard chords, or play direct harmonium accompaniment, we guide you each step of the way.
              </p>
            </div>
            
            {/* Short Academy Stat Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-border">
              <div className="text-center sm:text-left">
                <p className="font-serif text-2xl md:text-3xl font-bold text-brand-primary">1500+</p>
                <p className="text-[9px] uppercase tracking-wider text-brand-dark/60 font-bold mt-1">Alumni Trained</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="font-serif text-2xl md:text-3xl font-bold text-brand-primary">12+</p>
                <p className="text-[9px] uppercase tracking-wider text-brand-dark/60 font-bold mt-1">Ragas Taught</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="font-serif text-2xl md:text-3xl font-bold text-brand-primary">100%</p>
                <p className="text-[9px] uppercase tracking-wider text-brand-dark/60 font-bold mt-1">Passing Grade</p>
              </div>
            </div>
          </div>

          {/* Right Block - Graphic Visual Representation of Sadhna (Practice) */}
          <div className="lg:col-span-6">
            <div className="relative bg-[#FAF5EE] border border-brand-border rounded-3xl p-8 shadow-xs overflow-hidden flex flex-col justify-between" style={{ minHeight: '340px' }}>
              
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 text-brand-primary/5 font-serif text-9xl leading-none select-none">
                सा
              </div>

              <div className="relative z-10">
                <div className="w-11 h-11 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-xs mb-6">
                  <Music4 className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-bold text-brand-dark">The Concept of Swar Sadhna</h4>
                <p className="text-xs md:text-sm text-brand-dark/75 mt-2 leading-relaxed font-sans">
                  "Sadhna" represents dedicated meditation or persistent practice. Music in its truest form is an internal discipline of listening. We believe that physical control of voice and keys arises outward from deep internal stillness, which we practice through structured morning Alankars and focused rhythmic drills.
                </p>
              </div>

              {/* Musical progression list */}
              <div className="relative z-10 mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-brand-border">
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-dark font-sans">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                  <span>Interactive Ear Training</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-dark font-sans">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                  <span>Structured Breathing</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-dark font-sans">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                  <span>Improvisation Competency</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-dark font-sans">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                  <span>Confidence Multiplier</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Why Choose Us Grid Area */}
        <div className="space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-brand-primary font-bold uppercase">Our Advantages</span>
            <h3 className="text-2xl md:text-3xl font-serif text-brand-dark font-bold">Why Choose Us?</h3>
            <p className="text-xs md:text-sm text-brand-dark/70 font-sans">
              We focus on traditional values balanced with modern learning convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`${point.color} border border-brand-border rounded-3xl p-8 hover:shadow-xs hover:border-brand-primary transition-all` }
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-full bg-brand-accent/40 border border-brand-border ${point.iconColor}`}>
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="font-serif font-bold text-brand-dark text-sm md:text-base">{point.title}</h4>
                  </div>
                  <p className="text-xs text-brand-dark/75 leading-relaxed font-sans">
                    {point.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
