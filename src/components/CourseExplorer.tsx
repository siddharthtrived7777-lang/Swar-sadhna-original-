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
  BookOpen,
  X
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
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // Map icon strings to Lucide elements
  const getIcon = (iconName: string, className = "w-4.5 h-4.5 text-brand-primary") => {
    switch (iconName) {
      case 'Mic2': return <Mic2 className={className} />;
      case 'Library': return <Library className={className} />;
      case 'Piano': return <Piano className={className} />;
      case 'Wifi': return <Wifi className={className} />;
      case 'BookOpen': return <BookOpen className={className} />;
      default: return <Music className={className} />;
    }
  };

  const filteredCourses = activeTab === 'all' 
    ? COURSES 
    : COURSES.filter(c => c.category === activeTab);

  const handleEnquiryFromPopup = (courseTitle: string) => {
    setSelectedCourse(null);
    onEnquire(courseTitle);
  };

  return (
    <section id="courses" className="py-20 px-4 md:px-12 bg-white border-t border-brand-border">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-brand-border">
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

          {/* Filtering buttons - horizontally scrollable list on mobile */}
          <div className="flex overflow-x-auto whitespace-nowrap scrollbar-none gap-1 bg-brand-accent/30 p-1.5 rounded-full border border-brand-border text-[10px] max-w-full">
            {(['all', 'vocal', 'instrument', 'general'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-bold uppercase tracking-wider rounded-full transition-all flex-shrink-0 ${
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

        {/* Mobile Swipe Hint Indicator */}
        <div className="flex md:hidden items-center justify-between text-brand-primary font-mono text-[9px] font-bold tracking-wider uppercase px-2 py-1 bg-brand-accent/20 rounded-lg animate-pulse">
          <span>Swipe left / right to explore syllabus</span>
          <span className="flex items-center gap-1">Swipe →</span>
        </div>

        {/* Dynamic Cards Grid - Switch to flex horizontal swipe lists on mobile */}
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6 gap-5 px-1 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible max-w-full">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, i) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                onClick={() => setSelectedCourse(course)}
                className="bg-brand-light border border-brand-border rounded-2xl p-5 hover:border-brand-primary hover:shadow-md transition-all flex flex-col justify-between relative group snap-start w-[80vw] flex-shrink-0 md:w-auto h-[285px] max-h-[285px] min-h-[285px] cursor-pointer"
              >
                {/* Traditional Decorative Motif on corner */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-brand-bg/40 border-b border-l border-brand-border rounded-tr-2xl rounded-bl-2xl flex items-center justify-center pointer-events-none">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/20 group-hover:bg-brand-primary transition-colors" />
                </div>

                <div className="space-y-4">
                  {/* Icon Badge */}
                  <div className="w-9 h-9 rounded-full bg-brand-accent/40 border border-brand-border flex items-center justify-center flex-shrink-0">
                    {getIcon(course.icon)}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h4 className="font-serif text-base font-bold text-brand-dark group-hover:text-brand-primary transition-colors line-clamp-1">
                      {course.title}
                    </h4>
                    <p className="text-xs text-brand-dark/75 leading-relaxed font-sans line-clamp-1">
                      {course.shortDesc}
                    </p>
                  </div>

                  {/* Syllabus / Features Checklist (2 items max) */}
                  <div className="pt-3 border-t border-brand-border space-y-2">
                    <div className="space-y-1.5">
                      {course.features.slice(0, 2).map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2 text-[11px] text-brand-dark/90 font-sans">
                          <CheckCircle className="w-3.5 h-3.5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card footer actions */}
                <div className="pt-3 border-t border-brand-border mt-auto flex items-center justify-between">
                  <span className="text-[9px] font-mono tracking-widest text-brand-primary/70 font-semibold uppercase">
                    More Details
                  </span>
                  
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCourse(course);
                    }}
                    className="text-xs font-bold uppercase tracking-wider text-brand-dark group-hover:text-brand-primary font-sans flex items-center gap-1 group/btn cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-all" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Footnote call to action line */}
        <div className="text-center pt-4 border-t border-brand-border/40">
          <button
            type="button"
            onClick={() => onEnquire('Free Music Consultation & Level Check')}
            className="text-xs md:text-sm font-semibold text-brand-dark hover:text-brand-primary font-sans inline-flex items-center gap-1.5 transition-colors cursor-pointer group pb-2"
          >
            <span>Can't decide? Take our free diagnostic session</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-all text-brand-primary" />
          </button>
        </div>

      </div>

      {/* Beautiful course detail Modal popup on Click */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Smooth dark overlay background with subtle backdrop blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="absolute inset-0 bg-brand-dark/65 backdrop-blur-xs cursor-pointer"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative bg-brand-light border border-brand-border rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl overflow-hidden z-10 flex flex-col gap-5"
            >
              {/* Close Button X */}
              <button
                type="button"
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 p-1.5 text-brand-dark/60 hover:text-brand-primary hover:bg-brand-accent/40 rounded-full transition-colors cursor-pointer focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header: Icon & Name */}
              <div className="flex items-center gap-3.5 pr-6">
                <div className="w-11 h-11 rounded-full bg-brand-accent/50 border border-brand-border flex items-center justify-center text-brand-primary flex-shrink-0">
                  {getIcon(selectedCourse.icon, "w-5 h-5 text-brand-primary")}
                </div>
                <div>
                  <h4 className="font-serif text-lg md:text-xl font-bold text-brand-dark leading-tight">
                    {selectedCourse.title}
                  </h4>
                  <span className="text-[9px] font-mono tracking-widest text-brand-primary font-bold uppercase mt-1 inline-block">
                    {selectedCourse.category === 'vocal' ? 'Vocal Artistry' : selectedCourse.category === 'instrument' ? 'Instrumental Craft' : 'Devotional & General'}
                  </span>
                </div>
              </div>

              {/* Course Details Content */}
              <div className="space-y-4 text-xs md:text-sm text-brand-dark/95 font-sans">
                {/* Full deep description */}
                <p className="text-brand-dark/80 leading-relaxed text-xs">
                  {selectedCourse.fullDesc}
                </p>

                {/* Level / Duration Quick Badges Grid */}
                <div className="grid grid-cols-2 gap-3 bg-brand-bg/50 rounded-xl p-3 border border-brand-border/60">
                  <div>
                    <span className="block text-[8px] font-mono tracking-widest text-brand-primary uppercase font-bold mb-0.5">Duration</span>
                    <span className="text-xs font-bold text-brand-dark">3 to 6 Months</span>
                  </div>
                  <div>
                    <span className="block text-[8px] font-mono tracking-widest text-brand-primary uppercase font-bold mb-0.5">Lesson Tier</span>
                    <span className="text-xs font-bold text-brand-dark">Beginner to Advanced</span>
                  </div>
                </div>

                {/* All syllabus highlights list */}
                <div className="space-y-2 pt-2">
                  <h5 className="text-[9px] font-mono tracking-widest text-brand-primary font-bold uppercase">Comprehensive Syllabus</h5>
                  <div className="space-y-2 max-h-[140px] overflow-y-auto pr-1">
                    {selectedCourse.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs">
                        <CheckCircle className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                        <span className="font-medium text-brand-dark/90 text-[11px] leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enquiry submission bottom trigger */}
              <div className="pt-2 border-t border-brand-border/40">
                <button
                  type="button"
                  onClick={() => handleEnquiryFromPopup(selectedCourse.title)}
                  className="w-full py-3 bg-brand-primary hover:bg-brand-dark text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
