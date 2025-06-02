'use client';

import { motion } from "framer-motion";
import Image from "next/image";

interface JobAlert {
  id: string;
  company: string;
  position: string;
  time: string;
  isNew?: boolean;
}

const jobAlerts: JobAlert[] = [
  {
    id: "1",
    company: "Linear",
    position: "Product Designer",
    time: "now",
    isNew: true
  },
  {
    id: "2",
    company: "Airbnb",
    position: "Back End Developer",
    time: "5m",
    isNew: true
  },
  {
    id: "3",
    company: "Notion",
    position: "Product Designer",
    time: "now",
    isNew: true
  }
];

export function JobFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full mb-8">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              FEATURES
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
              All the Tools you need to help
            </h2>
            <p className="text-xl text-gray-600">
              Our AI job-matching bot scans thousands of listings and uses smart algorithms to find the
              roles that best fit your skills and preferences.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* AI-Powered Matching */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
          >
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                <Image
                  src="/profile-placeholder.jpg"
                  alt="Profile"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-medium">Jocelyn Korsgaard</h3>
                  <span className="text-sm text-gray-500">I/UX Designer</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/company-logo.png"
                    alt="Company"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span className="text-sm font-medium">Product Designer</span>
                  <span className="text-sm text-gray-500">Apple Inc.</span>
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B5CF6] text-white rounded-full font-medium"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Match up
            </motion.button>
            <div className="mt-8">
              <h4 className="text-xl font-medium mb-4">AI-Powered Matching</h4>
              <p className="text-gray-600">
                Our AI learns from your preferences and career path to recommend jobs that fit you best.
              </p>
            </div>
          </motion.div>

          {/* Job Alerts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
          >
            <div className="space-y-4">
              {jobAlerts.map((alert) => (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-[#8B5CF6]/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center text-[#8B5CF6]">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{alert.position}</span>
                        {alert.isNew && (
                          <span className="text-xs text-[#8B5CF6] bg-[#8B5CF6]/10 px-2 py-0.5 rounded-full">
                            New
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-500">
                        A position at {alert.company} matching your profile
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400">{alert.time}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-medium mb-4">Job Alerts in Real Time</h4>
              <p className="text-gray-600">
                Our AI learns from your preferences and career path to recommend jobs that fit you best.
              </p>
            </div>
          </motion.div>
        </div>

        {/* One-Click Applications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 opacity-50" />
          <div className="relative">
            <div className="grid grid-cols-8 gap-2 mb-8">
              {Array.from({ length: 64 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: Math.random() }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-xs text-gray-400 truncate p-1 rounded bg-gray-50"
                >
                  {["Product Designer", "UI Designer", "Frontend Developer", "Backend Developer", "Project Manager"][Math.floor(Math.random() * 5)]}
                </motion.div>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <motion.div
                className="w-12 h-12 rounded-full bg-[#8B5CF6] flex items-center justify-center text-white"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <div>
                <h4 className="text-xl font-medium mb-2">One-Click Applications</h4>
                <p className="text-gray-600">
                  Get personalized job recommendations based on your skills, experience, and preferences.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 