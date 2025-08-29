"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SocialWhyChoose = () => {
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

    const currentH2Ref = h2Ref.current;
    if (currentH2Ref) observer.observe(currentH2Ref);
    return () => {
      if (currentH2Ref) observer.unobserve(currentH2Ref);
    };
  }, []);

  const shortText = `At Nuvoraa, we’re more than just a social media marketing agency — we’re seasoned experts in audience behavior, algorithm trends, and platform best practices. From Youtube trends to Instagram’s latest features, our team stays ahead. Our social media marketing services include everything from hashtag analysis to influencer partnerships tailored to your niche.`;

  const fullText = ` We blend analytics with creative content to ensure your content shines and performs. This is what sets our social media agency apart: every campaign is backed by data — impressions, engagement rate, shares, comments, views — and refined for peak impact. Our end‑to‑end social media marketing agency model means we handle everything: strategy, content, posting, community, ads, influencer management, and analytics. That allows you to focus on your core business while we grow your digital presence. You’ll receive a monthly report showing follower growth, engagement, boosting ROI, traffic, and views.

Our social media marketing services are performance‑measured — never guesswork. From ecommerce to SaaS, hospitality to healthcare, our social media agency tailors strategies that fit your brand, voice, and objectives. Whether you’re B2B or B2C, our social media marketing services align with your unique customer journey.

As part of a full digital marketing team, our social media marketing agency blends efforts with SEO, PPC, email, and website optimization — delivering cohesive growth across channels. We’ve scaled startups into market leaders and revitalized mature brands — always with measurable results. You get real, dedicated experts – strategists, creatives, community managers, and ad specialists – all aligned to your goals.

Our social media agency process is agile: rapid testing, fast iteration, real‑time reporting. We only run ads and content that align with your brand values. As a trusted social media marketing agency, we maintain compliance, transparency, and community trust in every campaign.

Whether you’re launching a new line or scaling internationally, our social media marketing services scale with you. We adapt to performance signals and evolving goals — always optimizing for ROI and growth. In summary, Nuvoraa is the social media marketing agency that marries data, creativity, and execution to fuel your social transformation — boosting brand visibility, engagement, and revenue.`;

  return (
    <section id="2">
      <div className="bg-[#E0D9CD] text-center">
        <div className="relative w-full h-[120px] md:h-[150px] lg:h-[210px] -top-[120px]  lg:-top-[140px]  overflow-hidden">
          <Image
            alt="pattern image"
            src="/images/faqdownpatch.webp"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>

        <div className="flex flex-col gap-3 pb-5 -mt-[60px] md:-mt-[100px] md:pb-30 overflow-hidden">
          <h2
            ref={h2Ref}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-black tracking-tight uppercase font-peckham py-0 md:py-6 transition-all duration-1000 ease-out ${
              isH2Visible
                ? "transform translate-y-0 opacity-100"
                : "transform translate-y-16 opacity-0"
            }`}
          >
            Why Choose Nuvoraa{" "}
            <span
              className="font-black md:text-[75px] text-[40px]"
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
                maxHeight: showMore ? "2000px" : "200px", // adjust heights as needed
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
  );
};

export default SocialWhyChoose;
