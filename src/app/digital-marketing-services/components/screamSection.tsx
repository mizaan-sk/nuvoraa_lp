"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Types for our service items
interface ServiceCard {
  title: string;
  description: string;
  iconSrc?: string; // Legacy support
  image?: string; // New image property
}

interface MarketingServicesProps {
  mainTitle: string;
  subTitle?: string;
  backgroundColor: string;
  textColor: string;
  topBorderImage?: string;
  bottomBorderImage?: string;
  services: ServiceCard[];
  showKnowMore?: boolean; // New prop to control Know More button visibility
  knowMoreLink?: string; // New prop for the Know More button link
  knowMoreText?: string; // New prop for custom button text
}

const MotionDiv = motion.div;

const MarketingServices: React.FC<MarketingServicesProps> = ({
  mainTitle,
  subTitle,
  backgroundColor,
  textColor,
  topBorderImage,
  bottomBorderImage,
  services,
  showKnowMore = false,
  knowMoreLink = "#",
  knowMoreText = "Know More"
}) => {
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Ref for the scrollable container
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  // Auto-scrolling effect for mobile view
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || window.innerWidth >= 768) return; // Only apply on mobile
    
    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Pixels per frame
    
    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed;
        
        // Reset when reaching the end (with some buffer)
        if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
        animationFrameId = requestAnimationFrame(scroll);
      }
    };
    
    // Start scrolling
    animationFrameId = requestAnimationFrame(scroll);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused, services]);

  return (
    <section className={`relative  w-full ${backgroundColor}`}>
      {/* Top Border Image (if provided) */}
      {topBorderImage && (
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`w-full relative z-10 ${backgroundColor}`}
        >
          <Image
            src={topBorderImage}
            alt="Top Decorative Border"
            width={1920}
            height={200}
            className="w-full h-auto mix-blend-multiply select-none pointer-events-none"
          />
        </MotionDiv>
      )}

      {/* Content */}
      <div className={`w-full relative z-20 max-w-7xl mx-auto ${backgroundColor} ${
        backgroundColor === 'bg-black' 
          ? 'py-4 md:py-8 px-4 sm:px-6 md:px-12 lg:px-20' 
          : 'py-10 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20'
      }`}>
        {/* Main Title */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-8 md:mb-16"
        >
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight ${textColor} font-peckham`}>
            {mainTitle}
          </h2>
          
          {subTitle && (
            <p className={`mt-2 md:mt-4 text-lg md:text-xl ${textColor} opacity-80`}>
              {subTitle}
            </p>
          )}
        </motion.div>

        {/* Services Grid - Desktop view and Scrollable on Mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6"
        >
          {/* Desktop view rendering */}
          {services.map((service, index) => (
            <motion.div
              key={`desktop-${index}`}
              variants={itemVariants}
              className="flex flex-col"
            >
              {/* Image box */}
              <div className="w-24 h-24 mb-6 overflow-hidden rounded-md relative">
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={`${service.title} image`}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                ) : service.iconSrc ? (
                  <Image
                    src={service.iconSrc}
                    alt={`${service.title} icon`}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="bg-gray-200 w-full h-full"></div>
                )}
              </div>
              
              {/* Service Title */}
              <h3 className={`text-xl mb-3 uppercase tracking-wide ${textColor}`}>
                {service.title.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i !== service.title.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h3>
              
              {/* Service Description */}
              <p className={`${textColor} opacity-80 text-sm leading-relaxed`}>
                {service.description}
              </p>
            </motion.div>
          ))}
          
          {/* Know More Button - Desktop */}
          {showKnowMore && (
            <motion.div
              variants={itemVariants}
              className="col-span-full flex justify-center mt-8"
            >
              <Link
                href={knowMoreLink}
                className={`group relative inline-flex items-center justify-center md:px-5 md:py-[10px] px-4 py-2 overflow-hidden font-peckham text-sm font-medium transition-all duration-300 ease-in-out ${
                  backgroundColor === 'bg-black' 
                    ? 'bg-[#E0D9CD] text-black hover:bg-[#d4cbbf] hover:shadow-lg' 
                    : 'bg-black text-[#E0D9CD] hover:bg-gray-800 hover:shadow-lg'
                } rounded-full uppercase tracking-widest hover:scale-105 transform hover:-translate-y-1 shadow-md`}
              >
                <span className="relative z-10 flex items-center">
                  {knowMoreText}
                  <svg 
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                  backgroundColor === 'bg-black' 
                    ? 'bg-gradient-to-r from-[#E0D9CD] to-[#d4cbbf] opacity-0 group-hover:opacity-100' 
                    : 'bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100'
                }`}></div>
              </Link>
            </motion.div>
          )}
        </motion.div>

        {/* Mobile Scrollable View */}
        <div 
          ref={scrollContainerRef}
          className="md:hidden overflow-x-auto pb-6 -mx-4 px-4" 
          style={{ 
            msOverflowStyle: 'none', /* IE and Edge */
            scrollbarWidth: 'none',  /* Firefox */
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none; /* Chrome, Safari and Opera */
            }
          `}</style>
          <div className="flex space-x-6" style={{ minWidth: 'max-content' }}>
            {services.map((service, index) => (
              <motion.div
                key={`mobile-${index}`}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col w-[260px] flex-shrink-0"
              >
                {/* Image box */}
                <div className="w-24 h-24 mb-4 overflow-hidden rounded-md relative">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={`${service.title} image`}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  ) : service.iconSrc ? (
                    <Image
                      src={service.iconSrc}
                      alt={`${service.title} icon`}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="bg-gray-200 w-full h-full"></div>
                  )}
                </div>
                
                {/* Service Title */}
                <h3 className={`text-xl mb-3 uppercase tracking-wide ${textColor}`}>
                  {service.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i !== service.title.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                
                {/* Service Description */}
                <p className={`${textColor} opacity-80 text-sm leading-relaxed`}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Know More Button - Mobile */}
        {showKnowMore && (
          <div className="md:hidden flex items-center justify-center mt-8">
            <Link
              href={knowMoreLink}
              className={`group relative inline-flex items-center justify-center md:px-6 md:py-3 py-2 px-4 overflow-hidden font-peckham text-sm font-medium transition-all duration-300 ease-in-out ${
                backgroundColor === 'bg-black' 
                  ? 'bg-[#E0D9CD] text-black hover:bg-[#d4cbbf] hover:shadow-lg' 
                  : 'bg-black text-[#E0D9CD] hover:bg-gray-800 hover:shadow-lg'
              } rounded-full uppercase tracking-widest hover:scale-105 transform hover:-translate-y-1 shadow-md active:scale-95`}
            >
              <span className="relative z-10 flex items-center">
                {knowMoreText}
                <svg 
                  className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                backgroundColor === 'bg-black' 
                  ? 'bg-gradient-to-r from-[#E0D9CD] to-[#d4cbbf] opacity-0 group-hover:opacity-100' 
                  : 'bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100'
              }`}></div>
            </Link>
          </div>
        )}

      </div>

      {/* Bottom Border Image (if provided) */}
      {bottomBorderImage && (
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`w-full relative z-10 ${backgroundColor}`}
        >
          <Image
            src={bottomBorderImage}
            alt="Bottom Decorative Border"
            width={1920}
            height={200}
            className="w-full h-auto mix-blend-multiply select-none pointer-events-none"
          />
        </MotionDiv>
      )}
    </section>
  );
};

export default MarketingServices;