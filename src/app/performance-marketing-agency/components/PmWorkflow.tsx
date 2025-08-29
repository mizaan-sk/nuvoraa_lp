"use client";

import type React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MarketingStep from "./MarketingStep";

// Main PmWorkflow Component
const PmWorkflow: React.FC = () => {
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
            Our performance marketing workflow
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
                title="Clear, ROI-Focused Goal Setting"
                alt="Clear,Focused Goal Setting"
                image="/images/pm2_image.webp"
                content={
                  <>
                    <p>
                      We begin by understanding what success looks like for your
                      business. Is it more sales? Qualified leads? Mobile app
                      installs?
                    </p>
                    <p>
                      Our job as your performance marketing agency is to set
                      clear, data-backed goals with trackable KPIs. We avoid
                      guesswork and fluff—only real results matter. You&apos;ll
                      always know where your money is going and what it&apos;s
                      bringing in.
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
                alt="Market Research + Audience Mapping"
                title="Market Research + Audience Mapping"
                image="/images/pm3_image.webp"
                reverse
                content={
                  <>
                    <p>
                      Before launching any campaign, we go deep into research.
                      Our DIGITAL marketing agency experts analyze:
                    </p>
                    <ul className="list-none mt-2 space-y-1">
                      {[
                        "Your customer behavior",
                        "Competitor ad strategies",
                        "Market trends across platforms",
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
                      We map your ideal audience and identify the most effective
                      channels to reach them—whether that&apos;s Google Ads,
                      Meta (Instagram + Facebook), YouTube, LinkedIn, or
                      programmatic platforms.
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
                title="Paid Media Strategy & Funnel"
                alt="Paid Media Strategy & Funnel"
                image="/images/pm4_image.webp"
                content={
                  <>
                    <p>
                      A good campaign isn&apos;t just about ads—it&apos;s about
                      building a full-funnel experience. We structure journeys
                      from top-of-funnel awareness to bottom-of-funnel
                      conversions, using:
                    </p>
                    <ul className="list-none mt-2 space-y-1">
                      {[
                        "Targeted ad types for every stage",
                        "Compelling messaging",
                        "Smart segmentation",
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
                      Our approach as a performance marketing agency ensures
                      that your customers move smoothly through the buying
                      journey, resulting in higher conversions and stronger ROI.
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
                alt="High-Performance Creative Development"
                title="High-Performance Creative Development"
                image="/images/pm5_image.webp"
                reverse
                content={
                  <>
                    <p>
                      In performance marketing, creativity can make or break
                      your campaign. At Nuvoraa, we create scroll-stopping ad
                      visuals, test multiple versions (A/B testing), and write
                      sharp, actionable copy that drives clicks and sales.
                    </p>
                    <p>
                      We also develop human-led ABCD-focused performance
                      marketing reels, short-form content designed to entertain,
                      connect emotionally, and drive action. It&apos;s not just
                      about looking good; it&apos;s about performing well.
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
                title="Ad Launch + Technical Setup"
                alt="Nuvoraa’s performance marketing agency approach"
                image="/images/pm6_image.webp"
                content={
                  <>
                    <p>
                      Execution matters. Our tech team ensures every piece of
                      your campaign is tracked and measured. This includes:
                    </p>
                    <ul className="list-none mt-2 space-y-1">
                      {[
                        "Pixel & UTM tracking",
                        "Platform integrations (Google, Meta, etc.)",
                        "Offline conversion integration",
                        "Conversion API setup",
                        "Enhanced conversion tracking",
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
                      With this thorough technical setup, your performance
                      marketing services stay fully transparent and
                      efficient—making sure every dollar works hard for your
                      business.
                    </p>
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
                alt="Media marketing agency"
                title="Continuous Optimization & A/B Testing"
                image="/images/pm7_image.webp"
                reverse
                content={
                  <>
                    <p>
                      We don&apos;t believe in set it and forget it. Once your
                      campaign goes live, we monitor it daily. Our team:
                    </p>
                    <ul className="list-none mt-2 space-y-1">
                      {[
                        "Tweaks targeting",
                        "Tests new creatives",
                        "Adjusts bidding strategies",
                        "Reduces CPC (cost per click)",
                        "Lowers CPA (cost per acquisition)",
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
                      As a media marketing agency, we&apos;re obsessed with
                      performance and that means constantly improving it.
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
                title="Landing Page Optimization"
                alt="Best ppc agency"
                image="/images/pm8_image.webp"
                content={
                  <>
                    <p>
                      As a skilled performance marketing agency, we know that
                      great ads need great landing pages. We design and optimize
                      landing pages that help boost your lead generation
                      services by making it easy for visitors to take action.
                      Fast loading, clear messaging, and strong calls-to-action
                      ensure your campaigns get the best results.
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
                title="Transparent Reporting & Insights"
                alt="best media buying agency"
                image="/images/pm9_image.webp"
                reverse
                content={
                  <>
                    <p>
                      Every week or month, you’ll get clear reports with real
                      insights – not just graphs and numbers, but explanations
                      you can actually understand.
                    </p>
                    <p>
                      We break down what’s working, what’s not, and what we’re
                      doing next. As your performance marketing partner, we
                      ensure full visibility and honesty.
                    </p>
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

export default PmWorkflow;
