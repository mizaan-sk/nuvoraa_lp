"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Cards from "./Cards";

const RunAds: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const h2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -100px 0px", // Trigger before the element is fully visible
      }
    );

    const currentRef = h2Ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);


  return (
        <section id="4">
    <div className="bg-[#E0D9CD]">
      {/* Top decorative image - Fixed height and positioning */}
      <div className="relative w-full h-[120px] md:h-[150px] lg:h-[200px] -top-[120px]  lg:-top-[140px]  overflow-hidden">
        <Image
          alt="pattern image"
          src="/images/faqdownpatch.webp"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* Main content section */}
      <div className="bg-[#E0D9CD] overflow-hidden pb-8 md:pb-12 lg:pb-16 -mt-[90px] md:-mt-[50px] lg:-mt-[80px]">
        <h2
          ref={h2Ref}
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-black tracking-tight uppercase font-peckham transition-all duration-1000 ease-out ${
            isVisible
              ? "transform translate-y-0 opacity-100"
              : "transform translate-y-16 opacity-0"
          }`}
        >where we run your ads <span className="font-black md:text-[75px] text-[40px]" style={{ fontFamily: 'peckham, sans-serif' }}>?</span>
        </h2>
      </div>

      {/* Bottom decorative image - Fixed height and proper scaling */}
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
      <Cards/>
    </div></section>
  );
};

export default RunAds;
