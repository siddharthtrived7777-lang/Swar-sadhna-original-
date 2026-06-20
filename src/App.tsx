/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GurusSection from './components/GurusSection';
import CourseExplorer from './components/CourseExplorer';
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

        {/* Master Educators and Gurus presentation */}
        <GurusSection />

        {/* The active interactive syllabus registry */}
        <CourseExplorer onEnquire={handleEnquireCourse} />

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
