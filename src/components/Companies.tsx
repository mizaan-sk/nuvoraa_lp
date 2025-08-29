'use client';
import React from 'react';
import Image from 'next/image';

const Companies: React.FC = () => {
  const logos = [
    '/logos/outbrain.png',
    '/logos/taboola.svg',
    '/logos/mgid.png',
  ];

  return (
    <div className="w-full bg-black py-16 overflow-hidden">
      <div className="relative w-full">
        {/* Gradient Overlay - Left */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
        
        {/* Logo Slider - Modified for continuous flow */}
        <div className="flex space-x-16 sm:space-x-24 md:space-x-32 lg:space-x-48 whitespace-nowrap marquee">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div 
              key={`first-${index}`} 
              className="inline-flex items-center justify-center h-[75px] w-[150px] flex-shrink-0"
            >
              <Image
                src={logo}
                alt={`Company logo ${index + 1}`}
                width={150}
                height={75}
                className={`w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity ${
                  logo.includes('mgid') ? 'max-h-[65px]' : 'max-h-[50px]'
                }`}
              />
            </div>
          ))}
          
          {/* Duplicated sets for seamless loop */}
          {[...Array(4)].map((_, i) => (
            logos.map((logo, index) => (
              <div 
                key={`repeat-${i}-${index}`} 
                className="inline-flex items-center justify-center h-[75px] w-[150px] flex-shrink-0"
              >
                <Image
                  src={logo}
                  alt={`Company logo ${index + 1}`}
                  width={150}
                  height={75}
                  className={`w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity ${
                    logo.includes('mgid') ? 'max-h-[65px]' : 'max-h-[50px]'
                  }`}
                />
              </div>
            ))
          ))}
        </div>
        
        {/* Gradient Overlay - Right */}
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
      </div>

      {/* Add CSS for marquee animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        
        .marquee {
          animation: marquee 5s linear infinite;
          will-change: transform;
          display: flex;
          backface-visibility: hidden;
          perspective: 1000px;
          transform: translateZ(0);
        }

        @media (prefers-reduced-motion: no-preference) {
          .marquee {
            animation-timing-function: linear;
          }
        }
      `}</style>
    </div>
  );
};

export default Companies;