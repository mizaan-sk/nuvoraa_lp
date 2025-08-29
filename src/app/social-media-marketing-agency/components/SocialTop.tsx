"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const SocialTop: React.FC = () => {
  const [isH2Visible, setIsH2Visible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isP1Visible, setIsP1Visible] = useState(false);
  const [isP2Visible, setIsP2Visible] = useState(false);

  const h2Ref = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h2Observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsH2Visible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);
          // Trigger paragraphs with staggered delays
          setTimeout(() => setIsP1Visible(true), 200);
          setTimeout(() => setIsP2Visible(true), 400);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const currentH2Ref = h2Ref.current;
    const currentImageRef = imageRef.current;

    if (currentH2Ref) {
      h2Observer.observe(currentH2Ref);
    }

    if (currentImageRef) {
      imageObserver.observe(currentImageRef);
    }

    return () => {
      if (currentH2Ref) {
        h2Observer.unobserve(currentH2Ref);
      }
      if (currentImageRef) {
        imageObserver.unobserve(currentImageRef);
      }
    };
  }, []);

  return (
    <>
      {/* Performance Marketing Top Section Starts */}
      <section id="1">
        <div className="md:mt-50 mt-40 overflow-hidden">
          <h1
            ref={h2Ref}
            className={`text-2xl px-1 text-center sm:text-3xl md:text-4xl lg:text-5xl/13 w-full max-w-[1000px] mx-auto tracking-[.3px] text-[#E0D9CD] font-peckham transition-all duration-1000 ease-out ${
              isH2Visible
                ? "transform translate-y-0 opacity-100"
                : "transform translate-y-16 opacity-0"
            }`}
          >
            Power Your Brand with a Social Media Marketing Agency That Delivers
          </h1>

          {/* Image Text Combine Div Starts */}
          <div className="max-w-7xl mx-auto flex flex-col md:px-1 px-3 py-9 md:py-20 lg:flex-row items-center gap-10">
            {/* Image Section */}
            <div
              ref={imageRef}
              className={`w-full px-3 md:px-1 lg:w-1/2 transition-all duration-1000 ease-out ${
                isImageVisible
                  ? "transform translate-y-0 opacity-100"
                  : "transform translate-y-16 opacity-0"
              }`}
            >
              <div className="w-full overflow-hidden">
                <Image
                  src="/images/S1.webp"
                  alt="performance marketing agency"
                  className="relative z-10 w-full h-auto object-cover rounded-xl filter grayscale sepia-[0.1] contrast-[0.9] brightness-[1.01] transition duration-500 hover:grayscale-0 hover:sepia-[0.08] hover:contrast-[1.02] hover:brightness-[0.99]"
                  priority
                  width={400}
                  height={400}
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full px-2 md:px-2 lg:w-1/2 space-y-4">
              <p
                className={`text-[16px] md:text-[18px] text-white transition-all font-medium duration-1000 ease-out ${
                  isP1Visible
                    ? "transform translate-y-0 opacity-100"
                    : "transform translate-y-16 opacity-0"
                }`}
              >
                In today’s fast-paced digital world, building a strong,
                authentic social media presence isn’t optional — it’s essential.
                But true success goes beyond just posting pretty pictures. At
                Nuvoraa Digital, we’re not here to chase vanity metrics. We’re
                the social media marketing agency that helps your brand stand
                out, spark real conversations, and turn followers into loyal
                customers.
                {/* <span className="font-semibold">
                  performance marketing agency
                </span>{" "} */}
              </p>
              <p
                className={`text-[16px] md:text-[18px] text-white font-medium transition-all duration-1000 ease-out ${
                  isP2Visible
                    ? "transform translate-y-0 opacity-100"
                    : "transform translate-y-16 opacity-0"
                }`}
              >
                Our team blends creativity with data, strategy with execution,
                and storytelling with performance marketing — giving you more
                than just visibility. We help you build meaningful connections,
                grow your community, and drive business outcomes that matter.
              </p>
            </div>
          </div>
          {/* Image Text Combine Div Ends */}
        </div>
      </section>
      {/* Performance Marketing Top Section Ends */}
    </>
  );
};

export default SocialTop;
