'use client';

import { motion } from "framer-motion";
/* import Image from "next/image"; */

const testimonials = [
  {
    quote: "The context-aware search has transformed how our customers find products. We've seen a 30% increase in conversion rates since implementing Outhad AI.",
    author: "Manas Hashvardhan Singh",
    role: "CTO of EM5",
    avatar: "/testimonials/avatar-1.png"
  },
  {
    quote: "The AI shopping agents provide incredibly personalized recommendations. Our average order value increased by 25% in just two months.",
    author: "Biswa Kumar",
    role: "CEO of The You Care",
    avatar: "/testimonials/avatar-2.png"
  },
  {
    quote: "The multilingual support has helped us expand globally. We now serve customers in over 20 languages with 95% accuracy.",
    author: "Sumit Mishra",
    role: "CEO of DayKart",
    avatar: "/testimonials/avatar-5.png"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 text-sm text-[#6366F1] bg-[#6366F1]/5 rounded-full shadow-sm border border-[#6366F1]/10"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            SUCCESS STORIES
          </motion.div>
        </div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
            Trusted by leading brands
            <span className="block mt-2 text-[#8B5CF6] font-medium">transforming e-commerce with AI</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {/* Decorative dots */}
          <div className="absolute -left-12 top-1/2 -translate-y-1/2">
            <svg className="w-8 h-20" viewBox="0 0 24 60" fill="none">
              <circle cx="4" cy="4" r="4" fill="#8B5CF6" fillOpacity="0.2"/>
              <circle cx="4" cy="20" r="4" fill="#8B5CF6" fillOpacity="0.2"/>
              <circle cx="4" cy="36" r="4" fill="#8B5CF6" fillOpacity="0.2"/>
              <circle cx="4" cy="52" r="4" fill="#8B5CF6" fillOpacity="0.2"/>
            </svg>
          </div>

          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                {/* <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="rounded-full"
                /> */}
              </div>
              <blockquote className="text-gray-600 mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900">{testimonial.author}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500">{testimonial.role}</span>
              </div>
            </motion.div>
          ))}

          {/* Video Review Card */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="relative rounded-2xl overflow-hidden aspect-video lg:col-span-2"
          >
            <Image
              src="/testimonials/video-thumbnail.jpg"
              alt="Video review"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 flex items-center justify-center w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-white/95 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-xl font-medium shadow-lg hover:bg-white transition-all duration-200"
              >
                <svg className="w-7 h-7 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"/>
                </svg>
                <span className="text-lg">Watch video review</span>
              </motion.button>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
