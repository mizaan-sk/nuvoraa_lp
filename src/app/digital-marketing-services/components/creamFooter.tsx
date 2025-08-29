"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from 'next/link';

interface FooterProps {
  topBorderImage: string;
}

const Footer: React.FC<FooterProps> = ({ topBorderImage }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="w-full bg-[#E0D9CD]">
      {/* Top Border as a separate element before the footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full relative z-10 bg-[#e9dbc8]"
      >
        <Image
          src={topBorderImage}
          alt="Top Decorative Border"
          width={1920}
          height={200}
          className="w-full h-auto select-none pointer-events-none"
        />
      </motion.div>
      
      <footer className="w-full bg-[#e9dbc8] text-black py-16 px-6 relative">
        {/* Main Content */}
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center mb-32 md:mb-40">
          <p className="text-sm md:text-lg mb-10 md:mb-20">(Contact us)</p>
          <h2
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight text-center"
          >
            SEE <br />
            WHAT <br />
            GROWTH <br />
            MEANS
          </h2>
          
          {/* Centered text below the heading */}
          <motion.div 
            className="relative inline-block mt-6 text-lg md:text-xl pb-1"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link href="/contactus">
            <span className="mt-10 text-sm">Let&apos;s make it happen!</span>
            </Link>
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-black"
              initial={{ width: "100%" }}
              animate={{ width: isHovered ? "30%" : "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        {/* Bottom Links */}
        <div className="absolute bottom-8 md:bottom-16 w-full left-0">
          <div className="w-full flex justify-between items-center">
            {/* Left Links - Touching left edge */}
            <div className="flex flex-col space-y-4 text-xs md:text-sm pl-4 md:pl-8">
              <Link href="/" className="cursor-pointer transition-colors hover:text-gray-600">Home</Link>
              <Link href="/digital-marketing-services" className="cursor-pointer transition-colors hover:text-gray-600">Services</Link>
              <Link href="/aboutus" className="cursor-pointer transition-colors hover:text-gray-600">About Us</Link>
              <Link href="/digital-marketing-blog" className="cursor-pointer transition-colors hover:text-gray-600">Blog</Link>
            </div>

            {/* Center Logo - Half inside/outside the footer */}
              <div className="flex justify-center items-center">
                        <div className="relative h-16 w-16 md:h-36 md:w-36 ">
                          <Image 
                            src="/logos/circleblack.png" 
                            alt="Nuvoraa Logo" 
                            fill
                            className="object-contain mt-8" 
                            sizes="(max-width: 768px) 64px, 144px"
                            priority
                          />
                        </div>
                      </div>

            {/* Right Links - Touching right edge */}
            <div className="flex flex-col space-y-4 text-xs md:text-sm text-right pr-4 md:pr-8">
              <a href="https://www.linkedin.com/company/nuvoraa-digital/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="cursor-pointer transition-colors hover:text-gray-600">LinkedIn</a>
              <a href="https://www.instagram.com/nuvoraadigital/" target="_blank" rel="noopener noreferrer" className="cursor-pointer transition-colors hover:text-gray-600">Instagram</a>
              <a href="https://www.facebook.com/people/Nuvoraa/61574570627675/" target="_blank" rel="nofollow noopener noreferrer" className="cursor-pointer transition-colors hover:text-gray-600">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;