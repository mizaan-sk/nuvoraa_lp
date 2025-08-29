"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface WhyChooseSectionProps {
  id?: string;
  heading?: string;
  highlight?: string;
  shortText: string;
  fullText?: string;
  topPatternImage: string;
  bottomPatternImage: string;
}

const GlobWhyChoose: React.FC<WhyChooseSectionProps> = ({
  id = "why-choose",
  heading = "Why Choose",
  highlight = "?",
  shortText,
  fullText = "",
  topPatternImage,
  bottomPatternImage,
}) => {
  const [isH2Visible, setIsH2Visible] = useState(false);
  const [isPVisible, setIsPVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const h2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsH2Visible(true);
          setTimeout(() => setIsPVisible(true), 300);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const currentRef = h2Ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section id={id}>
      <div className="bg-[#E0D9CD] text-center">
        {/* Top Pattern */}
        <div className="relative w-full h-[120px] md:h-[150px] lg:h-[210px] -top-[120px] lg:-top-[140px] overflow-hidden">
          <Image
            alt="top pattern"
            src={topPatternImage}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>

        {/* Heading & Content */}
        <div className="flex flex-col gap-3 pb-5 -mt-[60px] md:-mt-[100px] md:pb-30 overflow-hidden">
          <h2
            ref={h2Ref}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-black tracking-tight uppercase font-peckham py-0 md:py-6 transition-all duration-1000 ease-out ${
              isH2Visible
                ? "transform translate-y-0 opacity-100"
                : "transform translate-y-16 opacity-0"
            }`}
          >
            {heading}{" "}
            <span
              className="font-black md:text-[65px] text-[35px]"
              style={{ fontFamily: "peckham, sans-serif" }}
            >
              {highlight}
            </span>
          </h2>

          <div
            className={`md:text-xl text-base px-4 text-black w-full max-w-6xl mx-auto transition-all duration-1000 ease-out ${
              isPVisible
                ? "transform translate-y-0 opacity-100"
                : "transform translate-y-16 opacity-0"
            }`}
          >
            <div
              className={`overflow-hidden transition-[max-height] duration-700 ease-in-out`}
              style={{
                maxHeight: showMore ? "2000px" : "200px",
              }}
            >
              <p className="text-center">
                {shortText}
                <span className="block">{showMore && fullText}</span>
              </p>
            </div>
          </div>

          <div className="mt-4">
            <button
              onClick={() => setShowMore(!showMore)}
              className="group relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-peckham text-sm font-medium transition-all duration-300 ease-in-out bg-[#E0D9CD] text-black hover:bg-[#d4cbbf] hover:shadow-lg rounded-full uppercase tracking-widest hover:scale-105 transform hover:-translate-y-1 shadow-md active:scale-95"
            >
              <span className="relative z-10 flex items-center">
                {showMore ? "Read Less" : "Read More"}
                <svg
                  className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                    showMore
                      ? "rotate-180 group-hover:-translate-x-1"
                      : "group-hover:translate-x-1"
                  }`}
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
            </button>
          </div>
        </div>

        {/* Bottom Pattern */}
        <div className="relative w-full h-[120px] md:h-[150px] lg:h-[180px] bg-[#E0D9CD] overflow-hidden">
          <Image
            alt="bottom pattern"
            src={bottomPatternImage}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
};

export default GlobWhyChoose;
