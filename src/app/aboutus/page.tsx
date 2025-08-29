"use client"
import React from 'react';
import Values from './components/values';
import OurValues from './components/ourValues';
import Team from './components/Team'
import Footer from '@/components/Footer';

import Image from 'next/image';
import RingCursor from '@/components/RingCursor';

export default function AIMarketingHero() {
  return (
    <>
      <section id='1' className="bg-black text-[#EDE6DA] min-h-screen flex items-center justify-center p-6 overflow-hidden">
      <RingCursor />
        <div className="max-w-6xl w-full mx-auto mt-20 md:mt-40 text-center px-2 md:px-4 pt-10 md:pt-20 pb-10">
          <div className="space-y-2 mb-10">
            <h1 className="text-[8vmin] md:text-[10vmin] leading-[0.9] overflow-hidden">NO ASSUMPTIONS,</h1>
            <h1 className="text-[8vmin] md:text-[10vmin] leading-[1.1] mx-auto overflow-hidden">
              no compromise
            </h1>
            <h1 className="text-[8vmin] md:text-[10vmin] leading-[0.9] overflow-hidden">just</h1>
            <h1 className="text-[8vmin] md:text-[10vmin] leading-[1.1] mx-auto text-[#B15C41] overflow-hidden">
              ai-powered
            </h1>
            <h2 className="text-[8vmin] md:text-[10vmin] leading-[1.1] overflow-hidden">
              DOMINANCE
            </h2>
          </div>
          
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="w-32 md:w-48 lg:w-120">
              <Image
                src="/images/b1.png" 
                alt="AI brain profile" 
                width={500}
                height={500}
                className="w-full opacity-90 transform rotate-6 hover:rotate-0 transition-transform duration-300"
                priority
              />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row text-[#E0D9CD] md:justify-between mt-16 md:mt-40 text-left max-w-6xl mx-auto px-2">
            <div className="w-full md:w-24 mb-4 md:mb-0">
              <button className="text-md mb-5 md:text-lg text-[#E0D9CD] transition">
                (About Us)
              </button>
            </div>
            <div className="w-full max-w-full md:max-w-xl lg:max-w-2xl">
              <p className="text-lg md:text-lg lg:text-2xl text-[#E0D9CD] hyphens-auto">
              We don&apos;t gamble with marketing—we weaponize AI to deliver precision, performance, and dominance. Every strategy is fueled by real-time data, predictive algorithms, and machine-learning intelligence, ensuring your brand doesn&apos;t just compete—it leads. From hyper-targeted campaigns to automated growth engines, we create marketing that evolves, adapts, and outperforms at every turn.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values section - moved outside for full-width display */}
      <Values 
        topBorderImage="/pattern.svg" 
        bottomBorderImage="/pattern2.svg" 
      />

      <OurValues/>

      <Team       
        topBorderImage="/pattern.svg" 
        bottomBorderImage="/pattern2.svg"  
      />

      <Footer/>
    </>
  );
}