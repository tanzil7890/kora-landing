'use client';

import { motion } from "framer-motion";

export function SearchFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm text-[#6366F1] bg-[#6366F1]/5 rounded-full mb-6">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              ADVANCED CAPABILITIES
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
              Powerful features to transform 
              <span className="block mt-1 font-medium text-[#8B5CF6] bg-clip-text"> your search experience</span>
            </h2>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Discover how our AI-powered solutions drive exceptional search experiences and deliver measurable business results.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Hybrid Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="h-48 mb-6 bg-gradient-to-br from-black/5 to-black/10 rounded-xl flex items-center justify-center overflow-hidden relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/5 to-black/0"
                animate={{
                  x: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.svg 
                className="w-16 h-16 text-black relative z-10" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </motion.svg>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-medium text-gray-900 mb-2">Advanced hybrid search</h3>
              <p className="text-gray-600">Combine the precision of keyword matching with the intelligence of semantic understanding. Our hybrid approach ensures both accuracy and contextual relevance, delivering up to 30% better search results.</p>
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-black/0 opacity-0 transition-all duration-300"
              whileHover={{ 
                opacity: 1,
                borderColor: "rgba(0, 0, 0, 0.2)",
                scale: 1.02
              }}
            />
          </motion.div>

          {/* Semantic Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="h-48 mb-6 bg-gradient-to-br from-black/5 to-black/10 rounded-xl flex items-center justify-center overflow-hidden relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/5 to-black/0"
                animate={{
                  x: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.svg 
                className="w-16 h-16 text-black relative z-10" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </motion.svg>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-medium text-gray-900 mb-2">Next-gen semantic search</h3>
              <p className="text-gray-600">Leverage state-of-the-art language models to understand user intent and context. Our semantic search delivers 45% more relevant results and reduces search abandonment by 25%.</p>
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-black/0 opacity-0 transition-all duration-300"
              whileHover={{ 
                opacity: 1,
                borderColor: "rgba(0, 0, 0, 0.2)",
                scale: 1.02
              }}
            />
          </motion.div>

          {/* Multi-format Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="h-48 mb-6 bg-gradient-to-br from-black/5 to-black/10 rounded-xl flex items-center justify-center overflow-hidden relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/5 to-black/0"
                animate={{
                  x: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.svg 
                className="w-16 h-16 text-black relative z-10" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </motion.svg>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-medium text-gray-900 mb-2">Multimedia search excellence</h3>
              <p className="text-gray-600">Search across images, audio, and video with our advanced neural networks. Supports 50+ file formats and achieves 95% accuracy in content recognition.</p>
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-black/0 opacity-0 transition-all duration-300"
              whileHover={{ 
                opacity: 1,
                borderColor: "rgba(0, 0, 0, 0.2)",
                scale: 1.02
              }}
            />
          </motion.div>

          {/* Q&A Bots */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group relative bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="h-48 mb-6 bg-gradient-to-br from-black/5 to-black/10 rounded-xl flex items-center justify-center overflow-hidden relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/5 to-black/0"
                animate={{
                  x: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.svg 
                className="w-16 h-16 text-black relative z-10" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </motion.svg>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-medium text-gray-900 mb-2">AI-powered Q&A assistants</h3>
              <p className="text-gray-600">Deploy intelligent chatbots that understand complex queries and provide accurate answers in milliseconds. Reduces support tickets by 40% and improves customer satisfaction.</p>
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-black/0 opacity-0 transition-all duration-300"
              whileHover={{ 
                opacity: 1,
                borderColor: "rgba(0, 0, 0, 0.2)",
                scale: 1.02
              }}
            />
          </motion.div>

          {/* Contextual Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="group relative bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="h-48 mb-6 bg-gradient-to-br from-black/5 to-black/10 rounded-xl flex items-center justify-center overflow-hidden relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/5 to-black/0"
                animate={{
                  x: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.svg 
                className="w-16 h-16 text-black relative z-10" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </motion.svg>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-medium text-gray-900 mb-2">Smart contextual search</h3>
              <p className="text-gray-600">Harness the power of context-aware algorithms that understand user behavior and search patterns. Delivers personalized results with 60% higher engagement rates.</p>
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-black/0 opacity-0 transition-all duration-300"
              whileHover={{ 
                opacity: 1,
                borderColor: "rgba(0, 0, 0, 0.2)",
                scale: 1.02
              }}
            />
          </motion.div>

          {/* Product Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="group relative bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="h-48 mb-6 bg-gradient-to-br from-black/5 to-black/10 rounded-xl flex items-center justify-center overflow-hidden relative">
              <motion.div
                className="absolute inset-0 bg-black/5"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.svg 
                className="w-16 h-16 text-black relative z-10" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </motion.svg>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-medium text-gray-900 mb-2">Intelligent product suggestions</h3>
              <p className="text-gray-600">Boost sales with AI-driven recommendations that analyze user behavior and purchase history. Increases conversion rates by 35% and average order value by 25%.</p>
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-black/0 opacity-0 transition-all duration-300"
              whileHover={{ 
                opacity: 1,
                borderColor: "rgba(0, 0, 0, 0.2)",
                scale: 1.02
              }}
            />
          </motion.div>
        </div>

        {/* Additional Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
          {[
            { title: "Smart Filters", icon: "🔍", description: "Create dynamic, self-optimizing filter systems with ML" },
            { title: "Universal deployment", icon: "🌐", description: "Seamless integration across all platforms and frameworks" },
            { title: "Multilingual intelligence", icon: "🌍", description: "Support for 100+ languages with real-time translation" },
            { title: "Custom algorithms", icon: "⚙️", description: "Build and fine-tune your own search ranking models" },
            { title: "Enterprise security", icon: "🔒", description: "Military-grade encryption and compliance standards" },
            { title: "Location intelligence", icon: "📍", description: "Precise geospatial search with real-time tracking" }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={{ y: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="text-3xl mb-3"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                {feature.icon}
              </motion.div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 