"use client";
// Example usage in a page component
import MarketingServices from "./components/screamSection";
import { motion } from "framer-motion"; // Remove useScroll and useSpring imports
import Footer from "./components/creamFooter";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import RingCursor from "@/components/RingCursor";
import Link from "next/link";

export default function ServicesPage() {
  // Ref for the auto-scrolling container
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Keep only the smooth scrolling effect
  useEffect(() => {
    // Add smooth scroll behavior to html element
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      // Clean up when component unmounts
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  // Auto-scrolling effect for the performance marketing mobile view
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || window.innerWidth >= 768) return; // Only apply on mobile

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Pixels per frame

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed;

        // Reset when reaching the end (with some buffer)
        if (
          scrollPosition >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollPosition = 0;
        }

        scrollContainer.scrollLeft = scrollPosition;
        animationFrameId = requestAnimationFrame(scroll);
      }
    };

    // Start scrolling
    animationFrameId = requestAnimationFrame(scroll);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  const seoServices = [
    {
      title: "E-commerce\nSEO",
      description:
        "Improve product rankings, enhance user experience, and increase revenue with tailored SEO strategies for online stores.",
      image: "/images/a5.jpg",
    },
    {
      title: "SEO for \nBusinesses",
      description:
        "Strengthen your brand's digital presence with SEO solutions that generate leads, boost conversions, and maximize ROI.",
      image: "/images/a5.jpg",
    },
    {
      title: "Technical\nSEO",
      description:
        "Optimize crawlability, indexability, site speed, and structured data to enhance search rankings and user experience.",
      image: "/images/a5.jpg",
    },
    {
      title: "Authority Building",
      description:
        "Boost your website's credibility and rankings with high-quality backlinks, strategic outreach, and authoritative link-building techniques. ",
      image: "/images/a5.jpg",
    },
  ];

  const webDevServices = [
    {
      title: "Social Media Strategy",
      description:
        "Leverage insights, trends, and audience behavior to create a compelling and results-driven social presence.",
      image: "/images/a1.jpg",
    },
    {
      title: "Profile Optimization",
      description:
        "Improve brand perception and discoverability with a professionally optimized profile tailored for your audience.",
      image: "/images/a1.jpg",
    },
    {
      title: "Influencer Collaboration ",
      description:
        "Connecting with the right influencers to amplify your brand's message, boost credibility, and drive conversions.",
      image: "/images/a1.jpg",
    },
    {
      title: "Reputation Management",
      description:
        "Monitoring brand mentions, handling reviews, and maintaining a positive brand image.",
      image: "/images/a1.jpg",
    },
  ];

  const brandingServices = [
    {
      title: "UI/UX\nDesign",
      description:
        "Create intuitive, visually stunning, and user-friendly digital experiences through seamless interface design, user research, and interactive prototyping to enhance engagement and conversions.",
      image: "/images/a4.png",
    },
    {
      title: "Customised Website",
      description:
        "Develop a tailor-made website designed to fit your brand's unique needs, ensuring seamless functionality, scalability, and a user-centric experience for maximum impact.",
      image: "/images/a4.png",
    },
    {
      title: "Landing Page\n  Design",
      description:
        "Craft high-converting landing pages with compelling visuals, persuasive copy, and optimized layouts to drive engagement, lead generation, and sales.",
      image: "/images/a4.png",
    },
    {
      title: "Custom Web Applications",
      description:
        "Develop scalable, high-performance web applications tailored to your business needs, integrating advanced functionality, seamless user experience, and secure architecture.",
      image: "/images/a4.png",
    },
  ];

  const advertisingServices = [
    {
      title: "Ad \nFilms",
      description:
        "Create compelling, high-impact advertisement films that capture attention, tell your brand story, and drive engagement across digital and broadcast platforms.",
      image: "/images/a6.jpg",
    },
    {
      title: "Corporate \nAV",
      description:
        "Professionally crafted corporate audiovisual content that showcases your brand's vision, values, and achievements through engaging storytelling and high-quality production.",
      image: "/images/a6.jpg",
    },
    {
      title: "ABCD-led Storytelling",
      description:
        "A strategic narrative framework that ensures impactful and engaging communication by focusing on four key elements: Attract, Brand, Connect and Direct",
      image: "/images/a6.jpg",
    },
    {
      title: "Promotional Video",
      description:
        "From product launches to brand storytelling, our expertly crafted videos are designed to captivate, inspire, and drive action whether for social media, websites, or ad campaigns",
      image: "/images/a6.jpg",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const socialMediaServices = [
    {
      title: "Revenue-Driven Ecommerce",
      description:
        "Boost sales and profitability with intelligent AI-driven strategies that optimize conversions and drive scalable growth",
      image: "/images/a2.png",
    },
    {
      title: "AI-Driven \nLead Generation",
      description:
        "Harness AI-powered insights to attract, qualify, and convert high-value leads with precision and efficiency",
      image: "/images/a2.png",
    },
    {
      title: "Brand Awareness",
      description:
        "Make your brand unforgettable with strategic exposure and meaningful audience connections.",
      image: "/images/a2.png",
    },
    {
      title: "High Intent App Installs",
      description:
        "Drive installs that go beyond downloads—focus on users who take meaningful actions.",
      image: "/images/a2.png",
    },
  ];

  return (
    <main>
      {/* Direct implementation of first black component */}
      <section className="relative w-full bg-black" id="3">
        <RingCursor />
        <div className="w-full py-10 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20 relative z-20 max-w-7xl mx-auto bg-black">
          {/* Main Title */}
          <motion.div
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-8 mt-40 md:mb-16 "
          >
            <p className="text-white mb-20">(What we can do)</p>
            <Link href="/performance-marketing-agency">
              <h2 className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#E0D9CD] font-peckham cursor-pointer ">
                Performance Marketing
              </h2>
            </Link>
          </motion.div>

          {/* Services Grid - Desktop View */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6"
          >
            {socialMediaServices.map((service, index) => (
              <motion.div
                key={`desktop-${index}`}
                variants={itemVariants}
                className="flex flex-col"
              >
                {/* Image component replacing placeholder */}
                <div className="w-24 h-24 mb-6 overflow-hidden rounded-md relative">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={`${service.title} image`}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="bg-gray-200 w-full h-full"></div>
                  )}
                </div>

                {/* Service Title */}
                <h3 className="text-xl mb-3 uppercase tracking-wide text-[#E0D9CD]">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-[#E0D9CD] opacity-80 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
            <motion.div
              variants={itemVariants}
              className="col-span-full flex justify-center mt-4"
            >
              <Link
                href="/performance-marketing-agency"
                className="group relative inline-flex items-center justify-center px-5 py-[10px] overflow-hidden font-peckham text-sm font-medium transition-all duration-300 ease-in-out bg-[#E0D9CD] text-black hover:bg-[#d4cbbf] hover:shadow-lg rounded-full uppercase tracking-widest hover:scale-105 transform hover:-translate-y-1 shadow-md"
              >
                <span className="relative z-10 flex items-center">
                  Know More
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 rounded-full transition-all duration-300 bg-gradient-to-r from-[#E0D9CD] to-[#d4cbbf] opacity-0 group-hover:opacity-100"></div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile Scrollable View with auto-scrolling */}
          <div
            ref={scrollContainerRef}
            className="md:hidden overflow-x-auto pb-6 -mx-4 px-4 hide-scrollbar"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div className="flex space-x-6" style={{ minWidth: "max-content" }}>
              {socialMediaServices.map((service, index) => (
                <motion.div
                  key={`mobile-${index}`}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-col w-[260px] flex-shrink-0"
                >
                  {/* Image component */}
                  <div className="w-24 h-24 mb-4 overflow-hidden rounded-md relative">
                    {service.image ? (
                      <Image
                        src={service.image}
                        alt={`${service.title} image`}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="bg-gray-200 w-full h-full"></div>
                    )}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl mb-3 uppercase tracking-wide text-[#E0D9CD]">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-[#E0D9CD] opacity-80 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center justify-center mt-8">
            <Link
              href="/performance-marketing-agency"
              className="group relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-peckham text-sm font-medium transition-all duration-300 ease-in-out bg-[#E0D9CD] text-black hover:bg-[#d4cbbf] hover:shadow-lg rounded-full uppercase tracking-widest hover:scale-105 transform hover:-translate-y-1 shadow-md active:scale-95"
            >
              <span className="relative z-10 flex items-center">
                Know More
                <svg
                  className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 rounded-full transition-all duration-300 bg-gradient-to-r from-[#E0D9CD] to-[#d4cbbf] opacity-0 group-hover:opacity-100"></div>
            </Link>
          </div>

          <style jsx>{`
            .hide-scrollbar {
              -ms-overflow-style: none; /* IE and Edge */
              scrollbar-width: none; /* Firefox */
            }
            .hide-scrollbar::-webkit-scrollbar {
              display: none; /* Chrome, Safari and Opera */
            }
          `}</style>
        </div>
      </section>

      {/* Cream component second */}
      <section id="2">
        <MarketingServices
          mainTitle="SEARCH ENGINE OPTIMISATION"
          backgroundColor="bg-[#E0D9CD]"
          textColor="text-black"
          topBorderImage="/pattern.png"
          bottomBorderImage="/pattern2.png"
          services={seoServices}
          showKnowMore={true}
          knowMoreLink="/search-engine-optimization-agency"
          knowMoreText="Know More"
        />
      </section>

      {/* Black component third - no borders */}
      <section id="3">
        <MarketingServices
          mainTitle="Social Media Management"
          backgroundColor="bg-black"
          textColor="text-[#E0D9CD]"
          services={webDevServices}
          showKnowMore={true}
          knowMoreLink="/social-media-marketing-agency"
          knowMoreText="Know More"
        />
      </section>

      {/* Cream component fourth */}
      <section id="4">
        <MarketingServices
          mainTitle="Website Design  Development"
          backgroundColor="bg-[#E0D9CD]"
          textColor="text-black"
          topBorderImage="/pattern.png"
          bottomBorderImage="/pattern2.png"
          services={brandingServices}
          showKnowMore={true}
          knowMoreLink="/website-design-development-agency"
          knowMoreText="Know More"
        />
      </section>
      {/* Black component fifth - no borders */}
      <section id="3">
        <MarketingServices
          mainTitle="Video Production"
          backgroundColor="bg-black"
          textColor="text-[#E0D9CD]"
          services={advertisingServices}
          showKnowMore={true}
          knowMoreLink="/video-production-company-services"
          knowMoreText="Know More"
        />
      </section>

      <section id="2">
        <Footer topBorderImage="/pattern.png" />
      </section>
    </main>
  );
}
