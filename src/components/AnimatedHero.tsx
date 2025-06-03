'use client';

import { motion } from "framer-motion";
import { RightContentDisplay3 } from "./RightContentDisplay3";
import { BookDemoDialog } from "./BookDemoDialog";
import { MobileBookDemoDialog } from "./MobileBookDemoDialog";
import { JoinWaitlistDialog } from "./JoinWaitlistDialog";
import { MobileJoinWaitlistDialog } from "./MobileJoinWaitlistDialog";
import { useState } from "react";
import { useDeviceType } from "@/hooks/useDeviceType";
/* import Logo from "./Logo"; */

export function AnimatedHero() {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const deviceType = useDeviceType();

  const handleDemoClick = () => {
    setIsBookDemoOpen(true);
  };

  return (
    <>
      {/* Version badge */}
      <div className="mt-8 mb-2 px-2 sm:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center rounded-full bg-[#f7f7f7] px-5 py-2 text-[13px] font-medium text-[#101826] border border-[#f88e4c]/20 shadow-sm">
            <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#f88e4c]">
              <svg className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M7 13l3 3 7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[#101826]">More than 500+ opportunities available</span>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col items-center gap-16">
        {/* Left content - now centered */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center max-w-6xl mx-auto pt-8"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-8xl text-gray-900 tracking-[-0.04em] leading-[1.1] mb-6" style={{ fontFamily: "Nib Pro, sans-serif" }}>
          Match Top Talent to Perfect Roles in Hours, {" "}
            <span className="text-[#f88e4c] bg-clip-text font-semibold">
            Not Weeks
            </span>
            . 
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 lg:mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Autonomous interviews + intelligent matching that transforms candidate data into actionable insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={handleDemoClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-lg text-[15px] font-light bg-[#f88e4c] text-white hover:bg-gray-900 h-11 px-7 transition-colors shadow-lg w-full sm:w-auto"
            >
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path d="M5 15L12 8L19 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Apply to Jobs
            </motion.button>
            <motion.button
              onClick={() => setIsWaitlistOpen(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-lg text-[15px] font-light bg-black/10 hover:bg-black/20 text-black border border-black/20 h-11 px-7 transition-colors w-full sm:w-auto"
            >
              Start Hiring
            </motion.button>
          </div>
        </motion.div>
        
        {/* Right content - now centered below */}
        <div className="w-full flex justify-center px-4">
          <div className="w-full max-w-7xl">
            <RightContentDisplay3 />
          </div>
        </div>
      </div>

      {/* Dialogs */}
      {deviceType === 'mobile' ? (
        <>
          <MobileBookDemoDialog 
            isOpen={isBookDemoOpen}
            onClose={() => setIsBookDemoOpen(false)}
          />
          <MobileJoinWaitlistDialog 
            isOpen={isWaitlistOpen}
            onClose={() => setIsWaitlistOpen(false)}
          />
        </>
      ) : (
        <>
          <BookDemoDialog 
            isOpen={isBookDemoOpen}
            onClose={() => setIsBookDemoOpen(false)}
          />
          <JoinWaitlistDialog 
            isOpen={isWaitlistOpen}
            onClose={() => setIsWaitlistOpen(false)}
          />
        </>
      )}
    </>
  );
}



