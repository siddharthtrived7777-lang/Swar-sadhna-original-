/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Map, 
  ExternalLink, 
  Clock, 
  Compass, 
  Navigation
} from 'lucide-react';

export default function LocationSection() {
  const mapShareUrl = "https://share.google/WTXmp12gg267ufnkI";

  return (
    <section id="location" className="py-24 px-6 md:px-12 bg-white border-t border-brand-border">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Block */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-brand-accent/50 border border-brand-border px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest text-brand-primary font-bold uppercase">
            <Compass className="w-3.5 h-3.5 text-brand-primary animate-spin" style={{ animationDuration: '6s' }} />
            <span>Visit Our Studio</span>
          </div>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">Our Physical Academy</h3>
          <p className="text-xs text-brand-dark/70 font-sans leading-relaxed">
            Experience traditional Gurukul-style discipleship combined with modern acoustic facilities in the heart of Gujarat.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left panel: Coordinates & Studio Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-brand-bg/40 border border-brand-border p-6 md:p-8 rounded-3xl">
            
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-brand-primary">Official Address</span>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/60 border border-brand-border flex items-center justify-center text-brand-primary flex-shrink-0 mt-1">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-brand-dark">Centre Surendranagar</h4>
                    <p className="text-xs text-brand-dark/80 font-sans mt-1 leading-relaxed font-semibold">
                      Swar Sadhna Musical Classes,<br />
                      Opp. Town Hall Area, Main Bazaar Rd,<br />
                      Surendranagar, Gujarat 363001, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="space-y-2 border-t border-brand-border/60 pt-6">
                <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-brand-primary">Studio Riyaz Timings</span>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/60 border border-brand-border flex items-center justify-center text-brand-primary flex-shrink-0 mt-1">
                    <Clock className="w-4.5 h-4.5" />
                  </div>
                  <div className="text-xs text-brand-dark/80 font-sans font-semibold space-y-1">
                    <p className="font-serif text-sm font-bold text-brand-dark">Daily Riyaz &amp; Lectures</p>
                    <p className="flex justify-between gap-4 mt-1">
                      <span>Morning Session:</span>
                      <span className="text-brand-primary font-semibold">07:00 AM — 10:00 AM</span>
                    </p>
                    <p className="flex justify-between gap-4">
                      <span>Evening Batches:</span>
                      <span className="text-brand-primary font-semibold">04:00 PM — 08:30 PM</span>
                    </p>
                    <p className="text-[10px] text-brand-dark/50 italic font-mono pt-1">
                      * Closed on Sundays for traditional Riyaz rest
                    </p>
                  </div>
                </div>
              </div>


            </div>

            {/* Direct Directions Button */}
            <div className="pt-6 border-t border-brand-border/60">
              <a 
                href={mapShareUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-3.5 px-6 bg-brand-primary hover:bg-brand-dark text-white rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <Navigation className="w-4 h-4 text-white" />
                <span>Navigate on Google Maps</span>
              </a>
            </div>

          </div>

          {/* Right panel: Beautiful interactive-looking Maps Card leading to Maps Link */}
          <div className="lg:col-span-7 relative flex flex-col justify-between overflow-hidden border border-brand-border rounded-3xl bg-brand-light p-6 md:p-8 min-h-[350px] shadow-xs">
            
            {/* Background design elements resembling classical maps coordinates */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(#E8D6C3_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-accent/20 rounded-full blur-3xl z-0" />
            
            {/* Upper Content */}
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-2 text-brand-primary font-mono text-[9px] font-bold uppercase tracking-wider">
                <Map className="w-4 h-4" />
                <span>Live Location Registry Panel</span>
              </div>
              <h4 className="font-serif text-xl md:text-2xl font-bold text-brand-dark">Google Maps Grounding</h4>
              <p className="text-xs text-brand-dark/70 max-w-md font-sans leading-relaxed">
                Clicking the map explorer card below launches interactive satellite navigation, street alignments, and physical guidelines directly centered on our academy location coordinates.
              </p>
            </div>

            {/* Map Mockup Interactive Card */}
            <a 
              href={mapShareUrl}
              target="_blank"
              rel="noreferrer" 
              className="relative z-10 block group overflow-hidden border border-brand-border/80 rounded-2xl bg-white shadow-xs hover:shadow-md hover:border-brand-primary transition-all duration-300 transform hover:-translate-y-0.5 mt-6 cursor-pointer"
            >
              {/* Outer decorative header simulating maps widget toolbar */}
              <div className="bg-[#FAF5EE] border-b border-brand-border/60 px-4 py-2 flex justify-between items-center text-[10px] font-mono tracking-wide text-brand-dark/70">
                <span className="flex items-center gap-1.5 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
                  Swar Sadhna Campus
                </span>
                <span className="text-brand-primary/80 font-bold uppercase flex items-center gap-1">
                  GPS Active <ExternalLink className="w-3 h-3" />
                </span>
              </div>

              {/* Graphical illustration of a clean schematic map */}
              <div className="h-52 relative flex items-center justify-center p-6 bg-[#FCFAF6] overflow-hidden">
                
                {/* Simulated Map Layout Grid */}
                <div className="absolute inset-x-0 top-1/4 h-0.5 bg-[#F0E2D5]" />
                <div className="absolute inset-x-0 top-2/3 h-0.5 bg-[#F0E2D5]" />
                <div className="absolute left-1/3 inset-y-0 w-0.5 bg-[#F0E2D5]" />
                <div className="absolute left-3/4 inset-y-0 w-0.5 bg-[#F0E2D5]" />

                {/* Diagonal Simulated "Main Road" */}
                <div className="absolute inset-x-0 h-8 bg-brand-accent/55 rotate-12 -translate-y-8 flex items-center justify-center">
                  <span className="text-[8px] font-mono font-bold uppercase text-brand-primary/60 tracking-widest hidden md:inline">
                    Town Hall Main Bazaar Road
                  </span>
                </div>

                {/* Simulated landmarks */}
                <div className="absolute left-12 top-20 text-[9px] bg-white border border-brand-border px-2 py-1 rounded-md font-mono text-brand-dark/40 shadow-2xs font-semibold">
                  Town Hall Auditorium
                </div>
                <div className="absolute right-12 bottom-12 text-[9px] bg-white border border-brand-border px-2 py-1 rounded-md font-mono text-brand-dark/40 shadow-2xs font-semibold">
                  Victoria Jubilee Ground
                </div>

                {/* Pulsating PIN overlay */}
                <motion.div 
                  className="relative z-10 flex flex-col items-center gap-1 text-center"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center border border-brand-primary/40 animate-ping absolute -inset-0" style={{ animationDuration: '3s' }} />
                    <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white scale-110 shadow-xs relative z-10">
                      <MapPin className="w-5 h-5 fill-white/10" />
                    </div>
                  </div>
                  <div className="bg-brand-dark text-white text-[10px] font-serif font-bold py-1 px-3 rounded-lg shadow-sm whitespace-nowrap mt-1 border border-brand-primary/40">
                    Swar Sadhna Classes
                  </div>
                </motion.div>

              </div>

              {/* Action Invitation Footer */}
              <div className="p-4 bg-brand-light flex justify-between items-center font-sans">
                <div className="text-left">
                  <p className="text-xs font-bold text-brand-dark">Launch Satellite directions</p>
                  <p className="text-[10px] text-brand-dark/60">Opens external map coordinate registry page</p>
                </div>
                <div className="px-3 py-1.5 bg-brand-primary text-white text-[10px] tracking-wide font-bold uppercase rounded-full group-hover:bg-brand-dark transition-all flex items-center gap-1.5">
                  <span>Open Map</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
