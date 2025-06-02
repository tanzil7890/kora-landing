'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    id: '01',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-900">
        <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Context-Aware Search',
    description: 'Understand user intent and deliver more relevant results with our advanced AI algorithms.',
    caseStudy: {
      title: 'Case Study: Predictive Analytics for E-commerce Platform',
      description: 'Implementing advanced data collection and analysis for personalized shopping experiences.',
      stats: [
        { label: 'Running', value: '5', icon: '🔄' },
        { label: 'Completed', value: '28', icon: '✓' },
        { label: 'Failed', value: '2', icon: '✕' }
      ],
      collaborators: 4,
      timeAgo: 'Updated 3 days ago'
    }
  },
  {
    id: '02',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-900">
        <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Personalized Shopping Agents',
    description: 'AI-powered assistants that learn from user behavior to provide tailored recommendations.',
    caseStudy: {
      title: 'Case Study: Real-time Performance Monitoring System',
      description: 'Implementing automated deployment and real-time monitoring for a financial services platform.',
      stats: [
        { label: 'Running', value: '2', icon: '🔄' },
        { label: 'Completed', value: '32', icon: '✓' },
        { label: 'Failed', value: '0', icon: '✕' }
      ],
      collaborators: 3,
      timeAgo: 'Created 2 weeks ago'
    }
  },
  {
    id: '03',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-900">
        <path d="M8 6H16M8 12H16M8 18H12M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Insights and Reporting',
    description: 'Receive in-depth analytics and reports to track performance and gain visibility into all AI-driven processes.',
    caseStudy: {
      title: 'Case Study: AI-Driven Business Intelligence Dashboard',
      description: 'Creating comprehensive reporting system with actionable insights for retail chain.',
      stats: [
        { label: 'Running', value: '8', icon: '🔄' },
        { label: 'Completed', value: '45', icon: '✓' },
        { label: 'Failed', value: '3', icon: '✕' }
      ],
      collaborators: 5,
      timeAgo: 'Updated yesterday'
    }
  }
];

export function TechFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isClicking, setIsClicking] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const handleFeatureClick = (index: number) => {
    setAutoPlay(false); // Disable autoplay when user interacts
    setIsClicking(true);
    setActiveFeature(index);
    setTimeout(() => setIsClicking(false), 200);
  };

  return (
    <section className="py-24  relative">
      {/* Progress bar for auto-play */}
      {autoPlay && (
        <motion.div 
          className="absolute top-0 left-0 h-1 bg-[#8B5CF6]/20"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
      )}

      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left side - Features */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 font-light">
                Rapidly changing<br />tech landscape
              </h2>
              <button
                onClick={() => setAutoPlay(!autoPlay)}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  autoPlay ? 'bg-[#8B5CF6]/10 text-[#8B5CF6]' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                }`}
              >
                {autoPlay ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                )}
              </button>
            </div>

            <div className="space-y-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className={`flex gap-8 cursor-pointer group relative rounded-xl p-4 hover:bg-gray-50 transition-colors duration-200 ${
                    index === activeFeature ? 'bg-gray-50' : ''
                  }`}
                  onClick={() => handleFeatureClick(index)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Progress indicator */}
                  {index === activeFeature && (
                    <motion.div
                      layoutId="activeFeature"
                      className="absolute inset-0 border-2 border-[#8B5CF6]/20 rounded-xl overflow-hidden"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    >
                      {autoPlay && (
                        <motion.div
                          className="absolute bottom-0 left-0 h-1 bg-[#8B5CF6]"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        />
                      )}
                    </motion.div>
                  )}
                  
                  <div className="flex flex-col items-center relative">
                    <motion.div
                      className={`w-12 h-12 rounded-full border-2 ${
                        index === activeFeature 
                          ? 'border-[#8B5CF6] bg-[#8B5CF6]/5' 
                          : 'border-gray-200 group-hover:border-[#8B5CF6]/40'
                        } flex items-center justify-center transition-all duration-200`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        animate={index === activeFeature && isClicking ? { scale: 0.9 } : { scale: 1 }}
                      >
                        {feature.icon}
                      </motion.div>
                    </motion.div>
                    {index !== features.length - 1 && (
                      <div className={`w-0.5 h-full mt-4 ${
                        index === activeFeature 
                          ? 'bg-[#8B5CF6]' 
                          : 'bg-gray-200 group-hover:bg-[#8B5CF6]/40'
                        } transition-colors duration-200`} 
                      />
                    )}
                  </div>

                  <div className="relative flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <motion.span
                        animate={index === activeFeature ? { 
                          color: '#8B5CF6',
                          scale: 1.05
                        } : { 
                          color: '#9CA3AF',
                          scale: 1
                        }}
                        className="text-xl font-medium"
                      >
                        {feature.id}
                      </motion.span>
                      <h3 className={`text-xl font-medium ${
                        index === activeFeature 
                          ? 'text-gray-900' 
                          : 'text-gray-600 group-hover:text-gray-900'
                        } transition-colors duration-200`}
                      >
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Interactive arrow */}
                    <motion.div
                      className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ x: index === activeFeature ? 0 : 10 }}
                      whileHover={{ x: 10 }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={index === activeFeature ? '#8B5CF6' : '#9CA3AF'} strokeWidth="2">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-8 gap-2">
              {features.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === activeFeature ? 'bg-[#8B5CF6]' : 'bg-gray-200 hover:bg-[#8B5CF6]/40'
                  }`}
                  onClick={() => handleFeatureClick(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>

          {/* Right side - Case Study */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 rounded-3xl p-8 shadow-sm border border-gray-100"
              >
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-8"
                >
                  <h3 className="text-2xl text-gray-900 font-medium mb-4">
                    {features[activeFeature].caseStudy.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {features[activeFeature].caseStudy.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[...Array(features[activeFeature].caseStudy.collaborators)].map((_, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-[#8B5CF6]/10 to-[#8B5CF6]/20"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{features[activeFeature].caseStudy.collaborators} Collaborators</span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{features[activeFeature].caseStudy.timeAgo}</span>
                  </div>
                </motion.div>

                <div className="grid grid-cols-3 gap-4">
                  {features[activeFeature].caseStudy.stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm border border-gray-100"
                    >
                      <motion.div 
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", bounce: 0.5, delay: 0.5 + index * 0.1 }}
                        className="text-3xl font-medium text-gray-900 mb-2"
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
} 