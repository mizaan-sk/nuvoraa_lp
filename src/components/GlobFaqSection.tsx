"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Faq {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title: string;
  faqs: Faq[];
  imageSrc?: string;
  imageAlt?: string;
  id?: string;
}

const GlobFaqSection: React.FC<FaqSectionProps> = ({
  title,
  faqs,
  imageSrc,
  imageAlt,
  id = "faq",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section
      id={id}
      className="bg-black text-white px-4 md:px-10 lg:px-20 pb-20 max-w-6xl mx-auto"
    >
      <motion.h2
        className="text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#E0D9CD] font-peckham py-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {title}
      </motion.h2>

      <div className="lg:grid lg:grid-cols-2 gap-8 flex flex-col items-center">
        <motion.div
          className="space-y-2 w-full lg:pb-0 pb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {displayedFaqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-[#f1e8e1] text-black rounded-2xl px-4 py-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.3 + index * 0.1,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-left font-medium text-base md:text-[16px]"
              >
                {faq.question}
                <ChevronDown
                  className={`h-6 w-6 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="mt-2 text-sm md:text-[13px] text-gray-800 transition-all duration-300 whitespace-pre-line">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}

          <div className="flex justify-center pt-2">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-[#E0D9CD] w-full md:pb-21 max-w-[120px] h-10 underline cursor-pointer text-sm font-medium hover:opacity-80 transition duration-300"
            >
              {showAll ? "Know Less" : "Know More"}
            </button>
          </div>
        </motion.div>

        {imageSrc && (
          <motion.div
            className="hidden lg:flex relative top-[100px] justify-center items-end"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt || "FAQ Illustration"}
              width={700}
              height={500}
              className="h-full w-full object-contain"
              priority
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GlobFaqSection;
