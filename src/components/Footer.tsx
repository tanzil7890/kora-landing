'use client';

import { motion } from "framer-motion";
/* import Link from "next/link"; */
import { useState } from "react";
import { BookDemoDialog } from "./BookDemoDialog";
import { MobileBookDemoDialog } from "./MobileBookDemoDialog";
import { scrollToSection } from "@/utils/scrollToSection";
import { useDeviceType } from "@/hooks/useDeviceType";
import Image from "next/image";

export function Footer() {
  const [isDemoDialogOpen, setIsDemoDialogOpen] = useState(false);
  const deviceType = useDeviceType();

  const menuItems = [
    { name: 'Interviews', href: 'why-us' },
    { name: 'Features', href: 'features' },
    { name: 'Find Candidates', href: 'features' },
    { name: 'Solutions', href: 'use-case' },
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
      <footer className="relative bg-[#fcfdfd] text-gray-900 pt-32 pb-16 overflow-hidden border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        {/* Gradient Arc Background - Updated for light theme */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-[600px]">
            <div className="absolute bottom-0 left-[-10%] w-[120%] h-full">
              <div 
                className="w-full h-full bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 opacity-60" 
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
              <h2 className="text-4xl md:text-5xl text-gray-900 font-medium mb-6" style={{ fontFamily: "Nib Pro, sans-serif" }}>
                Ready to Revolutionize Hiring?
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                See why top HR teams trust Kora AI to reduce time-to-hire by 80%.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  onClick={handleOpenDemo}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 bg-[#f88e4c] hover:bg-[#e67e3c] text-white px-8 py-4 rounded-full font-medium transition-colors"
                >
                  Schedule a Demo
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M15 10l5 5-5 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 4v7a4 4 0 0 0 4 4h12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('features')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full border border-gray-200 font-medium hover:bg-gray-50 transition-colors"
                >
                  Start Your Free Trial
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                    className="text-gray-600 hover:text-[#f88e4c] transition-colors cursor-pointer"
                  >
                    {item.name}
                  </a>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#f88e4c] transition-colors"
                  >
                    {item.name}
                  </a>
                )
              ))}
            </nav>
            <div className="h-px w-32 bg-gray-300"></div>
          </div>

          {/* Logo and Copyright */}
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <Image
                src="/KoraAnimated.svg"
                alt="Kora AI Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <div className="relative flex items-baseline">
                <span className="absolute -top-3 left-0 text-[10px] text-[#f88e4c] font-medium tracking-wide transform -rotate-12 opacity-80 whitespace-nowrap">
                  hey
                </span>
                <span className="text-gray-900 font-bold tracking-tight text-2xl ml-1 mt-1">
                  Kora
                </span>
              </div>
            </motion.div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Kora AI. All rights reserved.
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