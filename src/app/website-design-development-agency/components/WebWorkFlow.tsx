"use client";

import type React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MarketingStep from "@/app/performance-marketing-agency/components/MarketingStep";

// Main SeoWorkflow Component
const WebWorkflow: React.FC = () => {
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
             Our Website desgining Workflow 

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
                title="Discovery & Requirements Gathering"
                alt="Discovery & Requirements Gathering"
                image="/images/Webimage2.webp"
                content={
                  <>
                    <p>
                      Every great website starts with understanding what you need. As a website development partner, we kick things off with in-depth discovery sessions to get to know:
                    </p>
                      <ul className="list-none mt-2 space-y-1">
                      {[
                        "Your Brand",
                        "Your Goals",
                        "Your Audience",
                        "Your Voice",
                        "Your Competition",
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
                    <p>We dig into the details so that every feature on your site isn’t just there to look good, it’s there to work hard for your business.</p>
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
                alt="Information Architecture & UX Planning"
                title="Information Architecture & UX Planning"
                image="/images/Webimage3.webp"
                reverse
                content={
                  <>
                    <p>
                     Once we understand what your users are looking for, we map out how they’ll experience it. At our web design company, we focus on intuitive site maps and smart wireframes that guide users effortlessly through your site. Whether you’re a startup or a growing enterprise, we build with ease of use, accessibility, and conversions in mind so visitors don’t just browse, they take action.
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
                title="UI Design & Brand Integration"
                alt="UI Design & Brand Integration"
                image="/images/Webimage4.webp"
                content={
                  <>
                    <p>Next, our design team steps in to bring your brand to life visually. As a creative web design and development agency, we focus on more than just pixel-perfection, we craft experiences that connect emotionally. Every detail, from fonts and colors to animations and imagery, is thoughtfully chosen to reflect your brand and resonate with your audience. And of course, it all looks great (and works seamlessly) on every device.</p>
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
                alt="Custom Development & CMS Integration"
                title="Custom Development & CMS Integration"
                image="/images/Webimage5.webp"
                reverse
                content={
                  <>
                    <p>
                      Now we bring your design to life through code. As a top website development agency, we use the latest technologies to develop scalable, SEO-friendly websites. From custom WordPress builds to headless CMS or Shopify integrations, our developers ensure your site is lightning-fast, secure, and easy to manage. If you’re looking for a reliable agency for website development, this is where we shine.
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
                title="Testing & Quality Assurance"
                alt="Testing & Quality Assurance"
                image="/images/Webimage6.webp"
                content={
                  <>
                    <p>
                      Before we hit launch, your website goes through a full round of checks. We test everything :
                    </p>
                    <ul className="list-none mt-2 space-y-1">
                      {["Performance", "Responsiveness", "Browser Compatibility","How It Looks And Feels On Mobile"].map(
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
                    <p>Our team makes sure the code is clean, the loading speed is sharp, and all the technical boxes (like core web vitals) are ticked. Basically, we make sure bugs don’t stand a chance.</p>
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
                alt="Launch & Deployment"
                title="Launch & Deployment"
                image="/images/Webimage7.webp"
                reverse
                content={
                  <>
                    <p>
                      Once you give the green light, our team handles a seamless site deployment. As one of the top web development agencies, we ensure zero downtime and full performance monitoring during go-live. We also implement analytics tracking and SEO essentials, so your site is ready to perform from Day 1.
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
                title="Training & Handover"
                alt="Training & Handover"
                image="/images/Webimage8.webp"
                content={
                  <>
                    <p>
                      We don’t just launch your site and disappear. As a full-service website development agency, we provide admin training, CMS guides, and post-launch support so your internal team is confident managing the site. Need us for ongoing help? We’re just a message away.
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
                alt="Support, Optimisation & Scale"
                title="Support, Optimisation & Scale"
                image="/images/Webimage9.webp"
                reverse
                content={
                  <>
                    <p>
                   Even after launch, we stay involved to keep your site optimized and growing. From CRO enhancements to speed upgrades and feature rollouts -  our website development company offers ongoing maintenance packages to ensure your digital platform scales with your business.
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

export default WebWorkflow;