"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Companies: React.FC = () => {
  const logos = [
    { src: "/logos/cprelogo.png", pr: '0', invert: true },
    { src: "/logos/grayquestlogo.png", pr: '0', invert: true },
    { src: "/logos/Maplelogo.webp", pr: '0', invert: false },
    { src: "/logos/makoons_logo.png", pr: '20', invert: false },
    { src: "/logos/guardianonelogo.png", pr: '0', invert: true },
    { src: "/logos/moh_logo.png", pr: '0', invert: true },
    { src: "/logos/radcliffe_logo.png", pr: '10', invert: true },
    { src: "/logos/fms_logo.webp", pr: '0', invert: false },
  ];

  const extendedLogos = [...logos, ...logos];

  return (
    <div className="w-full bg-black py-9 sm:py-10 md:py-12 overflow-hidden">
      <div className="relative w-full">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 w-16 sm:w-24 md:w-28 h-full bg-gradient-to-r from-black via-black/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-16 sm:w-24 md:w-28 h-full bg-gradient-to-l from-black via-black/90 to-transparent z-10 pointer-events-none" />

        {/* Motion wrapper */}
        <motion.div
          className="flex w-max gap-12 sm:gap-16 md:gap-20 lg:gap-29"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
        >
          {extendedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center w-32 sm:w-40 md:w-48 lg:w-56 xl:w-60 h-20 sm:h-24 md:h-28 lg:h-32"
            >
            <Image
  src={logo.src}
  alt={`Company logo ${(index % logos.length) + 1}`}
  width={240}
  height={120}
  className={`w-full h-full object-contain transition-all duration-300 ${
    logo.src.includes("fms_logo") ? "opacity-80 hover:opacity-120" : "opacity-70 hover:opacity-100"
  }`}
  style={{
    paddingRight: `${logo.pr}px`,
    filter: logo.invert
      ? "brightness(0) saturate(100%) invert(95%) sepia(7%) saturate(30%) hue-rotate(15deg) brightness(101%) contrast(97%)"
      : logo.src.includes("fms_logo")
      ? "grayscale(100%) brightness(111%) contrast(57%)"
      : "grayscale(100%)",
  }}
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
