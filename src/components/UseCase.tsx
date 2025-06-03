'use client';

import { motion } from "framer-motion";
import { useRef } from "react";

export function UseCase() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="py-24 bg-white" id="use-case">
      <div className="container mx-auto px-4">
        {/* Version Badge */}
        <div className="mt-8 mb-2 px-2 sm:px-0 mb-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center rounded-full bg-[#f7f7f7] px-5 py-2 text-[13px] font-medium text-[#101826] border border-[#f88e4c]/20 shadow-sm">
              <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#f88e4c]">
                <svg className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l7-3 7 3z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[#101826]">Use Cases</span>
            </div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8" style={{ fontFamily: "Nib Pro, sans-serif" }}>
            End-to-end hiring platform for every industry
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Kora is an end-to-end research platform. Our customers replace surveys, focus groups, and in-depth interviews with Kora&apos;s AI-moderated interviews across all industries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Tech Startups */}
            <motion.div 
              className="h-32 flex flex-col justify-start items-start p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">💻</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Nib Pro, sans-serif" }}>
                  Tech Startups
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                High volume, limited HR bandwidth → Automated screening frees your engineers to build.
              </p>
            </motion.div>

            {/* Global Enterprises */}
            <motion.div 
              className="h-32 flex flex-col justify-start items-start p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🏢</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Nib Pro, sans-serif" }}>
                  Global Enterprises
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Complex compliance across borders → Built-in payroll/legal workflows eliminate headaches.
              </p>
            </motion.div>

            {/* Remote Teams */}
            <motion.div 
              className="h-32 flex flex-col justify-start items-start p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🌍</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Nib Pro, sans-serif" }}>
                  Remote Teams
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Culture misfits in remote hires → Deeper behavioral insights before you extend offers.
              </p>
            </motion.div>

            {/* Healthcare & Life Sciences */}
            <motion.div 
              className="h-32 flex flex-col justify-start items-start p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🏥</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Nib Pro, sans-serif" }}>
                  Healthcare & Life Sciences
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Critical skill validation required → AI-powered assessments ensure patient safety standards.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Image Section */}
        {/* <div className="flex justify-center overflow-hidden">
          <motion.div
            style={{ x }}
            className="w-8xl"
          >
            <Image
              src="/just_some.png"
              alt="Kora Platform Design"
              width={1536}
              height={800}
              className="w-full rounded-[20px] shadow-lg"
              priority
            />
          </motion.div>
        </div> */}
      </div>
    </section>
  );
}