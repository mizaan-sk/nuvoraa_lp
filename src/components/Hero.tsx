"use client"
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Added Image import
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [textHeight, setTextHeight] = useState(0);
  const textContainerRef = useRef<HTMLDivElement>(null);

  // Measure the text content height on mount and window resize
  useEffect(() => {
    const updateTextHeight = () => {
      if (textContainerRef.current) {
        setTextHeight(textContainerRef.current.clientHeight);
      }
    };

    // Initial measurement
    updateTextHeight();
    
    // Update on window resize
    window.addEventListener('resize', updateTextHeight);
    
    return () => {
      window.removeEventListener('resize', updateTextHeight);
    };
  }, []);

  return (
    <div className="w-full bg-black text-white py-8 md:py-16 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Logo - with different image for mobile */}
        <div className="flex justify-center items-center mb-0 mt-20 md:mt-40 overflow-hidden">
          <div className="relative w-full max-w-[95vw] md:max-w-[80vw]">
            <div style={{ position: 'relative', height: '30vh', minHeight: '150px', maxHeight: '300px', overflow: 'hidden' }} className="md:h-[40vh]">
              {/* Mobile logo (hidden on md and up) */}
              <div className="md:hidden block w-full h-full relative">
                <Image 
                  src="/logos/mlogo.jpg" 
                  alt="Nuvoraa Logo Mobile"
                  fill
                  className="object-contain"
                  sizes="95vw"
                  priority
                />
              </div>
              
              {/* Desktop logo (hidden on mobile) */}
              <div className="hidden md:block w-full h-full relative">
                <Image 
                  src="/logos/logo.jpg" 
                  alt="Nuvoraa Logo Desktop"
                  fill
                  className="object-cover"
                  style={{ objectPosition: '50% 50%' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid - with negative margin to pull it up closer to the logo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center ">
          {/* Video Container - replacing the white box */} 
          <div 
            className="w-full relative rounded-lg overflow-hidden"
            style={{ 
              height: textHeight > 0 ? `${textHeight}px` : 'auto',
              minHeight: '200px'
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/v1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Optional overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Text Content */}
          <div ref={textContainerRef} className="space-y-6 md:space-y-8">
            <p className="text-md sm:text-xl md:text-xl font-medium leading-relaxed px-2 md:px-0">
            At Nuvoraa, we don&apos;t follow trends—we create them. Powered by AI-driven intelligence, we craft data-backed strategies that Innovate. Automate. Accelerate. From predictive analytics to precision targeting, we optimize every touchpoint for maximum impact. No guesswork. No wasted effort. Just smarter marketing that delivers real results.
            </p>

            {/* CTA Button with line animation */}
            <div 
              className="px-2 md:px-0 inline-block cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Link href="/digital-marketing-services">
                <motion.div className="relative inline-block text-lg md:text-xl pb-1">
                  <span>Explore Our Services</span>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-white"
                    initial={{ width: "100%" }}
                    animate={{ width: isHovered ? "30%" : "100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;