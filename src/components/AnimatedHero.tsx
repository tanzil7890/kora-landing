'use client';

import { motion } from "framer-motion";
import { RightContentDisplay } from "./RightContentDisplay";
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
      <div className="mb-1 px-2 sm:px-0  ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" "
        >
          <div className="inline-flex items-center rounded-full bg-black/10 px-4 py-1.5 text-[14px] font-light text-gray-900 ring-1 ring-inset ring-gray-900/20">
            <svg className="mr-2 h-4 w-4 text-gray-900" viewBox="0 0 24 24" fill="none">
              <path d="M12 6V18M12 6L7 11M12 6L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Beta release, check it out! 
          </div>
        </motion.div>
      </div>
{/*  px-4 sm:px-6 lg:px-8 */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0 pt-16 lg:pt-0"
        >
          {/* <Logo width={48} height={48} /> */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-gray-900 tracking-[-0.04em] leading-[1.1] mb-6" style={{ fontFamily: "Nib Pro, sans-serif" }}>
          Match Top Talent to Perfect Roles in Hours, {" "}
            <span className="text-[#8B5CF6] bg-clip-text">
            Not Weeks
            </span>
            . 
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 lg:mb-10 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
          Autonomous interviews + intelligent matching that transforms candidate data into actionable insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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

        {/* Right content - Orbital Sphere */}
        {/* <div className="w-full lg:w-auto mt-12 lg:mt-0"> */}
          <RightContentDisplay />
        {/* </div> */}
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



