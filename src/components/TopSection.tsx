"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  heading: string;
  imageSrc: string;
  imageAlt: string;
  paragraphs: string[];
}

const TopSection: React.FC<AnimatedSectionProps> = ({
  heading,
  imageSrc,
  imageAlt,
  paragraphs,
}) => {
  const [isH2Visible, setIsH2Visible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [visibleParagraphs, setVisibleParagraphs] = useState<boolean[]>(
    paragraphs.map(() => false)
  );

  const h2Ref = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h2Observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsH2Visible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);
          paragraphs.forEach((_, i) => {
            setTimeout(() => {
              setVisibleParagraphs((prev) => {
                const updated = [...prev];
                updated[i] = true;
                return updated;
              });
            }, (i + 1) * 200);
          });
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (h2Ref.current) h2Observer.observe(h2Ref.current);
    if (imageRef.current) imageObserver.observe(imageRef.current);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (h2Ref.current) h2Observer.unobserve(h2Ref.current);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (imageRef.current) imageObserver.unobserve(imageRef.current);
    };
  }, [paragraphs]);

  return (
    <section>
      <div className="md:mt-50 mt-40 overflow-hidden">
        <h1
          ref={h2Ref}
          className={`text-2xl px-1 text-center sm:text-3xl md:text-4xl lg:text-5xl/13 w-full max-w-[1050px] mx-auto tracking-[.3px] text-[#E0D9CD] font-peckham transition-all duration-1000 ease-out ${
            isH2Visible
              ? "transform translate-y-0 opacity-100"
              : "transform translate-y-16 opacity-0"
          }`}
        >
          {heading}
        </h1>

        <div className="max-w-7xl mx-auto flex flex-col md:px-1 px-3 py-9 md:py-20 lg:flex-row items-center gap-10">
          {/* Image */}
          <div
            ref={imageRef}
            className={`w-full px-3 md:px-1 lg:w-1/2 transition-all duration-1000 ease-out ${
              isImageVisible
                ? "transform translate-y-0 opacity-100"
                : "transform translate-y-16 opacity-0"
            }`}
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                quality={75}
                className="object-cover rounded-xl filter grayscale sepia-[0.1] contrast-[0.9] brightness-[1.01] transition duration-500 hover:grayscale-0 hover:sepia-[0.08] hover:contrast-[1.02] hover:brightness-[0.99]"
                priority={true}
                fetchPriority="high"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full px-2 md:px-2 lg:w-1/2 space-y-4">
            {paragraphs.map((text, idx) => (
              <p
                key={idx}
                className={`text-[16px] md:text-[18px] text-white transition-all font-medium duration-1000 ease-out ${
                  visibleParagraphs[idx]
                    ? "transform translate-y-0 opacity-100"
                    : "transform translate-y-16 opacity-0"
                }`}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;