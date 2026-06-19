/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, RotateCcw, Music, Check, Compass } from 'lucide-react';

interface RecommendationQuizProps {
  onMatchCourse: (courseTitle: string) => void;
}

export default function RecommendationQuiz({ onMatchCourse }: RecommendationQuizProps) {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<string | null>(null);

  const steps = [
    {
      id: 'goal',
      title: "What is your primary musical aspiration?",
      options: [
        { label: "I want to train my voice & sing eloquently", value: "vocals" },
        { label: "I want to master physical keys (Harmonium/Keyboard)", value: "instruments" },
        { label: "I want to perform devotional Bhajans & Light music", value: "devotional" }
      ]
    },
    {
      id: 'level',
      title: "What is your current background or level?",
      options: [
        { label: "Total beginner (Starting from standard fundamentals)", value: "beginner" },
        { label: "Self-taught (I know some basic chords/swaras)", value: "intermediate" },
        { label: "Advanced (Forming deep classic structures)", value: "advanced" }
      ]
    },
    {
      id: 'mode',
      title: "Which teaching layout fits your schedule?",
      options: [
        { label: "Physical studios (Surendranagar, Gujarat)", value: "offline" },
        { label: "Interactive online video classrooms", value: "online" },
        { label: "Any mode is perfectly fine", value: "any" }
      ]
    }
  ];

  const handleSelect = (key: string, value: string) => {
    const nextAnswers = { ...answers, [key]: value };
    setAnswers(nextAnswers);

    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      calculateResult(nextAnswers);
    }
  };

  const calculateResult = (allAnswers: Record<string, string>) => {
    const { goal, level, mode } = allAnswers;

    if (mode === 'online') {
      setResult('Online Music Classes');
      return;
    }

    if (goal === 'devotional') {
      setResult('Bhajans & Light Music');
      return;
    }

    if (goal === 'vocals') {
      if (level === 'advanced') {
        setResult('Classical Music');
      } else {
        setResult('Vocal Music');
      }
    } else {
      // Instruments path
      if (level === 'beginner') {
        setResult('Harmonium');
      } else {
        setResult('Keyboard');
      }
    }
    setStep(3); // Result step
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  return (
    <div id="path-finder" className="max-w-2xl mx-auto bg-brand-light border border-brand-border rounded-3xl p-6 md:p-10 shadow-xs relative overflow-hidden">
      {/* Decorative top row */}
      <div className="flex items-center gap-2 text-[10px] uppercase font-mono tracking-widest text-brand-primary font-bold mb-3">
        <Compass className="w-4 h-4 text-brand-primary" />
        <span>Swar Sadhna Path Finder Quiz</span>
      </div>

      <AnimatePresence mode="wait">
        {step < steps.length ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Step indicators */}
            <div className="flex items-center gap-1.5">
              {steps.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === step ? 'w-8 bg-brand-primary' : 'w-2 bg-brand-accent'
                  }`}
                />
              ))}
            </div>

            <div>
              <h4 className="font-serif text-lg md:text-xl font-bold text-brand-dark">
                {steps[step].title}
              </h4>
              <p className="text-[10px] font-mono uppercase tracking-wider text-brand-dark/50 mt-1.5">
                Question {step + 1} of 3
              </p>
            </div>

            <div className="space-y-3">
              {steps[step].options.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleSelect(steps[step].id, opt.value)}
                  className="w-full text-left bg-white hover:bg-brand-accent/30 border border-brand-border hover:border-brand-primary p-4.5 rounded-2xl text-xs md:text-sm text-brand-dark font-semibold font-sans transition-all flex items-center justify-between group"
                >
                  <span>{opt.label}</span>
                  <div className="w-6 h-6 rounded-full border border-brand-border flex items-center justify-center text-brand-dark/30 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center space-y-6 py-4"
          >
            <div className="w-14 h-14 bg-brand-accent/50 text-brand-primary border border-brand-border rounded-full flex items-center justify-center mx-auto shadow-xs">
              <Check className="w-6 h-6 font-bold" />
            </div>

            <div className="space-y-2">
              <span className="text-[9px] font-mono uppercase tracking-widest text-brand-primary bg-brand-accent/50 border border-brand-border px-3 py-1.5 rounded-full font-bold">
                Perfect Fit Identified
              </span>
              <p className="text-xs text-brand-dark/70 mt-3 font-sans">Based on your goals and location settings, your optimal class fits is:</p>
              <h4 className="font-serif text-2xl font-bold text-brand-primary italic">
                {result}
              </h4>
            </div>

            <p className="text-xs text-brand-dark/70 max-w-md mx-auto leading-relaxed font-sans">
              We specialize in custom pacing for this syllabus. You can secure a trial seat in this class immediately or receive coordinates from our tutors detailing schedules.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <button
                type="button"
                onClick={() => onMatchCourse(result || 'Vocal Music')}
                className="w-full sm:w-auto px-6 py-3 bg-brand-primary text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-dark shadow-xs flex items-center justify-center gap-2"
              >
                <Music className="w-4 h-4 text-white" />
                <span>Enquire about {result}</span>
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-[#FAF5EE] border border-brand-border text-brand-dark rounded-full text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Start Over</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
