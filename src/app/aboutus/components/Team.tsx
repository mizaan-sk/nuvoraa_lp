"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, ArrowRight } from 'lucide-react';

interface TeamProps {
  topBorderImage: string;
  bottomBorderImage: string;
}

interface TeamMemberCardProps {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
  linkedinUrl: string;  // Add LinkedIn URL property
}

const MotionDiv = motion.div;

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  title,
  description,
  imageSrc,
  linkedinUrl,  // Add LinkedIn URL parameter
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const imageVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    },
    rest: { 
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="w-full h-[450px] perspective-1000 group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <MotionDiv
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of Card */}
        <div className="absolute w-full h-full backface-hidden border border-[#B15C41] border-dashed p-6 flex flex-col justify-between bg-gradient-to-b from-[#E0D9CD] to-[#d5cfc2]">
          {/* Corner Squares with animation */}
          <motion.div 
            className="absolute top-0 left-0 w-3 h-3 bg-[#B15C41] transform -translate-x-1/2 -translate-y-1/2" 
            animate={{ rotate: isHovered ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="absolute top-0 right-0 w-3 h-3 bg-[#B15C41] transform translate-x-1/2 -translate-y-1/2" 
            animate={{ rotate: isHovered ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-3 h-3 bg-[#B15C41] transform -translate-x-1/2 translate-y-1/2" 
            animate={{ rotate: isHovered ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-3 h-3 bg-[#B15C41] transform translate-x-1/2 translate-y-1/2" 
            animate={{ rotate: isHovered ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          />

          <div className="mb-4 flex justify-center">
            <div className="w-40 h-40 mb-3 rounded-full overflow-hidden shadow-lg">
              <motion.div
                variants={imageVariants}
                animate={isHovered ? "hover" : "rest"}
              >
                <Image
                  src={imageSrc}
                  alt={`${name} photo`}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl uppercase tracking-wide text-center">
              {name}
            </h3>
            <h4 className="text-lg text-[#B15C41] uppercase tracking-wide text-center">
              {title}
            </h4>
            
            <div className="flex items-center justify-between mt-4">
              <motion.div 
                className="flex items-center text-sm text-[#B15C41]"
                animate={{ opacity: isHovered ? 1 : 0.7 }}
                transition={{ duration: 0.3 }}
              >
                <span>View Profile</span>
                <motion.div
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight size={16} />
                </motion.div>
              </motion.div>

              <motion.button 
                className="p-1.5 bg-[#B15C41] text-white rounded-full hover:bg-[#9a4d36] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(linkedinUrl, '_blank');
                }}
              >
                <Linkedin size={16} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div
          className="absolute w-full h-full backface-hidden border border-[#B15C41] border-dashed p-6 flex flex-col justify-between bg-gradient-to-b from-[#E0D9CD] to-[#d5cfc2]"
          style={{ transform: "rotateY(180deg)" }}
        >
          {/* Corner Squares */}
          <div className="absolute top-0 left-0 w-3 h-3 bg-[#B15C41] transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-0 right-0 w-3 h-3 bg-[#B15C41] transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-3 h-3 bg-[#B15C41] transform -translate-x-1/2 translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#B15C41] transform translate-x-1/2 translate-y-1/2" />

          <div>
            <h3 className="text-xl  mb-2 uppercase tracking-wide text-center">
              {name}
            </h3>
            <div className="max-h-[280px] overflow-y-auto pr-2 styled-scrollbar">
              <p className="text-sm text-stone-700 leading-relaxed">{description}</p>
            </div>
          </div>
          
          <div className="mt-4 flex justify-center">
            <motion.button 
              className="p-2 bg-[#B15C41] text-white rounded-full hover:bg-[#9a4d36] transition-colors flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                window.open(linkedinUrl, '_blank');
              }}
            >
              <Linkedin size={18} />
            </motion.button>
          </div>
        </div>
      </MotionDiv>
    </motion.div>
  );
};

const Team: React.FC<TeamProps> = ({ topBorderImage, bottomBorderImage }) => {
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
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const teamData = [
    {
      name: "Rahul Goyal",
      title: "Founder | CEO",
      description:
        "A seasoned digital marketing leader, Rahul has built and scaled Realatte to a 500-member strong team, serving over 200 clients in the real estate sector. Under his leadership, the agency has become a trusted partner for real estate businesses, delivering innovative and results-driven marketing solutions that have transformed client success. With a strong foundation and a wealth of experience, Rahul is now turning his focus to a new journey—launching Nuvoraa to provide cutting-edge marketing solutions to businesses outside of the real estate industry.",
      imageSrc: "/team/rahul.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/rahulgoyal1824/",
    },
    {
      name: "Nisha Rathod",
      title: "Chief Strategist",
      description:
        "With a keen eye for detail and a passion for storytelling, Nisha Rathod has excelled in crafting impactful strategies and content for multiple brands across various industries. Known for her innovative approach, Nisha has consistently delivered creative solutions that elevate brand visibility and drive meaningful customer engagement. Now, as the chief strategiest of Nuvoraa, she brings her expertise in strategy and content creation to help businesses across sectors unlock their full digital potential.",
      imageSrc: "/team/nisha.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/nisha-rathod93/",
    },
    {
      name: "John Thomas",
      title: "  Chief Technology Officer",
      description:
        "With 15 years of experience in developing advanced technology solutions, John Thomas specializes in AI-driven systems across multiple platforms. His expertise in integrating cutting-edge AI technologies to solve complex challenges has made him a leader in digital transformation. At Nuvoraa, John leverages his deep knowledge of AI to create innovative, scalable solutions that drive efficiency and business growth.",
      imageSrc: "/team/john.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/john-thomas-b988a332/",
    },
    {
      name: "Badal Sisodia",
      title: "Lead Performance Strategist ",
      description:
        "With a decade of experience in performance marketing, Badal Sisodiya leads the performance marketing vertical at Nuvoraa, bringing extensive expertise across multiple industries. Known for her data-driven approach and strategic mindset, Badal excels at optimizing campaigns to deliver exceptional results and maximize ROI. Her deep understanding of digital marketing ecosystems, combined with his ability to leverage cutting-edge tools and platforms, has helped businesses scale effectively and achieve sustained growth. ",
      imageSrc: "/team/badal.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/badal-sisodia/",
    },
  ];

  return (
    <section id="2" className="relative bg-[#E0D9CD] w-full">
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
        viewport={{ once: true, amount: 0.3 }}
        className="w-full bg-[#E0D9CD] py-20 px-6 md:px-12 lg:px-20 relative z-20 max-w-7xl mx-auto"
      >
        {/* Section Title with animated elements */}
        <motion.div variants={headingVariants} className="mb-16 flex flex-col items-center">
          <motion.div 
            className="w-16 h-1 bg-[#B15C41] mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.h2 
            className="text-3xl md:text-6xl  text-black tracking-tight uppercase mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Our Team
          </motion.h2>
          <motion.p 
            className="text-center text-lg text-stone-700 max-w-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Meet the experts behind our innovative solutions
          </motion.p>
        </motion.div>

        {/* Team Grid - Modified to ensure 4 cards in one row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {teamData.map((member, index) => (
            <motion.div 
              variants={revealVariants} 
              key={`member-${index}`}
              className="w-full"
            >
              <TeamMemberCard {...member} />
            </motion.div>
          ))}
        </div>
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

      <style jsx global>{`
        .styled-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .styled-scrollbar::-webkit-scrollbar-track {
          background: rgba(177, 92, 65, 0.1);
          border-radius: 10px;
        }
        .styled-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(177, 92, 65, 0.6);
          border-radius: 10px;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default Team;