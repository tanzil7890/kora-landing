'use client';

import { motion } from "framer-motion";
/* import Link from "next/link"; */
import { useState } from "react";
import { BookDemoDialog } from "./BookDemoDialog";
import { MobileBookDemoDialog } from "./MobileBookDemoDialog";
import { scrollToSection } from "@/utils/scrollToSection";
import { useDeviceType } from "@/hooks/useDeviceType";

export function Footer() {
  const [isDemoDialogOpen, setIsDemoDialogOpen] = useState(false);
  const deviceType = useDeviceType();

  const menuItems = [
    { name: 'Why Us', href: 'why-us' },
    { name: 'What We Do', href: 'what-we-do' },
    { name: 'Features', href: 'features' },
    /* { name: 'Testimonials', href: 'testimonials' }, */
    { name: 'Pricing', href: 'pricing' },
    { 
      name: 'In News', 
      href: 'https://www.beloitdailynews.com/news/business-news/beloit-college-duo-want-to-help-small-e-commerce-battle-the-big-guys/article_db98b216-b8d2-11ef-bd40-7b1aab0ac6e2.html',
      external: true 
    }
  ];

  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  const handleOpenDemo = () => {
    setIsDemoDialogOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoDialogOpen(false);
  };

  return (
    <>
      <footer className="relative text-white pt-32 pb-16 overflow-hidden">
        {/* Gradient Arc Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-[600px]">
            <div className="absolute bottom-0 left-[-10%] w-[120%] h-full">
              <div 
                className="w-full h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-20" 
                style={{
                  clipPath: "path('M0,0 Q50,100 100,0 L100,100 L0,100 Z')",
                }}
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative">
          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-12 text-center"
            >
              <h2 className="text-4xl md:text-5xl text-gray-900 font-medium mb-6">
                Ready to re-define the way your customer search?
              </h2>
              <p className="text-gray-500 mb-2">
                Simple, transparent pricing. No setup fees or contracts.
              </p>
              <p className="text-gray-500 mb-8">
                Try without a credit card, cancel anytime.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  onClick={() => scrollToSection('what-we-do')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-medium"
                >
                  Explore Our Solutions
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
                <motion.button
                  onClick={handleOpenDemo}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full border border-gray-200 font-medium"
                >
                  Book a Demo
                  <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M15 10l5 5-5 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 4v7a4 4 0 0 0 4 4h12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center gap-8 mb-16">
            <nav className="flex flex-wrap justify-center gap-8">
              {menuItems.map((item) => (
                !item.external ? (
                  <a
                    key={item.name}
                    href={`#${item.href}`}
                    onClick={(e) => handleMenuClick(e, item.href)}
                    className="text-gray-400 hover:text-[#8B5CF6] transition-colors cursor-pointer"
                  >
                    {item.name}
                  </a>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#8B5CF6] transition-colors"
                  >
                    {item.name}
                  </a>
                )
              ))}
            </nav>
            <div className="h-px w-32 bg-gray-800"></div>
          </div>

          {/* Logo and Copyright */}
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <svg width="80" height="80" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Brain circuit background */}
                <path d="M16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="2 3"
                >
                  <animate attributeName="strokeDashoffset" values="12;0" dur="3s" repeatCount="indefinite"/>
                </path>

                {/* Neural network nodes */}
                <circle cx="16" cy="12" r="2" fill="black">
                  <animate attributeName="r" values="1.5;2;1.5" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="12" cy="18" r="2" fill="black">
                  <animate attributeName="r" values="1.5;2;1.5" dur="2s" repeatCount="indefinite" begin="0.5s"/>
                </circle>
                <circle cx="20" cy="18" r="2" fill="black">
                  <animate attributeName="r" values="1.5;2;1.5" dur="2s" repeatCount="indefinite" begin="1s"/>
                </circle>

                {/* Neural connections */}
                <path d="M16 12L12 18" stroke="black" strokeWidth="1.5">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/>
                </path>
                <path d="M16 12L20 18" stroke="black" strokeWidth="1.5">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" begin="0.5s"/>
                </path>
                <path d="M12 18L20 18" stroke="black" strokeWidth="1.5">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" begin="1s"/>
                </path>

                {/* Pulse effect */}
                <circle cx="16" cy="16" r="6" stroke="black" strokeWidth="1" opacity="0.3">
                  <animate attributeName="r" values="6;12;6" dur="3s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite"/>
                </circle>

                {/* Define gradient */}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#FFFFFF'}} />
                    <stop offset="100%" style={{stopColor: '#CCCCCC'}} />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Outhad AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Render appropriate dialog based on device type */}
      {deviceType === 'mobile' ? (
        <MobileBookDemoDialog 
          isOpen={isDemoDialogOpen} 
          onClose={handleCloseDemo} 
        />
      ) : (
        <BookDemoDialog 
          isOpen={isDemoDialogOpen} 
          onClose={handleCloseDemo} 
        />
      )}
    </>
  );
}