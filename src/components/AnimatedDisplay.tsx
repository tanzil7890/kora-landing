'use client';

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const searchQueries = [
  {
    text: "jewelry for dinner party",
    products: [
      {
        image: "/jewelry1.jpg",
        title: "Diamond Necklace",
        price: "$1,299"
      },
      {
        image: "/jewelry2.jpg",
        title: "Pearl Earrings",
        price: "$899"
      },
      {
        image: "/jewelry3.jpg",
        title: "Gold Bracelet",
        price: "$749"
      },
      {
        image: "/jewelry4.jpg",
        title: "Silver Ring",
        price: "$499"
      }
    ]
  },
  {
    text: "summer outfits trending",
    products: [
      {
        image: "/outfit1.jpg",
        title: "Floral Dress",
        price: "$129"
      },
      {
        image: "/outfit2.jpg",
        title: "Linen Set",
        price: "$189"
      },
      {
        image: "/outfit3.jpg",
        title: "Beach Wear",
        price: "$99"
      },
      {
        image: "/outfit4.jpg",
        title: "Summer Hat",
        price: "$59"
      }
    ]
  },
  {
    text: "minimalist home decor",
    products: [
      {
        image: "/decor1.jpg",
        title: "Ceramic Vase",
        price: "$89"
      },
      {
        image: "/decor2.jpg",
        title: "Wall Art",
        price: "$199"
      },
      {
        image: "/decor3.jpg",
        title: "Table Lamp",
        price: "$159"
      },
      {
        image: "/decor4.jpg",
        title: "Plant Stand",
        price: "$79"
      }
    ]
  }
];

export function AnimatedDisplay() {
  const [currentQueryIndex, setCurrentQueryIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentQuery = searchQueries[currentQueryIndex].text;

    if (isTyping) {
      if (displayedText.length < currentQuery.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentQuery.slice(0, displayedText.length + 1));
        }, 75); // Faster typing
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2500); // Longer display time
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 40); // Faster deletion
      } else {
        timeout = setTimeout(() => {
          setCurrentQueryIndex((prev) => (prev + 1) % searchQueries.length);
          setIsTyping(true);
        }, 800); // Longer pause between queries
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, currentQueryIndex, isTyping]);

  return (
    <div className="mt-32 max-w-5xl mx-auto">
      {/* Search Bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-[#8B5CF6]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div className="h-16 w-full bg-[#1A1225] rounded-2xl border border-[#2D1967] pl-12 pr-4 flex items-center shadow-lg shadow-[#2D1967]/10">
          <span className="text-[16px] font-light text-white">
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block w-0.5 h-5 bg-[#8B5CF6] ml-1"
            />
          </span>
        </div>
      </div>

      {/* Products Grid */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        <AnimatePresence mode="wait">
          {searchQueries[currentQueryIndex].products.map((product, index) => (
            <motion.div
              key={`${currentQueryIndex}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="group relative aspect-[4/5] bg-[#1A1225] rounded-2xl border border-[#2D1967] overflow-hidden hover:border-[#8B5CF6] transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2D1967] to-[#1A1225] animate-pulse">
                {/* Placeholder for actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2D1967]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1A1225] to-transparent">
                <p className="text-white font-light text-sm mb-1">{product.title}</p>
                <p className="text-[#8B5CF6] font-medium text-sm">{product.price}</p>
              </div>
              <motion.div
                className="absolute inset-0 bg-[#8B5CF6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Search Results Count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mt-6 text-center"
      >
        <p className="text-gray-400/60 text-sm font-light">
          Showing {searchQueries[currentQueryIndex].products.length} results for &quot;{searchQueries[currentQueryIndex].text}&quot;
        </p>
      </motion.div>

      <p className="text-sm text-gray-600">Don&apos;t see what you&apos;re looking for? Try our &quot;Advanced Search&quot; or &quot;Browse Categories&quot;</p>
    </div>
  );
} 