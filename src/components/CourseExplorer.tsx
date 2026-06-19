/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mic2, 
  Library, 
  Piano, 
  Wifi, 
  Music, 
  ArrowRight, 
  CheckCircle,
  TrendingUp,
  Award,
  BookOpen
} from 'lucide-react';
import { Course } from '../types';

interface CourseExplorerProps {
  onEnquire: (courseTitle: string) => void;
}

const COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Vocal Music',
    shortDesc: 'Learn voice culture, breathing techniques, pitch control, and song performance.',
    fullDesc: 'A systematic module focused on mastering voice synthesis and control. Ideal for individuals looking to enhance vocal resonance, control vibration pitch, and sing in diverse styles.',
    icon: 'Mic2',
    category: 'vocal',
    features: [
      'Voice culture & placement keys',
      'Breathing techniques & stamina',
      'Pitch control (Swar-Abhyas)',
      'Live stage song performance'
    ]
  },
  {
    id: 'c2',
    title: 'Classical Music',
    shortDesc: 'Build a strong foundation in Indian Classical Music through systematic training.',
    fullDesc: 'Rooted and structured classical classes teaching ragas, taals, alankars, and bandishes. Learn the deep theoretical and auditory foundations of traditional Hindustani classical art.',
    icon: 'Library',
    category: 'vocal',
    features: [
      'Foundational Svara & Alankars',
      'Raga structure (Thaat, Aaroh-Avroh)',
      'Taal mastery (Teentaal, Dadra, Keherwa)',
      'Bandish composition memory'
    ]
  },
  {
    id: 'c3',
    title: 'Harmonium',
    shortDesc: 'Learn basic to advanced harmonium playing with practical exercises.',
    fullDesc: 'Understand keys, fingering patterns, background bellows pumping, and chord generation. Perfect companion instrument for classical vocalists and bhajan performance guides.',
    icon: 'BookOpen',
    category: 'instrument',
    features: [
      'Manual Bellows airflow balance',
      'Traditional fingering methods',
      'Vocal accompaniment patterns',
      'Raag & Bhajan notation guides'
    ]
  },
  {
    id: 'c4',
    title: 'Keyboard',
    shortDesc: 'Develop keyboard skills, rhythm, and melody through structured lessons.',
    fullDesc: 'Modern style keyboard techniques. Covering scale maps, both-hands playing synchronization, chord progressions, time signatures, and song composition paths.',
    icon: 'Piano',
    category: 'instrument',
    features: [
      'Dual-hand synchronization',
      'Western chords & root triads',
      'Rhythm, pads, & voices guide',
      'Lead melody ear-transcription'
    ]
  },
  {
    id: 'c5',
    title: 'Bhajans & Light Music',
    shortDesc: 'Learn devotional and light music suitable for performances.',
    fullDesc: 'Geared towards spiritual elevation and personal performance. Build a rich repertoire of beloved Bhajans, Ghazals, semi-classical tracks, and devotional melodies with instruments.',
    icon: 'Music',
    category: 'general',
    features: [
      'Devotional hymns (Bhajans & Kirtans)',
      'Popular light music & ghazals',
      'Expression, emotion, & lyrics clarity',
      'Easy harmonium/keyboard backup'
    ]
  },
  {
    id: 'c6',
    title: 'Online Music Classes',
    shortDesc: 'Attend music lessons from anywhere with interactive online sessions.',
    fullDesc: 'Seamless, high-definition online classes engineered to eliminate sound delay. Experience personal, live feedback from Surendranagar’s premier faculty in the comfort of your room.',
    icon: 'Wifi',
    category: 'general',
    features: [
      'High fidelity audio-video streams',
      'Flexible digital timetables',
      'Digital PDF textbooks & sheets',
      'Recorded lessons for practice'
    ]
  }
];

