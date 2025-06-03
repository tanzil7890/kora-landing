'use client';

import React from "react";
import { motion } from "framer-motion";

export function RightContentDisplay2() {
  return (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative w-[500px] h-[500px] lg:w-[700px] lg:h-[700px]"
          >
            {/* Quantum Field Base */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 700 700">
                <defs>
                  {/* Advanced Gradient Definitions */}
                  <radialGradient id="quantumCore" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4"/>
                    <stop offset="30%" stopColor="#3b82f6" stopOpacity="0.3"/>
                    <stop offset="60%" stopColor="#1e40af" stopOpacity="0.2"/>
                    <stop offset="100%" stopColor="transparent"/>
                  </radialGradient>
                  
                  <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0"/>
                    <stop offset="25%" stopColor="#f97316" stopOpacity="0.8"/>
                    <stop offset="50%" stopColor="#ef4444" stopOpacity="1"/>
                    <stop offset="75%" stopColor="#f59e0b" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
                  </linearGradient>

                  <linearGradient id="neuralGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0"/>
                    <stop offset="50%" stopColor="#0ea5e9" stopOpacity="1"/>
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0"/>
                  </linearGradient>

                  <pattern id="quantumGrid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                    <circle cx="25" cy="25" r="1" fill="#0ea5e9" opacity="0.3"/>
                    <circle cx="0" cy="0" r="0.5" fill="#f59e0b" opacity="0.4"/>
                    <circle cx="50" cy="50" r="0.5" fill="#f59e0b" opacity="0.4"/>
                  </pattern>

                  {/* Holographic DNA Helix Filter */}
                  <filter id="holographicGlow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Quantum Grid Background */}
                <rect width="100%" height="100%" fill="url(#quantumGrid)" opacity="0.6"/>
                <circle cx="350" cy="350" r="280" fill="url(#quantumCore)"/>
                
                {/* DNA Double Helix Structure */}
                {Array.from({ length: 6 }).map((_, helixIndex) => (
                  <g key={`helix-${helixIndex}`}>
                    <motion.path
                      d={`M${150 + helixIndex * 80},200 Q${200 + helixIndex * 80},150 ${250 + helixIndex * 80},200 T${350 + helixIndex * 80},200 Q${400 + helixIndex * 80},250 ${450 + helixIndex * 80},300 T${550 + helixIndex * 80},400`}
                      stroke="url(#neuralGlow)"
                      strokeWidth="2"
                      fill="none"
                      filter="url(#holographicGlow)"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: [0, 1, 0.8, 1], 
                        opacity: [0, 0.8, 0.6, 0.8] 
                      }}
                      transition={{
                        duration: 4 + helixIndex * 0.5,
                        repeat: Infinity,
                        delay: helixIndex * 0.8,
                        ease: "easeInOut"
                      }}
                    />
                    {/* Complementary helix strand */}
                    <motion.path
                      d={`M${150 + helixIndex * 80},240 Q${200 + helixIndex * 80},290 ${250 + helixIndex * 80},240 T${350 + helixIndex * 80},240 Q${400 + helixIndex * 80},190 ${450 + helixIndex * 80},140 T${550 + helixIndex * 80},40`}
                      stroke="url(#dataFlow)"
                      strokeWidth="2"
                      fill="none"
                      filter="url(#holographicGlow)"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: [0, 1, 0.8, 1], 
                        opacity: [0, 0.8, 0.6, 0.8] 
                      }}
                      transition={{
                        duration: 4 + helixIndex * 0.5,
                        repeat: Infinity,
                        delay: helixIndex * 0.8 + 0.5,
                        ease: "easeInOut"
                      }}
                    />
                  </g>
                ))}

                {/* Quantum Data Streams */}
                {Array.from({ length: 25 }).map((_, index) => {
                  const angle = (index * 14.4) * Math.PI / 180;
                  const radius = 100 + (index % 3) * 60;
                  const x = 350 + Math.cos(angle) * radius;
                  const y = 350 + Math.sin(angle) * radius;
                  
                  return (
                    <motion.circle
                      key={`quantum-${index}`}
                      r="2"
                      fill={index % 3 === 0 ? "#f59e0b" : index % 3 === 1 ? "#0ea5e9" : "#ef4444"}
                      initial={{ 
                        x: x,
                        y: y,
                        opacity: 0,
                        scale: 0
                      }}
                      animate={{
                        x: [
                          x,
                          350 + Math.cos(angle + 0.2) * (radius + 30),
                          350 + Math.cos(angle + 0.4) * (radius - 20),
                          350 + Math.cos(angle + 0.6) * (radius + 40)
                        ],
                        y: [
                          y,
                          350 + Math.sin(angle + 0.2) * (radius + 30),
                          350 + Math.sin(angle + 0.4) * (radius - 20),
                          350 + Math.sin(angle + 0.6) * (radius + 40)
                        ],
                        opacity: [0, 1, 0.8, 0],
                        scale: [0, 1.2, 0.8, 1.5]
                      }}
                      transition={{
                        duration: 4 + index * 0.1,
                        repeat: Infinity,
                        delay: index * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  );
                })}

                {/* Neural Synaptic Network */}
                {[
                  { x: 250, y: 200, size: 10, delay: 0, connections: [{x: 350, y: 180}, {x: 450, y: 220}] },
                  { x: 450, y: 180, size: 8, delay: 0.5, connections: [{x: 550, y: 200}, {x: 400, y: 280}] },
                  { x: 350, y: 300, size: 12, delay: 1, connections: [{x: 250, y: 320}, {x: 500, y: 350}] },
                  { x: 200, y: 400, size: 9, delay: 1.5, connections: [{x: 300, y: 420}, {x: 180, y: 500}] },
                  { x: 500, y: 450, size: 11, delay: 2, connections: [{x: 450, y: 520}, {x: 600, y: 400}] },
                  { x: 150, y: 250, size: 7, delay: 2.5, connections: [{x: 200, y: 280}, {x: 100, y: 200}] },
                  { x: 550, y: 300, size: 10, delay: 3, connections: [{x: 500, y: 250}, {x: 600, y: 350}] },
                ].map((node, index) => (
                  <g key={`neural-node-${index}`}>
                    {/* Node connections */}
                    {node.connections.map((connection, connIndex) => (
                      <motion.line
                        key={`connection-${index}-${connIndex}`}
                        x1={node.x}
                        y1={node.y}
                        x2={connection.x}
                        y2={connection.y}
                        stroke="url(#neuralGlow)"
                        strokeWidth="1"
                        opacity="0.4"
                        animate={{
                          opacity: [0.2, 0.8, 0.2],
                          strokeWidth: [0.5, 2, 0.5]
                        }}
                        transition={{
                          duration: 3,
                          delay: node.delay + connIndex * 0.3,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                    ))}
                    
                    {/* Main neural node */}
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r={node.size}
                      fill="#1e40af"
                      filter="url(#holographicGlow)"
                      animate={{
                        r: [node.size, node.size * 1.5, node.size * 1.2, node.size],
                        opacity: [0.7, 1, 0.8, 0.7],
                      }}
                      transition={{
                        duration: 3,
                        delay: node.delay,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                    
                    {/* Synaptic pulse rings */}
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r={node.size * 2}
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="1"
                      opacity="0.6"
                      animate={{
                        r: [node.size * 2, node.size * 4, node.size * 2],
                        opacity: [0.6, 0.2, 0.6],
                      }}
                      transition={{
                        duration: 4,
                        delay: node.delay + 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                  </g>
                ))}
              </svg>
            </div>

            {/* Holographic Command Interface */}
            <div className="absolute inset-0">
              {/* Top HUD display */}
              <motion.div
                className="absolute top-6 left-6 right-6 text-xs font-mono"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex justify-between items-start">
                  <div className="text-cyan-400 space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>QUANTUM_CORE: ACTIVE</span>
                    </div>
                    <div>NEURAL_SYNC: 99.7%</div>
                    <div>DNA_HELIX: STABILIZED</div>
                    <div>DATA_FLOW: 847.2 TB/s</div>
                  </div>
                  <div className="text-orange-400 text-right space-y-1">
                    <div>CPU: ∞ QFLOPS</div>
                    <div>MEM: QUANTUM ∞</div>
                    <div>LAT: 0.0001ms</div>
                    <div className="flex items-center gap-2 justify-end">
                      <span>STATUS: OPTIMAL</span>
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Scanning grid overlay */}
              <motion.div
                className="absolute inset-8"
                style={{
                  background: `
                    linear-gradient(90deg, transparent 48%, rgba(6, 182, 212, 0.2) 49%, rgba(6, 182, 212, 0.2) 51%, transparent 52%),
                    linear-gradient(0deg, transparent 48%, rgba(6, 182, 212, 0.2) 49%, rgba(6, 182, 212, 0.2) 51%, transparent 52%)
                  `,
                  backgroundSize: '50px 50px'
                }}
                animate={{
                  backgroundPosition: ['0px 0px', '50px 50px', '0px 0px'],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Bottom progress scanner */}
              <motion.div
                className="absolute bottom-8 left-8 right-8"
              >
                <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-2"></div>
                <motion.div
                  className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"
                  animate={{
                    scaleX: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>

            {/* Central Workflow Hologram */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center space-x-8 lg:space-x-16">
                {/* Neural Interface Pod 1 */}
                <motion.div
                  initial={{ opacity: 0, z: -100, rotateY: -90 }}
                  animate={{ opacity: 1, z: 0, rotateY: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="relative group"
                  style={{ perspective: "1000px" }}
                >
                  <motion.div
                    animate={{
                      rotateY: [0, 8, 0, -8, 0],
                      rotateX: [0, 2, 0, -2, 0],
                      scale: [1, 1.03, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative w-24 h-24 lg:w-28 lg:h-28"
                  >
                    {/* Holographic quantum container */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-800 rounded-3xl shadow-2xl transform-gpu backdrop-blur-sm">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-3xl" />
                      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-cyan-300/10 to-transparent rounded-3xl" />
                    </div>
                    
                    {/* Quantum neural icon */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <motion.svg 
                        className="w-12 h-12 lg:w-14 lg:h-14 text-white" 
                        viewBox="0 0 24 24" 
                        fill="none"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      >
                        <motion.path 
                          d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" 
                          stroke="currentColor" 
                          strokeWidth="1.5" 
                          fill="currentColor" 
                          opacity="0.9"
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.9, 1, 0.9]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        />
                        <motion.circle 
                          cx="12" 
                          cy="12" 
                          r="4" 
                          stroke="#f59e0b" 
                          strokeWidth="2" 
                          fill="none"
                          animate={{
                            r: [3, 5, 3],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        />
                      </motion.svg>
                    </div>
                    
                    {/* Quantum field rings */}
                    <motion.div
                      className="absolute inset-0 border-2 border-orange-400 rounded-3xl"
                      animate={{
                        scale: [1, 1.25, 1],
                        opacity: [0.8, 0.4, 0.8],
                        rotate: [0, 180, 360]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        delay: 1.2
                      }}
                    />
                  </motion.div>
                  
                  {/* Quantum status indicator */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20"
                  >
                    <motion.div 
                      className="w-3 h-3 bg-white rounded-full"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [1, 0.7, 1] 
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity 
                      }}
                    />
                  </motion.div>
                </motion.div>

                {/* Quantum Data Stream */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                  className="relative"
                >
                  <motion.div
                    animate={{
                      x: [0, 12, 0],
                      scaleX: [1, 1.3, 1],
                      scaleY: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <svg className="w-10 h-10 lg:w-12 lg:h-12 text-cyan-400" viewBox="0 0 24 24" fill="none">
                      <motion.path 
                        d="M5 12H19M19 12L12 5M19 12L12 19" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        animate={{
                          opacity: [0.6, 1, 0.6]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                      />
                      <motion.path 
                        d="M9 12H15" 
                        stroke="#f59e0b" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        opacity="0.9"
                        animate={{
                          pathLength: [0, 1, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </svg>
                  </motion.div>
                  
                  {/* Enhanced data particles */}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute top-1/2 left-0"
                      animate={{
                        x: [0, 60, 120],
                        y: [0, Math.sin(i) * 10, 0],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1.2, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeOut"
                      }}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        i % 3 === 0 ? 'bg-orange-400' : 
                        i % 3 === 1 ? 'bg-cyan-400' : 'bg-green-400'
                      } shadow-lg`} />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Quantum Analysis Chamber */}
                <motion.div
                  initial={{ opacity: 0, z: -100, rotateY: 90 }}
                  animate={{ opacity: 1, z: 0, rotateY: 0 }}
                  transition={{ duration: 1, delay: 2.2 }}
                  className="relative group"
                  style={{ perspective: "1000px" }}
                >
                  <motion.div
                    animate={{
                      rotateY: [0, -8, 0, 8, 0],
                      rotateX: [0, -2, 0, 2, 0],
                      scale: [1, 1.03, 1],
                    }}
                    transition={{
                      duration: 8,
                      delay: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative w-24 h-24 lg:w-28 lg:h-28"
                  >
                    {/* Quantum analysis container */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-600 rounded-3xl shadow-2xl transform-gpu backdrop-blur-sm">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-3xl" />
                      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-purple-300/10 to-transparent rounded-3xl" />
                    </div>
                    
                    {/* Quantum analysis visualization */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <svg className="w-12 h-12 lg:w-14 lg:h-14 text-white" viewBox="0 0 24 24" fill="none">
                        <motion.path
                          d="M3 17L9 11L13 15L21 7"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: [0, 1, 0.8, 1] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 2.5
                          }}
                        />
                        <motion.path
                          d="M21 7H15M21 7V13"
                          stroke="#f59e0b"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        {/* Quantum data points */}
                        {[{x: 9, y: 11}, {x: 13, y: 15}, {x: 21, y: 7}].map((point, i) => (
                          <motion.circle
                            key={i}
                            cx={point.x}
                            cy={point.y}
                            r="2"
                            fill="#f59e0b"
                            animate={{
                              scale: [0.8, 1.6, 0.8],
                              opacity: [0.6, 1, 0.6],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.4 + 3
                            }}
                          />
                        ))}
                      </svg>
                    </div>
                    
                    {/* Quantum processing rings */}
                    <motion.div
                      className="absolute inset-0 border-2 border-orange-400 rounded-3xl"
                      animate={{
                        scale: [1, 1.25, 1],
                        opacity: [0.8, 0.4, 0.8],
                        rotate: [0, -180, -360]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        delay: 2.5
                      }}
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 2.7 }}
                    className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20"
                  >
                    <motion.div 
                      className="w-3 h-3 bg-white rounded-full"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [1, 0.7, 1] 
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity 
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Advanced Quantum Field Effects */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: `
                  radial-gradient(circle at 30% 30%, rgba(14, 165, 233, 0.15), transparent 50%),
                  radial-gradient(circle at 70% 70%, rgba(245, 158, 11, 0.1), transparent 50%),
                  radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1), transparent 70%)
                `,
                filter: "blur(1px)",
              }}
              animate={{
                opacity: [0.4, 0.9, 0.4],
                scale: [0.98, 1.02, 0.98],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Quantum Edge Illumination */}
            <motion.div
              className="absolute -inset-6 rounded-3xl opacity-40"
              style={{
                background: `
                  conic-gradient(from 0deg, 
                    #0ea5e9, #3b82f6, #6366f1, #8b5cf6, 
                    #f59e0b, #ef4444, #ec4899, #0ea5e9
                  )
                `,
                filter: "blur(12px)",
                zIndex: -1
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Holographic Scan Lines */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 3px,
                    rgba(6, 182, 212, 0.1) 3px,
                    rgba(6, 182, 212, 0.1) 4px
                  )
                `
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                backgroundPosition: ['0px 0px', '0px 20px']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
  );
} 