"use client";

import type React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MarketingStep from "@/app/performance-marketing-agency/components/MarketingStep";

// Main PmWorkflow Component
const SmWorkflow: React.FC = () => {
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
        {/* Top Pattern Background */}
        <div className="relative w-full h-[200px]">
          <Image
            alt="pattern image"
            src="/pattern.png"
            fill
            className="object-cover"
            priority
            sizes="100vw"
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
            Our Social Media Workflow
          </motion.h2>

          <main className="pb-0 md:pb-5 lg:pb-10">
            {/* Step 1 */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <MarketingStep
                title="Discovery & Business Understanding"
                alt="Social Media Marketing Agency"
                image="/images/S2.webp"
                content={
                  <>
                    <p>
                      Every successful campaign starts with listening. As your
                      dedicated social media marketing agency, we take time to
                      understand your business, goals, and challenges. We dive
                      deep into your target audience, competitors, industry
                      trends, and current social presence.
                    </p>
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
                alt="Strategy Alignment & Planning"
                title="Social Media Agency"
                image="/images/S3.webp"
                reverse
                content={
                  <>
                    <p>
                      No guesswork here. Our social media marketing agency
                      develops a clear, data-driven roadmap tailored to your
                      business. We align on:
                    </p>
                    <ul className="list-none mt-2 space-y-1">
                      {[
                        "Content Pillars",
                        "Platform Selection",
                        "Posting Schedules",
                        "Campaign Objectives",
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
                    <p>Ensuring every post serves a purpose.</p>
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
                title="Content Creation & Approval"
                alt="Best Social Media Agency"
                image="/images/S4.webp"
                content={
                  <>
                    <p>
                      Creativity meets strategy. Our social media agency
                      produces:
                    </p>
                    <ul className="list-none mt-2 space-y-1">
                      {[
                        "High-Quality Content",
                        "Graphics to Reels",
                        "Carousels To Stories",
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
                    <p>
                      All designed to captivate your audience. You’ll have full
                      visibility and approval at every stage.
                    </p>
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
                alt="SMM agency in india"
                title="Social Media Profile Optimization"
                image="/images/S5.webp"
                reverse
                content={
                  <>
                    <p>
                      Before going live, our social media marketing agency
                      ensures your profiles are polished and optimized for
                      visibility, engagement, and conversions.
                    </p>
                    <p>From bios to CTAs, we make every element count.</p>
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
                title="Scheduling & Publishing"
                alt="Best social agency mumbai"
                image="/images/S6.webp"
                content={
                  <>
                    <p>
                      Consistency is key. As your trusted social media agency,
                      we handle scheduling and publishing across platforms like:
                    </p>
                    <ul className="list-none mt-2 space-y-1">
                      {[
                        "Instagram",
                        "Facebook",
                        "Linkedin",
                        "YouTube",
                        "X.com And More",
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
                    <p>Ensuring your brand stays active and visible.</p>
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
                alt="Nuvoraa Digital"
                title="Community Management & Engagement"
                image="/images/S7.webp"
                reverse
                content={
                  <>
                    <p>
                      Social media is a conversation, not a broadcast.Our social
                      media marketing agency actively monitors your:
                    </p>
                    <ul className="list-none mt-2 space-y-1">
                      {[
                        "Pages",
                        "Responds To Comments",
                        "Engages With Your Community",
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
                    <p>Building trust and loyalty.</p>
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
                title="Ongoing Optimization"
                alt="Nuvoraa Agency"
                image="/images/S9.webp"
                content={
                  <>
                    <p>
                      Social media never stands still, and neither do we. As
                      your proactive social media marketing agency, we
                      constantly test, adapt, and optimize your content, ads,
                      and strategy to stay ahead of trends and deliver
                      consistent results.
                    </p>
                  </>
                }
              />
            </motion.div>

            {/* Step 8 */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <MarketingStep
                alt="best Social media company"
                title="Performance Tracking & Reporting"
                image="/images/S8.webp"
                reverse
                content={
                  <>
                    <p>
                      We believe in results you can see. Our social media
                      marketing agency provides detailed monthly reports with
                      metrics like:
                    </p>
                    <ul className="list-none mt-2 space-y-1">
                      {[
                        "Engagement",
                        "Reach",
                        "Leads",
                        "And ROI"
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
                    <p>We track, analyze, and refine continuously.</p>
                  </>
                }
              />
            </motion.div>
          </main>
        </div>

        <div className="relative w-full h-[200px]">
          <Image
            alt="pattern image"
            src="/pattern2.png"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
};

export default SmWorkflow;
