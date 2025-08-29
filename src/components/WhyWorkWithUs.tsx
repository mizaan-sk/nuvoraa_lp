"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface WhyWorkWithUsProps {
  topBorderImage: string;
  bottomBorderImage: string;
}

const MotionDiv = motion.div;

const WhyWorkWithUs: React.FC<WhyWorkWithUsProps> = ({
  topBorderImage,
  bottomBorderImage,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const revealVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="relative bg-[#E0D9CD] w-full">
      {/* Top Border */}
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full relative z-10 bg-[#E0D9CD]"
      >
        <Image
          src={topBorderImage}
          alt="Top Decorative Border"
          width={1920}
          height={200}
          className="w-full h-auto mix-blend-multiply select-none pointer-events-none"
        />
      </MotionDiv>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="w-full bg-[#E0D9CD] py-16 px-6 md:px-12 lg:px-20 relative z-20 max-w-5xl mx-auto"
      >
          {/* Section Label */}
          <p
            
            className="text-center text-black text-xl  font-medium mb-20 font-peckham"
            style={{
              textShadow: '1px 1px 0px rgba(0,0,0,0.1)',
              letterSpacing: '0.02em',
            }}
        >
          (Why Work with us?)
        </p>
    
        {/* Bold Statement */}
        <motion.div variants={revealVariants} className="mb-10">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl  text-center tracking-tight leading-tight"
            
          >
            WE DONT COMPETE
            <br />
            WE DOMINATE
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div variants={revealVariants} className="mb-12">
          <p className="text-center text-stone-600 max-w-3xl mx-auto leading-relaxed">

          We go beyond traditional marketing by leveraging predictive analytics, machine learning, and intelligent automation to outmaneuver the competition. Our AI-driven approach optimizes campaigns in real time, delivering hyper-personalized messaging, laser-precise targeting, and data-backed decisions that maximize impact.
          </p>
        </motion.div>

        {/* CTA with animated underline */}
        <motion.div 
          variants={revealVariants} 
          className="text-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link href="/aboutus">
            <motion.div className="relative inline-block text-lg pb-1">
              <span>Read Our Story</span>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-black"
                initial={{ width: "100%" }}
                animate={{ width: isHovered ? "30%" : "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom Border */}
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full relative z-10 bg-[#E0D9CD]"
      >
        <Image
          src={bottomBorderImage}
          alt="Bottom Decorative Border"
          width={1920}
          height={200}
          className="w-full h-auto mix-blend-multiply select-none pointer-events-none"
        />
      </MotionDiv>
    </section>
  );
};

export default WhyWorkWithUs;
