'use client';

import { motion } from "framer-motion";

const jobOpportunities = [
  {
    title: "Software Engineer",
    rate: "$20 - $100/hour",
    type: "Contract",
    posted: "Posted 2 days ago by Kora AI",
    badge: "$250"
  },
  {
    title: "Finance Expert", 
    rate: "$90/hour",
    type: "Contract",
    posted: "Posted 11 days ago by Kora AI",
    badge: "$250"
  },
  {
    title: "Product Manager",
    rate: "$45 - $85/hour", 
    type: "Contract",
    posted: "Posted 5 days ago by Kora AI",
    badge: "$300"
  },
  {
    title: "UI/UX Designer",
    rate: "$35 - $75/hour",
    type: "Contract", 
    posted: "Posted 1 day ago by Kora AI",
    badge: "$200"
  },
  {
    title: "Data Scientist",
    rate: "$50 - $120/hour",
    type: "Contract",
    posted: "Posted 7 days ago by Kora AI", 
    badge: "$350"
  },
  {
    title: "DevOps Engineer",
    rate: "$40 - $95/hour",
    type: "Contract",
    posted: "Posted 3 days ago by Kora AI",
    badge: "$275"
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

      {/* Job opportunities marquee content */}
      <div className="relative z-10 py-3 sm:py-6 mr-[300px] sm:mr-[340px]">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="flex space-x-6 sm:space-x-8 mx-4 sm:mx-6"
            >
              {jobOpportunities.map((job, index) => (
                <motion.div
                  key={`${groupIndex}-${index}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: (groupIndex * jobOpportunities.length + index) * 0.1
                  }}
                  className="flex-shrink-0 backdrop-blur-sm rounded-lg border bg-white/5 border-white/10 p-3 sm:p-4 min-w-[280px] sm:min-w-[320px]"
                >
                  {/* Job header */}
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base text-white">
                        {job.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-xs sm:text-sm mt-1 text-blue-400">
                        <span>{job.rate}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <div className="text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white">
                      {job.badge}
                    </div>
                  </div>
                  
                  {/* Job footer */}
                  <div className="text-xs text-white/60">
                    {job.posted}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Static "Explore All Opportunities" card */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute right-4 sm:right-8 top-3 sm:top-6 z-20"
      >
        <div className="flex-shrink-0 backdrop-blur-sm rounded-lg border bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-400/30 hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300 cursor-pointer p-3 sm:p-4 min-w-[280px] sm:min-w-[320px] shadow-lg">
          {/* CTA header */}
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-sm sm:text-base text-blue-300">
                Explore All Opportunities
              </h3>
              <div className="flex items-center space-x-2 text-xs sm:text-sm mt-1 text-purple-300">
                <span>View More</span>
              </div>
            </div>
            <div className="text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white animate-pulse">
              View All
            </div>
          </div>
          
          {/* CTA footer */}
          <div className="text-xs text-blue-200">
            Discover hundreds of opportunities waiting for you
          </div>
        </div>
      </motion.div>
    </div>
  );
} 