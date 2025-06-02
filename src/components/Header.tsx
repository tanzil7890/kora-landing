'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useDeviceType } from "@/hooks/useDeviceType";
import { BookDemoDialog } from "./BookDemoDialog";
import { MobileBookDemoDialog } from "./MobileBookDemoDialog";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const deviceType = useDeviceType();

  const menuItems = [
    /* Removed Products from standard menu items as we're handling it separately */
    { href: "/#why-us", label: "Why Us" },
    /* { href: "/customer-activation", label: "Outhad Customer Activation Platform" }, */
    { href: "/#what-we-do", label: "What We Do" },
    { href: "/#features", label: "Features" },
    /* { href: "/#testimonials", label: "Testimonials" }, */
    { href: "/#pricing", label: "Pricing" },
  ];

  const productItems = [
    { href: "/#products", label: "Outhad Search" },
    { href: "/customer-activation", label: "Outhad Customer Activation Platform" },
  ];

  const handleOpenDemo = () => {
    setIsDemoOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoOpen(false);
  };

  return (
    <>
      <header className="fixed w-full z-50 bg-white/5 backdrop-blur-md border-b border-white/10">
        <nav className="container mx-auto px-4 sm:px-8 h-[72px] flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Brain circuit background */}
                <path d="M16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4Z"
                  stroke="url(#gradient)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="2 3"
                >
                  <animate attributeName="strokeDashoffset" values="12;0" dur="3s" repeatCount="indefinite"/>
                </path>

                {/* Neural network nodes */}
                <circle cx="16" cy="12" r="2" fill="url(#gradient)">
                  <animate attributeName="r" values="1.5;2;1.5" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="12" cy="18" r="2" fill="url(#gradient)">
                  <animate attributeName="r" values="1.5;2;1.5" dur="2s" repeatCount="indefinite" begin="0.5s"/>
                </circle>
                <circle cx="20" cy="18" r="2" fill="url(#gradient)">
                  <animate attributeName="r" values="1.5;2;1.5" dur="2s" repeatCount="indefinite" begin="1s"/>
                </circle>

                {/* Neural connections */}
                <path d="M16 12L12 18" stroke="url(#gradient)" strokeWidth="1.5">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/>
                </path>
                <path d="M16 12L20 18" stroke="url(#gradient)" strokeWidth="1.5">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" begin="0.5s"/>
                </path>
                <path d="M12 18L20 18" stroke="url(#gradient)" strokeWidth="1.5">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" begin="1s"/>
                </path>

                {/* Pulse effect */}
                <circle cx="16" cy="16" r="6" stroke="url(#gradient)" strokeWidth="1" opacity="0.3">
                  <animate attributeName="r" values="6;12;6" dur="3s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite"/>
                </circle>

                {/* Define gradient */}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#000000'}} />
                    <stop offset="100%" style={{stopColor: '#333333'}} />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center ml-16 space-x-12">
              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsProductsDropdownOpen(true)}
                onMouseLeave={() => setIsProductsDropdownOpen(false)}
              >
                <button 
                  className="text-[15px] text-black/80 hover:text-[#8B5CF6] transition-colors flex items-center gap-1"
                >
                  Products
                  <svg 
                    width="12" 
                    height="12" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                {isProductsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-lg py-2 z-10 border border-gray-100">
                    {productItems.map((item) => (
                      <Link 
                        key={item.label}
                        href={item.href} 
                        className="block px-4 py-2 text-[15px] text-black/80 hover:bg-gray-50 hover:text-[#8B5CF6] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {menuItems.map((item) => (
                <Link 
                  key={item.label}
                  href={item.href} 
                  className="text-[15px] text-black/80 hover:text-[#8B5CF6] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop Demo Button */}
            <motion.button
              onClick={handleOpenDemo}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden md:inline-flex items-center justify-center rounded-lg text-[15px] font-light bg-black hover:bg-gray-900 text-white h-10 px-6 transition-colors shadow-lg"
            >
              Book a Demo
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                className={`transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          className="md:hidden overflow-hidden bg-white border-t border-gray-100"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Mobile Products Dropdown */}
            <div className="block">
              <button 
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                className="flex items-center justify-between w-full text-[15px] text-black/80 hover:text-[#8B5CF6] transition-colors py-2"
              >
                <span>Products</span>
                <svg 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              {isProductsDropdownOpen && (
                <div className="pl-4 mt-1 border-l-2 border-gray-100">
                  {productItems.map((item) => (
                    <Link 
                      key={item.label}
                      href={item.href} 
                      className="block py-2 text-[15px] text-black/80 hover:text-[#8B5CF6] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-[15px] text-black/80 hover:text-[#8B5CF6] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <motion.button
              onClick={() => {
                handleOpenDemo();
                setIsMobileMenuOpen(false);
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-center rounded-lg text-[15px] font-light bg-black hover:bg-gray-900 text-white h-10 px-6 transition-colors shadow-lg"
            >
              Book a Demo
            </motion.button>
          </div>
        </motion.div>
      </header>

      {/* Render appropriate dialog based on device type */}
      {deviceType === 'mobile' ? (
        <MobileBookDemoDialog 
          isOpen={isDemoOpen} 
          onClose={handleCloseDemo} 
        />
      ) : (
        <BookDemoDialog 
          isOpen={isDemoOpen} 
          onClose={handleCloseDemo} 
        />
      )}
    </>
  );
}