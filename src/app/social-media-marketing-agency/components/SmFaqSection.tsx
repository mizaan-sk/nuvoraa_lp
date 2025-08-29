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
    question: "What does a social media marketing agency actually do?",
    answer:
      "A social media marketing agency helps businesses build, manage, and grow their presence on platforms like Instagram, Facebook, LinkedIn, and more. A professional social media marketing agency handles everything from strategy, content creation, and community management to paid ads, influencer collaborations, and performance tracking.",
  },
  {
    question:
      "Why should I hire a social media marketing agency instead of handling it in-house?",
    answer:
      "Partnering with a social media marketing agency gives you access to experts, tools, and proven strategies without the overhead of building a full in-house team. A social media agency brings creative talent, platform insights, paid ad expertise, and data-driven decision-making — ensuring your social media marketing services deliver real ROI.",
  },
  {
    question: "What makes Nuvoraa Digital a reliable social media marketing agency?",
    answer:
      "Nuvoraa Digitals stands out as a results-driven social media marketing agency because we combine creativity, performance marketing, and deep audience understanding. Our social media marketing services are customized to your brand, backed by transparent reporting, and focused on driving measurable business outcomes.",
  },
  {
    question: "What platforms do your social media marketing services cover?",
    answer:
      "As a full-service social media marketing agency, we manage campaigns across:\n\n• Instagram\n• Facebook\n• LinkedIn\n• YouTube\n• Twitter (X)\n\nOur social media agency tailors platform strategies to your industry, audience, and goals.",
  },
  {
    question: "Can your social media agency help with paid advertising?",
    answer:
      "Absolutely. Paid social media campaigns are a core part of our social media marketing services. Our social media marketing agency handles ad strategy, targeting, creative production, budget optimization, and performance tracking to ensure maximum return on investment.",
  },
  {
    question: "How soon can I see results with your social media marketing services?",
    answer:
      "While results depend on your goals and platforms, most brands see measurable improvements within 8–12 weeks of working with a professional social media marketing agency like Nuvoraa. Our social media agency tracks progress through key metrics like engagement, follower growth, website traffic, and conversions.",
  },
  {
    question: "Do your social media marketing services include content creation?",
    answer:
      "Yes. As a creative-led social media marketing agency, we handle content strategy, copywriting, design, video production, and scheduling. Our social media agency ensures your content is aligned with your brand voice and optimized for each platform.",
  },
  {
    question: "How much do social media marketing services cost?",
    answer:
      "Our social media marketing agency offers flexible packages based on your business size, platform needs, and growth objectives. We provide transparent pricing after a discovery call to ensure our social media marketing services match your budget and goals.",
  },
  {
    question: "Can your social media agency manage influencer marketing?",
    answer:
      "Yes, influencer marketing is a key part of our social media marketing services. Our social media marketing agency handles influencer identification, outreach, collaboration, and performance measurement — helping you build authentic partnerships that drive results.",
  },
  {
    question: "How do I get started with Nuvoraa as my social media marketing agency?",
    answer:
      "It’s easy to get started with Nuvoraa Digitals as your trusted social media marketing agency. Simply:\n\n• Book a free strategy consultation\n• Receive a tailored proposal for social media marketing services\n• Let our social media agency handle the strategy, content, ads, and growth.",
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
              className="text-[#E0D9CD] w-full md:pb-21 max-w-[120px] h-10 underline cursor-pointer text-sm font-medium hover:opacity-80 transition duration-300"
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
