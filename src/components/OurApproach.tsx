"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'

interface OurApproachProps {
  topBorderImage: string;
  bottomBorderImage: string;
}

const OurApproach: React.FC<OurApproachProps> = ({
  topBorderImage,
  bottomBorderImage
}) => {
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const circleAppear = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1, 
      transition: { 
        delay: 0.3, 
        duration: 0.5 
      } 
    }
  }

  // Reusable Section component for alternating layouts
  const Section = ({ 
    title, 
    description, 
    
    imageSrc, 
    imageAlt, 
    isReverse = false, 
    index 
  }: { 
    title: string, 
    description: string, 
    tags: string[], 
    imageSrc: string, 
    imageAlt: string, 
    isReverse?: boolean,
    index: number
  }) => {
    return (
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={`flex flex-col ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center  gap-8 mb-16`}
      >
        {/* Image column */}
        <motion.div variants={fadeInUp} className="w-full md:w-1/2 relative">
          <div className="relative overflow-visible p-2"> {/* Added padding and made overflow visible */}
            <motion.div
              variants={circleAppear}
              className={`absolute ${isReverse ? '-right-6' : '-left-6'} ${index % 4 === 0 || index % 4 === 3 ? '-top-6' : '-bottom-6'} w-14 h-14 rounded-full bg-black opacity-80 z-0`}
            />
            <Image 
              src={imageSrc} 
              alt={imageAlt} 
              className="w-full h-auto relative z-10 mix-blend-luminosity transition-all duration-300"
              width={800}
              height={600}
            />
          </div>
        </motion.div>
        
        {/* Content column */}
        <motion.div variants={fadeInUp} className="w-full overflow-hidden md:w-1/2">
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl  tracking-tight leading-tight mb-4  whitespace-pre-line"
            
          >
            {title}
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-stone-600 mb-6">
            {description}
          </motion.p>
          {/* <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span key={i} className="px-4 py-1 bg-rose-300 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </motion.div> */}
        </motion.div>
      </motion.div>
    );
  };

  // Section data for consistency
  const sections = [
    {
      title: "POWER HOUSE\nPERFORMANCE MARKETING",
      description: "We don’t just run campaigns—we build marketing machines that crush the competition. Backed by AI-driven precision, real-time optimization, and data-fueled strategies, we deliver unstoppable growth and maximum ROI. No fluff. No wasted spend. Just pure performance at full throttle.",
      tags: ["Growth Strategy", "Ad Campaigns", "CRO Specialists"],
      imageSrc: "/images/r1.png",
      imageAlt: "Power House Performance Marketing"
    },
    {
      title: "NO-MERCY SEO",
      description: "We don’t play fair—we play to win. While others chase rankings, we obliterate the competition with precision, power, and AI-driven strategy. Our SEO is ruthless, relentless, and built for total search engine domination. No shortcuts. No compromises. Just brutal efficiency that puts you at the top—and keeps you there.",
      tags: ["Research", "SEO"],
      imageSrc: "/images/r2.png",
      imageAlt: "No-Mercy SEO"
    },
    {
      title: "MAGNETIC SMM",
      description: "We don’t chase attention—we command it. With AI-driven precision and unstoppable strategy, we turn brands into irresistible forces that dominate every feed. Engage. Influence. Convert. Ignite movements, create die-hard followers, and turn engagement into unstoppable growth.",
      tags: ["Performance", "SMM"],
      imageSrc: "/images/r3.png",
      imageAlt: "Magnetic SMM"
    },
    {
      title: " WEBSITE\nDESIGN AND DEVELOPMENT",
      description: "We don’t just build websites—we create AI-powered digital powerhouses. Stunning design, flawless performance, and unrivaled impact. With intelligent automation, predictive analytics, and adaptive user experiences, we craft websites that think, learn, and evolve. From hyper-personalization to seamless automation, we harness the power of AI to give your brand an unbeatable edge. The future of web design is smart, and we make it happen.",
      tags: ["Web Development", "UI/UX", "CRO"],
      imageSrc: "/images/r4.png",
      imageAlt: "Digital Domination"
    },
    {
      title: "Jaw Dropping Video Production",
      description: "From high-energy brand films to immersive storytelling, we craft videos that demand attention and leave a lasting impression. Every frame is designed for maximum engagement, every second engineered for impact. Whether it's a powerful commercial, a viral campaign, or a sleek corporate production, we turn ideas into visual masterpieces that set you apart. When only the best will do, we deliver.",
      tags: ["Brand Strategy", "Identity", "Design"],
      imageSrc: "/images/r5.png",
      imageAlt: "Brand Warfare"
    }
  ];

  return (
    <section className="relative bg-[#E0D9CD] w-full">
      {/* Top border pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full relative z-10 bg-[#E0D9CD]"
      >
        <Image
          src={topBorderImage}
          alt="Top Decorative Border"
          width={1920}
          height={200}
          className="w-full h-auto mix-blend-multiply select-none pointer-events-none"
          style={{
            display: 'block',
            imageRendering: 'auto',
          }}
        />
      </motion.div>
      
      {/* Main content area */}
      <div className="w-full bg-[#E0D9CD] py-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-black text-xl mb-20"
          >
            (Our Expertise)
          </motion.p>
          
          {/* Render all sections with alternating layout */}
          {sections.map((section, index) => (
            <Section
              key={index}
              title={section.title}
              description={section.description}
              tags={section.tags}
              imageSrc={section.imageSrc}
              imageAlt={section.imageAlt}
              isReverse={index % 2 !== 0}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Bottom border pattern */}
      <motion.div
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
          style={{
            display: 'block',
            imageRendering: 'auto',
          }}
        />
      </motion.div>
    </section>
  );
};

export default OurApproach;