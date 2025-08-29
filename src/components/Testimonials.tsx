import React from 'react';
import Image from 'next/image';

interface TestimonialsProps {
  topBorderImage: string;
  bottomBorderImage: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({
  topBorderImage,
  bottomBorderImage
}) => {
  return (
    <section className="relative w-full">
      {/* Top Border */}
         <div className="w-full relative z-10 bg-[#E0D9CD]">
             <Image
               src={topBorderImage}
               alt="Top Decorative Border"
               width={1920}
               height={200}
               className="w-full h-auto mix-blend-multiply select-none pointer-events-none"
               style={{
                 display: 'block',
                 imageRendering: 'auto',
               }}
             />
           </div>

      {/* Main Content */}
      <div className="w-full bg-[#E0D9CD] py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm  text-black mb-20 font-semibold">(Testimonials)</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12" style={{
            fontFamily: 'aurora',
            textShadow: '1px 1px 0 rgba(0,0,0,0.2)',
            letterSpacing: '-0.02em'
          }}>
            WHAT OUR <br /> CLIENTS THINK
          </h2>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[1, 2].map((_, idx) => (
              <div key={idx} className="border p-4 bg-white text-left">
                <div className="w-full h-40 bg-gray-200 mb-4" /> {/* Placeholder for client image */}

                <p className="text-sm text-black mb-2">
                  Nuvoraa transformed our digital presence! Their AI-driven strategies boosted our engagement and sales like never before. Highly recommend!
                </p>
                <p className="text-sm text-black mb-2">
                  Nuvoraa transformed our digital presence! Their AI-driven strategies boosted our engagement and sales like never before. Highly recommend!
                </p>

                <div className="flex justify-between items-center mt-4">
                  <p className="text-lg  tracking-widest">RANGE ROVER</p>
                  <div className="bg-orange-500 p-2">
                    <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                      <path d="M14 3l1.41 1.41L8.83 11H20v2H8.83l6.58 6.59L14 21l-9-9z"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Border */}
        <div className="w-full relative z-10 bg-[#E0D9CD]">
                    <Image
                      src={bottomBorderImage}
                      alt="Bottom Decorative Border"
                      width={1920}
                      height={200}
                      className="w-full h-auto mix-blend-multiply select-none pointer-events-none"
                      style={{
                        display: 'block',
                        imageRendering: 'auto',
                      }}
                    />
                  </div>
    </section>
  );
};

export default Testimonials;
