'use client';

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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

export function RightContentDisplayCAP() {
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
      className="w-full max-w-full mx-auto flex flex-col items-center"
    >
      {/* Dashboard Image with Ring Border */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative mt-4 p-5 rounded-2xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 ring-2 ring-purple-500/20 backdrop-blur-sm shadow-xl mx-auto w-full max-w-[1200px]"
      >
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <div className="w-full">
            <Image
              src="/dashboard.png"
              alt="AI Analytics Dashboard"
              width={1600}
              height={900}
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div>
        
        {/* Highlight accent elements */}
        <div className="absolute -top-3 -left-3 h-6 w-6 rounded-full bg-purple-500/50 blur-sm"></div>
        <div className="absolute -bottom-3 -right-3 h-6 w-6 rounded-full bg-indigo-500/50 blur-sm"></div>
      </motion.div>
      
      {/* Caption */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="mt-6 text-center"
      >
        <p className="text-gray-500 text-[17px] font-light">
          AI-powered analytics and insights dashboard
        </p>
      </motion.div>
    </motion.div>
  );
} 