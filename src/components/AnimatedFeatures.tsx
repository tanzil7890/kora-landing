'use client';

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  stats: {
    label: string;
    value: string;
    prefix?: string;
    suffix?: string;
  }[];
}

const features: Feature[] = [
  {
    id: "revenue",
    title: "Revenue Optimization",
    description: "AI-driven pricing and inventory management that maximizes your profit margins while maintaining competitive edge.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stats: [
      { label: "Average Revenue Increase", value: "32", suffix: "%" },
      { label: "Inventory Turnover", value: "2.8", suffix: "x faster" },
      { label: "Price Optimization", value: "24/7", suffix: "" }
    ]
  },
  {
    id: "experience", 
    title: "Customer Experience",
    description: "Personalized shopping experiences that understand and anticipate customer needs, driving loyalty and satisfaction.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
    stats: [
      { label: "Customer Satisfaction", value: "94", suffix: "%" },
      { label: "Repeat Purchase Rate", value: "2.4", suffix: "x higher" },
      { label: "Support Response", value: "< 1", suffix: "min" }
    ]
  },
  {
    id: "operations",
    title: "Operational Excellence", 
    description: "Streamline your operations with AI-powered automation that reduces costs and eliminates inefficiencies.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    stats: [
      { label: "Operational Costs", value: "28", suffix: "% reduction" },
      { label: "Process Automation", value: "85", suffix: "%" },
      { label: "Error Rate", value: "0.1", suffix: "%" }
    ]
  }
];

export function AnimatedFeatures() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
            Transforming E-commerce with
            <span className="block text-[#8B5CF6] font-medium mt-2">
              Intelligent Automation
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Discover how our AI-powered solutions drive measurable business results
            and create exceptional customer experiences.
          </p>
        </motion.div>

        <div className="flex flex-nowrap gap-6 overflow-x-auto pb-6 justify-center">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex-none w-[400px] bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-gray-900 to-black text-white">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {feature.stats.map((stat) => (
                  <div key={stat.label} className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent mb-1">
                      {stat.prefix}{stat.value}{stat.suffix}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
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