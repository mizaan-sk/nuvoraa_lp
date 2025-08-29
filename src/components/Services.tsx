"use client"
import React from 'react';
import { motion } from 'framer-motion';

const OurServices: React.FC = () => {
  const services = [
    { number: 1, name: 'PERFORMANCE MARKETING', background: 'bg-[#B15C41]', textColor: 'text-stone-200' },
    { number: 2, name: 'SOCIAL MEDIA MANAGEMENT', background: 'bg-stone-200', textColor: 'text-[#B15C41]' },
    { number: 3, name: 'SEARCH ENGINE OPTIMIZATION', background: 'bg-[#B15C41]', textColor: 'text-stone-200' },
    { number: 4, name: 'WEBSITE DESIGN AND DEVELOPMENT', background: 'bg-stone-200', textColor: 'text-[#B15C41]' },
    { number: 5, name: 'VIDEO PRODUCTION', background: 'bg-[#B15C41]', textColor: 'text-stone-200' }
  ];

  return (
    <section className="w-full bg-black text-white py-8 md:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 mb-8 md:mb-16">
        {/* Title animation */}
        <motion.p
          className="text-center text-white text-lg md:text-xl mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          (Our Services)
        </motion.p>

        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl text-center font-black mb-6 md:mb-8 leading-tight"
          style={{
            fontFamily: 'peckham',
            textShadow: '1px 1px 0px rgba(0,0,0,0.2)',
            letterSpacing: '-0.02em',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          SMART STRATEGIES.<br />
          POWERFUL RESULTS.
        </motion.h2>

        {/* Animated separator line */}
        <motion.div 
          className="w-full h-px bg-gray-600"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />
      </div>

      {/* Services List */}
      <div className="w-full space-y-4 md:space-y-6">
        {services.map((service, index) => (
          <ServiceStrip 
            key={index}
            service={service}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

// ServiceStrip with hover animation and background scale effect
const ServiceStrip: React.FC<{
  service: {
    number: number;
    name: string;
    background: string;
    textColor: string;
  };
  index: number;
}> = ({ service, index }) => {
  const variants = {
    hidden: { 
      x: index % 2 === 0 ? 200 : -200,
      opacity: 0
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 80,
        duration: 0.6,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={`w-full ${service.background} py-4 sm:py-6 md:py-8 transition-transform duration-200`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
          <motion.span 
            className={`text-3xl sm:text-4xl md:text-6xl opacity-90 ${service.textColor}`}
            style={{ 
              fontFamily: 'aurora',
              textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ 
              delay: index * 0.1 + 0.2,
              duration: 0.4
            }}
          >
            {service.number}.
          </motion.span>
          <motion.span 
            className={`text-xl sm:text-2xl md:text-3xl tracking-wide ${service.textColor}`}
            style={{ 
              fontFamily: 'aurora',
              textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ 
              delay: index * 0.1 + 0.3,
              duration: 0.4
            }}
          >
            {service.name}
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

export default OurServices;
