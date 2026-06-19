/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  CheckCircle2, 
  Trash2, 
  Eye, 
  AlertCircle,
  Clock,
  Send,
  ExternalLink
} from 'lucide-react';
import { Inquiry } from '../types';

interface InquiryFormProps {
  preselectedCourse: string;
  setPreselectedCourse: (course: string) => void;
}

export default function InquiryForm({ preselectedCourse, setPreselectedCourse }: InquiryFormProps) {
  // Contacts
  const currentEmail = 'swarsadhnamusic@gmail.com';
  const phone1 = '9558183973';
  const phone2 = '8200049918';
  
  // States
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [mode, setMode] = useState<'online' | 'offline' | 'any'>('any');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [success, setSuccess] = useState(false);
  const [errorText, setErrorText] = useState<string | null>(null);
  const [leads, setLeads] = useState<Inquiry[]>([]);

  // Load inquiries from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('swarsadhna_inquiries');
      if (saved) {
        setLeads(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Local leads retrieval error", e);
    }
  }, []);

  // Sync back to localStorage
  const saveLeadsToStorage = (updatedLeads: Inquiry[]) => {
    setLeads(updatedLeads);
    try {
      localStorage.setItem('swarsadhna_inquiries', JSON.stringify(updatedLeads));
    } catch (e) {
      console.error("Storage write error", e);
    }
  };

  // Submit Inquiry
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorText(null);

    if (!fullName.trim()) {
      setErrorText("Please state your Full Name.");
      return;
    }
    if (!phone.match(/^[0-9+\s-]{8,15}$/)) {
      setErrorText("Please fill in a valid WhatsApp/Phone contact number.");
      return;
    }

    const newInquiry: Inquiry = {
      id: 'l_' + Date.now(),
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim() || 'No Email Added',
      course: preselectedCourse,
      mode: mode,
      additionalInfo: additionalInfo.trim() || 'None',
      timestamp: new Date().toLocaleString(),
      status: 'new'
    };

    const nextLeads = [newInquiry, ...leads];
    saveLeadsToStorage(nextLeads);
    setSuccess(true);
  };

  const handleResetForm = () => {
    setFullName('');
    setPhone('');
    setEmail('');
    setMode('any');
    setAdditionalInfo('');
    setSuccess(false);
  };

  // Generate Direct WhatsApp redirect link filled with customer criteria
  const getWhatsAppLink = (isSupport = false) => {
    const num = phone1; // Use Primary Support phone
    let msg = '';
    
    if (isSupport) {
      msg = `Hi Swar Sadhna, I have general questions regarding admission schedules, fee breakdown, and online timers. Please guide me.`;
    } else {
      msg = `Hi Swar Sadhna! My name is ${fullName || '[Name]'}. I am interested in joining your "${preselectedCourse}" classes in "${mode === 'any' ? 'Online/Offline' : mode}" mode. Contact: ${phone}. Raw details: ${additionalInfo || 'None'}. Please schedule trial lesson.`;
    }
    return `https://wa.me/91${num}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="contact" className="bg-brand-bg border-t border-brand-border relative overflow-hidden font-sans">
      
      {/* Full width smooth moving marquee/ticker text above enrollment form */}
      <div className="w-full bg-brand-primary text-white py-3.5 border-b border-brand-border/10 overflow-hidden select-none relative z-20 shadow-xs">
        <div className="flex overflow-hidden w-full">
          <div className="animate-marquee-ltr flex shrink-0 whitespace-nowrap items-center gap-12 text-[13px] md:text-[14px] font-bold tracking-wider uppercase font-sans">
            {Array(4).fill([
              "Batch Timings: Monday to Thursday",
              "Class Hours: 5:00 PM to 7:00 PM",
              "Duration: 2 Hours Per Session",
              "Online & Offline Both Available",
              "Admissions Open for 2026 Batch",
              "Call us: +91 9558183973"
            ]).flat().map((item, idx) => (
              <span key={`ticker-1-${idx}`} className="flex items-center gap-4">
                <span className="text-white/80 font-semibold">♪</span>
                <span className="text-white">{item}</span>
              </span>
            ))}
          </div>
          <div className="animate-marquee-ltr flex shrink-0 whitespace-nowrap items-center gap-12 text-[13px] md:text-[14px] font-bold tracking-wider uppercase font-sans" aria-hidden="true">
            {Array(4).fill([
              "Batch Timings: Monday to Thursday",
              "Class Hours: 5:00 PM to 7:00 PM",
              "Duration: 2 Hours Per Session",
              "Online & Offline Both Available",
              "Admissions Open for 2026 Batch",
              "Call us: +91 9558183973"
            ]).flat().map((item, idx) => (
              <span key={`ticker-2-${idx}`} className="flex items-center gap-4">
                <span className="text-white/80 font-semibold">♪</span>
                <span className="text-white">{item}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        
        {/* Core Description Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Block: Direct Contact Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-brand-light border border-brand-border p-8 rounded-3xl shadow-xs">
            
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-brand-primary font-bold uppercase block mb-1">STATIONED REGISTERED OFFICE</span>
                <h4 className="font-serif text-2xl font-bold text-brand-dark">Contact Us Directly</h4>
                <p className="text-xs text-brand-dark/70 mt-1 font-sans">
                  Whether you are seeking custom pricing coordinates or exploring school criteria, feel free to call our administrators or send details.
                </p>
              </div>

              {/* Vertical icon metrics */}
              <div className="space-y-5">
                
                {/* Phones */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/40 border border-brand-border flex items-center justify-center text-brand-primary flex-shrink-0 mt-1">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase font-mono tracking-wider text-brand-primary font-bold">Phone / WhatsApp</p>
                    <div className="space-y-1 mt-1 font-sans">
                      <a href={`tel:${phone1}`} className="block text-sm font-bold text-brand-dark hover:text-brand-primary">
                        +91 {phone1} <span className="text-xs font-normal text-brand-dark/60 font-medium">(Primary Admission)</span>
                      </a>
                      <a href={`tel:${phone2}`} className="block text-sm font-bold text-brand-dark hover:text-brand-primary">
                        +91 {phone2} <span className="text-xs font-normal text-brand-dark/60 font-medium">(Admission Support)</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4" id="contact-email">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/40 border border-brand-border flex items-center justify-center text-brand-primary flex-shrink-0 mt-1">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <p className="text-[9px] uppercase font-mono tracking-wider text-brand-primary font-bold">Official E-mail</p>
                    </div>
                    <a href={`mailto:${currentEmail}`} className="block text-sm font-semibold text-brand-dark hover:text-brand-primary truncate mt-1 font-sans">
                      {currentEmail}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/40 border border-brand-border flex items-center justify-center text-brand-primary flex-shrink-0 mt-1">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase font-mono tracking-wider text-brand-primary font-bold">Studio Address</p>
                    <p className="text-sm font-medium text-brand-dark mt-1 leading-relaxed font-sans">
                      Swar Sadhna Musical Classes,<br />
                      Surendranagar, Gujarat, India
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick action button for direct WhatsApp chat */}
            <div className="pt-5 border-t border-brand-border">
              <span className="text-xs text-brand-dark/70 block mb-3 leading-relaxed font-sans">
                Rather skip the form? Connect directly with a teacher instantly:
              </span>
              <a 
                href={getWhatsAppLink(true)} 
                target="_blank" 
                rel="noreferrer referrer" 
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-[10px] uppercase tracking-widest font-bold font-sans shadow-xs transition-colors"
                id="quick-whatsapp-cta"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Block: Dynamic Enquiry Form */}
          <div className="lg:col-span-7 bg-white border border-brand-border p-8 rounded-3xl shadow-xs relative">
            <span className="absolute top-0 right-8 transform translate-y-[-14px] bg-brand-primary text-white text-[9px] uppercase font-mono tracking-widest font-bold py-1.5 px-4 rounded-full shadow-xs">
              Direct Intake Portal
            </span>

            <AnimatePresence mode="wait">
              {!success ? (
                <motion.form 
                  key="inquiry-form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div>
                    <h4 className="font-serif text-xl font-bold text-brand-dark">Enroll or Send an Enquiry</h4>
                    <p className="text-xs text-brand-dark/70 mt-0.5">We will evaluate your coordinates and get back to you within 24 hours.</p>
                  </div>

                  {errorText && (
                    <div className="bg-rose-50 border border-rose-200 rounded-2xl p-3.5 text-xs text-rose-800 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorText}</span>
                    </div>
                  )}

                  {/* Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono tracking-wider font-bold text-brand-dark/60 uppercase block">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Siddharth Trivedi" 
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-brand-light hover:bg-[#FAF5EE] border border-brand-border focus:border-brand-primary rounded-xl p-3.5 text-xs md:text-sm text-brand-dark outline-none transition-all font-semibold"
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono tracking-wider font-bold text-brand-dark/60 uppercase block">Phone / WhatsApp Number *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="e.g. 9558183973" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-brand-light hover:bg-[#FAF5EE] border border-brand-border focus:border-brand-primary rounded-xl p-3.5 text-xs md:text-sm text-brand-dark outline-none transition-all font-semibold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono tracking-wider font-bold text-brand-dark/60 uppercase block">Email Address (Optional)</label>
                      <input 
                        type="email" 
                        placeholder="yourname@gmail.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-brand-light hover:bg-[#FAF5EE] border border-brand-border focus:border-brand-primary rounded-xl p-3.5 text-xs md:text-sm text-brand-dark outline-none transition-all font-semibold"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-mono tracking-wider font-bold text-brand-dark/60 uppercase block">Intended Course *</label>
                      <select
                        value={preselectedCourse}
                        onChange={(e) => setPreselectedCourse(e.target.value)}
                        className="w-full bg-brand-light hover:bg-[#FAF5EE] border border-brand-border focus:border-brand-primary rounded-xl p-3.5 text-xs md:text-sm text-brand-dark outline-none font-semibold cursor-pointer"
                      >
                        <option value="Vocal Music">Vocal Music</option>
                        <option value="Classical Music">Classical Music</option>
                        <option value="Harmonium">Harmonium</option>
                        <option value="Keyboard">Keyboard</option>
                        <option value="Bhajans & Light Music">Bhajans &amp; Light Music</option>
                        <option value="Online Music Classes">Online Music Classes</option>
                        <option value="General Inquiry">General Inquiry / Fee Query</option>
                      </select>
                    </div>
                  </div>

                  {/* Mode preference and Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
                    <div className="sm:col-span-1">
                      <label className="text-[9px] font-mono tracking-wider font-bold text-brand-dark/60 uppercase block mb-1">Learning Mode</label>
                      <div className="flex gap-1.5">
                        {(['offline', 'online', 'any'] as const).map((m) => (
                          <button
                            key={m}
                            type="button"
                            onClick={() => setMode(m)}
                            className={`flex-1 py-2 rounded-full text-[9px] font-bold uppercase tracking-wider transition-all border ${
                              mode === m
                                ? 'bg-brand-primary border-brand-primary text-white'
                                : 'bg-brand-light hover:bg-[#FAF5EE] text-brand-dark border-brand-border'
                            }`}
                          >
                            {m}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="sm:col-span-3 space-y-1">
                      <label className="text-[9px] font-mono tracking-wider font-bold text-brand-dark/60 uppercase block">Additional Info (Timings, Prior Exp)</label>
                      <input 
                        type="text" 
                        placeholder="e.g., I learn on weekends / No prior training" 
                        value={additionalInfo}
                        onChange={(e) => setAdditionalInfo(e.target.value)}
                        className="w-full bg-brand-light hover:bg-[#FAF5EE] border border-brand-border focus:border-brand-primary rounded-xl p-3.5 text-xs md:text-sm text-brand-dark outline-none transition-all font-semibold"
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 px-6 py-4 bg-brand-primary text-white hover:bg-brand-dark rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer transition-all"
                    >
                      <Send className="w-3.5 h-3.5 text-white animate-pulse" />
                      <span>Submit Register Intake</span>
                    </button>
                  </div>

                </motion.form>
              ) : (
                <motion.div 
                  key="inquiry-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center py-6"
                >
                  <div className="w-14 h-14 bg-brand-accent/55 text-brand-primary border border-brand-border rounded-full flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-6 h-6 font-bold" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-brand-primary bg-brand-accent/50 border border-brand-border px-3 py-1.5 rounded-full font-bold">
                      Submission Completed Locally
                    </span>
                    <h4 className="font-serif text-xl font-bold text-brand-dark">Swar Sadhna Registered</h4>
                    <p className="text-xs text-brand-dark/70 max-w-md mx-auto leading-relaxed font-sans">
                      Thank you, <strong>{fullName}</strong>. Your choice for <strong>{preselectedCourse} ({mode})</strong> has been logged in our demo queue database.
                    </p>
                  </div>

                  {/* WhatsApp Pre-fill option */}
                  <div className="bg-[#FAF5EE] border border-brand-border rounded-3xl p-5 max-w-md mx-auto">
                    <p className="text-xs text-brand-dark font-bold mb-1 flex items-center justify-center gap-1.5">
                      ✨ Want to double your callbacks?
                    </p>
                    <p className="text-[11px] text-brand-dark/70 mb-4 font-sans leading-relaxed">
                      Send your pre-filled inquiry directly to Swar Sadhna Admissions via WhatsApp in 1 click!
                    </p>
                    <a 
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noreferrer referrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-[10px] uppercase tracking-widest font-bold font-sans shadow-xs transition-colors"
                    >
                      <span>Forward Pre-filled WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="text-xs text-brand-primary hover:text-brand-dark underline font-bold"
                    >
                      Submit a new inquiry
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
