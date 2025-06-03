'use client';

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const scenes = [
  {
    id: 'candidate-selection',
    title: 'Candidate Selection',
    duration: 4000
  },
  {
    id: 'meeting-booking',
    title: 'One-Click Meeting Booking',
    duration: 3000
  },
  {
    id: 'video-interview',
    title: 'AI-Powered Video Interview',
    duration: 5000
  },
  {
    id: 'analytics',
    title: 'Real-time Analytics Generation',
    duration: 4000
  },
  {
    id: 'company-matching',
    title: 'Perfect Company Matching',
    duration: 3500
  }
];

export function RightContentDisplay3() {
  const [currentScene, setCurrentScene] = useState(0);
  const [analyticsData, setAnalyticsData] = useState({
    behavioralScore: 0,
    technicalScore: 0,
    communicationScore: 0
  });
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullSearchText = "Senior Frontend Developer, React, TypeScript, 5+ years experience...";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % scenes.length);
    }, scenes[currentScene]?.duration || 4000);

    return () => clearInterval(timer);
  }, [currentScene]);

  useEffect(() => {
    if (scenes[currentScene]?.id === 'video-interview') {
      // Simulate analytics generation during interview
      const analyticsTimer = setInterval(() => {
        setAnalyticsData(prev => ({
          behavioralScore: Math.min(95, prev.behavioralScore + Math.random() * 10),
          technicalScore: Math.min(92, prev.technicalScore + Math.random() * 8),
          communicationScore: Math.min(88, prev.communicationScore + Math.random() * 12)
        }));
      }, 300);

      setTimeout(() => {
        clearInterval(analyticsTimer);
      }, 4500);

      return () => clearInterval(analyticsTimer);
    }
  }, [currentScene]);

  // Typewriter effect for search bar
  useEffect(() => {
    if (scenes[currentScene]?.id === 'candidate-selection') {
      setTypedText('');
      let index = 0;
      
      const typeInterval = setInterval(() => {
        if (index < fullSearchText.length) {
          setTypedText(fullSearchText.slice(0, index + 1));
          index++;
    } else {
          clearInterval(typeInterval);
        }
      }, 50); // 50ms per character for realistic typing speed

      return () => clearInterval(typeInterval);
    }
  }, [currentScene]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const renderCandidateSelection = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative space-y-8 overflow-hidden"
    >
      {/* Subtle Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({length: 8}).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-[#f88e4c]/15 rounded-full"
            animate={{
              x: [0, 60, 0],
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${15 + (i * 10)}%`,
              top: `${25 + (i * 6)}%`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <h3 className="text-3xl font-bold bg-gradient-to-r from-[#101826] via-[#f88e4c] to-[#101826] bg-clip-text text-transparent mb-4">
            AI-Powered Talent Discovery
          </h3>
          <p className="text-lg text-gray-600 font-light">Intelligent candidate matching in real-time</p>
        </motion.div>
        
        {/* Terminal-style Search Bar */}
        <motion.div
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="relative mb-8"
        >
          <div className="relative bg-black rounded-lg p-4 border border-[#f88e4c]/30 shadow-lg font-mono">
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-400 text-xs">kora-ai-search</div>
            </div>
            
            {/* Terminal Content */}
            <div className="text-white text-sm">
              <div className="flex items-center">
                <span className="text-green-400 mr-2">$</span>
                <span className="text-blue-400 mr-2">search</span>
                <span className="text-gray-300">--query</span>
                <span className="text-yellow-400 ml-2">&quot;</span>
                <span className="text-white">
                  {typedText}
                  <span className={`inline-block w-2 h-5 bg-white ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
                    |
                  </span>
                </span>
              </div>
              
              {/* Search Results Indicator */}
              {typedText.length > 20 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-3 text-green-400 text-xs"
                >
                  <div className="flex items-center space-x-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-3 h-3 border border-green-400 border-t-transparent rounded-full"
                    />
                    <span>Searching database... Found 847 candidates</span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Refined Candidate Grid */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { 
              name: "Sarah Chen", 
              role: "Senior Frontend Developer", 
              score: "98%", 
              skills: ["React", "TypeScript", "Next.js"],
              experience: "6 years",
              location: "San Francisco, CA",
              avatar: "bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500",
              status: "Available"
            },
            { 
              name: "Marcus Johnson", 
              role: "Full Stack Engineer", 
              score: "96%", 
              skills: ["Node.js", "Python", "AWS"],
              experience: "5 years",
              location: "New York, NY",
              avatar: "bg-gradient-to-br from-green-400 via-teal-500 to-blue-500",
              status: "Interviewing"
            },
            { 
              name: "Elena Rodriguez", 
              role: "UI/UX Designer", 
              score: "94%", 
              skills: ["Figma", "Design Systems", "User Research"],
              experience: "4 years",
              location: "Austin, TX",
              avatar: "bg-gradient-to-br from-pink-400 via-rose-500 to-red-500",
              status: "Available"
            },
            { 
              name: "David Kim", 
              role: "Backend Developer", 
              score: "92%", 
              skills: ["Java", "Spring", "Microservices"],
              experience: "7 years",
              location: "Seattle, WA",
              avatar: "bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500",
              status: "Available"
            }
          ].map((candidate, index) => (
            <motion.div
              key={candidate.name}
              initial={{ 
                y: 20, 
                opacity: 0
              }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                delay: 0.4 + index * 0.1, 
                duration: 0.6,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className="relative group"
            >
              {/* Simplified Card Background */}
              <div className="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-lg group-hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="flex items-start space-x-4">
                  {/* Simplified Avatar */}
                  <motion.div 
                    className={`relative w-16 h-16 ${candidate.avatar} rounded-2xl flex items-center justify-center shadow-md`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-white font-bold text-lg">
                      {candidate.name.split(' ').map(n => n[0]).join('')}
                    </span>
                    
                    {/* Simple Status Indicator */}
                    <div
                      className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white shadow-sm ${
                        candidate.status === 'Available' ? 'bg-green-400' : 'bg-yellow-400'
                      }`}
                    />
                  </motion.div>

                  <div className="flex-1 space-y-3">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-[#101826] text-lg">{candidate.name}</h4>
                        <p className="text-sm text-gray-600">{candidate.role}</p>
                      </div>
                      <motion.div 
                        className="flex items-center space-x-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        <span className="text-[#f88e4c] font-bold text-xl">{candidate.score}</span>
                      </motion.div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {candidate.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + index * 0.1 + i * 0.05, duration: 0.3 }}
                          className="text-xs bg-[#f88e4c]/10 text-[#f88e4c] px-3 py-1 rounded-full border border-[#f88e4c]/20 font-medium"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>

                    {/* Details */}
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 font-medium">{candidate.experience}</span>
                      <span className="text-gray-500">{candidate.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simplified AI Insights */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
          className="relative mt-8"
        >
          <div className="relative bg-white/90 rounded-2xl p-6 border border-[#f88e4c]/20 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <motion.div 
                className="w-8 h-8 bg-gradient-to-r from-[#f88e4c] to-orange-500 rounded-full flex items-center justify-center shadow-md"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.div>
              <span className="text-lg font-bold text-[#101826]">AI Insights</span>
              <div className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">
                Live Analysis
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Based on job requirements, <span className="font-semibold text-[#f88e4c]">Sarah Chen</span> shows 
              <span className="font-bold text-green-600"> 98% compatibility</span> with strong React expertise, 
              leadership experience, and excellent problem-solving skills. 
              <span className="font-medium text-purple-600"> Recommended for immediate interview.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  const renderMeetingBooking = () => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="relative space-y-8 overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 grid-rows-6 gap-4 h-full">
          {Array.from({length: 48}).map((_, i) => (
            <motion.div
              key={i}
              className="bg-[#f88e4c] rounded-sm"
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, delay: i * 0.1, repeat: Infinity }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <motion.div 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h3 className="text-3xl font-bold bg-gradient-to-r from-[#101826] to-[#f88e4c] bg-clip-text text-transparent mb-4">
            Smart Interview Scheduling
          </h3>
          <p className="text-lg text-gray-600 font-light">Automated calendar coordination across teams</p>
        </motion.div>

        {/* Enhanced Calendar Interface */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#f88e4c]/20 to-orange-500/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-2xl">
            {/* Calendar Header */}
            <div className="bg-gradient-to-r from-[#f88e4c] via-orange-500 to-[#f88e4c] p-6 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
              </div>
              <div className="relative flex items-center justify-between">
                <motion.h4 
                  className="text-2xl font-bold"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  November 2024
                </motion.h4>
                <div className="flex space-x-3">
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
              {/* Day Headers */}
              <div className="grid grid-cols-7 gap-3 mb-6">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                  <motion.div 
                    key={day} 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                    className="text-center text-sm font-bold text-gray-600 p-3 bg-white rounded-xl shadow-sm"
                  >
                    {day}
                  </motion.div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-3">
                {Array.from({length: 35}, (_, i) => {
                  const day = i - 6;
                  const isToday = day === 15;
                  const hasSlot = [12, 13, 14, 16, 17, 19, 20].includes(day);
                  const isBooked = [18, 21].includes(day);
                  
                  return (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotateY: 180 }}
                      animate={{ scale: 1, rotateY: 0 }}
                      transition={{ delay: i * 0.03, duration: 0.4 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`
                        relative h-12 flex items-center justify-center text-sm rounded-xl cursor-pointer transition-all duration-300 font-medium
                        ${day < 1 || day > 30 ? 'text-gray-300 bg-gray-50' : 
                          isToday ? 'bg-gradient-to-br from-[#f88e4c] to-orange-500 text-white font-bold shadow-lg' :
                          isBooked ? 'bg-gradient-to-br from-red-400 to-red-500 text-white' :
                          hasSlot ? 'bg-gradient-to-br from-green-400 to-green-500 text-white shadow-md hover:shadow-lg' :
                          'bg-white hover:bg-gray-50 text-gray-700 shadow-sm border border-gray-200'}
                      `}
                    >
                      {day > 0 && day <= 30 && (
                        <>
                          {day}
                          {hasSlot && !isBooked && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.8 }}
                              className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white shadow-sm"
                            />
                          )}
                          {isBooked && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.8 }}
                              className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-red-500 shadow-sm"
                            />
                          )}
                        </>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Booking Actions */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-indigo-500/10 to-purple-500/10 rounded-3xl"></div>
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-blue-200/50 shadow-xl">
            <div className="text-center space-y-6">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(248, 142, 76, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-gradient-to-r from-[#f88e4c] via-orange-500 to-[#f88e4c] text-white px-12 py-4 rounded-2xl font-bold text-xl shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] skew-x-12 animate-pulse"></div>
                <span className="relative">Schedule All Interviews</span>
              </motion.button>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { 
                    type: "Technical Round", 
                    time: "Nov 15, 2:00 PM", 
                    interviewer: "John Doe",
                    avatar: "bg-gradient-to-br from-blue-500 to-purple-600",
                    duration: "60 min"
                  },
                  { 
                    type: "Behavioral Interview", 
                    time: "Nov 16, 10:00 AM", 
                    interviewer: "Jane Smith",
                    avatar: "bg-gradient-to-br from-pink-500 to-rose-600",
                    duration: "45 min"
                  }
                ].map((interview, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: index === 0 ? -50 : 50, opacity: 0, rotateY: index === 0 ? -30 : 30 }}
                    animate={{ x: 0, opacity: 1, rotateY: 0 }}
                    transition={{ delay: 1.5 + index * 0.2, duration: 0.6 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"></div>
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-gray-200/50">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-10 h-10 ${interview.avatar} rounded-full flex items-center justify-center shadow-md`}>
                          <span className="text-white font-bold text-sm">
                            {interview.interviewer.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-[#101826] text-sm">{interview.type}</div>
                          <div className="text-xs text-gray-500">{interview.duration}</div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-gray-700 font-medium">{interview.time}</div>
                        <div className="text-sm text-[#f88e4c] font-medium">{interview.interviewer}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  const renderVideoInterview = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      className="relative space-y-8 overflow-hidden"
    >
      {/* Floating Tech Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({length: 15}).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              x: [0, 80, 0],
              y: [0, -60, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.6, 0.1]
            }}
            transition={{
              duration: 6 + i * 0.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${5 + (i * 6)}%`,
              top: `${15 + (i * 4)}%`
            }}
          >
            <div className="w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-lg"></div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10">
        {/* <motion.div 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h3 className="text-3xl font-bold bg-gradient-to-r from-[#101826] via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Live AI Interview Session
          </h3>
          <p className="text-lg text-gray-600 font-light">Real-time behavioral and technical assessment</p>
        </motion.div> */}

        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative"
        >
          {/* Glowing Container Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-3xl blur-2xl"></div>
          
          <div className="relative bg-[#101826] rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
            {/* Enhanced Video Interface Header */}
            <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black px-8 py-4 flex items-center justify-between border-b border-gray-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-indigo-500/5"></div>
              <div className="relative flex items-center space-x-6">
                <div className="flex space-x-3">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-4 h-4 bg-red-500 rounded-full shadow-lg"
                  />
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg"
                  />
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    className="w-4 h-4 bg-green-500 rounded-full shadow-lg"
                  />
                </div>
                <div className="text-lg text-white font-bold tracking-wide">Kora AI Interview Suite</div>
              </div>
              <div className="relative flex items-center space-x-4 text-white">
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-3 h-3 bg-red-500 rounded-full shadow-lg"
                />
                <span className="text-sm font-semibold">LIVE</span>
                <div className="text-sm font-mono bg-black/30 px-3 py-1 rounded-full">00:12:34</div>
              </div>
            </div>

            {/* Enhanced Video Call Interface */}
            <div className="relative h-96 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex">
              {/* AI Interviewer Side - Enhanced */}
              <div className="flex-1 relative bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border-r-2 border-gray-700">
                <div className="absolute inset-6 bg-gradient-to-br from-[#f88e4c] via-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-full h-full bg-gradient-to-br from-white/30 via-transparent to-white/10"
                    />
                  </div>
                  
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 2, 0],
                      y: [0, -3, 0]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-28 h-28 bg-white/20 rounded-full flex items-center justify-center text-white text-3xl font-bold backdrop-blur-sm border-4 border-white/40 shadow-2xl"
                  >
                    <div className="text-center">
                      <motion.div 
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-2xl mb-1"
                      >
                        🤖
                      </motion.div>
                      <div className="text-sm font-extrabold tracking-wider">AI</div>
                    </div>
                  </motion.div>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-black/70 text-white px-4 py-3 rounded-xl backdrop-blur-sm border border-white/20">
                  <div className="font-bold text-lg">Kora AI Interviewer</div>
                  <div className="text-sm text-gray-300">Technical Assessment</div>
                </div>
                
                {/* Enhanced AI Speaking Indicator */}
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute top-6 left-6 flex space-x-2 bg-black/50 px-3 py-2 rounded-full backdrop-blur-sm"
                >
                  {[0, 1, 2, 3, 4].map(i => (
                    <motion.div
                      key={i}
                      animate={{ height: [8, 20, 8] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                      className="w-1 bg-green-400 rounded-full shadow-sm"
                    />
                  ))}
                </motion.div>
              </div>

              {/* Candidate Side - Enhanced */}
              <div className="flex-1 relative bg-gradient-to-br from-blue-900/40 to-teal-900/40">
                <div className="absolute inset-6 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
                  {/* Background Animation */}
                  <div className="absolute inset-0 opacity-30">
                    <motion.div
                      animate={{ 
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
                      }}
                      transition={{ duration: 8, repeat: Infinity }}
                      className="w-full h-full bg-gradient-to-tr from-white/20 via-transparent to-white/10"
                    />
                  </div>
                  
                  <motion.div
                    animate={{ 
                      scale: [1, 1.03, 1],
                      y: [0, -2, 0],
                      rotateY: [0, 5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-24 h-28 bg-gradient-to-b from-amber-100 via-amber-200 to-amber-300 rounded-2xl flex items-center justify-center shadow-inner border-4 border-white/30 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-400/30 to-transparent"></div>
                    <div className="relative z-10 text-center">
                      <motion.div 
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full mx-auto mb-2 shadow-lg border-2 border-white/50"
                      />
                      <div className="text-xs text-gray-800 font-bold">Sarah Chen</div>
                      <div className="text-[10px] text-gray-700">Frontend Dev</div>
                    </div>
                  </motion.div>
                </div>
                
                <div className="absolute bottom-6 right-6 bg-black/70 text-white px-4 py-3 rounded-xl backdrop-blur-sm border border-white/20">
                  <div className="font-bold text-lg">Sarah Chen</div>
                  <div className="text-sm text-gray-300">Candidate</div>
                </div>
                
                {/* Enhanced Candidate Speaking Indicator */}
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                  className="absolute top-6 right-6 flex space-x-2 bg-black/50 px-3 py-2 rounded-full backdrop-blur-sm"
                >
                  {[0, 1, 2, 3, 4].map(i => (
                    <motion.div
                      key={i}
                      animate={{ height: [6, 18, 6] }}
                      transition={{ duration: 0.4, repeat: Infinity, delay: i * 0.08 }}
                      className="w-1 bg-blue-400 rounded-full shadow-sm"
                    />
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Enhanced Real-time Analysis Panel */}
            <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black px-8 py-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-indigo-500/5"></div>
              <div className="relative flex items-center justify-between">
                <div className="flex items-center space-x-8">
                  <motion.button
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 10px 30px rgba(239, 68, 68, 0.5)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white shadow-2xl border-4 border-red-400/50"
                  >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                  <motion.button
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.5)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl border-4 border-blue-400/50"
                  >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                  </motion.button>
                </div>

                {/* Enhanced Live Metrics */}
                <div className="flex items-center space-x-8 text-white">
                  <motion.div 
                    className="flex items-center space-x-3 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-[#f88e4c] border-t-transparent rounded-full"
                    />
                    <span className="font-medium">Analyzing responses</span>
                  </motion.div>
                  
                  <div className="flex items-center space-x-3 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-3 h-3 bg-green-400 rounded-full"
                    />
                    <span className="font-medium">Confidence: {Math.round(analyticsData.communicationScore)}%</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                      className="w-3 h-3 bg-blue-400 rounded-full"
                    />
                    <span className="font-medium">Technical: {Math.round(analyticsData.technicalScore)}%</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                      className="w-3 h-3 bg-purple-400 rounded-full"
                    />
                    <span className="font-medium">Behavioral: {Math.round(analyticsData.behavioralScore)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  const renderAnalytics = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[#101826] mb-3">Real-time Analytics Dashboard</h3>
        <p className="text-gray-600">AI-powered insights and candidate assessment</p>
      </div>

      {/* Main Analytics Grid */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {/* Score Cards */}
        {[
          { label: "Technical Skills", score: analyticsData.technicalScore, color: "bg-blue-500", icon: "💻" },
          { label: "Communication", score: analyticsData.communicationScore, color: "bg-green-500", icon: "💬" },
          { label: "Problem Solving", score: analyticsData.behavioralScore, color: "bg-purple-500", icon: "🧠" }
        ].map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.6 }}
            className="bg-white rounded-xl p-4 border border-gray-200 shadow-lg"
          >
            <div className="text-center">
              <div className="text-2xl mb-2">{metric.icon}</div>
              <div className="text-3xl font-bold text-[#101826] mb-1">
                {Math.round(metric.score)}%
              </div>
              <div className="text-xs text-gray-600">{metric.label}</div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.score}%` }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 1 }}
                  className={`h-2 rounded-full ${metric.color}`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detailed Analysis */}
      <div className="grid grid-cols-2 gap-4">
        {/* Performance Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl p-4 border border-gray-200 shadow-lg"
        >
          <div className="text-sm font-semibold text-[#101826] mb-4">Performance Timeline</div>
          <div className="space-y-3">
            {[
              { time: "0:00", activity: "Introduction", score: 85 },
              { time: "2:30", activity: "Technical Q&A", score: 92 },
              { time: "8:45", activity: "Coding Challenge", score: 88 },
              { time: "12:20", activity: "Behavioral Questions", score: 95 }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
              >
                <div>
                  <div className="text-xs font-medium text-[#101826]">{item.activity}</div>
                  <div className="text-[10px] text-gray-500">{item.time}</div>
                </div>
                <div className="text-sm font-bold text-[#f88e4c]">{item.score}%</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-[#f88e4c]/10 to-orange-500/10 rounded-xl p-4 border border-[#f88e4c]/20"
        >
          <div className="text-sm font-semibold text-[#101826] mb-4">AI Insights</div>
          <div className="space-y-3">
            {[
              { type: "Strength", text: "Excellent React architecture knowledge", icon: "✅" },
              { type: "Strength", text: "Clear communication style", icon: "✅" },
              { type: "Opportunity", text: "Could improve testing practices", icon: "📈" },
              { type: "Recommendation", text: "Strong fit for senior role", icon: "🎯" }
            ].map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="flex items-start space-x-2 text-xs"
              >
                <span className="text-sm">{insight.icon}</span>
                <div>
                  <div className="font-medium text-[#101826]">{insight.type}</div>
                  <div className="text-gray-600">{insight.text}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Final Recommendation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
        className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 text-center"
      >
        <div className="text-4xl mb-2">🏆</div>
        <div className="text-lg font-bold text-[#101826] mb-2">Recommended for Hire</div>
        <div className="text-sm text-gray-600">
          Overall Score: <span className="font-bold text-[#f88e4c]">94/100</span>
        </div>
      </motion.div>
    </motion.div>
  );

  const renderCompanyMatching = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-8"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-8"
      >
        <h3 className="text-3xl font-bold bg-gradient-to-r from-[#101826] to-[#f88e4c] bg-clip-text text-transparent mb-4">
          Perfect Company Matches
        </h3>
        <p className="text-lg text-gray-600 font-light">AI-powered role and culture compatibility</p>
      </motion.div>

      <div className="space-y-6">
        {[
          { 
            company: "TechFlow Inc", 
            role: "Senior Frontend Developer", 
            match: "98%", 
            culture: "Innovation-focused startup",
            salary: "$140k - $170k",
            benefits: ["Remote work", "Equity", "Learning budget"],
            logo: "bg-gradient-to-br from-blue-500 to-purple-600",
            employees: "250+ employees"
          },
          { 
            company: "StartupX", 
            role: "Full Stack Engineer", 
            match: "95%", 
            culture: "Fast-paced growth environment",
            salary: "$120k - $150k",
            benefits: ["Flexible hours", "Health insurance", "Stock options"],
            logo: "bg-gradient-to-br from-green-500 to-teal-600",
            employees: "50+ employees"
          },
          { 
            company: "DevCorp", 
            role: "React Specialist", 
            match: "92%", 
            culture: "Collaborative team culture",
            salary: "$130k - $160k",
            benefits: ["4-day work week", "Unlimited PTO", "Gym membership"],
            logo: "bg-gradient-to-br from-orange-500 to-red-600",
            employees: "500+ employees"
          }
        ].map((match, index) => (
          <motion.div
            key={match.company}
            initial={{ 
              y: 30, 
              opacity: 0
            }}
            animate={{ 
              y: 0,
              opacity: 1
            }}
            transition={{ 
              delay: 0.2 + index * 0.15, 
              duration: 0.6,
              ease: "easeOut"
            }}
            whileHover={{ 
              y: -6, 
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            className="relative group"
          >
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg group-hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="flex items-start space-x-4">
                {/* Company Logo */}
                <motion.div 
                  className={`w-16 h-16 ${match.logo} rounded-xl flex items-center justify-center shadow-md`}
                  whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                >
                  <span className="text-white font-bold text-lg">
                    {match.company.split(' ')[0].substring(0, 2)}
                  </span>
                </motion.div>

                {/* Company Details */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-[#101826] text-lg">{match.company}</h4>
                      <p className="text-gray-600 text-sm">{match.employees}</p>
                    </div>
                    <motion.div 
                      className="text-right"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.15, duration: 0.3 }}
                    >
                      <div className="text-2xl font-bold text-[#f88e4c]">{match.match}</div>
                      <div className="text-xs text-gray-500">Match Score</div>
                    </motion.div>
                  </div>

                  <div className="mb-4">
                    <div className="font-semibold text-[#101826] mb-1">{match.role}</div>
                    <div className="text-sm text-gray-600 mb-2">{match.culture}</div>
                    <div className="text-sm font-medium text-green-600">{match.salary}</div>
                  </div>

                  {/* Benefits */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {match.benefits.map((benefit, i) => (
                      <motion.span 
                        key={i} 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.15 + i * 0.05, duration: 0.3 }}
                        className="text-xs bg-[#f88e4c]/10 text-[#f88e4c] px-3 py-1 rounded-full border border-[#f88e4c]/20"
                      >
                        {benefit}
                      </motion.span>
                    ))}
                  </div>

                  {/* Match Breakdown */}
                  <motion.div 
                    className="grid grid-cols-3 gap-4 text-xs"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.15, duration: 0.4 }}
                  >
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-[#101826]">Skills</div>
                      <div className="text-green-600 font-bold">96%</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-[#101826]">Culture</div>
                      <div className="text-blue-600 font-bold">94%</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-[#101826]">Growth</div>
                      <div className="text-purple-600 font-bold">98%</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            </motion.div>
          ))}
      </div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
        className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
      >
        <motion.button
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
          className="bg-[#f88e4c] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          Connect with Top Matches
        </motion.button>
        <motion.button
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
          className="bg-white text-[#101826] px-8 py-3 rounded-xl font-semibold border-2 border-[#f88e4c] hover:bg-[#f88e4c]/5 transition-colors duration-300"
        >
          View All Opportunities
        </motion.button>
      </motion.div>
    </motion.div>
  );

  const renderCurrentScene = () => {
    switch (scenes[currentScene]?.id) {
      case 'candidate-selection':
        return renderCandidateSelection();
      case 'meeting-booking':
        return renderMeetingBooking();
      case 'video-interview':
        return renderVideoInterview();
      case 'analytics':
        return renderAnalytics();
      case 'company-matching':
        return renderCompanyMatching();
      default:
        return renderCandidateSelection();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex-1 w-full max-w-7xl mx-auto lg:mx-0"
    >
      {/* Enhanced Laptop Frame */}
      <div className="relative perspective-1000">
        {/* Ambient Environment Lighting */}
        <div className="absolute -inset-20 bg-gradient-radial from-blue-500/5 via-purple-500/3 to-transparent rounded-full blur-3xl"></div>
        
        {/* Laptop Screen Assembly */}
        <div className="relative transform hover:rotateY-2 transition-transform duration-700 ease-out">
          {/* Screen Outer Shell */}
          <div className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 rounded-t-[24px] p-3 shadow-2xl border-4 border-gray-200/50">
            {/* Screen Lid Texture */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-gray-100/50 rounded-t-[20px]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.9),transparent_50%)] rounded-t-[20px]"></div>
            
            {/* Apple Logo Area */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-6 h-6 bg-gradient-to-b from-gray-200/50 to-gray-300/30 rounded-lg flex items-center justify-center backdrop-blur-sm border border-gray-300/30">
                <div className="w-4 h-4 bg-gray-400/40 rounded-sm"></div>
              </div>
            </div>
            
            {/* Screen Bezel - Premium Design */}
            <div className="relative bg-black rounded-t-[20px] p-3 shadow-inner border border-gray-300">
              {/* Screen Glass Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/30 rounded-t-[16px]"></div>
              
              {/* Top Sensor Bar */}
              <div className="flex items-center justify-center mb-4 relative bg-black/80 rounded-full py-2 px-8 mx-auto w-fit">
                {/* Camera Module */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-3 h-3 bg-gray-800 rounded-full shadow-inner border border-gray-600"></div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 w-3 h-3 bg-green-400/60 rounded-full blur-sm"
                    />
                    <div className="absolute inset-[2px] w-2 h-2 bg-gray-900 rounded-full"></div>
                  </div>
                  
                  {/* Ambient Light Sensor */}
                  <div className="w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
                  
                  {/* Microphone Array */}
                  <div className="flex space-x-1">
                    <div className="w-0.5 h-0.5 bg-gray-600 rounded-full"></div>
                    <div className="w-0.5 h-0.5 bg-gray-600 rounded-full"></div>
                    <div className="w-0.5 h-0.5 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Screen Content Area - Enhanced */}
              <div className="bg-white rounded-2xl p-8 min-h-[700px] relative overflow-hidden shadow-2xl border border-gray-200/50">
                {/* Screen Anti-Glare Coating Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-transparent to-purple-500/3 rounded-2xl pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/40 via-white/10 to-transparent rounded-t-2xl pointer-events-none"></div>
                <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl pointer-events-none"></div>
                
                {/* Scene Progress Indicator */}
                <div className="relative z-10 flex justify-center mb-8">
                  <div className="flex space-x-3 bg-gray-50/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200/50">
                    {scenes.map((scene, index) => (
                      <motion.div
                        key={scene.id}
                        className={`h-3 rounded-full transition-all duration-500 relative overflow-hidden ${
                          index === currentScene 
                            ? 'w-12 bg-gradient-to-r from-[#f88e4c] to-orange-500' 
                            : index < currentScene 
                              ? 'w-3 bg-gradient-to-r from-[#f88e4c]/70 to-orange-500/70' 
                              : 'w-3 bg-gray-300'
                        }`}
                        animate={{
                          width: index === currentScene ? 48 : 12,
                        }}
                      >
                        {index === currentScene && (
                          <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Main Scene Container */}
                <div className="relative z-10 min-h-[600px]">
                  <AnimatePresence mode="wait">
                      <motion.div
                      key={currentScene}
                      initial={{ opacity: 0, x: 30, scale: 0.98 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -30, scale: 0.98 }}
                      transition={{ 
                        duration: 0.8, 
                        ease: [0.4, 0, 0.2, 1],
                        type: "tween"
                      }}
                      className="absolute inset-0"
                    >
                      {renderCurrentScene()}
                      </motion.div>
                  </AnimatePresence>
                </div>

                {/* Scene Title */}
                <motion.div
                  key={`title-${currentScene}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="relative z-10 text-center mt-8"
                >
                  <div className="text-sm text-[#f88e4c] font-medium tracking-wide uppercase bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 inline-block shadow-sm border border-[#f88e4c]/20">
                    {scenes[currentScene]?.title}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Enhanced Laptop Base */}
          <div className="relative transform-gpu">
            {/* Hinge Assembly */}
            <div className="relative h-2 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 mx-8 -mt-1 rounded-full shadow-inner border border-gray-300/50">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"></div>
              {/* Hinge Screws */}
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-gray-500 rounded-full"></div>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-gray-500 rounded-full"></div>
            </div>
            
            {/* Main Base Body */}
            <div className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 rounded-b-[24px] h-16 shadow-2xl border-4 border-gray-200/50 border-t-0 overflow-hidden">
              {/* Aluminum Texture */}
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.3)_0%,transparent_50%,rgba(0,0,0,0.05)_100%)] opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              
              {/* Ventilation Grilles */}
              <div className="absolute left-8 top-2 flex space-x-1">
                {Array.from({length: 12}).map((_, i) => (
                  <div key={i} className="w-0.5 h-3 bg-gray-400/60 rounded-full"></div>
                ))}
              </div>
              <div className="absolute right-8 top-2 flex space-x-1">
                {Array.from({length: 12}).map((_, i) => (
                  <div key={i} className="w-0.5 h-3 bg-gray-400/60 rounded-full"></div>
                ))}
              </div>
              
              {/* Enhanced Trackpad */}
              <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-center">
                <div className="relative">
                  <div className="w-32 h-6 bg-gradient-to-b from-gray-200 to-gray-300 rounded-xl shadow-inner border border-gray-300/50">
                    <div className="absolute inset-1 bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg"></div>
                    <div className="absolute inset-2 bg-gray-600/20 rounded-md"></div>
                    {/* Trackpad Glass Surface */}
                    <div className="absolute inset-2 bg-gradient-to-br from-white/40 via-transparent to-gray-200/30 rounded-md"></div>
                  </div>
                </div>
              </div>
              
              {/* Port Indicators - Left Side */}
              <div className="absolute left-2 top-1/2 transform -translate-y-1/2 space-y-1">
                <div className="w-4 h-1.5 bg-gray-500 rounded-sm shadow-inner"></div>
                <div className="w-4 h-1.5 bg-gray-500 rounded-sm shadow-inner"></div>
                <div className="w-3 h-1 bg-gray-500 rounded-sm shadow-inner"></div>
              </div>
              
              {/* Port Indicators - Right Side */}
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 space-y-1">
                <div className="w-4 h-1.5 bg-gray-500 rounded-sm shadow-inner"></div>
                <div className="w-3 h-1 bg-gray-500 rounded-sm shadow-inner"></div>
              </div>
              
              {/* Brand Text */}
              <div className="absolute bottom-1 right-4 text-gray-500 text-xs font-mono opacity-60">
                MacBook Pro
              </div>
              
              {/* Status LEDs */}
              <div className="absolute bottom-2 left-4 flex space-x-2">
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-1 bg-green-400 rounded-full shadow-sm"
                />
                <div className="w-1 h-1 bg-orange-400/50 rounded-full"></div>
              </div>
            </div>
            
            {/* Base Reflection */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-5/6 h-4 bg-gradient-to-r from-transparent via-gray-300/40 to-transparent rounded-full blur-md"></div>
          </div>

          {/* Enhanced Environmental Effects */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-4/5 h-12 bg-gradient-radial from-gray-400/30 via-gray-300/15 to-transparent rounded-full blur-2xl"></div>
          
          {/* Ambient Lighting */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-3xl blur-3xl pointer-events-none"></div>
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full blur-xl"></div>
        </div>
      </div>
    </motion.div>
  );
} 