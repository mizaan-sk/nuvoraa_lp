"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const VidWhyChoose = () => {
  const [isH2Visible, setIsH2Visible] = useState(false);
  const [isPVisible, setIsPVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const h2Ref = useRef<HTMLHeadingElement>(null);

  const shortText = `In a world driven by motion and emotion, businesses need more than static content, they need stories that move. As a premier video production company, Nuvoraa merges creativity, strategy, and technical precision to produce videos that resonate and deliver.`;

  const fullText = ` Whether you're seeking standout video production services or partnering with a trusted production agency, here’s why clients call us the best in video storytelling.
1. Storytelling That Connects
Our foundation lies in powerful narratives. We’re more than a production house—we’re storytellers eager to articulate your brand’s core through authentic, audience-first stories.
2. End-to-end production expertise
From ideation to final cut, our video production services include concept creation, casting, directing, filming, sound design, motion graphics, and post-production.
3. High-End Production Quality
As a quality-driven video production company, we use high quality cameras, lighting, and sound equipment, ensuring your videos look cinematic, not DIY.
4. Versatility across Formats
Need a flagship brand film, social clips, internal AV, or animated content? Nuvoraa offers versatile video production services crafted for various objectives and platforms.
5. Emotion Meets Strategy
Every video we produce is designed with a purpose, be it awareness, engagement, conversion, or education. Impact isn’t an accident, it's intentional.
6. Measurable Results
Our video production services go beyond visuals. We integrate tracking, CTAs, and performance metrics so your videos align with business results, not just views.
7. Post-Launch Support & Revisions
Our work doesn’t stop at delivery. We manage revisions, format updates, and post-release enhancements helping you stay sharp and reusable.
8. Proven Success Across Verticals
Startups to enterprises, industries from tech to retail—our clients trust our video production company for storytelling that generates traffic, trust, and conversions.`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsH2Visible(true);
          setTimeout(() => setIsPVisible(true), 300);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    const currentRef = h2Ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <>
      <section id="2">
        <div className="bg-[#E0D9CD] text-center">
          <div className="relative w-full h-[120px] md:h-[150px] lg:h-[190px] -top-[120px]  lg:-top-[140px]  overflow-hidden">
            <Image
              alt="pattern image"
              src="/images/faqdownpatch.webp"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>
          <div className="flex flex-col gap-3 pb-5 -mt-[90px] md:-mt-[100px] md:pb-30 overflow-hidden">
            <h2
              ref={h2Ref}
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-black tracking-tight uppercase font-peckham py-0 md:py-6 transition-all duration-1000 ease-out ${
                isH2Visible
                  ? "transform translate-y-0 opacity-100"
                  : "transform translate-y-16 opacity-0"
              }`}
            >
              Why Choose Nuvoraa for Video Production Services
              <span
                className="font-black md:text-[65px] text-[35px]"
                style={{ fontFamily: "peckham, sans-serif" }}
              >
                ?
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
                  maxHeight: showMore ? "4000px" : "200px",
                }}
              >
                <p className="text-left whitespace-pre-line">
                  {shortText}
                  <span className="block">{showMore && fullText}</span>
                </p>
              </div>
            </div>

            {/* Read More / Less Button */}
            <div className="mt-4">
              <button
                onClick={() => setShowMore(!showMore)}
                className="group cursor-pointer relative inline-flex border-none items-center justify-center px-4 py-2 overflow-hidden font-peckham text-sm font-medium transition-all duration-300 ease-in-out bg-[#E0D9CD] text-black hover:bg-[#d4cbbf] hover:shadow-lg rounded-full uppercase tracking-widest hover:scale-105 transform hover:-translate-y-1 shadow-md active:scale-95"
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
          <div className="relative w-full h-[120px] md:h-[150px] lg:h-[180px] bg-[#E0D9CD] overflow-hidden">
            <Image
              alt="pattern image"
              src="/pattern2.png"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default VidWhyChoose;
