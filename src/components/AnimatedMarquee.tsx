'use client';

import { motion } from "framer-motion";

const marqueeContent = [
  {
    text: "Currently we are offering our product only to businesses",
    type: "text"
  },
  {
    text: "•",
    type: "dot"
  },
  {
    text: "Join the waitlist to get early access",
    type: "highlight"
  },
  {
    text: "•",
    type: "dot"
  }
];

export function AnimatedMarquee() {
  return (
    <div className="w-full overflow-hidden relative">
      {/* Background with dots - adjusted dot sizes for mobile */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black"
      >
        {/* Primary dot grid - reduced size on mobile */}
        <div className="absolute inset-0 [background-image:radial-gradient(#6D28D9_0.75px,transparent_0.75px)] sm:[background-image:radial-gradient(#6D28D9_1px,transparent_1px)] [background-size:16px_16px] sm:[background-size:24px_24px]" />
        
        {/* Secondary dot grid - reduced size on mobile */}
        <div className="absolute inset-0 [background-image:radial-gradient(#8B5CF6_0.25px,transparent_0.25px)] sm:[background-image:radial-gradient(#8B5CF6_0.5px,transparent_0.5px)] [background-size:12px_12px] sm:[background-size:16px_16px]" />
      </motion.div>

      {/* Marquee content - adjusted padding and text size */}
      <div className="relative z-10 py-2 sm:py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="flex space-x-2 sm:space-x-4 mx-2 sm:mx-4"
            >
              {marqueeContent.map((item, index) => (
                <motion.span
                  key={`${groupIndex}-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: (groupIndex * marqueeContent.length + index) * 0.1
                  }}
                  className={`text-sm sm:text-lg ${
                    item.type === "text" 
                      ? "text-white/90" 
                      : item.type === "highlight"
                      ? "text-blue-400 font-medium"
                      : "text-blue-400"
                  }`}
                >
                  {item.text}
                </motion.span>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 