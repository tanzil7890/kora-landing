'use client';

import { motion } from "framer-motion";

const features = [
  {
    id: '01',
    title: 'Adaptive Context Search',
    description: 'Deliver precise results by understanding the nuances of user intent and query context.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    points: [
      'Go beyond keywords to interpret true intent',
      'Tailored results based on user behavior',
      'Supports natural language queries'
    ]
  },
  // Add all other features following the same pattern
];

// Add these motion variants at the top of your file
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut'
    }
  }),
  hover: {
    y: -5,
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    }
  }
};

export function WebFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* <span className="inline-flex items-center gap-2 px-3 py-1 text-sm text-[#6366F1] bg-[#6366F1]/5 rounded-full mb-6">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              FEATURES
            </span> */}
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Powerful features to transform your
              <span className="block mt-1">search experience</span>
            </h2>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Discover how our AI-powered solutions drive exceptional search experiences and deliver measurable business results.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              custom={index}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="h-12 w-12 rounded-xl bg-[#6366F1]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="space-y-2">
                {feature.points?.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#6366F1] mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-500">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 