export default function CourseExplorer({ onEnquire }: CourseExplorerProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'vocal' | 'instrument' | 'general'>('all');

  // Map icon strings to Lucide elements
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mic2': return <Mic2 className="w-4.5 h-4.5 text-brand-primary" />;
      case 'Library': return <Library className="w-4.5 h-4.5 text-brand-primary" />;
      case 'Piano': return <Piano className="w-4.5 h-4.5 text-brand-primary" />;
      case 'Wifi': return <Wifi className="w-4.5 h-4.5 text-brand-primary" />;
      case 'BookOpen': return <BookOpen className="w-4.5 h-4.5 text-brand-primary" />;
      default: return <Music className="w-4.5 h-4.5 text-brand-primary" />;
    }
  };

  const filteredCourses = activeTab === 'all' 
    ? COURSES 
    : COURSES.filter(c => c.category === activeTab);

  return (
    <section id="courses" className="py-24 px-6 md:px-12 bg-white border-t border-brand-border">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Block */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 pb-6 border-b border-brand-border">
          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-brand-primary bg-brand-accent/50 px-3 py-1.5 rounded-full font-bold uppercase border border-brand-border inline-block">
              Rigorous Curriculum
            </span>
            <h3 className="text-3xl font-serif text-brand-dark font-bold">
              Courses offered at Swar Sadhna <span className="text-brand-primary italic font-normal">Classes</span>
            </h3>
            <p className="text-xs md:text-sm text-brand-dark/70 max-w-xl font-sans">
              Discover customized syllabus options crafted carefully for absolute beginners, school-going kids, and dedicated adults.
            </p>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap gap-1 bg-brand-accent/30 p-1.5 rounded-full border border-brand-border text-[10px]">
            {(['all', 'vocal', 'instrument', 'general'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-bold uppercase tracking-wider rounded-full transition-all ${
                  activeTab === tab
                    ? 'bg-brand-primary text-white shadow-xs'
                    : 'text-brand-dark/80 hover:bg-brand-accent/70'
                }`}
              >
                {tab === 'all' ? 'All Classes' : `${tab} Courses`}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, i) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-brand-light border border-brand-border rounded-3xl p-8 hover:border-brand-primary hover:shadow-xs transition-all flex flex-col justify-between relative group"
              >
                {/* Traditional Decorative Motif on corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-brand-bg/50 border-b border-l border-brand-border rounded-tr-3xl rounded-bl-3xl flex items-center justify-center pointer-events-none">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/20 group-hover:bg-brand-primary transition-colors" />
                </div>

                <div className="space-y-5">
                  {/* Icon Badge */}
                  <div className="w-10 h-10 rounded-full bg-brand-accent/40 border border-brand-border flex items-center justify-center">
                    {getIcon(course.icon)}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h4 className="font-serif text-lg font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                      {course.title}
                    </h4>
                    <p className="text-xs text-brand-dark/75 leading-relaxed font-sans min-h-[50px]">
                      {course.shortDesc}
                    </p>
                  </div>

                  {/* Syllabus / Features Checklist */}
                  <div className="pt-4 border-t border-brand-border space-y-3">
                    <p className="text-[9px] font-mono tracking-widest text-brand-primary font-bold uppercase">Syllabus Highlights</p>
                    <div className="space-y-2">
                      {course.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2 text-[11px] text-brand-dark/95 font-sans">
                          <CheckCircle className="w-3.5 h-3.5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card footer actions */}
                <div className="pt-6 mt-6 flex items-center justify-between border-t border-brand-border">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-brand-primary font-bold flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" /> Beginner to Advanced
                  </span>
                  
                  <button
                    type="button"
                    onClick={() => onEnquire(course.title)}
                    className="text-xs font-bold uppercase tracking-wider text-brand-dark hover:text-brand-primary font-sans flex items-center gap-1 group/btn"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-all" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dynamic callout banner */}
        <div className="bg-[#FAF5EE] border border-brand-border rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left shadow-xs">
          <div className="flex items-center gap-4 flex-col md:flex-row">
            <div className="p-3 bg-brand-primary text-white rounded-full flex-shrink-0">
              <TrendingUp className="w-4.5 h-4.5" />
            </div>
            <div>
              <h4 className="font-serif text-brand-dark font-bold text-sm">Not sure which class aligns with your current level?</h4>
              <p className="text-xs text-brand-dark/70 font-sans mt-0.5">We offer a free diagnostic consultation callback to check your pitch accuracy and suggest the right course.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onEnquire('Free Music Consultation & Level Check')}
            className="px-6 py-3 bg-brand-primary hover:bg-brand-dark text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap"
          >
            Claim Diagnostic Session
          </button>
        </div>

      </div>
    </section>
  );
}
