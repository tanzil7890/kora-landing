'use client';

import { motion } from "framer-motion";
import { RightContentDisplayCAP } from "./RightContentDisplayCAP";
import { BookDemoDialog } from "./BookDemoDialog";
import { MobileBookDemoDialog } from "./MobileBookDemoDialog";
import { JoinWaitlistDialog } from "./JoinWaitlistDialog";
import { MobileJoinWaitlistDialog } from "./MobileJoinWaitlistDialog";
import { useState } from "react";
import { useDeviceType } from "@/hooks/useDeviceType";
/* import Logo from "./Logo"; */

export function AnimatedHeroCAP() {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const deviceType = useDeviceType();

  const handleDemoClick = () => {
    setIsBookDemoOpen(true);
  };

  return (
    <>
      {/* Version badge */}
      <div className="mb-1 px-2 sm:px-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center rounded-full bg-black/10 px-4 py-1.5 text-[14px] font-light text-gray-900 ring-1 ring-inset ring-gray-900/20">
            <svg className="mr-2 h-4 w-4 text-gray-900" viewBox="0 0 24 24" fill="none">
              <path d="M12 6V18M12 6L7 11M12 6L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            For our early adopters only! HR teams, recruiters, and hiring managers.
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center">
        {/* Main content section */}
        <div className="flex flex-col items-center w-full">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center max-w-8xl mx-auto pt-16 lg:pt-8"
          >
            {/* <Logo width={48} height={48} /> */}
            <h1 className="text-4xl sm:text-5xl lg:text-[90px] text-gray-900 tracking-[-0.04em] leading-[1.1] mb-6">
              Revolutionize hiring with{" "}
              <span className="text-[#f88e4c] bg-clip-text">
                Kora AI
              </span>
              . 
            </h1>
            <p className="text-xl sm:text-lg lg:text-2xl text-gray-600 mb-8 lg:mb-10 max-w-6xl mx-auto font-light leading-relaxed">
              Kora AI is an end-to-end hiring platform powered by artificial intelligence. Find top talent, conduct smart interviews, and make data-driven hiring decisions with our advanced AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleDemoClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-lg text-[15px] font-light bg-black text-white hover:bg-gray-900 h-11 px-7 transition-colors shadow-lg w-full sm:w-auto"
              >
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <path d="M5 15L12 8L19 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Book a Demo
              </motion.button>
              <motion.button
                onClick={() => setIsWaitlistOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-lg text-[15px] font-light bg-black/10 hover:bg-black/20 text-black border border-black/20 h-11 px-7 transition-colors w-full sm:w-auto"
              >
                Join Waitlist
              </motion.button>
            </div>
          </motion.div>
          
          {/* Right content - centered and proportionate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full max-w-8xl mx-auto mt-12"
          >
            <RightContentDisplayCAP />
          </motion.div>
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



