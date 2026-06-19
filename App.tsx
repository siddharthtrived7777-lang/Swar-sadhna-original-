/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutAndWhy from './components/AboutAndWhy';
import GurusSection from './components/GurusSection';
import CourseExplorer from './components/CourseExplorer';
import RecommendationQuiz from './components/RecommendationQuiz';
import InquiryForm from './components/InquiryForm';
import FAQ from './components/FAQ';
import LocationSection from './components/LocationSection';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';
import WhatsAppBubble from './components/WhatsAppBubble';

export default function App() {
  // Selected course to sync directly to the Admission query dropdown below
  const [preselectedCourse, setPreselectedCourse] = useState<string>('Vocal Music');
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  
  // Smooth scroll handler targeting component ID blocks
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Callback when student clicks "Enquire" or "Match Course" 
  const handleEnquireCourse = (courseTitle: string) => {
    setPreselectedCourse(courseTitle);
    handleScrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark selection:bg-brand-accent selection:text-brand-primary font-sans antialiased overflow-x-hidden">
      
      {/* Brand Navigation */}
      <Navbar 
        onNavigate={handleScrollToSection} 
      />

      {/* Main Container */}
      <main className="relative flex flex-col">
        
        {/* Hero Banner Intro Section */}
        <Hero 
          onExploreCourses={() => handleScrollToSection('courses')}
          onEnquireNow={() => handleEnquireCourse('General Inquiry')}
        />

        {/* Core Values, Team Pedagogies & Bento breakdown */}
        <AboutAndWhy />

        {/* Master Educators and Gurus presentation */}
        <GurusSection />

        {/* The active interactive syllabus registry */}
        <CourseExplorer onEnquire={handleEnquireCourse} />

        {/* Lightweight interactive path-finding recommendations */}
        <section className="py-24 px-6 md:px-12 bg-brand-bg border-t border-brand-border">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-[10px] font-mono tracking-widest text-brand-primary bg-brand-accent/50 px-2.5 py-1.5 rounded-full font-bold border border-brand-border inline-block uppercase">
                Diagnostic Matching Engine
              </span>
              <h3 className="text-2xl font-serif text-brand-dark font-bold">Find Your Musical Style</h3>
              <p className="text-xs text-brand-dark/70 font-sans">
                Take our 10-second quiz to instantly identify which custom lesson maps match your aspirations.
              </p>
            </div>

            <RecommendationQuiz onMatchCourse={handleEnquireCourse} />
          </div>
        </section>

        {/* Expandable detailed collateral FAQ Accordion */}
        <FAQ />

        {/* Direct coordinate grid, admission inquiries and sandbox lead dashboard */}
        <InquiryForm 
          preselectedCourse={preselectedCourse}
          setPreselectedCourse={setPreselectedCourse}
        />

        {/* Physical Studio Location grounding */}
        <LocationSection />

      </main>

      {/* Structured responsive footer containing credit tags */}
      <Footer 
        onNavigate={handleScrollToSection} 
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Secure Administrative Panel Modal */}
      <AdminPanel isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />

      {/* Floating interactive WhatsApp contact channel */}
      <WhatsAppBubble />

    </div>
  );
}
