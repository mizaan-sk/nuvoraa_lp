"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface SolutionsProps {
  topBorderImage?: string;
  bottomBorderImage?: string;
}

interface SolutionCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const MotionDiv = motion.div;

const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, imageSrc }) => {
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

  return (
    <motion.div
      variants={cardVariants}
      className="border border-black border-dashed p-8 flex flex-col justify-between h-full relative"
    >
      {/* Corner squares */}
      <div className="absolute top-0 left-0 w-3 h-3 bg-[#B15C41] transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-3 h-3 bg-[#B15C41] transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 bg-[#B15C41] transform -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#B15C41] transform translate-x-1/2 translate-y-1/2"></div>
      
      {/* Image at the top of the card */}
      <div className="mb-4 flex justify-center">
        <div className="w-24 h-24 mb-4">
          <Image 
            src={imageSrc} 
            alt={`${title} icon`}
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      
      <h3 className="text-xl mb-4 uppercase tracking-wide text-center">
        {title.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i !== title.split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}
      </h3>
      
      <p className="text-sm text-center text-stone-700">
        {description}
      </p>
    </motion.div>
  );
};

const Solutions: React.FC<SolutionsProps> = ({
  topBorderImage = "",
  bottomBorderImage = "",
}) => {
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

  const solutionsData = [
    {
      title: "PERSUASIVE CONTENT",
      description: "Craft compelling, emotion-triggering content that captivates audiences, builds trust, and drives action.",
      imageSrc: "/images/a5.jpg"
    },
    {
      title: "PREDICTIVE\n AI",
      description: "Leverage data-driven intelligence to anticipate trends, optimize decisions, and stay ahead of the competition.",
      imageSrc: "/images/a1.jpg"
    },
    {
      title: "OMNICHANNEL APPROACH",
      description: "Optimize customer engagement with a cohesive digital strategy that connects every interaction effortlessly.",
      imageSrc: "/images/a2.png"
    },
    {
      title: "TRANSFORMATIVE GROWTH",
      description: "Harnessing cutting-edge strategies to drive continuous evolution, adaptability, and success.",
      imageSrc: "/images/a6.jpg"
    },
    {
      title: "Human-Centered Design",
      description: "Craft digital experiences rooted in empathy and user behavior, ensuring every touchpoint—is intuitive, impactful, and conversion-focused.",
      imageSrc: "/images/a0.jpg"
    },
    {
      title: "Agile \nFramework",
      description: "Flexible, purpose-led approach that drives continuous innovation, rapid adaptation, and lasting impact across all digital touchpoints.",
      imageSrc: "/images/a4.png"
    }
  ];

  return (
    <section id="2" className="relative bg-[#E0D9CD] w-full ">
      {topBorderImage && (
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
      )}

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full bg-[#E0D9CD] pt-8 px-6 md:px-12 lg:px-20 relative z-20 max-w-7xl mx-auto"
      >
        {/* Section Title - Aligned to the left */}
        <motion.div variants={revealVariants} className="mb-16 text-left">
            <p className='mb-5 text-center text-md'>(Our Approach)</p>
          <h2 className="text-4xl md:text-4xl lg:text-7xl text-black tracking-tight uppercase leading-tight">
            WHY OUR<br />
            PARTNERS <br/> LIKE US
          </h2>
        </motion.div>

        {/* Solutions Grid */}
        <div className="space-y-8">
          {/* Top row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutionsData.slice(0, 3).map((card, index) => (
              <motion.div variants={revealVariants} key={`card-top-${index}`}>
                <SolutionCard
                  title={card.title}
                  description={card.description}
                  imageSrc={card.imageSrc}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Bottom row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {solutionsData.slice(3, 6).map((card, index) => (
              <motion.div variants={revealVariants} key={`card-bottom-${index}`}>
                <SolutionCard
                  title={card.title}
                  description={card.description}
                  imageSrc={card.imageSrc}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {bottomBorderImage && (
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
      )}
    </section>
  );
};

export default Solutions;