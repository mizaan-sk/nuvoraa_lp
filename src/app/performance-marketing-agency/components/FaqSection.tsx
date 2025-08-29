"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Faq {
  question: string;
  answer: string;
}

const faqs: Faq[] = [
  {
    question: "Why choose Nuvoraa as your performance marketing agency?",
    answer:
      "At Nuvoraa, we don’t just run ads — we treat your brand like our own. Our team blends smart strategy with sharp creativity to drive results that matter: more leads, more sales, more growth. No jargon, no fluff just honest work, clear numbers, and a deep commitment to your success.",
  },
  {
    question: "What is performance marketing, and how can it help my business?",
    answer:
      "Performance marketing is a ROI-focused digital marketing strategy where you only pay for measurable actions—like clicks, leads, app installs, or sales. At Nuvoraa, we use data-driven insights to run smarter campaigns that maximize conversions and minimize ad spend.",
  },
  {
    question: "Which platforms do you run performance marketing campaigns on?",
    answer:
      "We run campaigns on Meta (Facebook, Instagram), Google Ads, YouTube, LinkedIn, programmatic networks, mobile app platforms, Bing, media buying channels, and affiliates—wherever your audience is and ROI is optimal.",
  },
  {
    question:
      "Can you help me switch from regular digital marketing to performance marketing?",
    answer:
      "Absolutely. We audit your current strategy, build full-funnel campaigns, and align them with your business goals for a smooth, ROI-driven transition.",
  },
  {
    question:
      "What industries do you serve with your performance marketing services?",
    answer:
      "We serve e-commerce, D2C, SaaS, mobile apps, healthcare, finance, education, travel, B2B services, and media companies focused on measurable growth.",
  },
  {
    question: "Is performance marketing better than traditional digital marketing?",
    answer:
      "Yes. You only pay for actions (not impressions), and everything is tracked and optimized for results—like leads, installs, and purchases.",
  },
  {
    question:
      "What kind of results can I expect from Nuvoraa's performance marketing services?",
    answer:
      "Expect reduced CAC (up to 35%), increased ROAS (40–60%), qualified traffic growth (30–50%), and improved lead conversion (25–45%)—all focused on sustainable business growth.",
  },
  
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section
      id="3"
      className="bg-black text-white px-4 md:px-10 lg:px-20 pb-20 max-w-6xl mx-auto"
    >
      <motion.h2
        className="text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#E0D9CD] font-peckham py-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Frequently asked <br /> questions
      </motion.h2>

      <div className="lg:grid lg:grid-cols-2 gap-8 flex flex-col items-center">
        {/* FAQ List */}
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
                <div className="mt-2 text-sm md:text-[13px] text-gray-800 transition-all duration-300">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}

          <div className="flex justify-center pt-2">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-[#E0D9CD] w-full max-w-[120px] h-10 underline cursor-pointer text-sm font-medium hover:opacity-80 transition duration-300"
            >
              {showAll ? "Know Less" : "Know More"}
            </button>
          </div>
        </motion.div>

        {/* Image on large screens */}
        <motion.div
          className="hidden lg:flex relative top-[100px] justify-center items-end"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/images/faqgirl.webp"
            alt="FAQ Illustration"
            width={700}
            height={500}
            className="h-full w-full object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
