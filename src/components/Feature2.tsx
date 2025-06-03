'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function Feature2() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform from showing left side (-15%) to right side (15%)
  const x = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={containerRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Content Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8" style={{ fontFamily: "Nib Pro, sans-serif" }}>
            Apply and work from anywhere
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Kora allows you to interview from wherever you are and receive opportunities from anywhere in the world.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Point 1 */}
            <div className="h-32 flex flex-col justify-start items-start">
              <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: "Nib Pro, sans-serif" }}>
                Work at the frontier of AI globalisation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Solve complex problems in your area of expertise. Expand your knowledge and let your creativity and brilliance shine.
              </p>
            </div>

            {/* Point 2 */}
            <div className="h-32 flex flex-col justify-start items-start">
              <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: "Nib Pro, sans-serif" }}>
                Earn top 1% pay at companies predominantly in Silicon Valley
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Kora partners directly with many of the most exciting companies in the world.
              </p>
            </div>

            {/* Point 3 */}
            <div className="h-32 flex flex-col justify-start items-start">
              <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: "Nib Pro, sans-serif" }}>
                Innovative research in the future of AI intelligence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Pioneer best-in-class approaches for developing advanced model capabilities.
              </p>
            </div>

            {/* Point 4 */}
            <div className="h-32 flex flex-col justify-start items-start">
              <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: "Nib Pro, sans-serif" }}>
                Flexible remote work opportunities
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Enjoy the freedom to work from anywhere while maintaining work-life balance and professional growth.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center overflow-hidden">
          <motion.div
            style={{ x }}
            className="w-8xl"
          >
            <Image
              src="/just_some.png"
              alt="Kora Platform Design"
              width={1536}
              height={800}
              className="w-full rounded-[20px] shadow-lg"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}