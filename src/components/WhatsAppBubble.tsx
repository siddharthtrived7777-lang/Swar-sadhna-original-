/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppBubble() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Delay slightly to trigger load bounce transition gracefully
    const timer = setTimeout(() => setIsMounted(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = "https://wa.me/919558183973?text=Hello!%20I%20am%20interested%20in%20joining%20Swar%20Sadhna%20Musical%20Classes.%20Please%20share%20more%20details.";

  return (
    <div className="fixed bottom-[30px] right-[25px] z-[9999] flex flex-col items-center">
      
      {/* Tooltip above the bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-[75px] right-0 bg-[#2C1E15] text-[#FFFDFB] text-xs font-sans font-semibold px-4 py-2 rounded-xl shadow-lg whitespace-nowrap z-[10000] border border-brand-primary/20 flex items-center gap-1.5"
          >
            <span>Chat with us on WhatsApp</span>
            {/* Small triangle tip representing speech tail */}
            <div className="absolute top-full right-6 w-3 h-3 bg-[#2C1E15] rotate-45 transform -translate-y-1.5 border-r border-b border-brand-primary/10" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp Floating Button */}
      <AnimatePresence>
        {isMounted && (
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with Swar Sadhna on WhatsApp"
            initial={{ scale: 0, opacity: 0, y: 100 }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              y: 0
            }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 15,
              duration: 1
            }}
            whileHover={{ scale: 1.1 }}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={() => setShowTooltip(false)}
            className="relative w-[60px] h-[60px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl cursor-pointer hover:shadow-2xl transition-shadow select-none"
          >
            {/* Pulsating back ring animation runs every 3 seconds to grab attention */}
            <motion.div
              className="absolute inset-0 rounded-full bg-[#25D366]/40 -z-10"
              animate={{
                scale: [1, 1.4, 1.6, 1],
                opacity: [0.6, 0.4, 0, 0.6]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* A second inner high-frequency subtle pulse for warmth */}
            <motion.div
              className="absolute inset-0 rounded-full bg-[#25D366]/30 -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 0, 0.8]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* WhatsApp White style message circle icon */}
            <MessageCircle className="w-8 h-8 text-white fill-white/20 stroke-[2]" />
          </motion.a>
        )}
      </AnimatePresence>

    </div>
  );
}
