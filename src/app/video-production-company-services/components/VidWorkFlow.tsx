"use client";

import type React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MarketingStep from "@/app/performance-marketing-agency/components/MarketingStep";

// Main SeoWorkflow Component
const VidWorkflow: React.FC = () => {
  // Animation variants for the cards
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for the heading
  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="2">
      <div className="bg-[#E0D9CD]">
        {/* Top Pattern Background - Optimized */}
        <div className="relative w-full h-[200px]">
          <Image
            alt="pattern image"
            src="/pattern.png"
            fill
            className="object-cover"
            priority={false} // Changed from true since it's decorative
            sizes="100vw"
            quality={60} // Reduced quality for decorative pattern
          />
        </div>
    
        <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
          {/* Animated Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-black tracking-tight uppercase font-peckham py-0 md:py-10"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
Our Video Production Workflow 
          </motion.h2>

          <main className="pb-0 md:pb-5 lg:pb-10">
            {/* Step 1 - First visible step gets priority */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <MarketingStep
                title=" Brief & Ideation "
                alt="Creative video production services for product marketing"
                image="/images/VidProd2.webp"
                content={
                  <>
                    <p>We start by understanding :</p>
                      <ul className="list-none mt-2 space-y-1">
                      {[
                        "Your Brand",
                        "Your Objectives",
                        "Your Target Audience",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start text-stone-600 font-bold"
                        >
                          <span className="mr-2 text-stone-600">☑</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p> Our team discusses your vision, goals, and the message you want to convey. This helps us create a strong creative brief that becomes the foundation for your project, ensuring our video production services align perfectly with your brand identity and campaign objectives.</p>
                  </>
                }
              />
            </motion.div>

            {/* Step 2 */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <MarketingStep
                alt="Behind the scenes of a video production company team"
                title="Creative Concept & Storyboard"
                image="/images/VidProd3.webp"
                reverse
                content={
                  <>
                    <p>
                     Once we understand your needs, we develop multiple creative concepts and scripts for you to choose from. Our team creates compelling scripts that capture attention, drive engagement, and align with your brand. This step ensures the story resonates with viewers while being structured for high impact.
                    </p>
                  </>
                }
              />
            </motion.div>

            {/* Step 3 */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <MarketingStep
                title="Pre-Production Planning"
                alt="High-quality video production services for social media ads"
                image="/images/VidProd4.webp"
                content={
                  <>
                    <p>Our video production company believes in planning every shot to perfection. We create :</p>
                      <ul className="list-none mt-2 space-y-1">
                      {[
                        "Detailed Storyboards",
                        "Plan Camera Angles",
                        "Finalise Locations",
                        "Casting",
                        "Props",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start text-stone-600 font-bold"
                        >
                          <span className="mr-2 text-stone-600">☑</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p> Pre-production is where we ensure everything is ready for a smooth and efficient shoot.</p>
                  </>
                }
              />
            </motion.div>

            {/* Step 4 */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <MarketingStep
                alt="Filmmaker setting up lights at video production company studio"
                title="Filming & Production"
                image="/images/VidProd5.webp"
                reverse
                content={
                  <>
                    <p>
                     Our crew uses high-end cameras, lighting equipment, and audio gear to bring your story to life. Whether it’s a corporate film, product video or social media reel, our video production services guarantee professional-quality visuals that reflect your brand’s excellence.
                    </p>
                  </>
                }
              />
            </motion.div>

            {/* Step 5 */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <MarketingStep
                title="Post-Production & Editing"
                alt="Professional video production services for corporate events"
                image="/images/VidProd6.webp"
                // The magic happens in post-production. Our editors add the right pacing, colour grading, motion graphics, and sound design to create a polished final product. This is where your video becomes dynamic, engaging, and ready for multiple platforms.
                content={
                  <>
                    <p>The magic happens in post-production. Our editors add :
                    </p>
                    <ul className="list-none mt-2 space-y-1">
                      {["Right Pacing", "Colour Grading", "Motion Graphics","Sound Design"].map(
                        (item) => (
                          <li
                            key={item}
                            className="flex items-start text-stone-600 font-bold"
                          >
                            <span className="mr-2 text-stone-600">☑</span>
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                    <p>to create a polished final product. This is where your video becomes dynamic, engaging, and ready for multiple platforms.</p>
                  </>
                }
              />
            </motion.div>

            {/* Step 6 */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <MarketingStep
                alt="Drone videography by top video production company in India"
                title="Review & Client Feedback "
                image="/images/VidProd7.webp"
                reverse
                content={
                  <>
                    <p>
                     Before final delivery, we share the video for your review. We value your feedback and make necessary changes to ensure it meets your vision. Our video production company is committed to delivering a product you’re proud to flaunt.
                    </p>
                  </>
                }
              />
            </motion.div>

            {/* Step 7 */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <MarketingStep
                title="Delivery & Distribution Support"
                alt="Team editing footage in video production company office"
                image="/images/VidProd8.webp"
                content={
                  <>
                    <p>
                   Once approved, we deliver your video in the formats you need, optimised for web, social media, or broadcast. We also guide you on distribution strategies so your content reaches the right audience and gets maximum engagement.
                    </p>
                  </>
                }
              />
            </motion.div>
          </main>
        </div>

        {/* Bottom Pattern Background - Optimized */}
        <div className="relative w-full h-[200px]">
          <Image
            alt="pattern image"
            src="/pattern2.png"
            fill
            className="object-cover"
            priority={false}
            sizes="100vw"
            quality={60} // Reduced quality for decorative pattern
          />
        </div>
      </div>
    </section>
  );
};

export default VidWorkflow;