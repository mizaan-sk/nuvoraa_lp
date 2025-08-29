import React, { JSX } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type ServiceItem = {
  id: string;
  imageSrc: string;
  description: JSX.Element;
};

const Cards = () => {
  const services: ServiceItem[] = [
    {
      id: "meta",
      imageSrc: "/images/Meta.webp",
      description: (
        <>
          Facebook <br /> Instagram Ads
        </>
      ),
    },
    {
      id: "google-ads",
      imageSrc: "/images/GoogleAds.webp",
      description: <>Search, Display, <br /> YouTube Ads</>,
    },
    {
      id: "linkedin",
      imageSrc: "/images/LinkdinAds.webp",
      description: <>B2B & Niche <br /> Marketing</>,
    },
    {
      id: "mobile-ads",
      imageSrc: "/images/MobileApps.webp",
      description: <>Mobile App <br /> Advertising Platforms</>,
    },
    {
      id: "programmatic",
      imageSrc: "/images/ProgrammaticAds.webp",
      description: <>Programmatic & Media<br />  Marketing Networks</>,
    },
  ];

  return (
  <section id="5">
      <div id="5" className=" bg-black py-2 md:py-10">
      <motion.div 
        className="flex flex-wrap w-full items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="flex flex-col "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut", 
              delay: index * 0.15 
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-[250px] h-[230px] relative">
              <Image
                src={service.imageSrc}
                alt={service.id}
                fill
                className="w-full h-full object-contain"
                sizes="250px"
              />
            </div>
            <p className=" font-normal text-center text-[#DFD9CD]">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
  );
};

export default Cards;