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
      },
      {
        image: "/jewelry5.jpg",
        title: "Sapphire Pendant",
        price: "$1,499"
      },
      {
        image: "/jewelry6.jpg",
        title: "Ruby Bracelet",
        price: "$999"
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
      },
      {
        image: "/outfit5.jpg",
        title: "Maxi Dress",
        price: "$159"
      },
      {
        image: "/outfit6.jpg",
        title: "Cotton Jumpsuit",
        price: "$139"
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
      },
      {
        image: "/decor5.jpg",
        title: "Modern Clock",
        price: "$129"
      },
      {
        image: "/decor6.jpg",
        title: "Abstract Sculpture",
        price: "$249"
      }
    ]
  }
];

export function RightContentDisplay() {
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
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex-1 w-full max-w-2xl mx-auto lg:mx-0"
    >
      {/* Search Bar */}
      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div className="h-[60px] w-full bg-gradient-to-r from-gray-900 to-black rounded-2xl border border-gray-800 pl-14 pr-6 flex items-center shadow-lg shadow-black/20">
          <span className="text-[17px] font-light text-white">
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block w-0.5 h-5 bg-gray-600 ml-1"
            />
          </span>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-3 gap-4 px-1">
        <AnimatePresence mode="wait">
          {searchQueries[currentQueryIndex].products.slice(0, 6).map((product, index) => (
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
              className="group relative aspect-[0.85] bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 overflow-hidden hover:border-gray-600 transition-colors shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-black/50">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black via-black/90 to-transparent">
                <p className="text-white font-light text-[13px] mb-0.5 truncate">{product.title}</p>
                <p className="text-gray-400 font-medium text-[13px]">{product.price}</p>
              </div>
              <motion.div
                className="absolute inset-0 bg-gray-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
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
        className="mt-4 text-center"
      >
        <p className="text-gray-500 text-[13px] font-light">
          Showing {Math.min(6, searchQueries[currentQueryIndex].products.length)} results for &quot;{searchQueries[currentQueryIndex].text}&quot;
        </p>
      </motion.div>
    </motion.div>
  );
} 