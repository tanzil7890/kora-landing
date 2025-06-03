'use client';

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
  illustration: ReactNode;
}

const steps: Step[] = [
  {
    id: "submit-profile",
    number: "STEP 1",
    title: "Submit Your Profile",
    description: "Upload your resume and preferences. Let our AI analyze your skills and career goals in seconds.",
    illustration: (
      <div className="relative w-24 h-24 mx-auto">
        <motion.svg
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full h-full"
          viewBox="0 0 100 100"
          fill="none"
        >
          {/* Document/Resume */}
          <motion.rect
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            x="25"
            y="15"
            width="40"
            height="55"
            rx="2"
            stroke="#374151"
            strokeWidth="2"
            fill="white"
          />
          {/* Header section */}
          <motion.rect
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            x="30"
            y="20"
            width="30"
            height="8"
            rx="1"
            stroke="#F59E0B"
            strokeWidth="1.5"
            fill="#FEF3C7"
          />
          {/* Profile lines */}
          <motion.line
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            x1="30"
            y1="35"
            x2="55"
            y2="35"
            stroke="#9CA3AF"
            strokeWidth="1.5"
          />
          <motion.line
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
            x1="30"
            y1="42"
            x2="60"
            y2="42"
            stroke="#9CA3AF"
            strokeWidth="1.5"
          />
          <motion.line
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.4 }}
            x1="30"
            y1="49"
            x2="50"
            y2="49"
            stroke="#9CA3AF"
            strokeWidth="1.5"
          />
          {/* Skills section */}
          <motion.circle
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.6 }}
            cx="35"
            cy="58"
            r="3"
            fill="#3B82F6"
          />
          <motion.circle
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.7 }}
            cx="45"
            cy="58"
            r="3"
            fill="#10B981"
          />
          <motion.circle
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.8 }}
            cx="55"
            cy="58"
            r="3"
            fill="#8B5CF6"
          />
          {/* Upload arrow */}
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 2 }}
            d="M70 45L75 40L80 45M75 40L75 55"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </div>
    )
  },
  {
    id: "ai-matching",
    number: "STEP 2", 
    title: "AI-Powered Matching",
    description: "Our AI conducts smart interviews and matches you with perfect roles based on skills, culture, and preferences.",
    illustration: (
      <div className="relative w-24 h-24 mx-auto">
        <motion.svg
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full h-full"
          viewBox="0 0 100 100"
          fill="none"
        >
          {/* Candidate profile */}
          <motion.circle
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            cx="30"
            cy="45"
            r="12"
            stroke="#374151"
            strokeWidth="2"
            fill="white"
          />
          <motion.circle
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
            cx="30"
            cy="40"
            r="4"
            fill="#3B82F6"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            d="M22 50C22 48 25 46 30 46C35 46 38 48 38 50"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Company profiles */}
          <motion.circle
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            cx="70"
            cy="30"
            r="8"
            stroke="#374151"
            strokeWidth="2"
            fill="white"
          />
          <motion.rect
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.2 }}
            x="66"
            y="26"
            width="8"
            height="8"
            rx="1"
            fill="#10B981"
          />
          
          <motion.circle
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.1 }}
            cx="70"
            cy="60"
            r="8"
            stroke="#374151"
            strokeWidth="2"
            fill="white"
          />
          <motion.rect
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.3 }}
            x="66"
            y="56"
            width="8"
            height="8"
            rx="1"
            fill="#8B5CF6"
          />

          {/* AI brain in center */}
          <motion.circle
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.4 }}
            cx="50"
            cy="45"
            r="8"
            fill="#F59E0B"
            stroke="#374151"
            strokeWidth="2"
          />
          <motion.text
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.6 }}
            x="50"
            y="49"
            textAnchor="middle"
            fontSize="8"
            fill="white"
            fontWeight="bold"
          >
            AI
          </motion.text>
          
          {/* Connection lines */}
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.8 }}
            d="M42 45L58 45"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeDasharray="3,3"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 2 }}
            d="M56 38L64 32"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeDasharray="3,3"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 2.2 }}
            d="M56 52L64 58"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeDasharray="3,3"
          />
        </motion.svg>
      </div>
    )
  },
  {
    id: "get-hired",
    number: "STEP 3",
    title: "Get Hired Fast",
    description: "Review personalized job matches and connect directly with companies that want your skills.",
    illustration: (
      <div className="relative w-24 h-24 mx-auto">
        <motion.svg
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full h-full"
          viewBox="0 0 100 100"
          fill="none"
        >
          {/* Hand pointing/selecting */}
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            d="M60 70C60 75 65 80 70 80C75 80 80 75 80 70V50C80 45 75 40 70 40C67 40 65 42 63 45L60 50V70Z"
            stroke="#374151"
            strokeWidth="2"
            fill="white"
          />
          {/* Pointing finger */}
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            d="M63 45L45 30"
            stroke="#374151"
            strokeWidth="3"
            strokeLinecap="round"
          />
          
          {/* Job opportunity card */}
          <motion.rect
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.8 }}
            x="20"
            y="15"
            width="24"
            height="20"
            rx="3"
            stroke="#10B981"
            strokeWidth="2"
            fill="#F0FDF4"
          />
          
          {/* Company logo placeholder */}
          <motion.circle
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 1 }}
            cx="26"
            cy="21"
            r="3"
            fill="#10B981"
          />
          
          {/* Job details lines */}
          <motion.line
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
            x1="32"
            y1="19"
            x2="40"
            y2="19"
            stroke="#374151"
            strokeWidth="1"
          />
          <motion.line
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.4 }}
            x1="32"
            y1="23"
            x2="38"
            y2="23"
            stroke="#9CA3AF"
            strokeWidth="1"
          />
          
          {/* Salary/match indicator */}
          <motion.rect
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.6 }}
            x="22"
            y="28"
            width="16"
            height="4"
            rx="2"
            fill="#F59E0B"
          />
          
          {/* Success checkmark */}
          <motion.circle
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.8 }}
            cx="85"
            cy="25"
            r="6"
            fill="#10B981"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 2 }}
            d="M82 25L84 27L88 23"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Additional job cards (background) */}
          <motion.rect
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.1 }}
            x="22"
            y="40"
            width="20"
            height="16"
            rx="2"
            fill="#E5E7EB"
          />
          <motion.rect
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.2 }}
            x="24"
            y="60"
            width="18"
            height="14"
            rx="2"
            fill="#E5E7EB"
          />
        </motion.svg>
      </div>
    )
  }
];

