"use client";

import type React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MarketingStep from "@/app/performance-marketing-agency/components/MarketingStep";

// Main SeoWorkflow Component
const SeoWorkflow: React.FC = () => {
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
            Our Search Engine Optimisation Workflow
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
                title="Let's Get to Know You (Discovery & Audit)"
                alt="Let's Get to Know You (Discovery & Audit)"
                image="/images/Seoimage2.webp"
                content={
                  <>
                    <p>
                      We kick things off by understanding your business, your
                      audience, and where your website currently stands. Think
                      of it like a health check - we look at what&apos;s working,
                      what&apos;s holding you back, and what your competitors are up
                      to.
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
                alt="Building the Right Plan (Strategy & Keyword Planning)"
                title="Building the Right Plan (Strategy & Keyword Planning)"
                image="/images/Seoimage3.webp"
                reverse
                content={
                  <>
                    <p>
                      Once we know where we&apos;re starting, we map out a plan. From
                      the right keywords to smart content ideas and technical
                      fixes, your SEO strategy is 100% tailored to your goals.
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
                title="Fixing What's Under the Hood (Technical SEO)"
                alt="Fixing What's Under the Hood (Technical SEO)"
                image="/images/Seoimage4.webp"
                content={
                  <>
                    <p>We take care of the behind-the-scenes stuff like :</p>
                    <ul className="list-none mt-2 space-y-1">
                      {[
                        "Speeding Up Your Site",
                        "Improving Mobile Experience",
                        "Making Sure Google Can Crawl And Index Your Pages Properly",
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
                alt="Building Your Reputation (Link Building & Off‑Page SEO)"
                title="Building Your Reputation (Link Building & Off‑Page SEO)"
                image="/images/Seoimage5.webp"
                reverse
                content={
                  <>
                    <p>
                      Through smart outreach and partnerships, we help you earn
                      high-quality backlinks that improve your credibility and
                      boost your rankings.
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
                title="Creating Content That Connects (Content Optimisation)"
                alt="Creating Content That Connects (Content Optimisation)"
                image="/images/Seoimage6.webp"
                content={
                  <>
                    <p>
                      We write and refine content that speaks to both your
                      audience and search engines like :
                    </p>
                    <ul className="list-none mt-2 space-y-1">
                      {["Blog Posts", "Landing Pages", "Product Copy"].map(
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
                    <p>Everything built to rank and convert.</p>
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
                alt="Keeping You in the Loop (Reporting & Refinement)"
                title="Keeping You in the Loop (Reporting & Refinement)"
                image="/images/Seoimage7.webp"
                reverse
                content={
                  <>
                    <p>
                      You&apos;ll always know what&apos;s happening. We share clear,
                      actionable reports every month and fine-tune your strategy
                      based on what&apos;s working best.
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
                title="Continuous Optimisation & Trend Adaptation"
                alt="Continuous Optimisation & Trend Adaptation"
                image="/images/Seoimage9.webp"
                content={
                  <>
                    <p>
                      SEO isn&apos;t set-it-and-forget-it and neither are we. As
                      search algorithms evolve and user behavior shifts, we
                      continuously update your strategy to stay ahead. Whether
                      it&apos;s adapting to Google&apos;s latest update or spotting a new
                      content opportunity, we make sure your brand stays visible
                      and competitive.
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
                alt="Collaboration & Support"
                title="Collaboration & Support"
                image="/images/Seoimage8.webp"
                reverse
                content={
                  <>
                    <p>
                      We see ourselves as an extension of your team. You&apos;ll have
                      a dedicated SEO specialist who&apos;s always just a message
                      away and ready to answer questions, share ideas, or talk
                      strategy. At Nuvoraa, we believe great results come from
                      great collaboration.
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

export default SeoWorkflow;