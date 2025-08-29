"use client"
// Example usage in a page component
import MarketingServices from '../digital-marketing-services/components/screamSection';
import { motion } from 'framer-motion';
import Footer from "../digital-marketing-services/components/creamFooter";
import Image from 'next/image';

export default function ServicesPage() {
  const seoServices = [
    {
      title: "E-commerce\nSEO",
      description: "Improve product rankings, enhance user experience, and increase revenue with tailored SEO strategies for online stores.",
      image: "/images/b2.png"
    },
    {
      title: "SEO for \nBusinesses",
      description: "Strengthen your brand's digital presence with SEO solutions that generate leads, boost conversions, and maximize ROI.",
      image: "/images/b2.png"
    },
    {
      title: "Technical\nSEO",
      description: "Optimize crawlability, indexability, site speed, and structured data to enhance search rankings and user experience.",
      image: "/images/b2.png"
    },
    {
      title: "Backlink and Authority Building",
      description: "Boost your website's credibility and rankings with high-quality backlinks, strategic outreach, and authoritative link-building techniques. ",
      image: "/images/b2.png"
    }
  ];

  const webDevServices = [
    {
        title: "Social Media Strategy",
        description: "Leverage insights, trends, and audience behavior to create a compelling and results-driven social presence.",
        image: "/images/b4.png"
      },
      {
        title: "Profile Optimization",
        description: "Improve brand perception and discoverability with a professionally optimized profile tailored for your audience.",
        image: "/images/b4.png"
      },
      {
        title: "Influencer Collaboration & Partnerships",
        description: "Connecting with the right influencers to amplify your brand's message, boost credibility, and drive conversions.",
        image: "/images/b4.png"
      },
      {
        title: "Reputation Management",
        description: "Monitoring brand mentions, handling reviews, and maintaining a positive brand image.",
        image: "/images/b4.png"
      }
  ];
  
  const brandingServices = [
    {
        title: "UI/UX\nDesign",
        description: "Create intuitive, visually stunning, and user-friendly digital experiences through seamless interface design, user research, and interactive prototyping to enhance engagement and conversions.",
        image: "/images/b3.png"
      },
      {
        title: "Customised Website",
        description: "Develop a tailor-made website designed to fit your brand's unique needs, ensuring seamless functionality, scalability, and a user-centric experience for maximum impact.",
        image: "/images/b3.png"
      },
      {
        title: "Landing\nPage\n  Design",
        description: "Craft high-converting landing pages with compelling visuals, persuasive copy, and optimized layouts to drive engagement, lead generation, and sales.",
        image:"/images/b3.png"
      },
      {
        title: "Custom \nWeb Applications",
        description: "Develop scalable, high-performance web applications tailored to your business needs, integrating advanced functionality, seamless user experience, and secure architecture.",
        image:"/images/b3.png"
      }    
  ];
  
  const advertisingServices = [
    {
        title: "Ad \nFilms",
        description: "Create compelling, high-impact advertisement films that capture attention, tell your brand story, and drive engagement across digital and broadcast platforms.",
        image: "/images/b5.png"
      },
      {
        title: "Corporate \nAV",
        description: "Professionally crafted corporate audiovisual content that showcases your brand's vision, values, and achievements through engaging storytelling and high-quality production.",
        image: "/images/b5.png"
      },
      {
        title: "ABCD-led Storytelling",
        description: "A strategic narrative framework that ensures impactful and engaging communication by focusing on four key elements: Attract, Brand, Connect and Direct",
        image: "/images/b5.png"
      },
      {
        title: "Promotional Video \nCreation",
        description: "From product launches to brand storytelling, our expertly crafted videos are designed to captivate, inspire, and drive action whether for social media, websites, or ad campaigns",
        image: "/images/b5.png"
      }
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
      description: "Boost sales and profitability with intelligent AI-driven strategies that optimize conversions, personalize customer experiences, and drive scalable growth",
      image: "/images/b0.png"
    },
    {
      title: "AI-Driven \nLead Generation",
      description: "Harness AI-powered insights to attract, qualify, and convert high-value leads with precision and efficiency",
      image: "/images/b0.png"
    },
    {
      title: "Targeted Brand Awareness",
      description: "Make your brand unforgettable with strategic exposure and meaningful audience connections.",
      image: "/images/b0.png"
    },
    {
      title: "High Intent App Installs",
      description: "Drive installs that go beyond downloads—focus on users who take meaningful actions.",
      image: "/images/b0.png"
    }
  ];

  return (
    <main >
      {/* Direct implementation of first black component */}
      <section className="relative w-full bg-black">
        <div className="w-full  py-10 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20 relative z-20 max-w-7xl mx-auto bg-black">
          {/* Main Title */}
          <motion.div
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-8 mt-40 md:mb-16 "
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white font-peckham">
            Performance Marketing
            </h2>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6"
          >
            {socialMediaServices.map((service, index) => (
              <motion.div
                key={index}
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
                <h3 className="text-xl mb-3 uppercase tracking-wide text-white">
                  {service.title}
                </h3>
                
                {/* Service Description */}
                <p className="text-white opacity-80 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Cream component second */}
      <section id='2'>
        <MarketingServices
        mainTitle="SEARCH ENGINE OPTIMISATION"
        backgroundColor="bg-[#E0D9CD]" 
        textColor="text-black"
        topBorderImage="/pattern.png"
        bottomBorderImage="/pattern2.png"
        services={seoServices}
      />
      </section>
      
      
      {/* Black component third - no borders */}
      <MarketingServices
        mainTitle="Social Media Management"
        backgroundColor="bg-black" 
        textColor="text-white"
        services={webDevServices}
      />
      
      {/* Cream component fourth */}
      <MarketingServices
        mainTitle="Website Design  Development"
        backgroundColor="bg-[#E0D9CD]" 
        textColor="text-black"
        topBorderImage="/pattern.png"
        bottomBorderImage="/pattern2.png"
        services={brandingServices}
      />
      
      {/* Black component fifth - no borders */}
      <MarketingServices
        mainTitle="Video Production"
        
        backgroundColor="bg-black" 
        textColor="text-white"
        services={advertisingServices}
      />

       <Footer  topBorderImage="/pattern.png" /> 
    
    </main>
  );
}