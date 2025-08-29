'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const WhyChoose = () => {
  const [isH2Visible, setIsH2Visible] = useState(false);
  const [isPVisible, setIsPVisible] = useState(false);
  const h2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsH2Visible(true);
          // Trigger p animation with delay
          setTimeout(() => setIsPVisible(true), 300);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const currentH2Ref = h2Ref.current;

    if (currentH2Ref) {
      observer.observe(currentH2Ref);
    }

    return () => {
      if (currentH2Ref) {
        observer.unobserve(currentH2Ref);
      }
    };
  }, []);

  return (
    <>
      <section id="2">
        <div className="bg-[#E0D9CD] text-center">
        <div className="relative w-full h-[200px] bg-[#E0D9CD]">
          <Image
            alt="pattern image"
            src="/pattern.png"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="flex flex-col gap-3 pb-25 md:pb-30 overflow-hidden">
          <h2
            ref={h2Ref}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-black tracking-tight uppercase font-peckham py-0 md:py-6 transition-all duration-1000 ease-out ${
              isH2Visible
                ? "transform translate-y-0 opacity-100"
                : "transform translate-y-16 opacity-0"
            }`}
          >
            Why Choose Nuvoraa <span className="font-black md:text-[75px] text-[40px]" style={{ fontFamily: 'peckham, sans-serif' }}>?</span>
          </h2>
          <p
            className={`md:text-xl text-base px-1 text-black w-full max-w-6xl mx-auto transition-all duration-1000 ease-out ${
              isPVisible  
                ? "transform translate-y-0 opacity-100"
                : "transform translate-y-16 opacity-0"
            }`}
          >
            Partnering with Nuvoraa means you get a performance marketing agency
            that not only focuses on volume but also on delivering quality leads
            and measurable ROI through smart media marketing strategies and
            reliable lead generation services. Our goal is to turn your digital
            marketing efforts into a powerful engine for growth.
          </p>
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

export default WhyChoose;