export function AnimatedFeatures() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Top Decorative Element */}
      <div className="absolute top-8 right-8 opacity-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
          whileInView={{ opacity: 0.1, scale: 1, rotate: -10 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-64 h-40 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-4 shadow-2xl transform rotate-12"
        >
          {/* Browser Header */}
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          {/* Browser Content */}
          <div className="space-y-2">
            <div className="h-2 bg-gray-600 rounded w-3/4"></div>
            <div className="h-2 bg-gray-700 rounded w-1/2"></div>
            <div className="h-2 bg-gray-600 rounded w-2/3"></div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        {/* Overview Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block text-sm font-bold text-gray-900 tracking-[0.2em] uppercase">
            OVERVIEW
          </span>
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight" style={{ fontFamily: "Nib Pro, sans-serif" }}>
            How It Works?
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Three simple steps. One powerful AI assistant.
          </p>
        </motion.div>

        {/* Steps Section */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16 lg:gap-8 relative">
            {/* Connector Lines - Desktop Only */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="absolute left-1/6 right-1/6 top-0 h-0.5 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400"
                style={{ transformOrigin: "left" }}
              />
            </div>

            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="text-center relative"
              >
                {/* Vertical Lines for Step 2 */}
                {index === 1 && (
                  <>
                    {/* Left vertical line */}
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.6, duration: 0.8 }}
                      className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-orange-400 via-yellow-400 to-orange-400 rounded-full"
                      style={{ transformOrigin: "top" }}
                    />
                    {/* Right vertical line */}
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.8, duration: 0.8 }}
                      className="absolute right-0 top-0 w-0.5 bg-gradient-to-b from-orange-400 via-yellow-400 to-orange-400 rounded-full"
                      style={{ transformOrigin: "top" }}
                    />
                  </>
                )}

                {/* Step Illustration */}
                <div className="mb-8">
                  {step.illustration}
                </div>

                {/* Step Number */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
                  className="mb-4"
                >
                  <span className="text-sm font-bold text-gray-500 tracking-[0.15em] uppercase">
                    {step.number}
                  </span>
                </motion.div>

                {/* Step Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.6, duration: 0.6 }}
                  className="text-2xl md:text-3xl font-medium text-gray-900 mb-4 leading-tight"
                >
                  {step.title}
                </motion.h3>

                {/* Step Description */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.8, duration: 0.6 }}
                  className="text-gray-600 leading-relaxed max-w-sm mx-auto"
                >
                  {step.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="absolute bottom-8 left-8 opacity-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
          whileInView={{ opacity: 0.1, scale: 1, rotate: 10 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="w-72 h-44 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl p-4 shadow-2xl transform -rotate-6"
        >
          {/* Mobile/Browser Interface */}
          <div className="flex items-center justify-between mb-3 px-2">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <div className="text-gray-500 text-xs font-mono">meet.google.com</div>
            </div>
            <div className="w-4 h-4 bg-gray-700 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            </div>
          </div>
          {/* Interface Content */}
          <div className="bg-gray-800 rounded-lg p-3 mb-2">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">JS</span>
              </div>
              <div className="text-gray-400 text-xs">Jahan Sheikh</div>
            </div>
            <div className="space-y-1">
              <div className="h-1 bg-gray-700 rounded w-3/4"></div>
              <div className="h-1 bg-gray-600 rounded w-1/2"></div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-8 h-2 bg-yellow-500 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}