'use client';

import { motion } from "framer-motion";
import { useState } from "react";

export function KoraFeatures() {
  const [activeAssessment, setActiveAssessment] = useState('behavioral');

  return (
    <section className="py-24 bg-white" id="features">
      <div className="container mx-auto px-4">
        

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-32"
        >
          <div className="max-w-4xl mx-auto text-center mb-20">
            {/* <span className="inline-flex items-center gap-2 px-4 py-2 text-sm text-[#f88e4c] bg-[#f88e4c]/5 rounded-full mb-6 font-medium">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              HIRING INTELLIGENCE
            </span> */}
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
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[#101826]">Powered by advanced AI hiring intelligence</span>
            </div>
          </motion.div>
        </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6" style={{ fontFamily: "Nib Pro, sans-serif" }}>
              Complete hiring platform
              <span className="block mt-1 font-medium text-[#f88e4c]">powered by AI</span>
            </h2>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              From candidate discovery to seamless payments, Kora transforms every step of your hiring process with intelligent automation.
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Candidate Sourcer */}
          <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100"
          >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#f88e4c]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-[#f88e4c] to-orange-600 rounded-2xl flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2" style={{ fontFamily: "Nib Pro, sans-serif" }}>Candidate Sourcer</h3>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 text-xs font-semibold text-[#f88e4c] bg-[#f88e4c]/10 rounded-full">
                        200+ Platforms
                      </span>
                    </div>
                  </div>
            </div>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Find candidates across 200+ platforms. Use Kora&apos;s advanced web scrapers to discover your ideal candidates across LinkedIn, GitHub, Stack Overflow, and more.
                </p>
                
                {/* Candidate Sourcer UI Mockup */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6 border">
                  <div className="bg-white rounded-lg p-4 mb-3">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex-1 bg-gray-100 rounded-lg px-3 py-2 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <span className="text-sm text-gray-600">Senior React Developer with 5+ years experience</span>
                      </div>
                      <button className="bg-[#f88e4c] text-white px-4 py-2 rounded-lg text-sm font-medium">Search</button>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs text-gray-500">Searching across:</span>
                      <div className="flex items-center gap-2">
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">LinkedIn</span>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">GitHub</span>
                        <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs">Stack Overflow</span>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">+197 more</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="border rounded-lg p-3 bg-gray-50">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">JS</div>
                            <div>
                              <h6 className="text-sm font-semibold text-gray-900">John Smith</h6>
                              <p className="text-xs text-gray-600">Senior React Developer at TechCorp</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
                              <span className="text-white text-xs">in</span>
                            </div>
                            <div className="w-4 h-4 bg-gray-800 rounded flex items-center justify-center">
                              <span className="text-white text-xs">gh</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-gray-600">
                          <span>🎯 95% match</span>
                          <span>📍 San Francisco</span>
                          <span>💰 $120k-150k</span>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-3 bg-gray-50">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">AM</div>
                            <div>
                              <h6 className="text-sm font-semibold text-gray-900">Alice Morgan</h6>
                              <p className="text-xs text-gray-600">Full Stack Engineer, Ex-Google</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
                              <span className="text-white text-xs">in</span>
                            </div>
                            <div className="w-4 h-4 bg-orange-500 rounded flex items-center justify-center">
                              <span className="text-white text-xs">SO</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-gray-600">
                          <span>🎯 92% match</span>
                          <span>📍 Remote</span>
                          <span>💰 $140k-180k</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">Found 2,847 candidates</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-600">Live scraping active</span>
                    </div>
                    <span className="text-gray-500">⚡ AI-powered matching</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3 text-[#f88e4c] font-semibold hover:text-white hover:bg-[#f88e4c] border-2 border-[#f88e4c] rounded-xl transition-all duration-300"
                >
                  Try searching
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>

            {/* AI Interview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100"
          >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2" style={{ fontFamily: "Nib Pro, sans-serif" }}>AI Interview</h3>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 text-xs font-semibold text-emerald-600 bg-emerald-100 rounded-full">
                        Anti-Cheat
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Comprehensive behavioral, technical, and logical assessments with advanced anti-cheating technology to find the best candidates.
                </p>
                
                {/* AI Interview UI Mockup */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6 border">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-red-600 font-medium">Recording</span>
                    </div>
                  </div>
                  
                  {/* Assessment Type Tabs */}
                  <div className="flex items-center gap-1 mb-4 bg-white rounded-lg p-1">
                    <button 
                      onClick={() => setActiveAssessment('behavioral')}
                      className={`flex-1 text-xs py-2 px-3 rounded font-medium transition-all ${
                        activeAssessment === 'behavioral' 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      Behavioral
                    </button>
                    <button 
                      onClick={() => setActiveAssessment('technical')}
                      className={`flex-1 text-xs py-2 px-3 rounded font-medium transition-all ${
                        activeAssessment === 'technical' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      Technical
                    </button>
                    <button 
                      onClick={() => setActiveAssessment('logical')}
                      className={`flex-1 text-xs py-2 px-3 rounded font-medium transition-all ${
                        activeAssessment === 'logical' 
                          ? 'bg-purple-100 text-purple-700' 
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      Logical
                    </button>
                  </div>
                  
                  {/* Behavioral Assessment UI */}
                  {activeAssessment === 'behavioral' && (
                    <div className="bg-white rounded-lg p-4 mb-3">
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="text-sm font-semibold text-gray-900">Behavioral Assessment</h5>
                        <span className="text-xs text-emerald-600 bg-emerald-100 px-2 py-1 rounded">Question 2/4</span>
                      </div>
                      
                      <div className="text-sm text-gray-700 mb-4">
                        <p className="font-medium mb-3">Tell me about a time when you had to work with a difficult team member. How did you handle the situation?</p>
                        
                        <div className="bg-gray-50 rounded-lg p-3 mb-3">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                            <span className="text-xs text-gray-600">AI is analyzing your response...</span>
                          </div>
                          <div className="text-xs text-gray-500 space-y-1">
                            <div className="flex items-center gap-2">
                              <span>🎯 Communication skills:</span>
                              <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                                <div className="bg-green-500 h-1.5 rounded-full w-4/5"></div>
                              </div>
                              <span className="font-medium">85%</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🤝 Teamwork:</span>
                              <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                                <div className="bg-blue-500 h-1.5 rounded-full w-3/4"></div>
                              </div>
                              <span className="font-medium">78%</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>🧠 Problem solving:</span>
                              <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                                <div className="bg-purple-500 h-1.5 rounded-full w-5/6"></div>
                              </div>
                              <span className="font-medium">92%</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-xs">
                          <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                          </svg>
                          <span className="text-green-600">Voice tone analysis: Confident & Professional</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500">Time remaining:</span>
                          <span className="text-emerald-600 font-medium">8:30</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="w-3 h-3 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                          </svg>
                          <span className="text-green-600">Eye contact maintained</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Technical Assessment UI */}
                  {activeAssessment === 'technical' && (
                    <div className="bg-white rounded-lg p-4 mb-3">
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="text-sm font-semibold text-gray-900">Technical Assessment</h5>
                        <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">Question 3/5</span>
                      </div>
                      
                      <div className="text-sm text-gray-700 mb-3">
                        <p className="font-medium mb-2">Write a function to find the longest palindromic substring:</p>
                        <div className="bg-gray-100 rounded p-3 font-mono text-xs mb-3">
                          <div className="text-gray-600 mb-1">def longest_palindrome(s):</div>
                          <div className="text-gray-600 ml-4 mb-1"># Your code here</div>
                          <div className="text-gray-600 ml-4">return &quot;&quot;</div>
                          <div className="mt-2 h-1 w-2 bg-gray-900 animate-pulse"></div>
                        </div>
                        
                        <div className="bg-green-50 rounded-lg p-2 mb-3">
                          <div className="flex items-center gap-2 mb-1">
                            <svg className="w-3 h-3 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                            </svg>
                            <span className="text-xs text-green-700 font-medium">Code analysis: Good approach</span>
                          </div>
                          <div className="text-xs text-green-600">
                            ✓ Syntax correct • ✓ Logic sound • ⚠ Consider edge cases
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500">Time remaining:</span>
                          <span className="text-orange-600 font-medium">12:45</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="w-3 h-3 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                          </svg>
                          <span className="text-green-600">No tab switching detected</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Logical Assessment UI */}
                  {activeAssessment === 'logical' && (
                    <div className="bg-white rounded-lg p-4 mb-3">
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="text-sm font-semibold text-gray-900">Logical Assessment</h5>
                        <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded">Question 4/6</span>
                      </div>
                      
                      <div className="text-sm text-gray-700 mb-4">
                        <p className="font-medium mb-3">Complete the pattern sequence:</p>
                        
                        <div className="bg-purple-50 rounded-lg p-4 mb-3">
                          <div className="flex items-center justify-center gap-4 mb-3">
                            <div className="w-12 h-12 bg-purple-200 rounded-lg flex items-center justify-center font-bold text-purple-800">2</div>
                            <div className="w-12 h-12 bg-purple-200 rounded-lg flex items-center justify-center font-bold text-purple-800">4</div>
                            <div className="w-12 h-12 bg-purple-200 rounded-lg flex items-center justify-center font-bold text-purple-800">8</div>
                            <div className="w-12 h-12 bg-purple-300 rounded-lg flex items-center justify-center font-bold text-purple-900 animate-pulse">?</div>
                          </div>
                          
                          <div className="grid grid-cols-4 gap-2">
                            <button className="bg-white border-2 border-purple-200 rounded p-2 text-sm font-medium hover:border-purple-400 transition-colors">12</button>
                            <button className="bg-white border-2 border-purple-200 rounded p-2 text-sm font-medium hover:border-purple-400 transition-colors">14</button>
                            <button className="bg-white border-2 border-purple-500 bg-purple-100 rounded p-2 text-sm font-medium">16</button>
                            <button className="bg-white border-2 border-purple-200 rounded p-2 text-sm font-medium hover:border-purple-400 transition-colors">18</button>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-2">
                          <div className="flex items-center gap-2 text-xs">
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                            <span className="text-purple-600">Pattern recognition: Analyzing response time...</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500">Time remaining:</span>
                          <span className="text-purple-600 font-medium">15:20</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="w-3 h-3 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                          </svg>
                          <span className="text-green-600">Focus maintained</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Assessment Progress */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <div className={`w-2 h-2 rounded-full ${activeAssessment === 'behavioral' ? 'bg-emerald-500 animate-pulse' : 'bg-emerald-500'}`}></div>
                        <span className="text-gray-600">Behavioral {activeAssessment === 'behavioral' ? '(Active)' : '✓'}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className={`w-2 h-2 rounded-full ${activeAssessment === 'technical' ? 'bg-blue-500 animate-pulse' : activeAssessment === 'behavioral' ? 'bg-gray-300' : 'bg-blue-500'}`}></div>
                        <span className="text-gray-600">Technical {activeAssessment === 'technical' ? '(Active)' : activeAssessment === 'behavioral' ? '(Pending)' : '✓'}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className={`w-2 h-2 rounded-full ${activeAssessment === 'logical' ? 'bg-purple-500 animate-pulse' : activeAssessment === 'logical' || activeAssessment === 'technical' ? 'bg-gray-300' : 'bg-purple-500'}`}></div>
                        <span className="text-gray-600">Logical {activeAssessment === 'logical' ? '(Active)' : '(Pending)'}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">🎥 Video analysis</span>
                      <span className="text-gray-500">🔒 Screen lock</span>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3 text-emerald-600 font-semibold hover:text-white hover:bg-emerald-600 border-2 border-emerald-600 rounded-xl transition-all duration-300"
                >
                  Start interview
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
            </div>

          {/* Secondary Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Search & Browse */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
              >
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </motion.div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: "Nib Pro, sans-serif" }}>Search & Browse</h4>
              <p className="text-gray-600 text-sm mb-4">We index resumes, interviews, and online profiles to find candidates that perfectly match your role requirements with AI-powered precision.</p>
              
              {/* Search & Browse UI */}
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <div className="bg-white rounded p-2 mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-3 h-3 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <span className="text-xs text-gray-600 flex-1">React Developer, San Francisco</span>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-700">Sarah Chen</span>
                      <span className="text-xs text-blue-600 bg-blue-100 px-1.5 py-0.5 rounded">98% Match</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-700">Mike Johnson</span>
                      <span className="text-xs text-blue-600 bg-blue-100 px-1.5 py-0.5 rounded">94% Match</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-700">Alex Rivera</span>
                      <span className="text-xs text-blue-600 bg-blue-100 px-1.5 py-0.5 rounded">89% Match</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">📊 1,247 indexed profiles</span>
                  <span className="text-blue-600">⚡ AI-powered</span>
                </div>
              </div>

              <button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                Browse candidates →
              </button>
            </motion.div>

            {/* Shortlist */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
              >
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </motion.div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: "Nib Pro, sans-serif" }}>Shortlist</h4>
              <p className="text-gray-600 text-sm mb-4">Schedule meetings with anyone in our talent pool with a single click. All candidates are actively looking.</p>
              
              {/* Shortlist UI */}
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <div className="space-y-2 mb-3">
                  <div className="bg-white rounded p-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">JD</div>
                      <div>
                        <div className="text-xs font-medium text-gray-700">Jane Doe</div>
                        <div className="text-xs text-gray-500">Available today</div>
                      </div>
                    </div>
                    <button className="bg-purple-500 text-white px-2 py-1 rounded text-xs">Schedule</button>
                  </div>
                  
                  <div className="bg-white rounded p-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">TS</div>
                      <div>
                        <div className="text-xs font-medium text-gray-700">Tom Smith</div>
                        <div className="text-xs text-gray-500">Available tomorrow</div>
                      </div>
                    </div>
                    <button className="bg-purple-500 text-white px-2 py-1 rounded text-xs">Schedule</button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">⏰ Instant scheduling</span>
                  <span className="text-purple-600">🎯 Active candidates</span>
                </div>
            </div>

              <button className="text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors">
                Learn about intros →
              </button>
            </motion.div>

            {/* Payment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
              >
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </motion.div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: "Nib Pro, sans-serif" }}>Payment</h4>
              <p className="text-gray-600 text-sm mb-4">Simply pay Kora and allow our platform to facilitate seamless global payments compliant with US law.</p>
              
              {/* Mini Payment UI */}
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500">Total Amount</span>
                  <span className="text-sm font-semibold text-gray-900">$2,500</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-4 bg-blue-500 rounded text-white text-xs flex items-center justify-center">💳</div>
                  <span className="text-xs text-gray-600">•••• 4242</span>
                  <div className="ml-auto flex gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-green-600">Secure</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <motion.div 
                    className="bg-indigo-500 h-1 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ delay: 0.5, duration: 1 }}
                  ></motion.div>
                </div>
                <span className="text-xs text-gray-500 mt-1 block">Processing...</span>
              </div>

              <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700 transition-colors">
                Explore payments →
              </button>
            </motion.div>

            {/* Recruit Participants */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
              className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
              >
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </motion.div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: "Nib Pro, sans-serif" }}>Recruit Participants</h4>
              <p className="text-gray-600 text-sm mb-4">Use our pool of millions of participants (B2B and B2C), integrate with your provider, or recruit your own.</p>
              
              {/* Mini Participants UI */}
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-500">Available Pool</span>
                  <span className="text-sm font-semibold text-pink-600">2.4M+ Active</span>
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex -space-x-1">
                    <div className="w-6 h-6 bg-blue-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs">👨</div>
                    <div className="w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs">👩</div>
                    <div className="w-6 h-6 bg-purple-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs">👨</div>
                    <div className="w-6 h-6 bg-orange-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs">👩</div>
                    <div className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center text-gray-600 text-xs">+</div>
                  </div>
                  <span className="text-xs text-gray-600 ml-2">+2.4M more</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">B2B: 1.2M</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-600">B2C: 1.2M</span>
                  </div>
                </div>
            </div>

              <button className="text-pink-600 text-sm font-medium hover:text-pink-700 transition-colors">
                View talent pool →
              </button>
            </motion.div>
          </div>

          {/* Advanced Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Any Language */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
          >
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"
              />
              <div className="relative">
                <motion.div 
                  className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </motion.div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: "Nib Pro, sans-serif" }}>Any Language</h4>
                <p className="text-gray-600 mb-4">Translate and transcribe automatically between more than 50 languages with real-time accuracy.</p>
                
                {/* Language Translation UI */}
                <div className="bg-white rounded-lg p-3 mb-4 border">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">🇪🇸 Spanish</span>
                      <svg className="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">🇺🇸 English</span>
                    </div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="bg-gray-50 rounded p-2">
                      <div className="text-xs text-gray-500 mb-1">Original (Spanish):</div>
                      <div className="text-xs text-gray-700">&quot;Tengo cinco años de experiencia...&quot;</div>
                    </div>
                    
                    <div className="bg-yellow-50 rounded p-2">
                      <div className="text-xs text-yellow-600 mb-1">Translated (English):</div>
                      <div className="text-xs text-gray-700">&quot;I have five years of experience...&quot;</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2 text-xs">
                    <span className="text-gray-500">⚡ Real-time translation</span>
                    <span className="text-yellow-600">🎯 97% accuracy</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-yellow-600 font-medium">
                  <span>50+ Languages</span>
                  <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
                </div>
            </div>
            </motion.div>

            {/* Actionable Results */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
          >
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"
              />
              <div className="relative">
                <motion.div 
                  className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </motion.div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: "Nib Pro, sans-serif" }}>Actionable Results</h4>
                <p className="text-gray-600 mb-4">Generate key takeaways, personas, and reveal top themes automatically with AI analysis.</p>
                
                {/* Actionable Results UI */}
                <div className="bg-white rounded-lg p-3 mb-4 border">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-emerald-700 bg-emerald-100 px-2 py-1 rounded">AI Analysis Complete</span>
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-2 mb-3">
                    <div className="bg-emerald-50 rounded p-2">
                      <div className="text-xs font-medium text-emerald-700 mb-1">🎯 Key Takeaway:</div>
                      <div className="text-xs text-gray-700">Strong technical skills with leadership potential</div>
                    </div>
                    
                    <div className="bg-blue-50 rounded p-2">
                      <div className="text-xs font-medium text-blue-700 mb-1">👤 Persona Match:</div>
                      <div className="text-xs text-gray-700">Senior Developer Profile (89% confidence)</div>
                    </div>
                    
                    <div className="bg-purple-50 rounded p-2">
                      <div className="text-xs font-medium text-purple-700 mb-1">🔍 Top Theme:</div>
                      <div className="text-xs text-gray-700">Problem-solving & innovation focus</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">📊 Analyzed in 2.3s</span>
                    <span className="text-emerald-600">⚡ Real-time insights</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
                  <span>Instantly</span>
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                </div>
            </div>
            </motion.div>

            {/* Multi-format Engagement */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden md:col-span-2 lg:col-span-1"
            >
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-400/20 to-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"
              />
              <div className="relative">
              <motion.div 
                  className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center mb-4"
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                  </svg>
              </motion.div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: "Nib Pro, sans-serif" }}>Video, Audio, or Text</h4>
                <p className="text-gray-600 mb-4">Engage with candidates through video recordings, audio chats, or text conversations with detailed analysis.</p>
                
                {/* Multi-format UI */}
                <div className="bg-white rounded-lg p-3 mb-4 border">
                  <div className="flex items-center gap-1 mb-3">
                    <button className="flex-1 bg-violet-100 text-violet-700 px-2 py-1 rounded text-xs font-medium">📹 Video</button>
                    <button className="flex-1 bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">🎵 Audio</button>
                    <button className="flex-1 bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">💬 Text</button>
                  </div>
                  
                  <div className="bg-violet-50 rounded p-2 mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-violet-700">Video Interview Analysis</span>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-red-600">Recording</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-white rounded p-1.5">
                        <div className="text-violet-600 font-medium">😊 Confidence: 87%</div>
                      </div>
                      <div className="bg-white rounded p-1.5">
                        <div className="text-violet-600 font-medium">👁️ Eye Contact: Good</div>
                      </div>
                      <div className="bg-white rounded p-1.5">
                        <div className="text-violet-600 font-medium">🗣️ Clarity: 92%</div>
                      </div>
                      <div className="bg-white rounded p-1.5">
                        <div className="text-violet-600 font-medium">⏱️ Response: 1.2s</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">🎯 Real-time analysis</span>
                    <span className="text-violet-600">📊 Detailed insights</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-violet-600 font-medium">
                  <span>Multi-format</span>
                  <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></span>
                </div>
              </div>
            </motion.div>
        </div>
        </motion.div>
      </div>
    </section>
  );
} 