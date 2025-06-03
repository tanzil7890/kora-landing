'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, createContext, useContext } from "react";
import { useDeviceType } from "@/hooks/useDeviceType";
import { BookDemoDialog } from "./BookDemoDialog";
import { MobileBookDemoDialog } from "./MobileBookDemoDialog";
import Image from "next/image";

// Create context for user type
export const UserTypeContext = createContext<{
  userType: 'student' | 'company';
  setUserType: (type: 'student' | 'company') => void;
}>({
  userType: 'company',
  setUserType: () => {},
});

export function UserTypeProvider({ children }: { children: React.ReactNode }) {
  const [userType, setUserType] = useState<'student' | 'company'>('company');
  
  return (
    <UserTypeContext.Provider value={{ userType, setUserType }}>
      {children}
    </UserTypeContext.Provider>
  );
}

export function useUserType() {
  return useContext(UserTypeContext);
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const { userType, setUserType } = useUserType();
  const deviceType = useDeviceType();

  const menuItems = [
    /* Removed Products from standard menu items as we're handling it separately */
    { href: "/#why-us", label: "Interviews" },
    /* { href: "/customer-activation", label: "Kora Customer Activation Platform" }, */
    { href: "/#what-we-do", label: "Features" },
    { href: "/#features", label: "Find Candidates" },
    /* { href: "/#testimonials", label: "Testimonials" }, */
    { href: "/#pricing", label: "Solutions" },
  ];

  const productItems = [
    { href: "/#products", label: "Kora Search" },
    { href: "/customer-activation", label: "Kora Customer Activation Platform" },
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
        <nav className="container mx-auto px-4 sm:px-8 h-[55px] flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold flex items-center">
              {/* Using the new animated Kora logo */}
              <Image
                src="/KoraAnimated.svg"
                alt="Kora AI Logo"
                width={32}
                height={32}
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
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center ml-16 space-x-12">
              {/* Products Dropdown */}
              {/* <div 
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
              </div> */}

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

          <div className="flex items-center gap-6">
            {/* User Type Toggle Switch */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setUserType('student')}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  userType === 'student'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Students
              </button>
              <button
                onClick={() => setUserType('company')}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  userType === 'company'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Companies
              </button>
            </div>

            {/* Desktop Demo Button */}
            <motion.button
              onClick={handleOpenDemo}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden md:inline-flex items-center justify-center rounded-lg text-[15px] font-light bg-[#f88e4c] hover:bg-gray-900 text-white h-9 px-6 transition-colors shadow-lg"
            >
              {userType === 'student' ? 'Apply Now' : 'Start Hiring'}
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
            {/* Mobile User Type Toggle */}
            <div className="flex items-center bg-gray-100 rounded-full p-1 mb-4">
              <button
                onClick={() => setUserType('student')}
                className={`flex-1 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  userType === 'student'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Students
              </button>
              <button
                onClick={() => setUserType('company')}
                className={`flex-1 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  userType === 'company'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Companies
              </button>
            </div>

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
              {userType === 'student' ? 'Apply Now' : 'Start Hiring'}
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