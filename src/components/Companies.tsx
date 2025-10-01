"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Companies: React.FC = () => {
  const logos = [
    "/logos/cprelogo.png",
    "/logos/grayquestlogo.png",
    "/logos/fms_logo.jpg",
    "/logos/Maplelogo.jpg",
    "/logos/makoons_logo.png",
    "/logos/guardianonelogo.png",
    "/logos/moh_logo.png",
    "/logos/radcliffe_logo.png",
  ];

  // Double logos (infinite seamless effect needs at least 2 sets)
  const extendedLogos = [...logos, ...logos];

  return (
    <div className="w-full bg-black py-9 sm:py-10 md:py-12 overflow-hidden">
      <div className="relative w-full">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 w-16 sm:w-24 md:w-28 h-full bg-gradient-to-r from-black via-black/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-16 sm:w-24 md:w-28 h-full bg-gradient-to-l from-black via-black/90 to-transparent z-10 pointer-events-none" />

        {/* Motion wrapper */}
        <motion.div
          className="flex w-max gap-12 sm:gap-16 md:gap-20 lg:gap-24"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 15, // speed (lower = faster, e.g. 10)
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {extendedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center w-32 sm:w-40 md:w-48 lg:w-56 xl:w-60 h-20 sm:h-24 md:h-28 lg:h-32"
            >
              <Image
                src={logo}
                alt={`Company logo ${(index % logos.length) + 1}`}
                width={240}
                height={120}
                className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 brightness-90 hover:brightness-100"
                priority={index < logos.length}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Companies;
