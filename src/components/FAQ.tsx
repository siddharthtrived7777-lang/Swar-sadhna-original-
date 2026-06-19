/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

const FAQS: FAQItem[] = [
  {
    question: "What is the minimum age for admission?",
    answer: "Students of various age groups are welcome! We design and teach foundational courses appropriate for young children (ages 5 and up), teenagers studying school grades, as well as highly active, dedicated adults who wish to reignite their musical passions."
  },
  {
    question: "Are online classes available?",
    answer: "Yes, online classes are completely available. We teach live regular classes using optimized virtual platforms engineered to reduce common audio-video delay. This ensures you can receive real-time, high-fidelity instructions and ear corrections from anywhere."
  },
  {
    question: "Can beginners join?",
    answer: "Absolutely! Beginners are highly welcome. Over 80% of our student registry began with zero prior classical or keyboard knowledge. Our curriculum scales systematically starting from basic breath control (Swar Sadhna), identifying notes (Svaras), and progressing forward."
  },
  {
    question: "How can I inquire about fees?",
    answer: "Please contact us directly by phone, WhatsApp, or email. Since custom pricing varies based on your chosen course, mode preference (online or offline), and lesson recurrence frequency, our admissions office will provide you with a clear, complete fee guide."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 px-6 md:px-12 bg-white border-t border-brand-border">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header Title */}
        <div className="text-center space-y-3">
          <span className="text-[10px] font-mono tracking-widest text-[#5A5A40] bg-brand-accent/50 px-2.5 py-1.5 rounded-full font-bold border border-brand-border inline-block uppercase">Answers to Core Queries</span>
          <h3 className="text-2xl md:text-3xl font-serif text-brand-dark font-bold">Frequently Asked Questions</h3>
          <p className="text-xs md:text-sm text-brand-dark/70 max-w-lg mx-auto font-sans">
            Need quick info on student requirements or schedules? Browse standard answers below or contact our academy directly.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="border border-brand-border rounded-3xl overflow-hidden bg-brand-light transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 hover:bg-brand-accent/30 transition-colors select-none group cursor-pointer"
                >
                  <span className="font-serif font-bold text-brand-dark text-sm md:text-base group-hover:text-brand-primary transition-colors flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-primary" />
                    {faq.question}
                  </span>
                  <div>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-brand-primary font-bold" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-brand-dark/40" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-brand-dark/75 leading-relaxed font-sans border-t border-brand-border bg-white">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
