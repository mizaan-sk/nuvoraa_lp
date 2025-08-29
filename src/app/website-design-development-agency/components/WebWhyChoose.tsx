"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const WebWhyChoose = () => {
  const [isH2Visible, setIsH2Visible] = useState(false);
  const [isPVisible, setIsPVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const h2Ref = useRef<HTMLHeadingElement>(null);

  const shortText = `Your website isn’t just your digital business card anymore; it’s your storefront, your sales pitch, and your first impression all rolled into one. That’s why, at Nuvoraa, we don’t just build websites, we craft digital experiences that your audience remembers and returns to.`;

  const fullText = `As a full-service website development company, we bring together smart design, modern tech, and a deep understanding of what actually works. Whether you're hunting for a web designing company or the right website development agency to bring your brand to life online, here’s why so many businesses choose us over other top web development agencies.
1. We Design for People First  
Good design isn’t just about aesthetics, it’s about helping users get what they came for, faster and better. As a web design and development agency, we create user journeys that feel natural and intuitive. Every click, scroll, and section is designed to guide your audience to the right action, be it making a purchase, filling out a form, or just enjoying the experience enough to come back again.
2. Custom Builds, No Cookie Cutters  
There’s nothing “one-size-fits-all” about your business, so why should your website be any different? As a website development agency, we build from the ground up, tailored to your goals and growth. From elegant WordPress sites to robust, enterprise-ready platforms, we develop websites that scale with you -  clean, custom code only.
3. Speed, SEO & Technical Perfection  
 A great website isn’t great if it takes forever to load or gets buried in search results. As a performance-focused website development company, we optimise for speed, mobile responsiveness, SEO-readiness, and accessibility from Day One. That means you don’t just look good online,  you’re found faster and perform better.
4. E-Commerce That Converts  
 Whether you’re building on Shopify, WooCommerce, or a custom CMS, our web development company knows what it takes to make online shopping smooth and secure. We create seamless experiences for your customers, from browsing to checkout to backend management - so you can focus on selling.
5. Built Around Collaboration  
 You know your business better than anyone - we’re just here to help translate that into digital. As a collaborative agency for website development, we bring you into every phase of the project. From discovery workshops to design reviews, you’ll always know where things stand. Clear milestones, faster feedback loops, and no jargon-filled surprises.
6. Mobile Comes First (Because It Has To)  
 More than half your visitors are likely on mobile. That’s why our web designing company prioritises responsive, mobile-first design that works flawlessly across devices. We don’t just “make it fit” - we design for the thumb, the scroll, and the on-the-go user experience.
7. You’re Supported Long After Launch  
A website is never “done,” and we don’t disappear after deployment. As your long-term website development company, we offer everything from maintenance and backups to hosting, security patches, and ongoing updates. We’re in it with you for the long haul.
8. We’ve Done This Before — Successfully  
 From small businesses to funded startups, our clients call us one of the top website development agencies for a reason. We build websites that not only look great but actually help businesses grow — with increased traffic, better engagement, and more qualified leads.
9. Smarter Sites Powered by AI  
Why settle for static when you can have smart? At Nuvoraa, we’re known for blending creativity with cutting-edge AI. Our web development services can include features like personalised content, intelligent chatbots, and predictive product recommendations — built right into your website.
10. Everything Ties Back to ROI  
 This isn’t just about having a nice-looking website. It’s about building something that delivers results - more inquiries, longer session times, better lead quality. As a web design and development agency that focuses on performance, we help you measure what matters and scale what works.
Conclusion  
 If you’re looking for a website development company that just ticks boxes, we’re probably not the one. But if you’re after a team that thinks like a strategic partner — one that brings together design, technology, and results - Nuvoraa might be exactly what you need. We don’t just develop websites. We build digital platforms that grow with you.  
Let’s build what’s next, together.
`;

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
              Why Choose Nuvoraa for Web Development{" "}
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
                className="group relative inline-flex border-none items-center justify-center px-4 py-2 overflow-hidden font-peckham text-sm font-medium transition-all duration-300 ease-in-out bg-[#E0D9CD] text-black hover:bg-[#d4cbbf] hover:shadow-lg rounded-full uppercase tracking-widest hover:scale-105 transform hover:-translate-y-1 shadow-md active:scale-95"
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

export default WebWhyChoose;
